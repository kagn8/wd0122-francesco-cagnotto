import { isNgTemplate } from '@angular/compiler';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'exc';
  persone:any = []
  cambia(){
    this.title = "EXCERCISE"

  }
  ngOnInit(){

    fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()).then(res => {
    for (let persona of res){
      this.persone.push(persona)
    }

  })
  }
  // cancella(item){
  //   // for(let x of this.persone){
  //   //   console.log(x.id);
  //     //  console.log(this.persone.indexof(n));
  //     let item
  //     const removeItem = (item:any)   => {
  //       let newPers = [...this.persone]
  //       const index = newPers.findIndex((element)=>element===item)
  //       if(index !== -1){
  //         newPers.splice(index, 1)
  //         return newPers
  //       }
      }

    // }
    // this.persone.splice(n-1,1)






