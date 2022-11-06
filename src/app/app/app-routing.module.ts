import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/guards/auth.guard';
import { NotAuthGuard } from '../auth/guards/not-auth.guard';

const routes: Routes = [
{
  path: 'auth',
  loadChildren: () => import('../auth/auth.module')
    .then(module => module.AuthModule),
  canActivate: [NotAuthGuard],
},
{
  path: 'map/:tableId',
  loadChildren: () => import('../map/map.module')
    .then(module => module.MapModule),
  canActivate: [AuthGuard],
},
{
  path: 'start',
  loadChildren: () => import('../start-table/start-table.module')
    .then(module => module.StartTableModule),
  canActivate: [AuthGuard],
},
{
  path: 'result-table',
  loadChildren: () => import('../result-table/result-table.module')
    .then(module => module.ResultTableModule),
  canActivate: [AuthGuard],
},
{
  path: 'archive',
  loadChildren: () => import('../archive/archive.module')
    .then(module => module.ArchiveModule),
},
{
  path: '**',
  redirectTo: 'auth'
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
