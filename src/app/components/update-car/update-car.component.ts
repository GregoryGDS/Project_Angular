import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarsService } from 'src/app/services/cars/cars.service';

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrls: ['./update-car.component.css']
})
export class UpdateCarComponent implements OnInit {

  idCar!:string | null;
  updateCar!: Car;

  formUpdate!: FormGroup;

  constructor(
    private route:ActivatedRoute,
    private carsService:CarsService,
    private fb:FormBuilder,
    private datepipe: DatePipe,
    private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param =>{
      this.idCar = param.get('id');
    });
  
    this.carsService.getOneCar(this.idCar).subscribe({
      next: carHttp =>{
        this.updateCar = carHttp;

        this.setForm(this.updateCar);
      }
    });
  }

  setForm(car: Car){
    let idate = new Date(car.issuance);
    let issuance_date = this.datepipe.transform(idate, 'yyyy-MM-dd');

    this.formUpdate = this.fb.group({
      title: [car.title, Validators.required],
      address: [car.address, Validators.required],
      brand: [car.brand, Validators.required],
      model: [car.model, Validators.required],
      model_year: [car.model_year, Validators.required],
      issuance: [ issuance_date, Validators.required],
      fuel: [car.fuel, Validators.required],
      color: [car.color],
      numbers_doors: [car.numbers_doors, Validators.required],
      horse_power: [car.horse_power],
      pictures1: [car.pictures[0], Validators.required],
      pictures2: [car.pictures[1]],
      price: [car.price],
      sold: [car.sold],
      mileage:[car.mileage]
    });
  }

  onSubmit(){
    if (this.formUpdate.invalid) {
      console.log("invalid");
      return;
    }
    console.log(this.formUpdate);

    this.updateCar = {
      id: Number(this.idCar),
      title: this.formUpdate.value.title,
      address: this.formUpdate.value.address,
      brand: this.formUpdate.value.brand,
      model: this.formUpdate.value.model,
      model_year: this.formUpdate.value.model_year,
      issuance: this.formUpdate.value.issuance,
      fuel: this.formUpdate.value.fuel,
      color: this.formUpdate.value.color,
      numbers_doors: this.formUpdate.value.numbers_doors,
      horse_power: this.formUpdate.value.horse_power,
      pictures: [
        this.formUpdate.value.pictures1,
        this.formUpdate.value.pictures2
      ],
      price: this.formUpdate.value.price,
      sold: this.formUpdate.value.sold,
      mileage:this.formUpdate.value.mileage
    };

    console.log(this.updateCar);

    this.carsService.updateCar(this.updateCar).subscribe({
      next: (res) => {
        console.log(res)
      },
      error: err => {
        console.log(err)
      },
      complete: () => {
        console.log('update send');
        this.router.navigate(['update-car',this.idCar]);
      }
    });
  }
}

