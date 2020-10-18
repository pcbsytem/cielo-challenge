import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ChartistModule } from 'ng-chartist';
import { MatCardModule } from  '@angular/material/card';
import { MatSnackBarModule } from  '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { TransactionTableComponent } from './components/transaction/transaction-table/transaction-table.component';
import { HomeComponent } from './views/home/home.component';
import { TransactionChartComponent } from './components/transaction/transaction-chart/transaction-chart.component';
import { TransactionInfoComponent } from './components/transaction/transaction-info/transaction-info.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TransactionTableComponent,
    HomeComponent,
    TransactionChartComponent,
    TransactionInfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ChartistModule,
    MatCardModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatTableModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
