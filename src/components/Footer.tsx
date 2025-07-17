import React from 'react';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '../data/constants';

const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-zooDark text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center mb-4">
              <span className="text-3xl font-montserrat font-bold text-zooOrange mr-3">
                $ZOO
              </span>
              <span className="text-xl">🦁</span>
            </div>
            <p className="text-gray-300 font-poppins mb-6 max-w-md">
              Join the wildest cryptocurrency community on Solana. Fair launch, transparent tokenomics, 
              and a roaring community driving the future of memecoins.
            </p>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((social, index) => (
                <motion.a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-2xl hover:text-zooOrange transition-colors duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-montserrat font-bold text-zooOrange mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'About', id: 'about' },
                { label: 'Tokenomics', id: 'tokenomics' },
                { label: 'Roadmap', id: 'roadmap' },
                { label: 'Community', id: 'community' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-zooOrange transition-colors duration-300 font-poppins"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-montserrat font-bold text-zooOrange mb-6">
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://pump.fun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-zooOrange transition-colors duration-300 font-poppins"
                >
                  Buy on Pumpfun
                </a>
              </li>
              <li>
                <a
                  href="https://solscan.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-zooOrange transition-colors duration-300 font-poppins"
                >
                  Solscan Explorer
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-zooOrange transition-colors duration-300 font-poppins"
                >
                  Whitepaper
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-zooOrange transition-colors duration-300 font-poppins"
                >
                  Audit Report
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Legal Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-700"
        >
          <div className="bg-gray-800 rounded-lg p-6 mb-8">
            <h4 className="text-lg font-montserrat font-bold text-zooOrange mb-4">
              ⚠️ Important Disclaimer
            </h4>
            <p className="text-sm text-gray-300 font-poppins leading-relaxed">
              ZooriseCoin ($ZOO) is a meme token created for entertainment purposes. 
              Cryptocurrency investments carry inherent risks and you should never invest more than you can afford to lose. 
              This website and its contents do not constitute financial advice. Always do your own research (DYOR) before making any investment decisions. 
              The $ZOO token has no intrinsic value and is not backed by any company or asset.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col sm:flex-row gap-4 mb-4 md:mb-0">
              <a
                href="#"
                className="text-gray-300 hover:text-zooOrange transition-colors duration-300 font-poppins text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-zooOrange transition-colors duration-300 font-poppins text-sm"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-zooOrange transition-colors duration-300 font-poppins text-sm"
              >
                Risk Disclosure
              </a>
            </div>
            <p className="text-gray-400 font-poppins text-sm">
              © 2024 ZooriseCoin. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;