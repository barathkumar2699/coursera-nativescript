import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { Comment } from '../shared/comment';
import { DishService } from '../services/dish.service';
import { FavoriteService } from '../services/favorite.service';
import { TNSFontIconService } from 'nativescript-ngx-fonticon';
import { ActivatedRoute, Params } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';
// import 'rxjs/add/operator/switchMap';
import { switchMap } from 'rxjs/operators';
import { Toasty, ToastDuration } from 'nativescript-toasty';
import { Color } from 'tns-core-modules/color';

@Component({
    selector: 'app-dishdetail',
    moduleId: module.id,
    templateUrl: './dishdetail.component.html',
    // styleUrls: ['./dishdetail.component.css']
})
export class DishdetailComponent implements OnInit {

    dish: Dish;
    comment: Comment;
    errMess: string;

    avgstars: string;
    numcomments: number;
    favorite: boolean = false;

    constructor(private dishservice: DishService,
        private route: ActivatedRoute,
        private routerExtensions: RouterExtensions,
        @Inject('BaseURL') private BaseURL,
        private favoriteservice: FavoriteService,
        private fonticon: TNSFontIconService) { }

        ngOnInit() {
            this.route.params
            .pipe(switchMap((params: Params) => this.dishservice.getDish(params['id'])))
              .subscribe(dish => { 
                  this.dish = dish;
                  this.favorite = this.favoriteservice.isFavorite(this.dish.id);
                  this.numcomments = this.dish.comments.length;
        
                  let total = 0;
                  this.dish.comments.forEach(comment => total += comment.rating);
                  this.avgstars = (total/this.numcomments).toFixed(2);
                //   toFixed(2) 计算结果保留前两位
                },
                errmess => { this.dish = null; this.errMess = <any>errmess; });
          }
        
          addToFavorites() {
            if (!this.favorite) {
              console.log('Adding to Favorites', this.dish.id);
              this.favorite = this.favoriteservice.addFavorite(this.dish.id);
              const toast = new Toasty({text:"Added Dish "+ this.dish.id});
              toast.duration = ToastDuration.SHORT;
              toast.textColor = '#fff';
              toast.backgroundColor = new Color('purple');
              toast.show();
            }
          }

    goBack(): void {
        this.routerExtensions.back();
    }
}