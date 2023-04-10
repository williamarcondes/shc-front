/* eslint-disable complexity */
import { useState } from 'react';
import Clinica from '../core/Clinica';
import Button from './Button';
import Entrada from './Entrada';

interface FormularioProps {
  clinica: Clinica;
  clinicaMudou?: (clinica: Clinica) => void;
  cancelado?: () => void;
}

export default function Formulario(props: FormularioProps) {
  const id = props.clinica?.id;
  const [nome, setNome] = useState(props.clinica?.nome ?? '');
  const [cidade, setCidade] = useState(props.clinica?.cidade ?? '');
  const [estado, setEstado] = useState(props.clinica?.estado ?? '');
  const [rua, setRua] = useState(props.clinica?.rua ?? '');
  const [numero, setNumero] = useState(props.clinica?.numero ?? 0);

  return (
    <div>
      {id ? <Entrada somenteLeitura texto='Código' valor={id} className='mb-5' /> : false}
      <Entrada texto='Nome' valor={nome} valorMudou={setNome} className='mb-5' />
      <div className='flex flex-row'>
        <div className='w-5/6 pr-2'>
          <Entrada texto='Cidade' valor={cidade} valorMudou={setCidade} />
        </div>

        <div className='w-1/6 pr-2'>
          <Entrada texto='Estado' valor={estado} valorMudou={setEstado} />
        </div>
      </div>
      <div className='flex flex-row'>
        <div className='w-5/6 pr-2'>
          <Entrada texto='Rua' valor={rua} valorMudou={setRua} />
        </div>

        <div className='w-1/6 pr-2'>
          <Entrada texto='Numero' tipo='number' valor={numero} valorMudou={setNumero} />
        </div>
      </div>

      <div className='flex justify-end mt-7'>
        <Button
          cor='blue'
          className='mr-2'
          onClick={() => props.clinicaMudou?.(new Clinica(id, nome, cidade, estado, numero, rua))}
        >
          {id ? 'Alterar' : 'Salvar'}
        </Button>
        <Button onClick={props.cancelado}>Cancelar</Button>
      </div>
    </div>
  );
}
