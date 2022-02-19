import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FilterFileds } from 'src/app/models/filter-fileds.model';
import { KeyValue } from 'src/app/models/key-value.model';
import { InputValueComponent } from '../input-value/input-value.component';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Input()
  searchFields!: KeyValue[];
  @Output() filterParams: EventEmitter<FilterFileds> = new EventEmitter<FilterFileds>();


  @ViewChild(InputTextComponent)
  inputValue!: InputValueComponent;

  searchText = '';
  searchField = '';

  fieldSelected(selectedField: string) {
    if (this.searchField !== selectedField) {
      '' !== this.searchField ? this.inputValue.resetValue() : null;
      this.searchField = selectedField;
    }
  }

  onInputChanged(inputValue: string) {
    this.searchText = inputValue;
    this.emitValue( this.searchField, this.searchText);
  }

  /**
   * Emits the new value for filtering
   * @param searchField new field
   * @param searchText new text
   * @emits returns new value for filtering
   */
  private emitValue(searchField: string, searchText: string) {
    this.filterParams.emit({ field: searchField, text: searchText });
  }
  constructor() { }

  ngOnInit(): void {
  }

}
function InputTextComponent(InputTextComponent: any) {
  throw new Error('Function not implemented.');
}

