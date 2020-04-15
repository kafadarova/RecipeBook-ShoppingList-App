import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model'

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    // call the constructor
    new Recipe('A Test Recipe', " This is simply a test", 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/recipe-image-legacy-id-1074500_11.jpg'),
    new Recipe('Another Test Recipe', " This is simply a test", 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/recipe-image-legacy-id-1074500_11.jpg')
  ];

  getRecipes() {
    // return a exact copy of the recipe array (cant access the recipe array from outside)
    return this.recipes.slice();
  }

}
