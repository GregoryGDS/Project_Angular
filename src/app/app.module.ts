import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsComponent } from './components/cars/cars.component';
import { CarComponent } from './components/car/car.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DetailCarComponent } from './components/detail-car/detail-car.component';
import { CreateCarComponent } from './components/create-car/create-car.component';
import { UpdateCarComponent } from './components/update-car/update-car.component';

import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';

import { MatSliderModule } from '@angular/material/slider';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarComponent,
    NavbarComponent,
    DetailCarComponent,
    CreateCarComponent,
    UpdateCarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HttpClientModule,
    
    FormsModule,
    ReactiveFormsModule,
    
    //material design
    MatSliderModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatCheckboxModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
