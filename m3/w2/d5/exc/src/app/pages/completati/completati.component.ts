import { Component, OnInit } from '@angular/core';
import { Itodo } from 'src/app/interface/itodo';
import { deleteTodo, getTodo, setTodo, todo } from 'src/app/main.service';

@Component({
  selector: 'app-completati',
  templateUrl: './completati.component.html',
  styleUrls: ['./completati.component.scss']
})
export class CompletatiComponent implements OnInit {
  loading:boolean=true;
  completati!:Itodo[];

  
    modTodo(i:Itodo){
      i.completed = !i.completed
      let p = getTodo()
      p.then(res=>{this.completati = res.filter((t:Itodo)=>t.completed);})
    }




    eliminazioneTodo(i:Itodo){
      let id:number =i.id
      deleteTodo(id)
      console.log("funziona");
      let p = getTodo()
      p.then(res=>{this.completati = res.filter((t:Itodo)=>t.completed); 
      })
    }

  
  constructor() { }
  
  ngOnInit(): void {
    

    let p = getTodo()
    p.then(res=>{this.completati = res.filter((t:Itodo)=>t.completed); this.loading = !this.loading;;
    })
  }
  
}
// this.setTodo(i:Itodo){}