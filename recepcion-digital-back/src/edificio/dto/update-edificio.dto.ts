import { PartialType } from '@nestjs/swagger';
import { CreateEdificioDto } from './create-edificio.dto';

export class UpdateEdificioDto extends PartialType(CreateEdificioDto) {}
