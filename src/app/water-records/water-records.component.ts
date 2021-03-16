import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-water-records',
  templateUrl: './water-records.component.html',
  styleUrls: ['./water-records.component.scss']
})
export class WaterRecordsComponent implements OnInit {
  public waterRecords:any;
  constructor() { 
    this.waterRecords =[{
      date:"02/11/21",
      data:[
        {quantity:"8 oz",time:"2:45 AM"},
        {quantity:"10 oz",time:"4:35 AM"},
        {quantity:"4 oz",time:"6:45 AM"}
      ]
    },{
      date:"02/12/21",
      data:[
        {quantity:"8 oz",time:"2:45 AM"},
        {quantity:"10 oz",time:"4:35 AM"},
        {quantity:"4 oz",time:"6:45 AM"}
      ]
    },{
      date:"02/13/21",
      data:[
        {quantity:"8 oz",time:"2:45 AM"},
        {quantity:"10 oz",time:"4:35 AM"},
        {quantity:"4 oz",time:"6:45 AM"}
      ]
    },{
      date:"02/14/21",
      data:[
        {quantity:"8 oz",time:"2:45 AM"},
        {quantity:"10 oz",time:"4:35 AM"},
        {quantity:"4 oz",time:"6:45 AM"}
      ]
    },
    {
      date:"03/11/21",
      data:[
        {quantity:"8 oz",time:"2:45 AM"},
        {quantity:"10 oz",time:"4:35 AM"},
        {quantity:"4 oz",time:"6:45 AM"}
      ]
    },{
      date:"03/12/21",
      data:[
        {quantity:"8 oz",time:"2:45 AM"},
        {quantity:"10 oz",time:"4:35 AM"},
        {quantity:"4 oz",time:"6:45 AM"}
      ]
    },{
      date:"03/13/21",
      data:[
        {quantity:"8 oz",time:"2:45 AM"},
        {quantity:"10 oz",time:"4:35 AM"},
        {quantity:"4 oz",time:"6:45 AM"}
      ]
    },{
      date:"03/14/21",
      data:[
        {quantity:"8 oz",time:"2:45 AM"},
        {quantity:"10 oz",time:"4:35 AM"},
        {quantity:"4 oz",time:"6:45 AM"}
      ]
    }
    ]
  }
  ngOnInit(): void {
  }

}
