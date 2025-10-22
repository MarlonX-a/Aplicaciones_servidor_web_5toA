import { Injectable } from '@nestjs/common';
import { CreateReservaServicioInput } from './dto/create-reserva-servicio.input';
import { UpdateReservaServicioInput } from './dto/update-reserva-servicio.input';

@Injectable()
export class ReservaServicioService {
  create(createReservaServicioInput: CreateReservaServicioInput) {
    return 'This action adds a new reservaServicio';
  }

  findAll() {
    return `This action returns all reservaServicio`;
  }

  findOne(id: number) {
    return `This action returns a #${id} reservaServicio`;
  }

  update(id: number, updateReservaServicioInput: UpdateReservaServicioInput) {
    return `This action updates a #${id} reservaServicio`;
  }

  remove(id: number) {
    return `This action removes a #${id} reservaServicio`;
  }
}
