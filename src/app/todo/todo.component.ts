import { Component, OnInit } from '@angular/core';
import {todoItem} from '../class/todo-item';
import {TodoItemService} from '../todo-item.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  title = null; list : todoItem[] = []; item : todoItem = {id:1,name:'Todo 1',note:'Created a new todo'};
  //variable  :type
  selectedItem:todoItem;

  constructor(private todoItemService: TodoItemService) { }

  ngOnInit() {
    // initialization logic goes here
    this.title = "Todo list";
    // adding new items in list of type todoItem
    this.getTodoItems();
  }

  onSelect(item : todoItem):void{
    this.selectedItem = item;
  }

  getTodoItems():void{
    this.todoItemService.
    getTodoItems().
    subscribe(items => this.list = items);
  }

}
