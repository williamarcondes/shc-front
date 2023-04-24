import Link from 'next/link';
import Button from '../components/Button';
import Formulario from '../components/Formulario';
import Layout from '../components/Layout';
import Table from '../components/Table';
import { IconeLogo } from '../components/Icones';

import useClinicas from '../hooks/useClinicas';
import ClinicaCard from '../components/ClinicaCard';

export default function Home() {
  const {
    clinica,
    clinicas,
    novoClinica,
    salvarClinica,
    editarClinica,
    excluirClinica,
    visualizarClinica,
    visibleTable,
    visibleProfile,
    visibleForm,
    showTable,
  } = useClinicas();

  const table = (
    <>
      <div className='flex justify-end'>
        <Button cor='green' className='mb-4' onClick={novoClinica}>
          Nova Clinica
        </Button>
      </div>
      <Table
        clinicas={clinicas}
        clinicaEditar={editarClinica}
        clinicaExcluido={excluirClinica}
        clinicaVisualizar={visualizarClinica}
      />
    </>
  );

  const form = <Formulario clinica={clinica} clinicaMudou={salvarClinica} cancelado={showTable} />;

  const profile = (
   <ClinicaCard clinica={clinica} clinicaEditar={editarClinica}/>
  );

  return (
    <div className={'bg-gradient-to-r from-blue-500 to-blue-500 h-screen items-center'}>
      <meta name='viewport' content='width=device-width, initial-scale=1.0'></meta>
      <div className={'flex col-auto justify-center py-2'}>
        {IconeLogo}
        <div className='mt-4'>
          <Link href='/'>
            <a className='text-gray-200 font-medium ml-4 hover:text-gray-900'>Clínicas</a>
          </Link>
          <Link href='/'>
            <a className='text-gray-200 font-medium ml-4 hover:text-gray-500'>Quem somos?</a>
          </Link>
          <Link href='/'>
            <a className='text-gray-200 font-medium ml-4 hover:text-gray-500'>Dê seu Feedback</a>
          </Link>
        </div>
      </div>
      <div className={'flex justify-center'}>
        <Layout titulo='Cadastro Clínicas'>
          {visibleTable ? table : null}
          {visibleForm ? form : null}
          {visibleProfile ? profile : null}
        </Layout>
      </div>
    </div>
  );
}
