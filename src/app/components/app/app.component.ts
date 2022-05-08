import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'nbp';

  menuItems: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.setMenuItems();
  }

  setMenuItems() {
    this.menuItems = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: '/'
      }, {
        label: 'About',
        icon: 'pi pi-fw pi-comment',
        routerLink: '/about'
      }
    ]
  }
}
