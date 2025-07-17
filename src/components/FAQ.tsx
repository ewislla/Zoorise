import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { FAQ_ITEMS } from '../data/constants';

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const ref = useScrollAnimation();

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-zooDark mb-6">
              Frequently Asked <span className="text-zooOrange">Questions</span>
            </h2>
            <p className="text-xl text-gray-700 font-poppins max-w-3xl mx-auto">
              Got questions about $ZOO? We've got answers! Check out our most frequently 
              asked questions below.
            </p>
          </motion.div>

          <div className="space-y-4">
            {FAQ_ITEMS.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="font-montserrat font-semibold text-zooDark pr-4">
                    {item.question}
                  </span>
                  {openItems.includes(index) ? (
                    <ChevronUp className="text-zooOrange flex-shrink-0" size={24} />
                  ) : (
                    <ChevronDown className="text-zooOrange flex-shrink-0" size={24} />
                  )}
                </button>
                
                <AnimatePresence>
                  {openItems.includes(index) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4">
                        <p className="text-gray-600 font-poppins leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 text-center bg-zooOrange-light rounded-lg p-8"
          >
            <h3 className="text-2xl font-montserrat font-bold text-zooDark mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 font-poppins mb-6">
              Our community is always ready to help! Join our Telegram for instant support.
            </p>
            <a
              href="https://t.me/zoorisecoin"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-zooOrange text-white px-8 py-3 rounded-full font-montserrat font-semibold hover:bg-zooOrange-dark transition-colors duration-300"
            >
              💬 Ask the Community
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;