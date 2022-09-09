// https://github.com/tc39/proposal-class-fields#private-fields
export class ContaCorrente {
  agencia;
  _saldo = 0;

  sacar(valor) {
    if (this._saldo >= valor) {
      this._saldo -= valor;
      return this._saldo;
    }
  }

  depositar(valor) {
    if (valor <= 0) {
      return;
    }

    this._saldo += valor;
    return this._saldo;
  }
}
