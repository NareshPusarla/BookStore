import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/service/userservice/userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  registerForm!: FormGroup;
  submitted = false;
  hide:boolean = true;

  constructor(private formBuilder: FormBuilder, private userService:UserserviceService, private router:Router , private snackBar: MatSnackBar) {}

  ngOnInit():void {
    this.registerForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      service: "advance"
    });
  }

  go(){
    this.router.navigate(['/signup'])
  }

  onSubmit(){
    this.submitted = true;
    if (this.registerForm.valid) {
        console.log("valid data", this.registerForm.value);
        let data={
          email:this.registerForm.value.userName,
          password:this.registerForm.value.password,
          service:this.registerForm.value.service
        }
        this.userService.userLogin(data).subscribe((response:any)=>{
          console.log(response);
          localStorage.setItem('token',response.result.accessToken);
          this.snackBar.open('login successfull','dismiss', {duration:3000});
          this.router.navigateByUrl("/dashboard/books")
        }, (error: any) =>{
          console.log(error);
        })
    } else {
      console.log("invalid");
    }
  }
}
