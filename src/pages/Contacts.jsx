// src/components/Contact.jsx
import React from 'react';

function Contacts() {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>
      <div className="max-w-md mx-auto">
        <form className="card p-6 bg-base-100 shadow-xl transform hover:scale-105 transition-transform duration-300">
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Your Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea
              placeholder="Your message"
              className="textarea textarea-bordered focus:outline-none focus:ring-2 focus:ring-primary"
              rows="4"
            ></textarea>
          </div>
          <div className="form-control">
            <button className="btn btn-primary hover:btn-secondary transition-colors">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contacts;
