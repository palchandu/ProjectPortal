import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { MiscService } from '../service/MiscellaneousService/misc.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-state-manager',
  templateUrl: './state-manager.component.html',
  styleUrls: ['./state-manager.component.css']
})
export class StateManagerComponent implements OnInit {

  msg:String=null;
  state_list:any[];
  addStateForm= new FormGroup({
    user_state: new FormControl(),
  });

  submitted=false;
  constructor( private formBuilder:FormBuilder,private misc_service:MiscService) { }

  ngOnInit() {
    this.addStateForm=this.formBuilder.group({
      user_state : ['',[Validators.required,Validators.minLength(3)]]
    });

    this.misc_service.showStateList().subscribe(data=>{
      this.state_list=data.result;
    },
    error=>{
      console.log("Error!"+error);
    }
    );
  }

  get f(){
    return this.addStateForm.controls;
  }
  addState(){
    this.submitted = true;
    if (this.addStateForm.invalid) {
      return;
  }
  this.misc_service.saveStateList(this.f.user_state.value).subscribe(res=>{
    console.log(res.message);
    this.msg = res.message;
  },err=>{
    return err;
    console.log(err);
  })

  }

}
