import { Injectable } from "@nestjs/common";

@Injectable()
export class CartService {
    private cart: [number, number][] = [];
    private buy: string[] = [];

    getCart(){
        return this.cart;
    }

    addToproduct(item: [number, number]){
        this.cart.push(item);
    }
    
    removeFromProduct(itemId: number){
        this.cart = this.cart.filter(item => item[0]!== itemId);
    }

    updateProductQuantity(itemId: number, quantity: number){
        this.cart = this.cart.map(item => item[0] === itemId ? [itemId, quantity] : item);
    }

    chooseProduct(value: string, checked: boolean){
        if(checked){
            this.buy.push(value);
        } else{
            this.buy = this.buy.filter(item => item!== value);
        }
    }
}