import { Test, TestingModule } from '@nestjs/testing';
import { ApartamentoService } from './apartamento.service';

describe('ApartamentoService', () => {
  let service: ApartamentoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApartamentoService],
    }).compile();

    service = module.get<ApartamentoService>(ApartamentoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
