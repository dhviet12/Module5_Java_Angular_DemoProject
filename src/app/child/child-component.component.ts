import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {
  
 count: number = 0;

 @Output()
 countChanged: EventEmitter<number> = new EventEmitter<number>();

 increment(){
   this.count++;
   this.countChanged.emit(this.count);
 }

 decrement(){
  this.count--;
  this.countChanged.emit(this.count);
}



  constructor() { }

  ngOnInit(): void {
  }

}
