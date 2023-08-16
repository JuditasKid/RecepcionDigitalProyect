import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { User } from 'src/auth/entities/user.entity';
// import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {

  constructor(@InjectModel(User.name) private readonly userModel: Model<User>,){
    
  }
  create() {
    return 'This action adds a new user';
  }

  async findAll() {
    return await this.userModel.find().select('-__v');
  }

  async findOne(id: string) {
    console.log('id enviado: ', id);
    return await this.userModel.findById({_id: id})
    .select('-__v')
    .exec();
  }

  update(id: number, updateUserDto: any) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
