import { Component, OnInit } from '@angular/core';

// interface User= [{name:string;}]
@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  

  users:{name:string; lastname:string;}[] = [{name: 'john', lastname: 'doe'}, {name:'Jane', lastname:'Cascointegrale'}]
  numbers:number[] =[1,2,3]
}
