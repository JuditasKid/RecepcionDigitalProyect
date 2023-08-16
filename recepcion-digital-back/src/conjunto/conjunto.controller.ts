import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ConjuntoService } from './conjunto.service';
import { CreateConjuntoDto } from './dto/create-conjunto.dto';
import { UpdateConjuntoDto } from './dto/update-conjunto.dto';

@ApiTags('Conjunto')
@Controller('conjunto')
export class ConjuntoController {
  constructor(private readonly conjuntoService: ConjuntoService) {}

  @Post()
  create(@Body() createConjuntoDto: CreateConjuntoDto) {
    return this.conjuntoService.create(createConjuntoDto);
  }

  @Get()
  findAll() {
    return this.conjuntoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.conjuntoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConjuntoDto: UpdateConjuntoDto) {
    return this.conjuntoService.update(+id, updateConjuntoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.conjuntoService.remove(+id);
  }
}
