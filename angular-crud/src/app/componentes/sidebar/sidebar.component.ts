import { Component } from '@angular/core';

import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';

@Component({
  selector: 'app-sidebar',
  imports: [Menubar],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  items: MenuItem[] | undefined;
  ngOnInit() {
    this.items = [
      {
        label: 'Página inicial',
        icon: 'pi pi-home'
      }
    ];	
  }
}
