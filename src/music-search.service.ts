import { Observable } from "rxjs";

export enum MUSIC_SEARCH_TYPE {ALBUM = "album", ARTIST = "artist"};

export abstract class MusicSearchService {

    abstract searchAlbums(query: string): Observable<any>;

    abstract mapAlbumsResponse(response: any): any[];
}