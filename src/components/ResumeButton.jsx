import React, { useState } from "react";
import ResumeModal from "./ResumeModal";

function ResumeButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="text-center">
      {/* Resume Button */}
      <button onClick={() => setIsModalOpen(true)} className="btn btn-accent btn-sm mr-4">
        Resume
      </button>

      {/* Resume Modal */}
      {isModalOpen && <ResumeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}

export default ResumeButton;
