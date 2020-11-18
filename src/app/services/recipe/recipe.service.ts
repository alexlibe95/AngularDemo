import { Injectable } from '@angular/core';
import { Recipe } from 'src/models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', "testing a receipe lorem ipsum you know", "https://p0.pikrepo.com/preview/853/610/fried-food-with-sliced-lemon-on-white-ceramic-plate.jpg"),
    new Recipe('A Test Recipe_2', "testing a receipe lorem ipsum you know", "https://p0.pxfuel.com/preview/256/701/65/food-and-drink.jpg"),
    new Recipe('A Test Recipe_3', "testing a receipe lorem ipsum you know", "https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665__340.jpg")
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
