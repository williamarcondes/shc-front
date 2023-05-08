import Image from 'next/image';
import Layout from '../components/Layout';
import Header from '../components/Header';
import image1 from '../public/1.png';
import image2 from '../public/2.png';
import image3 from '../public/3.png';

export default function whois() {
  return (
    <div className={'bg-gradient-to-r from-blue-100 to-blue-300 h-screen items-center'}>
      <meta name='viewport' content='width=device-width, initial-scale=1.0'></meta>
      <Header></Header>
      <div className={'flex justify-center'}>
        <Layout titulo='Quem Somos?'>
          <div className={'flex items-center'}>
            <Image
              className='order-first mr-4'
              src={image1}
              alt='Descrição da minha imagem'
            />
            <p className={'text-xl ml-6'}>
              Somos a melhor opção para quem busca cuidados de saúde de qualidade. Nossas empresas
              parceiras são altamente qualificadas comprometidas em fornecer atendimento
              personalizado e eficiente a todos os pacientes.
            </p>
          </div>
          <div className={'flex items-center'}>
            <p className={'text-xl'}>
              Nossa missão é fornecer cuidados excepcionais e ajudar nossos pacientes a alcançar sua
              melhor saúde. Conectando pacientes com profissionais de saúde.
            </p>
            <Image
              className='order-first ml-4'
              src={image3}
              alt='Descrição da minha imagem'
            />
          </div>
          <div className="flex flex-col justify-center items-center ">
          <div className={'text-center'}>
              <br />
              <p className={'text-xl'}>
              Estamos aqui para extender a mão no momento que precisar
            </p>
          </div>  

          <Image
              className='order-first ml-4'
              src={image2}
              alt='Descrição da minha imagem'
            />
          </div>
        </Layout>
      </div>
    </div>
  );
}
