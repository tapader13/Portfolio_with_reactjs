import { motion } from 'framer-motion';
import { Link } from 'react-router';

export const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.4, duration: 0.8 }}
      className='bg-[#27272c] flex flex-col p-5 rounded-lg shadow-lg'
    >
      <div className='relative w-full h-[200px] group'>
        <img
          src={project.image}
          alt={project.name}
          className='rounded-lg w-full h-full'
        />
        <div className='absolute inset-0 opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all duration-300 p-1 text-white bg-black/85'>
          <div style={{ height: '190px', overflowY: 'auto' }}>
            <p>{project.details}</p>
          </div>
        </div>
      </div>

      <h3 className='text-xl text-accent font-bold mt-4'>{project.name}</h3>

      <div className='mt-4 flex-grow'>
        <div className='flex flex-wrap gap-3'>
          <span className='font-semibold text-white flex-shrink-0'>
            Technologies:
          </span>
          {project.technologies.map((tech, index) => (
            <button
              className='bg-primary  hover:bg-[#27272c]   text-white px-3 py-2  rounded-none  hover:text-accent'
              key={index}
            >
              {tech}
            </button>
          ))}
        </div>
      </div>

      <div className='mt-5 flex justify-start gap-4'>
        <a href={project.githubLink} target='_blank' rel='noopener noreferrer'>
          <button className='bg-[#27272c]  text-white  hover:bg-accent h-9 rounded-full px-3 border-accent border'>
            GitHub
          </button>
        </a>

        <a href={project.liveLink} target='_blank' rel='noopener noreferrer'>
          <button className='bg-[#27272c]  h-9 rounded-full px-3 text-white  hover:bg-accent border-accent border'>
            Live Demo
          </button>
        </a>
        <Link to={`/details/${project.name}`}>
          <button className='bg-[#27272c]  h-9 rounded-full px-3 text-white  hover:bg-accent border-accent border'>
            View More
          </button>
        </Link>
      </div>
    </motion.div>
  );
};
