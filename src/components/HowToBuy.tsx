import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { HOW_TO_BUY_STEPS } from '../data/constants';

const HowToBuy: React.FC = () => {
  const ref = useScrollAnimation();

  return (
    <section className="py-20 bg-gradient-to-br from-zooOrange-light to-zooGreen-light">
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
              How to <span className="text-zooOrange">Join the Pack</span>
            </h2>
            <p className="text-xl text-gray-700 font-poppins max-w-3xl mx-auto">
              Ready to go wild? Follow these simple steps to get your $ZOO tokens and 
              become part of our growing community!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {HOW_TO_BUY_STEPS.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Arrow for desktop */}
                {index < HOW_TO_BUY_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-zooOrange text-2xl z-10">
                    →
                  </div>
                )}
                
                {/* Step card */}
                <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 h-full">
                  <div className="mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-zooOrange text-white rounded-full font-montserrat font-bold text-lg mb-4">
                      {step.step}
                    </div>
                    <div className="text-4xl mb-4">{step.icon}</div>
                  </div>
                  
                  <h3 className="text-xl font-montserrat font-bold text-zooDark mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 font-poppins text-sm">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Important disclaimer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 bg-white rounded-lg p-6 shadow-lg border-l-4 border-zooOrange"
          >
            <div className="flex items-start space-x-3">
              <div className="text-2xl">⚠️</div>
              <div>
                <h3 className="font-montserrat font-bold text-zooDark mb-2">
                  Important Disclaimer
                </h3>
                <p className="text-gray-600 font-poppins text-sm">
                  Cryptocurrency investments carry risks. Always do your own research (DYOR) before investing. 
                  Never invest more than you can afford to lose. $ZOO is a memecoin and should be treated as such. 
                  This is not financial advice.
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a
              href="https://pump.fun"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-zooOrange text-white px-8 py-4 rounded-full font-montserrat font-semibold text-lg hover:bg-zooOrange-dark transition-all duration-300 hover:scale-105 shadow-lg"
            >
              🚀 Buy $ZOO on Pumpfun
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowToBuy;