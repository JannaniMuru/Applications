import { Component, OnInit } from '@angular/core'; import { Router } from '@angular/router';
import * as Highcharts from 'highcharts';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs';
import { DataInjectService } from 'src/assets/shared/data-service';
import { AlarmModalComponent } from '../alarm-modal/alarm-modal.component';
import { CalibModalComponent } from '../calib-modal/calib-modal.component';
import { take } from 'rxjs/operators';
export const chartOptions = (waterConsumed, waterGoal) => {
  return {
    colors: Highcharts.map(Highcharts.getOptions().colors, function (color) {
      return {
        radialGradient: {
          cx: 0.5,
          cy: 0.3,
          r: 0.7
        },
        stops: [
          [0, color],
          [1, Highcharts.color(color).brighten(-0.3).get('rgb')] // darken
        ]
      };
    }), chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      spacingTop: 0,
      spacingBottom: 0,
      marginTop: 0,
      marginBottom: 0,
      spacingLeft: 0,
      spacingRight: 0,
      marginLeft: 0,
      marginRight: 0,
      type: 'pie'
    },
    title: {
      text: null
    },
    credits: false,
    tooltip: {
      pointFormat: '<span style="font-size:11px">{series.name}: <b>{point.percentage:.1f}%</b></span><br>'
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        center: ['50%', '50%'],
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<span style="font-size:12px;"><b>{point.name}</b><br>{point.percentage:.1f} %</span><br>',
          distance: -50,
          filter: {
            property: 'percentage',
            operator: '>',
            value: 4
          }
        }
      }
    },
    series: [{
      name: '',
      size: '80%',
      innerSize: '60%',
      data: [
        { name: 'Water consumed', y: Math.round((waterConsumed / waterGoal) * 100) },
        { name: 'Target left', y: Math.round(((waterGoal - waterConsumed) / waterGoal) * 100) }
      ],
      distance: -30
    }]
  }

};
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public feelingThirsty: boolean = false;
  public alarmTurnedOn: boolean = true;
  public bottlePreferred: boolean = false;
  public displayReminder: boolean = false;
  public nextAlarmAt: string;
  public currentTime: any;
  public userDetails: any;
  public subscription: Subscription;
  public waterGoal: number = 101;
  public waterConsumed: number = 60;
  public waterRecords: any;
  xAxisData: any[] = [];
  seriesData: any[] = [];
  dailyLogChartOptions: any;
  options: any;
  highcharts = Highcharts;
  waterIntakeToday: string = "NIL";
  waterDrank: number = 0;
  showCurrentRecord: boolean = false;
  waterMeterChartOptions: any;

  constructor(public bsModalRef: BsModalRef, public modalService: BsModalService, public _router: Router, public data: DataInjectService) {
    this.waterRecords = [
      { quantity: "8 oz", time: "2:45:01 AM" },
      { quantity: "10 oz", time: "4:35:01 AM" },
      { quantity: "4 oz", time: "6:45:01 AM" }
    ]
  }
  removeEntry(time) {
    this.waterRecords = this.waterRecords.filter((a) => { if (a.time !== time) return a; });
  }
  showCurrentEntry(show) {
    if (!show) {
      this.waterConsumed = 0;
      this.waterMeterChartOptions = chartOptions(this.waterConsumed, this.waterGoal);
    }
    this.showCurrentRecord = show;
  }
  ngOnInit(): void {
    this.subscription = this.data.fetchUserDetails.subscribe(userDetails => {
      this.userDetails = userDetails;
      if (this.userDetails !== null && this.userDetails !== undefined) {
        this.waterGoal = this.userDetails.waterGoal;
        this.waterGoal = 101;
        this.waterConsumed = 8;
      }
    });
    var currentTimeDate = new Date();
    this.currentTime = currentTimeDate.toLocaleTimeString();
    currentTimeDate.setHours(currentTimeDate.getHours() + 1);
    this.nextAlarmAt = currentTimeDate.toLocaleTimeString();
    this.xAxisData = [];
    this.seriesData = [];
    setTimeout(() => {
      this.displayReminder = true;

    }, 150000);
    this.waterMeterChartOptions = chartOptions(this.waterConsumed, this.waterGoal);
  }
  toggleAlarm(turnOn) {
    this.alarmTurnedOn = turnOn;
    this.showAlarm();
  }

  addWaterIntake() {
    this.showSelectionModal();
    this.showCurrentEntry(true);
  }
  navigateTo(actionUrl) {
    this._router.navigate([actionUrl]);
  }
  closeReminder() {
    this.displayReminder = false;
  }



  showSelectionModal() {
    const initialState = {
      title: 'Calib select'
    };
    this.bsModalRef = this.modalService.show(CalibModalComponent, { initialState, class: 'modal-sm' });
    this.bsModalRef.content.messageEvent.pipe(take(1)).subscribe((waterIntakeResponse) => {
      if (waterIntakeResponse !== null && waterIntakeResponse !== undefined) {
        var response = JSON.parse(waterIntakeResponse);
        this.waterDrank = response.waterIntake;
        this.data.updateWaterConsumed(this.waterDrank);
        this.waterConsumed = this.waterConsumed + this.waterDrank;
        this.waterIntakeToday = this.waterConsumed + " oz";
        this.waterMeterChartOptions = chartOptions(this.waterConsumed, this.waterGoal);
      }

    });
  }
  showAlarm() {
    var alarmStatus = this.alarmTurnedOn ? 'ON' : 'OFF';
    const initialState = {
      alarmStatus: "Alarm turned " + alarmStatus,
      callingParent: "home"
    };
    this.bsModalRef = this.modalService.show(AlarmModalComponent, { initialState, class: 'modal-sm' });
  }
ngOnDestroy(){
  if(this.subscription && this.subscription.unsubscribe){
    this.subscription.unsubscribe();
  }
}
}
