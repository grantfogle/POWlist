import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { MapComponent } from "./map/map.component";

const appRoutes: Routes = [
    { path: '', redirectTo:'/resorts', pathMatch: 'full'},
    { path: 'resorts', component: HomeComponent },
    { path: 'map', component: MapComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}