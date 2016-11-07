import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({

    selector: 'voter',
    template: `
    
    <div class="voter-container">
    <i class="glyphicon glyphicon-menu-up" (click)="upVote()" [class.highlighted]="myVote==1"></i>
    <span class="vote-number">{{ totalVotes + myVote  }}</span>
    <i class="glyphicon glyphicon-menu-down" (click)="downVote()" [class.highlighted]="myVote==-1"></i>
    </div>
    `,
    styles: [`
    .voter-container {
        width: 20px;
        padding-top: 50px;
        text-align: center;
        color: #999;
        
    }
    .vote-number {
        
    }
    .highlighted {
        color: orange;
        
    }
    i {
        cursor: pointer;
    }


    `]


})

export class VoterComponent {
    @Input() totalVotes = 0;
    //votes = 0;
    @Input() myVote = 0;
    //hasVoted = false;

    @Output() vote =  new EventEmitter();

    upVote(){
        if (!(this.myVote==1)){
            
            this.myVote++;
            this.vote.emit({ myVote: this.myVote })
            //this.hasVoted = !this.hasVoted
            //this.countVote()
            //console.log(this.votes)
            //console.log("this.votes")
        }
    }

    downVote(){
            if (!(this.myVote==-1)){
            //this.votes -= 1;
            this.myVote --;
            this.vote.emit({ myVote: this.myVote })
            //this.hasVoted = !this.hasVoted;
            //this.countVote();
            //console.log(this.votes)
        }
    }
    // countVote(){
    //     if (!(this.myVote == 1 || this.myVote == -1)){
    //         this.totalVotes += 1;
    //         console.log(this.totalVotes)
    //     }
    // }
    

  

    

    

}