import { Module } from '@nestjs/common';
import { ConjuntoService } from './conjunto.service';
import { ConjuntoController } from './conjunto.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Conjunto, ConjuntoSchema } from './entities/conjunto.entity';
import { UserService } from 'src/user/user.service';
import { UserModule } from 'src/user/user.module';

@Module({
  controllers: [ConjuntoController],
  providers: [ConjuntoService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Conjunto.name,
        schema: ConjuntoSchema,
      },
    ]), UserModule
  ],
  exports: [MongooseModule],
})
export class ConjuntoModule {}
