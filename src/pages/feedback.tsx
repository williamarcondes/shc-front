import { useState } from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';

export default function FeedbackPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name, email, message };
    await fetch('/api/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    setName('');
    setEmail('');
    setMessage('');
    alert('Feedback enviado com sucesso!');
  };
  return (
    <div className={'bg-gradient-to-r from-blue-100 to-blue-300 h-screen items-center'}>
      <meta name='viewport' content='width=device-width, initial-scale=1.0'></meta>
      <Header></Header>
      <div className={'flex justify-center'}>
        <Layout titulo='Tira sua dúvida ou deixe seu Feedback'>
          <div className='flex justify-center'>
            <div className='w-full max-w-md mt-8'>
              <form
                onSubmit={handleSubmit}
                className='bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4'
              >
                <div className='mb-4'>
                  <label htmlFor='name' className='block text-gray-700 font-bold mb-2'>
                    Nome Completo:
                  </label>
                  <input
                    type='text'
                    name='name'
                    id='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    required
                  />
                </div>
                <div className='mb-4'>
                  <label htmlFor='email' className='block text-gray-700 font-bold mb-2'>
                    Email:
                  </label>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    required
                  />
                </div>
                <div className='mb-6'>
                  <label htmlFor='message' className='block text-gray-700 font-bold mb-2'>
                    Mensagem:
                  </label>
                  <textarea
                    name='message'
                    id='message'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    required
                  ></textarea>
                </div>
                <div className='flex items-center justify-center'>
                  <button
                    type='submit'
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                  >
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Layout>
      </div>
    </div>
  );
}
