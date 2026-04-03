import { useState } from 'react';

const links = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Consultas', href: '#consultas' },
  { label: 'Rituais', href: '#rituais' },
  { label: 'Ebooks', href: '#ebooks' },
  { label: 'Loja', href: '#loja' },
  { label: 'Oráculo', href: '#oraculo' },
  { label: 'Contato', href: '#contato' },
];

const Navbar = () => {
  const [active, setActive] = useState('Início');

  return (
    <nav className="fixed top-[53px] left-0 right-0 z-[299] bg-background/95 border-b border-foreground/[0.05] flex justify-center backdrop-blur-md overflow-x-auto">
      <ul className="flex list-none">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              onClick={() => setActive(link.label)}
              className={`block px-4 md:px-6 py-3.5 text-[0.72rem] font-medium tracking-[0.18em] uppercase transition-colors duration-300 relative group whitespace-nowrap
                ${active === link.label ? 'text-amber' : 'text-muted-foreground hover:text-foreground'}`}
            >
              {link.label}
              <span className={`absolute bottom-0 left-4 right-4 h-0.5 bg-amber transition-transform duration-300 origin-left
                ${active === link.label ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
