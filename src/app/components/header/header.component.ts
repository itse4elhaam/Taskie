import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title: string = 'Taskie';


  // can be used in its html file
  toggleAddTask(){
    console.log('toggle')
  }
}
