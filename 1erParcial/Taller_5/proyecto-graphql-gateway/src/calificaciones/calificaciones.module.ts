import { Module } from '@nestjs/common';
import { CalificacionesService } from './calificaciones.service';
import { CalificacionesResolver } from './calificaciones.resolver';

@Module({
  providers: [CalificacionesResolver, CalificacionesService],
})
export class CalificacionesModule {}
