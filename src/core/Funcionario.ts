/* eslint-disable max-params */
export default class Funcionario {
  #id: number;
  #name: string;
  #clinicaId: number;

  constructor(id: number, name: string, clinicaId: number) {
    this.#id = id;
    this.#name = name;
    this.#clinicaId = clinicaId;
  }

  static vazio() {
    return new Funcionario(0, '', 0);
  }

  get id() {
    return this.#id;
  }

  get clinicaId() {
    return this.#clinicaId;
  }

  get name() {
    return this.#name;
  }
}
