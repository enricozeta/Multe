import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

export interface PeriodicElement {
  name: string;
  position: number;
  daPagare: number;
  pagate: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', daPagare: 1.0079, pagate: 'H'},
  {position: 2, name: 'Helium', daPagare: 4.0026, pagate: 'He'},
  {position: 3, name: 'Lithium', daPagare: 6.941, pagate: 'Li'},
  {position: 4, name: 'Beryllium', daPagare: 9.0122, pagate: 'Be'},
  {position: 5, name: 'Boron', daPagare: 10.811, pagate: 'B'},
  {position: 6, name: 'Carbon', daPagare: 12.0107, pagate: 'C'},
  {position: 7, name: 'Nitrogen', daPagare: 14.0067, pagate: 'N'},
  {position: 8, name: 'Oxygen', daPagare: 15.9994, pagate: 'O'},
  {position: 9, name: 'Fluorine', daPagare: 18.9984, pagate: 'F'},
  {position: 10, name: 'Neon', daPagare: 20.1797, pagate: 'Ne'},
];

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'daPagare', 'pagate'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor() { }

  ngOnInit() {
  }

}
