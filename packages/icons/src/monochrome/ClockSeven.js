import React from 'react';

export default function ClockSeven(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} {...props}>
      <path className="uim-primary" d="M12,6a1.003,1.003,0,0,0-1,1v4.73L9.4,14.5a.99911.99911,0,1,0,1.73,1l1.69-2.93A.9986.9986,0,0,0,13,12V7A1.003,1.003,0,0,0,12,6Z" />
      <path className="uim-tertiary" d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm1,10a.99867.99867,0,0,1-.18.57L11.13,15.5a.99911.99911,0,1,1-1.73-1L11,11.73V7a1,1,0,0,1,2,0Z" />
    </svg>
  );
}
