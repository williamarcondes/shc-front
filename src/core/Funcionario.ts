/* eslint-disable max-params */
export default class Funcionario {
  #id: number;
  #name: string;
  #clinicId: number;

  constructor(id: number, name: string, clinicId: number) {
    this.#id = id;
    this.#name = name;
    this.#clinicId = clinicId;
  }

  static vazio() {
    return new Funcionario(0, '', 0);
  }

  get id() {
    return this.#id;
  }

  get clinicId() {
    return this.#clinicId;
  }

  get name() {
    return this.#name;
  }
}
