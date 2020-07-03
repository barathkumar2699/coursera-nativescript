import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
    selector: 'app-contact',
    moduleId: module.id,
    templateUrl: './contact.component.html',
    // styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit  {
    errMess: string;

    constructor(private routerExtensions: RouterExtensions,
        ) {
    }
    ngOnInit(): void {
        
    }
}