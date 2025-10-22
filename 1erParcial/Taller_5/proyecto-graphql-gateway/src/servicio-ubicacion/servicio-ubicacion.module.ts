import { Module } from '@nestjs/common';
import { ServicioUbicacionService } from './servicio-ubicacion.service';
import { ServicioUbicacionResolver } from './servicio-ubicacion.resolver';

@Module({
  providers: [ServicioUbicacionResolver, ServicioUbicacionService],
})
export class ServicioUbicacionModule {}
