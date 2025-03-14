import { useCallback } from 'react';
import Particles from 'react-tsparticles';
// import { loadFull } from 'tsparticles';
import { loadSlim } from 'tsparticles-slim';

import { ReactTyped as Typed } from 'react-typed';


const HeroSection = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine); 
      }, []);
      

  const particlesLoaded = useCallback(async () => {}, []);

  return (
    <div className="hero-section">
      <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={{ particles: { number: { value: 50 }, size: { value: 3 } }, interactivity: { events: { onHover: { enable: true, mode: 'repulse' } } } }} />
      <span className="name">I am Vladyslav</span>
      <h1>
      
        <div className="typed-text">
          <Typed
            strings={["Full-Stack Developer", "AWS, Azure,GCP", "React Expert"]}
            typeSpeed={60}
            backSpeed={40}
            loop
          />
        </div>
      </h1>
      
      <div className="cta-buttons">
        <button onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })}>Explore Projects</button>
        <button onClick={() => window.scrollTo({ top: 3000, behavior: 'smooth' })}>Hire Me</button>
      </div>
    </div>
  );
};

export default HeroSection;
