import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from 'src/app/auth/auth.module';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { CoreModule } from '../core/core.module';
import { StartTableModule } from '../start-table/start-table.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../auth/interceptors/auth.interceptor';

export let AppInjector: Injector;
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    AuthModule,
    LeafletModule,
    CoreModule,
    StartTableModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private readonly injector: Injector) {
    AppInjector = this.injector;
  }
}
