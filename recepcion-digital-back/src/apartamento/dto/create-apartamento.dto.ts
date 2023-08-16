import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsMongoId, IsOptional, IsString, MinLength } from "class-validator";
import { Types } from "mongoose";
import { STATUS } from "../enums/status.enum";

export class CreateApartamentoDto {
    @ApiProperty({required: true, type: String, description: 'Nombre o identificador para el edificio, torre, bloque etcetera.', example: '101'})
    @IsString()
    @MinLength(1)
    nombre: String;
    @ApiProperty({required: true, type: String, description: 'id del edificio perteneciente', example: '6383a9233767aa802d353566'  })
    @IsMongoId()
    id_edificio: string;
    @ApiProperty({required: false,type: String, description: 'id del propietario perteneciente'})
    @IsMongoId()
    @IsOptional()
    id_propietario?: string;
    @ApiProperty({required: false, type: STATUS, enum: STATUS, default: STATUS.NOHABITADO, example: STATUS.NOHABITADO })
    @IsOptional()
    @IsEnum(STATUS)
    status?: STATUS;
}
