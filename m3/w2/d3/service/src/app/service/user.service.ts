import { Injectable } from '@angular/core';
import { User } from '../class/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {}
    users:User[] = [
      {
        name: 'Marco',
        lastname: 'Rossi',
        gender: 'M'
      },
      {
        name: 'Giorgia',
        lastname: 'Caccavallo',
        gender: 'F'
      },
      {
        name: 'Sandra',
        lastname: 'Mondaini',
        gender: 'Fluid'
      }
    ]
   
}
