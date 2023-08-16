import { Module } from '@nestjs/common';
import { VisitanteService } from './visitante.service';
import { VisitanteController } from './visitante.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Visitante, VisitanteSchema } from './entities/visitante.entity';

@Module({
  imports: [MongooseModule.forFeature([{
    name: Visitante.name,
    schema: VisitanteSchema
  }])],
  exports: [VisitanteService],
  controllers: [VisitanteController],
  providers: [VisitanteService]
})
export class VisitanteModule {}
