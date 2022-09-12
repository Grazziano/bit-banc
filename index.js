import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';

const cliente1 = new Cliente('Ricardo', 123456789);

const cliente2 = new Cliente('Alice', 123456789);

const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = cliente1;
// console.log(contaCorrenteRicardo.saldo);

contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(200);
let valorSacado = 50;

contaCorrenteRicardo.sacar(valorSacado);

const conta2 = new ContaCorrente(1002, cliente2);
conta2.cliente = cliente2;

console.log(cliente1);
console.log(cliente2);
console.log(contaCorrenteRicardo);
contaCorrenteRicardo.transferir(89, conta2);
console.log(conta2);
console.log(cliente2.cpf);
