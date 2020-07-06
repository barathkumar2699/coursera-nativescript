import { Component, OnInit, Inject, ChangeDetectorRef, ViewContainerRef } from '@angular/core';
import { TextField } from "tns-core-modules/ui/text-field";
import { Switch } from "tns-core-modules/ui/switch";
import { Validators, FormBuilder, FormGroup} from '@angular/forms';
import { ModalDialogService, ModalDialogOptions } from "nativescript-angular/modal-dialog";
import { ReservationModalComponent } from "../reservationmodal/reservationmodal.component";
import { DrawerPage } from '../shared/drawer/drawer.page';

@Component({
    selector: 'app-reservation',
    moduleId: module.id,
    templateUrl: './reservation.component.html',
  //  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent extends DrawerPage implements OnInit {

    reservation: FormGroup;

    constructor(private formBuilder: FormBuilder, private modalService: ModalDialogService, 
        private vcRef: ViewContainerRef,private changeDetectorRef: ChangeDetectorRef) {
            super(changeDetectorRef);

            this.reservation = this.formBuilder.group({
                guests: 3,
                smoking: false,
                dateTime: ['', Validators.required]
            });
    }

    createModalView(args) {

        let options: ModalDialogOptions = {
            viewContainerRef: this.vcRef,
            context: args,
            fullscreen: false
        };

        this.modalService.showModal(ReservationModalComponent, options)
            .then((result: any) => {
                if (args === "guest") {
                    this.reservation.patchValue({guests: result});
                }
                else if (args === "date-time") {
                    this.reservation.patchValue({ dateTime: result});
                }
            });

    }

    ngOnInit() {

    }

    onSmokingChecked(args) {
        let smokingSwitch = <Switch>args.object;
        if (smokingSwitch.checked) {
            this.reservation.patchValue({ smoking: true });
        }
        else {
            this.reservation.patchValue({ smoking: false });
        }
    }

    onGuestChange(args) {
        let textField = <TextField>args.object;

        this.reservation.patchValue({ guests: textField.text});
    }

    onDateTimeChange(args) {
        let textField = <TextField>args.object;

        this.reservation.patchValue({ dateTime: textField.text});
    }

    onSubmit() {
        console.log(JSON.stringify(this.reservation.value));
    }
}