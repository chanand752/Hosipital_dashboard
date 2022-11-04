import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {AppMainComponent} from './app.main.component';
import {AppNotfoundComponent} from './pages/app.notfound.component';
import {AppErrorComponent} from './pages/app.error.component';
import {AppAccessdeniedComponent} from './pages/app.accessdenied.component';
import {AppLoginComponent} from './pages/app.login.component';
import { PhysicianCardComponent } from './components/physician-card/physician-card.component';
import { ArDashBoardComponent } from './components/ar-dash-board/ar-dash-board.component';
import { QuailtyDashboardComponent } from './components/quailty-dashboard/quailty-dashboard.component';
import { TrafficDashboardComponent } from './components/traffic-dashboard/traffic-dashboard.component';
import { HomePage1Component } from './components/home-page1/home-page1.component';
import { HomePage2Component } from './components/home-page2/home-page2.component';
import { UtiliztaionDashboardComponent } from './components/utiliztaion-dashboard/utiliztaion-dashboard.component';
import { TimeDashboardComponent } from './components/time-dashboard/time-dashboard.component';
import { FinanceDashboardComponent } from './components/finance-dashboard/finance-dashboard.component';
import { GooglemapsComponent } from './components/googlemaps/googlemaps.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppMainComponent,
                children: [
                    {path:'Physician-card', component:PhysicianCardComponent},
                    {path:'FinanceDashboard', component:FinanceDashboardComponent},
                    {path:'Home-page-1', component:HomePage1Component},
                    {path:'Home-page-2', component:HomePage2Component},
                    {path:'TimeDashboard', component:TimeDashboardComponent},
                    {path:'UtilizationDashboard', component:UtiliztaionDashboardComponent},
                    {path:'ARDashBoard-card', component:ArDashBoardComponent},
                    {path:'Quality-DashBoard', component:QuailtyDashboardComponent},
                    {path:'Traffic-DashBoard', component:TrafficDashboardComponent},
                    {path:'googleMaps',component:GooglemapsComponent}
                ]
            },
            {path: 'error', component: AppErrorComponent},
            {path: 'access', component: AppAccessdeniedComponent},
            {path: 'notfound', component: AppNotfoundComponent},
            {path: 'login', component: AppLoginComponent},
            {path: '**', redirectTo: '/notfound'},
        ], {scrollPositionRestoration: 'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
