import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  ////Need to write a service call for all possible filters and bind the data to graph need to work on this.

  //ngx-charts
  width: number = 700;
  height: number = 300;
  fitContainer: boolean = false;

  //view: any[] = [600, 400];
  // options for the chart
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Months';
  showYAxisLabel = true;
  yAxisLabel = 'Total Number of Policies';
  timeline = true;
  doughnut = true;
  colorScheme = {
    domain: ['#937ADC', '#87CEFA', '#808080', '#FF7F50', '#90EE90', '#800080', '#00FFFF', '#7FFFD4', '#808002', '#0000FF', '#FFC0CB', '#008000']
  };
  //pie
  showLabels = true;

  public data = [
    { "name": "Jan", "value": 20 },
    { "name": "Feb", "value": 30 },
    { "name": "Mar", "value": 29 },
    { "name": "Apr", "value": 25 },
    { "name": "May", "value": 190 },
    { "name": "Jun", "value": 200 },
    { "name": "July", "value": 22 },
    { "name": "Aug", "value": 20 },
    { "name": "Sep", "value": 24 },
    { "name": "Oct", "value": 17 },
    { "name": "Nov", "value": 20 },
    { "name": "Dec", "value": 24 }
  ];

  onSelect(event: any) {
    console.log(event);
  }

  ngOnInit(): void { 
  } 
}
