/* eslint-disable max-lines-per-function */
import Clinica from '../core/Clinica';
import ClinicaCardPublic from './ClinicaCardPublic';

interface TableProps {
  clinicas: Clinica[];
  clinicaEditar?: (clinica: Clinica) => void;
  clinicaExcluido?: (clinica: Clinica) => void;
  clinicaVisualizar?: (clinica: Clinica) => void;
}

export default function CardsList(props: TableProps) {
  function renderizarCabecalho() {
    return (
      <tr>
        <th className='text-left p-4'>Clinicas</th>
      </tr>
    );
  }

  function renderizarDados() {
    return props.clinicas?.map((clinica, i) => (
      <tr key={clinica.id} className={`${i % 2 === 0 ? 'bg-blue-200' : 'bg-blue-100'}`}>
        <ClinicaCardPublic clinica={clinica}/>
      </tr>
    ));
  }

  return (
    <table id='1' className='w-full rounded-xl overflow-hidden table-auto'>
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
