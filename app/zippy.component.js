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
var Zippy = (function () {
    function Zippy() {
        this.active = false;
    }
    Zippy.prototype.onClick = function () {
        this.active = !this.active;
    };
    Zippy = __decorate([
        core_1.Component({
            selector: 'zippy',
            template: "\n    \n    <div class=\"panel panel-default\">\n        <div class=\"panel-body\"\n        \n        [ngStyle]=\"{\n            height: active ? '200px' : '100%'\n        }\"\n        >\n            <p class=\"heading\" (click)=\"onClick()\">\n            <ng-content select=\".heading\"></ng-content>\n            <i \n            class=\"glyphicon\"\n\n            [ngClass]=\"{\n                'glyphicon-chevron-down': !active,\n                'glyphicon-chevron-up': active\n\n            }\">\n\n\n            </i>\n           \n            <p>\n             <p *ngIf=\"active\" class=\"content\"><ng-content select=\".body\"></ng-content><p>\n        </div>\n    </div>\n\n    ",
            styles: [
                ".content{\n            padding-top: 20px;\n        }\n        .glyphicon {\n            float: right;\n            padding-right: 10px;\n        }\n\n        .heading {\n            font-weight: bold;\n        }\n        \n        "
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], Zippy);
    return Zippy;
}());
exports.Zippy = Zippy;
//# sourceMappingURL=zippy.component.js.map