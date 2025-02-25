import { Body, Controller, Get, Post } from "@nestjs/common";
import { get } from "http";
import { CartService } from "./cart.service";

@Controller('cart')
export class CartController {
    constructor(private readonly cartService: CartService){}

    @Get()
    getCart() {
        return this.cartService.getCart();
    }

    @Post('add')
    addToProduct(item: [number, number]){
        this.cartService.addToCart(item);
    }    

    @Post('remove')
    removeFromProduct(@Body('id') itemId: number){
        this.cartService.removeFromCart(itemId);
        return {message: 'Item removed'};
    }

    @Post('update')
    updateProductQuantity(@Body('id') itemId: number, @Body('quantity') quantity: number){
        this.cartService.updateProductQuantity(itemId, quantity);
        return {message: 'Quantity updated'};
    }

    @Post('choose')
    chooseProduct(@Body('value') value: string, @Body('checked') checked: boolean){
        this.cartService.chooseCart(value, checked);
        return {message: 'Product chosen'};
    }



}

