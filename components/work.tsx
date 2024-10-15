import { projectsData } from '@/lib/data';
import React from 'react';
import { Project } from '@/components/project';

const Work = () => {
  return (
    <section id='work' className='bg-gradient-to-r from-pink-300 to-yellow-300 py-12'> {/* Augmenté le padding vertical */}
      <div className='container mx-auto w-full py-12'> {/* Ajustement du padding */}
            <h1 className='text-center mb-10 text-[40px] font-bold uppercase leading-[3rem] text-gray-800'>
        <span className='text-gradient bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-blue-600'>
          Recent
        </span>
        <br />
              <span className='text-gradient bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-blue-600'>
          Projects
        </span>
      </h1>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'> {/* Espacement uniforme */}
          {projectsData.map((project, i) => (
            <div key={i} className='relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 bg-white'>
              <Project {...project} />
              <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 text-white'> {/* Dégradé pour le texte */}
                <h2 className='text-lg font-bold'>{project.title}</h2>
                <p className='text-sm'>{project.description}</p>
              </div>
              <div className='absolute inset-0 bg-gray-100 opacity-0 hover:opacity-50 transition duration-300' /> {/* Overlay pour effet au survol */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
