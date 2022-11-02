import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-utilization',
  templateUrl: './utilization.component.html',
  styleUrls: ['./utilization.component.scss']
})
export class UtilizationComponent implements OnInit {

  constructor() { } 

  patientData: any;
  patientOptions: any;
  timeData: any;
  timeOptions: any;

  ngOnInit(): void {
    this.patientData = {
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      datasets: [
          {
              label:'bar chat',
              backgroundColor: '#3451a1',
              data: [180, 130, 140, 145, 210, 95, 65]
          },
      ]
  };

  this.timeData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
        {
            label:'bar chat',
            backgroundColor: '#3451a1',
            data: [24, 18, 15, 16, 26, 35, 42]
        },
    ]
};
  }



}
