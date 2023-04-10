/* eslint-disable max-params */
export default class Clinica {
  #id: number;
  #nome: string;
  #cidade: string;
  #estado: string;
  #numero: number;
  #rua: string;

  constructor(
    id: number,
    nome: string,
    cidade: string,
    estado: string,
    numero: number,
    rua: string,
  ) {
    this.#id = id;
    this.#nome = nome;
    this.#cidade = cidade;
    this.#rua = rua;
    this.#numero = numero;
    this.#estado = estado;
  }

  static vazio() {
    return new Clinica(0, '', '', '', 0, '');
  }

  get id() {
    return this.#id;
  }

  get estado() {
    return this.#estado;
  }

  get nome() {
    return this.#nome;
  }

  get cidade() {
    return this.#cidade;
  }

  get numero() {
    return this.#numero;
  }

  get rua() {
    return this.#rua;
  }
}
