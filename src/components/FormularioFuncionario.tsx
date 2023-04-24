import { useState } from 'react';
import Clinica from '../core/Clinica';
import Button from './Button';
import Entrada from './Entrada';
import Funcionario from '../core/Funcionario';

interface FormularioProps {
  clinica: Clinica;
  funcionario: Funcionario;
  funcionarioMudou?: (funcionario: Funcionario) => void;
  cancelado?: () => void;
}

export default function FormularioFuncionario(props: FormularioProps) {
  const id = props.funcionario?.id;
  const [name, setName] = useState(props.funcionario?.name ?? '');

  return (
    <div>
      {id ? <Entrada somenteLeitura texto='Código' valor={id} className='mb-5' /> : false}
      <Entrada texto='Nome' valor={name} valorMudou={setName} className='mb-5' />

      <div className='flex justify-end mt-7'>
        <Button
          cor='blue'
          className='mr-2'
          onClick={() => props.funcionarioMudou?.(new Funcionario(id, name, props.clinica.id))}
        >
          {id ? 'Alterar' : 'Salvar'}
        </Button>
        <Button onClick={props.cancelado}>Cancelar</Button>
      </div>
    </div>
  );
}
