import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ShoppingListService } from 'src/app/services/shopping-list/shopping-list.service';
import { Ingredient } from 'src/app/models/ingredient.model';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('f', {static: false}) slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.subscription = this.shoppingListService.startedEditing.subscribe((index: number) => {
      this.editedItemIndex = index;
      this.editMode = true;
      this.editedItem = this.shoppingListService.getIngredient(index);
      this.slForm.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount
      })
    });
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    const newIngedient = new Ingredient(value.name, value.amount);
    this.shoppingListService.addIngredient(newIngedient);
    form.reset();
  }

  onUpdateItem(form: NgForm) {
    const value = form.value;
    const newIngedient = new Ingredient(value.name, value.amount);
    this.shoppingListService.updateIngredient(this.editedItemIndex, newIngedient);
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.editMode = false;
    this.slForm.reset();
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.editMode = false;
    this.slForm.reset();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
