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

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppMainComponent,
                children: [
                    {path:'Physician-card', component:PhysicianCardComponent},
                    {path:'ARDashBoard-card', component:ArDashBoardComponent},
                    {path:'Quality-DashBoard', component:QuailtyDashboardComponent},
                    {path:'Traffic-DashBoard', component:TrafficDashboardComponent}
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
