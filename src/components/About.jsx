import { BsArrowDownRight } from 'react-icons/bs';
import { Link } from 'react-scroll';
const services = [
  {
    id: '01',
    title: 'Web Development',
    description:
      'Skilled in building robust web applications using Express, Mongoose, Next.js, and JWT. I create efficient backends with secure APIs and smooth integrations.',
  },

  {
    id: '02',
    title: 'Frontend Design',
    description:
      'Experienced in building responsive, interactive UIs with React, Next.js, and Tailwind CSS for seamless user experiences across all devices.',
  },
];
const About = () => {
  return (
    <section
      id='about'
      className=' min-h-screen mt-10 md:mt-0 flex items-center'
    >
      <div className='max-w-7xl h-full px-4 sm:px-6 lg:px-8 mx-auto flex flex-col lg:flex-row items-center gap-12'>
        {/* Left Side - Text */}
        <div className='lg:w-1/2 text-center lg:text-left'>
          <h2 className='text-4xl font-bold text-white'>
            About <span className='text-accent'>Me</span>
          </h2>
          <p className='text-gray-400 mt-4 leading-relaxed'>
            I&apos;m a passionate{' '}
            <span className='text-accent font-semibold'>
              Software Developer
            </span>{' '}
            with expertise in{' '}
            <strong>TypeScript, React, and modern web technologies</strong>. I
            specialize in building{' '}
            <strong>scalable, efficient, and visually appealing</strong> web
            applications.
          </p>

          <p className='text-gray-400 mt-2'>
            I love working on <strong>innovative projects</strong>,
            experimenting with <strong>Modern web technologies</strong>, and
            contributing to the tech community.
          </p>

          {/* Button */}
          <div className='mt-6  flex justify-center lg:justify-start'>
            <Link
              key={'projects'}
              to={'projects'}
              smooth={true}
              duration={500}
              spy={true}
              hashSpy={true}
              offset={-70}
            >
              <button className='relative cursor-pointer group flex uppercase items-center gap-2 bg-transparent font-medium border-accent text-accent border h-10 px-4 py-2 rounded-full transition-all duration-1000 overflow-hidden'>
                <span className='relative z-10 transition-all duration-700 delay-200 group-hover:text-primary'>
                  View Projects
                </span>

                <span className='absolute inset-0 bg-accent w-0 left-0 transition-all duration-1000 ease-in-out group-hover:w-full '></span>
              </button>
            </Link>
          </div>
        </div>

        {/* Right Side - Tech Image */}
        <div className='lg:w-1/2 flex justify-center'>
          <div className='grid md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-10 mt-1'>
            {services.map((service, index) => (
              <div
                key={index}
                className='p-4 rounded-lg hover:-translate-y-1 transition-all relative overflow-hidden duration-500 group card shadow-sm bg-[#1f2229]'
              >
                <div className='flex justify-between'>
                  <h1 className='text-2xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>
                    {service.id}
                  </h1>
                  <BsArrowDownRight className='bg-white text-black  h-10 w-10 p-2 rounded-full group-hover:bg-accent hover:-rotate-45 font-extrabold transition-all duration-500' />
                </div>
                <h1 className='md:text-2xl text-2xl font-extrabold group-hover:text-accent transition-all duration-500 text-white'>
                  {service.title}
                </h1>
                <p className='leading-7 mt-3 text-white'>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
