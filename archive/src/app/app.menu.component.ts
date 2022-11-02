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
                    {label: 'Login', icon: 'pi pi-fw pi-check-square', routerLink: ['/login']},
                    {label: 'Home1', icon: 'pi pi-fw pi-home', routerLink: ['/home1']},
                    {label: 'Home2', icon: 'pi pi-fw pi-home', routerLink: ['/home2']},
                    {label: 'Utilization Dashboard', icon: 'pi pi-fw pi-users', routerLink: ['/utilization']},
                    {label: 'Time Dashboard', icon: 'pi pi-fw pi-clock', routerLink: ['/time']}
                ]
            },
        ];
    }
}
