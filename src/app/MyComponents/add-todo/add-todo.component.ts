import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../Todo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {
  title: string = "";
  description: string = "";
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  onSubmit(){
    const todo = {
      srno: 8,
      title: this.title,
      desc: this.description,
      active: true
    }
    this.todoAdd.emit(todo);
  }
}
