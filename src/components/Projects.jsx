import { useState } from 'react';
import { ProjectCard } from './ProjectCard';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
const projects = [
  {
    category: 'Frontend',
    items: [
      {
        name: 'Youtube Clone',
        details:
          'A fully-featured YouTube clone offering video search, playback, category filtering. Users can explore channels, view playlists, watch videos, and navigate related content, shorts and playlists.',
        technologies: [
          'NextJs',
          'Tailwind CSS',
          'Shadcn UI',
          'Rapid Api',
          'Axios',
        ],
        image: '/Screenshot 2024-08-16 024552.png',
        githubLink: 'https://github.com/tapader13/youtube-clone',
        liveLink: 'https://youtube-clone-woad-six.vercel.app/',
      },
      {
        name: 'Movie Website',
        details:
          'A movie website built with Next.js, Tailwind CSS, and Shadcn UI. The project includes features like movie genre-based search, adding to favorites, deleting from favorites, and more.',
        technologies: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Shadcn UI'],
        image: '/Screenshot 2024-08-12 102410.png',
        githubLink: 'https://github.com/tapader13/movie-app',
        liveLink: 'https://movie-app-vert-pi.vercel.app/',
      },
      {
        name: 'HumbleTeam Clone',
        details:
          'A clone of the HumbleTeam website with advanced animations and responsive design.',
        technologies: [
          'React',
          'Framer-motion',
          'Typescript',
          'Tailwind CSS',
          'Swiper',
        ],
        image: '/humble.png',
        githubLink:
          'https://github.com/tapader13/humbleteam_clone?tab=readme-ov-file',
        liveLink: 'https://humbleteam-clone-nuwb.vercel.app/',
      },
      {
        name: 'Bazaar Landing Page',
        details:
          'A marketplace landing page built with Material UI and Tailwind CSS for a modern look.',
        technologies: ['React', 'Typescript', 'Material UI'],
        image: '/Screenshot 2024-08-07 091153.png',
        githubLink: 'https://github.com/tapader13/bazaar_mui_project',
        liveLink: 'https://bazaar-mui-project-by8i.vercel.app/',
      },
      {
        name: 'Furniture Landing Page',
        details:
          'A stylish landing page for a furniture store with smooth animations and a clean layout.',
        technologies: [
          'React',
          'Typescript',
          'Framer-motion',
          'Tailwind CSS',
          'Material UI',
        ],
        image: '/Screenshot 2024-08-07 091611.png',
        githubLink: 'https://github.com/tapader13/modern-websites',
        liveLink: 'https://gh-snowy.vercel.app/',
      },

      {
        name: 'Hero Travel',
        details:
          'A modern travel agency website to book flights, hotels, and vacation packages.',
        technologies: ['HTML', 'CSS'],
        image: '/herotravel.png',
        githubLink: 'https://github.com/tapader13/hero-travel',
        liveLink: 'https://tapader13.github.io/hero-travel/',
      },
    ],
  },
  {
    category: 'Backend',
    items: [
      {
        name: 'Space Booking Platform',
        details:
          'A comprehensive platform for booking and listing spaces, featuring authentication with NextAuth (including social logins and credential-based authentication). Users can list spaces for rent, search, filter, and sort spaces by categories, and book spaces with payment processing through Stripe. Supports webhooks for payment status updates, state management using Zustand, and data management with Prisma. Integrates image and video uploads via Cloudinary.',
        technologies: [
          'Next.js',
          'NextAuth',
          'Tailwind CSS',
          'Stripe',
          'Cloudinary',
          'Prisma',
          'Zustand',
          'TypeScript',
          'MongoDB',
        ],
        image: '/Screenshot 2024-10-23 132038.png',
        githubLink: 'https://github.com/tapader13/space_booking',
        liveLink: 'https://space-booking-psi.vercel.app/',
      },
      {
        name: 'Instagram Clone',
        details:
          'A fully-featured Instagram clone built with React, Socket.io, MongoDB, and Tailwind CSS. Features are like follow, like, comment, post, delete and edit, message, authentication etc.',
        technologies: [
          'Shadcn UI',
          'React Js',
          'MongoDB',
          'Tailwind CSS',
          'Socket io',
        ],
        image: '/Screenshot 2024-10-10 100314.png',
        githubLink: 'https://github.com/tapader13/insta_clone',
        liveLink: 'https://insta-clone-1-xpqt.onrender.com/',
      },
      {
        name: 'Personal Blog Website',
        details:
          ' This is a fully-featured blogging platform designed to provide an engaging and interactive user experience. It includes a RESTful API for managing blog posts. The website supports rich text formatting for blog content and allows users to easily navigate through various categories and tags.',
        technologies: [
          'Shadcn UI',
          'Framer-motion',
          'Next.js',
          'MongoDB',
          'Tailwind CSS',
          'React-Markdown',
        ],
        image: '/Screenshot 2024-09-12 044142.png',
        githubLink: 'https://github.com/tapader13/blog-frnt',
        liveLink: 'https://blog-frnt.vercel.app/',
      },
      {
        name: 'E-commerce Website',
        details:
          'This project is a dynamic e-commerce platform that allows users to seamlessly search for products, add them to a cart, and make secure payments using Stripe. Users can easily filter and sort products based on various criteria to find exactly what they need. The application supports user authentication to provide a personalized experience, ensuring that users can manage their accounts and order history. Additionally, pagination is implemented to enhance navigation through extensive product listings, ensuring a smooth and user-friendly interface.',
        technologies: [
          'Shadcn UI',
          'Framer-motion',
          'Next.js',
          'MongoDB',
          'Tailwind CSS',
          'TypeScript',
          'Supabase',
          'Stripe',
        ],
        image: '/Screenshot 2024-09-26 100258.png',
        githubLink: 'https://github.com/tapader13/ecom_frontend',
        liveLink: 'https://ecom-frontend-flax.vercel.app/',
      },
    ],
  },
];

