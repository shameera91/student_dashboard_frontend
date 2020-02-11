import {Component, OnInit} from '@angular/core';

import {ServiceAuth} from '../@core/services/app.auth-service';
import {NbMenuItem} from '@nebular/theme';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
      <ngx-one-column-layout>
          <nb-menu [items]="menu"></nb-menu>
          <router-outlet></router-outlet>
      </ngx-one-column-layout>
  `,
})
export class PagesComponent implements OnInit {

  menu: NbMenuItem[] = [
    {
      title: 'Home',
      icon: 'home-outline',
      link: '/pages/dashboard',
    },
    {
      title: 'View attendance',
      icon: 'book-open-outline',
      link: '/pages/view-attendance',
    },
    {
      title: 'Add Assignment Marks',
      icon: 'file-add-outline',
      link: '/pages/add-assignment-marks',
    },
    {
      title: 'Add Grades',
      icon: 'file-add-outline',
      link: '/pages/add-grades-for-cuurent-year',
    },
    {
      title: 'view Grades',
      icon: 'book-open-outline',
      link: '/pages/view-grades',
    },
  ];

  ngOnInit() {
    this.loadAdmin();
  }

  constructor(private serviceAuth: ServiceAuth) {
  }

  loadAdmin() {
    if (this.serviceAuth.getRole() === 'ROLE_ADMIN') {
      this.menu.push({
          title: 'Admin',
          group: true,
        },
        {
          title: 'Add students',
          icon: 'person-add-outline',
          link: '/pages/admin/add-students',
        },
        {
          title: 'Add subjects',
          icon: 'file-add-outline',
          link: '/pages/admin/add-subjects',
        },
        {
          title: 'Add assignments',
          icon: 'file-add-outline',
          link: '/pages/admin/add-assignmnets',
        });
    }
  }


}
