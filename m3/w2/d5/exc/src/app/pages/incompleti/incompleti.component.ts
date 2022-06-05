import { Component, OnInit } from '@angular/core';
import { Itodo } from 'src/app/interface/itodo';
import { deleteTodo, getTodo, setTodo } from 'src/app/main.service';

@Component({
  selector: 'app-incompleti',
  templateUrl: './incompleti.component.html',
  styleUrls: ['./incompleti.component.scss']
})
export class IncompletiComponent implements OnInit {

  loading:boolean=true;

  NONcompletati!:Itodo[];

  modTodo(i:Itodo){
    i.completed = !i.completed
    let p = getTodo()
    p.then(res=>{this.NONcompletati = res.filter((t:Itodo)=>!t.completed); 
    })
  }




    eliminazioneTodo(i:Itodo){
      let id:number =i.id
      deleteTodo(id)
      console.log("funziona");
      let p = getTodo()
      p.then(res=>{this.NONcompletati = res.filter((t:Itodo)=>!t.completed);
      })
      
    }
    
  constructor() { }

  ngOnInit(): void {
    let p = getTodo()
    p.then(res=>{this.NONcompletati = res.filter((t:Itodo)=>!t.completed);  this.loading = !this.loading;
    })
  }
  }



