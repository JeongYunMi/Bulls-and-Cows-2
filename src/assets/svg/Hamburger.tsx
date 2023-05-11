import React from 'react';

const Hamburger: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width="33" height="20" viewBox="0 0 33 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect y="17" width="33" height="3" rx="1.5" fill="black"/>
      <rect y="9" width="33" height="3" rx="1.5" fill="black"/>
      <rect width="33" height="3" rx="1.5" fill="black"/>
    </svg>

  );
};

export default Hamburger;