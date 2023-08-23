import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() text!: string;
  
  // this is a custom event and can be referenced anywhere we use the app-button
  @Output() btnClick = new EventEmitter();

  onClick(){
    this.btnClick.emit();
  }
}
