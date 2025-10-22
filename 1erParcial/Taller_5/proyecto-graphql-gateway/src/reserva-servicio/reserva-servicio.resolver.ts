import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ReservaServicioService } from './reserva-servicio.service';
import { ReservaServicio } from './entities/reserva-servicio.entity';
import { CreateReservaServicioInput } from './dto/create-reserva-servicio.input';
import { UpdateReservaServicioInput } from './dto/update-reserva-servicio.input';

@Resolver(() => ReservaServicio)
export class ReservaServicioResolver {
  constructor(private readonly reservaServicioService: ReservaServicioService) {}

  @Mutation(() => ReservaServicio)
  createReservaServicio(@Args('createReservaServicioInput') createReservaServicioInput: CreateReservaServicioInput) {
    return this.reservaServicioService.create(createReservaServicioInput);
  }

  @Query(() => [ReservaServicio], { name: 'reservaServicio' })
  findAll() {
    return this.reservaServicioService.findAll();
  }

  @Query(() => ReservaServicio, { name: 'reservaServicio' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.reservaServicioService.findOne(id);
  }

  @Mutation(() => ReservaServicio)
  updateReservaServicio(@Args('updateReservaServicioInput') updateReservaServicioInput: UpdateReservaServicioInput) {
    return this.reservaServicioService.update(updateReservaServicioInput.id, updateReservaServicioInput);
  }

  @Mutation(() => ReservaServicio)
  removeReservaServicio(@Args('id', { type: () => Int }) id: number) {
    return this.reservaServicioService.remove(id);
  }
}
