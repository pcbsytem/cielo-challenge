import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TransactionService } from './transaction.service';

describe('TransactionService', () => {
  let service: TransactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, MatSnackBarModule ]
    });
    service = TestBed.inject(TransactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get transaction data', () => {
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
    service.getTransaction().subscribe(transaction => {
      expect(transaction).toBeTruthy();
      expect(transaction).toEqual(fakeBody);
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
