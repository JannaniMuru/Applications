import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataInjectService } from 'src/assets/shared/data-service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  public intitialData : any = [];
  public showLoading : boolean = true;
  public heightData : string [] = [];
  public weightData : string [] = [];
  public userDetails : any;
  public selectedGender: string;
  public selectedHeightCalib: string;
  public selectedWeightCalib: string;
  public userHeight: number;
  public userWeight: number;
  public minHeight: number =1;
  public maxHeight: number=10;
  public minWeight: number= 65;
  public maxWeight: number =550;

  constructor(public _router : Router, public data : DataInjectService) { }

  ngOnInit(): void {
    const intitialInfo = [
      "Male",
      "Female"
    ];
    const heightInfo =[
      "ft",
      "cm"
    ];
    const weightInfo =[
      "lb",
      "kg"
    ];
    this.intitialData = intitialInfo;
    this.heightData = heightInfo;
    this.weightData = weightInfo;
    this.selectedGender = intitialInfo[0];
    this.selectedHeightCalib = heightInfo[0];
    this.selectedWeightCalib = weightInfo[0];
    setTimeout(() => { 
      this.showLoading = false; 
    }, 3000);
    
  }
  heightChanged(){
    if(this.selectedHeightCalib=="cm"){
      this.minHeight = 100;
      this.maxHeight = 250;

    }
  }
  weightChanged(){
    if(this.selectedHeightCalib=="kg"){
      this.minHeight = 30;
      this.maxHeight = 250;

    }
  }

  updateUserDetails(){
    var waterGoal = this.calculateWaterRecommended();
    this.userDetails = {
      gender : this.selectedGender,
      height : this.userHeight,
      heightCalib : this.selectedHeightCalib,
      weight : this.userWeight,
      weightCalib : this.selectedWeightCalib, 
      waterGoal : waterGoal
    }
    this.data.saveUserDetails(this.userDetails);
    this.navigateTo('home');
  }
  navigateTo(actionUrl){
    this._router.navigate([actionUrl]);
  }
  calculateWaterRecommended(){
    if(this.selectedWeightCalib=="kg"){
      return Math.round((this.userWeight * 0.033333)*2.22) ;
    }
    else{
      return Math.round(this.userWeight * (2/3));
    }
  }
  

}
