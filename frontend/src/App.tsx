import Plasma from '@/components/Plasma.jsx'
import SplitText from '@/components/SplitText.jsx'

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
          color="#22d3ee"
          speed={0.3}
          direction="backward"
          scale={1}
          opacity={0.8}
          mouseInteractive
        />
      </div>
      
      {/* Content will go above this background */}
      <div className="relative z-10 min-h-screen pointer-events-auto flex flex-col items-center">
        {/* Floating Glassmorphism Pill Navbar */}
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
                     flex items-center justify-between"
        >
          {/* Logo Left */}
          <div className="flex items-center gap-2">
            <img 
              src="/src/assets/icons/Puku_logo_white.png" 
              alt="PUKU Global Logo" 
              style={{ height: '40px', width: 'auto' }}
            />
          </div>

          {/* Navigation Links Center/Right */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-white/60 hover:text-white transition-colors text-sm font-medium">
              Servicii
            </a>
            <a href="#companie" className="text-white/60 hover:text-white transition-colors text-sm font-medium">
              Companie
            </a>
          </div>

          {/* CTA Button Far Right */}
          <button className="px-6 py-2.5 rounded-xl bg-white text-black text-sm font-bold hover:bg-white/90 transition-all">
            Sign up
          </button>
        </nav>

        {/* Page Content Container */}
        <div className="pt-64 flex flex-col items-center text-center px-4 max-w-6xl">
          {/* Nested Pill Badge */}
          <div className="flex items-center gap-4 px-1.5 py-1.5 pr-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-10 cursor-default group hover:bg-white/10 transition-all">
            <div className="px-5 py-2 rounded-full bg-white text-black text-[11px] font-black uppercase tracking-widest">
              Știință aplicată
            </div>
            <span className="text-white text-[13px] font-bold tracking-wide">
              Lanțuri de valoare
            </span>
          </div>

          {/* Tagline Badge */}
          <div className="mb-6 flex items-center gap-2.5 text-cyan-400 font-bold tracking-wider text-[11px] uppercase bg-cyan-400/10 px-4 py-1.5 rounded-full border border-cyan-400/20 backdrop-blur-sm shadow-[0_0_15px_rgba(34,211,238,0.1)]">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee]" />
            Trasabilitate. Făcută altfel.
          </div>

          {/* Main Content Section */}
          <div className="flex flex-col items-center mb-16 max-w-6xl">
            <SplitText
              text="IoT, inteligență artificială și mecanisme de încredere pentru date"
              className="text-white text-4xl md:text-7xl font-bold leading-tight tracking-tighter mb-12"
              delay={30}
              duration={1.25}
              ease="power3.out"
              splitType="words,chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              tag="h1"
            />
            
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mb-12 opacity-30" />
            
            <p className="text-white/70 text-xl md:text-2xl font-light leading-relaxed max-w-4xl px-6 tracking-wide">
              — ca bunurile critice din sănătate, industria auto și industria alimentară să rămână autentice, monitorizate și verificabile de la sursă la destinație.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button className="px-10 py-4 rounded-2xl bg-white text-black font-bold text-base hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]">
              Get started
            </button>
            <button className="px-10 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-semibold text-base hover:bg-white/10 transition-all backdrop-blur-md hover:scale-105 active:scale-95">
              Learn more
            </button>
          </div>
        </div>


        {/* Companie Section */}
        <section id="companie" className="w-full max-w-6xl px-4 py-32 mx-auto mt-20 border-t border-white/10 scroll-mt-24">
          <div className="flex flex-col md:flex-row gap-16">
            {/* Left Column */}
            <div className="flex-1">
              <h2 className="text-white text-4xl md:text-5xl font-bold tracking-tight mb-4">Companie</h2>
              <h3 className="text-cyan-400 text-xl md:text-2xl font-semibold mb-8">PUKU GLOBAL — R&D IT și software la cheie</h3>
              
              <div className="space-y-6 text-white/70 text-lg leading-relaxed">
                <p>
                  <strong className="text-white font-medium">Laborator în Corbeanca (Ilfov):</strong> prototipare, testare și integrare pentru date industriale și sisteme distribuite — din 2023.
                </p>
                <p>
                  Suntem un partener pentru digitalizare aplicată: integrare și dezvoltare de soluții software la cheie, cu extensie în IoT, date industriale și machine learning. Colaborăm cu organizații din sănătate, industrie, logistică și alimentar, utilități și alte domenii unde trasabilitatea și calitatea datelor contează — și nu numai.
                </p>
                <p>
                  Implementăm proiecte de complexitate ridicată — de la arhitectură și dezvoltare până la testare în laborator propriu și integrare la beneficiar, în România. Ne validăm expertiza prin livrări concrete și prin participarea la PNTS (Platforma Națională pentru Tehnologii Semiconductoare) și la proiecte cofinanțate din fonduri europene.
                </p>
              </div>
            </div>

            {/* Right Column / Highlights */}
            <div className="flex-1 space-y-8 mt-4 md:mt-0">
              {/* Tags */}
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/90 text-sm font-medium">2023</span>
                <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/90 text-sm font-medium">Laborator Ilfov</span>
                <span className="px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-sm font-medium shadow-[0_0_15px_rgba(34,211,238,0.1)]">Soluții la cheie</span>
              </div>

              {/* Badges */}
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all hover:bg-white/10">
                <div className="text-white/60 text-xs mb-3 font-bold tracking-widest uppercase">Fonduri europene · STEP · Acțiunea 4.1</div>
                <div className="text-white text-3xl font-bold tracking-tight">Chain Champion</div>
              </div>

              {/* Quote/Highlight */}
              <div className="p-8 rounded-3xl bg-gradient-to-br from-cyan-900/30 to-purple-900/20 border border-white/10 relative overflow-hidden transition-all hover:border-cyan-400/30">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-cyan-400"></div>
                <p className="text-white/90 text-lg font-medium leading-relaxed italic">
                  "Nu vindem doar „soft”: legăm senzorii de pe teren de o platformă care lasă urme clare — unde, când și în ce condiții a fost un bun expus, manipulat sau transportat. Asta e promisiunea noastră în lanțul de valoare."
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
