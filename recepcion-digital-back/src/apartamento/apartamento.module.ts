import { Module } from '@nestjs/common';
import { ApartamentoService } from './apartamento.service';
import { ApartamentoController } from './apartamento.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Apartamento, ApartamentoSchema } from './entities/apartamento.entity';
import { EdificioService } from 'src/edificio/edificio.service';
import { EdificioModule } from 'src/edificio/edificio.module';
import { UserModule } from 'src/user/user.module';

@Module({
  imports:[MongooseModule.forFeature([{
    name: Apartamento.name,
    schema: ApartamentoSchema
  }]), EdificioModule, UserModule],
  exports:[ApartamentoService],
  controllers: [ApartamentoController],
  providers: [ApartamentoService],
})
export class ApartamentoModule {}
