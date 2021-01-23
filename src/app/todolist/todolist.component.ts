import { Component } from '@angular/core';

import { Todo } from "./to-do";

@Component({
  selector: 'todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})

export class TodolistComponent {

  todoValue : string;
  list: Todo[];

 ngOnInit() {
   this.list = [];
   this.todoValue = "";
 }

 addItem() {
   if(this.todoValue !== "") {
     const newItem: Todo = {
       id: Date.now(),
       value: this.todoValue,
       isDone: false
     };

     this.list.push(newItem);
   }
   this.todoValue = "";
 }

 deleteItem(id: number) {
  this.list = this.list.filter(item => item.id !== id);
 }
}
