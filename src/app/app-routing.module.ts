import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ZdDashboardComponent} from "./components/root/zd-dashboard/zd-dashboard.component";

const routes: Routes = [
    {
        path: '',
        component: ZdDashboardComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
