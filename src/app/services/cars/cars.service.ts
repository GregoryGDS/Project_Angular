import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from 'src/app/models/car';
import { Createcar } from 'src/app/models/createcar';
import { Updatecar } from 'src/app/models/updatecar';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  private BASE_URL = "http://localhost:3000/cars";

  constructor(private http: HttpClient) { }

  getAllCars(): Observable<Car[]>{
    return this.http.get<Car[]>(`${this.BASE_URL}`);
  }

  getOneCar(idCar: number): Observable<Car>{
    return this.http.get<Car>(`${this.BASE_URL}/${idCar}`);
  }

  createNewCar(car: Createcar): Observable<Createcar>{
    return this.http.post<Createcar>(`${this.BASE_URL}`,car);
  }

  deleteCar(idCar: number): Observable<Car>{
    return this.http.delete<Car>(`${this.BASE_URL}/${idCar}`);
  }

  updateCar(car: Updatecar): Observable<Updatecar>{
    return this.http.put<Updatecar>(`${this.BASE_URL}//${car.id}`, car);
  }

}
