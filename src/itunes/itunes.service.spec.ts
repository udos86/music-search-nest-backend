import { Test, TestingModule } from '@nestjs/testing';
import { HttpModule } from '@nestjs/common';
import { ITunesService } from './itunes.service';

describe('ItunesService', () => {
  let service: ITunesService;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [ITunesService],
    }).compile();
    service = module.get<ITunesService>(ITunesService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
