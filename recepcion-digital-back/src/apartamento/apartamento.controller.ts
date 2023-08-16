import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ApartamentoService } from './apartamento.service';
import { CreateApartamentoDto } from './dto/create-apartamento.dto';
import { UpdateApartamentoDto } from './dto/update-apartamento.dto';

@ApiTags('Apartamento Endpoints')
@Controller('apartamento')
export class ApartamentoController {
  constructor(private readonly apartamentoService: ApartamentoService) {}

  @Post()
  create(@Body() createApartamentoDto: CreateApartamentoDto) {
    return this.apartamentoService.create(createApartamentoDto);
  }

  @Get()
  findAll() {
    return this.apartamentoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.apartamentoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateApartamentoDto: UpdateApartamentoDto) {
    return this.apartamentoService.update(+id, updateApartamentoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.apartamentoService.remove(+id);
  }
}
