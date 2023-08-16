import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VisitanteService } from './visitante.service';
import { CreateVisitanteDto } from './dto/create-visitante.dto';
import { UpdateVisitanteDto } from './dto/update-visitante.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('visitante')
@ApiTags('Visitante Endpoints')
export class VisitanteController {
  constructor(private readonly visitanteService: VisitanteService) {}

  @Post()
  create(@Body() createVisitanteDto: CreateVisitanteDto) {
    return this.visitanteService.create(createVisitanteDto);
  }

  @Get()
  findAll() {
    return this.visitanteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.visitanteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVisitanteDto: UpdateVisitanteDto) {
    return this.visitanteService.update(+id, updateVisitanteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.visitanteService.remove(+id);
  }
}
