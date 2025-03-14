import React from 'react';
import { FaTelegramPlane, FaDiscord, FaEnvelope, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const contacts = [
    {
      icon: <FaTelegramPlane size={40} />,
      link: 'https://t.me/@stillbullrun',
      platform: 'Telegram'
    },
    {
      icon: <FaDiscord size={40} />,
      link: 'https://discordapp.com/users/@sniper_bond',
      platform: 'Discord'
    },
    {
      icon: <FaEnvelope size={40} />,
      link: 'mailto:still.bullrun@gmail.com',
      platform: 'Gmail'
    },
    {
      icon: <FaLinkedin size={40} />,
      link: 'https://www.linkedin.com/in/your_profile',
      platform: 'LinkedIn'
    }
  ];

  return (
    <section className="contact-section">
      <h2>Contact Me</h2>
      <div className="contact-grid">
        {contacts.map((contact, index) => (
          <a key={index} href={contact.link} target="_blank" rel="noopener noreferrer" className="contact-card">
            {contact.icon}
            <p>{contact.platform}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
