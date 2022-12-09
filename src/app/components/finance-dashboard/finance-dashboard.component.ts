import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finance-dashboard',
  templateUrl: './finance-dashboard.component.html',
  styleUrls: ['./finance-dashboard.component.scss']
})
export class FinanceDashboardComponent implements OnInit {

//  12/02/2022 code

// data: any;

// cardData = [
//   {
//     "revenueName": "$11.7m",
//     "revenueValue": "Total Revenue",
//     "revenueIcon": " pi pi-arrow-up",
//     "revenueIconcolour": '#1aff1a',
//     "revenueColour": ' #26a5c5',
//     "revenuePercentage": "2%"
//   },

//   {
//     "revenueName": "$11.7m",
//     "revenueValue": "Total Expenses",
//     "revenueIcon": " pi pi-arrow-up",
//     "revenueIconcolour": '#ff471a',
//     "revenueColour": '#ffb84d',
//     "revenuePercentage": "5%"
//   },


//   {
//     "revenueName": "4.2%",
//     "revenueValue": "Profit Margin",
//     "revenueIcon": " pi pi-stop",
//     "revenueColour": '#88B04B',
//     "revenuePercentage": "Flat"

//   },
//   {
//     "revenueName": "$3.5k",
//     "revenueValue": "Avg Treatment",
//     "revenueIcon": " pi pi-arrow-down",
//     "revenueIconcolour": '#ff471a',
//     "revenueColour": '#ff8093',
//     "revenuePercentage": "8%"

//   },
//   {
//     "revenueName": "$800k",
//     "revenueValue": "Net Cash Flow",
//     "revenueIcon": " pi pi-arrow-up",
//     "revenueIconcolour": '#1aff1a',
//     "revenueColour": '#6B5B95',
//     "revenuePercentage": "2%"
//   }

// ]

// revenueDepartmentList1 = ["Cardiology", "Orthipedics", "Neurology", "Emergency", "Pediatrics", "Dermatology"]
// rupees = [" $925k", " $929k", " $876k", " $856k", " $850k", " $821K"]
// revenueDepartmentList2 = ["Urology", "Hematology", "Surgery", "Gynecology", "Ophtamology", "Radiology"]
// rupees1 = ["$813k", "$805k", "$798k", "$787K", "$764K", "$760k"]


// expenseDepartmentList= ["Dermatology","Ophtamology","Emergency","Surgery","Urology","Radiology"]
// rupees2 = [" $925k", " $929k", " $876k", " $856k", " $850k", " $821K"]
// expenseDepartmentList2=["Pediatrics","Cardiology","Neurology","Orthipedics","Hematology","Gynecology",]
// rupees3 = ["$813k", "$805k", "$798k", "$787K", "$764K", "$760k"]





// chartOptions: any;
// data1: { labels: string[]; legend: { position: string; }; datasets: { data: number[]; backgroundColor: string[]; hoverBackgroundColor: string[]; }[]; };
// constructor() {
//   this.chartOptions = {
//     responsive: false,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         position: 'bottom',
//         labels: {
//           boxWidth: 12
//         }
//       }
//     }

//   }
// }

// ngOnInit(): void {

//   this.data = {
//     labels: ['0-15', '16-30', '31-45', '46-60', '60+'],
//     legend: {
//       position: 'bottom'
//     },
//     datasets: [
//       {
//         data: [20,15,5,35,25],
//         backgroundColor: [
//           "#1e76fa",
//           "#FFA726",
//           "#bfbfbf",
//           "#ffd11a",
//           "#42A5F5",
          
//         ],
//         // hoverBackgroundColor: [
//         //   "#64B5F6",
//         //   "#81C784",
//         //   "#FFB74D"
//         // ]
//       }

//     ]
//   };


// this.data1 = {
//   labels: ['0-15', '16-30', '31-45', '46-60', '60+'],
//   legend: {
//     position: 'bottom'
//   },
//   datasets: [
//     {
//       data: [15, 10, 25, 20, 30],
//       backgroundColor: [
//           "#1e76fa",
//           "#FFA726",
//           "#bfbfbf",
//           "#ffd11a",
//           "#42A5F5",
//       ],
//       hoverBackgroundColor: [
//         // "#64B5F6",
//         // "#81C784",
//         // "#FFB74D"
//       ]
//     }

//   ]
// };

// }
// }



