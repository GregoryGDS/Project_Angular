import { Component, Input, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarsService } from 'src/app/services/cars/cars.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  @Input()
  oneCar!: Car

  constructor(
    private carsService:CarsService) { }

  ngOnInit(): void {
  }

  removeCar(id:number){

    this.carsService.deleteCar(id).subscribe({
      next: e => {},
      error: err => {
        console.log('delete car ');
        console.log(err);
      },
      complete:  () => {
        location.reload();
      }
    });

  }

}
