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
        <div className="pt-32 h-[calc(100vh-150px)] flex flex-col items-center justify-center px-4">
          <div className="flex flex-wrap items-center justify-center gap-10 mt-12 w-full max-w-5xl mx-auto">
            {/* Box 1 */}
            <div className="flex items-center justify-center w-80 h-24 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 transition-all duration-300 shadow-[0_10px_40px_-10px_rgba(219,39,119,0.8)] hover:shadow-[0_15px_50px_-10px_rgba(219,39,119,1)] cursor-pointer hover:-translate-y-2">
              <span className="text-white font-extrabold text-xl tracking-wide flex items-center gap-3">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
                Știință aplicată
              </span>
            </div>

            {/* Box 2 */}
            <div className="flex items-center justify-center w-80 h-24 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 shadow-[0_10px_40px_-10px_rgba(8,145,178,0.8)] hover:shadow-[0_15px_50px_-10px_rgba(8,145,178,1)] cursor-pointer hover:-translate-y-2">
              <span className="text-white font-extrabold text-xl tracking-wide flex items-center gap-3">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                Lanțuri de valoare
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
