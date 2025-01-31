import { FaTwitter, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
const icons = [
  {
    icon: <FaFacebook />,
    path: 'https://www.facebook.com/profile.php?id=100075376118027',
  },
  { icon: <FaTwitter />, path: 'https://x.com/MinhajTapader' },
  {
    icon: <FaLinkedin />,
    path: 'https://www.linkedin.com/in/minhaj-uddin-5b1a20338/',
  },
  { icon: <FaGithub />, path: 'https://github.com/tapader13' },
];
const Icons = () => {
  return (
    <div className='flex gap-6'>
      {icons.map((icon, i) => (
        <a
          href={icon.path}
          target='_blank'
          key={i}
          className='h-9 w-9 border border-accent rounded-full flex justify-center items-center text-accent hover:transition-all duration-500 hover:bg-accent hover:text-primary'
        >
          {icon.icon}
        </a>
      ))}
    </div>
  );
};

export default Icons;
