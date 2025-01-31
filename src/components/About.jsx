const About = () => {
  return (
    <section id='about' className='py-20  '>
      <div className='max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto flex flex-col lg:flex-row items-center gap-12'>
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
          <div className='mt-6'>
            <a href='/#projects'>
              <button className='relative cursor-pointer group flex uppercase items-center gap-2 bg-transparent font-medium border-accent text-accent border h-10 px-4 py-2 rounded-full transition-all duration-1000 overflow-hidden'>
                <span className='relative z-10 transition-all duration-700 delay-200 group-hover:text-primary'>
                  View Projects
                </span>

                <span className='absolute inset-0 bg-accent w-0 left-0 transition-all duration-1000 ease-in-out group-hover:w-full '></span>
              </button>
            </a>
          </div>
        </div>

        {/* Right Side - Tech Image */}
        <div className='lg:w-1/2 flex justify-center'>
          <img
            src='/images/tech-bg.png'
            alt='Technology and Coding'
            className='w-full max-w-md rounded-lg shadow-lg'
          />
        </div>
      </div>
    </section>
  );
};

export default About;
