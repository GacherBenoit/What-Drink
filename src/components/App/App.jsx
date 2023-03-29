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
import Cocktails from '../Cocktails/cocktail';
import SearchResult from '../SearchResult/searchResult';

function App() {
  return (
    <div className="app">
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cocktails" element={<Cocktails />} />
        <Route path="/tools&tips" element={<ToolsAndTips />} />
        <Route path="/whoweare" element={<WhoWeAre />} />
        <Route path="/searchresult" element={<SearchResult />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
