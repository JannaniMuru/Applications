import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ResetDataComponent } from './reset-data/reset-data.component';
import { SettingsComponent } from './settings/settings.component';
import { StatsComponent } from './stats/stats.component';
import { TipsComponent } from './tips/tips.component';
import { WaterRecordsComponent } from './water-records/water-records.component';

const routes: Routes = [
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'landing',
    component: LandingComponent
  },
  {
    path:'settings',
    component: SettingsComponent
  },
  {
    path:'stats',
    component: StatsComponent
  },
  {
    path:'tips',
    component: TipsComponent
  },
  {
    path:'recipes',
    component: RecipesComponent
  },
  {
    path:'reset',
    component: ResetDataComponent
  },
  {
    path:'help',
    component: HelpComponent
  },
  {
    path:'records',
    component: WaterRecordsComponent
  },
  {
    path:'',
    component: LandingComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
