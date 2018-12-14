import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

import { MultaType } from '@app/core/multa-type/multa-type';
import { MultaTypeService } from '@app/core/multa-type/multa-type.service';

@Component({
  selector: 'app-multa-types',
  templateUrl: './multa-types.component.html',
  styleUrls: ['./multa-types.component.scss'],
})

export class MultaTypesComponent implements OnInit {
  dataSource: MatTableDataSource<MultaType>;
  displayedColumns: string[];
  visible: boolean;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private multaTypeService: MultaTypeService) {}

  ngOnInit() {
    this.visible = true;
    this._onInitMulteType();
    this.displayedColumns = ['descrizione', 'valore'];
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  selectRow(row) {
    this.multaTypeService.goToNewMultaType(row.id);
  }

  _onInitMulteType() {
    this.multaTypeService.getMultaType().subscribe(data => {
      this.dataSource = new MatTableDataSource( data.sort(function(a, b) {
        return a.descrizione.localeCompare(b.descrizione);
      }));
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      if (data.length === 0) {
        this.visible = false;
      }
    });
  }
}
