export interface Transaction {
  lancamentoContaCorrenteCliente: {
    numeroRemessaBanco: number;
    nomeSituacaoRemessa: string;
    dadosDomicilioBancario: {
      codigoBanco: number;
      numeroAgencia: number;
      numeroContaCorrente: string;
    },
    nomeTipoOperacao: string;
  };
  dataEfetivaLancamento: string;
  dataLancamentoContaCorrenteCliente: string;
  numeroEvento: number;
  descricaoGrupoPagamento: string;
  codigoIdentificadorUnico: string;
  nomeBanco: string;
  quantidadeLancamentoRemessa: number;
  numeroRaizCNPJ: string;
  numeroSufixoCNPJ: string;
  valorLancamentoRemessa: number;
  dateLancamentoContaCorrenteCliente: number;
  dateEfetivaLancamento: number;
}