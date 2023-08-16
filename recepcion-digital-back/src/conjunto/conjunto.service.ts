import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserService } from 'src/user/user.service';
import { CreateConjuntoDto } from './dto/create-conjunto.dto';
import { UpdateConjuntoDto } from './dto/update-conjunto.dto';
import { Conjunto } from './entities/conjunto.entity';

@Injectable()
export class ConjuntoService {

  constructor(
    @InjectModel(Conjunto.name) private readonly conjuntoModel: Model<Conjunto>,
    private readonly userService: UserService
  ){

  }
  async create(createConjuntoDto: CreateConjuntoDto): Promise<Conjunto> {
    try {      
      const conjunto = await await this.conjuntoModel.create(createConjuntoDto);
      const nuevo = await this.conjuntoModel.findOne({_id: conjunto._id})
      .populate("administrador")
      .select('-__v')
      .exec();
      console.log(nuevo);
      return nuevo;
    } catch (error) {
      this.handlerExceptions(error);
    }
  }

  async findAll() {
    return await this.conjuntoModel.find().populate("administrador", ['nombre', 'telefono'])
    .select('-__v')
    .exec();
  }

  async findOne(id: number) {
    return await this.conjuntoModel.findOne({_id: id}).populate("administrador", ['nombre', 'telefono'])
    .select('-__v')
    .exec();
  }

  update(id: number, updateConjuntoDto: UpdateConjuntoDto) {
    return `This action updates a #${id} conjunto`;
  }

  remove(id: number) {
    return `This action removes a #${id} conjunto`;
  }

  handlerExceptions(error: any) {
    console.log(error);
    if (error.code == 11000) {
      throw new BadRequestException(
        `${Object.keys(error.keyPattern)} ya existe`,
      );
    }
    throw new InternalServerErrorException(
      'Error interno del servidor. comunicate con el area',
    );
  }
}
