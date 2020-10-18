import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { TransationTotal } from '../transation-total.model';

@Component({
  selector: 'app-transaction-info',
  templateUrl: './transaction-info.component.html',
  styleUrls: ['./transaction-info.component.css']
})
export class TransactionInfoComponent implements OnInit {
  total: TransationTotal;

  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.getTransactionTotal();
  }

  getTransactionTotal(): void {
    this.transactionService.getTransactionTotal().subscribe(total => {
      this.total = total
    })
  }

}
