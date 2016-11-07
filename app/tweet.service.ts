


export class TweetService{
    
    
    tweet1 = {
        imageURL:"http://lorempixel.com/100/100/people/?!",
        name:"Tweet Name",
        handle:"@TwitterHandle",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
        totalLikes:8,
        iLike:false
    }
    
    tweet2 = {
        imageURL:"http://lorempixel.com/100/100/people/?!",
        name:"Tweet Name",
        handle:"@TwitterHandle",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
        totalLikes:89,
        iLike:false
    }

    tweet3 = {
        imageURL:"http://lorempixel.com/100/100/people/?!",
        name:"Tweet Name",
        handle:"@TwitterHandle",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
        totalLikes:17,
        iLike:false
    }
    
    tweet4 = {
        imageURL:"http://lorempixel.com/100/100/people/?!",
        name:"Tweet Name",
        handle:"@TwitterHandle",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
        totalLikes:2,
        iLike:false
    }

    getTweets(){
        return[this.tweet1, this.tweet2, this.tweet3, this.tweet4]
    }
    

}
