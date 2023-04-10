import Clinica from "../core/Clinica";
import { IconeEdicao, IconeLixo } from "./Icones";

interface TableProps {
    clinicas: Clinica[]
    clinicaSelecionado?: (clinica: Clinica) => void
    clinicaExcluido?: (clinica: Clinica) => void
}

export default function Table(props: TableProps) {

    const exibirAcoes = props.clinicaExcluido || props.clinicaSelecionado

    function renderizarCabecalho() {
        return (
            <tr>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Cidade</th>
                <th className="text-left p-4">Estado</th>
                {exibirAcoes ? <th className="p-4">Ações</th> : false}
            </tr>
        )
    }

    function renderizarDados() {
        return props.clinicas?.map((clinica, i) => {
            return (
                <tr key={clinica.id}
                    className={`${i % 2 === 0 ? 'bg-blue-200' : 'bg-blue-100'}`}>
                    <td className="text-left p-4">{clinica.nome}</td>
                    <td className="text-left p-4">{clinica.cidade}</td>
                    <td className="text-left p-4">{clinica.estado}</td>
                    {exibirAcoes ? renderizarAcoes(clinica) : false}
                </tr>
            )
        })
    }

    function renderizarAcoes(clinica: Clinica) {
        return (
            <td className="flex justify-center">
                {props.clinicaSelecionado ? (
                    <button onClick={() => props.clinicaSelecionado?.(clinica)} className={`
                        flex justify-center items-center
                        text-green-600 rounded-full p-2 m-1
                        hover:bg-blue-50
                    `}>
                        {IconeEdicao}
                    </button>
                ) : false}
                {props.clinicaExcluido ? (
                    <button onClick={() => props.clinicaExcluido?.(clinica)} className={`
                        flex justify-center items-center
                        text-red-500 rounded-full p-2 m-1
                        hover:bg-blue-50
                    `}>
                        {IconeLixo}
                    </button>
                ) : false}
            </td>
        )
    }

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`
                text-gray-100
                bg-gradient-to-r from-blue-500 to-blue-800
            `}>
                {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>
        </table>
    )
}