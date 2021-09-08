import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataComponent } from './data/data.component';
import { EditdataComponent } from './editdata/editdata.component';

const routes: Routes = [
  {
    path:"",
    component:DataComponent
  },
  {
    path:"editdata/:id",
    component:EditdataComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
