import { Component } from '@angular/core';
import {NewsService} from "./news.service";

@Component({
    selector: "news-list",
    providers: [NewsService],
	styles: [`
    .collapsed {
        height: 16pt;
        overflow: hidden;
    }
    `],
    template: `
    <div>
        <div *ngFor="let news of getAllNews(); let newsId = index">
        <h3>{{news.title}}</h3>
        </div>

    </div>
    `
})
export class NewsList {
    newsSvr : NewsService
    selectedNewsId:number

    constructor(svr:NewsService){
        this.newsSvr=svr
    }

    expandNews(id:number) {
        this.selectedNewsId = id

        return false
    }

    getAllNews(){
        return this.newsSvr.getNewsItems();
    }
}