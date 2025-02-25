import { Injectable } from "@nestjs/common";

@Injectable()
export class CartService {
    private cart: [number, number][] = [];
    private buy: string[] = [];

    getCart(){
        return this.cart;
    }

    addToCart(item: [number, number]){
        this.cart.push(item);
    }
    
    removeFromCart(itemId: number){
        this.cart = this.cart.filter(item => item[0]!== itemId);
    }

    updateProductQuantity(itemId: number, quantity: number){
        this.cart = this.cart.map(item => item[0] === itemId ? [itemId, quantity] : item);
    }

    chooseCart(value: string, checked: boolean){
        if(checked){
            this.buy.push(value);
        } else{
            this.buy = this.buy.filter(item => item!== value);
        }
    }
    //đặt hàng
    orderToCart(){
        this.buy.forEach(item => {
            //lưu vào hóa đơn
        });
        this.cart = [];
        this.buy = [];
    }
}