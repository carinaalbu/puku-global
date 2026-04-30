import Plasma from '@/components/Plasma.jsx'

export default function App() {
  return (
    <div className="min-h-screen w-full relative overflow-hidden" style={{ backgroundColor: '#070f1f' }}>
      {/* PNTS Partner Header */}
      <div style={{
        position: 'relative',
        zIndex: 20,
        width: '100%',
        padding: '3px 12px',
        textAlign: 'center',
        backgroundColor: 'rgba(0, 165, 190, 0.06)',
        borderBottom: '1px solid rgba(0, 165, 190, 0.12)',
        margin: 0,
        marginTop: 0
      }}>
        <p style={{
          color: '#ffffff',
          fontSize: '11px',
          letterSpacing: '0.3px',
          margin: 0,
          lineHeight: '1.4'
        }}>
          Partener în cadrul Platformei Naționale pentru Tehnologii Semiconductoare (PNTS) — research4industry.ro
        </p>
      </div>
      
      <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 0, pointerEvents: 'auto' }}>
        <Plasma
          color="#00a5be"
          speed={0.4}
          direction="backward"
          scale={1}
          opacity={1}
          mouseInteractive
        />
      </div>
      
      {/* Content will go above this background */}
      <div className="relative z-10 min-h-screen pointer-events-auto">
        {/* Floating Glassmorphism Pill Navbar */}
         <nav 
          style={{ 
            margin: '20px',
            border: '1px solid rgba(156, 163, 175, 0.2)', // grey-400 with 20% opacity
            padding: '10px'
          }}
          className="fixed top-10 left-1/2 -translate-x-1/2 w-[90vw] max-w-4xl 
                     rounded-full
                     bg-white/7 backdrop-blur-[24px] backdrop-saturate-150
                     shadow-[0_8px_32px_rgba(0,0,0,0.2)]
                     flex items-center justify-between"
        >
          {/* Logo Left */}
          <div className="flex items-center">
            <img 
              src="/src/assets/icons/Puku_logo_white.png" 
              alt="PUKU Global Logo" 
              style={{ height: '50px', width: 'auto' }}
            />
          </div>

          {/* Navigation Links Center/Right */}
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">
              Despre
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">
              Soluții
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">
              Proiecte
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">
              Contact
            </a>
          </div>

          {/* CTA Button Far Right */}
          <button className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white text-sm font-medium transition-all">
            Contactează-ne
          </button>
        </nav>

        {/* Page Content Container */}
        <div className="pt-32">
        </div>
      </div>
    </div>
  )
}
