import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { Pets } from '../Entities/pets';
import { Treatment } from '../Entities/treatment';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  constructor(private http: HttpClient) {

  }

  getAllPets(): Observable<Pets[]> {
    return this.http.get<Pets[]>(`http://localhost:8092/api/v1/pets`)
  }
  
  getPetById(id:number): Observable<any> {
    return this.http.get<any>(`http://localhost:8092/api/v1/pets/${id}`)
  }

  savePet(pet:any): Observable<any> {
    return this.http.post<any>(`http://localhost:8092/api/v1/pets/add`,pet)
  }


  getPetOwnerById(id:number|string|undefined): Observable<any> {
    return this.http.get<any>(`http://localhost:8092/api/v1/petsCustomer/${id}`)
  }

  getPetTreatmentById(id:number|string|undefined): Observable<any> {
    return this.http.get<any>(`http://localhost:8092/api/v1/PetsTreatments/${id}`)
  }
  
  saveOwner(Customer:any): Observable<any> {
    return this.http.post<any>(`http://localhost:8092/api/v1/customer`,Customer)
  }
  
  updatePetTreatment(pet:any): Observable<any> {
    return this.http.put<any>(`http://localhost:8092/api/v1/pets/updatePetTreatment/${pet.id}`,pet.treatments)
  }




}
