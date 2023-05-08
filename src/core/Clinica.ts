import Funcionario from './Funcionario';

/* eslint-disable max-params */
export default class Clinica {
  #id: number;
  #name: string;
  #city: string;
  #uf: string;
  #number: number;
  #street: string;
  #funcionarios: Funcionario[];

  constructor(
    id: number,
    name: string,
    city: string,
    uf: string,
    number: number,
    street: string,
    funcionarios: Funcionario[],
  ) {
    this.#id = id;
    this.#name = name;
    this.#city = city;
    this.#street = street;
    this.#number = number;
    this.#uf = uf;
    this.#funcionarios = funcionarios;
  }

  static vazio() {
    return new Clinica(0, '', '', '', 0, '', []);
  }

  get id() {
    return this.#id;
  }

  get uf() {
    return this.#uf;
  }

  get name() {
    return this.#name;
  }

  get city() {
    return this.#city;
  }

  get number() {
    return this.#number;
  }

  get street() {
    return this.#street;
  }

  get funcionarios() {
    return this.#funcionarios;
  }

  adicionarFuncionario(funcionario: Funcionario) {
    this.#funcionarios.push(funcionario);
  }
}
