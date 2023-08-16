import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { Apartamento } from "src/apartamento/entities/apartamento.entity";
import { Visitante } from "src/visitante/entities/visitante.entity";
import { TipoVisita } from "../enums/tipo-visita.enum";

@Schema()
export class Visita extends Document {


    @Prop({required: true, type: Types.ObjectId, ref: Visitante.name })
    id_visitante: Visitante;
    @Prop({required: true, type: String, enum: TipoVisita})
    tipo_visitante: String;
    @Prop({required: true, type: Types.ObjectId, ref: Apartamento.name })
    id_apartamento: Apartamento;
    @Prop({required: true, type: Date, default: Date})
    horaIngreso: Date;
    @Prop({required: false, type: Date, default: Date})
    horaSalida?: Date;



}
export const VisitaSchema = SchemaFactory.createForClass(Visita);
