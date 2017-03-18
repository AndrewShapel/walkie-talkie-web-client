import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from '../components/Header';
import Content from '../components/Content';
import Footer from '../components/Footer';

const App = () => (
  <Router>
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  </Router>
);

export default App;
