import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-menu',
    template: `
        <ul class="layout-menu">
            <li app-menuitem *ngFor="let item of model; let i = index;"
                [item]="item" [index]="i" [visible]="true" [root]="true"></li>
        </ul>
    `
})
export class AppMenuComponent implements OnInit {

    model: any[];

    ngOnInit() {
        this.model = [
            {
                items: [
                    {label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['/uikit/formlayout']},
                    {label: 'Physician Card', icon: 'pi pi-fw pi-user', routerLink: ['/Physician-card']},
                    {label: 'AR Dash Card', icon: 'pi pi-fw pi-user', routerLink: ['/ARDashBoard-card']},
                    {label: 'Quality Dash Board', icon: 'pi pi-fw pi-user', routerLink: ['/Quality-DashBoard']},
                    {label: 'Traffic Dash Board', icon: 'pi pi-fw pi-user', routerLink: ['/Traffic-DashBoard']},
                    {label: 'Login', icon: 'pi pi-fw pi-check-square', routerLink: ['/login']},

                ]
            },
        ];
    }
}
