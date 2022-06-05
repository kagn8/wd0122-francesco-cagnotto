import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from 'src/app/classes/user';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  constructor() { }

  prova:string ='new-user'

  ngOnInit(): void {
    console.log(this.prova);
    
  }
  newName:string= ''
  newLastname:string=''
  
  @Output() onManCreated = new EventEmitter();
  @Output() onWomanCreated = new EventEmitter();

  onAddMan(){
    let newUser:User = new User(this.newName, this.newLastname, "M");
    this.onManCreated.emit(newUser)
  }
  onAddWoman(){
    let newUser:User = new User(this.newName, this.newLastname, "F");
    this.onManCreated.emit(newUser)
  }
}
