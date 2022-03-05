import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/service/userservice/userservice.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  registerForm!: FormGroup;
  submitted = false;
  hide:boolean = true;

  constructor(private formBuilder: FormBuilder, private userService:UserserviceService, private route:Router, private snackBar: MatSnackBar) {}

  ngOnInit():void {
    this.registerForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      service: "advance"
    });
  }

  go(){
    this.route.navigate(['/login'])
  }

  onSubmit(){
    this.submitted = true;
    if (this.registerForm.valid) {
        console.log("valid data", this.registerForm.value);
        let data={
          fullName:this.registerForm.value.fullName,
          email:this.registerForm.value.userName,
          password:this.registerForm.value.password,
          phone:this.registerForm.value.mobileNumber,
          service:this.registerForm.value.service
        }
        this.userService.userRegister(data).subscribe((response:any)=>{
          console.log(response);
          this.snackBar.open('registration done','dismiss', {duration:3000});
        }, (error: any) =>{
          console.log(error);
        })
    } else {
      console.log("invalid");
    }
  }
}
