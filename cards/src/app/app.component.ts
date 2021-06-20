import { Component  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: "Natue",
      imageUrl: "assets/tree.jpeg",
      username: "natureLover",
      content: "hello nature love youu"
    },
        {
      title: "Biking",
      imageUrl: "assets/biking.jpeg",
      username: "biking lover",
      content: "hello bike love youu"
    },{
      title: "Mountain",
      imageUrl: "assets/mountain.jpeg",
      username: "Mountain",
      content: "hello mountain love youu"
    }
  ]
}
