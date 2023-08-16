import { Test, TestingModule } from '@nestjs/testing';
import { ConjuntoService } from './conjunto.service';

describe('ConjuntoService', () => {
  let service: ConjuntoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConjuntoService],
    }).compile();

    service = module.get<ConjuntoService>(ConjuntoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
