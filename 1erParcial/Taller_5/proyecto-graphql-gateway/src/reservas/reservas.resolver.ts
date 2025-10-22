import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ReservasService } from './reservas.service';
import { Reserva } from './entities/reserva.entity';


@Resolver(() => Reserva)
export class ReservasResolver {
  constructor(private readonly reservasService: ReservasService) {}
  @Query(() => [Reserva], { name: 'reservas' })
  async findAll() {
    return this.reservasService.findAll();
  }

  @Query(() => Reserva, { name: 'reserva' })
  async findOne(@Args('id', { type: () => String }) id: string) {
    return this.reservasService.findOne(id);
  }

}
