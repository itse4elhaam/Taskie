import { Component,Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent {
  @Input() task!: Task;

  // ? how does event emitter work?
  // it creates a custom event for us which we can later mention in the parent of this component

  // this is available in the parent now
  @Output() deleteTaskEvent: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();

  // we should have all of the logic related to the service in the parent component
  deleteTaskHandler(task: Task) {
    this.deleteTaskEvent.emit(task);
  }

  ToggleReminderHandler(task: Task) {
    this.onToggleReminder.emit(task);
  }
}
