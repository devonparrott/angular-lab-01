import { Component } from '@angular/core';
 interface Todo {
     task: string;
     completed: boolean;
 }
@Component({
  selector: 'todo-root',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent {
  title = 'lab01';

  todos: Todo [] = [
    {task: "walk the dog", completed: false},
    {task: "vacuum", completed: true},
    {task: "wash the dishes", completed: false},
  ];

  // completed() {
  //   task.completed = true;
  // };


}
