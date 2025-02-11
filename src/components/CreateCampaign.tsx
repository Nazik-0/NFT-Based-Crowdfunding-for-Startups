import React from 'react';
import { motion } from 'framer-motion';
import { Upload, Calendar, Target, Link } from 'lucide-react';

const CreateCampaign = () => {
  return (
    <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-8 border border-gray-700"
      >
        <h1 className="text-3xl font-bold mb-8">Create Campaign</h1>
        
        <form className="space-y-6">
          {/* Basic Info */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Basic Information</h2>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Project Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter project name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Description</label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Describe your project"
              />
            </div>
          </div>

          {/* Funding Details */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Funding Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  <Target className="inline h-4 w-4 mr-1" />
                  Funding Goal (ETH)
                </label>
                <input
                  type="number"
                  className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  <Calendar className="inline h-4 w-4 mr-1" />
                  Campaign Duration (Days)
                </label>
                <input
                  type="number"
                  className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="30"
                />
              </div>
            </div>
          </div>

          {/* NFT Reward */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">NFT Reward</h2>
            <div className="border-2 border-dashed border-gray-700 rounded-lg p-8 text-center">
              <Upload className="h-12 w-12 mx-auto mb-4 text-gray-400" />
              <p className="text-gray-400 mb-2">Upload NFT Image</p>
              <p className="text-sm text-gray-500">PNG, JPG, or GIF up to 10MB</p>
              <input type="file" className="hidden" />
              <button className="mt-4 px-4 py-2 bg-gray-800 rounded-lg text-sm hover:bg-gray-700 transition-colors">
                Choose File
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Social Links</h2>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                <Link className="inline h-4 w-4 mr-1" />
                Website
              </label>
              <input
                type="url"
                className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="https://"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Create Campaign
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default CreateCampaign;