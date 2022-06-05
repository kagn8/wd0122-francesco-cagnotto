import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  etichetta:string = "click";

  disattivato:boolean = false;

  toggle(){
    this.disattivato = !this.disattivato
  }

}
