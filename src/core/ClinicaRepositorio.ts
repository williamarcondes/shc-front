import Clinica from "./Clinica";

export default interface ClinicaRepositorio {
    salvar(clinica: Clinica): Promise<Clinica>
    excluir(clinica: Clinica): Promise<void>
    obterTodos(): Promise<Clinica[]>
}