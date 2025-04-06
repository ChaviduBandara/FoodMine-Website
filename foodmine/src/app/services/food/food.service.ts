import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():String[]{
    return [
      'assets/Images/food-1.jpg',
      'assets/Images/food-2.jpg',
      'assets/Images/food-3.jpg',
      'assets/Images/food-4.jpg',
      'assets/Images/food-5.jpg',
      'assets/Images/food-6.jpg',
    ];
  }
}
