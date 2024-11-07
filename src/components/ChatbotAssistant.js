import React from 'react';

function ChatbotAssistant() {
  return (
    <div className="chatbot-assistant" style={styles.container}>
      <h1 style={styles.title}>Chatbot Repair Assistant</h1>
      <p style={styles.description}>Ask the assistant any vehicle repair related questions.</p>
      <div className="iframe-container" style={styles.iframeContainer}>
        <iframe
          src="https://ujjwalsri1.github.io/ChatBot/"
          title="Chatbot Assistant"
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
    background: 'linear-gradient(135deg, #ff7e5f, #feb47b)',  // Warm gradient background
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
    fontSize: '3rem',
    color: '#fff',
    marginBottom: '20px',
    fontWeight: 'bold',
    textShadow: '2px 2px 8px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s ease-in-out',
  },
  description: {
    fontSize: '1.4rem',
    color: '#f8f9fc',
    marginBottom: '30px',
    fontStyle: 'italic',
    opacity: 0.9,
    transition: 'opacity 0.5s ease-in-out',
  },
  iframeContainer: {
    width: '80%',
    maxWidth: '960px',
    borderRadius: '10px',
    boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    transform: 'scale(0.95)',
    transition: 'transform 0.3s ease-in-out',
  },
  iframe: {
    border: 'none',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
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

export default ChatbotAssistant;
