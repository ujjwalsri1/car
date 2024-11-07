import React from 'react';

function VideoRepairGuide() {
  return (
    <div className="video-repair-guide" style={styles.container}>
      <h1 style={styles.title}>Video Repair Guide</h1>
      <p style={styles.description}>Watch step-by-step repair guides to fix your vehicle.</p>
      <div className="iframe-container" style={styles.iframeContainer}>
        <iframe
          src="https://shubho-youtube-mern.netlify.app/"
          title="Repair Guide Video"
          width="100%"
          height="500px"
          style={styles.iframe}
        ></iframe>
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    background: 'linear-gradient(135deg, #6a11cb, #2575fc)', // Gradient from purple to blue
    minHeight: '100vh',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    animation: 'fadeIn 1.5s ease-in-out',
  },
  title: {
    fontSize: '3.5rem',
    color: '#fff',
    marginBottom: '20px',
    fontWeight: 'bold',
    textShadow: '2px 2px 8px rgba(0, 0, 0, 0.4)',
    transition: 'transform 0.3s ease-in-out',
  },
  description: {
    fontSize: '1.5rem',
    color: '#f0f0f0',
    marginBottom: '30px',
    fontStyle: 'italic',
    opacity: 0.9,
    transition: 'opacity 0.5s ease-in-out',
  },
  iframeContainer: {
    width: '100%',
    height: '750px',
    maxWidth: '1300px',
    borderRadius: '12px',
    boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)',
    overflow: 'hidden',
    transform: 'scale(0.95)',
    transition: 'transform 0.3s ease-in-out',
  },
  iframe: {
    border: 'none',
    borderRadius: '12px',
    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.15)',
  },
};

// Adding CSS Animations in the document's head
const addAnimations = () => {
  const styleSheet = document.styleSheets[0];
  styleSheet.insertRule(`
    @keyframes fadeIn {
      0% { opacity: 0; }
      100% { opacity: 1; }
    }
  `, styleSheet.cssRules.length);
};

addAnimations();

export default VideoRepairGuide;
