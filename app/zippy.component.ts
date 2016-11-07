import { Component } from '@angular/core';


@Component({

    selector: 'zippy',
    template: `
    
    <div class="panel panel-default">
        <div class="panel-body"
        
        [ngStyle]="{
            height: active ? '200px' : '100%'
        }"
        >
            <p class="heading" (click)="onClick()">
            <ng-content select=".heading"></ng-content>
            <i 
            class="glyphicon"

            [ngClass]="{
                'glyphicon-chevron-down': !active,
                'glyphicon-chevron-up': active

            }">


            </i>
           
            <p>
             <p *ngIf="active" class="content"><ng-content select=".body"></ng-content><p>
        </div>
    </div>

    `,

    styles: [
        `.content{
            padding-top: 20px;
        }
        .glyphicon {
            float: right;
            padding-right: 10px;
        }

        .heading {
            font-weight: bold;
        }
        
        `
    ]

    
})


export class Zippy {

    active = false;
    

    onClick() {
        this.active = !this.active;
    }

}