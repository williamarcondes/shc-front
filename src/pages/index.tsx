import Layout from '../components/Layout';
import Header from '../components/Header';
import CardsList from '../components/CardsList';
import useClinicas from '../hooks/useClinicas';

export default function Home() {
  const {
    clinicas,
  } = useClinicas();

  return (
    <div className={'bg-gradient-to-r from-blue-100 to-blue-200 h-screen items-center'}>
      <meta name='viewport' content='width=device-width, initial-scale=1.0'></meta>
      <Header></Header>
      <div className={'flex justify-center'}>
        <Layout titulo='Sistema Home Core'>
          {<CardsList clinicas={clinicas}/>}
        </Layout>
      </div>
    </div>
  );
}
