import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CreateEdificioDto } from './dto/create-edificio.dto';
import { UpdateEdificioDto } from './dto/update-edificio.dto';
import { Edificio } from './entities/edificio.entity';

@Injectable()
export class EdificioService {

  constructor(
    @InjectModel(Edificio.name) private readonly edificioModel: Model<Edificio>
  ){}

  async create(createEdificioDto: CreateEdificioDto) {
    return await this.edificioModel.create(createEdificioDto);
  }

  async findAll() {
    return await this.edificioModel.find() 
    .populate("id_conjunto", ['nombre' ])
    .select('-__v')
    .exec();
  }

  async findOne(id: string) {
    try {
      const isValidId = Types.ObjectId.isValid(id);
      if(!isValidId) throw new BadRequestException('Se requieres un id valido');
      const edificio = await this.edificioModel.findById({_id: id});
      console.log('Info Edifico', edificio);
    } catch (error) {
      console.log(error);
    }
  }

  update(id: number, updateEdificioDto: UpdateEdificioDto) {
    return `This action updates a #${id} edificio`;
  }

  remove(id: number) {
    return `This action removes a #${id} edificio`;
  }


  async findByid(id){
    return await this.edificioModel.findOne({_id: id});
  }
}
