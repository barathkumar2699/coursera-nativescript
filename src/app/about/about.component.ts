import { Component, OnInit, Inject } from "@angular/core";
import { LeaderService } from "../services/leader.service";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { Leader } from "../shared/leader";


@Component({
  selector: 'app-about',
    moduleId: module.id,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
    leaders: Leader[];
	constructor(private leaderService: LeaderService,
				private route: ActivatedRoute,
				private routerExtensions: RouterExtensions,
				@Inject('baseURL') private BaseURL) {
	}

	ngOnInit() {
		this.leaderService.getLeaders()
            .subscribe(leaders => {this.leaders = leaders;
                console.log(this.leaders)
            });
        
	}

	goBack(): void {
		this.routerExtensions.back();
	}
}
