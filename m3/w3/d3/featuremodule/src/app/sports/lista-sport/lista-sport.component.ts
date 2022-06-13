import { Component, OnInit } from '@angular/core';
import { SportClass } from '../sport-class';
import { SportServService } from '../sport-serv.service';

@Component({
  selector: 'app-lista-sport',
  templateUrl: './lista-sport.component.html',
  styleUrls: ['./lista-sport.component.scss']
})
export class ListaSportComponent implements OnInit {

  constructor(private sportServ:SportServService) { }
  sports:SportClass[] = []
  ngOnInit(): void {
    this.sports=this.sportServ.sports
  }

}
