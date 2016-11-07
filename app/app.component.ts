import { Component, EventEmitter } from '@angular/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
import {FavouriteComponent} from './favourite.component';


@Component({
    selector: 'my-app',
    template: `

    <subscription-form></subscription-form>
    <h1>Hello Angular</h1>
    <zippy>
    <span class="heading">Heading</span>
    <span class="body">this is the body</span>
    </zippy>
    <zippy>
    <span class="heading">Heading 2</span>
    <span class="body">this </span>
    </zippy>
    <courses></courses>
    <authors></authors>
    <favourite></favourite>
    <like [totalLikes]="tweet.totalLikes" [iLike]="tweet.iLike"></like>
    <voter
    [totalVotes]="post.voteCount"
    [myVote]="post.myVote"
    (vote)="onVote($event)"
    
    ></voter>
    <tweets></tweets>
    `
 
})



export class AppComponent {

    tweet = {
        totalLikes: 10,
        iLike: false
    }

    post = {
        voteCount: 10,
        myVote: 0
    }

    onVote(){
        console.log("hello")
    }
 }
