import React, { useState } from 'react';

const Portfolio = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    { title: 'RingIQ|AI virtual Receptionist', category: 'App', image: 'ringiq.png', link: '#' },
    { title: 'Learn Technical English Fast |Online Courses with Certificates', category: 'App', image: 'techlearn.png', link: 'https://technicalenglish.com/en/home' },
    { title: 'E-commerce Site', category: 'Site', image: 'ecommer.png', link: '#' },
    { title: 'Casino betting site', category: 'site', image: 'betting.png', link: '#' },
    { title: 'Milk chocholate', category: 'MERN', image: 'Mern.PNG', link: 'https://slatemilk.com/' },
  ];

  const filteredProjects = projects.filter(project =>
    filter === 'All' || project.category === filter
  );

  const handleFilter = (category) => {
    setFilter(category);
  };

  return (
    <section className="portfolio-section">
      <h2>Portfolio</h2>
      <div className="filter-buttons">
        {['All', 'App', 'MERN', 'Site'].map(category => (
          <button
            key={category}
            className={filter === category ? 'active' : ''}
            onClick={() => handleFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="portfolio-grid">
        {filteredProjects.map((project, index) => (
          <div key={index} className="portfolio-item">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
