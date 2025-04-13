import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FoodPageComponent } from './food-page/food-page.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'search/:searchTerm',  // eg - localhost:4200/search/briyani
        component:HomeComponent
    },
    {
        path:'tag/:tag',    // eg - localhost:4200/tag/fastFood
        component:HomeComponent
    },
    {
        path:'food/:id',
        component:FoodPageComponent
    }
];
