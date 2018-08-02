import { Test, TestingModule } from '@nestjs/testing';
import { ItunesService } from './itunes.service';

describe('ItunesService', () => {
  let service: ItunesService;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ItunesService],
    }).compile();
    service = module.get<ItunesService>(ItunesService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
