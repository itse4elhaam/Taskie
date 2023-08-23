import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';
import { TASKS } from '../../mock-tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  // void means it doesn't return anything

  // normally this is done using observables 
  // because we are using async stuff to get data from the backend
  ngOnInit(): void {
    // this.tasks = this.taskService.getTasks();


    // .subscribe here is like .then
    this.taskService.getTasks().subscribe((tasks) =>  this.tasks = tasks)
  }
}
