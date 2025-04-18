import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CardItem';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { NotFoundComponent } from '../not-found/not-found.component';

@Component({
  selector: 'app-cart-page',
  imports: [NgFor, NgIf, RouterModule, CommonModule, NotFoundComponent],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent implements OnInit{

  cart!:Cart;
  constructor(private cartService: CartService){
    this.setCart();
  }

  ngOnInit(): void {  
      
  }

  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }

  changeQuantity(cartItem:CartItem, quantityInString: string){
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
    this.setCart();
  }

  setCart(){
    this.cart = this.cartService.getCart();
  }

}
