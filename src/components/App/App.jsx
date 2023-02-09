// Import CSS
import './App.scss';
import '../../styles/index.scss';
// Import NPM
import React from 'react';
import { Routes, Route } from 'react-router-dom';
// Import Components
import Nav from '../Nav/nav';
import Main from '../Main/main';
import Footer from '../Footer/footer';
import ToolsAndTips from '../ToolsAndTips/toolsAndTips';
import WhoWeAre from '../WhoWeAre/whoWeAre';

function App() {
  return (
    <div className="app">
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/tools&tips" element={<ToolsAndTips />} />
        <Route path="/whoWeAre" element={<WhoWeAre />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
