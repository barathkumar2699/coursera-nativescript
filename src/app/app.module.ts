import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { HttpClientModule } from '@angular/common/http';
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

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

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptHttpClientModule,
        HttpClientModule,
        NativeScriptUISideDrawerModule
    ],
    declarations: [
        AppComponent,
        MenuComponent,
        DishdetailComponent,
        HomeComponent,
        AboutComponent,
        ContactComponent
    ],
    providers: [
    {provide: 'baseURL', useValue: baseURL},
    DishService,
    ProcessHTTPMsgService,
    PromotionService,
    LeaderService],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }