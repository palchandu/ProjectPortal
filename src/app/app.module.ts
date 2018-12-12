import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { ReactiveFormsModule, FormControl, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectBlogsListComponent } from './project-blogs-list/project-blogs-list.component';
import { ProjectBlogsSingleComponent } from './project-blogs-single/project-blogs-single.component';
import { from } from 'rxjs';
import { PublicLayoutComponent } from './layout/public-layout/public-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { AppRoutingModule } from './app-routing.module';
import { LoginLayoutComponent } from './layout/login-layout/login-layout.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminProjectDashboardComponent } from './admin-project-dashboard/admin-project-dashboard.component';
import { AdminBlogDashboardComponent } from './admin-blog-dashboard/admin-blog-dashboard.component';
import { LoginServiceService } from './service/LoginService/login-service.service';
import { RegisterComponent } from './register/register.component';
import { CollegeManagerComponent } from './college-manager/college-manager.component';
import { UniversityManagerComponent } from './university-manager/university-manager.component';
import { StateManagerComponent } from './state-manager/state-manager.component';
import { MiscellaneousComponent } from './miscellaneous/miscellaneous.component';
import { MiscService } from './service/MiscellaneousService/misc.service';
@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    ProjectDetailsComponent,
    ProjectBlogsListComponent,
    ProjectBlogsSingleComponent,
    PublicLayoutComponent,
    AdminLayoutComponent,
    LoginLayoutComponent,
    AdminDashboardComponent,
    AdminProjectDashboardComponent,
    AdminBlogDashboardComponent,
    RegisterComponent,
    CollegeManagerComponent,
    UniversityManagerComponent,
    StateManagerComponent,
    MiscellaneousComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CKEditorModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'},LoginServiceService,MiscService],
  bootstrap: [AppComponent]
})
export class AppModule { }
