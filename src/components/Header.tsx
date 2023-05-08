import Link from 'next/link';
import { IconeLogo } from './Icones';

export default function Header() {
  const linkClass = 'text-gray-900 font-bold text-2xl mr-4 py-2 px-4 rounded-full bg-gray-100 hover:bg-gray-300';

  const links = [
    { href: '/', label: 'Clínicas' },
    { href: '/quem-somos', label: 'Quem somos?' },
    { href: '/feedback', label: 'Contato' },
    { href: '/cadastro', label: 'Cadastro' },
  ];

  return (
    <div className={'flex items-center justify-center py-4'}>
      {IconeLogo}
      <div className='ml-6'>
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            <a className={linkClass}>{link.label}</a>
          </Link>
        ))}
      </div>
    </div>
  );
}
