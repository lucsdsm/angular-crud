import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViaturasService } from '../../services/viaturas.service';

import { TableModule } from 'primeng/table';
import { SortEvent } from 'primeng/api';

import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'app-table-list',
  imports: [TableModule, CommonModule, IconFieldModule, InputIconModule, InputTextModule],
  templateUrl: './table-list.component.html',
  styleUrl: './table-list.component.css'
})
export class TableListComponent {
  viaturas: any[] = [];

  constructor(private productService: ViaturasService) {}

  ngOnInit(): void {
    this.productService.getViaturas().subscribe(data => {
      this.viaturas = data;
    });
  }

  
}
