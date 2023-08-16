import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsString,
  MinLength,
  IsEmail,
  IsOptional,
  MaxLength,
  IsAlphanumeric,
  Matches,
  IsMongoId,
  IsNumber,
  IsNotEmpty,
} from 'class-validator';
import { Conjunto } from 'src/conjunto/entities/conjunto.entity';
import { Roles } from '../enums/roles.enum';

export class CreateUserDto {
  
  @ApiProperty({ required: true,type: String,example: 'Juan Romero', description: 'Nombre del usuario'})
  @IsString()
  @MinLength(1)
  @IsNotEmpty()
  nombre: string;
  
  @ApiProperty({ required: true,type: String,example: 'juan@gmail.com', })
  @IsEmail()
  @IsString()
  email: string;
  @ApiPropertyOptional({ example: '["ADMIN", "USER"]', required: false, type: Roles,default: [Roles.USER], enum: Roles,isArray: true,
    title: 'Rol',description: 'Asigna un rol al usuario que se crea, se deber asignar como un array [], en caso dado que no se especifique sera de tipo ["USER"]'
  })
  @IsOptional()
  rol?: string[];
  @ApiProperty({ required: true,type: String, example: 'Abc123*xYz',})
  @IsString()
  @MinLength(6)
  @MaxLength(50)
  @Matches(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'La contrasena debe tener mayusculas, minusculas',
  })
  password: string;
  @ApiProperty({ required: true, type: Number, example: 123456789,})
  @IsNumber({
    allowNaN:false,
  })
  identificacion: number;
  @ApiProperty({ required: true,type: Number, example: 123456789,})
  @IsNumber({ allowNaN:false,})
  telefono: number;
  
}
