import { Component } from '@angular/core';
import {NewsService} from "./news.service";

@Component({
    selector: "news-list",
	styles: [`
    .collapsed {
        height: 16pt;
        overflow: hidden;
    }
    `],
    template: `
   <div>
        <div *ngFor="let news of newsItems; let newsId = index">
        <h3>{{news.title}}</h3>
        <p [ngClass]="{collapsed: selectedNewsId != newsId}">
        {{news.body}}
        </p>
        <a href (click)="expandNews(newsId)" 
		*ngIf="selectedNewsId != newsId">More...</a>
        </div>
    </div>
    `,
    providers:[NewsService]
})
export class NewsList {
    newsItems = [];
    selectedNewsId:number

    constructor(private newsSvc: NewsService){
        newsSvc.getNewsItems().subscribe(response=>{
            this.newsItems = response.json();
        }, error=>{
            alert("Sorry there was a problem getting data")
        })
    }

    expandNews(id:number) {
        this.selectedNewsId = id

        return false
    }
}