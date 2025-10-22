import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ServicioUbicacionService } from './servicio-ubicacion.service';
import { ServicioUbicacion } from './entities/servicio-ubicacion.entity';
import { CreateServicioUbicacionInput } from './dto/create-servicio-ubicacion.input';
import { UpdateServicioUbicacionInput } from './dto/update-servicio-ubicacion.input';

@Resolver(() => ServicioUbicacion)
export class ServicioUbicacionResolver {
  constructor(private readonly servicioUbicacionService: ServicioUbicacionService) {}

  @Mutation(() => ServicioUbicacion)
  createServicioUbicacion(@Args('createServicioUbicacionInput') createServicioUbicacionInput: CreateServicioUbicacionInput) {
    return this.servicioUbicacionService.create(createServicioUbicacionInput);
  }

  @Query(() => [ServicioUbicacion], { name: 'servicioUbicacion' })
  findAll() {
    return this.servicioUbicacionService.findAll();
  }

  @Query(() => ServicioUbicacion, { name: 'servicioUbicacion' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.servicioUbicacionService.findOne(id);
  }

  @Mutation(() => ServicioUbicacion)
  updateServicioUbicacion(@Args('updateServicioUbicacionInput') updateServicioUbicacionInput: UpdateServicioUbicacionInput) {
    return this.servicioUbicacionService.update(updateServicioUbicacionInput.id, updateServicioUbicacionInput);
  }

  @Mutation(() => ServicioUbicacion)
  removeServicioUbicacion(@Args('id', { type: () => Int }) id: number) {
    return this.servicioUbicacionService.remove(id);
  }
}
