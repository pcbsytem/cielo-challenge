import { Component, OnInit } from '@angular/core';
import {
  IBarChartOptions,
  IChartistAnimationOptions,
  IChartistData
} from 'chartist';
import { ChartEvent, ChartType } from 'ng-chartist';

import { TransactionService } from '../transaction.service';
import { Transaction } from '../transation.model';

@Component({
  selector: 'app-transaction-chart',
  templateUrl: './transaction-chart.component.html',
  styleUrls: ['./transaction-chart.component.css']
})
export class TransactionChartComponent implements OnInit {
  dataBar: IChartistData = {};
  dataPie: IChartistData = {};

  typeBar: ChartType = 'Bar';
  typePie: ChartType = 'Pie';

  optionsBar: IBarChartOptions = {
    axisX: {
      showGrid: false
    },
    height: 300,
  };
  optionsPie: IBarChartOptions = {
    donut: true,
    height: 300,
    showLabel: true
  };
  events: ChartEvent = {
    draw: (data) => {
      if (data.type === 'bar') {
        data.element.animate({
          y2: <IChartistAnimationOptions>{
            dur: '0.5s',
            from: data.y1,
            to: data.y2,
            easing: 'easeOutQuad'
          }
        });
      }
    }
  };

  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.getTransaction();
  }

  getTransaction(): void {
    this.transactionService.getTransaction().subscribe((transactions: Transaction[]) => {
      this.dataBar = {
        labels: transactions.map(item => item.descricaoGrupoPagamento),
        series: [
          transactions.map(item => item.valorLancamentoRemessa)
        ],        
      };
      this.dataPie = {
        labels: transactions.map(item => item.lancamentoContaCorrenteCliente.nomeSituacaoRemessa),
        series: [
          ...transactions.map(item => item.quantidadeLancamentoRemessa)
        ],        
      };
    }, (err) => {
      this.transactionService.showMessage('Verifique se o servidor foi iniciado.')
    });
  }
}
