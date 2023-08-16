import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsMongoId } from "class-validator";
import { Types } from "mongoose";
import { Apartamento } from "src/apartamento/entities/apartamento.entity";
import { Visitante } from "src/visitante/entities/visitante.entity";
import { TipoVisita } from "../enums/tipo-visita.enum";

export class CreateVisitaDto {


    @ApiProperty({required: true, type: Types.ObjectId, default: '6383fa8d855fddbf17b976c3', description: 'Id del visitante' })
    @IsMongoId()
    id_visitante: Visitante;
    @ApiProperty({required: true, type: Types.ObjectId, default: '6383d72a993f6fe14bce938b'})
    @IsMongoId()
    id_apartamento: Apartamento;
    @ApiProperty({required: true, type: TipoVisita, enum: TipoVisita, examples: [TipoVisita]})
    @IsEnum(TipoVisita)
    tipo_visitante: TipoVisita;

}
