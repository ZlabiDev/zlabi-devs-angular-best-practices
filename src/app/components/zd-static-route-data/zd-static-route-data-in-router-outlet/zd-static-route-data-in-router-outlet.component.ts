import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Data} from "@angular/router";
import {Observable} from "rxjs";

@Component({
    selector: 'app-zd-static-route-data-in-router-outlet',
    templateUrl: './zd-static-route-data-in-router-outlet.component.html',
    styleUrls: ['./zd-static-route-data-in-router-outlet.component.scss']
})
export class ZdStaticRouteDataInRouterOutletComponent implements OnInit {

    protected activatedRouteData$: Observable<Data>;

    constructor(private activatedRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.activatedRouteData$ = this.activatedRoute.data;
    }
}
