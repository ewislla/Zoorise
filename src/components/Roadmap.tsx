import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ROADMAP_PHASES } from '../data/constants';

const Roadmap: React.FC = () => {
  const ref = useScrollAnimation();

  return (
    <section id="roadmap" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-zooDark mb-6">
              Our <span className="text-zooOrange">Wild Journey</span>
            </h2>
            <p className="text-xl text-gray-700 font-poppins max-w-3xl mx-auto">
              Follow our path from awakening to kingdom. Each phase brings new opportunities 
              and exciting developments for our growing community.
            </p>
          </motion.div>

          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 transform -translate-y-1/2"></div>
              <div className="grid grid-cols-4 gap-8">
                {ROADMAP_PHASES.map((phase, index) => (
                  <motion.div
                    key={phase.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    {/* Timeline dot */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-zooOrange rounded-full border-4 border-white z-10"></div>
                    
                    {/* Phase card */}
                    <div className={`bg-white rounded-lg shadow-lg p-6 border-2 border-gray-100 hover:border-zooOrange transition-colors duration-300 ${
                      index % 2 === 0 ? 'mb-20' : 'mt-20'
                    }`}>
                      <div className="text-center">
                        <div className="text-4xl mb-4">{phase.icon}</div>
                        <h3 className="text-xl font-montserrat font-bold text-zooDark mb-2">
                          {phase.title}
                        </h3>
                        <h4 className="text-lg font-montserrat font-semibold text-zooOrange mb-4">
                          {phase.subtitle}
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-600 font-poppins">
                          {phase.description.map((item, idx) => (
                            <li key={idx} className="flex items-center">
                              <span className="text-zooGreen mr-2">✓</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>
              <div className="space-y-8">
                {ROADMAP_PHASES.map((phase, index) => (
                  <motion.div
                    key={phase.id}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="relative flex items-start"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-8 transform -translate-x-1/2 w-4 h-4 bg-zooOrange rounded-full border-2 border-white z-10"></div>
                    
                    {/* Phase card */}
                    <div className="ml-16 bg-white rounded-lg shadow-lg p-6 border-2 border-gray-100 hover:border-zooOrange transition-colors duration-300 w-full">
                      <div className="text-center">
                        <div className="text-4xl mb-4">{phase.icon}</div>
                        <h3 className="text-xl font-montserrat font-bold text-zooDark mb-2">
                          {phase.title}
                        </h3>
                        <h4 className="text-lg font-montserrat font-semibold text-zooOrange mb-4">
                          {phase.subtitle}
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-600 font-poppins text-left">
                          {phase.description.map((item, idx) => (
                            <li key={idx} className="flex items-center">
                              <span className="text-zooGreen mr-2">✓</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;