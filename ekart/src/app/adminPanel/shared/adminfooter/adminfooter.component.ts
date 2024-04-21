import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'admin-footer',
  templateUrl: './adminfooter.component.html',
  styleUrls: ['./adminfooter.component.css'],
})
export class AdminfooterComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  navigateToHome() {
    this.router.navigateByUrl('/home');
  }
}
