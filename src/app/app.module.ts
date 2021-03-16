import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { StatsComponent } from './stats/stats.component';
import { SettingsComponent } from './settings/settings.component';
import { BsModalService,  BsModalRef, ModalModule} from 'ngx-bootstrap/modal';
import { CalibModalComponent } from './calib-modal/calib-modal.component';
import { AlarmModalComponent } from './alarm-modal/alarm-modal.component';
import { HighchartsChartModule  } from 'highcharts-angular';
import { NavbarGeneralComponent } from './navbar-general/navbar-general.component';
import { WaterRecordsComponent } from './water-records/water-records.component';
import { TipsComponent } from './tips/tips.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ResetDataComponent } from './reset-data/reset-data.component';
import { HelpComponent } from './help/help.component';
import { DataInjectService } from 'src/assets/shared/data-service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LandingComponent,
    StatsComponent,
    SettingsComponent,
    CalibModalComponent,
    AlarmModalComponent,
    NavbarGeneralComponent,
    WaterRecordsComponent,
    TipsComponent,
    RecipesComponent,
    ResetDataComponent,
    HelpComponent
  ],
  entryComponents:[CalibModalComponent,AlarmModalComponent],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule ,
    ModalModule.forRoot()
  ],
  providers: [ DataInjectService,BsModalService, BsModalRef],
  bootstrap: [AppComponent]
})
export class AppModule { }
