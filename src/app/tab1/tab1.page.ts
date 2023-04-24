import { Component, OnInit} from '@angular/core';
import { HomeService } from '../services/home.service';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  test:any;
  sessionDetails:any;
  constructor(private data2: HomeService,
    private http: HttpClient) {}
  ngOnInit(){
    this.data2.getSession().subscribe(dataa => {
      console.log(dataa);
      this.test = dataa;
    })
  }

  GetSessionId(id:any){
    this.data2.getSessionId(id).subscribe(dta=>{
      console.log(dta);
    })
  }
//   getSessionDetails(){
  
//   this.data2.getSessionDetails().subscribe(response => {
//     this.sessionDetails = response;
   
//     console.log(this.sessionDetails);
//   })
// };
}


