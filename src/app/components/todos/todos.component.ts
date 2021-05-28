import { Component, OnInit } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { TodoService } from 'src/app/services/todo.service';
import {Todo} from './../../models/todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[];
  faTrash=faTrash;
  constructor(private todoservice:TodoService) 
  { 

  }

  ngOnInit(): void 
  {
    this.todoservice.getTodoes().subscribe(todo=>
      {
        this.todos=todo;
      })

     
    
  }

  updateTodo=(todo:Todo)=>
  {
   this.todoservice.updateTodo(todo);
  }

  deleteTodo=(todo:Todo)=>
  {
    this.todoservice.deleteTodo(todo);
  }
}
