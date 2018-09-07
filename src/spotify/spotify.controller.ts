import { Controller, Get, Query } from '@nestjs/common';
import { SpotifyService } from './spotify.service';

@Controller('api/v1/spotify/search')
export class SpotifyController {

  constructor(private spotifyService: SpotifyService) { }

  @Get('albums')
  searchAlbumsByArtist(@Query('artist') artist: string) {
    return this.spotifyService.searchAlbums(artist);
  }
}
