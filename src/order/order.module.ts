import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { OrderController } from './controller/order.controller';
import { OrderService } from './service/order.service';
import { OrderEntity } from './order.entity';
import { ProductsService } from '../product/service/products.service';
import { ProductEntity } from '../product/product.entity';
import { CartService } from '../cart/service/cart.service';
import { CartEntity } from '../cart/cart.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OrderEntity, ProductEntity, CartEntity])],
  controllers: [OrderController],
  providers: [OrderService, CartService, ProductsService],
})
export class OrderModule {}
