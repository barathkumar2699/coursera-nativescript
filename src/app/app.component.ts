import { Component, OnInit, Inject } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
// import * as app from "application";
import { ViewChild, AfterViewInit, ChangeDetectorRef } from "@angular/core";
import { RadSideDrawerComponent } from "nativescript-ui-sidedrawer/angular";
import { RouterExtensions } from "nativescript-angular/router";
import { DrawerTransitionBase, RadSideDrawer, SlideInOnTopTransition } from "nativescript-ui-sidedrawer";
import { filter } from "rxjs/operators";
import {baseURL} from './shared/baseurl'

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent implements OnInit, AfterViewInit{
    private _activatedUrl: string;
    private _sideDrawerTransition: DrawerTransitionBase;

    constructor(private router: Router, private routerExtensions: RouterExtensions,
        private _changeDetectionRef: ChangeDetectorRef) {
        // Use the component constructor to inject services.
    }
    ngAfterViewInit(): void {
        // throw new Error("Method not implemented.");
        this.sideDrawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    }

    @ViewChild(RadSideDrawerComponent, { static: false }) public drawerComponent: RadSideDrawerComponent;
    private sideDrawer: RadSideDrawer;

    ngOnInit(): void {
        this._activatedUrl = "/menu";
        this._sideDrawerTransition = new SlideInOnTopTransition();

        this.router.events
        .pipe(filter((event: any) => event instanceof NavigationEnd))
        .subscribe((event: NavigationEnd) => this._activatedUrl = event.urlAfterRedirects);
    }

    get sideDrawerTransition(): DrawerTransitionBase {
        return this._sideDrawerTransition;
    }

    isComponentSelected(url: string): boolean {
        return this._activatedUrl === url;
    }

    onNavItemTap(navItemRoute: string): void {
        this.routerExtensions.navigate([navItemRoute], {
            transition: {
                name: "fade"
            }
        });

        // const sideDrawer = <RadSideDrawer>app.getRootView();
        this.sideDrawer.closeDrawer();
    }
}