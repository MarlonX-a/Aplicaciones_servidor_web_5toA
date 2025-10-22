import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ComentariosService } from './comentarios.service';
import { Comentario } from './entities/comentario.entity';
import { CreateComentarioInput } from './dto/create-comentario.input';
import { UpdateComentarioInput } from './dto/update-comentario.input';

@Resolver(() => Comentario)
export class ComentariosResolver {
  constructor(private readonly comentariosService: ComentariosService) {}

  @Mutation(() => Comentario)
  createComentario(@Args('createComentarioInput') createComentarioInput: CreateComentarioInput) {
    return this.comentariosService.create(createComentarioInput);
  }

  @Query(() => [Comentario], { name: 'comentarios' })
  findAll() {
    return this.comentariosService.findAll();
  }

  @Query(() => Comentario, { name: 'comentario' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.comentariosService.findOne(id);
  }

  @Mutation(() => Comentario)
  updateComentario(@Args('updateComentarioInput') updateComentarioInput: UpdateComentarioInput) {
    return this.comentariosService.update(updateComentarioInput.id, updateComentarioInput);
  }

  @Mutation(() => Comentario)
  removeComentario(@Args('id', { type: () => Int }) id: number) {
    return this.comentariosService.remove(id);
  }
}
