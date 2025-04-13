import { Component, OnInit } from '@angular/core';
import { Tag } from '../shared/models/tags';
import { NgFor, NgIf } from '@angular/common';
import { FoodService } from '../services/food/food.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-tags',
  imports: [NgIf, NgFor, RouterModule],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent implements OnInit{

  tags:Tag[] = [];

  constructor(private foodService: FoodService) {}

  ngOnInit(): void {
    this.tags = this.foodService.getAllTags();
  }

}
