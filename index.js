class Cliente {
  nome;
  cpf;
  rg;
}

// https://github.com/tc39/proposal-class-fields#private-fields
class ContaCorrente {
  agencia;
  _saldo = 0;

  sacar(valor) {
    if (this._saldo >= valor) {
      this._saldo -= valor;
    }
  }

  depositar(valor) {
    if (valor > 0) {
      this._saldo += valor;
    }
  }
}

const cliente1 = new Cliente();

cliente1.nome = 'Ricardo';
cliente1.cpf = 11122233309;
cliente1.rg = 123456789;

const cliente2 = new Cliente();

cliente2.nome = 'Alice';
cliente2.cpf = 88822233309;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
console.log(contaCorrenteRicardo.saldo);

contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(200);
let valorSacado = 50;

contaCorrenteRicardo.sacar(valorSacado);

console.log(cliente1);
console.log(cliente2);
console.log(contaCorrenteRicardo);
