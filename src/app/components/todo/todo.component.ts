import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import {Todo} from './../../models/todo';
import {v4} from 'uuid';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoTitle:string;
  constructor(private todoservices:TodoService) 
  { 

  }

  ngOnInit(): void 
  {

  }

  addTodo=()=>
  {
    const newTodo:Todo=
    {
      id : v4(),
      title : this.todoTitle,
      tdate : new Date(),
      isCompleted : false
    }

    this.todoservices.addTodo(newTodo);
    this.todoTitle='';
  }

}
