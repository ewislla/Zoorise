import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About: React.FC = () => {
  const ref = useScrollAnimation();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-zooDark mb-6">
              Meet the <span className="text-zooOrange">$ZOO Family</span>
            </h2>
            
            <div className="space-y-6 text-gray-700 font-poppins text-lg">
              <p>
                ZooRise is a gamified Web3 ecosystem where you earn while you care. Built on the Solana blockchain, ZooRise combines the fun of collecting and raising virtual animals with real token utility and community engagement.
              </p>
              
              <p>
                In ZooRise, every animal has a purpose. Feed them, keep them happy, and watch them shine as they generate $ZOO, our native token. The better you care, the more you earn
              </p>
              
    
            </div>

            {/* Key Features */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: '🤝', title: 'Community-driven', desc: 'Built by the people, for the people' },
                { icon: '⚡', title: 'Fair Launch', desc: 'No presale, everyone gets equal chance' },
                { icon: '🔒', title: 'Transparent', desc: 'LP locked, contract renounced' },
                { icon: '🚀', title: 'Pumpfun Launch', desc: 'Launching on trusted platform' },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-lg p-4 hover:bg-zooOrange-light transition-colors duration-300"
                >
                  <div className="text-2xl mb-2">{feature.icon}</div>
                  <h3 className="font-montserrat font-semibold text-zooDark mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-zooOrange-light to-zooGreen-light rounded-3xl p-8 relative overflow-hidden">
              <div className="grid grid-cols-3 gap-8 text-center">
                <div className="animate-float">
                  <div className="text-6xl mb-4">🦁</div>
                  <div className="font-montserrat font-semibold text-zooDark">Lion</div>
                  <div className="text-sm text-gray-600">King of the Jungle</div>
                </div>
                <div className="animate-float" style={{ animationDelay: '1s' }}>
                  <div className="text-6xl mb-4">🐘</div>
                  <div className="font-montserrat font-semibold text-zooDark">Elephant</div>
                  <div className="text-sm text-gray-600">Never Forgets</div>
                </div>
                <div className="animate-float" style={{ animationDelay: '2s' }}>
                  <div className="text-6xl mb-4">🐅</div>
                  <div className="font-montserrat font-semibold text-zooDark">Tiger</div>
                  <div className="text-sm text-gray-600">Fierce & Strong</div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <div className="bg-white rounded-full px-6 py-3 shadow-lg inline-block">
                  <span className="font-montserrat font-bold text-zooOrange text-lg">
                    Join the Wildlife Revolution! 🌟
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;