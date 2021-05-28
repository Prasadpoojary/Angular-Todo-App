import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import {Todo} from './../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  Todoes:Todo[]=[];
  constructor() { }

  getTodoes=()=>
  {
    return of(this.Todoes);
  }

  addTodo=(todo:Todo)=>
  {
    this.Todoes.push(todo);
  }

  updateTodo=(todo:Todo)=>
  {
    this.Todoes.filter(ele=>ele.id==todo.id)[0].isCompleted=!this.Todoes.filter(ele=>ele.id==todo.id)[0].isCompleted;
  }

  deleteTodo=(todo:Todo)=>
  {

    this.Todoes.splice(this.Todoes.indexOf(todo),1);
  }


}
