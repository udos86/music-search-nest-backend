import { Test, TestingModule } from '@nestjs/testing';
import { SpotifyController } from './spotify.controller';

describe('Spotify Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [SpotifyController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: SpotifyController = module.get<SpotifyController>(SpotifyController);
    expect(controller).toBeDefined();
  });
});
