import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class NewsService{

    constructor(private http:Http) {

    }
    getNewsItems() {
        return this.http.get("../http-test/news_data.json")
    }
}
