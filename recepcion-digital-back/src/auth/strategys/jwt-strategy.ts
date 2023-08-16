import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {PassportStrategy} from '@nestjs/passport'
import { Model } from 'mongoose';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { User } from '../entities/user.entity';
import { JwtPayload } from '../interfaces/jwt-payload.interface';


@Injectable()
export class JwtStrategy extends PassportStrategy( Strategy){

    constructor(@InjectModel(User.name) private readonly userModel: Model<User>){
        super({
            secretOrKey: process.env.JWT_SECRET,
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        });
    }
    
    async validate(payload: JwtPayload): Promise<User>{
        const {_id} = payload;

        const user = await this.userModel.findOne({_id:_id});
        if(!user){
            throw new UnauthorizedException('Token no valido');
        }
        if(!user.status){
            throw new UnauthorizedException('Usuario inactivo');
        }
        return user;
    }
}