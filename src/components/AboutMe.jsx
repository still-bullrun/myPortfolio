const AboutMe = () => {
    return (
      <section className="about-me">
        <div className="about-content">
          <div className="about-photo">
            <img src="/profile.jpg" alt="Vladyslav" />
          </div>
          <div className="about-text">
            <h2>About Me</h2>
            <p>
              I'm <strong>Vladyslav</strong>, a passionate <strong>Full-Stack Developer</strong> with <strong>7+ years</strong> of experience in building modern web applications. 
              Skilled in <strong>React.js</strong>, <strong>Node.js</strong>, <strong>Laravel</strong>, and <strong>Blockchain technologies</strong>.
            </p>
            <a href="/resume.pdf" className="btn">Download Resume</a>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutMe;
  