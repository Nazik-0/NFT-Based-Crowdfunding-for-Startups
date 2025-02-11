import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, Calendar, Target, Link, AlertCircle, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CreateCampaign = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    projectName: '',
    description: '',
    fundingGoal: '',
    duration: '',
    website: '',
    category: 'Green Tech',
    nftImage: null
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = [
    "Green Tech",
    "Art",
    "Education",
    "Gaming",
    "Healthcare",
    "Supply Chain"
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) { // 10MB limit
        setErrors(prev => ({
          ...prev,
          nftImage: 'File size must be less than 10MB'
        }));
        return;
      }
      if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
        setErrors(prev => ({
          ...prev,
          nftImage: 'Only JPG, PNG, and GIF files are allowed'
        }));
        return;
      }
      setFormData(prev => ({
        ...prev,
        nftImage: file
      }));
      setErrors(prev => ({
        ...prev,
        nftImage: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.projectName.trim()) {
      newErrors.projectName = 'Project name is required';
    }
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }
    if (!formData.fundingGoal || formData.fundingGoal <= 0) {
      newErrors.fundingGoal = 'Valid funding goal is required';
    }
    if (!formData.duration || formData.duration <= 0) {
      newErrors.duration = 'Valid duration is required';
    }
    if (!formData.nftImage) {
      newErrors.nftImage = 'NFT image is required';
    }
    if (formData.website && !formData.website.startsWith('https://')) {
      newErrors.website = 'Website must start with https://';
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      // Here you would typically:
      // 1. Upload the NFT image to IPFS
      // 2. Create the campaign on the blockchain
      // 3. Save campaign details to your backend
      
      // Simulating async operation
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Redirect to the campaign page
      navigate('/campaign/1');
    } catch (error) {
      setErrors(prev => ({
        ...prev,
        submit: 'Failed to create campaign. Please try again.'
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBack = () => {
    navigate(-1); // This will take the user back to the previous page
  };

  return (
    <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-8 border border-gray-700"
      >
        <h1 className="text-3xl font-bold mb-8">Create Campaign</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Info */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Basic Information</h2>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Project Name</label>
              <input
                type="text"
                name="projectName"
                value={formData.projectName}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 bg-gray-800/50 border ${errors.projectName ? 'border-red-500' : 'border-gray-700'} rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500`}
                placeholder="Enter project name"
              />
              {errors.projectName && (
                <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                  <AlertCircle className="h-4 w-4" />
                  {errors.projectName}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={4}
                className={`w-full px-4 py-2 bg-gray-800/50 border ${errors.description ? 'border-red-500' : 'border-gray-700'} rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500`}
                placeholder="Describe your project"
              />
              {errors.description && (
                <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                  <AlertCircle className="h-4 w-4" />
                  {errors.description}
                </p>
              )}
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
                  name="fundingGoal"
                  value={formData.fundingGoal}
                  onChange={handleInputChange}
                  step="0.01"
                  className={`w-full px-4 py-2 bg-gray-800/50 border ${errors.fundingGoal ? 'border-red-500' : 'border-gray-700'} rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500`}
                  placeholder="100"
                />
                {errors.fundingGoal && (
                  <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                    <AlertCircle className="h-4 w-4" />
                    {errors.fundingGoal}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  <Calendar className="inline h-4 w-4 mr-1" />
                  Campaign Duration (Days)
                </label>
                <input
                  type="number"
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 bg-gray-800/50 border ${errors.duration ? 'border-red-500' : 'border-gray-700'} rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500`}
                  placeholder="30"
                />
                {errors.duration && (
                  <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                    <AlertCircle className="h-4 w-4" />
                    {errors.duration}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* NFT Reward */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">NFT Reward</h2>
            <div 
              className={`border-2 border-dashed ${errors.nftImage ? 'border-red-500' : 'border-gray-700'} rounded-lg p-8 text-center`}
              onClick={() => document.getElementById('nft-image').click()}
            >
              <Upload className="h-12 w-12 mx-auto mb-4 text-gray-400" />
              <p className="text-gray-400 mb-2">Upload NFT Image</p>
              <p className="text-sm text-gray-500">PNG, JPG, or GIF up to 10MB</p>
              <input
                id="nft-image"
                type="file"
                className="hidden"
                accept="image/png,image/jpeg,image/gif"
                onChange={handleFileChange}
              />
              {formData.nftImage ? (
                <p className="mt-2 text-green-500">File selected: {formData.nftImage.name}</p>
              ) : (
                <button type="button" className="mt-4 px-4 py-2 bg-gray-800 rounded-lg text-sm hover:bg-gray-700 transition-colors">
                  Choose File
                </button>
              )}
              {errors.nftImage && (
                <p className="mt-2 text-sm text-red-500 flex items-center justify-center gap-1">
                  <AlertCircle className="h-4 w-4" />
                  {errors.nftImage}
                </p>
              )}
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
                name="website"
                value={formData.website}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 bg-gray-800/50 border ${errors.website ? 'border-red-500' : 'border-gray-700'} rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500`}
                placeholder="https://"
              />
              {errors.website && (
                <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                  <AlertCircle className="h-4 w-4" />
                  {errors.website}
                </p>
              )}
            </div>
          </div>

          {errors.submit && (
            <div className="bg-red-500/10 border border-red-500 rounded-lg p-4 text-red-500 flex items-center gap-2">
              <AlertCircle className="h-5 w-5" />
              {errors.submit}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'} transition-opacity`}
          >
            {isSubmitting ? 'Creating Campaign...' : 'Create Campaign'}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default CreateCampaign;