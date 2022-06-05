import { Injectable } from '@angular/core';
import { NewTodos } from './class/mainclass';

import { Itodo } from './interface/itodo';


export let todo:Itodo[] = [{id:1,title:"Test-da-completare",completed:false},{id:2,title:"Test-completata",completed:true}]

export function getTodo():Promise<Itodo[]>{
  return new Promise((res, rej) => {
     setTimeout(() => {
      
       res(todo);
     }, 2000);
   }); };

// export function updateTodo(i:Itodo, data:Partial<Itodo>){
//   let id = i.id
//   todo = todo.map(t=>t.id==id?{...t, ...data}:t)
// }
// export function updateTodo(i:Itodo, data:Partial<Itodo>):Promise<Itodo[]>{
//   return new Promise((res)=>{
//     let id = i.id
//     res(todo.map(t=>t.id==id?{...t, ...data}:t) )
  
    
//   })
// }

export function setTodo(i:Itodo):Promise<Itodo[]>{
  
  return new Promise((res)=>{
    setTimeout(() => {
      let id = i.id
      res(todo.map(t=>t.id==id?{...t, completed:!t.completed}:t) )
    
    }, 2000)
  })
};


export function setNewTodo(t:string, comp:boolean=false){
  let n:Itodo = new NewTodos(t,comp)
  todo.push(n)
  console.log(n);
  return getTodo()
  
}


export function deleteTodo(id:number): void{

  let index:number = todo.findIndex(u => u.id === id);
  todo.splice(index, 1);
  
}

export class MainService {

  constructor() { }
}
