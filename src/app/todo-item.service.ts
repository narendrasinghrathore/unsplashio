import {Injectable} from '@angular/core';
import {todoItem} from './class/todo-item';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {MessageService} from './message.service';

@Injectable()

export class TodoItemService {

  constructor(private messageService:MessageService) {
  }

  getTodoItems():Observable<todoItem[]> {
    this.messageService.add('Todo items fetched');
    return of([{id: 1, name: 'List todo item' + 11, note: 'Create item'},
      {id: 2, name: 'List todo item' + 2, note: 'Create item 2'}]);
  }

  getTodoItem(id:number):Observable<todoItem> {
    this.messageService.add(`Todo item: fetched item id=${id}`);
    let item_:todoItem;
    this.getTodoItems().subscribe(
      items => item_ = items.find(
        item => item.id === id
      ));
    return of(item_);
  }

}
