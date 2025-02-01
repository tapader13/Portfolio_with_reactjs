import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-scroll';

const navItems = [
  { name: 'Home', href: 'home' },
  { name: 'About', href: 'about' },
  { name: 'Skills', href: 'skills' },
  { name: 'Education', href: 'education' },
  { name: 'Experience', href: 'experience' },
  { name: 'Projects', href: 'projects' },
  { name: 'Contact', href: 'contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const handleSetActive = (section) => {
    setActiveSection(section);
  };
  const handleSetInactive = () => {
    setActiveSection('home');
  };
  return (
    <nav className=' h-16 shadow-md fixed w-full z-10'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex items-center'>
            <Link
              className='cursor-pointer'
              to='home'
              smooth={true}
              duration={500}
              hashSpy={true}
              spy={true}
            >
              <h1 className='font-semibold text-3xl  '>
                Minhaj<span className='text-accent'>.</span>
              </h1>
            </Link>
          </div>
          <div className='hidden md:block'>
            <div className='ml-10 flex items-baseline space-x-8'>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  smooth={true}
                  duration={500}
                  spy={true}
                  hashSpy={true}
                  // offset={-70}
                  isDynamic={true}
                  onSetActive={handleSetActive}
                  onSetInactive={handleSetInactive}
                  className={`transition-all hover:text-accent font-medium text-white cursor-pointer ${
                    activeSection === item.href
                      ? 'text-accent border-b-2 border-accent'
                      : 'border-b-2 border-transparent'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className='md:hidden'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
            >
              <span className='sr-only'>Open main menu</span>
              {isOpen ? (
                <X className='block h-6 w-6' aria-hidden='true' />
              ) : (
                <Menu className='block h-6 w-6' aria-hidden='true' />
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className='md:hidden'>
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className='text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium'
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
