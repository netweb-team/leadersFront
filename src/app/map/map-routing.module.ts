import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MapPageComponent } from "./components/map-page/map-page.component";
import { MapComponent } from "./components/map/map.component";

const routes: Routes = [
  {path: '', component: MapPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapRoutingModule { }
