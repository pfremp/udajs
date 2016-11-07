import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
import {FavouriteComponent} from './favourite.component';
import {LikeComponent} from './like.component';
import {VoterComponent} from './voter.component';
import {TweetComponent} from './tweet.component';
import {Zippy} from './zippy.component';
import {SubscribeComponent} from './subscribe.component';


import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ 
    AppComponent,
    CoursesComponent,
    AuthorsComponent,
    FavouriteComponent,
    LikeComponent,
    VoterComponent,
    TweetComponent,
    Zippy,
    SubscribeComponent
   ],
  bootstrap: [ AppComponent ],

})
export class AppModule { }
