import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from 'src/app/models/element.model';

@Component({
  selector: 'app-input-value',
  templateUrl: './input-value.component.html',
  styleUrls: ['./input-value.component.css']
})
export class InputValueComponent implements OnInit {
  @Input() isEnabled = false;
  @Input() inputHeader = '';
  @Output() inputValue: EventEmitter<string> = new EventEmitter<string>();

  value = '';

  /**
   * Emits the value typed
   */
  valueChanged(value: string) {
    this.emitValue(value);
  }

  /**
   * Empties the input and emits the new value
   */
  resetValue() {
    this.value = '';
    this.emitValue('');
  }

  /**
   * Emits the new value for the input
   * @emits returns new value for input text
   */
  private emitValue(value: string) {
    this.inputValue.emit(value);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
