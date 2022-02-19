import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from 'src/app/models/element.model';
import { KeyValue } from 'src/app/models/key-value.model';

@Component({
  selector: 'app-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.css']
})
export class InputSelectComponent implements OnInit {

  @Input() inputHeader: string | undefined;
  @Input() options: KeyValue[] | undefined;
  @Output() selectedField: EventEmitter<string> = new EventEmitter<string>();

  value = '';

  /**
   * Emits the option selected
   * @param value new value
   */
  valueChanged(value: string) {
    this.emitValue(value);
  }

  /**
   * Emits the new value for the input
   * @param value new value
   * @emits returns new value for input text
   */
  private emitValue(value: string) {
    this.selectedField.emit(value);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
