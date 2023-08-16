import { PartialType } from '@nestjs/swagger';
import { CreateApartamentoDto } from './create-apartamento.dto';

export class UpdateApartamentoDto extends PartialType(CreateApartamentoDto) {}
