import { Component } from '@angular/core';
import { WikipediaService } from "./wikipedia.service"
import { HttpClientModule } from "@angular/common/http"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'wikipedia';
  pages = [];
  constructor(private serivce : WikipediaService){
  }
  
  onSubmitted(term: any){
    this.serivce.search(term).subscribe(( response : any ) => this.pages = response.query.search )
  }
}
