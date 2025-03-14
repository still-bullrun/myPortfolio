import React, { useState } from 'react';

const Portfolio = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    { title: 'RingIQ|AI virtual Receptionist', category: 'App', image: 'ringiq.png', link: '#' },
    { title: 'ImageFree', category: 'Blockchain', image: '/projects/imagefree.png', link: '#' },
    { title: 'E-commerce Site', category: 'Site', image: '/projects/ecommerce.png', link: '#' },
    { title: 'Crypto Dashboard', category: 'Blockchain', image: '/projects/crypto-dashboard.png', link: '#' },
    { title: 'Portfolio Website', category: 'Site', image: '/projects/portfolio.png', link: '#' },
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
        {['All', 'App', 'Blockchain', 'Site'].map(category => (
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
