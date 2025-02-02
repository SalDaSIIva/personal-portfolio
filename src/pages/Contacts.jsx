// src/components/Contact.jsx
import React from 'react';

function Contacts() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-12">Connect With Me</h2>
      <div className="max-w-md mx-auto">
        <div className="card p-8 bg-base-100 shadow-xl">
          <div className="space-y-6">
            <a
              href="https://linkedin.com/in/YOUR_LINKEDIN"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-block btn-primary hover:btn-secondary transition-colors flex items-center justify-center gap-2"
            >
              <i className="fab fa-linkedin text-xl"></i>
              LinkedIn
            </a>
            
            <a
              href="https://github.com/YOUR_GITHUB"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-block btn-primary hover:btn-secondary transition-colors flex items-center justify-center gap-2"
            >
              <i className="fab fa-github text-xl"></i>
              GitHub
            </a>
            
            <a
              href="mailto:your.email@example.com"
              className="btn btn-block btn-primary hover:btn-secondary transition-colors flex items-center justify-center gap-2"
            >
              <i className="fas fa-envelope text-xl"></i>
              Email Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
