class Cliente {
  nome;
  cpf;
  rg;
}

class ContaCorrente {
  agencia;
  saldo;

  sacar(valor) {
    if (this.saldo >= valor) {
      this.saldo -= valor;
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
contaCorrenteRicardo.saldo = 0;
contaCorrenteRicardo.agencia = 1001;
console.log(contaCorrenteRicardo.saldo);

contaCorrenteRicardo.saldo = 100;
let valorSacado = 50;

contaCorrenteRicardo.sacar(valorSacado);

console.log(cliente1);
console.log(cliente2);
console.log(contaCorrenteRicardo);
