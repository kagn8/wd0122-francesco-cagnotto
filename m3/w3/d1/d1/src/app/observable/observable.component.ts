import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit, OnDestroy {

  constructor() { }

  sub!: Subscription

  ngOnInit(): void {
    
    //this.sub = interval(1000).subscribe(numero => console.log(numero));
    
    const customInterval = new Observable(observer => {
      let count = 0;
      setInterval(()=>{
        observer.next(count);
        count++;

      },1000)
      customInterval.subscribe(num => console.log(num))
    })
    
  }
  ngOnDestroy(): void {
    //this.sub.unsubscribe()
  }

}
