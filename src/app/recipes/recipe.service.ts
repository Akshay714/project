import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';



@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private slService : ShoppingListService) { }

  recipeSelected = new Subject<Recipe>();
  private recipes: Recipe[] =[

    new Recipe(
      'akshay',
      'test',
      'https://minimalistbaker.com/perfect-roasted-potatoes/',
      [
        new Ingredient('Meat',1),
        new Ingredient('french',2)
      ])
  ];

  getRecipes()
    {
      return this.recipes.slice();
    }

  getRecipe(index : number)
    {
  return this.recipes[index];
    }


  addIngredientsToShoppingList(ingredient : Ingredient[])
    {
      this.slService.addIngredients(ingredient);

    }


}
