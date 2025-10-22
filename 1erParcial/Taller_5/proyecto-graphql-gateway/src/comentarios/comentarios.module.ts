import { Module } from '@nestjs/common';
import { ComentariosService } from './comentarios.service';
import { ComentariosResolver } from './comentarios.resolver';

@Module({
  providers: [ComentariosResolver, ComentariosService],
})
export class ComentariosModule {}
