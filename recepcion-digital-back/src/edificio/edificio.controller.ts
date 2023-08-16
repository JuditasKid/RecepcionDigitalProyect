import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EdificioService } from './edificio.service';
import { CreateEdificioDto } from './dto/create-edificio.dto';
import { UpdateEdificioDto } from './dto/update-edificio.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('edificio')
@ApiTags('Edificio Endpoints')
export class EdificioController {
  constructor(private readonly edificioService: EdificioService) {}

  @Post()
  create(@Body() createEdificioDto: CreateEdificioDto) {
    return this.edificioService.create(createEdificioDto);
  }

  @Get(':id_conjunto')
  findAll(@Param('id_conjunto') id: string) {
    return this.edificioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ) id: string) {
    return this.edificioService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEdificioDto: UpdateEdificioDto) {
    return this.edificioService.update(+id, updateEdificioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.edificioService.remove(+id);
  }
}
