import React from 'react';

function Logo({ width = '100px' }) {
  return (
    <div className="flex justify-center items-center">
      <img
        src="https://clipart.info/images/ccovers/1516920567instagram-png-logo-transparent.png"
        className="h-12 w-12" // Tailwind CSS classes for height and width
        alt="Logo"
      />
    </div>
  );
}

export default Logo;
