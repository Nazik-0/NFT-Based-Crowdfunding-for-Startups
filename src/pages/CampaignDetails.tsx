import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Target, Share2, Globe, Twitter, Github, ArrowLeft } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';

// Mock data store - In a real app, this would come from your backend
const projectDetails = {
  1: {
    name: "EcoChain: Sustainable Blockchain",
    category: "Green Tech",
    description: `EcoChain is revolutionizing the way we track and trade carbon credits using blockchain technology. Our platform enables:

    • Real-time carbon footprint monitoring
    • Transparent carbon credit trading
    • Automated offset verification
    • Green energy certification

    The project aims to accelerate the world's transition to sustainable energy by making carbon trading more accessible and transparent.`,
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=800",
    raised: 75,
    goal: 100,
    timeLeft: "4d 12h",
    backers: 245,
    team: [
      { name: "Sarah Chen", role: "Founder & CEO", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200" },
      { name: "David Kumar", role: "CTO", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200" }
    ],
    roadmap: [
      { phase: "Phase 1", title: "Platform Development", status: "completed" },
      { phase: "Phase 2", title: "Beta Testing", status: "current" },
      { phase: "Phase 3", title: "Public Launch", status: "upcoming" },
      { phase: "Phase 4", title: "Exchange Integration", status: "upcoming" }
    ],
    links: {
      website: "https://example.com",
      twitter: "https://twitter.com",
      github: "https://github.com"
    }
  },
  // Add similar detailed data for other projects...
};

const CampaignDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [pledgeAmount, setPledgeAmount] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (id && projectDetails[id]) {
      setProject(projectDetails[id]);
    }
  }, [id]);

  const handleBack = () => {
    navigate(-1); // This will take the user back to the previous page
  };

  if (!project) {
    return (
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  const handlePledge = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      alert('Pledge successful!');
      setPledgeAmount('');
    } catch (error) {
      alert('Failed to pledge. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - NFT Preview */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <div className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-6 border border-gray-700">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-96 object-cover rounded-lg mb-6"
            />
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gray-800/50 p-4 rounded-lg text-center">
                <Clock className="h-6 w-6 mx-auto mb-2 text-purple-500" />
                <p className="text-sm text-gray-400">Time Left</p>
                <p className="font-semibold">{project.timeLeft}</p>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg text-center">
                <Users className="h-6 w-6 mx-auto mb-2 text-purple-500" />
                <p className="text-sm text-gray-400">Backers</p>
                <p className="font-semibold">{project.backers}</p>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg text-center">
                <Target className="h-6 w-6 mx-auto mb-2 text-purple-500" />
                <p className="text-sm text-gray-400">Target</p>
                <p className="font-semibold">{project.goal} ETH</p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-6 border border-gray-700">
            <h2 className="text-xl font-semibold mb-4">Team</h2>
            <div className="grid grid-cols-2 gap-4">
              {project.team.map((member, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg">
                  <img src={member.image} alt={member.name} className="w-12 h-12 rounded-full" />
                  <div>
                    <p className="font-semibold">{member.name}</p>
                    <p className="text-sm text-gray-400">{member.role}</p>
                  </div>
                </div>
              ))}
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
            <div>
              <h1 className="text-3xl font-bold">{project.name}</h1>
              <p className="text-purple-400 mt-1">{project.category}</p>
            </div>
            <div className="flex space-x-2">
              {project.links.website && (
                <a href={project.links.website} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-gray-800 rounded-lg">
                  <Globe className="h-5 w-5" />
                </a>
              )}
              {project.links.twitter && (
                <a href={project.links.twitter} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-gray-800 rounded-lg">
                  <Twitter className="h-5 w-5" />
                </a>
              )}
              {project.links.github && (
                <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-gray-800 rounded-lg">
                  <Github className="h-5 w-5" />
                </a>
              )}
              <button className="p-2 hover:bg-gray-800 rounded-lg">
                <Share2 className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="space-y-3">
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" 
                style={{ width: `${(project.raised / project.goal) * 100}%` }}
              />
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Raised: <span className="text-white">{project.raised} ETH</span></span>
              <span className="text-gray-400">Goal: <span className="text-white">{project.goal} ETH</span></span>
            </div>
          </div>

          <div className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-6 border border-gray-700">
            <h2 className="text-xl font-semibold mb-4">About the Project</h2>
            <p className="text-gray-400 whitespace-pre-line">{project.description}</p>
          </div>

          <div className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-6 border border-gray-700">
            <h2 className="text-xl font-semibold mb-4">Roadmap</h2>
            <div className="space-y-4">
              {project.roadmap.map((phase, index) => (
                <div key={index} className={`flex items-center space-x-4 p-4 rounded-lg ${
                  phase.status === 'completed' ? 'bg-green-500/10 border border-green-500/30' :
                  phase.status === 'current' ? 'bg-purple-500/10 border border-purple-500/30' :
                  'bg-gray-800/50 border border-gray-700'
                }`}>
                  <div className={`w-3 h-3 rounded-full ${
                    phase.status === 'completed' ? 'bg-green-500' :
                    phase.status === 'current' ? 'bg-purple-500' :
                    'bg-gray-500'
                  }`} />
                  <div>
                    <p className="font-semibold">{phase.phase}</p>
                    <p className="text-sm text-gray-400">{phase.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-6 border border-gray-700">
            <h2 className="text-xl font-semibold mb-4">Back this Project</h2>
            <form onSubmit={handlePledge} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Amount (ETH)</label>
                <input
                  type="number"
                  value={pledgeAmount}
                  onChange={(e) => setPledgeAmount(e.target.value)}
                  step="0.01"
                  min="0"
                  required
                  className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter amount in ETH"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'
                } transition-opacity`}
              >
                {isSubmitting ? 'Processing...' : 'Back Project'}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CampaignDetails;