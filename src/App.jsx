import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
// import { Router, Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import Navbar from './components/Navbar';
import Background from './components/Background';
import SingleProject from './pages/SingleProject';
import ErrorPage from './pages/ErrorPage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Background />

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
