import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finance-dashboard',
  templateUrl: './finance-dashboard.component.html',
  styleUrls: ['./finance-dashboard.component.scss']
})
export class FinanceDashboardComponent implements OnInit {
  data: any;

  cardData = [
    {
      "revenueName": "$11.7m",
      "revenueValue": "Total Revenue",
      "revenueIcon": " pi pi-arrow-up",
      "revenueIconcolour": '#1aff1a',
      "revenueColour": '#47d1d1',
      "revenuePercentage": "2%"
    },

    {
      "revenueName": "$11.7m",
      "revenueValue": "Total Expenses",
      "revenueIcon": " pi pi-arrow-up",
      "revenueIconcolour": '#ff471a',
      "revenueColour": '#ffb84d',
      "revenuePercentage": "5%"
    },


    {
      "revenueName": "4.2%",
      "revenueValue": "Profit Margin",
      "revenueIcon": " pi pi-stop",
      "revenueColour": '#88B04B',
      "revenuePercentage": "Flat"

    },
    {
      "revenueName": "$3.5k",
      "revenueValue": "Avg Treatment",
      "revenueIcon": " pi pi-arrow-down",
      "revenueIconcolour": '#ff471a',
      "revenueColour": '#ff8093',
      "revenuePercentage": "8%"

    },
    {
      "revenueName": "$11.7m",
      "revenueValue": "Total Revenue",
      "revenueIcon": " pi pi-arrow-up",
      "revenueIconcolour": '#1aff1a',
      "revenueColour": '#6B5B95',
      "revenuePercentage": "2%"
    }

  ]

  revenueDepartmentList1 = ["Cardiology", "Orthipedics", "Neurology", "Emergency", "Pediatrics", "Dermatology"]
  rupees = [" $925k", " $929k", " $876k", " $856k", " $850k", " $821K"]
  revenueDepartmentList2 = ["Urology", "Hematology", "Surgery", "Gynecology", "Ophtamology", "Radiology"]
  rupees1 = ["$813k", "$805k", "$798k", "$787K", "$764K", "$760k"]

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
      labels: ['0-15', '16-30', '30-45', '46-60', '60+'],
      legend: {
        position: 'bottom'
      },
      datasets: [
        {
          data: [25, 20, 35, 15, 5],
          backgroundColor: [
            "#42A5F5",
            "#66BB6A",
            "#FFA726",
          ],
          hoverBackgroundColor: [
            "#64B5F6",
            "#81C784",
            "#FFB74D"
          ]
        }

      ]
    };
  }

}
