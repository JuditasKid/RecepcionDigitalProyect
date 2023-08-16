import { Test, TestingModule } from '@nestjs/testing';
import { ApartamentoController } from './apartamento.controller';
import { ApartamentoService } from './apartamento.service';

describe('ApartamentoController', () => {
  let controller: ApartamentoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApartamentoController],
      providers: [ApartamentoService],
    }).compile();

    controller = module.get<ApartamentoController>(ApartamentoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
