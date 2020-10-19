import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TransactionInfoComponent } from './transaction-info.component';
import { TransactionService } from '../transaction.service';
import { of } from 'rxjs';

describe('TransactionInfoComponent', () => {
  let component: TransactionInfoComponent;
  let fixture: ComponentFixture<TransactionInfoComponent>;
  let service: TransactionService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionInfoComponent ],
      imports: [ HttpClientModule, MatSnackBarModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    service = TestBed.inject(TransactionService);

    spyOn(service, "getTransactionTotal").and.returnValue(of({      
      quantidadeLancamentos: 608,
      quantidadeRemessas: 39,
      valorLancamentos: 473320.37      
    }));

    fixture = TestBed.createComponent(TransactionInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
