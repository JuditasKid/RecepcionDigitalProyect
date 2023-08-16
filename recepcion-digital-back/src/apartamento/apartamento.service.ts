import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/auth/entities/user.entity';
import { Roles } from 'src/auth/enums/roles.enum';
import { EdificioService } from 'src/edificio/edificio.service';
import { Edificio } from 'src/edificio/entities/edificio.entity';
import { UserService } from 'src/user/user.service';
import { CreateApartamentoDto } from './dto/create-apartamento.dto';
import { UpdateApartamentoDto } from './dto/update-apartamento.dto';
import { Apartamento } from './entities/apartamento.entity';
import { STATUS } from './enums/status.enum';

@Injectable()
export class ApartamentoService {



  constructor(
    @InjectModel(Apartamento.name)  private readonly apartamentoModel: Model<Apartamento>,
    private readonly edificioService: EdificioService,
    private readonly userService: UserService,
  ){}
  async create(createApartamentoDto: CreateApartamentoDto) {
    try {
      const {id_edificio, id_propietario} = createApartamentoDto;
      const edificio: Edificio = await this.validarEdificio(id_edificio);
      
      if(!createApartamentoDto.id_propietario && createApartamentoDto.status == STATUS.HABITADO){
        throw new BadRequestException('Se deber asignar a un propietario para estar habitado');
      }
      
      
      return await this.apartamentoModel.create(createApartamentoDto);
    } catch (error) {
      this.handlerExceptions(error);
    }
  }

  async findAll() {
    return await this.apartamentoModel.find()
    .populate("id_edificio", ['nombre',])
    .populate('id_propietario', ['nombre', 'telefono', 'identificacion'])
    .exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} apartamento`;
  }

  update(id: number, updateApartamentoDto: UpdateApartamentoDto) {
    return `This action updates a #${id} apartamento`;
  }

  remove(id: number) {
    return `This action removes a #${id} apartamento`;
  }



  async validarEdificio(id: string){
      const edificio = await this.edificioService.findByid(id);
      if(!edificio){ 
        throw new BadRequestException('El edificio no existe');
      }

      return edificio;
  }
  async validarUser(id: string) {
    const usuario: User = await this.userService.findOne(id);
    if(!usuario){
      throw new BadRequestException('Propietario no existe')
    }

    if(usuario.rol.includes( Roles.ADMIN) ||
       usuario.rol.includes( Roles.OPERADOR) || 
       usuario.rol.includes( Roles.OPERADOR)){
      console.log(usuario.rol);
      throw new BadRequestException('ROL DE PROPIETARIO INVALIDO');
    }

    return usuario;
  }

  handlerExceptions(error: any){

    if(error.response){
      console.log('error personaliza')
      throw new BadRequestException(error.message);
    }

    if (error.code == 11000) {
      throw new BadRequestException(
        `${Object.keys(error.keyPattern)} ya existe`,
      );
    }
    throw new InternalServerErrorException(
      'Una persona que nunca cometió un error, nunca intentó nada nuevo.'
    );
  }
}
