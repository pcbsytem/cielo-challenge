import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Transaction } from './transation.model';
import { TransationTotal } from './transation-total.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  baseUrl = 'http://localhost:3000'
  
  constructor(private snackbar: MatSnackBar, private http: HttpClient) { }

  showMessage(message: string): void {
    this.snackbar.open(message, 'X', { 
      duration: 3000,
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
