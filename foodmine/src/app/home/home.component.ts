import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { NgFor } from '@angular/common';
import { Food } from '../shared/models/Food';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [NgFor, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  foods:Food[] = [];
  constructor(private foodService:FoodService){}

  ngOnInit(): void{
    this.foods = this.foodService.getAll();
  }

}
