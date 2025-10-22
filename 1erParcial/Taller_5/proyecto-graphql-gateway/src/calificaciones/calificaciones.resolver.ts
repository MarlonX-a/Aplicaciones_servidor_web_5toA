import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CalificacionesService } from './calificaciones.service';
import { Calificacione } from './entities/calificacione.entity';
import { CreateCalificacioneInput } from './dto/create-calificacione.input';
import { UpdateCalificacioneInput } from './dto/update-calificacione.input';

@Resolver(() => Calificacione)
export class CalificacionesResolver {
  constructor(private readonly calificacionesService: CalificacionesService) {}

  @Mutation(() => Calificacione)
  createCalificacione(@Args('createCalificacioneInput') createCalificacioneInput: CreateCalificacioneInput) {
    return this.calificacionesService.create(createCalificacioneInput);
  }

  @Query(() => [Calificacione], { name: 'calificaciones' })
  findAll() {
    return this.calificacionesService.findAll();
  }

  @Query(() => Calificacione, { name: 'calificacione' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.calificacionesService.findOne(id);
  }

  @Mutation(() => Calificacione)
  updateCalificacione(@Args('updateCalificacioneInput') updateCalificacioneInput: UpdateCalificacioneInput) {
    return this.calificacionesService.update(updateCalificacioneInput.id, updateCalificacioneInput);
  }

  @Mutation(() => Calificacione)
  removeCalificacione(@Args('id', { type: () => Int }) id: number) {
    return this.calificacionesService.remove(id);
  }
}
