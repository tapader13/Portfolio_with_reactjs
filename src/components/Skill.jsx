import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBootstrap, FaNodeJs, FaReact } from 'react-icons/fa';
import {
  SiMongodb,
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
  { name: 'AWS', level: 70, color: '#FF9900', icon: SiRedux },
  { name: 'Docker', level: 65, color: '#2496ED', icon: SiTailwindcss },
  { name: 'GraphQL', level: 60, color: '#E10098', icon: FaBootstrap },
];

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section id='skills' className='min-h-screen py-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className=' mb-16'
        >
          <h2 className='text-4xl font-bold mb-4'>
            My <span className='text-accent'>Skills</span>
          </h2>
          <p className='text-gray-400'>
            Hover over the circles to see my proficiency levels
          </p>
        </motion.div>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
          {skillsData.map((skill) => (
            <motion.div
              key={skill.name}
              className='flex flex-col group items-center'
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => setHoveredSkill(skill.name)}
              onHoverEnd={() => setHoveredSkill(null)}
            >
              <div className='relative w-32 h-32'>
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
                    animate={{ pathLength: skill.level / 100 }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                  />
                </svg>
                <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center'>
                  <span>
                    {' '}
                    <skill.icon className='text-3xl text-white group-hover:text-accent' />
                  </span>
                </div>
              </div>
              <p className='mt-4 font-medium text-lg'>{skill.name}</p>
              <AnimatePresence>
                {hoveredSkill === skill.name && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className='text-[#3b82f6] font-bold'
                  >
                    {skill.level}%
                  </motion.p>
                )}
              </AnimatePresence>
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
    </section>
  );
}
