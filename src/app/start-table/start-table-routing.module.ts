import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StartTablePageComponent } from "./components/start-table-page/start-table-page.component";

const routes: Routes = [
  {path: '', component: StartTablePageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StartTableRoutingModule { }
