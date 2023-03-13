import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { Treatment } from '../Entities/treatment';

@Injectable({
  providedIn: 'root'
})
export class TreatmentService {
    constructor(private http: HttpClient) {
  
    }

    getAllTreatments(): Observable<Treatment[]> {
        return this.http.get<Treatment[]>(`http://localhost:8092/api/v1/treatments`)
      }

      saveTreatment(treatment:Treatment): Observable<Treatment> {
        return this.http.post<Treatment>(`http://localhost:8092/v1/treatments`,Treatment)
      }

      saveAllTreatement(treatments : Treatment[]): Observable<Treatment[]> {
        return this.http.post<Treatment[]>(`http://localhost:8092/v1/treatments`,treatments)
      }

}
  