import { Test, TestingModule } from '@nestjs/testing';
import { VisitaController } from './visita.controller';
import { VisitaService } from './visita.service';

describe('VisitaController', () => {
  let controller: VisitaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VisitaController],
      providers: [VisitaService],
    }).compile();

    controller = module.get<VisitaController>(VisitaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
