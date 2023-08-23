import { Injectable } from '@angular/core';
import { Task } from 'src/app/Task';
import {HttpClient, HttpHeaders} from "@angular/common/http"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {

  private apiUrl = "http://localhost:5000/tasks"
  

  // giving the constructor a parameter allows us to use an instance of that thing by using `this`
  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    const tasks = this.http.get<Task[]>(this.apiUrl);

    return tasks;
  }

  deleteTask(task: Task): Observable<Task>{

    const url = `${this.apiUrl}/${task.id}`

    console.log(url)

    return this.http.delete<Task>(url);
  }
}
