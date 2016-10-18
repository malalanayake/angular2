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
var news_service_1 = require("./news.service");
var NewsList = (function () {
    function NewsList(newsSvc) {
        var _this = this;
        this.newsSvc = newsSvc;
        this.newsItems = [];
        newsSvc.getNewsItems().subscribe(function (response) {
            _this.newsItems = response.json();
        }, function (error) {
            alert("Sorry there was a problem getting data");
        });
    }
    NewsList.prototype.expandNews = function (id) {
        this.selectedNewsId = id;
        return false;
    };
    NewsList = __decorate([
        core_1.Component({
            selector: "news-list",
            styles: ["\n    .collapsed {\n        height: 16pt;\n        overflow: hidden;\n    }\n    "],
            template: "\n   <div>\n        <div *ngFor=\"let news of newsItems; let newsId = index\">\n        <h3>{{news.title}}</h3>\n        <p [ngClass]=\"{collapsed: selectedNewsId != newsId}\">\n        {{news.body}}\n        </p>\n        <a href (click)=\"expandNews(newsId)\" \n\t\t*ngIf=\"selectedNewsId != newsId\">More...</a>\n        </div>\n    </div>\n    ",
            providers: [news_service_1.NewsService]
        }), 
        __metadata('design:paramtypes', [news_service_1.NewsService])
    ], NewsList);
    return NewsList;
}());
exports.NewsList = NewsList;
//# sourceMappingURL=newsList.component.js.map