'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import t from '@/i18n/translations';
import {
  REGIONS,
  LOCATIONS,
  POS,
  VIEW_W,
  VIEW_H,
  FULL_BOX,
  regionBox,
  type Box,
  type RegionId,
} from '@/data/footprintLocations';

const VN_SITE = 'https://vn.fullwei.com';

// 標記配色 — 為了在深色底圖上保有可視度，採用比海岸線更亮的鋼藍與較鮮明的紅
const HQ_COLOR = '#ff4d63';
const ACCENT = '#5cb0f5';

type Filter = 'all' | RegionId;

function arcPath(ax: number, ay: number, bx: number, by: number) {
  const mx = (ax + bx) / 2;
  const my = (ay + by) / 2;
  const dx = bx - ax;
  const dy = by - ay;
  const dist = Math.sqrt(dx * dx + dy * dy) || 1;
  const lift = Math.min(dist * 0.18, 170);
  const nx = -dy / dist;
  const ny = dx / dist;
  return `M ${ax} ${ay} Q ${mx + nx * lift} ${my + ny * lift} ${bx} ${by}`;
}

export default function FootprintMap() {
  const { lang } = useLanguage();
  const f = t[lang].footprint;
  const m = f.map;
  const vnHref = `${VN_SITE}/${lang}`;

  const [filter, setFilter] = useState<Filter>('all');
  const [selectedId, setSelectedId] = useState<string>('tw-hq');
  const [hoverId, setHoverId] = useState<string | null>(null);
  const [box, setBox] = useState<Box>(FULL_BOX);

  function applyFilter(next: Filter) {
    setFilter(next);
    setBox(next === 'all' ? FULL_BOX : regionBox(LOCATIONS.filter((l) => l.region === next).map((l) => l.id)));
  }

  function selectLocation(id: string) {
    setSelectedId(id);
    const loc = LOCATIONS.find((l) => l.id === id);
    if (loc && filter !== 'all' && filter !== loc.region) applyFilter(loc.region);
  }

  // CSS-transform zoom (rAF-independent, transitions smoothly)
  const s = VIEW_W / box.w;
  const tx = -s * box.x;
  const ty = -s * box.y;
  const k = box.w / VIEW_W; // counter-scale factor to keep markers screen-constant

  const selected = LOCATIONS.find((l) => l.id === selectedId)!;
  const selectedRegion = REGIONS.find((r) => r.id === selected.region)!;
  const hq = POS['tw-hq'];

  const regionLabels = REGIONS.map((r) => {
    const ids = LOCATIONS.filter((l) => l.region === r.id).map((l) => l.id);
    const xs = ids.map((id) => POS[id].x);
    const ys = ids.map((id) => POS[id].y);
    return {
      id: r.id,
      code: r.code,
      name: r.name[lang],
      x: xs.reduce((a, b) => a + b, 0) / xs.length,
      y: Math.min(...ys) - 48,
    };
  });

  const chips: { id: Filter; label: string; n: number }[] = [
    { id: 'all', label: m.filterAll, n: LOCATIONS.length },
    ...REGIONS.map((r) => ({
      id: r.id as Filter,
      label: r.name[lang],
      n: LOCATIONS.filter((l) => l.region === r.id).length,
    })),
  ];

  const groupedRegions = filter === 'all' ? REGIONS : REGIONS.filter((r) => r.id === filter);

  return (
    <div className="grid gap-px overflow-hidden border border-[#E8E4DC] bg-[#E8E4DC] lg:grid-cols-[1.55fr_1fr]">
      {/* ── Map panel ── */}
      <div className="flex flex-col bg-[#0a1730]">
        {/* Filter chips */}
        <div className="flex flex-wrap items-center gap-2 border-b border-white/10 p-4">
          {chips.map((c) => (
            <button
              key={c.id}
              onClick={() => applyFilter(c.id)}
              className={`inline-flex items-center gap-1.5 border px-3 py-1.5 text-xs font-medium transition-colors duration-200 ${
                filter === c.id
                  ? 'border-[#5cb0f5] bg-[#5cb0f5] text-[#0a1730]'
                  : 'border-white/20 text-[#9fb4cc] hover:border-[#5cb0f5] hover:text-white'
              }`}
            >
              {c.label}
              <span className="font-mono text-[10px] opacity-70">{c.n}</span>
            </button>
          ))}
          {filter !== 'all' && (
            <button
              onClick={() => applyFilter('all')}
              className="ml-auto inline-flex items-center gap-1 text-xs text-[#9fb4cc] transition-colors hover:text-white"
            >
              ↺ {m.reset}
            </button>
          )}
        </div>

        {/* SVG map */}
        <div className="relative">
          <svg
            viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
            className="block aspect-[3/2] w-full"
            role="group"
            aria-label={m.ariaMap}
          >
            <g
              style={{
                transform: `translate(${tx}px, ${ty}px) scale(${s})`,
                transformOrigin: '0px 0px',
                transformBox: 'view-box',
                transition: 'transform 0.65s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              {/* base map image */}
              <image
                href="/global-footprint-map.png"
                x={0}
                y={0}
                width={VIEW_W}
                height={VIEW_H}
                preserveAspectRatio="xMidYMid slice"
              />

              {/* connection arcs from HQ */}
              <g fill="none" stroke={ACCENT} strokeWidth={1.6}>
                {LOCATIONS.filter((l) => l.id !== 'tw-hq').map((l) => {
                  const p = POS[l.id];
                  const dim = filter !== 'all' && filter !== l.region;
                  return (
                    <path
                      key={l.id}
                      d={arcPath(hq.x, hq.y, p.x, p.y)}
                      vectorEffect="non-scaling-stroke"
                      strokeDasharray="2 6"
                      opacity={dim ? 0.12 : 0.55}
                    />
                  );
                })}
              </g>

              {/* region labels */}
              <g>
                {regionLabels.map((r) => {
                  const dim = filter !== 'all' && filter !== r.id;
                  return (
                    <text
                      key={r.id}
                      x={r.x}
                      y={r.y}
                      textAnchor="middle"
                      fontSize={30 * k}
                      fontWeight={700}
                      letterSpacing={3 * k}
                      fill="#bcd4ee"
                      stroke="#0a1730"
                      strokeWidth={4 * k}
                      paintOrder="stroke"
                      opacity={dim ? 0.3 : 0.95}
                      style={{ textTransform: 'uppercase' }}
                    >
                      {r.code} · {r.name}
                    </text>
                  );
                })}
              </g>

              {/* pins */}
              <g>
                {LOCATIONS.map((l) => {
                  const p = POS[l.id];
                  const isSel = l.id === selectedId;
                  const isHover = l.id === hoverId;
                  const dim = filter !== 'all' && filter !== l.region;
                  const color = l.kind === 'hq' ? HQ_COLOR : ACCENT;
                  const r = (l.kind === 'hq' ? 15 : 12) * k;
                  return (
                    <g
                      key={l.id}
                      transform={`translate(${p.x} ${p.y})`}
                      opacity={dim ? 0.3 : 1}
                      style={{ cursor: 'pointer' }}
                      onClick={() => selectLocation(l.id)}
                      onMouseEnter={() => setHoverId(l.id)}
                      onMouseLeave={() => setHoverId((h) => (h === l.id ? null : h))}
                      tabIndex={0}
                      role="button"
                      aria-label={`${l.city[lang]} — ${l.name[lang]}`}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          selectLocation(l.id);
                        }
                      }}
                    >
                      {/* soft glow so markers lift off the busy map */}
                      <circle r={r * 1.7} fill={color} opacity={0.22} />
                      {(isSel || isHover) && (
                        <circle r={r * 2.6} fill="none" stroke={color} strokeWidth={1.5} vectorEffect="non-scaling-stroke" opacity={0.6}>
                          {isSel && (
                            <animate attributeName="r" values={`${r * 1.9};${r * 3};${r * 1.9}`} dur="2.2s" repeatCount="indefinite" />
                          )}
                        </circle>
                      )}
                      {l.kind === 'office' ? (
                        <circle r={r} fill="#0a1730" stroke={color} strokeWidth={3 * k} />
                      ) : (
                        <circle r={r} fill={color} stroke="#0a1730" strokeWidth={2 * k} />
                      )}
                      {l.kind === 'hq' && <circle r={r * 0.42} fill="#fff" />}
                      {(isSel || isHover) && (
                        <text
                          x={0}
                          y={-r - 11 * k}
                          textAnchor="middle"
                          fontSize={25 * k}
                          fontWeight={600}
                          fill="#f3f6fa"
                          stroke="#0a1730"
                          strokeWidth={4.5 * k}
                          paintOrder="stroke"
                          style={{ pointerEvents: 'none' }}
                        >
                          {l.city[lang]}
                        </text>
                      )}
                    </g>
                  );
                })}
              </g>
            </g>
          </svg>

          {/* legend */}
          <div className="pointer-events-none absolute bottom-3 left-4 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-[#bcd4ee]">
            <span className="flex items-center gap-1.5"><span className="inline-block h-2.5 w-2.5 rounded-full" style={{ backgroundColor: HQ_COLOR }} />{m.legendHq}</span>
            <span className="flex items-center gap-1.5"><span className="inline-block h-2.5 w-2.5 rounded-full" style={{ backgroundColor: ACCENT }} />{m.legendPlant}</span>
            <span className="flex items-center gap-1.5"><span className="inline-block h-2.5 w-2.5 rounded-full border-2 bg-transparent" style={{ borderColor: ACCENT }} />{m.legendOffice}</span>
          </div>
        </div>
      </div>

      {/* ── Detail + list panel ── */}
      <div className="flex flex-col bg-white">
        {/* Selected detail */}
        <div className="border-b border-[#E8E4DC] p-6">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="inline-block bg-[#0a1730] px-2.5 py-1 font-mono text-[10px] tracking-wider text-white">
              {selectedRegion.code} · {selectedRegion.name[lang]}
            </span>
            <span className="inline-block border border-[#064d8f]/25 px-2.5 py-1 text-[11px] text-[#064d8f]">
              {selected.role[lang]}
            </span>
          </div>
          <h4 className="mb-1 text-lg font-bold leading-snug text-black">{selected.name[lang]}</h4>
          <p className="mb-4 text-sm text-[#767676]">{selected.city[lang]}</p>

          <dl className="space-y-3 text-sm">
            <div>
              <dt className="mb-0.5 font-mono text-[10px] uppercase tracking-wider text-[#767676]">{m.focusLabel}</dt>
              <dd className="text-black">{selectedRegion.focus[lang]}</dd>
            </div>
            <div>
              <dt className="mb-0.5 font-mono text-[10px] uppercase tracking-wider text-[#767676]">{m.addressLabel}</dt>
              <dd className="leading-relaxed text-black">{selected.address[lang]}</dd>
            </div>
            <div>
              <dt className="mb-0.5 font-mono text-[10px] uppercase tracking-wider text-[#767676]">{m.telLabel}</dt>
              <dd className="font-mono text-black">{selected.tel}</dd>
            </div>
          </dl>

          {selected.region === 'vn' && (
            <a
              href={vnHref}
              className="mt-5 inline-flex items-center gap-2 border border-[#064d8f] px-4 py-2 text-xs font-medium text-[#064d8f] transition-all duration-200 hover:bg-[#064d8f] hover:text-white"
            >
              {m.vnSite}
              <span aria-hidden>↗</span>
            </a>
          )}
        </div>

        {/* Location list */}
        <div className="max-h-[360px] overflow-y-auto p-2">
          {groupedRegions.map((r) => {
            const locs = LOCATIONS.filter((l) => l.region === r.id);
            return (
              <div key={r.id} className="mb-1">
                <p className="px-3 pb-1 pt-3 font-mono text-[10px] uppercase tracking-wider text-[#9aa0a6]">
                  {r.code} · {r.name[lang]} · {r.focus[lang]}
                </p>
                {locs.map((l) => (
                  <button
                    key={l.id}
                    onClick={() => selectLocation(l.id)}
                    onMouseEnter={() => setHoverId(l.id)}
                    onMouseLeave={() => setHoverId((h) => (h === l.id ? null : h))}
                    className={`flex w-full items-start gap-3 px-3 py-2.5 text-left transition-colors ${
                      l.id === selectedId ? 'bg-[#F5F3EE]' : 'hover:bg-[#F8F6F2]'
                    }`}
                  >
                    <span
                      className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full"
                      style={{
                        backgroundColor: l.kind === 'office' ? 'transparent' : l.kind === 'hq' ? '#C8102E' : '#064d8f',
                        border: l.kind === 'office' ? '2px solid #064d8f' : undefined,
                      }}
                    />
                    <span className="min-w-0">
                      <span className="block text-sm font-medium text-black">{l.city[lang]}</span>
                      <span className="block truncate text-xs text-[#767676]">{l.name[lang]}</span>
                    </span>
                  </button>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
