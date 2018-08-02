import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SpotifyController } from './spotify/spotify.controller';
import { ITunesController } from './itunes/itunes.controller';
import { ITunesService } from './itunes.service';
import { SpotifyService } from './spotify.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController, SpotifyController, ITunesController],
  providers: [AppService, ITunesService, SpotifyService],
})
export class AppModule {}
