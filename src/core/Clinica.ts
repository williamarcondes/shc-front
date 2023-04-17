/* eslint-disable max-params */
export default class Clinica {
  #id: number;
  #name: string;
  #city: string;
  #state: string;
  #number: number;
  #street: string;

  constructor(
    id: number,
    name: string,
    city: string,
    state: string,
    number: number,
    street: string,
  ) {
    this.#id = id;
    this.#name = name;
    this.#city = city;
    this.#street = street;
    this.#number = number;
    this.#state = state;
  }

  static vazio() {
    return new Clinica(0, '', '', '', 0, '');
  }

  get id() {
    return this.#id;
  }

  get state() {
    return this.#state;
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
}
