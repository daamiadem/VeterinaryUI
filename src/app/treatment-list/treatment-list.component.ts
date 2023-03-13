import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Treatment } from '../Entities/treatment';
import { TreatmentService } from '../Services/treatment.service';

@Component({
  selector: 'app-treatment-list',
  templateUrl: './treatment-list.component.html',
  styleUrls: ['./treatment-list.component.css']
})
export class TreatmentListComponent implements OnInit {

  constructor( private treatmentService : TreatmentService,  private router: Router) { }
  treatments : Treatment[] = [] ; 
  displayedColumns: string[] = ['position', 'type', 'date', 'status', "price", "actions"];

  ngOnInit(): void {
    this.treatmentService.getAllTreatments().subscribe(treatment => this.treatments= treatment) ; 
  }

}
