import Link from 'next/link';
import { IconeLogo } from './Icones';

export default function Header() {
  return (
    <div className={'flex items-center justify-center py-4'}>
      {IconeLogo}
      <div className='ml-6'>
        <Link href='/'>
          <a className='text-gray-900 font-bold text-2xl mr-4 py-2 px-4 rounded-full bg-gray-100 hover:bg-gray-300'>
            Clínicas
          </a>
        </Link>
        <Link href='/quem-somos'>
          <a className='text-gray-900 font-bold text-2xl mr-4 py-2 px-4 rounded-full bg-gray-100 hover:bg-gray-300'>
            Quem somos?
          </a>
        </Link>
        <Link href='/feedback'>
          <a className='text-gray-900 font-bold text-2xl mr-4 py-2 px-4 rounded-full bg-gray-100 hover:bg-gray-300'>
            Contato
          </a>
        </Link>
        <Link href='/cadastro'>
          <a className='text-gray-900 font-bold text-2xl mr-4 py-2 px-4 rounded-full bg-gray-100 hover:bg-gray-300'>
            Cadastro
          </a>
        </Link>
      </div>
    </div>
  );
}
