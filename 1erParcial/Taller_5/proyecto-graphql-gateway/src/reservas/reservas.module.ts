import { Module } from '@nestjs/common';
import { ReservasService } from './reservas.service';
import { ReservasResolver } from './reservas.resolver';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [ReservasResolver, ReservasService],
})
export class ReservasModule {}
