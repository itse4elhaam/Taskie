import { Injectable } from '@angular/core';
import { Task } from 'src/app/Task';
import {HttpClient, HttpHeaders} from "@angular/common/http"
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';

  // giving the constructor a parameter allows us to use an instance of that thing by using `this`
  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    const tasks = this.http.get<Task[]>(this.apiUrl);

    return tasks;
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;

    return this.http.delete<Task>(url);
  }

  toggleTaskReminder(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    const newTask = this.http.put<Task>(url, task, httpOptions);
    return newTask;
  }

  addNewTask(task: Task): Observable<Task>{

    const newTask = this.http.post<Task>(this.apiUrl, task, httpOptions)

    return newTask
  }
}
