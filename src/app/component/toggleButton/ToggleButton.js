import { useState } from "react";

const ToggleButton = () => {
  const [isJob, setIsJob] = useState(true);

  const toggle = () => setIsJob(!isJob);

  return (
    <div className="flex items-center justify-between px-[6px] bg-[#E2E2E8] rounded-3xl h-[44px] ">
      <button
        onClick={toggle}
        className={`rounded-3xl text-sm font-medium py-[6px] px-[12px] ${
          isJob ? "bg-[#161616] text-white" : "bg-gray-200 text-gray-800"
        } transition-colors duration-300`}
      >
        Job Seekers
      </button>
      <button
        onClick={toggle}
        className={`rounded-3xl text-sm font-semibold py-[6px] px-[12px] ${
          !isJob ? "bg-[#161616] text-white" : "bg-gray-200 text-gray-800"
        } transition-colors duration-300`}
      >
        Companies
      </button>
    </div>
  );
};

export default ToggleButton;
