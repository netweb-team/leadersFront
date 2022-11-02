import { Component } from '@angular/core';
import { MatIconRegistryService } from 'src/app/core/services/mat-icon-registry.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'leadersFront';

  constructor(
    public readonly _icons: MatIconRegistryService,
    ) {}
}
