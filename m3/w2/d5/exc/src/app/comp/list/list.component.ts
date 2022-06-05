import { Component, Input, OnInit } from '@angular/core';
import { Itodo } from 'src/app/interface/itodo';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() i!:Itodo;
  constructor() { }

  ngOnInit(): void {
  }

}
