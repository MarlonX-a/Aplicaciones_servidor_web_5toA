import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FotoServiciosService } from './foto-servicios.service';
import { FotoServicio } from './entities/foto-servicio.entity';
import { CreateFotoServicioInput } from './dto/create-foto-servicio.input';
import { UpdateFotoServicioInput } from './dto/update-foto-servicio.input';

@Resolver(() => FotoServicio)
export class FotoServiciosResolver {
  constructor(private readonly fotoServiciosService: FotoServiciosService) {}

  @Mutation(() => FotoServicio)
  createFotoServicio(@Args('createFotoServicioInput') createFotoServicioInput: CreateFotoServicioInput) {
    return this.fotoServiciosService.create(createFotoServicioInput);
  }

  @Query(() => [FotoServicio], { name: 'fotoServicios' })
  findAll() {
    return this.fotoServiciosService.findAll();
  }

  @Query(() => FotoServicio, { name: 'fotoServicio' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.fotoServiciosService.findOne(id);
  }

  @Mutation(() => FotoServicio)
  updateFotoServicio(@Args('updateFotoServicioInput') updateFotoServicioInput: UpdateFotoServicioInput) {
    return this.fotoServiciosService.update(updateFotoServicioInput.id, updateFotoServicioInput);
  }

  @Mutation(() => FotoServicio)
  removeFotoServicio(@Args('id', { type: () => Int }) id: number) {
    return this.fotoServiciosService.remove(id);
  }
}
