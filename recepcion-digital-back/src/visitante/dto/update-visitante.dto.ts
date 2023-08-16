import { PartialType } from '@nestjs/swagger';
import { CreateVisitanteDto } from './create-visitante.dto';

export class UpdateVisitanteDto extends PartialType(CreateVisitanteDto) {}
