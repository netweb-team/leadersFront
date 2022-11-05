import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('../auth/auth.module')
      .then(module => module.AuthModule),
  },
  {
    path: 'map/:tableId',
    loadChildren: () => import('../map/map.module')
      .then(module => module.MapModule),
  },
  {
    path: 'start-table',
    loadChildren: () => import('../start-table/start-table.module')
      .then(module => module.StartTableModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
