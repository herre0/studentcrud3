import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';


const routes: Routes = [
  {path:'', redirectTo:'students', pathMatch:'full'},
  {path:'students', component:StudentListComponent},
  {path:'update/:id', component:UpdateStudentComponent},
  {path:'add', component:CreateStudentComponent},
  {path:'details/:id', component:StudentDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
