import { Component, OnInit } from '@angular/core';

import { MultaType } from '@app/core/multa-type/multa-type';
import { MultaTypeService } from '@app/core/multa-type/multa-type.service';

@Component({
  selector: 'app-new-multe-type',
  templateUrl: './new-multe-type.component.html',
  styleUrls: ['./new-multe-type.component.scss'],
})

export class NewMulteTypeComponent implements OnInit {
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
}
