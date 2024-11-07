import React from 'react';

function VirtualCarModels() {
  return (
    <div className="virtual-car-models" style={styles.container}>
      <h1 style={styles.title}>3D Virtual Car Models</h1>
      <p style={styles.description}>
        Explore 3D models of cars to assist with repairs and diagnostics.
      </p>
      <div className="iframe-container" style={styles.iframeContainer}>
        <iframe
          src="https://carvisualizer.plus360degrees.com/threejs/"
          title="3D Car Models"
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
    background: 'linear-gradient(135deg, #3e8e41, #2c3e50)', // Dark green to dark blue gradient
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
    textShadow: '2px 2px 10px rgba(0, 0, 0, 0.5)', // Adding depth to the text
    transition: 'transform 0.3s ease-in-out',
  },
  description: {
    fontSize: '1.5rem',
    color: '#dfe6e9',
    marginBottom: '30px',
    fontStyle: 'italic',
    opacity: 0.85,
    transition: 'opacity 0.5s ease-in-out',
  },
  iframeContainer: {
    width: '80%',
    maxWidth: '960px',
    borderRadius: '12px',
    boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.3)', // Increased shadow for depth
    overflow: 'hidden',
    transform: 'scale(0.95)',
    transition: 'transform 0.3s ease-in-out',
  },
  iframe: {
    border: 'none',
    borderRadius: '12px',
    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)', // Box shadow for depth
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

export default VirtualCarModels;
