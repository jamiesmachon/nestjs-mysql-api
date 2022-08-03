import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';

import { UserEntity } from '../../auth/user.entity';
import { ProductEntity } from '../product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductEntity)
    private productRepository: Repository<ProductEntity>,
  ) {}

  async getAll(): Promise<ProductEntity[]> {
    return await this.productRepository.find();
  }

  async create(
    product: ProductEntity,
    user: UserEntity,
  ): Promise<ProductEntity> {
    if (user.role == 'admin') {
      return await this.productRepository.save(product);
    }
    throw new UnauthorizedException();
  }

  async getOne(id: number): Promise<ProductEntity> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return this.productRepository.findOne(id);
  }

  async update(
    id: number,
    product: ProductEntity,
    user: UserEntity,
  ): Promise<UpdateResult> {
    if (user.role == 'admin') {
      return await this.productRepository.update(id, product);
    }
    throw new UnauthorizedException();
  }

  async delete(id: number, user: UserEntity): Promise<DeleteResult> {
    if (user.role == 'admin') {
      return await this.productRepository.delete(id);
    }
    throw new UnauthorizedException();
  }
}
