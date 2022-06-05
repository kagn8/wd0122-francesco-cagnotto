import { Itodo } from "../interface/itodo";

export class NewTodos implements Itodo{
    id: number;
    title: string;
    completed: boolean;
    constructor(tit:string, comp:boolean=false){
      this.id = Math.floor(Math.random()*1000000);
      this.title=tit;
      this.completed=comp
    }
    // setNewTodo(t:Itodo){
    //   todo.push(t)
    // }
    // DeleteTodo(t:Itodo){
  
    // }
  }
