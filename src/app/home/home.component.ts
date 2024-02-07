import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  data: any[] = []

  //creating observable
  myObservable = new Observable((observer) => {
    setTimeout(() => { observer.next(1) }, 1000);
    setTimeout(() => { observer.next(2) }, 2000);
    setTimeout(() => { observer.next(3) }, 3000);
    setTimeout(() => { observer.complete() }, 3000);
    setTimeout(() => { observer.error(new Error('Something wrong')) }, 3000);
    setTimeout(() => { observer.next(4) }, 4000);
    setTimeout(() => { observer.next(5) }, 5000);



  });

  getAsyncData() {
    //observer
    //call back function : error,next.complete
    // this.myObservable.subscribe((val:any)=>{
    //   this.data.push(val)
    // },
    // (err)=>{
    //   alert(err.message);
    // },
    // ()=>{
    //   alert("all data emitted")
    // });


    this.myObservable.subscribe({
      next: (val: any) => {
        this.data.push(val);
      },
      error(err) {
        alert(err.message);
      },
      complete() {
        alert("all data emitted")
        console.log(sessionStorage.getItem("authKey"));


      }
    }



    )
  }
}
