'use client'
import { ReactNode, useState } from "react";

interface AccordionProps {
  title: string;
  children: ReactNode;
}

const Accordion_head: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div className="border border-gray-300 rounded-md mb-4" >
      <div
        className="flex justify-between items-center p-4 cursor-pointer rounded-md mt-2"
        onClick={toggleAccordion}
      >
        <h2 className="text-xl font-bold">{title}</h2>
        
        <svg
          className={`w-6 h-6 transition-transform ${isOpen ? "transform rotate-45" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
          />
        </svg>
      </div>
      {isOpen && <div className="p-4">{children}</div>}
    </div>
  );
};

export default Accordion_head;
