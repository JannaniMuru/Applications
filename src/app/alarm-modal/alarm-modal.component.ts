import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-alarm-modal',
  templateUrl: './alarm-modal.component.html',
  styleUrls: ['./alarm-modal.component.scss']
})
export class AlarmModalComponent implements OnInit {
  alarmStatus: string;
  callingParent: string;
  constructor(public bsModalRef: BsModalRef, public _router: Router) { }

  ngOnInit(): void {

  }
  ngOnChanges(){

  }
  closeModal(){
    this.bsModalRef.hide();
    this._router.navigate([this.callingParent]);
  }

}
