import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-general',
  templateUrl: './navbar-general.component.html',
  styleUrls: ['./navbar-general.component.scss']
})
export class NavbarGeneralComponent implements OnInit {
  @Input() header:any;

  constructor(public _router : Router) { }

  ngOnInit(): void {
  }
  navigateBack(){
    this._router.navigate(['home']);
  }
}
