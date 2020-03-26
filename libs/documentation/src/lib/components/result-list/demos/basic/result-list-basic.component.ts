import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';

@Component({
  templateUrl: './result-list-basic.component.html',
})

export class ResultListBasic {

  constructor(private change: ChangeDetectorRef) { }

  itemsDefault = [
    { title: 'First', id: 1 },
    { title: 'Second', id: 2 },
    { title: 'Third', id: 3 },
    { title: 'Fourth', id: 4 },
    { title: 'Fifth', id: 5 , hasNewerData:true},
  ];

  items = this.itemsDefault;

}
