export class Food{    // this is a model
    //there are 3 types
    id!:number;   // ! says it is mandatory
    name!:string;
    price!:number;
    tags?:string[];  // ? says it is optional
    favorite:boolean = false;  // = says it is default value
    stars:number = 0;
    imageUrl!:string;
    origins!:string[];
    cookTime!:string;
}