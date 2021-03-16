import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlarmModalComponent } from '../alarm-modal/alarm-modal.component';

@Component({
  selector: 'app-reset-data',
  templateUrl: './reset-data.component.html',
  styleUrls: ['./reset-data.component.scss']
})
export class ResetDataComponent implements OnInit {
  public intitialData : any = [];
  public heightData : string [] = [];
  public weightData : string [] = [];
  constructor(public bsModalRef: BsModalRef, public modalService: BsModalService, public _router: Router) { }

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
  }
  updateDetails(){
    var initialState ={
      alarmStatus : "Details updated successfully",
      callingParent : 'settings'
    }
    this.bsModalRef = this.modalService.show(AlarmModalComponent, { initialState, class: 'modal-sm' });
  }

}
