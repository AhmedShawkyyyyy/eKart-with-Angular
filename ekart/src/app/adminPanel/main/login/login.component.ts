import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { timeout } from 'rxjs';
import { users } from 'src/app/userPanel/Model/users';
import { UsersApiService } from 'src/app/userPanel/controllers/users-api.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  user = new users();
  message: string = '';
  constructor(
    private api: UsersApiService,
    private router: Router,
    private toastr: ToastrService
  ) {}
  submit() {
    this.api.get().subscribe((data: any) => {
      let user = data.find((user: any) => {
        return (
          user.email === this.user.email && user.password === this.user.password
        );
      });
      if (user) {
        localStorage.setItem('userId', user.id);
        if (user.role === 'admin') {
          localStorage.setItem('loggedIn', 'true');
          this.router.navigateByUrl('/dashboard');
        } else {
          this.toastr.success(`Wellcome Back ${user.firstname} 🌹`),
            {
              messageClass: 'Lets Go to Log home page',
              timeout: 1800,
              positionClass: 'toast-top-center',
              easeTime: 300,
              preventDuplicates: true,
              showEasing: 'swing',
              hideEasing: 'linear',
              showMethod: 'fadeIn',
              hideMethod: 'fadeOut',
            };

          setTimeout(() => {
            this.router.navigateByUrl('/home');
          }, 2500);
        }
      } else {
        this.toastr.error('Something went wrong', 'Oops !😕'),
          {
            toastClass: 'custom-error-class',
            messageClass: 'Lets Go to Log home page',
            timeout: 1800,
            positionClass: 'toast-top-center',
            easeTime: 300,
            preventDuplicates: true,
          };
        this.message = 'Invalid email or password! ';
        setTimeout(() => {
          this.message = '';
        }, 2000);
      }
    });
  }

  navigateToSignUp() {
    this.router.navigateByUrl('sign_up');
  }
}
