import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  full_graph = [
    {
      data: [2, 4],
      labels: ['oct', 'nov']
    },
    {
      data: [2, 4],
      labels: ['oct', 'nov']
    }
  ]
}
