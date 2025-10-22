import { Module } from '@nestjs/common';
import { ProveedoresService } from './proveedores.service';
import { ProveedoresResolver } from './proveedores.resolver';

@Module({
  providers: [ProveedoresResolver, ProveedoresService],
})
export class ProveedoresModule {}
