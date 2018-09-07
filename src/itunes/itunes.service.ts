import { Injectable, HttpService } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MusicSearchService } from '../music-search.service';
import { Album } from '../model/album';

export const ITUNES_BASE_API = 'https://itunes.apple.com/search';

@Injectable()
export class ITunesService extends MusicSearchService {

    constructor(private httpService: HttpService) {
        super();
    }

    searchAlbums(query: string): Observable<Album[]> {

        const termParam = query.toLowerCase().replace(' ', '+');
        const entityParam = 'album';
        const url = `${ITUNES_BASE_API}?term=${termParam}&entity=${entityParam}`;

        return this.httpService.get(url).pipe(
            map(response => this.mapAlbumsResponse(response))
        );
    }

    mapAlbumsResponse(response: any): Album[] {

        const responseData = response.data.results as any[];
        const albums: Album[] = [];

        responseData.forEach(dataObject => {
            albums.push({
                title: dataObject['collectionName'],
                year: (dataObject['releaseDate'] as string).substring(0, 4),
                artworkUrl: (dataObject['artworkUrl100'] as string).replace('100x100bb', '300x300bb')
            });
        });

        return albums;
    }
}
