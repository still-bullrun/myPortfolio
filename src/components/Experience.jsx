import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: 'CakeXP',
      role: 'Full-Stack Developer',
      duration: '2020 - 2022',
      techStack: 'React, Node.js, Laravel',
      description: 'Built scalable web applications and optimized API performance.'
    },
    {
      company: 'Tokio Community',
      role: 'Blockchain Developer',
      duration: '2022 - 2023',
      techStack: 'Solidity, Ethereum, Web3.js',
      description: 'Developed smart contracts and decentralized apps on Ethereum.'
    },
    {
      company: 'United Portraits',
      role: 'React Lead Developer',
      duration: '2023 - Present',
      techStack: 'React, Next.js, Node.js',
      description: 'Built high-performance client-side apps and managed a development team.'
    }
  ];

  return (
    <section className="experience-section">
      <h2>Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <h3>{exp.company}</h3>
            <p className="role">{exp.role}</p>
            <span>{exp.duration}</span>
            <p>{exp.description}</p>
            <span className="tech-stack">{exp.techStack}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
