import { Test, TestingModule } from '@nestjs/testing';
import { DispararEmailController } from './disparar-email.controller';

describe('DispararEmailController', () => {
  let controller: DispararEmailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DispararEmailController],
    }).compile();

    controller = module.get<DispararEmailController>(DispararEmailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
