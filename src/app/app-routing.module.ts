import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from './components/cars/cars.component';
import { CreateCarComponent } from './components/create-car/create-car.component';
import { DetailCarComponent } from './components/detail-car/detail-car.component';

const routes: Routes = [
  {
    path:'',
    component:CarsComponent
  },
  {
    path:'detail-car/:id',
    component:DetailCarComponent
  },
  {
    path:'create-pokemon',
    component:CreateCarComponent
  },
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
