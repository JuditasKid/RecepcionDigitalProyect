import { PartialType } from '@nestjs/swagger';
import { CreateConjuntoDto } from './create-conjunto.dto';

export class UpdateConjuntoDto extends PartialType(CreateConjuntoDto) {}
