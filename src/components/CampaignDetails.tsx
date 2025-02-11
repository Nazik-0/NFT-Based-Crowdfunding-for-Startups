import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Target, Share2 } from 'lucide-react';

const CampaignDetails = () => {
  return (
    <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - NFT Preview */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-6 border border-gray-700"
        >
          <img
            src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800"
            alt="NFT Preview"
            className="w-full h-96 object-cover rounded-lg mb-6"
          />
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gray-800/50 p-4 rounded-lg text-center">
              <Clock className="h-6 w-6 mx-auto mb-2 text-purple-500" />
              <p className="text-sm text-gray-400">Time Left</p>
              <p className="font-semibold">4d 12h</p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg text-center">
              <Users className="h-6 w-6 mx-auto mb-2 text-purple-500" />
              <p className="text-sm text-gray-400">Backers</p>
              <p className="font-semibold">245</p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg text-center">
              <Target className="h-6 w-6 mx-auto mb-2 text-purple-500" />
              <p className="text-sm text-gray-400">Target</p>
              <p className="font-semibold">100 ETH</p>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Campaign Info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <div className="flex justify-between items-start">
            <h1 className="text-3xl font-bold">Project Name</h1>
            <button className="p-2 hover:bg-gray-800 rounded-lg">
              <Share2 className="h-5 w-5" />
            </button>
          </div>

          <div className="space-y-3">
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{ width: '75%' }}></div>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Raised: <span className="text-white">75 ETH</span></span>
              <span className="text-gray-400">Goal: <span className="text-white">100 ETH</span></span>
            </div>
          </div>

          <div className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-6 border border-gray-700">
            <h2 className="text-xl font-semibold mb-4">About the Project</h2>
            <p className="text-gray-400">
              A revolutionary blockchain project that aims to transform the way we interact with digital assets.
              Our platform leverages cutting-edge technology to create a seamless and secure experience for users.
            </p>
          </div>

          <div className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-6 border border-gray-700">
            <h2 className="text-xl font-semibold mb-4">Back this Project</h2>
            <div className="space-y-4">
              <input
                type="number"
                placeholder="Amount in ETH"
                className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Back Project
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CampaignDetails;