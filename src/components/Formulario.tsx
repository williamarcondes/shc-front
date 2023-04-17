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
  const [name, setName] = useState(props.clinica?.name ?? '');
  const [city, setCity] = useState(props.clinica?.city ?? '');
  const [state, setState] = useState(props.clinica?.state ?? '');
  const [street, setStreet] = useState(props.clinica?.street ?? '');
  const [number, setNumber] = useState(props.clinica?.number ?? 0);

  return (
    <div>
      {id ? <Entrada somenteLeitura texto='Código' valor={id} className='mb-5' /> : false}
      <Entrada texto='Name' valor={name} valorMudou={setName} className='mb-5' />
      <div className='flex flex-row'>
        <div className='w-5/6 pr-2'>
          <Entrada texto='City' valor={city} valorMudou={setCity} />
        </div>

        <div className='w-1/6 pr-2'>
          <Entrada texto='State' valor={state} valorMudou={setState} />
        </div>
      </div>
      <div className='flex flex-row'>
        <div className='w-5/6 pr-2'>
          <Entrada texto='Street' valor={street} valorMudou={setStreet} />
        </div>

        <div className='w-1/6 pr-2'>
          <Entrada texto='Number' tipo='number' valor={number} valorMudou={setNumber} />
        </div>
      </div>

      <div className='flex justify-end mt-7'>
        <Button
          cor='blue'
          className='mr-2'
          onClick={() => props.clinicaMudou?.(new Clinica(id, name, city, state, number, street))}
        >
          {id ? 'Alterar' : 'Salvar'}
        </Button>
        <Button onClick={props.cancelado}>Cancelar</Button>
      </div>
    </div>
  );
}
