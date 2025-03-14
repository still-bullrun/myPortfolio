const AboutMe = () => {
    return (
      <section className="about-me">
        <div className="about-content">
          <div className="about-photo">
            <img src="profile.png" alt="Vladyslav" />
          </div>
          <div className="about-text">
            <h2>About Me</h2>
            <p>
                
            My favorite thing is to help my clients become successful through sharing knowledge and experience. 
            I get this energy from clients and startups that feels unlimited, and it makes me even more motivated to work harder.
            i am a full-stack developer with 7 years in web development who excels in front-end frameworks (React, Angular, and Next)
             and back-end technologies (Node.js, PHP, Django, and .NET). 
            I deploy apps to AWS, Azure, and GCP. my expertise is invaluable for tech-driven firms. give me a nice portfolio project code.
            </p>
            <a href="resume.pdf" className="btn">Download Resume</a>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutMe;
  