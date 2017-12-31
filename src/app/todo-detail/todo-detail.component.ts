import { Component, OnInit, Input } from '@angular/core';
import {todoItem} from '../class/todo-item';
import {TodoItemService} from '../todo-item.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {

  // @Input() itemSelected : todoItem;
  itemSelected: todoItem;

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoItemService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getTodo();
  }

  getTodo():void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.todoService.getTodoItem(id).subscribe(item => this.  itemSelected = item );
  }

  goBack():void{
    this.location.back();
  }

}
