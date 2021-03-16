
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-calib-modal',
  templateUrl: './calib-modal.component.html',
  styleUrls: ['./calib-modal.component.scss']
})
export class CalibModalComponent implements OnInit {
  title : any;
  public addData: boolean = false;
  public waterConsumed:number = 0;
  @Output() messageEvent = new EventEmitter();

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit(): void {
  }
  closeModal(){
    this.bsModalRef.hide();
  }
  bottleChosen(chosen){
    this.waterConsumed>0 ? this.addData=true : this.addData=false;
    this.fetchPreferences(chosen);
  }
  enableAdd(){
    this.addData=true;
  }
  addWaterIntake(){
    let waterYouHad = {"waterIntake":this.waterConsumed};
    this.messageEvent.emit(JSON.stringify(waterYouHad));
    this.closeModal();
  }
  fetchPreferences(chosen){
    if(chosen){
      this.waterConsumed = this.waterConsumed + 32;
      this.addData=true
      document.getElementById("bottle").style.border = "medium solid green";
      setTimeout(()=>{
      document.getElementById("bottle").style.border = "1px solid #337ab7";  
      },300);
    }
    if(!chosen){
      this.waterConsumed = this.waterConsumed + 8;
      this.addData=true
      document.getElementById("glass").style.border = "medium solid green";
      setTimeout(()=>{
      document.getElementById("glass").style.border = "1px solid #337ab7";  
      },300);
    }
  }
}

