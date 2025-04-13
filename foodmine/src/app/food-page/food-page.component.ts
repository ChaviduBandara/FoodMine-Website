import { Component, OnInit } from '@angular/core';
import { Food } from '../shared/models/Food';

@Component({
  selector: 'app-food-page',
  imports: [],
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css'
})
export class FoodPageComponent implements OnInit{

  food!: Food;
  constructor(){}
  
  ngOnInit(): void {
      
  }
}
