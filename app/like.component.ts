import {Component, Input} from '@angular/core'

@Component ({

    selector: 'like',
    template:`
    <i class="glyphicon glyphicon-heart"
    [class.highlighted] = "iLike"
    (click) = "onClick()">
    </i>
    <span>{{ totalLikes }}</span>
    `,
    styles: [`
        .glyphicon-heart {
            color: #ccc;
            cursor: pointer;
        }
        
        .highlighted {
            color: deeppink;
        }
    `]

})

export class LikeComponent {

    @Input() totalLikes = 0;
    @Input() iLike = false;

    onClick() { 
        // Set "iLike" Boolean based on existing value
        this.iLike = !this.iLike;
        // Increase or Decrease "totalLikes" by 1
        // If "this.iLike" is true then increase by 1, else 
        // decrease by 1.
        this.totalLikes += this.iLike ? 1 : -1;
      
    }    
}

