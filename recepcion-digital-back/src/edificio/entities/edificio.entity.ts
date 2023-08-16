import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";
import { type } from "os";
import { User } from "src/auth/entities/user.entity";
import { Conjunto } from "src/conjunto/entities/conjunto.entity";

@Schema()
export class Edificio {

    @Prop({required: true,unique: true,type: String,index: true, trim: true})
    nombre: string;
    @Prop({required: true, type: Types.ObjectId, ref: Conjunto.name})
    id_conjunto: Conjunto;

}
export const EdificioSchema = SchemaFactory.createForClass(Edificio);
