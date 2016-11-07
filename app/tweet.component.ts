import { Component } from '@angular/core';
import { TweetService } from './tweet.service';
import { LikeComponent } from './like.component'

@Component ({

    selector: "tweets",
    template:`

    <div *ngFor="let tweet of allTweets" class="media">
        <div class="media-left">
            <a href="#">
                <img class="media-object" src="{{tweet.imageURL}}" alt="{{tweet.name}}">
            </a>
        </div>
        <div class="media-body">
            <h4 class="media-heading"><span class="tweet-title">{{tweet.name}} </span> <span class="twitter-handle">{{tweet.handle}}</span></h4>
            <span>{{tweet.description}}</span>
            <p><like [totalLikes]="tweet.totalLikes" [iLike]="tweet.iLike"></like><p>
            
        </div>
    </div>
    
    `,
    styles:[`
    
        .twitter-handle {
            color: #f00;
        }

    `],
    providers:[TweetService]


})

export class TweetComponent {

    title: string = "Tweets";
    allTweets: Object [];

    constructor(tweetService: TweetService){
        this.allTweets = tweetService.getTweets();
    }


}