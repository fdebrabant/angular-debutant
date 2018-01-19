import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'mp-counter',
  styles: ['input {width: 40px; text-align: center}'],
  template: `
    <span class="counter">
        <button (click)="decrease()">-</button>
        <input [(ngModel)]="quantity" (ngModelChange)="onModelChange($event)"/>
        <button (click)="increase()">+</button>
    </span>
  `
})
export class CounterComponent implements OnInit {

  @Input() count = 0;

  @Output() countChange: EventEmitter<number> = new EventEmitter<number>();

  quantity: number;

  private updateQuantity() {
    this.quantity = this.count;
    this.countChange.emit(this.count);
  }

  ngOnInit() {
    this.quantity = this.count;
  }

  increase() {
    this.count++;
    this.updateQuantity();
  }

  decrease() {
    this.count = this.count-- < 1 ? 0 : this.count;
    this.updateQuantity();
  }

  onModelChange(quantity: any) {
    this.count = parseInt(quantity, 10) || 1;
    this.countChange.emit(this.count);
  }

}
