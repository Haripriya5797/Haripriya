import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{LoginComponent} from './login/login.component';
import {TeacherComponent} from './teacher/teacher.component';
import {StudentComponent} from './student/student.component';
import{HomeComponent} from './home/home.component';
import { ScheduleComponent } from './schedule/schedule.component';
import{UpdateComponent} from './update/update.component';
import{UpdateteacherComponent} from './updateteacher/updateteacher.component'


const routes: Routes = [
  {path:'',redirectTo:'/Home',pathMatch:'full'},
  {path:'Home',component:HomeComponent},
  {path:'Login' ,component:LoginComponent},
  {path:'Teacher',component:TeacherComponent},
  {path:'student',component:StudentComponent},
  {path:'TimeTable',component:ScheduleComponent},
  {path:'Update/:id',component:UpdateComponent},
  {path:'UpdateTeacher/:id',component:UpdateteacherComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
