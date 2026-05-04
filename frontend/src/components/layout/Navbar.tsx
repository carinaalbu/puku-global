import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav 
      style={{ 
        margin: '20px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '12px 24px'
      }}
      className="fixed top-10 left-1/2 -translate-x-1/2 w-[98vw] max-w-[1600px] 
                 rounded-3xl
                 bg-white/5 backdrop-blur-2xl
                 shadow-[0_8px_32px_rgba(0,0,0,0.3)]
                 flex items-center justify-between z-[50]"
    >
      {/* Logo Left */}
      <div className="flex items-center gap-2">
        <img 
          src="/src/assets/icons/Puku_logo_white.png" 
          alt="PUKU Global Logo" 
          style={{ height: '40px', width: 'auto' }}
        />
      </div>

      {/* Right Aligned Nav Container */}
      <div className="hidden md:flex items-center gap-8 ml-auto">
        <a href="#" className="text-white/60 hover:text-white transition-colors text-sm font-medium">
          Servicii
        </a>
        <a href="#companie" className="text-white/60 hover:text-white transition-colors text-sm font-medium">
          Companie
        </a>

        {/* CTA Button Far Right */}
        <button className="px-6 py-2.5 rounded-xl bg-white text-black text-sm font-bold hover:bg-white/90 transition-all">
          Light Mode
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
