import { Injectable } from '@nestjs/common';
import { CreateCalificacioneInput } from './dto/create-calificacione.input';
import { UpdateCalificacioneInput } from './dto/update-calificacione.input';

@Injectable()
export class CalificacionesService {
  create(createCalificacioneInput: CreateCalificacioneInput) {
    return 'This action adds a new calificacione';
  }

  findAll() {
    return `This action returns all calificaciones`;
  }

  findOne(id: number) {
    return `This action returns a #${id} calificacione`;
  }

  update(id: number, updateCalificacioneInput: UpdateCalificacioneInput) {
    return `This action updates a #${id} calificacione`;
  }

  remove(id: number) {
    return `This action removes a #${id} calificacione`;
  }
}
