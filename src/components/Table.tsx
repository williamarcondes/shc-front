/* eslint-disable max-lines-per-function */
import Clinica from '../core/Clinica';
import { IconeEdicao, IconeLixo, IconeVer } from './Icones';

interface TableProps {
  clinicas: Clinica[];
  clinicaEditar?: (clinica: Clinica) => void;
  clinicaExcluido?: (clinica: Clinica) => void;
  clinicaVisualizar?: (clinica: Clinica) => void;
}

export default function Table(props: TableProps) {
  const exibirAcoes = props.clinicaExcluido || props.clinicaEditar;

  function renderizarCabecalho() {
    return (
      <tr>
        <th className='text-left p-4'>Nome</th>
        <th className='text-left p-4'>Cidade</th>
        <th className='text-left p-4'>Estado</th>
        {exibirAcoes ? <th className='p-4'>Ações</th> : false}
      </tr>
    );
  }

  function renderizarAcoes(clinica: Clinica) {
    return (
      <td className='flex justify-center'>
        {props.clinicaVisualizar ? (
          <button
            onClick={() => props.clinicaVisualizar?.(clinica)}
            className={`
                        flex justify-center items-center
                        text-blue-600 rounded-full p-2 m-1
                        hover:bg-blue-50
                    `}
          >
            {IconeVer}
          </button>
        ) : (
          false
        )}
        {props.clinicaEditar ? (
          <button
            onClick={() => props.clinicaEditar?.(clinica)}
            className={`
                        flex justify-center items-center
                        text-green-600 rounded-full p-2 m-1
                        hover:bg-blue-50
                    `}
          >
            {IconeEdicao}
          </button>
        ) : (
          false
        )}
        {props.clinicaExcluido ? (
          <button
            onClick={() => props.clinicaExcluido?.(clinica)}
            className={`
                        flex justify-center items-center
                        text-red-500 rounded-full p-2 m-1
                        hover:bg-blue-50
                    `}
          >
            {IconeLixo}
          </button>
        ) : (
          false
        )}
      </td>
    );
  }

  function renderizarDados() {
    return props.clinicas?.map((clinica, i) => (
        <tr key={clinica.id} className={`${i % 2 === 0 ? 'bg-blue-200' : 'bg-blue-100'}`}>
          <td className='text-left p-4'>{clinica.name}</td>
          <td className='text-left p-4'>{clinica.city}</td>
          <td className='text-left p-4'>{clinica.uf}</td>
          {exibirAcoes ? renderizarAcoes(clinica) : false}
        </tr>
    ));
  }
  
  return (
    <table id='1' className='w-full rounded-xl overflow-hidden'>
      <thead
        className={`
                text-gray-100
                bg-gradient-to-r from-blue-500 to-blue-800
            `}
      >
        {renderizarCabecalho()}
      </thead>
      <tbody>{renderizarDados()}</tbody>
    </table>
  );
}
