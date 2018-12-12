import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectBlogsListComponent } from './project-blogs-list/project-blogs-list.component';
import { ProjectBlogsSingleComponent } from './project-blogs-single/project-blogs-single.component';
import { PublicLayoutComponent } from './layout/public-layout/public-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { LoginLayoutComponent } from './layout/login-layout/login-layout.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminProjectDashboardComponent } from './admin-project-dashboard/admin-project-dashboard.component';
import { AdminBlogDashboardComponent } from './admin-blog-dashboard/admin-blog-dashboard.component';
import { AuthGuardService as AuthGuard } from './service/auth-guard.service';
import { RegisterComponent } from './register/register.component';
import { CollegeManagerComponent } from './college-manager/college-manager.component';
import { UniversityManagerComponent } from './university-manager/university-manager.component';
import { StateManagerComponent } from './state-manager/state-manager.component';
import { MiscellaneousComponent } from './miscellaneous/miscellaneous.component';
const appRoutes:Routes=[
  { path: '', redirectTo: 'projects_list', pathMatch: 'full' },
  { 
    path: '', 
    component: PublicLayoutComponent, 
    data: { title: 'Public Views' }, 
    children: [
      { path :'',redirectTo: 'projects_list', pathMatch: 'full' },
      { path :'projects_list',component:ProjectListComponent },
      { path :'projects_details',component:ProjectDetailsComponent },
      { path :'projects_details',component:ProjectDetailsComponent },
      { path :'blogs',component:ProjectBlogsListComponent },
      { path :'blogs_details',component:ProjectBlogsSingleComponent },
      { path :'register',component:RegisterComponent }
    ] 
  },
  { path: 'admin', 
    component: AdminLayoutComponent,
    canActivate: [AuthGuard], 
    data: { title: 'Admin Views' }, 
    children: [
      { path :'',redirectTo: 'dashbaord', pathMatch: 'full' },
      { path :'dashbaord',component:AdminDashboardComponent },
      { path :'projects',component:AdminProjectDashboardComponent },
      { path :'blogs_manager',component:AdminBlogDashboardComponent },
      { path :'misc',component:MiscellaneousComponent,children:[
          { path:'',component:StateManagerComponent},
          { path:'state',component:StateManagerComponent},
          { path:'university',component:UniversityManagerComponent},
          { path:'college',component:CollegeManagerComponent},
      ] },
    ] 
  },
  { path: 'login', 
    component: LoginLayoutComponent, 
    data: { title: 'Admin Views' }, 
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
