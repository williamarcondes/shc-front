import Image from 'next/image';
import Button from '../components/Button';
import Formulario from '../components/Formulario';
import Layout from '../components/Layout';
import Table from '../components/Table';

import useClinicas from '../hooks/useClinicas';

export default function Home() {
  const {
    clinica,
    clinicas,
    novoClinica,
    salvarClinica,
    selecionarClinica,
    excluirClinica,
    visibleTable,
    showTable,
  } = useClinicas();

  const svgString = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="20%" height="20%"><g transform="rotate(180, 250, 250)"><path d="M250,50 L435,200 A130,130 0 0,1 250,450 A130,130 0 0,1 65,200 L250,50 Z" fill="#BF0A30"/></g><text x="50%" y="42%" dominant-baseline="middle" text-anchor="middle" font-size="180" font-family="Arial" fill="#ffffff">SHC</text></svg>';

  return (
    <div className={'bg-gradient-to-r from-blue-500 to-blue-500 h-screen items-center'}>
      <div className={'flex justify-center'}>
        <Image
          alt='ok'
          src={`data:image/svg+xml;utf8,${encodeURIComponent(svgString)}`}
          width={200}
          height={200}
        />
      </div>
      <div className={'flex justify-center'}>
        <Layout titulo='Cadastro Clínicas'>
          {visibleTable ? (
            <>
              <div className='flex justify-end'>
                <Button cor='green' className='mb-4' onClick={novoClinica}>
                  Nova Clinica
                </Button>
              </div>
              <Table
                clinicas={clinicas}
                clinicaSelecionado={selecionarClinica}
                clinicaExcluido={excluirClinica}
              />
            </>
          ) : (
            <Formulario clinica={clinica} clinicaMudou={salvarClinica} cancelado={showTable} />
          )}
        </Layout>
      </div>
    </div>
  );
}
