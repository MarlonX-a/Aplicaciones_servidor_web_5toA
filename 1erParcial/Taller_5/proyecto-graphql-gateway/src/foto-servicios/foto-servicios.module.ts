import { Module } from '@nestjs/common';
import { FotoServiciosService } from './foto-servicios.service';
import { FotoServiciosResolver } from './foto-servicios.resolver';

@Module({
  providers: [FotoServiciosResolver, FotoServiciosService],
})
export class FotoServiciosModule {}
