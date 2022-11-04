import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-dashboard',
  templateUrl: './time-dashboard.component.html',
  styleUrls: ['./time-dashboard.component.scss']
})
export class TimeDashboardComponent implements OnInit {
  selectedValues: string[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
