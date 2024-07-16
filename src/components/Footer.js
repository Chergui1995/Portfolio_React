import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center mt-4">
      <p>&copy; {new Date().getFullYear()} Chergui Fares</p>
      <p>
        <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">GitHub</a> | 
        <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </p>
    </footer>
  );
}

export default Footer;
