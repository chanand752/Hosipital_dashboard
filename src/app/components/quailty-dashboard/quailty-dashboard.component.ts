import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-quailty-dashboard',
  templateUrl: './quailty-dashboard.component.html',
  styleUrls: ['./quailty-dashboard.component.scss']
})
export class QuailtyDashboardComponent implements OnInit {
  basicData: any;
  basicOptions: any;
  incidentsOptions: any;

  // Doughunt Chart
  data: any;
  chartOptions: any;

  constructor(private http: HttpClient) {
    this.chartOptions = {
      responsive: false,
      maintainAspectRatio: false,
      indexAxis: 'y',
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            color: '#495057',
            boxWidth: 12
            
          },
        //   tooltip: {
        //     enabled: true,
        //     intersect: false,
        //     mode: 'nearest',
        //     callbacks: {
        //       label: (item) => item.parsed + '%'
        //     },
        // }
        }
      
      }
    }
    this.incidentsOptions = {
      indexAxis: 'y',
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
          display:false,
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
            color: '#495057'
          },
          grid: {
            color: '#ebedef',
            display:false
          }
        }
      }
    }
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
            color: '#495057'
          },
          grid: {
            color: '#ebedef',
          
          }
        }
      }
    }

  }

  ngOnInit(): void {
    this.http.get("assets/chartData.json").subscribe(data => {
      console.log(data);
      this.basicData = data;
      console.log(this.basicData.lineChartDataForOverAllStaticfaction)
      console.log(this.basicData.ReadmissionRatesLineChart)

    })

    
  }

}
