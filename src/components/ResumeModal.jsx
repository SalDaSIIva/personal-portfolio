import React from "react";
import { createPortal } from "react-dom";

function ResumeModal({ isOpen, onClose }) {
  const resumePdfUrl = `${import.meta.env.BASE_URL}/resume.pdf`;

  if (!isOpen) return null;

  return createPortal(
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      onClick={onClose}
      style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
    >
      <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300" />
      
      <div 
        className="relative bg-base-100/70 p-6 rounded-lg shadow-xl w-full max-w-4xl h-[90vh] flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">My Resume</h2>
          <button 
            onClick={onClose} 
            className="btn btn-sm btn-circle btn-ghost"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 relative">
          <iframe
            src={resumePdfUrl}
            className="absolute inset-0 w-full h-full border border-gray-300 rounded-md"
            title="Resume Preview"
          />
        </div>
      </div>
    </div>,
    document.body
  );
}

export default ResumeModal;
