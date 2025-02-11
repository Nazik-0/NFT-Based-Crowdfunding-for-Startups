import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Clock, Users, Target, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const projects = [
  {
    id: 1,
    name: "EcoChain: Sustainable Blockchain",
    category: "Green Tech",
    description: "A carbon-neutral blockchain platform that revolutionizes green energy tracking and carbon credit trading using NFTs.",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=800",
    raised: 75,
    goal: 100,
    timeLeft: "4d 12h",
    backers: 245
  },
  {
    id: 2,
    name: "ArtVerse Gallery",
    category: "Art",
    description: "Decentralized virtual art gallery enabling artists to showcase and sell their digital art through immersive VR experiences.",
    image: "https://images.unsplash.com/photo-1561735445-df7e2f5f3199?auto=format&fit=crop&q=80&w=800",
    raised: 45,
    goal: 80,
    timeLeft: "6d 8h",
    backers: 178
  },
  {
    id: 3,
    name: "MetaLearn Academy",
    category: "Education",
    description: "Web3-powered educational platform offering tokenized certificates and learn-to-earn opportunities.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800",
    raised: 120,
    goal: 150,
    timeLeft: "2d 15h",
    backers: 389
  },
  {
    id: 4,
    name: "GameFi Universe",
    category: "Gaming",
    description: "Play-to-earn gaming metaverse with interoperable NFT assets and cross-game progression system.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800",
    raised: 200,
    goal: 250,
    timeLeft: "8d 6h",
    backers: 567
  },
  {
    id: 5,
    name: "DeFi Health",
    category: "Healthcare",
    description: "Decentralized healthcare data management system with tokenized health records and AI diagnostics.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
    raised: 90,
    goal: 120,
    timeLeft: "5d 18h",
    backers: 234
  },
  {
    id: 6,
    name: "SupplyChainX",
    category: "Supply Chain",
    description: "Blockchain-based supply chain tracking system with NFT-powered product authenticity verification.",
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&q=80&w=800",
    raised: 150,
    goal: 200,
    timeLeft: "3d 9h",
    backers: 412
  }
];

const categories = [
  "All Categories",
  "Green Tech",
  "Art",
  "Education",
  "Gaming",
  "Healthcare",
  "Supply Chain"
];

const Explore = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All Categories" || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Search and Filter Section */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search campaigns..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
            />
          </div>
          <div className="flex gap-4 w-full md:w-auto">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white hover:bg-gray-700/50">
              <Filter className="h-5 w-5" />
              <span>Filter</span>
            </button>
          </div>
        </div>
      </div>

      {/* Campaign Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            className="bg-gray-800/30 backdrop-blur-lg rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500/50 transition-colors cursor-pointer"
            onClick={() => navigate(`/campaign/${project.id}`)}
          >
            <div className="relative h-48">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-purple-500 text-white px-2 py-1 rounded-full text-sm">
                {project.timeLeft} left
              </div>
              <div className="absolute top-4 left-4 bg-gray-900/80 text-white px-2 py-1 rounded-full text-sm">
                {project.category}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-white">{project.name}</h3>
              <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>
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
                <div className="flex justify-between items-center pt-2">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-purple-500" />
                    <span className="text-sm text-gray-400">{project.backers} backers</span>
                  </div>
                  <button className="text-purple-400 hover:text-purple-300 flex items-center gap-1 text-sm">
                    View Details <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Explore;