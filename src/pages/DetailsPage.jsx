import { Github, Globe } from 'lucide-react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router';
const projects = [
  {
    title: 'E-Commerce Platform',
    mainTechStack: [
      'Next.js',
      'React',
      'Tailwind CSS',
      'MongoDB',
      'Express.js',
    ],
    description:
      'An online marketplace where users can buy and sell products securely.',
    liveLink: 'https://ecommerce-example.com',
    githubRepo: 'https://github.com/username/ecommerce-client',
    challenges: [
      'Implementing secure authentication and authorization.',
      'Optimizing the database queries for better performance.',
      'Managing complex state in a large-scale application.',
    ],
    futurePlans: [
      'Integrate AI-based product recommendations.',
      'Implement a mobile app using React Native.',
      'Enhance the checkout process with a one-click payment feature.',
    ],
  },
  {
    title: 'Book Management App',
    mainTechStack: ['React', 'Redux', 'Node.js', 'MongoDB'],
    description: 'A web application for managing and reviewing books.',
    liveLink: 'https://bookmanager-example.com',
    githubRepo: 'https://github.com/username/bookmanager-client',
    challenges: [
      'Handling real-time updates when multiple users modify data.',
      'Creating an efficient search and filtering system.',
      'Ensuring a responsive and accessible UI.',
    ],
    futurePlans: [
      'Add a social feature for book discussions.',
      'Enable integration with external book databases (Google Books API).',
      'Introduce an AI-powered book recommendation system.',
    ],
  },
];
export default function DetailsPage() {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const params = useSearchParams();
  console.log(params);
  useEffect(() => {}, []);

  return (
    <div className='min-h-screen bg-zinc-950 text-white p-6'>
      <div className='max-w-4xl mx-auto space-y-16'>
        {/* Header */}
        <div className='space-y-6 text-center'>
          <h1 className='text-5xl font-bold text-emerald-400'>YouTube Clone</h1>
          <p className='text-lg text-zinc-400 max-w-2xl mx-auto'>
            A comprehensive YouTube clone featuring category-wise data fetching,
            search functionality, channel views, video playback, shorts, and
            playlist management.
          </p>
          <div className='flex gap-4 justify-center'>
            <Link
              to='https://youtube-clone-woad-six.vercel.app'
              target='_blank'
              className='inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-colors'
            >
              <Globe className='w-5 h-5' />
              Live Demo
            </Link>
            <Link
              to='https://github.com/tapader13/youtube-clone'
              target='_blank'
              className='inline-flex items-center gap-2 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition-colors'
            >
              <Github className='w-5 h-5' />
              Source Code
            </Link>
          </div>
        </div>

        {/* Tech Stack */}
        <section className='space-y-6'>
          <h2 className='text-3xl font-bold text-emerald-400'>
            Technology Stack
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='space-y-4'>
              <h3 className='text-xl font-semibold text-emerald-300'>
                Core Technologies
              </h3>
              <ul className='space-y-2 text-zinc-300'>
                <li className='flex items-center gap-2'>
                  <span className='w-2 h-2 bg-emerald-400 rounded-full'></span>
                  Next.js 14.2.5
                </li>
                <li className='flex items-center gap-2'>
                  <span className='w-2 h-2 bg-emerald-400 rounded-full'></span>
                  React 18
                </li>
                <li className='flex items-center gap-2'>
                  <span className='w-2 h-2 bg-emerald-400 rounded-full'></span>
                  Tailwind CSS
                </li>
              </ul>
            </div>
            <div className='space-y-4'>
              <h3 className='text-xl font-semibold text-emerald-300'>
                Key Libraries
              </h3>
              <ul className='space-y-2 text-zinc-300'>
                <li className='flex items-center gap-2'>
                  <span className='w-2 h-2 bg-emerald-400 rounded-full'></span>
                  React Player
                </li>
                <li className='flex items-center gap-2'>
                  <span className='w-2 h-2 bg-emerald-400 rounded-full'></span>
                  Axios
                </li>
                <li className='flex items-center gap-2'>
                  <span className='w-2 h-2 bg-emerald-400 rounded-full'></span>
                  Moment.js
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className='space-y-6'>
          <h2 className='text-3xl font-bold text-emerald-400'>Key Features</h2>
          <div className='grid gap-6 text-zinc-300'>
            <div className='p-6 bg-zinc-900 rounded-lg'>
              <ul className='space-y-3'>
                <li className='flex items-start gap-3'>
                  <span className='text-emerald-400 text-lg'>•</span>
                  Category-wise video browsing and filtering
                </li>
                <li className='flex items-start gap-3'>
                  <span className='text-emerald-400 text-lg'>•</span>
                  Advanced search functionality
                </li>
                <li className='flex items-start gap-3'>
                  <span className='text-emerald-400 text-lg'>•</span>
                  Channel pages with detailed information
                </li>
                <li className='flex items-start gap-3'>
                  <span className='text-emerald-400 text-lg'>•</span>
                  Video playback with React Player
                </li>
                <li className='flex items-start gap-3'>
                  <span className='text-emerald-400 text-lg'>•</span>
                  Shorts video support
                </li>
                <li className='flex items-start gap-3'>
                  <span className='text-emerald-400 text-lg'>•</span>
                  Playlist creation and management
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Challenges */}
        <section className='space-y-6'>
          <h2 className='text-3xl font-bold text-emerald-400'>
            Development Challenges
          </h2>
          <div className='space-y-4 text-zinc-300'>
            <p className='leading-relaxed'>
              During the development of this project, several challenges were
              encountered and overcome:
            </p>
            <ul className='space-y-3 pl-4'>
              <li className='flex items-start gap-3'>
                <span className='text-emerald-400 text-lg'>•</span>
                Implementing efficient data fetching and caching strategies for
                smooth category navigation
              </li>
              <li className='flex items-start gap-3'>
                <span className='text-emerald-400 text-lg'>•</span>
                Creating a responsive design that maintains functionality across
                all device sizes
              </li>
              <li className='flex items-start gap-3'>
                <span className='text-emerald-400 text-lg'>•</span>
                Managing complex state for video playback and playlist
                functionality
              </li>
              <li className='flex items-start gap-3'>
                <span className='text-emerald-400 text-lg'>•</span>
                Optimizing performance with lazy loading and pagination
              </li>
            </ul>
          </div>
        </section>

        {/* Future Plans */}
        <section className='space-y-6'>
          <h2 className='text-3xl font-bold text-emerald-400'>
            Future Improvements
          </h2>
          <div className='space-y-6 text-zinc-300'>
            <div className='space-y-4'>
              <h3 className='text-xl font-semibold text-emerald-300'>
                Planned Features
              </h3>
              <ul className='space-y-3'>
                <li className='flex items-start gap-3'>
                  <span className='text-emerald-400 text-lg'>•</span>
                  Enhanced mobile responsiveness
                </li>
                <li className='flex items-start gap-3'>
                  <span className='text-emerald-400 text-lg'>•</span>
                  User authentication system
                </li>
                <li className='flex items-start gap-3'>
                  <span className='text-emerald-400 text-lg'>•</span>
                  AI-powered video recommendations
                </li>
                <li className='flex items-start gap-3'>
                  <span className='text-emerald-400 text-lg'>•</span>
                  Real-time comment system
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Version Info */}
        <footer className='text-sm text-zinc-500 pt-8 border-t border-zinc-800'>
          <div className='flex justify-between items-center'>
            <span>Version 0.1.0</span>
            <span>Last updated: {new Date().toLocaleDateString()}</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
