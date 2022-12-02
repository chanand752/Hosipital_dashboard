import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-ar-dash-board',
    templateUrl: './ar-dash-board.component.html',
    styleUrls: ['./ar-dash-board.component.scss']
})
export class ArDashBoardComponent implements OnInit {
    //Bar Chart Varibles

    value: number = 80;

    basicData: any;
    basicOptions: any;
    horizontalOptions: any;
    pieChartOptions:any;
    claimDanialChartOptions:any;
    
    // piChart Varibles
    data: any;
    products: any = {};

    constructor(private http: HttpClient) {

    }

    ngOnInit(): void {

        this.http.get("assets/chartData.json").subscribe(data => {
            console.log(data);
            this.products = data;
            console.log(this.products.barChatDataHorizental)
            console.log(this.products.pieChartData)
        })

    


        this.basicOptions = {
            indexAxis: 'x',
            responsive: false,
            
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
                        color: 'black'
                    },
                    grid: {
                        color: 'rgba(255,255,255,0.2)',
                        display:true
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

        this.horizontalOptions = {
            indexAxis: 'y',
            plugins: {
                legend: {
                    position: 'none',
                    labels: {
                        color: '#495057'
                    }
                }
            },
            // scales: {
            //     x: {
            //         ticks: {
            //             color: '#495057'
            //         },
            //         grid: {
            //             color: '#ebedef'
            //         }
            //     },
            //     y: {
            //         ticks: {
            //             color: '#495057'
            //         },
            //         grid: {
            //             color: '#ebedef'
            //         }
            //     },
            // }

        };
         //Pie Chart 
         this.pieChartOptions = {
            responsive: false,
      maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                    boxWidth: 12
                    }
                }
            },
         }

         //ClaimDanialChart 
         this.claimDanialChartOptions = {
            indexAxis: 'y',
            plugins: {
                legend: {
                    position: 'none',
                    labels: {
                        color: '#ffffff'
                    },
                   
                }
            },
            scales: {
                x: {
                    display: false,
                    ticks: {
                        color: 'white'
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
                        color: '#ffffff'
                    },
                    grid :{
                        display:false
                    }
                }
            }
         }
    }

   


}
