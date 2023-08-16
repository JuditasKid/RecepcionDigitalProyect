import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { User } from "src/auth/entities/user.entity";
import { Edificio } from "src/edificio/entities/edificio.entity";
import { TipoVivienda } from "../enums/tipo-vivienda.enum";

@Schema()
export class Conjunto extends Document {

    @Prop({required: true, type: String,})
    nombre: string;
    @Prop({required: true, type: Number, unique: true, })
    nit: number;
    @Prop({ required: true, type: String})
    direccion: string;
    @Prop({required: true, type: Types.ObjectId, ref: User.name, unique: true })
    administrador: User;
    // @Prop({ required: false, type: [Types.ObjectId], ref: Edificio.name})
    // edificios?: Edificio[]
    

}

export const ConjuntoSchema = SchemaFactory.createForClass(Conjunto);
