import { Module } from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { CategoriaController } from './categoria.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoria } from './entities/categoria.entity';
import { Servicio } from 'src/servicio/entities/servicio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Categoria, Servicio])],
  controllers: [CategoriaController],
  providers: [CategoriaService],
})
export class CategoriaModule {}
