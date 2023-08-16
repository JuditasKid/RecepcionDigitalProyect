import { Module } from '@nestjs/common';
import { EdificioService } from './edificio.service';
import { EdificioController } from './edificio.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Edificio, EdificioSchema } from './entities/edificio.entity';
import { ConjuntoModule } from 'src/conjunto/conjunto.module';

@Module({
  controllers: [EdificioController],
  providers: [EdificioService],
  imports: [MongooseModule.forFeature([{name: Edificio.name, schema: EdificioSchema}]), ConjuntoModule,],
  exports: [EdificioService,],
})
export class EdificioModule {}
