import { Test, TestingModule } from '@nestjs/testing';
import { HttpModule } from '@nestjs/common';
import { SpotifyController } from './spotify.controller';
import { SpotifyService } from '../spotify.service';

describe('Spotify Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [HttpModule],
      controllers: [SpotifyController],
      providers: [SpotifyService],
    }).compile();
  });
  it('should be defined', () => {
    const controller: SpotifyController = module.get<SpotifyController>(SpotifyController);
    expect(controller).toBeDefined();
  });
});
