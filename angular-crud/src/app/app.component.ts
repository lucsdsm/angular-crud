import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { IndexComponent } from "./paginas/index/index.component";

@Component({
  selector: 'app-root',
  imports: [ButtonModule, IndexComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-crud';
}
