import { Injectable } from '@nestjs/common';
import { CreateServicioUbicacionInput } from './dto/create-servicio-ubicacion.input';
import { UpdateServicioUbicacionInput } from './dto/update-servicio-ubicacion.input';

@Injectable()
export class ServicioUbicacionService {
  create(createServicioUbicacionInput: CreateServicioUbicacionInput) {
    return 'This action adds a new servicioUbicacion';
  }

  findAll() {
    return `This action returns all servicioUbicacion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} servicioUbicacion`;
  }

  update(id: number, updateServicioUbicacionInput: UpdateServicioUbicacionInput) {
    return `This action updates a #${id} servicioUbicacion`;
  }

  remove(id: number) {
    return `This action removes a #${id} servicioUbicacion`;
  }
}
