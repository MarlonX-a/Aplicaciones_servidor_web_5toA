import { Injectable } from '@nestjs/common';
import { CreateComentarioInput } from './dto/create-comentario.input';
import { UpdateComentarioInput } from './dto/update-comentario.input';

@Injectable()
export class ComentariosService {
  create(createComentarioInput: CreateComentarioInput) {
    return 'This action adds a new comentario';
  }

  findAll() {
    return `This action returns all comentarios`;
  }

  findOne(id: number) {
    return `This action returns a #${id} comentario`;
  }

  update(id: number, updateComentarioInput: UpdateComentarioInput) {
    return `This action updates a #${id} comentario`;
  }

  remove(id: number) {
    return `This action removes a #${id} comentario`;
  }
}
