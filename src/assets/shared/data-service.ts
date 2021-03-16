import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataInjectService {

  private messageSource = new BehaviorSubject(null);
  fetchUserDetails = this.messageSource.asObservable();

  private waterDetails = new BehaviorSubject(null);
  waterConsumed = this.waterDetails.asObservable();
  
  constructor() { }

  saveUserDetails(userDetails: any) {
    this.messageSource.next(userDetails);
  }
  updateWaterConsumed(waterConsumed: number){
    this.waterDetails.next(waterConsumed);
  }

}