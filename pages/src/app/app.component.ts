import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage = 0;
  images = [
    {
      title: "Beach girl",
      url: "https://images.unsplash.com/photo-1544963823-6267c70c3e11?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhY2glMjBnaXJsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
    },
    {
      title: "Garden house",
      url:"https://images.unsplash.com/photo-1555667309-35d7a000ec00?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z2FyZGVuJTIwaG91c2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
    },{
      title: "SA",
      url:"https://images.unsplash.com/photo-1536685868704-82746720c672?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmF5JTIwYXJlYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
    },{
      title: "Beach girl",
      url: "https://images.unsplash.com/photo-1544963823-6267c70c3e11?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhY2glMjBnaXJsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
    },
    {
      title: "Garden house",
      url:"https://images.unsplash.com/photo-1555667309-35d7a000ec00?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z2FyZGVuJTIwaG91c2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
    },{
      title: "SA",
      url:"https://images.unsplash.com/photo-1536685868704-82746720c672?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmF5JTIwYXJlYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
    },{
      title: "Beach girl",
      url: "https://images.unsplash.com/photo-1544963823-6267c70c3e11?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhY2glMjBnaXJsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
    },
    {
      title: "Garden house",
      url:"https://images.unsplash.com/photo-1555667309-35d7a000ec00?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z2FyZGVuJTIwaG91c2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
    },{
      title: "SA",
      url:"https://images.unsplash.com/photo-1536685868704-82746720c672?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmF5JTIwYXJlYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
    },{
      title: "Beach girl",
      url: "https://images.unsplash.com/photo-1544963823-6267c70c3e11?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhY2glMjBnaXJsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
    },
    {
      title: "Garden house",
      url:"https://images.unsplash.com/photo-1555667309-35d7a000ec00?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z2FyZGVuJTIwaG91c2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
    },{
      title: "SA",
      url:"https://images.unsplash.com/photo-1536685868704-82746720c672?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmF5JTIwYXJlYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
    },{
      title: "Beach girl",
      url: "https://images.unsplash.com/photo-1544963823-6267c70c3e11?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhY2glMjBnaXJsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
    },
    {
      title: "Garden house",
      url:"https://images.unsplash.com/photo-1555667309-35d7a000ec00?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z2FyZGVuJTIwaG91c2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
    },{
      title: "SA",
      url:"https://images.unsplash.com/photo-1536685868704-82746720c672?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmF5JTIwYXJlYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
    },{
      title: "Beach girl",
      url: "https://images.unsplash.com/photo-1544963823-6267c70c3e11?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhY2glMjBnaXJsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
    },
    {
      title: "Garden house",
      url:"https://images.unsplash.com/photo-1555667309-35d7a000ec00?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z2FyZGVuJTIwaG91c2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
    },{
      title: "SA",
      url:"https://images.unsplash.com/photo-1536685868704-82746720c672?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmF5JTIwYXJlYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
    },{
      title: "Beach girl",
      url: "https://images.unsplash.com/photo-1544963823-6267c70c3e11?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhY2glMjBnaXJsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
    },
    {
      title: "Garden house",
      url:"https://images.unsplash.com/photo-1555667309-35d7a000ec00?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z2FyZGVuJTIwaG91c2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
    },{
      title: "SA",
      url:"https://images.unsplash.com/photo-1536685868704-82746720c672?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmF5JTIwYXJlYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
    },{
      title: "Beach girl",
      url: "https://images.unsplash.com/photo-1544963823-6267c70c3e11?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhY2glMjBnaXJsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
    },
    {
      title: "Garden house",
      url:"https://images.unsplash.com/photo-1555667309-35d7a000ec00?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z2FyZGVuJTIwaG91c2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
    },{
      title: "SA",
      url:"https://images.unsplash.com/photo-1536685868704-82746720c672?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmF5JTIwYXJlYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
    }
  ]
}
