import { Github, Linkedin, Twitter, Facebook } from 'lucide-react';
import { FiDownload } from 'react-icons/fi';
import { Link } from 'react-router';
import { Typewriter } from 'react-simple-typewriter';
import Icons from './Icons';

export default function Hero() {
  return (
    <section id='home' className=' pt-16 '>
      <div className='max-w-7xl h-[80vh]  mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center  justify-between'>
        <main>
          {' '}
          {/* Added relative positioning and bottom padding */}
          <div className='grid md:grid-cols-6 lg:grid-cols-8 grid-cols-1 gap-9'>
            <div className='lg:col-span-4 md:col-span-3'>
              <span className='text-xl text-black dark:text-white'>
                Software Developer
              </span>
              <h1 className='lg:text-4xl xl:text-5xl text-3xl mb-6 leading-[1.1] font-semibold text-black dark:text-white'>
                Hello I&apos;m <br />{' '}
                <span className='text-accent tracking-tighter inline-block min-w-[330px]'>
                  <Typewriter
                    words={[
                      'Minhaj Tapader',
                      'Next Developer',
                      'React Developer',
                    ]}
                    loop={0}
                    // cursor
                    // cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </h1>
              <p className='mb-9 dark:text-white/75 text-black/75 '>
                {' '}
                I am a passionate software developer with a knack for creating
                efficient and scalable web applications. With a strong
                background in TypeScript and React. Let&apos;s create something
                amazing together!
              </p>
              <div className='flex md:flex-row flex-col gap-8 items-center'>
                <a href='/minhaj_resume.pdf' download='resume'>
                  <button className='relative cursor-pointer group flex uppercase items-center gap-2 bg-transparent font-medium border-accent text-accent border h-10 px-4 py-2 rounded-full transition-all duration-1000 overflow-hidden'>
                    <span className='relative z-10 transition-all duration-700 delay-200 group-hover:text-primary'>
                      Download CV
                    </span>
                    <FiDownload className='relative  z-10 text-xl transition-all duration-700 delay-200 group-hover:text-primary' />
                    <span className='absolute inset-0 bg-accent w-0 left-0 transition-all duration-1000 ease-in-out group-hover:w-full '></span>
                  </button>
                </a>
                <div>
                  <Icons />
                </div>
              </div>
            </div>
            <div className=' md:ml-8 md:col-span-3 lg:col-span-4 mx-auto lg:mx-0   flex justify-end items-center'>
              <div className='border-2 relative border-accent  rounded-full h-[400px] w-[380px] overflow-hidden mix-blend-lighten '>
                <img
                  alt='hero image'
                  src={'/img.png'}
                  className='rounded-full object-contain'
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
