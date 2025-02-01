import React from "react";

function ResumeModal({ isOpen, onClose }) {
    const resumePdfUrl = "/resume.pdf"; 

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>

      <div className="bg-base-100 p-6 rounded-lg shadow-xl w-11/12 md:w-3/4 lg:w-1/2">

        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">My Resume</h2>
          <button onClick={onClose} className="btn btn-sm btn-circle btn-ghost">✕</button>
        </div>

        <iframe
          src={resumePdfUrl}
          className="w-full min-h-[80vh] border border-gray-300 rounded-md"
          title="Resume Preview"
        ></iframe>

      </div>
    </div>
  );
}

export default ResumeModal;
