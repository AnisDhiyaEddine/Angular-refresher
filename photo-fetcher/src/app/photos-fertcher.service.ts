import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { pluck } from "rxjs/operators"

interface splushRes {
  urls:{
    regular : string
  }
}

@Injectable({
  providedIn: 'root'
})

export class PhotosFertcherService {

  constructor(private client : HttpClient) {}

  fetchPhoto(){
    return this.client.get<splushRes>("https://api.unsplash.com/photos/random?client_id=zaM9QiSEIwmQf0vvo8ofHm3T8uFOJxnid-TgDiFFvsA").pipe(
      pluck("urls", "regular")
      )
  }
}
