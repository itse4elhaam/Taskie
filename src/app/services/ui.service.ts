import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private showAddTask: boolean = false

  private subject = new Subject<any>();

  constructor() { }


  toggleAddTask(): void{
    this.showAddTask = !this.showAddTask;

    // this will update it because we are providing it the `next` new value
    this.subject.next(this.showAddTask)
  }

  onToggle(): Observable<any>{
    return this.subject.asObservable();
  }
}
