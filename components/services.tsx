'use client';
import { motion } from 'framer-motion';
import FadeIn from '../lib/variants';
import AnimatedCounter from '../lib/animatedCounter';

const Services = () => {
  return (
    <section id='services' className='z-30 bg-gradient-to-r from-pink-300 to-yellow-200'>
      <div className='container mx-auto w-full py-[100px] lg:py-[200px]'>
        <motion.div
          variants={FadeIn('down', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true, amount: 0.8 }}
          className='flex flex-col items-center text-center mb-12'
        >
          <h1 className='text-[40px] font-bold leading-[3rem] text-gray-800'>
            What We Do to Help
          </h1>
          <p className='text-gray-600 mb-8 max-w-xl'>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
          {/* Service Card 1 */}
          <motion.div
            variants={FadeIn('up', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.8 }}
            className='flex items-center space-x-6 bg-white rounded-lg p-6 shadow-lg transition-transform duration-300 hover:scale-105'
          >
            <p className='text-6xl font-bold text-blue'>01</p>
            <div>
              <h2 className='mb-2 text-2xl font-bold text-gray-800'>
                Front-end Development
              </h2>
              <p className='text-gray-600'>
                Convert your Figma/XD design to a fully responsive web app with
                React/Next.js, Angular, or HTML with Tailwind CSS.
              </p>
            </div>
          </motion.div>

          {/* Service Card 2 */}
          <motion.div
            variants={FadeIn('up', 0.4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.8 }}
            className='flex items-center space-x-6 bg-white rounded-lg p-6 shadow-lg transition-transform duration-300 hover:scale-105'
          >
            <p className='text-6xl font-bold text-blue'>02</p>
            <div>
              <h2 className='mb-2 text-2xl font-bold text-gray-800'>
                Back-end Development
              </h2>
              <p className='text-gray-600'>
                Build your full web app with cutting-edge web development
                technologies.
              </p>
            </div>
          </motion.div>

          {/* Additional Service Card 3 */}
          <motion.div
            variants={FadeIn('up', 0.6)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.8 }}
            className='flex items-center space-x-6 bg-white rounded-lg p-6 shadow-lg transition-transform duration-300 hover:scale-105'
          >
            <p className='text-6xl font-bold text-blue'>03</p>
            <div>
              <h2 className='mb-2 text-2xl font-bold text-gray-800'>
                UI/UX Design
              </h2>
              <p className='text-gray-600'>
                Create stunning and user-friendly interfaces to enhance user experience.
              </p>
            </div>
          </motion.div>

          {/* Additional Service Card 4 */}
          <motion.div
            variants={FadeIn('up', 0.8)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.8 }}
            className='flex items-center space-x-6 bg-white rounded-lg p-6 shadow-lg transition-transform duration-300 hover:scale-105'
          >
            <p className='text-6xl font-bold text-blue'>04</p>
            <div>
              <h2 className='mb-2 text-2xl font-bold text-gray-800'>
                Digital Marketing
              </h2>
              <p className='text-gray-600'>
                Leverage social media and online strategies to grow your brand.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <div className='flex justify-center space-x-8 mt-12'>
          <div className='flex flex-col items-center'>
            <p className='text-lg font-semibold uppercase text-gray-700'>Projects</p>
            <p className='text-[36px] font-bold text-blue'>
              + <AnimatedCounter from={0} to={45} />
            </p>
          </div>
          <div className='flex flex-col items-center'>
            <p className='text-lg font-semibold uppercase text-gray-700'>Satisfied Clients</p>
            <p className='text-[36px] font-bold text-blue'>
              <AnimatedCounter from={0} to={25} />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
