import { FaTelegramPlane, FaLinkedin, FaEnvelope, FaDiscord } from 'react-icons/fa';

const Contact = () => {
  const contacts = [
    {
      platform: 'Telegram',
      icon: <FaTelegramPlane />,
      link: 'https://t.me/your_username',
    },
    {
      platform: 'LinkedIn',
      icon: <FaLinkedin />,
      link: 'https://www.linkedin.com/in/your-profile',
    },
    {
      platform: 'Email',
      icon: <FaEnvelope />,
      link: 'mailto:your_email@example.com',
    },
    {
      platform: 'Discord',
      icon: <FaDiscord />,
      link: 'https://discord.com/users/your_discord_id',
    },
  ];

  return (
    <section className="contact-section">
      <h2>Contact Me</h2>
      <div className="contact-icons">
        {contacts.map((contact, index) => (
          <a key={index} href={contact.link} target="_blank" rel="noopener noreferrer">
            <div className="contact-icon">{contact.icon}</div>
            <span>{contact.platform}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
