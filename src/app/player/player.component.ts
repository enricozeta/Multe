import { Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material';

export interface PeriodicElement {
  descrizione: string;
  position: number;
  data: string;
  pagata: boolean;
  valore: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, descrizione: 'Hydrogen', data: '2018/07/07', pagata: true, valore: '10'},
  {position: 2, descrizione: 'Helium', data: '2018/07/07', pagata: true, valore: '10'},
  {position: 3, descrizione: 'Lithium', data: '2018/07/07', pagata: true, valore: '10'},
  {position: 4, descrizione: 'Beryllium', data: '2018/07/07', pagata: true, valore: '10'},
  {position: 5, descrizione: 'Boron', data: '2018/07/07', pagata: true, valore: '10'},
  {position: 6, descrizione: 'Carbon', data: '2018/07/07', pagata: true, valore: '10'},
];

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  displayedColumns: string[] = ['position', 'descrizione', 'data', 'pagata', 'valore'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor() { }

  ngOnInit() {
  }

}
