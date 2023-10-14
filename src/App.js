
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout'; 

import Home from './Home';
import About from './About';
import Projects from './Project';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout> 
              <Home />
            </Layout>
          }
        />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/project" element={<Layout><Projects /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
