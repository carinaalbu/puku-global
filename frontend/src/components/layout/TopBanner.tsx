import React from 'react';

const TopBanner: React.FC = () => {
  return (
    <div style={{
      position: 'relative',
      zIndex: 20,
      width: '100%',
      height: '36px',
      padding: '3px 12px',
      textAlign: 'center',
      backgroundColor: 'rgba(0, 165, 190, 0.06)',
      borderBottom: '1px solid rgba(0, 165, 190, 0.12)',
      margin: 0,
      marginTop: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <p style={{
        color: '#ffffff',
        fontSize: '16px',
        letterSpacing: '0.3px',
        margin: 0,
        lineHeight: '1.4',
        fontWeight: 700,
      }}>
        Partener în cadrul Platformei Naționale pentru Tehnologii Semiconductoare (PNTS) — research4industry.ro
      </p>
    </div>
  );
};

export default TopBanner;
