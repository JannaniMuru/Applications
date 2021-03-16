import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.scss']
})
export class TipsComponent implements OnInit {
  tipsData: any[] =[];
  public showLoading : boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.tipsData =[
      "Drink a glass of water every morning to activate your body",
      "The correct way to drink water is to sit down with a glass of water, and drink it sip by sip",
      "Know the Indicators your Body Gives You When You are Thirsty like dark urine/ chapped lips",
      "Avoid drinking too much water immediately after a meal",
      " Do not rush when you are drinking. Doing so will only slow down the work of your kidneys",
      "Do not drink a lot after your workout straight away",
      "Do not drink cold water since it may cause spasms, room temperature is always better"
    ];
    setTimeout(()=>{this.showLoading=false}, 3000);
  }

}
