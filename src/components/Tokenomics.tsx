import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { TOKENOMICS_DATA } from '../data/constants';

const Tokenomics: React.FC = () => {
  const ref = useScrollAnimation();
  const [animatedPercentages, setAnimatedPercentages] = useState(TOKENOMICS_DATA.map(() => 0));

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedPercentages(TOKENOMICS_DATA.map(item => item.value));
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const PieChart = () => {
    let cumulativePercentage = 0;
    
    return (
      <div className="relative w-80 h-80 mx-auto">
        <svg width="320" height="320" viewBox="0 0 320 320" className="transform -rotate-90">
          {TOKENOMICS_DATA.map((item, index) => {
            const percentage = animatedPercentages[index];
            const radius = 120;
            const circumference = 2 * Math.PI * radius;
            const strokeDasharray = `${(percentage / 100) * circumference} ${circumference}`;
            const strokeDashoffset = -cumulativePercentage * circumference / 100;
            
            cumulativePercentage += percentage;
            
            return (
              <motion.circle
                key={index}
                cx="160"
                cy="160"
                r={radius}
                fill="none"
                stroke={item.color}
                strokeWidth="40"
                strokeDasharray={strokeDasharray}
                strokeDashoffset={strokeDashoffset}
                className="transition-all duration-1000 ease-out"
                initial={{ strokeDasharray: `0 ${circumference}` }}
                animate={{ strokeDasharray }}
                transition={{ duration: 1, delay: index * 0.2 }}
              />
            );
          })}
        </svg>
        
        {/* Center text */}
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <div className="text-4xl font-montserrat font-bold text-zooDark">$ZOO</div>
          <div className="text-lg font-poppins text-gray-600">Token Distribution</div>
        </div>
      </div>
    );
  };

  return (
    <section id="tokenomics" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-zooDark mb-6">
              Tokenomics - <span className="text-zooOrange">Fair & Transparent</span>
            </h2>
            <p className="text-xl text-gray-700 font-poppins max-w-3xl mx-auto">
              Our tokenomics are designed to be fair, transparent, and community-focused. 
              No hidden allocations, no team dumps - just pure community power!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Pie Chart */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <PieChart />
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Legend */}
              <div className="space-y-4">
                {TOKENOMICS_DATA.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between bg-white rounded-lg p-4 shadow-lg"
                  >
                    <div className="flex items-center space-x-3">
                      <div 
                        className="w-6 h-6 rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="font-montserrat font-semibold text-zooDark">
                        {item.label}
                      </span>
                    </div>
                    <span className="text-2xl font-montserrat font-bold text-zooOrange">
                      {item.value}%
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Token Details */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-2xl font-montserrat font-bold text-zooDark mb-4">
                  📊 Token Details
                </h3>
                <div className="space-y-3 text-left">
                  <div className="flex justify-between">
                    <span className="font-poppins text-gray-600">Total Supply:</span>
                    <span className="font-montserrat font-semibold">1,000,000,000 $ZOO</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-poppins text-gray-600">Contract Address:</span>
                    <span className="font-montserrat font-semibold text-zooOrange">TBA</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-poppins text-gray-600">Decimals:</span>
                    <span className="font-montserrat font-semibold">9</span>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: '🚫', title: 'No Taxes', desc: 'Zero transaction fees' },
                  { icon: '🔒', title: 'LP Locked', desc: 'Liquidity permanently locked' },
                  { icon: '✅', title: 'Contract Renounced', desc: 'Ownership renounced' },
                  { icon: '🎯', title: 'Fair Launch', desc: 'No presale or team allocation' },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-zooOrange-light rounded-lg p-4 text-center hover:bg-zooOrange hover:text-white transition-colors duration-300"
                  >
                    <div className="text-3xl mb-2">{feature.icon}</div>
                    <h4 className="font-montserrat font-semibold mb-1">{feature.title}</h4>
                    <p className="text-sm opacity-80">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;