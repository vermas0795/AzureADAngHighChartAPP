import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { EnvService } from 'src/services/env.service';
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';
import { ValService } from 'src/services/val.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
declare var require: any;
// let Boost = require('highcharts/modules/boost');
// let noData = require('highcharts/modules/no-data-to-display');
// let More = require('highcharts/highcharts-more');

// Boost(Highcharts);
// noData(Highcharts);
// More(Highcharts);
// noData(Highcharts);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Values: Array<string> =  [];
  title = 'AngHighChart';
  public options: any = {
    chart: {
      type: 'line',
      height: 700
    },

    title: {
      text: 'Chart reflow is set to true'
  },
  credits: {
    enabled: false
  },
  subtitle: {
      text: 'When resizing the window or the frame, the chart should resize'
  },

  // tooltip: {
  //   formatter: function() {
  //     return 'x: ' + Highcharts.dateFormat('%e %b %y %H:%M:%S', this.x) +
  //       ' y: ' + this.y.toFixed(2);
  //   }
  // },

  xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  },

  series: [{
      data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
  }]
  };
  constructor(private env: EnvService, private adalSvc: MsAdalAngular6Service, private val: ValService,
    private http: HttpClient) {

    this.adalSvc.acquireToken('<RESOURCE>').subscribe(
      (resToken: string) => {

        console.log(resToken);

        const authToken = 'Bearer ' + resToken;
        const headers = new HttpHeaders().set('Authorization', authToken);

        this.http.get<any>('https://localhost:44355/api/Values', {
          headers: headers
        }).subscribe(
          data => {
            console.log(data);
            this.Values = data;
          }
        );
      }
    );
  //   this.val.getValues().subscribe(data => {
  //     this.Values = data;
  //   });
  //   this.adalSvc.acquireToken('<RESOURCE>').subscribe((resToken: string) => {
  //     console.log(resToken);
  //   console.log(env);
  // });
}

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    Highcharts.chart('container', this.options);
  }
}
