import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from './common/common.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ConjuntoModule } from './conjunto/conjunto.module';
import { EdificioModule } from './edificio/edificio.module';
import { ApartamentoModule } from './apartamento/apartamento.module';
import { VisitaModule } from './visita/visita.module';
import { VisitanteModule } from './visitante/visitante.module';

@Module({
  imports: [
    //ConfigModule.forRoot() sirve para cargar las variables de entorno a partir del .env
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URL, {autoIndex:true}),
    CommonModule,
    AuthModule,
    UserModule,
    ConjuntoModule,
    EdificioModule,
    ApartamentoModule,
    VisitaModule,
    VisitanteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
