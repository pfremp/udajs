"use strict";
var TweetService = (function () {
    function TweetService() {
        this.tweet1 = {
            imageURL: "http://lorempixel.com/100/100/people/?!",
            name: "Tweet Name",
            handle: "@TwitterHandle",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
            totalLikes: 8,
            iLike: false
        };
        this.tweet2 = {
            imageURL: "http://lorempixel.com/100/100/people/?!",
            name: "Tweet Name",
            handle: "@TwitterHandle",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
            totalLikes: 89,
            iLike: false
        };
        this.tweet3 = {
            imageURL: "http://lorempixel.com/100/100/people/?!",
            name: "Tweet Name",
            handle: "@TwitterHandle",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
            totalLikes: 17,
            iLike: false
        };
        this.tweet4 = {
            imageURL: "http://lorempixel.com/100/100/people/?!",
            name: "Tweet Name",
            handle: "@TwitterHandle",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
            totalLikes: 2,
            iLike: false
        };
    }
    TweetService.prototype.getTweets = function () {
        return [this.tweet1, this.tweet2, this.tweet3, this.tweet4];
    };
    return TweetService;
}());
exports.TweetService = TweetService;
//# sourceMappingURL=tweet.service.js.map