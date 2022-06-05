import { Component, OnInit } from '@angular/core';
import { Iposts } from 'src/app/interface/iposts';
import { getPosts } from 'src/app/service/main.service';
@Component({
  selector: 'app-post-attivi',
  templateUrl: './post-attivi.component.html',
  styleUrls: ['./post-attivi.component.css']
})
export class PostAttiviComponent implements OnInit {


 posts:Iposts[] = []



constructor() { }
  ngOnInit(): void {
    
  }

  
}

getPosts();