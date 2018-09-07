import { Test, TestingModule } from '@nestjs/testing';
import { HttpModule } from '@nestjs/common';
import { ITunesController } from './itunes.controller';
import { ITunesService } from './../itunes.service';

describe('Itunes Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [HttpModule],
      controllers: [ITunesController],
      providers: [ITunesService],
    }).compile();
  });
  it('should be defined', () => {
    const controller: ITunesController = module.get<ITunesController>(ITunesController);
    expect(controller).toBeDefined();
  });
});
