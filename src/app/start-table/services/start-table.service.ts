import { SelectionModel } from '@angular/cdk/collections';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { PoolApiService } from 'src/app/core/services/api/pool-api.service';

@Injectable({
  providedIn: 'root'
})
export class StartTableService {

  constructor(
    private readonly _poolsApi: PoolApiService,
  ) { }

  public uploadPool(formData: FormData) {
    return lastValueFrom(this._poolsApi.postPools(formData));
  }


  public checklistSelection = new SelectionModel<string>(true);
}
