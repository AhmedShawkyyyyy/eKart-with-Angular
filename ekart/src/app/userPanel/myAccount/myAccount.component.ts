import { users } from 'src/app/userPanel/Model/users';
import { Component, OnInit } from '@angular/core';
import { UsersApiService } from '../controllers/users-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-myAccount',
  templateUrl: './myAccount.component.html',
  styleUrls: ['./myAccount.component.css'],
})
export class MyAccountComponent implements OnInit {
  users: users;
  id: any;
  constructor(
    private api: UsersApiService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {
    this.getUserInfo();
  }

  ngOnInit() {}

  getUserInfo() {
    this.route.paramMap.subscribe((params) => {
      const userId = params.get('id') || localStorage.getItem('userId');
      if (userId) {
        this.api.getById(userId).subscribe((data: any) => {
          this.users = data;
          console.log(this.users);
        });
      }
    });
  }
  updateUserInfo() {
    this.users.role = 'user';
    const userId = localStorage.getItem('userId');
    this.api.put(userId, this.users).subscribe(
      (data: any) => {
        console.log(this.users);
        this.toastr.success(
          `Account updated successfully ${this.users.firstname} !`,
          '',
          {
            timeOut: 3000,
            positionClass: 'toast-bottom-left',
            progressBar: true,
            progressAnimation: 'decreasing',
          }
        );
      },
      (error) => {
        this.toastr.error('Something went wrong', 'Oops !😕', {
          timeOut: 3000,
          positionClass: 'toast-bottom-left',
          progressBar: true,
          progressAnimation: 'decreasing',
        });
      }
    );
  }
}
