import React from 'react';
import Plasma from '@/components/Plasma.jsx';

const Background: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 0, pointerEvents: 'auto' }}>
      <Plasma
        color="#22d3ee"
        speed={0.3}
        direction="backward"
        scale={0.5}
        opacity={0.8}
        mouseInteractive
      />
    </div>
  );
};

export default Background;
