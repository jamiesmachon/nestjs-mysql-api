import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CartController } from './controller/cart.controller';
import { CartService } from './service/cart.service';
import { CartEntity } from './cart.entity';
import { ProductsService } from '../product/service/products.service';
import { ProductEntity } from '../product/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CartEntity, ProductEntity])],
  providers: [CartService, ProductsService],
  controllers: [CartController],
})
export class CartModule {}
