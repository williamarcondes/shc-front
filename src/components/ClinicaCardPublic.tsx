import Image from 'next/image';
import image3 from '../public/3.png';

import Clinica from '../core/Clinica';

interface ClinicaProps {
  clinica: Clinica;
  clinicaEditar?: (clinica: Clinica) => void;
}

export default function ClinicaCardPublic(props: ClinicaProps) {
  return (
    <td>
      <div className='bg-white shadow-md rounded p-4 m-8'>
        <div className='flex items-center justify-between mb-4'>
          <h2 className='text-4xl font-bold mb-2'>{props.clinica.name}</h2>
        </div>
        <div className='flex item-center'>
          <Image
            className='order-first ml-4'
            src={image3}
            alt='Descrição da minha imagem'
            height='80'
            width='120'
          />
          <p className='text-gray-700 text-2xl pl-10 pt-5'>
            {props.clinica.street}, {props.clinica.number} - {props.clinica.city}/{props.clinica.uf}
          </p>
        </div>
      </div>
    </td>
  );
}
