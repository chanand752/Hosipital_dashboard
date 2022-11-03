import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-utiliztaion-dashboard',
  templateUrl: './utiliztaion-dashboard.component.html',
  styleUrls: ['./utiliztaion-dashboard.component.scss']
})
export class UtiliztaionDashboardComponent implements OnInit {
  patientData: any;
  patientOptions: any;
  timeData: any;
  timeOptions: any;
  constructor( private http: HttpClient) { 
    this.patientOptions = {
      indexAxis: 'x',
      responsive: false,
      
      plugins: {
          legend: {
              position: 'none',
          },
         
      },
  
      scales: {
          x: {
              ticks: {
                  color: 'balck'
              },
              grid: {
                  color: 'rgba(255,255,255,0.2)',
                  display:false
              }
          },
          y: {
              // type: 'linear',
              display: true,
              position: 'left',
              ticks: {
                  min: 0,
                  max: 12,
                  // color: '#ebedef'
              },
          }
      }
  };
  }

 

  ngOnInit(): void {
    this.http.get("assets/chartData.json").subscribe(data => {
      console.log(data);
      this.patientData = data;
      console.log(this.patientData.PatientsDataVetical)
      
  })
  //   this.patientData = {
  //     labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  //     datasets: [
  //         {
  //             label:'bar chat',
  //             backgroundColor: '#3451a1',
  //             data: [180, 130, 140, 145, 210, 95, 65]
  //         },
  //     ]
  // };

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
