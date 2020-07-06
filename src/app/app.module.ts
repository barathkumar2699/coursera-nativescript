import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { HttpClientModule } from '@angular/common/http';
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { TNSFontIconModule, TNSFontIconService, USE_STORE  } from 'nativescript-ngx-fonticon';
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { HomeComponent } from './home/home.component';

import { DishService } from './services/dish.service';
import { ProcessHTTPMsgService } from './services/process-httpmsg.service';
import { LeaderService } from './services/leader.service';

import { baseURL } from './shared/baseurl';
import { PromotionService } from "./services/promotion.service";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { DrawerComponent } from "./shared/drawer/drawer.component";
import { FavoriteService } from "./services/favorite.service";
import { FavoritesComponent } from "./favourite/favorites.component";
import { ReservationComponent } from "./reservation/reservation.component";
import { ReservationModalComponent } from "./reservationmodal/reservationmodal.component";
import { CommentComponent } from "./comment/comments.component";
import { CouchbaseService } from './services/couchbase.service';

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

// TNSFontIconService.debug = true;

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptHttpClientModule,
        HttpClientModule,
        NativeScriptUISideDrawerModule,
        NativeScriptUIListViewModule,
        NativeScriptFormsModule,
        ReactiveFormsModule,
        TNSFontIconModule.forRoot({
            'fa': ('./fonts/font-awesome.min.css')
        })
        // TNSFontIconModule.forRoot({})
    ],
    declarations: [
        AppComponent,
        MenuComponent,
        DishdetailComponent,
        HomeComponent,
        AboutComponent,
        ContactComponent,
        DrawerComponent,
        FavoritesComponent,
        ReservationComponent,
        ReservationModalComponent,
        CommentComponent
    ],
    entryComponents: [ReservationModalComponent,CommentComponent],
    providers: [
       
    {provide: 'BaseURL', useValue: baseURL},
    DishService,
    ProcessHTTPMsgService,
    PromotionService,
    LeaderService,
    FavoriteService,
    CouchbaseService
],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
