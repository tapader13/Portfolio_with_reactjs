import { Github, Linkedin, Twitter, Facebook } from 'lucide-react';
import { Link } from 'react-router';

export default function Hero() {
  return (
    <section id='home' className='bg-gray-50 pt-16 pb-10'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center  justify-between'>
        <div className='md:w-1/2 mb-8 md:mb-0'>
          <h1 className='text-4xl font-bold text-gray-900 mb-4'>
            Minhaj Tapader
          </h1>
          <h2 className='text-2xl font-semibold text-gray-700 mb-4'>
            Frontend Developer
          </h2>
          <p className='text-xl text-gray-600 mb-6'>
            Passionate about creating beautiful and functional web experiences.
          </p>
          <div className='flex space-x-4 mb-6'>
            <Link
              href='/resume.pdf'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300'
            >
              Download Resume
            </Link>
          </div>
          <div className='flex space-x-4'>
            <Link
              href='https://github.com/yourusername'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-600 hover:text-gray-900'
            >
              <Github size={24} />
            </Link>
            <Link
              href='https://linkedin.com/in/yourusername'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-600 hover:text-gray-900'
            >
              <Linkedin size={24} />
            </Link>
            <Link
              href='https://twitter.com/yourusername'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-600 hover:text-gray-900'
            >
              <Twitter size={24} />
            </Link>
            <Link
              href='https://facebook.com/yourusername'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-600 hover:text-gray-900'
            >
              <Facebook size={24} />
            </Link>
          </div>
        </div>
        <div className='md:w-1/2'>
          <img
            src='/your-profile-picture.jpg'
            alt='Your Name'
            width={400}
            height={400}
            className='rounded-full shadow-lg'
          />
        </div>
      </div>
    </section>
  );
}
