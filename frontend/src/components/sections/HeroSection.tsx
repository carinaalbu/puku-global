import React from 'react';
import SplitText from '@/components/SplitText.jsx';

const HeroSection: React.FC = () => {
  return (
    <div className="pt-48 flex flex-col items-center text-center px-4 max-w-6xl">
      {/* Nested Pill Badge */}
      <div className="flex items-center gap-5 px-2 py-2 pr-8 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-10 cursor-default group hover:bg-white/10 transition-all">
        <div className="px-6 py-2.5 rounded-full bg-white text-black text-xs font-black uppercase tracking-widest">
          Știință aplicată
        </div>
        <span className="text-white text-sm font-bold tracking-wide">
          Lanțuri de valoare
        </span>
      </div>

      {/* Tagline Badge */}
      <div className="mb-6 flex items-center gap-2.5 text-white-400 font-bold tracking-wider text-[20px] uppercase bg-cyan-400/10 px-4 py-1.5 rounded-full border border-cyan-400/20 backdrop-blur-sm shadow-[0_0_15px_rgba(34,211,238,0.1)]">
        <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee]" />
        Trasabilitate. Făcută altfel.
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col items-center mb-16 max-w-6xl">
        <SplitText
          text="IoT, inteligență artificială și mecanisme de încredere pentru date"
          className="text-white text-3xl md:text-6xl font-bold leading-tight tracking-tighter mb-12"
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
        
        <p className="text-white/100 text-xl md:text-2xl font-light leading-relaxed max-w-4xl px-6 tracking-wide">
          ca bunurile critice din sănătate, industria auto și industria alimentară să rămână autentice, monitorizate și verificabile de la sursă la destinație.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
