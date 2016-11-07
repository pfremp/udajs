import { Component, EventEmitter } from '@angular/core';


@Component({

    selector: 'subscription-form',
    templateUrl: 'app/subscribe.component.html',

})

export class SubscribeComponent {

    
    log(x: any){
        console.log(x);
    }
}