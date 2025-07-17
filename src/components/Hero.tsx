import React from 'react';
import { motion } from 'framer-motion';
import { useCountdown } from '../hooks/useCountdown';
import { LAUNCH_DATE } from '../data/constants';

const Hero: React.FC = () => {
  const timeLeft = useCountdown(LAUNCH_DATE);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-zooOrange-light via-white to-zooGreen-light relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-12 left-10 text-6xl opacity-20 animate-float">🦁</div>
        <div className="absolute top-40 right-20 text-4xl opacity-20 animate-float" style={{ animationDelay: '1s' }}>🐘</div>
        <div className="absolute bottom-40 left-20 text-5xl opacity-20 animate-float" style={{ animationDelay: '2s' }}>🐅</div>
        <div className="absolute bottom-20 right-10 text-3xl opacity-20 animate-float" style={{ animationDelay: '0.5s' }}>🦓</div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center min-h-screen">
        <div className="text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="text-8xl mb-6 animate-bounce-slow mt-32">🦁</div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-montserrat font-bold text-zooDark mb-4">
              Welcome to the
              <span className="text-zooOrange block">Wild Side of Crypto</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 font-poppins max-w-3xl mx-auto">
              Join the ZooriseCoin revolution on Solana - where community meets wild gains!
            </p>
          </motion.div>

          {/* Countdown Timer */}
    

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zooOrange text-white px-8 py-4 rounded-full font-montserrat font-semibold text-lg hover:bg-zooOrange-dark transition-all duration-300 hover:scale-105 shadow-lg"
            >
                🚀Buy $ZOO Now 
            </a>
            <a 
              href="https://t.me/Zoorise"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-zooOrange text-zooOrange px-8 py-4 rounded-full font-montserrat font-semibold text-lg hover:bg-zooOrange hover:text-white transition-all duration-300 hover:scale-105"
            >
              🦁Join the Zoo
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <div className="bg-white rounded-full px-6 py-3 shadow-md">
              <span className="text-zooGreen font-montserrat font-semibold">
                🚀 Launched on Pumpfun
              </span>
            </div>
            <div className="bg-white rounded-full px-6 py-3 shadow-md">
              <span className="text-zooGreen font-montserrat font-semibold">
                ⚡ Solana Powered
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;