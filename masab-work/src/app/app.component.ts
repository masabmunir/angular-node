import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import { AppServiceService } from './app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'masab-work';
  registerForm!:FormGroup;
  submitted = false;


  constructor(private service:AppServiceService,
              private formbuilder:FormBuilder){}

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
    },(error: any)=>{
      console.log('Error is ', error)
    })
  }

  postDataFromAPI(formdata:any){
    let json = {name:"masab",id:1300}
    
    this.service.postData(formdata).subscribe((response: any)=>{
      console.log('response from API is ', response);
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
    let json={
      firstname:this.registerForm.value['firstName'],
      lastname:this.registerForm.value['lastName'],
      title:this.registerForm.value['title'],

    }
    this.postDataFromAPI(this.registerForm.value);
    console.log(json)
}

onReset(){
  this.submitted = false;
  this.registerForm.reset();
}
}

