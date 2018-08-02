import { Injectable, HttpService } from '@nestjs/common';
import { Base64 } from 'js-base64';
import * as qs from 'qs';
import { Observable, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { MusicSearchService } from './music-search.service';
import { Album } from './model/album';
import 'dotenv/config';

const SPOTIFY_SEARCH_API = 'https://api.spotify.com/v1/search';
const SPOTIFY_ACCOUNT_API = 'https://accounts.spotify.com/api/token';

@Injectable()
export class SpotifyService extends MusicSearchService {

    private ACCESS_TOKEN: string;

    constructor(private httpService: HttpService) {
        super();
    }

    private requestAccessToken(): Observable<string> {

        const auth = Base64.encode(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`);
        const data = qs.stringify({ 'grant_type': 'client_credentials' }); // workaround for Axios issue #362
        const headers = { 'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': `Basic ${auth}` };

        return this.httpService.post(SPOTIFY_ACCOUNT_API, data, { headers }).pipe(
            tap(response => this.ACCESS_TOKEN = response.data.access_token),
            map(response => response.data.access_token)
        );
    }

    private getAccessToken(): Observable<string> {
        return this.ACCESS_TOKEN ? of(this.ACCESS_TOKEN) : this.requestAccessToken();
    }

    searchAlbums(query: string): Observable<any> {

        const queryParam = query.toLowerCase().replace(' ', '%20');
        const typeParam = 'album';
        const url = `${SPOTIFY_SEARCH_API}?q=artist%3A${queryParam}&type=${typeParam}`;

        return this.getAccessToken().pipe(
            switchMap(token => this.httpService.get(url, { headers: { 'Authorization': `Bearer ${token}` } })),
            map(response => this.mapAlbumsResponse(response))
        );
    }

    mapAlbumsResponse(response: any): Album[] {

        const responseData = response.data.albums.items as any[];
        const albums: Album[] = [];

        responseData.forEach(dataObject => {
            albums.push({ title: dataObject.name, artworkUrl: dataObject.images[1].url });
        });

        return albums;
    }
}
