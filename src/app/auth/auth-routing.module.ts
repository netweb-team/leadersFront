import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './components/auth-page/auth-page.component';
import { RegistryPageComponent } from './components/registry-page/registry-page.component';

const routes: Routes = [
    {path: '', component: AuthPageComponent},
    {path: 'signup', component: RegistryPageComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
