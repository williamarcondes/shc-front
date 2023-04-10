export default class Clinica {
    #id: number
    #nome: string
    #cidade: string
    #estado: string

    constructor(id: number, nome: string, cidade: string, estado: string = null) {
        this.#id = id
        this.#nome = nome
        this.#cidade = cidade
        this.#estado = this.estado
    }

    static vazio() {
        return new Clinica(0, '', '')
    }

    get id() {
        return this.#id
    }

    get estado() {
        return this.#estado
    }

    get nome() {
        return this.#nome
    }

    get cidade() {
        return this.#cidade
    }
}