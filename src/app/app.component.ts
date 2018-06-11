import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'News App';
  news = {};

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.getNews();
  }

  getNews() {
    this.http.get(`https://hn.algolia.com/api/v1/search_by_date?query=nodejs&tags=story`)
      .subscribe(data => {
        this.news = data
      });
  }
}
