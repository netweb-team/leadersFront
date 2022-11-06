import { SelectionModel } from '@angular/cdk/collections';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EtalonWithAnalogs } from '../../models/flat';
import { EtalonsService } from '../../services/etalons.service';

@Component({
  selector: 'app-etalon-card',
  templateUrl: './etalon-card.component.html',
  styleUrls: ['./etalon-card.component.scss']
})
export class EtalonCardComponent implements OnInit {


  public analogsSelection = new SelectionModel<string>(true);

  @Input()
  public etalon?: EtalonWithAnalogs;

  constructor(
    private readonly _etalon: EtalonsService,
    private readonly _route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

  public toggleAnalog(analogId: number) {
    const id = analogId.toString();
    const tableId = this._route.snapshot.params.tableId;
    this.analogsSelection.toggle(id);
    if (this.analogsSelection.isSelected(id)) {
      this._etalon.changeAnalog(tableId, id, 'on');
    } else {
      this._etalon.changeAnalog(tableId, id, 'off');
    }
  }

}
