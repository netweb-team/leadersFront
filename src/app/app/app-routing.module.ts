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
    path: 'start',
    loadChildren: () => import('../start-table/start-table.module')
      .then(module => module.StartTableModule),
  },
  {
    path: 'result-table',
    loadChildren: () => import('../result-table/result-table.module')
      .then(module => module.ResultTableModule),
  },
  {
    path: 'archive',
    loadChildren: () => import('../archive/archive.module')
      .then(module => module.ArchiveModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
