import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ArchivePageComponent } from "./components/archive-page/archive-page.component";

const routes: Routes = [
  {path: '', component: ArchivePageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArchiveRoutingModule { }
