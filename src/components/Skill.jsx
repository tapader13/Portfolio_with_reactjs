import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaBootstrap,
  FaCss3,
  FaGit,
  FaHtml5,
  FaJava,
  FaJs,
  FaNodeJs,
  FaReact,
} from 'react-icons/fa';
import {
  SiC,
  SiCplusplus,
  SiFirebase,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

const skillsData = [
  { name: 'React', level: 90, color: '#61DAFB', icon: FaReact },
  { name: 'Next.js', level: 85, color: '#000000', icon: SiNextdotjs },
  { name: 'TypeScript', level: 80, color: '#3178C6', icon: SiTypescript },
  { name: 'Node.js', level: 85, color: '#339933', icon: FaNodeJs },
  { name: 'MongoDB', level: 75, color: '#47A248', icon: SiMongodb },
  { name: 'Redux', level: 75, color: '#764ABC', icon: SiRedux },
  { name: 'Tailwind CSS', level: 80, color: '#06B6D4', icon: SiTailwindcss },
  { name: 'Git', level: 85, color: '#F34F29', icon: FaGit },
  { name: 'Java', level: 70, color: '#007396', icon: FaJava },
  { name: 'C++', level: 65, color: '#00599C', icon: SiCplusplus },
  { name: 'C', level: 60, color: '#A8B9CC', icon: SiC },
  { name: 'Firebase', level: 75, color: '#FFCA28', icon: SiFirebase },
  { name: 'MySQL', level: 70, color: '#4479A1', icon: SiMysql },
  { name: 'JavaScript', level: 90, color: '#F7DF1E', icon: FaJs },
  { name: 'CSS3', level: 85, color: '#1572B6', icon: FaCss3 },
  { name: 'HTML5', level: 85, color: '#E34F26', icon: FaHtml5 },
  { name: 'Bootstrap', level: 80, color: '#7952B3', icon: FaBootstrap },
];

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section id='skills' className='min-h-screen mt-10 md:mt-0 '>
      <div className='flex items-center h-full w-full'>
        <div className='max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8'>
          <div className=' mb-8'>
            <h2 className='text-4xl font-bold mb-4'>
              My <span className='text-accent'>Skills</span>
            </h2>
            <p className='text-gray-400'>
              Hover over the circles to see my proficiency levels
            </p>
          </div>

          <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8'>
            {skillsData.map((skill) => (
              <motion.div
                key={skill.name}
                className='flex flex-col group items-center'
                whileHover={{ scale: 1.05 }}
                onHoverStart={() => setHoveredSkill(skill.name)}
                onHoverEnd={() => setHoveredSkill(null)}
              >
                <div className='relative w-20 h-20'>
                  <svg className='w-full h-full' viewBox='0 0 100 100'>
                    <circle
                      className='text-gray-700 stroke-current'
                      strokeWidth='8'
                      cx='50'
                      cy='50'
                      r='40'
                      fill='transparent'
                    />
                    <motion.circle
                      className='stroke-current'
                      strokeWidth='8'
                      strokeLinecap='round'
                      cx='50'
                      cy='50'
                      r='40'
                      fill='transparent'
                      style={{ stroke: skill.color }}
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: skill.level / 100 }}
                      transition={{ duration: 1, ease: 'easeInOut' }}
                      viewport={{ once: false, amount: 0.5 }}
                    />
                  </svg>
                  <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center'>
                    <span>
                      {' '}
                      <skill.icon className='text-3xl text-white group-hover:text-accent' />
                    </span>
                  </div>
                </div>
                {hoveredSkill === skill.name ? (
                  <AnimatePresence>
                    {hoveredSkill === skill.name && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className='text-accent font-bold'
                      >
                        {skill.level}%
                      </motion.p>
                    )}
                  </AnimatePresence>
                ) : (
                  <p className='mt-4 font-medium text-lg'>{skill.name}</p>
                )}
              </motion.div>
            ))}
          </div>

          {/* Floating Shapes */}
          <div className='absolute inset-0 overflow-hidden pointer-events-none'>
            <motion.div
              animate={{
                rotate: 360,
                transition: {
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: 'linear',
                },
              }}
              className='absolute -top-20 -right-20 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl'
            />
            <motion.div
              animate={{
                rotate: -360,
                transition: {
                  duration: 25,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: 'linear',
                },
              }}
              className='absolute -bottom-20 -left-20 w-60 h-60 bg-indigo-500/5 rounded-full blur-3xl'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
