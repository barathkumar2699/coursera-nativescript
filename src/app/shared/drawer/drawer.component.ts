import {Component} from "@angular/core";
import { TNSFontIconService } from 'nativescript-ngx-fonticon';
import { login, LoginResult } from "tns-core-modules/ui/dialogs";
import { getString, setString } from "tns-core-modules/application-settings";

@Component({
    selector: 'drawer-content',
    templateUrl: 'drawer.component.html',
})
export class DrawerComponent {

    constructor(private fonticon: TNSFontIconService) { }

    displayLoginDialog() {
        let options = {
            title: "Login",
            message: 'Type Your Login Credentials',
            userName: getString("userName", ""),
            password: getString("password",""),
            okButtonText: "Login",
            cancelButtonText: "Cancel"
        }

        login(options)
            .then((loginResult: LoginResult) => {
                setString("userName", loginResult.userName);
                setString("password", loginResult.password);
            },
            () => { console.log('Login cancelled'); 
        });
    }
}