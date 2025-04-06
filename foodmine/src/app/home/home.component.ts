import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  foods:String[] = [];
  constructor(private foodService:FoodService){}

  ngOnInit(): void{
    this.foods = this.foodService.getAll();
  }

}
