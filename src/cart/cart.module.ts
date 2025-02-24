import { Module } from "@nestjs/common";
import { CartController } from "./cart.controller";
import { CartService } from "./cart.service";
import { CartRepository } from "./cart.repository";

@Module({
  imports: [], 
  providers: [CartService, CartRepository],  // CartService and CartRepository are injected into the CartController
  controllers: [CartController],
  exports: [CartService,CartRepository]
})
export class CartModule {}