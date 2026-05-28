'use client';

import { useLanguage } from '@/context/LanguageContext';
import t from '@/i18n/translations';

export default function SmartFactory() {
  const { lang } = useLanguage();
  const s = t[lang].smartFactory;

  return (
    <section id="smart-factory" className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-24">
          {/* Factory floor SVG */}
          <div className="relative aspect-square max-w-lg lg:max-w-none">
            <div className="absolute inset-0 bg-[#F5F3EE]" />
            <svg viewBox="0 0 480 480" className="relative h-full w-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="factory-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#E8E4DC" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="480" height="480" fill="url(#factory-grid)" />
              <rect x="40" y="40" width="400" height="400" fill="none" stroke="#E8E4DC" strokeWidth="1" />
              <line x1="40" y1="200" x2="440" y2="200" stroke="#E8E4DC" strokeWidth="8" />
              <line x1="40" y1="280" x2="440" y2="280" stroke="#E8E4DC" strokeWidth="8" />
              {[80,160,240,320,400].map((x,i) => (
                <g key={i}>
                  <polygon points={`${x-8},196 ${x+8},200 ${x-8},204`} fill="#CCCCCC" />
                  <polygon points={`${x+8},276 ${x-8},280 ${x+8},284`} fill="#CCCCCC" />
                </g>
              ))}
              {[
                { x:80,  y:80,  label:'STAMP' },
                { x:200, y:80,  label:'WELD'  },
                { x:320, y:80,  label:'BEND'  },
                { x:80,  y:320, label:'CMM'   },
                { x:200, y:320, label:'CLEAN' },
                { x:320, y:320, label:'PACK'  },
              ].map((st) => (
                <g key={st.label}>
                  <rect x={st.x-44} y={st.y-44} width="88" height="88" fill="white" stroke="#E8E4DC" strokeWidth="1" />
                  <circle cx={st.x} cy={st.y-8} r="20" fill="none" stroke="#E8E4DC" strokeWidth="0.5" />
                  <circle cx={st.x} cy={st.y-8} r="4" fill="#E8E4DC" />
                  <text x={st.x} y={st.y+24} textAnchor="middle" fill="#767676" fontSize="7" fontFamily="monospace" letterSpacing="0.1em">{st.label}</text>
                </g>
              ))}
              <rect x={156} y={36} width="88" height="88" fill="none" stroke="#064d8f" strokeWidth="1" opacity="0.5" />
              <g transform="translate(200, 80)">
                <line x1="0" y1="-8"  x2="0"  y2="-30" stroke="#064d8f" strokeWidth="1.5" />
                <line x1="0" y1="-30" x2="20" y2="-50" stroke="#064d8f" strokeWidth="1.5" />
                <circle cx="20" cy="-50" r="3" fill="#C8102E" className="animate-pulse-dot" />
              </g>
              <line x1="440" y1="40" x2="440" y2="440" stroke="#E8E4DC" strokeWidth="0.5" strokeDasharray="3 4" />
              <text x="455" y="240" fill="#767676" fontSize="7" fontFamily="monospace" transform="rotate(90,455,240)">MES · REAL-TIME DATA</text>
              <text x="48" y="456" fill="#767676" fontSize="8" fontFamily="monospace">{s.svgLabel}</text>
            </svg>
          </div>

          {/* Story */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-[#064d8f]" />
              <span className="font-mono text-xs tracking-[0.2em] text-[#064d8f]">{s.eyebrow}</span>
            </div>

            <h2 className="mb-6 text-4xl font-bold leading-tight text-black lg:text-5xl">
              {s.h2a}
              <br />
              {s.h2b}
              {s.h2c && (
                <>
                  <br />
                  <span className="text-[#767676]">{s.h2c}</span>
                </>
              )}
            </h2>

            <div className="space-y-4 text-sm leading-relaxed text-[#767676]">
              <p>{s.p1}</p>
              <p>{s.p2}</p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-px bg-[#E8E4DC]">
              {s.metrics.map((m) => (
                <div key={m.label} className="bg-[#F5F3EE] p-5">
                  <div className="text-xl font-bold text-black">{m.value}</div>
                  <div className="mt-1 text-xs text-[#767676]">{m.label}</div>
                </div>
              ))}
            </div>

            <a href="#" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#064d8f] hover:text-[#0a5fa8]">
              {s.cta}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
