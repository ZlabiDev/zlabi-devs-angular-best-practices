import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ZdStaticRouteDataInRouterOutletComponent} from './zd-static-route-data-in-router-outlet.component';

describe('ZdStaticRouteDataInRouterOutletComponent', () => {
    let component: ZdStaticRouteDataInRouterOutletComponent;
    let fixture: ComponentFixture<ZdStaticRouteDataInRouterOutletComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ZdStaticRouteDataInRouterOutletComponent]
        });
        fixture = TestBed.createComponent(ZdStaticRouteDataInRouterOutletComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
