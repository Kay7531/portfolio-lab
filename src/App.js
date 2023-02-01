import { Routes, Route, useNavigate } from 'react-router-dom'
//Components
import NavBar from './components/NavBar/NavBar';
import Landing from './pages/Landing/Landing';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Projects from './pages/Projects/Projects';
import Resume from './pages/Resume/Resume';
import Technologies from './pages/Technologies/Technologies';

function App() {
  return (
  <>
  <NavBar/>
  <Routes>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/resume" element={<Resume/>}/>
    <Route path="/projects" element={<Projects/>}/>
    <Route path="/technologies" element={<Technologies/>}/>
    <Route path="/" element={<Landing/>}/>
   
    
  </Routes>
  </>
  );
}

export default App;
