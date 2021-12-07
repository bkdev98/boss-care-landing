import React from 'react';

export default function WindowMaximize(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" width={24} height={24} {...props}>
      <rect width={20} height={2} x={2} y={8} className="uim-quaternary" />
      <path className="uim-primary" d="M3,2h18c0.55228,0,1,0.44772,1,1v5l0,0H2l0,0V3C2,2.44772,2.44772,2,3,2z" />
      <path className="uim-tertiary" d="M2,10h20l0,0v11c0,0.55228-0.44772,1-1,1H3c-0.55228,0-1-0.44772-1-1V10L2,10z" />
    </svg>
  );
}
