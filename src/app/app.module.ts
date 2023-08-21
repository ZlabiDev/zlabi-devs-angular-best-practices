import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {
    ZdStaticRouteDataInRouterOutletComponent
} from './components/zd-static-route-data/zd-static-route-data-in-router-outlet/zd-static-route-data-in-router-outlet.component';

@NgModule({
    declarations: [
        AppComponent,
        ZdStaticRouteDataInRouterOutletComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
