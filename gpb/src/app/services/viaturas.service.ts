import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViaturasService {
  private viaturas = [
    { marca: 'Chevrolet', modelo: 'Spin 1.8 Premier', ano: '2022', corporacao: 'Guarda Civil Metropolitana', estado: 'São Paulo' },
    { marca: 'Toyota', modelo: 'Hilux SW4', ano: '2024', corporacao: 'Guarda Civil Metropolitana', estado: 'São Paulo' },
    { marca: 'Citroën', modelo: 'C3 Aircross Shine 7', ano: '2024', corporacao: 'Guarda Civil Metropolitana', estado: 'São Paulo' },
    { marca: 'Chevrolet', modelo: 'S10 LS', ano: '2023', corporacao: 'Guarda Civil Metropolitana', estado: 'São Paulo' },
    { marca: 'Chevrolet', modelo: 'Spin 1.8 Premier', ano: '2022', corporacao: 'Guarda Civil Metropolitana', estado: 'São Paulo' },
    { marca: 'Toyota', modelo: 'Hilux SW4', ano: '2024', corporacao: 'Guarda Civil Metropolitana', estado: 'São Paulo' },
    { marca: 'Citroën', modelo: 'C3 Aircross Shine 7', ano: '2024', corporacao: 'Guarda Civil Metropolitana', estado: 'São Paulo' },
    { marca: 'Chevrolet', modelo: 'S10 LS', ano: '2023', corporacao: 'Guarda Civil Metropolitana', estado: 'São Paulo' },
    { marca: 'Chevrolet', modelo: 'Spin 1.8 Premier', ano: '2022', corporacao: 'Guarda Civil Metropolitana', estado: 'São Paulo' },
    { marca: 'Toyota', modelo: 'Hilux SW4', ano: '2024', corporacao: 'Guarda Civil Metropolitana', estado: 'São Paulo' },
    { marca: 'Citroën', modelo: 'C3 Aircross Shine 7', ano: '2024', corporacao: 'Guarda Civil Metropolitana', estado: 'São Paulo' },
    { marca: 'Chevrolet', modelo: 'S10 LS', ano: '2023', corporacao: 'Guarda Civil Metropolitana', estado: 'São Paulo' },
  ];

  constructor() { }

  getViaturas(): Observable<any[]> {
    return of(this.viaturas); // Simula um retorno de API
  }
}
