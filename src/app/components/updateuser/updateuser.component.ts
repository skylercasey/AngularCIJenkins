import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAddService } from 'src/app/services/user-add.service';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {

  constructor(private updateUserService: UserAddService, private router:Router) { }
  confirmPassword: string ='none';

  ngOnInit(): void {
  }

  userForm = new FormGroup({
    username: new FormControl("",[Validators.required, Validators.pattern("[a-zA-Z].*")]),
    oldpassword: new FormControl("",[Validators.required,Validators.minLength(8)]),
    password: new FormControl("",[Validators.required,Validators.minLength(8)]),
    confirmpassword: new FormControl("",[Validators.required,Validators.minLength(8)]),
  });

  userUpdated(){
    if(this.Password.value==this.ConfirmPassword.value){
      this.updateUserService.updateUser([
        this.userForm.value.username,
        this.userForm.value.oldpassword,
        this.userForm.value.password,
        this.userForm.value.confirmpassword
      ]).subscribe(res=>{
        if(res=="EnterCorrectUserNameOrPassword"){
          alert("Please Enter Correct UserName or Password");
          window.location.reload();
        }
        else{
          alert("Updated Successfully");
          window.location.reload();
        }
      });
    }
    this.confirmPassword='inline'
  }
  get Username(): FormControl{ 
    return this.userForm.get('username') as FormControl
  }
  get oldPassword(): FormControl{
    return this.userForm.get('oldpassword') as FormControl
  }
  get Password(): FormControl{
    return this.userForm.get('password') as FormControl
  }
  get ConfirmPassword():FormControl{
    return this.userForm.get('confirmpassword') as FormControl
  }
}
