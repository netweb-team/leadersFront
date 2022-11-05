import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ResultTablePageComponent } from "./components/result-table-page/result-table-page.component";

const routes: Routes = [
  {path: '', component: ResultTablePageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultTableRoutingModule { }
