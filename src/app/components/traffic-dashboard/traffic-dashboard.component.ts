import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-traffic-dashboard',
  templateUrl: './traffic-dashboard.component.html',
  styleUrls: ['./traffic-dashboard.component.scss']
})
export class TrafficDashboardComponent implements OnInit {
  basicData: any;
  basicOptions: any;
  divisionsChartOptions:any;
  options: any;
  overlays: any[];

  constructor(private http: HttpClient) { 

    this.basicOptions = {
      plugins: {
        legend: {

          position: 'none',

          labels: {
            color: '#495057'
          }
        }
      },
      
      scales: {
        x: {
          ticks: {
            color: '#495057'
          },
          grid: {
            color: '#ebedef',
            display:false
          }
        },
        y: {
          ticks: {
            color: '#495057',
            min:0,
            max:15

          },
          grid: {
            color: '#ebedef'
          }
        }
      }
    }
    
    //ClaimDanialChart 
    this.divisionsChartOptions = {
      indexAxis: 'y',
      plugins: {
          legend: {
              position: 'none',
              labels: {
                  color: 'red'
              },
             
          }
      },
      scales: {
          x: {
              ticks: {
                  color: 'white'
              },
              grid: {
                  // color: 'rgba(255,255,255,0.2)',
                  display: false
              }
          },
          y: {
              // type: 'linear',
              display: true,
              position: 'left',
              ticks: {
                  min: 0,
                  max: 100,
                  color: 'black'
              },
              grid: {
                // color: 'rgba(255,255,255,0.2)',
                display: false
            }
          }
      }
   }
  }
  
  ngOnInit(): void {
     this.http.get("assets/chartData.json").subscribe(data => {
      console.log(data);
      this.basicData = data;
    })

    this.options = {
            center: {lat: 36.890257, lng: 30.707417},
            zoom: 12
        };
  }

}
