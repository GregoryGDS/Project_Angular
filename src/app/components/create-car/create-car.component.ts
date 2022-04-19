import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Car } from 'src/app/models/car';
import { Createcar } from 'src/app/models/createcar';
import { CarsService } from 'src/app/services/cars/cars.service';

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})
export class CreateCarComponent implements OnInit {

  formCreate!: FormGroup ; //= this.formBuilder.group()
  newCar!:Createcar;

  constructor(
    private formBuilder: FormBuilder,
    private carsService:CarsService
  ) { }

  ngOnInit(): void {

    this.formCreate = this.formBuilder.group({
      
      title: [null, Validators.required],
      address: [null, Validators.required],
      brand: [null, Validators.required],
      model: [null, Validators.required],
      model_year: [null, Validators.required],
      issuance: [null, Validators.required],
      fuel: [null, Validators.required],
      color: [null],
      numbers_doors: [null, Validators.required],
      horse_power: [null],
      pictures: [null, Validators.required],
      price: [null],
      sold: [null],
      mileage:[null]
    });

  }
  onSubmit(){
    console.log("submit");
    console.log(this.formCreate);

    if (this.formCreate.invalid) {
      console.log("invalid");
      return;
    }

    this.newCar = {
      title: this.formCreate.value.title,
      address: this.formCreate.value.address,
      brand: this.formCreate.value.brand,
      model: this.formCreate.value.model,
      model_year: this.formCreate.value.model_year,
      issuance: this.formCreate.value.issuance,
      fuel: this.formCreate.value.fuel,
      color: this.formCreate.value.color,
      numbers_doors: this.formCreate.value.numbers_doors,
      horse_power: this.formCreate.value.horse_power,
      pictures: [this.formCreate.value.pictures],
      price: this.formCreate.value.price,
      sold: (this.formCreate.value.sold == null)?false:true,
      mileage:this.formCreate.value.mileage
    };

console.log(this.newCar);

    this.carsService.createNewCar(this.newCar).subscribe({
      next: (res) => {
        console.log(res)
      },
      error: err => {
        console.log(err)
      },
      complete: () => {
        console.log('add send');
      }
    });
  }

}
