import { Component, Input, OnInit } from '@angular/core';
import { Tag } from '../shared/models/tags';
import { NgFor, NgIf } from '@angular/common';
import { FoodService } from '../services/food/food.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [NgIf, NgFor, RouterModule, ],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent implements OnInit{

  @Input()
  foodPageTags?:string[];

  @Input()
  justifyContent:string = 'center';

  tags?:Tag[];
  constructor(private foodService: FoodService) {}

  ngOnInit(): void {
    if(!this.foodPageTags)
      this.tags = this.foodService.getAllTags();
  }

}
