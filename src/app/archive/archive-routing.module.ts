import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ArchiveOnePageComponent } from "./components/archive-one-page/archive-one-page.component";
import { ArchivePageComponent } from "./components/archive-page/archive-page.component";

const routes: Routes = [
  {path: '', component: ArchivePageComponent},
  {path: '/:poolId', component: ArchiveOnePageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArchiveRoutingModule { }
