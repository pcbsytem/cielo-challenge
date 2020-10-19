import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

import { Transaction } from './transation.model';
import { TransationTotal } from './transation-total.model';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  baseUrl = environment.API_URL;
  
  constructor(private snackbar: MatSnackBar, private http: HttpClient) { }

  showMessage(message: string, duration: number = 3000): void {
    this.snackbar.open(message, 'X', { 
      duration,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }

  getTransaction(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.baseUrl}/listaControleLancamento`)
  }

  getTransactionTotal(): Observable<TransationTotal> {
    return this.http.get<TransationTotal>(`${this.baseUrl}/totalControleLancamento`)
  }
}
