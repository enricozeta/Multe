import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

import { MultaType } from '@app/core/multa-type/multa-type';
import { MultaTypeService } from '@app/core/multa-type/multa-type.service';

@Component({
  selector: 'app-multe-types',
  templateUrl: './multe-types.component.html',
  styleUrls: ['./multe-types.component.scss'],
})
export class MulteTypesComponent implements OnInit {
  dataSource: MatTableDataSource<MultaType>;
  displayedColumns: string[];

  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  @ViewChild(MatSort)
  sort: MatSort;

  constructor(private multaTypeService: MultaTypeService) {}

  ngOnInit() {
    this.displayedColumns = ['descrizione', 'valore'];

    this._onInitMulteType();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  selectRow(row) {
    this.multaTypeService.goToNewMultaType(row.id);
  }

  _onInitMulteType() {
    this.multaTypeService.getMultaType().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
  }
}
