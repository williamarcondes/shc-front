import Button from '../components/Button';
import Formulario from '../components/Formulario';
import Layout from '../components/Layout';
import Table from '../components/Table';

import useClinicas from '../hooks/useClinicas';
import ClinicaCard from '../components/ClinicaCard';
import Header from '../components/Header';

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
    <div className={'bg-gradient-to-r from-blue-100 to-blue-300 h-screen items-center'}>
      <meta name='viewport' content='width=device-width, initial-scale=1.0'></meta>
      <Header></Header>
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
