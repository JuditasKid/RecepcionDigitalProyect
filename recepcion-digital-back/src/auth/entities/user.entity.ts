import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Conjunto } from 'src/conjunto/entities/conjunto.entity';
import { Roles } from '../enums/roles.enum';
import { STATUS } from '../enums/status.enum';

@Schema()
export class User extends Document {
  @Prop({ index: true,required: true, })
  nombre: string;
  @Prop({ required: true,unique: true,index: true,})
  email: string;
  @Prop({ type: [String], required:false, default: [Roles.USER], enum:Roles })
  rol?: String[];
  @Prop({ type: String, default: STATUS.ACTIVE, enum: STATUS })
  status: String;
  @Prop({ type: String,})
  password: string;
  @Prop({required: true, type: Number,})
  telefono: number;
  @Prop({ required: true, type: Number, unique: true, index: true, })
  identificacion: number;
  @Prop({ type: Date, default: Date.now(), })
  createAt?: Date;
  @Prop({type: Date,default: Date.now(),})
  UpdateAt?: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
