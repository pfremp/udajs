"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var tweet_service_1 = require('./tweet.service');
var TweetComponent = (function () {
    function TweetComponent(tweetService) {
        this.title = "Tweets";
        this.allTweets = tweetService.getTweets();
    }
    TweetComponent = __decorate([
        core_1.Component({
            selector: "tweets",
            template: "\n\n    <div *ngFor=\"let tweet of allTweets\" class=\"media\">\n        <div class=\"media-left\">\n            <a href=\"#\">\n                <img class=\"media-object\" src=\"{{tweet.imageURL}}\" alt=\"{{tweet.name}}\">\n            </a>\n        </div>\n        <div class=\"media-body\">\n            <h4 class=\"media-heading\"><span class=\"tweet-title\">{{tweet.name}} </span> <span class=\"twitter-handle\">{{tweet.handle}}</span></h4>\n            <span>{{tweet.description}}</span>\n            <p><like [totalLikes]=\"tweet.totalLikes\" [iLike]=\"tweet.iLike\"></like><p>\n            \n        </div>\n    </div>\n    \n    ",
            styles: ["\n    \n        .twitter-handle {\n            color: #f00;\n        }\n\n    "],
            providers: [tweet_service_1.TweetService]
        }), 
        __metadata('design:paramtypes', [tweet_service_1.TweetService])
    ], TweetComponent);
    return TweetComponent;
}());
exports.TweetComponent = TweetComponent;
//# sourceMappingURL=tweet.component.js.map