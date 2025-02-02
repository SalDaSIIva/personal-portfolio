import React, { useState } from "react";
import ResumeModal from "./ResumeModal";
import "./ResumeButton.css";

function ResumeButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="text-center">
      {/* Resume Button */}
      <button 
        id="resumeButton"
        onClick={() => setIsModalOpen(true)} 
        className="
          btn btn-sm 

          
          shadow-lg transform transition duration-300 ease-out rounded-sm
          hover:scale-105 hover:shadow-2xl 
          glass
        "
      >
        Resume
      </button>

      {/* Resume Modal */}
      <ResumeModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}

export default ResumeButton;
