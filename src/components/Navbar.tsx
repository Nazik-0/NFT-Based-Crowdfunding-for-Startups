import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Rocket, Search, Plus, Wallet, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const location = useLocation();

  const handleConnectWallet = async () => {
    try {
      // Simulate wallet connection
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsWalletConnected(true);
    } catch (error) {
      alert('Failed to connect wallet. Please try again.');
    }
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed w-full bg-gray-900/80 backdrop-blur-lg border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Rocket className="h-8 w-8 text-purple-500" />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
              NFTFund
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/explore" 
              className={`flex items-center space-x-1 transition-colors ${
                isActive('/explore') ? 'text-purple-400' : 'text-gray-300 hover:text-white'
              }`}
            >
              <Search className="h-4 w-4" />
              <span>Explore</span>
            </Link>
            <Link 
              to="/create" 
              className={`flex items-center space-x-1 transition-colors ${
                isActive('/create') ? 'text-purple-400' : 'text-gray-300 hover:text-white'
              }`}
            >
              <Plus className="h-4 w-4" />
              <span>Create</span>
            </Link>
            <Link 
              to="/my-campaigns" 
              className={`transition-colors ${
                isActive('/my-campaigns') ? 'text-purple-400' : 'text-gray-300 hover:text-white'
              }`}
            >
              My Campaigns
            </Link>
            <button
              onClick={handleConnectWallet}
              className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition-all ${
                isWalletConnected
                  ? 'bg-green-500/10 text-green-400 border border-green-500/30'
                  : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90'
              }`}
            >
              <Wallet className="h-4 w-4" />
              <span>{isWalletConnected ? '0x1234...5678' : 'Connect Wallet'}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-300" />
            ) : (
              <Menu className="h-6 w-6 text-gray-300" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-800 py-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/explore"
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                  isActive('/explore') ? 'bg-purple-500/10 text-purple-400' : 'text-gray-300'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <Search className="h-4 w-4" />
                <span>Explore</span>
              </Link>
              <Link
                to="/create"
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                  isActive('/create') ? 'bg-purple-500/10 text-purple-400' : 'text-gray-300'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <Plus className="h-4 w-4" />
                <span>Create</span>
              </Link>
              <Link
                to="/my-campaigns"
                className={`px-4 py-2 rounded-lg ${
                  isActive('/my-campaigns') ? 'bg-purple-500/10 text-purple-400' : 'text-gray-300'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                My Campaigns
              </Link>
              <button
                onClick={() => {
                  handleConnectWallet();
                  setIsMenuOpen(false);
                }}
                className={`px-4 py-2 rounded-lg flex items-center space-x-2 ${
                  isWalletConnected
                    ? 'bg-green-500/10 text-green-400 border border-green-500/30'
                    : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                }`}
              >
                <Wallet className="h-4 w-4" />
                <span>{isWalletConnected ? '0x1234...5678' : 'Connect Wallet'}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;