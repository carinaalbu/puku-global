import React from 'react';

const CompanySection: React.FC = () => {
  return (
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
  );
};

export default CompanySection;
