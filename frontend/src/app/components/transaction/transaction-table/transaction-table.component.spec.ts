import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TransactionTableComponent } from './transaction-table.component';
import { TransactionService } from '../transaction.service';
import { of } from 'rxjs';

describe('TransactionTableComponent', () => {
  let component: TransactionTableComponent;
  let fixture: ComponentFixture<TransactionTableComponent>;
  let service: TransactionService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionTableComponent ],
      imports: [ HttpClientModule, MatSnackBarModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    service = TestBed.inject(TransactionService);

    const fakeBody = [
      {
        lancamentoContaCorrenteCliente: {
          numeroRemessaBanco: 64320236054,
          nomeSituacaoRemessa: "Pago",
          dadosDomicilioBancario: {
            codigoBanco: 123,
            numeroAgencia: 1,
            numeroContaCorrente: "00000000065470"
          },
          nomeTipoOperacao: "regular"
        },
        dataEfetivaLancamento: "03/06/2016",
        dataLancamentoContaCorrenteCliente: "03/06/2016",
        numeroEvento: 42236790,
        descricaoGrupoPagamento: "LA-56",
        codigoIdentificadorUnico: "1",
        nomeBanco: "BANCO ABCD S.A.             ",
        quantidadeLancamentoRemessa: 22,
        numeroRaizCNPJ: "12996721",
        numeroSufixoCNPJ: "1597",
        valorLancamentoRemessa: 11499.1,
        dateLancamentoContaCorrenteCliente: 1464922800000,
        dateEfetivaLancamento: 1464922800000
      },
      {
        lancamentoContaCorrenteCliente: {
          numeroRemessaBanco: 64320626054,
          dadosAnaliticoLancamentoFinanceiroCliente: [],
          nomeSituacaoRemessa: "Pago",
          dadosDomicilioBancario: {
            codigoBanco: 123,
            numeroAgencia: 1,
            numeroContaCorrente: "00000000065470"
          },
          nomeTipoOperacao: "regular"
        },
        dataEfetivaLancamento: "02/06/2016",
        dataLancamentoContaCorrenteCliente: "02/06/2016",
        numeroEvento: 42592397,
        descricaoGrupoPagamento: "LA-56",
        codigoIdentificadorUnico: "25",
        nomeBanco: "BANCO ABCD S.A.             ",
        quantidadeLancamentoRemessa: 2,
        numeroRaizCNPJ: "12996721",
        numeroSufixoCNPJ: "1597",
        valorLancamentoRemessa: 1960,
        dateLancamentoContaCorrenteCliente: 1464836400000,
        dateEfetivaLancamento: 1464836400000
      }
    ]

    spyOn(service, "getTransaction").and.returnValue(of(fakeBody));

    fixture = TestBed.createComponent(TransactionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
