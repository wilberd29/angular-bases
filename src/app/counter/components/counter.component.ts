import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter: {{counter}}</h3>
  <button (click)="contador(+1)">+1</button>
  <button (click)="reset()">Reset</button>
  <button (click)="contador(-1)">-1</button>
  `
})
export class CounterComponent implements OnInit {

  public counter: number=7;
  
  constructor() { }

  ngOnInit(): void {
  }
  

  incrementar(){
    this.counter+=1;
  }

  decrementar(){
    this.counter-=1;
  }

  contador(value: number): void {
    this.counter+=value;
  }

  reset(){
    this.counter=7;
  }
}
