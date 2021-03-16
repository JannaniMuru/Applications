import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ResetDataComponent } from '../reset-data/reset-data.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  settingsData: any[] =[];

  constructor(public bsModalRef: BsModalRef, public modalService: BsModalService, public _router:Router) { }

  ngOnInit(): void {
    this.settingsData = [
      {
        type:"Reset data", 
        icon:"glyphicon glyphicon-refresh",
        actionUrl:"reset"
      },
      {
        type:"Tips", 
        icon:"glyphicon glyphicon-info-sign",
        actionUrl:"tips"
      },
      {
        type:"Recipes", 
        icon:"glyphicon glyphicon-cutlery",
        actionUrl:"recipes"
      }, 
      {
        type:"Help", 
        icon:"glyphicon glyphicon-question-sign",
        actionUrl:"help"
      }
    ];
  }

  navigateToUrl(path){
    this._router.navigate([path]);
  }

}
