import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { MatIconRegistryService } from 'src/app/core/services/mat-icon-registry.service';
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'leadersFront';

  constructor(
    public readonly _icons: MatIconRegistryService,
    public readonly auth: AuthService,
    public readonly router: Router,
    ) {
      this.auth.getAuth();
      this.auth.isAuth$.subscribe(
        res => {
          if (!res) {
            this.router.navigate(['/auth'])
          }
        }
      )
    }
}
