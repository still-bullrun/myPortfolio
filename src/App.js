import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import './styles/HeroSection.css';
import './styles/AboutMe.css';
import Skills from './components/Skills';
import './styles/Skills.css';
import Experience from './components/Experience';
import './styles/Experience.css';
import Portfolio from './components/Portfolio';
import './styles/Portfolio.css';
import Services from './components/Services';
import './styles/Services.css';
import Contact from './components/Contact';
import './styles/Contact.css';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <AboutMe />
      <Skills />
      <Experience />
      <Portfolio />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
