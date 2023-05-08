/* eslint-disable max-lines-per-function */
import Funcionario from '../core/Funcionario';

interface TableProps {
  funcionarios: Funcionario[];
}

export default function TableFuncionario(props: TableProps) {
  function renderizarCabecalho() {
    return (
      <tr>
        <th className='text-left p-4'>Nome</th>
      </tr>
    );
  }

  function renderizarDados() {
    console.log(props.funcionarios);
    return props.funcionarios?.map((funcionario, i) => (
      <tr key={funcionario.id} className={`${i % 2 === 0 ? 'bg-blue-200' : 'bg-blue-100'}`}>
        <td className='text-left p-4'>{funcionario.name}</td>
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
