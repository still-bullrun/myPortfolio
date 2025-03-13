import React from 'react';
import { FaReact, FaPython, FaLaravel } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaReact size={50} />,
      title: 'Modern Web & Cloud Technologies',
      description: 'Building high-performance React and Next.js applications with AWS Cloud integration.'
    },
    {
      icon: <FaLaravel size={50} />,
      title: 'PHP & Laravel Development',
      description: 'Scalable and secure backend solutions using Laravel and RESTful APIs.'
    },
    {
      icon: <FaPython size={50} />,
      title: 'Django & AI Integration',
      description: 'Creating robust backend systems and AI-powered applications with Django and Python.'
    }
  ];

  return (
    <section className="services-section">
      <h2>My Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            {service.icon}
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
