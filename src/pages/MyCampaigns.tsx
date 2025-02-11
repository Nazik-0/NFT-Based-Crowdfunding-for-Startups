import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Clock, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MyCampaigns = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // This will take the user back to the previous page
  };

  return (
    <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={handleBack}
        className="mb-6 flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
      >
        <ArrowLeft className="h-5 w-5" />
        <span>Back</span>
      </motion.button>

      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">My Campaigns</h1>
        <div className="flex gap-4">
          <select className="bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500">
            <option value="all">All Campaigns</option>
            <option value="active">Active</option>
            <option value="ended">Ended</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((item) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: item * 0.1 }}
            className="bg-gray-800/30 backdrop-blur-lg rounded-xl overflow-hidden border border-gray-700"
          >
            <div className="relative h-48">
              <img
                src={`https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800`}
                alt="Campaign"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-purple-500 text-white px-2 py-1 rounded-full text-sm">
                Active
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <Rocket className="h-5 w-5 text-purple-500" />
                <h3 className="text-xl font-semibold text-white">My Project #{item}</h3>
              </div>
              <div className="space-y-3 mb-4">
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Raised: <span className="text-white">75 ETH</span></span>
                  <span className="text-gray-400">Goal: <span className="text-white">100 ETH</span></span>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-400">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>4 days left</span>
                </div>
                <button className="text-purple-400 hover:text-purple-300">View Details →</button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MyCampaigns;