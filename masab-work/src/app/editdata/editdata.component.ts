import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators,FormBuilder } from '@angular/forms';
import { AppServiceService } from '../app-service.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-editdata',
  templateUrl: './editdata.component.html',
  styleUrls: ['./editdata.component.css']
})
export class EditdataComponent implements OnInit {

  updateForm!:FormGroup;
  submitted = false;
 
  constructor(private formbuilder:FormBuilder,
    private service:AppServiceService,private route:ActivatedRoute,) { }

  ngOnInit(): void {
    this.formControls();
    console.log()

    this.service
      .geteditdata(this.route.snapshot.paramMap.get("id")).subscribe((res:any)=>{
        console.log(res,"response")
        if(res){
          this.updateForm.controls['firstName'].setValue(res.record[0].Fname) //Lname
          this.updateForm.controls['lastName'].setValue(res.record[0].Lname)
          this.updateForm.controls['title'].setValue(res.record[0].title)
        }
      })
      
  }

  formControls(){
    this.updateForm=this.formbuilder.group({
      title:['',Validators.required],
     firstName: ['', Validators.required],
     lastName: ['', Validators.required]
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
    console.log(this.updateForm.value['firstName'])
    let json={
      id:this.route.snapshot.paramMap.get("id"),
      fname:this.updateForm.value['firstName'],
      lname:this.updateForm.value['lastName'],
      title:this.updateForm.value['title']
    }
    console.log(json);
    this.service.updateData(json).subscribe(res=>{
      console.log(res)
    })  
    

  }
  editdata(){
    
  }
}
