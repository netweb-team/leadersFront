import { SelectionModel } from '@angular/cdk/collections';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import _ from 'lodash';
import { EtalonWithAnalogs } from '../../models/flat';
import { EtalonsService } from '../../services/etalons.service';

@Component({
  selector: 'app-etalon-card',
  templateUrl: './etalon-card.component.html',
  styleUrls: ['./etalon-card.component.scss']
})
export class EtalonCardComponent implements OnInit {



  @Input()
  public etalon?: EtalonWithAnalogs;

  public get analogs() {
    return _.sortBy(this.etalon?.analogs, 'id')
  }

  constructor(
    public readonly etalonService: EtalonsService,
    private readonly _route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
  }

  public async toggleAnalog(analogId: number) {
    const id = analogId.toString();
    const tableId = this._route.snapshot.params.tableId;
    // this.analogsSelection.toggle(id);
    // if (this.analogsSelection.isSelected(id)) {
    const result = await this.etalonService.changeAnalog(tableId, id, 'on');
    if (result.status === 200) {
      this.etalonService.analogsSelection.toggle(analogId.toString());
    }
    // } else {
    //   this._etalon.changeAnalog(tableId, id, 'off');
    // }
  }

}
