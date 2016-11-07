import {Component} from '@angular/core'

@Component({
    selector: 'favourite',
    template: `
        <i
        class="glyphicon"
        [class.glyphicon-star-empty] = "!isFavourite"
        [class.glyphicon-star] = "isFavourite"
        (click) = "onClick()">
        
        </i>
        <p>Envelope icon: <span class="glyphicon glyphicon-envelope"></span></p> 
        `
        


})


export class FavouriteComponent {
    isFavourite = false;

    onClick() {
        this.isFavourite = !this.isFavourite;
    }

}