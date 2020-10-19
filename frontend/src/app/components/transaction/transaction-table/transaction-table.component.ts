import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { Transaction } from '../transation.model';

@Component({
  selector: 'app-transaction-table',
  templateUrl: './transaction-table.component.html',
  styleUrls: ['./transaction-table.component.css']
})
export class TransactionTableComponent implements OnInit {
  transactions: Transaction[];
  displayedColumns = [
    'dataEfetivaLancamento', 'nomeTipoOperacao',  
    'numeroRemessaBanco', 'nomeSituacaoRemessa', 
    'dataLancamentoContaCorrenteCliente', 'nomeBanco', 
    'valorLancamentoRemessa'
  ]

  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.getTransaction();
  }

  getTransaction(): void {
    this.transactionService.getTransaction().subscribe(transactions => {
      this.transactions = transactions
    }, (err) => {
      this.transactionService.showMessage('Verifique se o servidor foi iniciado.')
    });
  }

}
