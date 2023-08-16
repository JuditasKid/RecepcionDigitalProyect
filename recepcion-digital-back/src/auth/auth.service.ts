import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interfaces/jwt-payload.interface';

@Injectable()
export class AuthService {
  saltOrRounds = 10;
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
    private readonly jwtService: JwtService
  ) {}

  async register(createUserDTO: CreateUserDto) {
    console.log('usuario para crear',{createUserDTO});
    createUserDTO.password = await bcrypt.hashSync(
      createUserDTO.password,
      this.saltOrRounds,
    );
    try {
      const user = await this.userModel.create(createUserDTO);
      return user;
    } catch (error) {
      this.handlerExceptions(error);
    }
  }

  async login(loginUserDto: LoginUserDto) {
    const { password, ...correo  } = loginUserDto;
    console.log(password, correo['email']);
    const user: User = await this.userModel.findOne({email: correo['email']});
    console.log('Usuario encontrado,',user);
    if (!user) {
      throw new UnauthorizedException('Email no existe');
    }
    if(!bcrypt.compareSync(password, user.password)) throw new UnauthorizedException('Contraseña invalida.')
    
    const {telefono, identificacion, nombre, email, rol, } = user;
    return {telefono, identificacion, nombre, email, rol, token: this.getJWT({_id: user._id})};
      }

  private getJWT(payload: JwtPayload){
    const token =  this.jwtService.sign(payload);
    return token;
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


  // findAll() {
  //   return `This action returns all auth`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} auth`;
  // }

  // update(id: number, updateAuthDto: any) {
  //   return `This action updates a #${id} auth`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} auth`;
  // }
}
