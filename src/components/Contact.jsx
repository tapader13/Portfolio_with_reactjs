import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import toast from 'react-hot-toast';
const Contact = () => {
  const Ref = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    if (Ref.current) {
      console.log(Ref.current.from_name);
      emailjs
        .sendForm(
          'service_qhettkc',
          'template_vstx5lm',
          Ref.current,
          'fynohaGtTgGTgJvdF'
        )
        .then(
          (result) => {
            console.log('Email sent:', result.text);
            toast.success("email sent")
          },
          (error) => {
            console.log('Email send error:', error);
            toast.error("email not sent")
          }
        );
    }
  };

  return (
    <div id='contact' className='h-screen    mt-20'>
      <div className="flex items-center h-full w-full">
      <div className='max-w-7xl w-full  mx-auto  px-4 sm:px-6 lg:px-8  '>
        <h2 className='text-4xl font-bold  mb-6'>
              Contact <span className='text-accent'>Me</span>
            </h2>
        <div className='flex w-full md:flex-row-reverse md:justify-between items-center flex-col  gap-10'>
          
          <div className='bg-contact-form w-full md:w-1/2 '>
            <h1 className='relative z-10 text-white  font-medium mb-3 text-3xl'>
              Send Message
            </h1>
            <form ref={Ref} onSubmit={sendEmail}>
              <div className='relative mb-5 z-10'>
                <input
                  className='w-full focus:outline-none border-b-[1px] border-accent  text-white bg-transparent px-3 py-1'
                  type='text'
                  placeholder='Full Name'
                  id='name'
                  name='from_name'
                  required
                />
              </div>
              <div className='relative mb-5 z-10'>
                <input
                  className='w-full focus:outline-none border-b-[1px] border-accent text-white bg-transparent px-3 py-1'
                  type='email'
                  placeholder='Email'
                  id='email'
                  name='email'
                  required
                />
              </div>
              <div className='relative mb-5 z-10'>
                <textarea
                  className='w-full focus:outline-none border-b-[1px] border-accent text-white bg-transparent px-3 py-1'
                  placeholder='Type your Message.....'
                  id='message'
                  name='message'
                  required
                />
              </div>
              <div>
                <button className='relative cursor-pointer text-black px-2 py-1 rounded-full bg-accent z-10'>Send</button>
              </div>
            </form>
          </div>

          <div className='md:w-1/2 w-full'>
            <div className='flex gap-3 items-start'>
              <div className='bg-contact-icon p-2'>
                <FiMapPin className='relative z-10 text-3xl text-black py-2' />
              </div>
              <div>
                <h1 className='text-accent text-xl font-medium'>Address</h1>
                <p className='text-white'>
                  Zakigonj, Sylhet, Dhaka, Bangladesh
                </p>
              </div>
            </div>
            <div className='flex gap-3 items-start mt-10'>
              <div className='bg-contact-icon p-2'>
                <FiPhone className='relative z-10 text-3xl text-black py-2' />
              </div>
              <div>
                <h1 className='text-accent text-xl font-medium'>Phone</h1>
                <p className='text-white '>+8801786224382</p>
              </div>
            </div>
            <div className='flex gap-3 mt-10 items-start'>
              <div className='bg-contact-icon p-2'>
                <FiMail className='relative z-10 text-3xl text-black py-2' />
              </div>
              <div>
                <h1 className='text-accent text-xl font-medium'>Email</h1>
                <p className='text-white'>
                  minhajtapader0@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Contact;
