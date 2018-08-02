import { Test, TestingModule } from '@nestjs/testing';
import { ItunesController } from './itunes.controller';

describe('Itunes Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [ItunesController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: ItunesController = module.get<ItunesController>(ItunesController);
    expect(controller).toBeDefined();
  });
});
