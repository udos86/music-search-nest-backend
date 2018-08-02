import { ITunesService } from './../itunes.service';
import { Controller, Get, Query } from '@nestjs/common';

@Controller('api/v1/itunes/search')
export class ITunesController {

  constructor(private iTunesService: ITunesService) { }

  @Get('albums')
  searchAlbumsByArtist(@Query('artist') artist: string) {
    return this.iTunesService.searchAlbums(artist);
  }
}
