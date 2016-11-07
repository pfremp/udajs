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
var LikeComponent = (function () {
    function LikeComponent() {
        this.totalLikes = 0;
        this.iLike = false;
    }
    LikeComponent.prototype.onClick = function () {
        // Set "iLike" Boolean based on existing value
        this.iLike = !this.iLike;
        // Increase or Decrease "totalLikes" by 1
        // If "this.iLike" is true then increase by 1, else 
        // decrease by 1.
        this.totalLikes += this.iLike ? 1 : -1;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], LikeComponent.prototype, "totalLikes", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], LikeComponent.prototype, "iLike", void 0);
    LikeComponent = __decorate([
        core_1.Component({
            selector: 'like',
            template: "\n    <i class=\"glyphicon glyphicon-heart\"\n    [class.highlighted] = \"iLike\"\n    (click) = \"onClick()\">\n    </i>\n    <span>{{ totalLikes }}</span>\n    ",
            styles: ["\n        .glyphicon-heart {\n            color: #ccc;\n            cursor: pointer;\n        }\n        \n        .highlighted {\n            color: deeppink;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], LikeComponent);
    return LikeComponent;
}());
exports.LikeComponent = LikeComponent;
//# sourceMappingURL=like.component.js.map