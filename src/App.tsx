import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Tutoring from './pages/Tutoring';
// import Blog from './pages/Blog';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/global.css';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/tutoring" element={<Tutoring />} />
          {/*<Route path="/blog" element={<Blog />} /> Uncomment to add blog link*/}
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
