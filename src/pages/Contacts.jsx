import React from 'react';

import contactLinks from '../data/contactLinks.jsx';

function Contacts() {


  return (
    <div className="min-h-screen flex justify-center p-4">
      <div className="max-w-md w-full">
        <h1 className="text-4xl font-bold text-center mb-2">Let's Connect</h1>
        <p className="text-center  mb-8">
          Feel free to reach out through any of these platforms! <br /> 
          I promisse I'll do my best to answer 🤞
        </p>


        <div className="space-y-4">
          {contactLinks.map((item) => (
            <a
              key={item.platform}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-4 rounded-lg bg-base-100/70 hover:bg-primary hover:text-primary-content transition-all duration-300"
            >
              <div className="flex items-center space-x-4">
                <div className="p-2 rounded-md bg-base-100/70 group-hover:bg-primary-content/10">
                  {item.icon}
                </div>
                <div>
                  <h2 className="font-semibold">{item.platform}</h2>
                  <p className="text-sm opacity-70">{item.username}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contacts;