import React, { useState } from 'react';

const ProjectSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="w-full max-w-6xl px-4 pb-32 mx-auto border-t border-white/10 pt-20">
      <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-16 backdrop-blur-sm transition-all hover:bg-white/[0.07]">
        <div className="flex items-center gap-3 mb-8">
          <button 
            onClick={() => setActiveTab(0)} 
            className={`px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-xs font-bold uppercase tracking-widest transition-colors ${activeTab === 0 ? 'text-cyan-400' : 'text-cyan-400/50 hover:text-cyan-400/80'}`}
          >
            Proiect mamă
          </button>
          <span className="text-white/30">·</span>
          <button 
            onClick={() => setActiveTab(1)} 
            className={`text-xs font-medium tracking-widest uppercase transition-colors ${activeTab === 1 ? 'text-white font-bold' : 'text-white/40 hover:text-white/70'}`}
          >
            Date Proiect
          </button>
        </div>

        {activeTab === 0 && (
          <>
            <h2 className="text-white text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight max-w-4xl">
              Platformă Națională pentru Tehnologiile Semiconductorilor
            </h2>
            
            <a href="https://research4industry.ro" target="_blank" rel="noopener noreferrer" className="inline-block text-cyan-400 hover:text-cyan-300 text-lg md:text-xl font-medium mb-12 transition-colors border-b border-cyan-400/30 hover:border-cyan-300 pb-1">
              research4industry.ro
            </a>
            
            <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed max-w-4xl">
              <strong className="text-white font-medium">ChainChampion</strong> e linia noastră de lucru în ecosistemul PNTS — acolo unde semiconductorii și senzorii întâlnesc software-ul care le dă voce.
            </p>
          </>
        )}

        {activeTab === 1 && (
          <>
            <div className="flex flex-col gap-6">
              <div className="space-y-5">
                <div>
                  <h4 className="text-white/70 text-sm uppercase tracking-wider mb-2 font-semibold">Axă prioritară</h4>
                  <p className="text-white text-lg leading-relaxed">Cercetare, dezvoltare tehnologică și inovare (CDI) în sprijinul competitivității economice și dezvoltării afacerilor</p>
                </div>
                
                <div>
                  <h4 className="text-white/70 text-sm uppercase tracking-wider mb-2 font-semibold">Prioritate de investiții</h4>
                  <p className="text-white text-lg leading-relaxed">Prioritatea 4. Dezvoltarea de tehnologii strategice pentru Europa — STEP</p>
                </div>
                
                <div>
                  <h4 className="text-white/70 text-sm uppercase tracking-wider mb-2 font-semibold">Acțiune</h4>
                  <p className="text-white text-lg leading-relaxed">Sprijin pentru dezvoltarea de tehnologii strategice pentru Europa — STEP, în cadrul Acțiunii 4.1</p>
                </div>
                
                <div className="pt-2">
                  <h4 className="text-white/70 text-xs uppercase tracking-wider mb-3 font-semibold">Tehnologii</h4>
                  <div className="flex flex-wrap gap-2.5">
                    <span className="px-4 py-1.5 rounded-full bg-white text-black text-xs font-bold uppercase tracking-wide">PNTS</span>
                    <span className="px-4 py-1.5 rounded-full bg-white text-black text-xs font-bold uppercase tracking-wide">IoT</span>
                    <span className="px-4 py-1.5 rounded-full bg-white text-black text-xs font-bold uppercase tracking-wide">Machine learning</span>
                    <span className="px-4 py-1.5 rounded-full bg-white text-black text-xs font-bold uppercase tracking-wide">Încredere în date</span>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default ProjectSection;
