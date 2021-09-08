import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { identity } from 'rxjs';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  title = 'masab-work';
  registerForm!:FormGroup;
  submitted = false;
  res: any;


  constructor(private service:AppServiceService,
              private formbuilder:FormBuilder, private myRouter: Router){}

  ngOnInit(){
    this.getDataFromAPI();
    //this.postDataFromAPI(123);
    this.formControls();
  }

 formControls(){
   this.registerForm=this.formbuilder.group({
    title: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
   })
 }

  getDataFromAPI(){
    this.service.getData('124').subscribe((response: any)=>{
      console.log('response from API is ', response);
      this.res= response;
    },(error: any)=>{
      console.log('Error is ', error)
    })
  }

  postDataFromAPI(formdata:any){
    //let json = {name:"masab",id:1300}
    this.service.postData(formdata).subscribe((response: any)=>{
      console.log('response from API is ', response);
      this.getDataFromAPI();
    },(error: any)=>{
      console.log('Error is ', error)
    })
  }


  get f() { 
    return this.registerForm.controls; 
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    // display form values on success
    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(, null, 4));
    // let json={
    //   firstname:this.registerForm.value['firstName'],
    //   lastname:this.registerForm.value['lastName'],
    //   title:this.registerForm.value['title'],
    // }

    this.postDataFromAPI(this.registerForm.value);
    console.log(this.registerForm.value)
   

}

onReset(){
  this.submitted = false;
  this.registerForm.reset();
}

editdata(id:any){
  this.myRouter.navigate(['editdata/' + id]);
}

}


