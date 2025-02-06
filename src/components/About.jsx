import { Link } from 'react-scroll';

const About = () => {
  return (
    <section
      id='about'
      className=' min-h-screen mt-10 md:mt-0 flex items-center'
    >
      <div className='max-w-7xl h-full px-4 sm:px-6 lg:px-8 mx-auto flex flex-col lg:flex-row items-center gap-12'>
        {/* Left Side - Text */}
        <div className=' text-center lg:text-left'>
          <h2 className='text-4xl font-bold text-white'>
            About <span className='text-accent'>Me</span>
          </h2>
          <p className='text-gray-400 mt-4 leading-relaxed'>
            I&apos;m a passionate{' '}
            <span className='text-accent font-semibold'>
              Software Developer
            </span>{' '}
            with expertise in{' '}
            <strong>TypeScript, React, and modern web technologies</strong>. My
            programming journey started with the curiosity to understand how web
            applications work, which led me to explore the{' '}
            <strong>MERN stack, Next.js, and scalable web architectures</strong>
            .
          </p>

          <p className='text-gray-400 mt-2'>
            I specialize in building{' '}
            <strong>scalable, efficient, and visually appealing</strong> web
            applications. I enjoy solving complex problems, optimizing
            performance, and creating smooth user experiences. Writing clean,
            maintainable code is something I strongly believe in.
          </p>

          <p className='text-gray-400 mt-2'>
            Beyond coding, I love exploring new technologies, contributing to
            open-source projects, and sharing knowledge with the community. In
            my free time, I enjoy{' '}
            <strong>
              reading tech blogs, and staying updated with industry trends
            </strong>
            . I&apos;m always eager to learn, grow, and take on exciting new
            challenges.
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
      </div>
    </section>
  );
};

export default About;
