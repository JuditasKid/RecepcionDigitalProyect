import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


@Schema()
export class Visitante extends Document{
    
    @Prop({required: true, type: String})
    nombre: string;
    @Prop({required: true, type: Number, unique: true})
    identificacion: number;
    @Prop({type: Number})
    telefono?: Number;
    @Prop({type: Date, default: Date.now()})
    createAt?: Date;
    @Prop({type: Date, default: Date.now()})
    updateAt?: Date;
    // @Prop({required: true, type: String})
    // empresa?: string;
    // @Prop({required: true, type: String})
    // vehiculo?: boolean;
    

}
export const VisitanteSchema = SchemaFactory.createForClass(Visitante);
