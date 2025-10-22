import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProveedoresService } from './proveedores.service';
import { Proveedore } from './entities/proveedore.entity';
import { CreateProveedoreInput } from './dto/create-proveedore.input';
import { UpdateProveedoreInput } from './dto/update-proveedore.input';

@Resolver(() => Proveedore)
export class ProveedoresResolver {
  constructor(private readonly proveedoresService: ProveedoresService) {}

  @Mutation(() => Proveedore)
  createProveedore(@Args('createProveedoreInput') createProveedoreInput: CreateProveedoreInput) {
    return this.proveedoresService.create(createProveedoreInput);
  }

  @Query(() => [Proveedore], { name: 'proveedores' })
  findAll() {
    return this.proveedoresService.findAll();
  }

  @Query(() => Proveedore, { name: 'proveedore' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.proveedoresService.findOne(id);
  }

  @Mutation(() => Proveedore)
  updateProveedore(@Args('updateProveedoreInput') updateProveedoreInput: UpdateProveedoreInput) {
    return this.proveedoresService.update(updateProveedoreInput.id, updateProveedoreInput);
  }

  @Mutation(() => Proveedore)
  removeProveedore(@Args('id', { type: () => Int }) id: number) {
    return this.proveedoresService.remove(id);
  }
}
