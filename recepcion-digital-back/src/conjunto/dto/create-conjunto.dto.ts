import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsMongoId, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, MinLength } from "class-validator";
import { Types } from "mongoose";
import { type } from "os";
import { title } from "process";
import { TipoVivienda } from "../enums/tipo-vivienda.enum";

export class CreateConjuntoDto {
    
    
    @ApiProperty({required: true,type: String, title: 'Nombre Conjunto',example: 'Conjunto Esmeralda',description: 'Nombre del conjunto',})
    @IsString()
    @MinLength(5)
    @IsNotEmpty()
    nombre: string;
    //NIT
    @ApiProperty({required: true,type: Number, title: 'NIT', description: 'Nit del conjunto residencial', example: '806003056', minimum: 9})
    @IsNotEmpty()
    @IsNumber()
    nit: number;
    @ApiProperty({ required: true, title: 'Direccion', example: 'Calle 120# 42-120', description: 'Direccion del conjunto residencial' })
    @IsNotEmpty()
    @MinLength(5)
    // Direccion
    direccion: string;
    // Administrador del conjunto
    @ApiProperty({required: true, title: 'Administrador', type: Types.ObjectId, description: 'Administrador del conjunto residencial'},)
    @IsNotEmpty()
    @IsMongoId()
    administrador: string;
}
