import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class AppServiceService {

  constructor(private http:HttpClient) { }
  
  getData(id:any){
    return this.http.get('/api/getData?id='+id);
  }  

  postData(formdata:any){
    console.log(formdata,"formdata")
    return this.http.post('/api/postData',formdata);
  }  
  updateData(formdata:any){
    console.log(formdata,"formdata")
    return this.http.post('/api/updateData',formdata);
  }  

  geteditdata(id:any){
    return this.http.get('/api/editdata/?id='+id );
  }
}

