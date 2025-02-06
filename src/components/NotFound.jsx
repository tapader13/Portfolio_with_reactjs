import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';

export default function NotFound() {
  return (
    <div className='min-h-screen bg-zinc-950 text-white flex flex-col items-center justify-center p-6'>
      <div className='max-w-md text-center space-y-8'>
        <h1 className='text-6xl font-bold text-emerald-400'>404</h1>
        <h2 className='text-3xl font-semibold'>Page Not Found</h2>
        <p className='text-zinc-400'>
          Oops! The page you&apos;re looking for doesn&apos;t exist or has been
          moved.
        </p>
        <Link
          to='/'
          className='inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-colors'
        >
          <ArrowLeft className='w-5 h-5' />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
