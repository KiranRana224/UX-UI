import { Component } from '@angular/core';
import { ChartConfiguration, ChartData } from 'chart.js';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent {
  users = [
    { id: 1, name: 'Work', color: '#e53935', checked: true },
    { id: 2, name: 'Personal', color: '#1e88e5', checked: false },
    { id: 3, name: 'Fitness', color: '#43a047', checked: true },
  ];

  /***graph */

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    indexAxis: 'y',
    plugins: {
      legend: {
        display: false, // Hide legend if you want a cleaner bar
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        stacked: true,
        display: false, // Hide X axis
        max: 24, // Full day (or change to 100 for percentage)
      },
      y: {
        stacked: true,
        display: false, // Hide Y axis
      },
    },
    elements: {
      bar: {
        borderRadius: 5, // Rounded corners
      },
    },
  };

  public barChartType: 'bar' = 'bar';

  public barChartData: ChartData<'bar'> = {
    labels: ['Day Summary'],
    datasets: [
      {
        label: 'Work',
        data: [10],
        backgroundColor: '#4285F4',
      },
      {
        label: 'Meetings',
        data: [5],
        backgroundColor: '#EA4335',
      },
      {
        label: 'Focus Time',
        data: [3],
        backgroundColor: '#34A853',
      },
      {
        label: 'Break',
        data: [6],
        backgroundColor: '#F4B400',
      },
    ],
  };
}
