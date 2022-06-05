import { Component, OnInit } from '@angular/core';
import { Itodo } from 'src/app/interface/itodo';
import { getTodo, todo, setTodo, setNewTodo } from 'src/app/main.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})



export class HomeComponent implements OnInit {
  loading:boolean = true
  //  arr!:Itodo[];
  // completi!:Itodo[];
  // title!:string;
  // completed!:boolean;
  tutti!:Itodo[];
  addNeww(){
    setNewTodo(this.inputTodo,this.selectTodo)
    this.inputTodo = ""
  }
  inputTodo!:string;
  selectTodo:any;
  constructor() { }
  
  ngOnInit(): void {
    let p = getTodo()
    p.then(res=>{this.tutti = res; this.loading = !this.loading});
  
    
  }
  // switcha(c:any){
  //   c.completed = !c.completed
  //   console.log(c.completed);
  //   return c
  // }

  
}


