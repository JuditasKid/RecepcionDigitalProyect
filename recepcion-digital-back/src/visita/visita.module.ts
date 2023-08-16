import { Module } from '@nestjs/common';
import { VisitaService } from './visita.service';
import { VisitaController } from './visita.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Visita, VisitaSchema } from './entities/visita.entity';
import { VisitanteModule } from 'src/visitante/visitante.module';
import { ApartamentoModule } from 'src/apartamento/apartamento.module';

@Module({
  imports:[MongooseModule.forFeature([{
    name: Visita.name,
    schema: VisitaSchema,
  }]), VisitanteModule, ApartamentoModule],
  exports:[],
  controllers: [VisitaController],
  providers: [VisitaService]
})
export class VisitaModule {}
