import { Injectable } from '@angular/core';
import { SportClass } from './sport-class';

@Injectable({
  providedIn: 'root'
})
export class SportServService {

  constructor() { }
  sports:SportClass[] = [
    {name:'calcio'},
    {name:'tennis'},
    {name:'basket'},
    {name:'pallavolo'},
  ]
}
