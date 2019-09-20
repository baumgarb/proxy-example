import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'proxy-example-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'frontend';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('/api').subscribe((x: {message: string}) => this.title = x.message);
  }

}
