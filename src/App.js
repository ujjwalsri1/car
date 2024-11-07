import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Import Navbar here
import HomePage from './components/HomePage';
import OrderRepairParts from './components/OrderRepairParts';
import VideoRepairGuide from './components/VideoRepairGuide';
import VirtualCarModels from './components/VirtualCarModels';
import ChatbotAssistant from './components/ChatbotAssistant';
import DamageDetect from './components/DamageDetect';
import './App.css';

function App() {
  return (
    <Router>
      {/* Navbar is included once here */}
      <Navbar />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/order-repair-parts" element={<OrderRepairParts />} />
        <Route path="/video-repair-guide" element={<VideoRepairGuide />} />
        <Route path="/virtual-car-models" element={<VirtualCarModels />} />
        <Route path="/chatbot-assistant" element={<ChatbotAssistant />} />
        <Route path="/damage" element={<DamageDetect />} />
      </Routes>
    </Router>
  );
}

export default App;
