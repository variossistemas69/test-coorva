import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Input() text: string = '';

  @Output() textChanged = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {

  }

  onChangeInput(input: any): void {
    const value = input.target.value;
    this.onChangedText(value)
  }
  onChangedText(value: string) {
    this.text = value;
    this.textChanged.emit(value)
  }
}
