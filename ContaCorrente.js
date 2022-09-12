import { Cliente } from './Cliente';

// https://github.com/tc39/proposal-class-fields#private-fields
export class ContaCorrente {
  agencia;
  _cliente;
  _saldo = 0;

  sacar(valor) {
    if (this._saldo >= valor) {
      this._saldo -= valor;
      return this._saldo;
    }
  }

  get cliente() {
    return this._cliente;
  }

  set cliente(novoValor) {
    if (novoValor instanceof Cliente) {
      this._cliente = novoValor;
    }
  }

  get saldo() {
    return this._saldo;
  }

  depositar(valor) {
    if (valor <= 0) {
      return;
    }

    this._saldo += valor;
    return this._saldo;
  }

  transferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}
