import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataElement } from 'src/app/clean/interfaces/element.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() elements: DataElement[] = [];

  @Output() itemSelected = new EventEmitter<DataElement>();

  constructor() { }

  ngOnInit(): void {

  }
  selectElement(element: DataElement) {
    this.itemSelected.emit(element);
  }

}
