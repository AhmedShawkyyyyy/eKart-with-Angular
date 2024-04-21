import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { users } from 'src/app/userPanel/Model/users';
import { UsersApiService } from 'src/app/userPanel/controllers/users-api.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  user = new users();
  constructor(
    private api: UsersApiService,
    private router: Router,
    private toastr: ToastrService
  ) {}
  submit() {
    this.user.role = 'user';
    this.api.post(this.user).subscribe((data: any) => {
      document.getElementById('successfulRegistiration').style.transition =
        'display 0.5s ease-in-out';
      document.getElementById('successfulRegistiration').style.display =
        'block';
      document.getElementById('form').style.display = 'none';
      // this.toastr.success(`Registration Successful ${this.user.firstname}`);
      this.toastr.success(
        `Registration Successful ${this.user.firstname}`,
        'Great Work !',
        {
          timeOut: 1800,
          positionClass: 'toast-top-right',
          progressAnimation: 'decreasing',
          easeTime: 200,
        }
      );
    });
    setTimeout(() => {
      this.router.navigateByUrl('/log_in');
    }, 2500);
    (error) => {
      this.toastr.error('Something went wrong', 'Oops !😕', {});
    };
  }
  //
  // gender method
  onGenderChange(gender: any) {
    this.user.gender = gender;
  }
}
