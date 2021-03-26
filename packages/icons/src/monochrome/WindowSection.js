import React from 'react';

export default function WindowSection(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" width={24} height={24} {...props}>
      <rect width={6} height={12} x={9} y={10} className="uim-tertiary" />
      <path className="uim-tertiary" d="M2,10v11c0,0.55228,0.44772,1,1,1h4V10H2z" />
      <polygon className="uim-quaternary" points="22 8 2 8 2 10 7 10 7 22 9 22 9 10 15 10 15 22 17 22 17 10 22 10" />
      <path className="uim-tertiary" d="M17,10v12h4c0.55228,0,1-0.44772,1-1V10H17z" />
      <path className="uim-primary" d="M3,2h18c0.55228,0,1,0.44772,1,1v5l0,0H2l0,0V3C2,2.44772,2.44772,2,3,2z" />
    </svg>
  );
}
