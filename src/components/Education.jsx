import { motion } from 'framer-motion';
import { Book, Calendar, MapPin } from 'lucide-react';

const education = [
  {
    degree: 'Bachelor of Science in Computer Science and Engineering',
    institution: 'University of Netrokona',
    location: 'Netrokona, BANGLADESH',
    period: '2022 - present',
    description:
      'Focused on web technologies, data structures, and algorithms. Participated in various hackathons and coding competitions.',
  },
  {
    degree: 'Higher Secondary Certificate',
    institution: 'Jaflong Valley Boarding School',
    location: 'Sylhet, BANGLADESH',
    period: '2018 - 2021',
    description:
      'Studied Science with Mathematics. Participated in various science fairs and robotics competitions.',
  },
];

export default function Education() {
  return (
    <section id='education' className='min-h-screen mt-20'>
      <div className='flex items-center h-full w-full'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className=' mb-8'
          >
            <h2 className='text-4xl font-bold  mb-4'>
              My <span className='text-accent'>Education</span>
            </h2>
            <p className='text-gray-400'>
              My academic journey and qualifications
            </p>
          </motion.div>

          <div className='space-y-12'>
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className='bg-black/90 p-6 rounded-lg shadow-lg border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300'
              >
                <div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-4'>
                  <h3 className='text-xl font-semibold text-accent'>
                    {edu.degree}
                  </h3>
                  <div className='flex items-center mt-2 md:mt-0'>
                    <Calendar className='w-4 h-4 mr-2 text-gray-400' />
                    <span className='text-sm text-gray-400'>{edu.period}</span>
                  </div>
                </div>
                <div className='flex items-center mb-4'>
                  <Book className='w-5 h-5 mr-2 text-gray-400' />
                  <span className='text-lg text-gray-300'>
                    {edu.institution}
                  </span>
                </div>
                <div className='flex items-center mb-4'>
                  <MapPin className='w-5 h-5 mr-2 text-gray-400' />
                  <span className='text-sm text-gray-400'>{edu.location}</span>
                </div>
                <p className='text-gray-300'>{edu.description}</p>
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
