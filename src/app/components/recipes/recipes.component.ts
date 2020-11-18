import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe/recipe.service';
import { Recipe } from 'src/models/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor() { }

  ngOnInit(): void {
  }


}
