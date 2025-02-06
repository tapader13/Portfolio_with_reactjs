import { Github, Globe, ArrowLeft } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router';

const projects = [
  {
    title: 'YouTube Clone',
    mainTechStack: [
      'Next.js 14',
      'React 18',
      'Tailwind CSS',
      'Radix UI',
      'Axios',
      'React Icons',
      'React Player',
      'Moment.js',
      'Lucide React',
      'React Lazy Load',
    ],
    description:
      'A YouTube-like platform where users can browse and watch videos, explore channels, manage playlists, and interact with content.',
    liveLink: 'https://youtube-clone-woad-six.vercel.app/',
    githubRepo: 'https://github.com/tapader13/youtube-clone',
    challenges: [
      'Implementing an efficient search functionality.',
      'Displaying detailed channel information dynamically.',
      'Managing and rendering playlists effectively.',
      'Optimizing video playback with React Player.',
      'Ensuring smooth lazy loading for better performance.',
    ],
    futurePlans: [
      'Make the app fully responsive across all devices.',
      'Implement authentication for personalized user experience.',
      'Introduce Shorts video section similar to YouTube.',
      'Enhance video recommendations based on user behavior.',
      'Improve SEO optimization for better discoverability.',
    ],
  },
  {
    title: 'E-commerce Website',
    mainTechStack: [
      'Shadcn UI',
      'Framer-motion',
      'Next.js',
      'MongoDB',
      'Tailwind CSS',
      'TypeScript',
      'Supabase',
      'Stripe',
    ],
    description:
      'A dynamic e-commerce platform that allows users to search for products, add them to a cart, and make secure payments using Stripe. It supports product filtering and sorting, user authentication for a personalized experience, and pagination for smooth navigation. The platform ensures a seamless and user-friendly interface for shopping.',
    image: '/Screenshot 2024-09-26 100258.png',
    githubRepo: 'https://github.com/tapader13/ecom_frontend',
    liveLink: 'https://ecom-frontend-flax.vercel.app/',
    challenges: [
      'Implementing Supabase for database management.',
      'Creating tabs for better categorization and filtering.',
      'Integrating Stripe for payment processing.',
      'Designing various product page layouts and collecting data for efficient sorting and filtering.',
    ],
    futurePlans: [
      'Enhance authentication security with additional measures.',
      'Integrate SSLCommerz for additional payment options.',
      'Allow authenticated users to add products and sell them on the platform.',
    ],
  },
  {
    title: 'Movie Website',
    mainTechStack: [
      'Next.js 14',
      'TypeScript',
      'React 18',
      'Tailwind CSS',
      'Radix UI',
      'Lucide React',
      'Moment.js',
      'React Multi Carousel',
      'React Slick',
      'Slick Carousel',
    ],
    description:
      'A movie browsing platform where users can explore popular, trending, and genre-based movies, search for specific titles, view details, Show review, watch trailers, and manage their favorite movies.',
    liveLink: 'https://movie-app-vert-pi.vercel.app/',
    githubRepo: 'https://github.com/tapader13/movie-app',
    challenges: [
      'Creating an engaging and dynamic hero section that updates on refresh.',
      'Fetching category-wise movie data efficiently.',
      'Implementing TMDB API and handling rate limits.',
      'Ensuring smooth UI with carousels and animations.',
      'Optimizing performance for large media content.',
    ],
    futurePlans: [
      'Improve responsiveness for better mobile experience.',
      'Enhance authentication with more security layers.',
      'Implement a trailer preview feature for movies.',
      'Add an option for users to download movies legally.',
      'Integrate AI-based movie recommendations.',
    ],
  },
  {
    title: 'HumbleTeam Clone',
    mainTechStack: [
      'React 18',
      'Vite',
      'Typescript',
      'Tailwind CSS',
      'MUI (Material UI)',
      'Framer Motion',
      'Swiper',
      'React Scroll',
      'React Fast Marquee',
    ],
    description:
      'A digital agency website clone featuring branding, UI/UX services, and case studies. Showcases high-quality animations, smooth scrolling, and an engaging portfolio of work.',
    liveLink: 'https://humbleteam-clone-nuwb.vercel.app/',
    githubRepo: 'https://github.com/tapader13/humbleteam_clone',
    challenges: [
      'Implementing smooth animations using Framer Motion.',
      'Creating a fully responsive design across all devices.',
      'Building a visually appealing hero section with a video background.',
      'Optimizing performance while using heavy animations.',
      'Managing complex layout structures for different sections.',
    ],
    futurePlans: [
      'Add backend functionality for dynamic content management.',
      'Enhance animations with more interactive elements.',
      'Integrate a content management system (CMS) for easy updates.',
      'Implement dark mode for better user experience.',
      'Improve SEO and accessibility for a wider reach.',
    ],
  },
  {
    title: 'Bazaar Landing Page',
    mainTechStack: ['React', 'TypeScript', 'Material UI', 'Vite'],
    description:
      'A modern marketplace landing page built with Material UI and Tailwind CSS, featuring a clean and interactive design.',
    liveLink: 'https://bazaar-mui-project.vercel.app/',
    githubRepo: 'https://github.com/tapader13/bazaar_mui_project',
    challenges: [
      'Ensuring full responsiveness across different screen sizes.',
      'Implementing tab navigation efficiently.',
      'Setting up TypeScript with Material UI and ensuring type safety.',
      'Managing component styling consistency with Tailwind CSS and MUI.',
    ],
    futurePlans: [
      'Make the page dynamic by integrating a backend.',
      'Add more interactive pages for better user engagement.',
      'Implement an advanced header with dropdown menus and animations.',
      'Optimize performance and SEO for better discoverability.',
      'Enhance accessibility and dark mode support.',
    ],
  },
  {
    title: 'Furniture Landing Page',
    mainTechStack: [
      'React',
      'TypeScript',
      'Framer Motion',
      'Tailwind CSS',
      'Material UI',
    ],
    description:
      'A stylish landing page for a furniture store with smooth animations, an elegant design, and a clean layout.',
    liveLink: 'https://gh-snowy.vercel.app/',
    githubRepo: 'https://github.com/tapader13/modern-websites',
    challenges: [
      'Implementing dynamic animations for interactive UI.',
      'Ensuring full responsiveness across different screen sizes.',
      'Creating an elegant dark mode toggle feature.',
      'Balancing performance while using animations and transitions.',
    ],
    futurePlans: [
      'Make the landing page fully dynamic with backend integration.',
      'Add more pages like product listings, about us, and contact.',
      'Enhance animations for a more premium feel.',
      'Improve SEO and accessibility for better visibility.',
      'Integrate a cart preview for better shopping experience.',
    ],
  },
  {
    title: 'Hero Travel',
    mainTechStack: ['HTML', 'CSS'],
    description:
      'A modern travel agency website to book flights, hotels, and vacation packages. Features a sleek and attractive design.',
    liveLink: 'https://tapader13.github.io/hero-travel/',
    githubRepo: 'https://tapader13.github.io/hero-travel/',
    challenges: [
      'Designing an engaging "Choose Your Destination" section.',
      'Ensuring full responsiveness for all devices.',
      'Creating an attractive "Deals & Discounts" section.',
      'Structuring the "Newsletter Signup" part for better UX.',
    ],
    futurePlans: [
      'Integrate a backend for dynamic content updates.',
      'Add more pages like "Destinations," "Guides," and "Testimonials".',
      'Implement a search and filter system for better navigation.',
      'Make it a fully dynamic website with real-time offers.',
      'Improve accessibility and SEO for better reach.',
    ],
  },
  {
    title: 'Space Booking Platform',
    mainTechStack: [
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
    description:
      'A comprehensive platform for booking and listing spaces, featuring authentication with NextAuth (including social logins and credential-based authentication). Users can list spaces for rent, search, filter, and sort spaces by categories, and book spaces with payment processing through Stripe. Supports webhooks for payment status updates, state management using Zustand, and data management with Prisma. Integrates image and video uploads via Cloudinary.',
    image: '/Screenshot-2024-10-23-132038.png',
    githubRepo: 'https://github.com/tapader13/space_booking',
    liveLink: 'https://space-booking-psi.vercel.app/',
    challenges: [
      'Implementing space addition with both image and video uploads.',
      'Developing efficient filtering and sorting functionalities.',
      'Integrating Stripe for payment processing and handling webhooks.',
      'Implementing a clear cart functionality for better UX.',
    ],
    futurePlans: [
      'Enhance authentication security by integrating Kinde or Clerk.',
      'Add additional payment methods like SSLCommerz and Real Pay.',
      'Optimize database queries for better performance with Prisma.',
      'Improve UI/UX for a seamless booking experience.',
      'Implement a subscription model for premium listings.',
    ],
  },
  {
    title: 'Instagram Clone',
    mainTechStack: [
      'React JS',
      'MongoDB',
      'Socket.io',
      'Tailwind CSS',
      'Shadcn UI',
    ],
    description:
      'A fully-featured Instagram clone built with React, Socket.io, MongoDB, and Tailwind CSS. Features include following, liking, commenting, posting, editing, deleting, messaging, and authentication.',
    image: '/Screenshot 2024-10-10 100314.png',
    githubRepo: 'https://github.com/tapader13/insta_clone',
    liveLink: 'https://insta-clone-1-xpqt.onrender.com/',
    challenges: [
      'Implementing follow/unfollow functionality.',
      'Adding image upload functionality with Cloudinary.',
      'Improving chat features with Socket.io integration.',
    ],
    futurePlans: [
      'Use Socket.io for like/unlike functionality.',
      'Make the app fully responsive for mobile and desktop views.',
      'Add video upload support.',
    ],
  },
  {
    title: 'Personal Blog Website',
    mainTechStack: [
      'Shadcn UI',
      'Framer-motion',
      'Next.js',
      'MongoDB',
      'Tailwind CSS',
      'React-Markdown',
    ],
    description:
      'A fully-featured blogging platform designed to provide an engaging and interactive user experience. It includes a RESTful API for managing blog posts. The website supports rich text formatting for blog content and allows users to easily navigate through various categories and tags.',
    image: '/Screenshot 2024-09-12 044142.png',
    githubRepo: 'https://github.com/tapader13/blog-frnt',
    liveLink: 'https://blog-frnt.vercel.app/',
    challenges: [
      'Ensuring full responsiveness across all devices.',
      'Implementing login functionality with like/unlike features.',
    ],
    futurePlans: [
      'Add comment section for user interaction.',
      'Implement sharing functionality for posts.',
      'Integrate AI to display the latest blogs based on user preferences.',
    ],
  },
];

export default function DetailsPage() {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const { name } = useParams();
  console.log(name);
  useEffect(() => {
    if (name) {
      const foundProject = projects.find(
        (p) => p.title.toLowerCase() === name.toLowerCase()
      );
      setProject(foundProject || null);
    }
    setLoading(false);
  }, [name]);

  if (loading) {
    return (
      <div className='min-h-screen bg-zinc-950 text-white flex items-center justify-center'>
        Loading...
      </div>
    );
  }

  if (!project) {
    return (
      <div className='min-h-screen bg-zinc-950 text-white flex items-center justify-center'>
        Project not found
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-zinc-950 text-white p-6'>
      <div className='max-w-4xl mx-auto space-y-16'>
        {/* Back to Home Button */}
        <div className='flex justify-start'>
          <Link
            to='/'
            className='inline-flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition-colors'
          >
            <ArrowLeft className='w-5 h-5' />
            Back to Home
          </Link>
        </div>

        {/* Header */}
        <div className='space-y-6 text-center'>
          <h1 className='text-5xl font-bold text-emerald-400'>
            {project.title}
          </h1>
          <p className='text-lg text-zinc-400 max-w-2xl mx-auto'>
            {project.description}
          </p>
          <div className='flex gap-4 justify-center'>
            <Link
              to={project.liveLink}
              target='_blank'
              className='inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-colors'
            >
              <Globe className='w-5 h-5' />
              Live Demo
            </Link>
            <Link
              to={project.githubRepo}
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
                Main Technologies
              </h3>
              <ul className='space-y-2 text-zinc-300'>
                {project.mainTechStack.map((tech, index) => (
                  <li key={index} className='flex items-center gap-2'>
                    <span className='w-2 h-2 bg-emerald-400 rounded-full'></span>
                    {tech}
                  </li>
                ))}
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
            <ul className='space-y-3 pl-4'>
              {project.challenges.map((challenge, index) => (
                <li key={index} className='flex items-start gap-3'>
                  <span className='text-emerald-400 text-lg'>•</span>
                  {challenge}
                </li>
              ))}
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
                {project.futurePlans.map((plan, index) => (
                  <li key={index} className='flex items-start gap-3'>
                    <span className='text-emerald-400 text-lg'>•</span>
                    {plan}
                  </li>
                ))}
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
