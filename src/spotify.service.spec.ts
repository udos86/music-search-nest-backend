import { Test, TestingModule } from '@nestjs/testing';
import { HttpModule } from '@nestjs/common';
import { SpotifyService } from './spotify.service';

describe('SpotifyService', () => {
  let service: SpotifyService;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [SpotifyService],
    }).compile();
    service = module.get<SpotifyService>(SpotifyService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
