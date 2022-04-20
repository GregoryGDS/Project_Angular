import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarsService } from 'src/app/services/cars/cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: Car[] = [];
  orderPrice: string = 'ASC';
  filterargs: string = '';

  constructor(private carsService:CarsService) { }

  ngOnInit(): void {

    this.carsService.getAllCars().subscribe({
      next:carHttp => {
        this.cars = carHttp;
      },
      error: err => {
        console.log('ERREUR all cars')
      },
      complete: () => {
        console.log('completed all cars');
      }
    });
  }

  sortPrice(){
    if (this.orderPrice === 'ASC') {
      this.orderPrice = 'DESC';
    }else{
      this.orderPrice = 'ASC';
    }
  }

}
