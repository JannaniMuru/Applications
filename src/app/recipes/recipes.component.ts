import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  recipeData: any[] =[];
  method = "In a large pitcher, place the desired combination of fruit or herbs and fill container with water. Add additional fruit or herbs to garnish, if desired.";

  constructor() { }

  ngOnInit(): void {
    this.recipeData = [
      {
        title:"Blackberries/Orange/Ginger",
        image:"combo1.jpg",
        ingredients:[
          "1/2 pint blackberries",
          "1 orange thinly sliced",
          "1 (2-in) piece fresh ginger thinly sliced"
        ],
        method:this.method
      },
      {
        title:"Strawberries/Kiwi/Mint",
        image:"combo2.jpg",
        ingredients:[
          "1/2 cup strawberries stemmed and sliced",
          "5 large fresh basil leaves torn",
          "1 lemon thinly sliced"
        ],
        method:this.method
      },
      {
        title:"Blueberries/Lemon/Rosemary",
        image:"combo3.jpg",
        ingredients:[
          "1/2 pint blueberries",
          "1 lemon thinly sliced",
          "4 sprigs fresh rosemary"
        ],
        method:this.method
      }
    ];
  }
  

}
