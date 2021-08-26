import { Component, OnInit } from '@angular/core';
import { AppServiceService } from './app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'masab-work';

  constructor(private service:AppServiceService){}

  ngOnInit(){
    this.getDataFromAPI();
    this.postDataFromAPI(123)
  }

  getDataFromAPI(){
    this.service.getData('255i').subscribe((response)=>{
      console.log('response from API is ', response);
    },(error)=>{
      console.log('Error is ', error)
    })
  }

  postDataFromAPI(id:any){
    let json = {
      id:122
    }
    this.service.postData(json).subscribe((response)=>{
      console.log('response from API is ', response);
    },(error)=>{
      console.log('Error is ', error)
    })
  }
}
