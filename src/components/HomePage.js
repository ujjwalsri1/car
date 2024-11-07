import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="home-page" style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Welcome to Vehicle Repair with AI</h1>
        <p style={styles.description}>
          Your one-stop solution for vehicle repairs with 3D models and repair guides.
        </p>
      </header>
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Services</h2>
        <div className="service-list" style={styles.serviceList}>
          {services.map((service) => (
            <div key={service.title} style={styles.serviceCard}>
              <img
                src={service.image}
                alt={service.title}
                style={styles.cardImage}
              />
              <h3 style={styles.cardTitle}>{service.title}</h3>
              <p style={styles.cardText}>{service.description}</p>
              <Link to={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`} style={styles.btnLink}>
                Read More
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Vehicle Repair History</h2>
        <div className="iframe-container" style={styles.iframeContainer}>
          <iframe
            src="https://ziadsheriif.github.io/Todo-List/#/all-tasks"
            title="Vehicle AR Demo"
            width="100%"
            height="500px"
            style={styles.iframe}
          ></iframe>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Explore 3D Virtual Car Models</h2>
        <div style={styles.center}>
          <Link to="/virtual-car-models" style={styles.navButton}>
            Explore 3D Car Models
          </Link>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Chatbot Assistance</h2>
        <div style={styles.center}>
          <Link to="/chatbot-assistant" style={styles.navButton}>
            Ask the Chatbot
          </Link>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Repair Suggestion Videos</h2>
        <div style={styles.center}>
          <Link to="/video-repair-guide" style={styles.navButton}>
            Watch Repair Videos
          </Link>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>AR Tools For Repair</h2>
        <div style={styles.center}>
          <Link to="https://librestream.com/platform/" style={styles.navButton}>
            Visit AR Platform
          </Link>
        </div>
      </section>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    background: 'linear-gradient(135deg, #00bcd4, #00796b)', // Gradient
    minHeight: '100vh',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  header: {
    marginBottom: '40px',
  },
  title: {
    fontSize: '3.5rem',
    color: '#fff',
    marginBottom: '20px',
    fontWeight: 'bold',
    textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)',
    animation: 'fadeIn 1s ease-in-out',
  },
  description: {
    fontSize: '1.5rem',
    color: '#fff',
    fontStyle: 'italic',
    opacity: 0.85,
  },
  section: {
    width: '100%',
    maxWidth: '1300px',
    marginBottom: '50px',
  },
  sectionTitle: {
    fontSize: '2.5rem',
    marginBottom: '20px',
    color: '#fff',
    fontWeight: 'bold',
  },
  serviceList: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap: '20px',
  },
  serviceCard: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    width: '250px',
    textAlign: 'center',
    transition: 'transform 0.3s ease-in-out',
    cursor: 'pointer',
  },
  cardImage: {
    width: '110px',
    height: '110px',
    marginBottom: '20px',
  },
  cardTitle: {
    fontSize: '1.8rem',
    marginBottom: '10px',
    color: '#333',
  },
  cardText: {
    fontSize: '1.1rem',
    marginBottom: '20px',
    color: '#777',
  },
  btnLink: {
    fontSize: '1.2rem',
    color: '#00796b',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
    borderBottom: '2px solid #00796b',
  },
  navButton: {
    padding: '15px 25px',
    fontSize: '1.2rem',
    color: '#fff',
    backgroundColor: 'purple',
    borderRadius: '8px',
    textDecoration: 'none',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)',
  },
  center: {
    textAlign: 'center',
  },
  iframeContainer: {
    width: '100%',
    height: '500px',
    marginBottom: '40px',
  },
  iframe: {
    border: 'none',
    width: '100%',
    height: '100%',
  },
  // Mobile responsiveness styles
  '@media (max-width: 768px)': {
    container: {
      padding: '15px',
    },
    title: {
      fontSize: '2.5rem',
    },
    description: {
      fontSize: '1.2rem',
    },
    sectionTitle: {
      fontSize: '2rem',
    },
    serviceList: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    serviceCard: {
      width: '80%',
      marginBottom: '20px',
    },
    iframeContainer: {
      height: '300px',
    },
    navButton: {
      fontSize: '1rem',
      padding: '12px 20px',
    },
  },

  '@media (max-width: 480px)': {
    title: {
      fontSize: '2rem',
    },
    description: {
      fontSize: '1rem',
    },
    serviceCard: {
      width: '100%',
      marginBottom: '20px',
    },
    sectionTitle: {
      fontSize: '1.5rem',
    },
    iframeContainer: {
      height: '250px',
    },
    navButton: {
      fontSize: '1rem',
      padding: '12px 20px',
    },
  },
};

// Example services array
const services = [
  {
    title: 'Engine Repair',
    image: 'https://t3.ftcdn.net/jpg/06/41/73/20/360_F_641732036_if4Eq4gHSoPiDmmxIcim0FDPkjWGYlOq.jpg',
    description: 'Expert services to repair and maintain your engine.',
  },
  {
    title: 'Brake Repair',
    image: 'https://c8.alamy.com/comp/2P3B6R1/a-man-in-uniform-repairs-a-car-auto-repair-shop-garage-a-professional-works-in-a-car-service-maintenance-for-driver-safety-2P3B6R1.jpg',
    description: 'Fix your vehicle\'s braking system with professional services.',
  },
  {
    title: 'Tire Repair',
    image: 'https://t4.ftcdn.net/jpg/03/22/70/05/360_F_322700593_wMawL9hEbLIO2jfoZ1PLT3M1lsVR4NKq.jpg',
    description: 'Quick and efficient tire repair solutions.',
  },
  {
    title: 'Battery Repair',
    image: 'https://i.pinimg.com/736x/ab/d2/7b/abd27b17644efe81e45aa96fe4f20e35.jpg',
    description: 'Get your vehicle battery repaired or replaced.',
  },
];

export default HomePage;
