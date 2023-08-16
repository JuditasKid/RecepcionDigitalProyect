import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateVisitanteDto } from './dto/create-visitante.dto';
import { UpdateVisitanteDto } from './dto/update-visitante.dto';
import { Visitante } from './entities/visitante.entity';

@Injectable()
export class VisitanteService {

  constructor(@InjectModel(Visitante.name) private readonly visitanteModel: Model<Visitante>){}

  async create(createVisitanteDto: CreateVisitanteDto) {
    try {
      return await this.visitanteModel.create(createVisitanteDto);
    } catch (error) {
      this.handlerExceptions(error);
    }
  }
  
  async findAll() {
    return await this.visitanteModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} visitante`;
  }

  update(id: number, updateVisitanteDto: UpdateVisitanteDto) {
    return `This action updates a #${id} visitante`;
  }

  remove(id: number) {
    return `This action removes a #${id} visitante`;
  }


  handlerExceptions(error: any){

    

    if (error.code == 11000) {
      throw new BadRequestException(
        `${Object.keys(error.keyPattern)} ya existe`,
      );
    }
    throw new InternalServerErrorException(
      'Cada vez que cometo un error me parece descubrir una verdad que no conocía.'
    );
  }
}
