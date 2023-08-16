import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString, Length } from "class-validator";

export class CreateVisitanteDto {

    @ApiProperty({required: true, type: String, example:'Alvaro Uribe', description:'Nombre del visitante'})
    @IsString()
    @Length(5, 100)
    @IsNotEmpty()
    nombre: string;

    @ApiProperty({required: true, type: Number, example:'1234567891', description:'Identificacion del visitante', minimum: 10})
    @IsNumber()
    @IsNotEmpty()
    identificacion: number;
}
