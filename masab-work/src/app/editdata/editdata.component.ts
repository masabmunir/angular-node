import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-editdata',
  templateUrl: './editdata.component.html',
  styleUrls: ['./editdata.component.css']
})
export class EditdataComponent implements OnInit {

  updateForm!:FormGroup;
  submitted = false;
  constructor(private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.formControls();
  }

  formControls(){
    this.updateForm=this.formbuilder.group({
     firstName: ['', Validators.required],
     lastName: ['', Validators.required],
    })
  }

  get m() { 
    return this.updateForm.controls; 
  }

  onSubmit(){
    this.submitted=true;
    if(this.updateForm.invalid){
      return;
    }
  }
}
