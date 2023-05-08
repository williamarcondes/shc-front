import Button from './Button';
import Clinica from '../core/Clinica';
import useFuncionarios from '../hooks/useFuncionarios';
import FormularioFuncionario from './FormularioFuncionario';
import TableFuncionario from './TableFuncionario';

interface ClinicaProps {
  clinica: Clinica;
  clinicaEditar?: (clinica: Clinica) => void;
}

export default function ClinicaCard(props: ClinicaProps) {
  const { novoFuncionario, hideForms, visible, funcionario, funcionarios, salvarFuncionario } =
    useFuncionarios(props.clinica.id);

  return (
    <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
      <div className='flex items-center justify-between mb-4'>
        <h2 className='text-2xl font-bold mb-2'>{props.clinica.name}</h2>
        <div className='flex items-center'>
          <Button onClick={() => props.clinicaEditar?.(props.clinica)} className='mr-2'>
            Editar
          </Button>
          <Button cor='blue' onClick={novoFuncionario}>
            Adicionar Funcionários
          </Button>
        </div>
      </div>
      <div className='mb-4'>
        <p className='text-gray-700 text-base'>
          {props.clinica.street}, {props.clinica.number} - {props.clinica.city}/{props.clinica.uf}
        </p>
      </div>
      <div className='flex items-center justify-between'>
        <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
          ID: {props.clinica.id}
        </span>
      </div>

      {<TableFuncionario funcionarios={funcionarios} />}

      {visible === 'form' ? (
        <FormularioFuncionario
          clinica={props.clinica}
          cancelado={hideForms}
          funcionarioMudou={salvarFuncionario}
          funcionario={funcionario}
        />
      ) : (
        <></>
      )}
    </div>
  );
}
