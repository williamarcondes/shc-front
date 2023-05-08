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
  const [uf, setUf] = useState(props.clinica?.uf ?? '');
  const [street, setStreet] = useState(props.clinica?.street ?? '');
  const [number, setNumber] = useState(props.clinica?.number ?? 0);

  return (
    <div>
      {id ? <Entrada somenteLeitura texto='Código' valor={id} className='mb-5' /> : false}
      <Entrada texto='Nome' valor={name} valorMudou={setName} className='mb-5' />
      <div className='flex flex-row'>
        <div className='w-5/6 pr-2'>
          <Entrada texto='Cidade' valor={city} valorMudou={setCity} />
        </div>

        <div className='w-1/6 pr-2'>
          <Entrada texto='UF' valor={uf} valorMudou={setUf} />
        </div>
      </div>
      <div className='flex flex-row'>
        <div className='w-5/6 pr-2'>
          <Entrada texto='Rua' valor={street} valorMudou={setStreet} />
        </div>

        <div className='w-1/6 pr-2'>
          <Entrada texto='Número' tipo='number' valor={number} valorMudou={setNumber} />
        </div>
      </div>

      <div className='flex justify-end mt-7'>
        <Button
          cor='blue'
          className='mr-2'
          onClick={() => props.clinicaMudou?.(new Clinica(id, name, city, uf, number, street, []))}
        >
          {id ? 'Alterar' : 'Salvar'}
        </Button>
        <Button onClick={props.cancelado}>Cancelar</Button>
      </div>
    </div>
  );
}
