import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  goToPost(b:boolean){
    if(b)
    this.router.navigate(["/active-post"])
    else
    this.router.navigate(["/inactive-post"])
  }
}
