import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { SOCIAL_LINKS } from '../data/constants';

const Community: React.FC = () => {
  const ref = useScrollAnimation();

  const testimonials = [
    {
      name: "CryptoLion",
      message: "Best memecoin community I've ever been part of! The energy is unmatched! 🦁",
      avatar: "🦁"
    },
    {
      name: "ZooKeeper",
      message: "Fair launch, transparent team, and wild gains! What more could you want? 🚀",
      avatar: "🐘"
    },
    {
      name: "WildTrader",
      message: "From day one, this community has been nothing but supportive and fun! 🐅",
      avatar: "🐅"
    }
  ];

  return (
    <section id="community" className="py-20 bg-white">
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
              Join the <span className="text-zooOrange">$ZOO Pack</span>
            </h2>
            <p className="text-xl text-gray-700 font-poppins max-w-3xl mx-auto">
              Connect with thousands of passionate crypto enthusiasts who share the same wild vision. 
              Our community is the heart of everything we do!
            </p>
          </motion.div>

          {/* Social Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {SOCIAL_LINKS.map((social, index) => (
              <motion.a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gradient-to-br from-zooOrange-light to-zooGreen-light rounded-lg p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="text-6xl mb-4 group-hover:animate-bounce">{social.icon}</div>
                  <h3 className="text-2xl font-montserrat font-bold text-zooDark mb-2">
                    {social.platform}
                  </h3>
                  {social.count && (
                    <div className="text-3xl font-montserrat font-bold text-zooOrange mb-4">
                      {social.count}
                    </div>
                  )}
                  <p className="text-gray-600 font-poppins mb-4">
                    {social.platform === 'Telegram' && 'Join our main community chat'}
                    {social.platform === 'Twitter' && 'Follow for updates & news'}
                    {social.platform === 'Discord' && 'Connect with fellow holders'}
                  </p>
                  <div className="inline-flex items-center text-zooOrange font-montserrat font-semibold">
                    Join Now
                    <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Community Testimonials */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-3xl font-montserrat font-bold text-zooDark text-center mb-12">
              What Our Pack Says
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-3">{testimonial.avatar}</div>
                    <div className="font-montserrat font-semibold text-zooDark">
                      {testimonial.name}
                    </div>
                  </div>
                  <p className="text-gray-600 font-poppins italic">
                    "{testimonial.message}"
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-r from-zooOrange to-zooGreen rounded-lg p-12 text-white"
          >
            <h3 className="text-3xl font-montserrat font-bold mb-4">
              Ready to Be Part of Something Wild?
            </h3>
            <p className="text-xl font-poppins mb-8 opacity-90">
              Join thousands of crypto enthusiasts who are already part of the $ZOO revolution!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://t.me/zoorisecoin"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-zooOrange px-8 py-4 rounded-full font-montserrat font-semibold text-lg hover:bg-gray-100 transition-colors duration-300"
              >
                🚀 Join Telegram
              </a>
              <a
                href="https://twitter.com/zoorisecoin"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-montserrat font-semibold text-lg hover:bg-white hover:text-zooOrange transition-colors duration-300"
              >
                🐦 Follow Twitter
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Community;