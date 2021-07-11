import { Component, OnInit } from '@angular/core';
import { PhotosFertcherService } from "../photos-fertcher.service"

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  link = "";
  constructor(private fetcher: PhotosFertcherService){
  }

  getPhoto(){
    this.fetcher.fetchPhoto().subscribe(res => this.link = res );
  }

  ngOnInit(): void {
    this.getPhoto()
  }

}