  data: any;
  data1: any;

  cardData = [
    {
      "borderRadius": "1rem",
      "revenueName": "$11.7m",
      "revenueValue": "Total Revenue",
      "revenueIcon": " pi pi-arrow-up",
      "revenueIconcolour": '#8aff58',
      "revenueColour": '#318fb1',
      "revenuePercentage": "2%"
    },

    {
      "revenueName": "$11.7m",
      "revenueValue": "Total Expenses",
      "revenueIcon": " pi pi-arrow-up",
      "revenueIconcolour": '#ff0014',
      "revenueColour": '#f2b565',
      "revenuePercentage": "4%"
    },


    {
      "revenueName": "4.2%",
      "revenueValue": "Profit Margin",
      "revenueIcon": " pi pi-stop",
      "revenueColour": '#78ae5a',
      "revenuePercentage": "Flat"

    },
    {
      "revenueName": "$3.5k",
      "revenueValue": "Avg Treatment",
      "revenueIcon": " pi pi-arrow-down",
      "revenueIconcolour": '#ff0014',
      "revenueColour": '#ed7881',
      "revenuePercentage": "8%"

    },
    {
      "revenueName": "$800 k",
      "revenueValue": "Net Cash Flow",
      "revenueIcon": " pi pi-arrow-up",
      "revenueIconcolour": '#8bfe58',
      "revenueColour": '#9da5f6',
      "revenuePercentage": "2%"
    }

  ]

  revenueDepartmentList1 = ["Cardiology", "Orthopedics", "Neurology", "Emergency", "Pediatrics", "Dermatology"]
  rupees = [" $925k", " $929k", " $876k", " $856k", " $850k", " $821K"]
  revenueDepartmentList2 = ["Urology", "Hematology", "Surgery", "Gynecology", "Ophtamology", "Radiology"]
  rupees1 = ["$813k", "$805k", "$798k", "$787K", "$764K", "$760k"]


  expenseDepartmentList= ["Dermatology","Ophtamology","Emergency","Surgery","Urology","Radiology"]
  rupees2 = [" $925k", " $929k", " $876k", " $856k", " $850k", " $821K"]
  expenseDepartmentList2=["Pediatrics","Cardiology","Neurology","Orthipedics","Hematology","Gynecology",]
  rupees3 = ["$813k", "$805k", "$798k", "$787K", "$764K", "$760k"]

  chartOptions: any;
  constructor() {
    this.chartOptions = {
      responsive: false,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            boxWidth: 12
          }
        }
      }

    }
  }

  ngOnInit(): void {
    this.data = {
       labels: ['0-15', '16-30', '31-45', '46-60', '60+'],
      legend: {
        position: 'bottom'
      },
      datasets: [
        {
          data: [20,15,5,35,25],
          backgroundColor: [
            "#5b9cd6",
            "#ee7c2f",
            "#a5a5a5",
            "#ffc000",
            "#4473c5",
            
          ],
          hoverBackgroundColor: [
            "#5b9cd6",
            "#ee7c2f",
            "#a5a5a5",
            "#ffc000",
            "#4473c5",
            
          ]
        }

      ]
    };
  
  
  this.data1 = {
  labels: ['0-15', '16-30', '31-45', '46-60', '60+'],
  legend: {
    position: 'bottom'
  },
  datasets: [
    {
      data: [15, 10, 25, 20, 30],
      backgroundColor: [
        "#5b9cd6",
        "#ee7c2f",
        "#a5a5a5",
        "#ffc000",
        "#4473c5",
      ],
      hoverBackgroundColor: [
        "#5b9cd6",
        "#ee7c2f",
        "#a5a5a5",
        "#ffc000",
        "#4473c5",
      ]
    }

  ]


}
  }

}
