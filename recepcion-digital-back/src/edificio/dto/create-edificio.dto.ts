import { ApiProperty } from "@nestjs/swagger";
import { IsMongoId, IsNotEmpty, IsString, MinLength } from "class-validator";
import { Types } from "mongoose";
import { User } from "src/auth/entities/user.entity";
import { Conjunto } from "src/conjunto/entities/conjunto.entity";

export class CreateEdificioDto {

    @ApiProperty({ type: 'string',required: true, description: 'Nombre del edifico, torre, bloque etcétera'})
    @IsNotEmpty()
    @IsString()
    @MinLength(1)   
    nombre: string;
    @ApiProperty({type: Types.ObjectId, required: true, example: '6383a5c99233e2286615697e', description: 'Id del conjunto al perteneciente'})
    @IsMongoId()
    id_conjunto: Conjunto;
}
