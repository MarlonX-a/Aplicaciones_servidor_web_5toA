import { Injectable } from '@nestjs/common';
import { CreateProveedoreInput } from './dto/create-proveedore.input';
import { UpdateProveedoreInput } from './dto/update-proveedore.input';

@Injectable()
export class ProveedoresService {
  create(createProveedoreInput: CreateProveedoreInput) {
    return 'This action adds a new proveedore';
  }

  findAll() {
    return `This action returns all proveedores`;
  }

  findOne(id: number) {
    return `This action returns a #${id} proveedore`;
  }

  update(id: number, updateProveedoreInput: UpdateProveedoreInput) {
    return `This action updates a #${id} proveedore`;
  }

  remove(id: number) {
    return `This action removes a #${id} proveedore`;
  }
}
