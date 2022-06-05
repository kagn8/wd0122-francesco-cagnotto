import { Component } from '@angular/core';
import { User } from './classes/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'emit';

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

  name:string ='';
  lastname:string ='';

  aggiungiUomo(user:User){
    
    this.users.push(user)
  }
  aggiungiDonna(user:User){
    
    this.users.push(user)
  }

  visibile:boolean = false;
}
