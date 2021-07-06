import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  stats: Array<any> = [
    {value: 22, label: "# of Users"},
    {value: 900, label: "Revenue"},
    {value: 50, label: "# of Reviews"}
  ]

  images : Array<any> = [
    {
      link: "assets/images/image-1.jpeg",
      header: "Hello Bae",
      description: "love you",
      add: "Like no one"
    },{
      link: "assets/images/image-2.jpeg",
      header: "Hello World",
      description: "love you :) ",
      add: "yeahh "
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
