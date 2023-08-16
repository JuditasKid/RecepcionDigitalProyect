import { ApiProperty, ApiTags } from '@nestjs/swagger';
import {
  IsString,
  MinLength,
  IsEmail,
  IsOptional,
  MaxLength,
  IsAlphanumeric,
  Matches,
  IsNotEmpty,
} from 'class-validator';


export class LoginUserDto {
  @IsEmail()
  @IsString()
  @ApiProperty({
    type: 'string',
    required: true,
    name: 'email',
    example: 'juan@gmail.com',
    description: 'Email del usuario',
  })
  email: string;
  
  @ApiProperty({
    type: 'string',
    required: true,
    name: 'password',
    minLength: 6,
    example: 'AbcD159*XyZ',
    description: 'Contraseña del usuario',
  })
  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(50)
  @Matches(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'La contrasena debe tener mayusculas, minusculas',
  })
  password: string;
}
