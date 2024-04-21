import { Component, HostBinding, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { users } from 'src/app/userPanel/Model/users';
import { UsersApiService } from 'src/app/userPanel/controllers/users-api.service';

@Component({
  selector: 'users-setting',
  templateUrl: './users-setting.component.html',
  styleUrls: ['./users-setting.component.css'],
})
export class UsersSettingComponent {
  users: users[];
  selectedUserId: number | null = null;
  selectedUserRole: string | null = null;
  constructor(
    private api: UsersApiService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.getAllUsersData();
  }
  getAllUsersData() {
    this.api.get().subscribe((data: any) => {
      this.users = data;
      console.log(data);
    });
  }
  //  ===== changeRole
  showChangeRoleMessage: boolean = false;
  openChangeRoleMessage() {
    this.showChangeRoleMessage = true;
  }
  CloseChangeRoleMessage() {
    this.showChangeRoleMessage = false;
  }
  closeChangeRoleOverlay() {
    this.showChangeRoleMessage = false;
  }

  changeRole(role: string) {
    if (this.selectedUserId) {
      this.selectedUserRole = role;
      this.openChangeRoleMessage();
    }
  }
  confirmChangeRole() {
    if (this.selectedUserId && this.selectedUserRole) {
      const userToUpdate = this.users.find(
        (user) => user.id === this.selectedUserId
      );
      if (userToUpdate) {
        userToUpdate.role =
          this.selectedUserRole === 'admin' ? 'user' : 'admin';
        this.api.post(userToUpdate).subscribe(
          () => {
            this.toastr.success('User role updated successfully!', '', {
              positionClass: 'toast-top-left',
              timeOut: 2000,
              progressBar: true,
            });
            this.closeChangeRoleOverlay();
            this.getAllUsersData();
          },
          (error: any) => {
            this.toastr.error('Failed to update user role.', '', {
              positionClass: 'toast-top-left',
              timeOut: 2000,
              progressBar: true,
            });
            console.error('Error updating user role:', error);
          }
        );
      }
    }
  }

  // =============

  removeUser(id: any) {
    this.selectedUserId = id;
    this.openDeleteMessage();
  }
  confirmRemove() {
    this.api.delete(this.selectedUserId).subscribe(() => {
      this.toastr.success('User Deleted Successfully !'),
        {
          timeout: 2000,
          positionClass: 'toast-top-right',
          easeTime: 200,
          preventDuplicates: true,
          progressBar: true,
        };
      this.getAllUsersData();
      this.closeDeleteMessage();
    });
  }

  showDeleteMessage: boolean = false;

  openDeleteMessage() {
    this.showDeleteMessage = true;
  }

  closeDeleteMessage() {
    this.showDeleteMessage = false;
  }

  closeDeleteOverlay() {
    this.showDeleteMessage = false;
  }
}
