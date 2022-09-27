import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataElement } from 'src/app/clean/interfaces/element.interface';
import { fakeElements } from 'src/app/data/fake-data/fake-elements.data';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  filterValue: string = '';
  elements: DataElement[] = [];
  filteredElements: DataElement[] = [];

  constructor(
    private activeRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.filterValue = this.activeRoute.snapshot.queryParams['term'] || '';
    this.elements = fakeElements;
    this.filterValueChanged(this.filterValue);
  }

  filterValueChanged(value: string) {
    const text = value.toLowerCase();
    this.filteredElements = this.elements.filter((element) =>
    (
      (element.name.toLowerCase().indexOf(text) !== -1) ||
      (element.description?.toLowerCase().indexOf(text) !== -1)
    ));
  }
  itemSelected(element: DataElement) {
    console.log("Elemento Seleccionado", element.description);
  }
}
