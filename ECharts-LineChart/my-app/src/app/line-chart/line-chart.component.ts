import { Component, OnInit } from '@angular/core';
import { GRAPH1 } from '../echarts';
declare const echarts: any;

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})

export class LineChartComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    GRAPH1.yAxis.max = 0.4;
    const results = [0,0.3,0.3,0,0.3,0.3,0.2,0.3,0.3,0,0.4,0.3,0,0.3,0.3,0,0.4,0.4,0,0.2,0.2,0,0.3,0.2];

    const series = GRAPH1.series[0];
    const seriesArry = [];
    var index = 0;
    var distance: number;
    
    results.forEach(item => {
     if (index != 0) {
        series.data.splice(index-2,1,'-');
        series.data.splice(index-1,2,distance.toString(),item.toString());
        if (distance <= 0.2) {
          series.itemStyle.normal.lineStyle.color = '#14a63d';
          series.itemStyle.normal.color = '#f02316';
        }
        else {
          series.itemStyle.normal.lineStyle.color = '#6da0ed';
          series.itemStyle.normal.color = '#14a63d';
        }
        
        seriesArry.push(JSON.parse(JSON.stringify(series)));
      }
     distance = item;
     index++;
    });

    GRAPH1.series.length = 0;
    GRAPH1.series = seriesArry;
    echarts.init(document.getElementById('chart111')).setOption(GRAPH1);
  }
}
