import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    if(!localStorage.getItem('token_admin'))
    {
      this.router.navigateByUrl('login');
    }
  }

}
