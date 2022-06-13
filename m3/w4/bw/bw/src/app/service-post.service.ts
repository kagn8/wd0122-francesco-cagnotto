import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iposts } from './interface';

@Injectable({
  providedIn: 'root'
})
export class ServicePostService {
  
  constructor(private http : HttpClient ) { }

  ApiUrlPost:string = 'http://localhost:4201/posts'
  
  getPosts(){
    return this.http.get<Iposts[]>(this.ApiUrlPost)
  }
  createNewPost(post:Iposts):any{
    return this.http.post(this.ApiUrlPost, post)
  }
  removePost(id:number):any{
    return this.http.delete(`${this.ApiUrlPost}/${id}`)
  }
  updatePost(){}
}
