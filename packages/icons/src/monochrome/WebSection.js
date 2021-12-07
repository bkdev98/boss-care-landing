import React from 'react';

export default function WebSection(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" width={24} height={24} {...props}>
      <rect width={2} height={20} x={14} y={2} className="uim-quaternary" />
      <path className="uim-tertiary" d="M3,2h11l0,0v20l0,0H3c-0.55228,0-1-0.44772-1-1V3C2,2.44772,2.44772,2,3,2z" />
      <path className="uim-primary" d="M16,2h5c0.55228,0,1,0.44772,1,1v18c0,0.55228-0.44772,1-1,1h-5l0,0V2L16,2z" />
    </svg>
  );
}
