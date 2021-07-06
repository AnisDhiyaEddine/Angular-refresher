import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {

  data: Array<any> = [
    { name: "Anis", age: 21, job: "Engineer" },
    { name: "Khaoula", age: 20, job: "Diététicienne" },
    { name: "Moussa", age: 26, job: "Engineer" }
  ]

  headers: Array<any> = [
    { key: "name", label: "Name" },
    { key: "age", label: "Age" },
    { key: "job", label: "Job" }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
