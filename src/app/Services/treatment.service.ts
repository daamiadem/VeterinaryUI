import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TreatmentService {
    constructor(private http: HttpClient) {
  
    }

    getAllTreatments(): Observable<any> {
        return this.http.get<any>(` http://localhost:3000/pets`)
      }


}
  