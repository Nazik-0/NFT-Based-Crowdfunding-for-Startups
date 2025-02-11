import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Users, DollarSign } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20" />
        <div className="absolute inset-0" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(3px)',
          opacity: '0.2'
        }} />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
            Fuel Innovation with NFT Crowdfunding
          </h1>
          <p className="text-gray-300 text-xl mb-8 max-w-2xl mx-auto">
            Join the future of fundraising where creativity meets blockchain technology.
            Launch your campaign and turn supporters into NFT holders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={() => navigate('/create')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Start a Campaign
            </motion.button>
            <motion.button
              onClick={() => navigate('/explore')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-800 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-700 transition-colors"
            >
              Explore Projects
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900/50 backdrop-blur-lg p-8 rounded-xl border border-gray-800"
            >
              <Rocket className="h-12 w-12 text-purple-500 mb-4" />
              <h3 className="text-3xl font-bold mb-2">1,234+</h3>
              <p className="text-gray-400">Active Campaigns</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900/50 backdrop-blur-lg p-8 rounded-xl border border-gray-800"
            >
              <Users className="h-12 w-12 text-pink-500 mb-4" />
              <h3 className="text-3xl font-bold mb-2">50K+</h3>
              <p className="text-gray-400">Community Members</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900/50 backdrop-blur-lg p-8 rounded-xl border border-gray-800"
            >
              <DollarSign className="h-12 w-12 text-purple-500 mb-4" />
              <h3 className="text-3xl font-bold mb-2">₿ 2,500</h3>
              <p className="text-gray-400">Total Raised</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;