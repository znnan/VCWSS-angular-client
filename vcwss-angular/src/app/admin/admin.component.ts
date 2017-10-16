import { Component } from '@angular/core';

@Component({
  template:  `
    <h3>ADMIN</h3>
    <nav>
      <a routerLink="./" routerLinkActive="active"
        [routerLinkActiveOptions]="{ exact: true }">Dashboard</a>
      <a routerLink="./news" routerLinkActive="active">Manage News</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AdminComponent {
}