const Projects = () => {
  const [tab, setTab] = useState('all');
  const getFilteredProjects = (tab) => {
    if (tab === 'all') {
      return projects.flatMap((category) => category.items);
    }
    const category = projects.find(
      (project) => project.category.toLowerCase() === tab
    );
    return category ? category.items : [];
  };

  return (
    <div id='projects' className='min-h-screen mt-20'>
      <div className='max-w-7xl w-full h-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center'>
        <div className='w-full'>
          <h2 className='text-4xl mb-6 font-bold text-white'>
            My <span className='text-accent'>Project</span>
          </h2>
          <div className='flex flex-col gap-5'>
            <div className='flex justify-start md:gap-10 gap-4'>
              <h3
                className={` rounded-sm md:px-5 px-3 cursor-pointer py-2 text-sm font-medium ${
                  tab === 'all' ? 'bg-accent text-primary ' : 'bg-[#27272c]'
                }`}
                onClick={() => setTab('all')}
              >
                All
              </h3>
              <h3
                className={` rounded-sm cursor-pointer md:px-5 px-3 py-2 text-sm font-medium ${
                  tab === 'frontend'
                    ? 'bg-accent text-primary '
                    : 'bg-[#27272c]'
                }`}
                onClick={() => setTab('frontend')}
              >
                Front-End
              </h3>
              <h3
                className={` rounded-sm cursor-pointer md:px-5 px-3 py-2 text-sm font-medium ${
                  tab === 'backend' ? 'bg-accent text-primary ' : 'bg-[#27272c]'
                }`}
                onClick={() => setTab('backend')}
              >
                Back-End
              </h3>
            </div>
            <div className=' w-full'>
              <div className='mt-2  w-full'>
                <ResponsiveMasonry
                  columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
                  gutterBreakpoints={{ 350: '12px', 750: '16px', 900: '24px' }}
                >
                  <Masonry className=''>
                    {tab === 'all' &&
                      getFilteredProjects('all').map((project, index) => (
                        <ProjectCard project={project} key={index} />
                      ))}
                  </Masonry>
                </ResponsiveMasonry>
                {/* <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-10'>
                  {tab === 'all' &&
                    getFilteredProjects('all').map((project, index) => (
                      <ProjectCard project={project} key={index} />
                    ))}
                </div> */}
              </div>
              <div className='mt-2 w-full'>
                <ResponsiveMasonry
                  columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
                  gutterBreakpoints={{ 350: '12px', 750: '16px', 900: '24px' }}
                >
                  <Masonry className=''>
                    {tab === 'frontend' &&
                      getFilteredProjects('frontend').map((project, index) => (
                        <ProjectCard project={project} key={index} />
                      ))}
                  </Masonry>
                </ResponsiveMasonry>
              </div>
              <div className='mt-2'>
                {' '}
                <ResponsiveMasonry
                  columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
                  gutterBreakpoints={{ 350: '12px', 750: '16px', 900: '24px' }}
                >
                  <Masonry className=''>
                    {tab === 'backend' &&
                      getFilteredProjects('backend').map((project, index) => (
                        <ProjectCard project={project} key={index} />
                      ))}
                  </Masonry>
                </ResponsiveMasonry>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
