import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
@Component({
  selector: 'app-admin-blog-dashboard',
  templateUrl: './admin-blog-dashboard.component.html',
  styleUrls: ['./admin-blog-dashboard.component.css']
})
export class AdminBlogDashboardComponent implements OnInit {

  public Editor = ClassicEditor;
  constructor() { }

  ngOnInit() {
  }

}
