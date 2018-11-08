import { Component, OnInit } from '@angular/core';

import { MultaType } from '@app/core/multa-type/multa-type';
import { MultaTypeService } from '@app/core/multa-type/multa-type.service';

@Component({
  selector: 'app-new-multa-type',
  templateUrl: './new-multa-type.component.html',
  styleUrls: ['./new-multa-type.component.scss'],
})

export class NewMultaTypeComponent implements OnInit {
  multaType: MultaType;

  constructor(private multaTypeService: MultaTypeService) {}

  ngOnInit() {
    this.multaType = new MultaType();

    // this._onInitMultaType();
  }

  // _onInitMultaType() {
  //   this.multaTypeService.getMultaTypeById().subscribe(data => {
  //     this.multaType = data;
  //   });
  // }

  addMulta(): void {
    this.multaTypeService.saveMultaType(this.multaType);
  }
}
