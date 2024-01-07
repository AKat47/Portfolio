// React Bootstrap Styles
import 'bootstrap/dist/css/bootstrap.min.css';
// Global Styles
import './App.css';
// Hero Section Component
import HeroSection from './components/HeroSection';
// Navbar Component
import NavBar from './components/NavBar';
// Skills Component
import Skills from './components/Skills';
// Projects Component
import Projects from './components/Projects';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Gallery from './components/Gallery';


function App() {
  return (
    <Router>
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<><HeroSection/><Projects/></>} />
        <Route path="/gallery" element={<Gallery/>} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
