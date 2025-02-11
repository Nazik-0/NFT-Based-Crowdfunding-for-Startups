import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Explore from './pages/Explore';
import CampaignDetails from './pages/CampaignDetails';
import CreateCampaign from './pages/CreateCampaign';
import MyCampaigns from './pages/MyCampaigns';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/campaign/:id" element={<CampaignDetails />} />
            <Route path="/create" element={<CreateCampaign />} />
            <Route path="/my-campaigns" element={<MyCampaigns />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;