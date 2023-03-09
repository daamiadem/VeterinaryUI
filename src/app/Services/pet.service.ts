import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  constructor(private http: HttpClient) {

  }

  getAllPets(): Observable<any> {
    return this.http.get<any>(` http://localhost:3000/pets`)
  }
  getAllTreatments(): Observable<any> {
    return this.http.get<any>(` http://localhost:3000/treatment`)
  }
  getPetById(id:number): Observable<any> {
    return this.http.get<any>(` http://localhost:3000/pets/${id}`)
  }
  getPetOwnerById(id:number|string|undefined): Observable<any> {
    return this.http.get<any>(` http://localhost:3000/owner/${id}`)
  }
  getPetTreatmentById(id:number|string|undefined): Observable<any> {
    return this.http.get<any>(` http://localhost:3000/treatment/${id}`)
  }
  savePet(pet:any): Observable<any> {
    return this.http.post<any>(` http://localhost:3000/pets`,pet)
  }
  saveOwner(owner:any): Observable<any> {
    return this.http.post<any>(` http://localhost:3000/owner`,owner)
  }
  saveTreatment(treatment:any): Observable<any> {
    return this.http.post<any>(` http://localhost:3000/treatment`,treatment)
  }
  updatePetTreatment(pet:any): Observable<any> {
    return this.http.put<any>(` http://localhost:3000/pets/${pet.id}`,pet)
  }
}
