import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import Navbar from './components/Navbar';
import Background from './components/Background';
import SingleProject from './pages/SingleProject';
import ErrorPage from './pages/ErrorPage';
import Footer from './components/Footer';
import Cursor from './components/Cursor';

import { useEffect } from 'react';
import axios from 'axios';

function App() {
  const countTraffic = async () => {
    try {
      await axios.get('https://backend-dbdigital.onrender.com/api/traffic');
    } catch (err) {
      console.log('something went wrong...', err);
    }
  };

  useEffect(() => {
    countTraffic();
  }, []);

  return (
    <div className="app">
      <Router>
        <Navbar />
        <Background />
        <Cursor />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="projects/:id" element={<SingleProject />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
