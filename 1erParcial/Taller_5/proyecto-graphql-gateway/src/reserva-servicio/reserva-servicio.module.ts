import { Module } from '@nestjs/common';
import { ReservaServicioService } from './reserva-servicio.service';
import { ReservaServicioResolver } from './reserva-servicio.resolver';

@Module({
  providers: [ReservaServicioResolver, ReservaServicioService],
})
export class ReservaServicioModule {}
