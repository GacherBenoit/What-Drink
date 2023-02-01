// Import CSS
import './App.scss';
import '../../styles/index.scss';
// Import NPM
import React from 'react';

// Import Components
import Nav from '../Nav/nav';
import Main from '../Main/main';
import Footer from '../Footer/footer';

function App() {
  return (
    <div className="app">
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
