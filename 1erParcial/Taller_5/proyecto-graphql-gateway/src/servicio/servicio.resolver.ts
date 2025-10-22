import { Resolver, Query, Args } from '@nestjs/graphql';
import { ServicioService } from './servicio.service';
import { Servicio } from './entities/servicio.entity';

@Resolver(() => Servicio)
export class ServicioResolver {
  constructor(private readonly servicioService: ServicioService) {}

  // Trae todos los servicios
  @Query(() => [Servicio], { name: 'servicios' })
  async findAll() {
    return this.servicioService.findAll();
  }

  // Trae un servicio por ID
  @Query(() => Servicio, { name: 'servicio', nullable: true })
  async findOne(@Args('id', { type: () => String }) id: string) {
    return this.servicioService.findOne(id);
  }
}
