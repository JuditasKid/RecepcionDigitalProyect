import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ApartamentoService } from 'src/apartamento/apartamento.service';
import { VisitanteService } from 'src/visitante/visitante.service';
import { CreateVisitaDto } from './dto/create-visita.dto';
import { UpdateVisitaDto } from './dto/update-visita.dto';
import { Visita } from './entities/visita.entity';

@Injectable()
export class VisitaService {

  constructor(@InjectModel(Visita.name) private readonly VisitaModel = Model<Visita>,
    private readonly visitanteService: VisitanteService,
    private readonly apartamentoService: ApartamentoService
  ){}

  create(createVisitaDto: CreateVisitaDto) {
    return this.VisitaModel.create(createVisitaDto);
  }

  findAll() {
    return this.VisitaModel.find()
    .populate('id_apartamento', ['nombre', ])
    .populate('id_visitante', ['nombre', ])
    ;
  }

  findOne(id: number) {
    return `This action returns a #${id} visita`;
  }

  update(id: number, updateVisitaDto: UpdateVisitaDto) {
    return `This action updates a #${id} visita`;
  }

  remove(id: number) {
    return `This action removes a #${id} visita`;
  }
}
