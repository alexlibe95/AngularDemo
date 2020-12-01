import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from 'src/app/models/ingredient.model';
import { Recipe } from 'src/app/models/recipe.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Sushi Sushinni', 
      `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.`,
      'https://p0.pikrepo.com/preview/853/610/fried-food-with-sliced-lemon-on-white-ceramic-plate.jpg',
      [
        new Ingredient('Fish', 3),
        new Ingredient('Bacon', 4),
        new Ingredient('Potatoes', 2),
        new Ingredient('Olive Oil', 1)
      ]
    ),
    new Recipe(
      'Big Fat Burger',
      `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
      'https://p0.pxfuel.com/preview/256/701/65/food-and-drink.jpg',
      [
        new Ingredient('Bread', 5),
        new Ingredient('Meat', 5),
        new Ingredient('Tomatoes', 3)
      ]
    ),
    new Recipe(
      'Vegan Poutaneska',
      `Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.`,
      'https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665__340.jpg',
      [ 
        new Ingredient('Pasta', 8),
        new Ingredient('Mushrooms', 3),
        new Ingredient('Plant Based Cheese ', 2)
      ]
    )
  ];


  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    console.log(this.recipes);
    this.recipesChanged.next(this.recipes.slice());
  }
}
