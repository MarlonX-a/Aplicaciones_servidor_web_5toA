import { Injectable } from '@nestjs/common';
import { CreateFotoServicioInput } from './dto/create-foto-servicio.input';
import { UpdateFotoServicioInput } from './dto/update-foto-servicio.input';

@Injectable()
export class FotoServiciosService {
  create(createFotoServicioInput: CreateFotoServicioInput) {
    return 'This action adds a new fotoServicio';
  }

  findAll() {
    return `This action returns all fotoServicios`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fotoServicio`;
  }

  update(id: number, updateFotoServicioInput: UpdateFotoServicioInput) {
    return `This action updates a #${id} fotoServicio`;
  }

  remove(id: number) {
    return `This action removes a #${id} fotoServicio`;
  }
}
