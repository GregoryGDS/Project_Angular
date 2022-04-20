import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarsService } from 'src/app/services/cars/cars.service';

@Component({
  selector: 'app-detail-car',
  templateUrl: './detail-car.component.html',
  styleUrls: ['./detail-car.component.css']
})
export class DetailCarComponent implements OnInit {

  idCar!:string | null;
  car!:Car;

  constructor(private _Activatedroute:ActivatedRoute, private carsService:CarsService ) { }

  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe(paramRoute => {
      this.idCar = paramRoute.get('id');
    });

    this.carsService.getOneCar(this.idCar).subscribe({
      next: carHttp =>{
        this.car = carHttp;
      }
    });


  }

}
