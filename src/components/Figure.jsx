import React from "react";

const Figure = ({ mistakes }) => {
  const hangmanParts = [
    // Head
    <circle key="head" cx="50" cy="50" r="10" stroke="black" strokeWidth="3" fill="none" />,
    
    // Body
    <line key="body" x1="50" y1="60" x2="50" y2="90" stroke="black" strokeWidth="3" />,
    
    // Arms (adjusted for proper position)
    <line key="left-arm" x1="50" y1="70" x2="30" y2="90" stroke="black" strokeWidth="3" />,
    <line key="right-arm" x1="50" y1="70" x2="70" y2="90" stroke="black" strokeWidth="3" />,
    <line key="left-leg" x1="50" y1="90" x2="30" y2="110" stroke="black" strokeWidth="3" />,
    <line key="right-leg" x1="50" y1="90" x2="70" y2="110" stroke="black" strokeWidth="3" />,
  ];

  return (
    <svg height="150" width="150" className="figure">
      <line x1="10" y1="130" x2="150" y2="130" stroke="black" strokeWidth="3" />
      <line x1="80" y1="20" x2="80" y2="130" stroke="black" strokeWidth="3" />
      <line x1="50" y1="20" x2="80" y2="20" stroke="black" strokeWidth="3" />
      <line x1="50" y1="20" x2="50" y2="40" stroke="black" strokeWidth="3" />
      
      {hangmanParts.slice(0, mistakes)}
    </svg>
  );
};

export default Figure;
