import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {
    ZdStaticRouteDataInRouterOutletComponent
} from "./components/zd-static-route-data/zd-static-route-data-in-router-outlet/zd-static-route-data-in-router-outlet.component";

const routes: Routes = [
    {
        path: 'static-data-1',
        component: ZdStaticRouteDataInRouterOutletComponent,
        data: {
            someStaticData: 'I\'m some static data'
        }
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
