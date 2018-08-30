import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource, MatPaginator, MatSort} from '@angular/material';
import {MultaType} from './multeType';
import {MultaTypeService} from './multaType.service';

@Component({
  selector: 'app-multe-types',
  templateUrl: './multe-types.component.html',
  styleUrls: ['./multe-types.component.scss']
})
export class MulteTypesComponent implements OnInit {

  multeType: MultaType[];
  displayedColumns: string[] = ['descrizione', 'valore'];
  dataSource:  MatTableDataSource<MultaType>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private multaTypeService: MultaTypeService) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.onInitMulteType();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onInitMulteType() {
    this.multaTypeService.getMulteType().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

  selectRow(row) {
    this.multaTypeService.getMultaType(row.id);
  }

}
