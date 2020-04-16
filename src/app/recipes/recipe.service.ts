import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model'
import { Ingredient } from '../shared/ingredient.model'
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    // call the constructor
    new Recipe(
      'A Test Recipe',
      " This is simply a test",
      'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/recipe-image-legacy-id-1074500_11.jpg',
      [new Ingredient('Meat', 1), new Ingredient('Eggs', 12)]),
    new Recipe('Another Test Recipe', " This is simply a test", 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/recipe-image-legacy-id-1074500_11.jpg', [new Ingredient('Meat', 1), new Ingredient('Eggs', 12)])
  ];

  constructor(private slService: ShoppingListService) { }

  getRecipes() {
    console.log(this.recipes);

    // return a exact copy of the recipe array (cant access the recipe array from outside)
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

}
