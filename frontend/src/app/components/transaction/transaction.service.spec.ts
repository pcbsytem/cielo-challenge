import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TransactionService } from './transaction.service';

describe('TransactionService', () => {
  let service: TransactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule, MatSnackBarModule ]
    });
    service = TestBed.inject(TransactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get transaction data', () => {
    service.getTransaction().subscribe(transaction => {
      expect(transaction).toBeTruthy();
      expect(transaction.length).toBeGreaterThan(0);
    }); 
  });

  it('should get total transaction data', () => {
    const totalTest = {
      quantidadeLancamentos: 608,
      quantidadeRemessas: 39,
      valorLancamentos: 473320.37
    }

    service.getTransactionTotal().subscribe(total => {
      expect(total).toBeTruthy();
      expect(total).toEqual(totalTest);
    }); 
  });
});
