import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { User } from "src/auth/entities/user.entity";
import { Conjunto } from "src/conjunto/entities/conjunto.entity";
import { Edificio } from "src/edificio/entities/edificio.entity";
import { STATUS } from "../enums/status.enum";

@Schema({autoIndex: true})
export class Apartamento extends Document {


    // Se coloca nombre unico, no srive para multiples conjuntos, se deben crear un identificador combinado
    @Prop({required: true, type: String})
    nombre: String;
    @Prop({required: true, type: Types.ObjectId, ref: Edificio.name })
    id_edificio: Edificio;
    @Prop({required: false,type: Types.ObjectId, ref: User.name })
    id_propietario?: User;
    @Prop({required: false, type: String, enum: STATUS, default: STATUS.NOHABITADO })
    status?: STATUS;

}

export const ApartamentoSchema = SchemaFactory.createForClass(Apartamento);
ApartamentoSchema.index({ nombre: 1, id_edificio: 1 }, { unique: true });

