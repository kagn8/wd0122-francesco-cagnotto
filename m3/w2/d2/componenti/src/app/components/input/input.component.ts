import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  type:string = 'password'

  nome:string = 'Marco';
  cambiaNome(event:Event){
    let element = <HTMLInputElement>event.target
    this.nome = element.value
  }

  mostra(){
    if(this.type == 'password'){
      this.type = 'text'
    }else{
      this.type = 'password'
    }
    
  }

}
