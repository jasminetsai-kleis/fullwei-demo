'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

const whyItems = [
  {
    numEn: '01',
    titleZh: '真實的工廠，不是簡報上的願景。',
    titleEn: 'A real factory, not a deck.',
    descZh:
      '屏東大慶智造工廠已正式啟用。你加入的是一條已在運轉的機器人焊接產線，不是 2030 年的路線圖。設備在那裡，資料在流動，挑戰是真實的。',
    descEn:
      'Our Pingtung Smart Factory is operational — not a 2030 roadmap. You will work with robotic welding cells, automated stamping lines, and MES systems that exist today. The equipment is real, the data is flowing, the challenges are genuine.',
  },
  {
    numEn: '02',
    titleZh: '穩定 + 速度，同時學到兩件事。',
    titleEn: 'Stability + Velocity.',
    descZh:
      'Honda 供應鏈要求六標準差的可靠性；智造廠轉型要求新創速度的迭代節奏。在富惟，你不必二選一——你會同時在這兩種壓力下淬煉。',
    descEn:
      "Honda's supply chain demands six-sigma reliability. Our smart factory transformation demands startup-speed iteration. At Fullwei, you don't choose one — you train under both.",
  },
  {
    numEn: '03',
    titleZh: '屏東，是特點，不是缺點。',
    titleEn: "Located in Pingtung.\nAnd that's a feature, not a bug.",
    descZh:
      '更低的生活成本、更快的職涯晉升速度、更近距離接觸你親手打造的工廠。我們提供搬遷補貼與前三個月住宿補助，讓你安心落腳。',
    descEn:
      'Lower cost of living, faster career trajectory, and proximity to the factory you help build. We provide a relocation allowance and three months of subsidized housing to help you settle in.',
  },
];

const teams = [
  {
    key: 'mfg-eng',
    nameZh: '製造工程',
    nameEn: 'Manufacturing Engineering',
    descZh: '製程設計、自動化導入、設備優化。讓工廠更快、更準、更省。',
    descEn: 'Process design, automation implementation, equipment optimization. Make the factory faster, more precise, more efficient.',
    openCount: 2,
  },
  {
    key: 'qa',
    nameZh: '品質保證',
    nameEn: 'Quality Assurance',
    descZh: 'SQE、IPQC、CMM 量測。品質不是檢驗出來的，是製程設計出來的。',
    descEn: 'SQE, IPQC, CMM measurement. Quality is not inspected in — it is designed in.',
    openCount: 2,
  },
  {
    key: 'rnd',
    nameZh: '研發',
    nameEn: 'R&D',
    descZh: '新產品開發、材料工程、模具設計。從圖面到量產的第一道關卡。',
    descEn: 'New product development, materials engineering, tooling design. The first gate from drawing to production.',
    openCount: 1,
  },
  {
    key: 'smart-mfg',
    nameZh: '智造團隊',
    nameEn: 'Smart Manufacturing',
    descZh: 'MES 系統、數據分析、自動化整合。讓工廠的每一個動作都可量測。',
    descEn: 'MES systems, data analytics, automation integration. Make every factory action measurable.',
    openCount: 3,
  },
  {
    key: 'ops',
    nameZh: '營運與供應鏈',
    nameEn: 'Operations & Supply Chain',
    descZh: '生產計劃、採購、物流協調。讓訂單準時、讓庫存健康。',
    descEn: 'Production planning, procurement, logistics. Keep orders on time and inventory healthy.',
    openCount: 1,
  },
  {
    key: 'corporate',
    nameZh: '企業職能',
    nameEn: 'Corporate',
    descZh: '財務、人資、IT。支撐整個組織高效運作的後台力量。',
    descEn: 'Finance, HR, IT. The operational backbone that keeps the organization running effectively.',
    openCount: 2,
  },
];

const positions = [
  {
    titleZh: '製程工程師',
    titleEn: 'Process Engineer',
    teamKey: 'mfg-eng',
    teamZh: '製造工程',
    teamEn: 'Manufacturing Engineering',
    locationZh: '桃園',
    locationEn: 'Taoyuan',
    levelZh: '3–5 年',
    levelEn: '3–5 yrs',
  },
  {
    titleZh: '自動化工程師',
    titleEn: 'Automation Engineer',
    teamKey: 'mfg-eng',
    teamZh: '製造工程',
    teamEn: 'Manufacturing Engineering',
    locationZh: '屏東',
    locationEn: 'Pingtung',
    levelZh: '2–5 年',
    levelEn: '2–5 yrs',
  },
  {
    titleZh: 'SQE 供應商品質工程師',
    titleEn: 'Supplier Quality Engineer',
    teamKey: 'qa',
    teamZh: '品質保證',
    teamEn: 'Quality Assurance',
    locationZh: '桃園',
    locationEn: 'Taoyuan',
    levelZh: '3–7 年',
    levelEn: '3–7 yrs',
  },
  {
    titleZh: 'IPQC 製程品質工程師',
    titleEn: 'In-Process Quality Engineer',
    teamKey: 'qa',
    teamZh: '品質保證',
    teamEn: 'Quality Assurance',
    locationZh: '屏東',
    locationEn: 'Pingtung',
    levelZh: '1–3 年',
    levelEn: '1–3 yrs',
  },
  {
    titleZh: '模具設計工程師',
    titleEn: 'Tooling Design Engineer',
    teamKey: 'rnd',
    teamZh: '研發',
    teamEn: 'R&D',
    locationZh: '桃園',
    locationEn: 'Taoyuan',
    levelZh: '3–6 年',
    levelEn: '3–6 yrs',
  },
  {
    titleZh: 'MES 系統工程師',
    titleEn: 'MES Systems Engineer',
    teamKey: 'smart-mfg',
    teamZh: '智造團隊',
    teamEn: 'Smart Manufacturing',
    locationZh: '屏東',
    locationEn: 'Pingtung',
    levelZh: '2–5 年',
    levelEn: '2–5 yrs',
  },
  {
    titleZh: '製造數據分析師',
    titleEn: 'Manufacturing Data Analyst',
    teamKey: 'smart-mfg',
    teamZh: '智造團隊',
    teamEn: 'Smart Manufacturing',
    locationZh: '屏東',
    locationEn: 'Pingtung',
    levelZh: '1–3 年',
    levelEn: '1–3 yrs',
  },
  {
    titleZh: '自動化整合工程師',
    titleEn: 'Automation Integration Engineer',
    teamKey: 'smart-mfg',
    teamZh: '智造團隊',
    teamEn: 'Smart Manufacturing',
    locationZh: '屏東',
    locationEn: 'Pingtung',
    levelZh: '3–7 年',
    levelEn: '3–7 yrs',
  },
  {
    titleZh: '生產計劃工程師',
    titleEn: 'Production Planner',
    teamKey: 'ops',
    teamZh: '營運與供應鏈',
    teamEn: 'Operations & Supply Chain',
    locationZh: '桃園',
    locationEn: 'Taoyuan',
    levelZh: '2–4 年',
    levelEn: '2–4 yrs',
  },
  {
    titleZh: '薪酬福利專員',
    titleEn: 'Compensation & Benefits Specialist',
    teamKey: 'corporate',
    teamZh: '企業職能',
    teamEn: 'Corporate',
    locationZh: '桃園',
    locationEn: 'Taoyuan',
    levelZh: '2–4 年',
    levelEn: '2–4 yrs',
  },
  {
    titleZh: 'IT 基礎建設工程師',
    titleEn: 'IT Infrastructure Engineer',
    teamKey: 'corporate',
    teamZh: '企業職能',
    teamEn: 'Corporate',
    locationZh: '桃園',
    locationEn: 'Taoyuan',
    levelZh: '2–4 年',
    levelEn: '2–4 yrs',
  },
];

const benefits = [
  {
    titleZh: '有競爭力的薪酬',
    titleEn: 'Competitive Compensation',
    descZh: '年度薪資調幅對齊製造業前三分之一。入職薪資範圍透明公開，不玩猜謎遊戲。',
    descEn: 'Annual salary adjustments benchmarked to the top third of the manufacturing sector. Entry salary ranges published openly.',
  },
  {
    titleZh: '搬遷支援',
    titleEn: 'Relocation Support',
    descZh: '從外縣市移居屏東或桃園，提供搬遷補貼與前三個月住宿補助。',
    descEn: 'Moving from another city? Relocation allowance plus three months of subsidized housing to help you settle in.',
  },
  {
    titleZh: '訓練與認證補助',
    titleEn: 'Training & Certification',
    descZh: '100% 覆蓋 IATF 相關訓練、日語課程、自動化技術認證全部費用。',
    descEn: '100% coverage of IATF-related training, Japanese language courses, and automation certification fees.',
  },
  {
    titleZh: '健康與退休保障',
    titleEn: 'Health & Retirement',
    descZh: '年度全身健康檢查、雇主退休金 6% 提撥、意外險與壽險加保。',
    descEn: 'Annual full-body health checkup, 6% employer pension contribution, supplemental accident and life insurance.',
  },
  {
    titleZh: '明確的職涯路徑',
    titleEn: 'Clear Career Path',
    descZh: '每年兩次正式績效與職涯發展面談。每位員工都有清楚的晉升路徑圖。',
    descEn: 'Two formal career development reviews per year. Every employee has a clear, written promotion roadmap.',
  },
  {
    titleZh: '彈性工作時間',
    titleEn: 'Flexible Hours',
    descZh: '核心工時 9:00–17:00，其餘一小時可彈性調整。不強制加班文化。',
    descEn: 'Core hours 9:00–17:00 with one flexible hour. No mandatory overtime culture.',
  },
];

const processSteps = [
  { num: '01', zh: '線上應徵',   en: 'Apply Online',           timeZh: '約 5 分鐘',                  timeEn: '~ 5 minutes'                },
  { num: '02', zh: '初步篩選',   en: 'Initial Screening',      timeZh: '5 個工作天內回覆',            timeEn: 'Within 5 business days'     },
  { num: '03', zh: '技術面試',   en: 'Technical Interview',    timeZh: '現場或遠端，約 90 分鐘',      timeEn: 'On-site or remote, ~90 min' },
  { num: '04', zh: '工廠參觀',   en: 'Factory Visit',          timeZh: '屏東大慶廠一日參訪',          timeEn: 'Full day at Pingtung factory'},
  { num: '05', zh: '正式 Offer', en: 'Offer',                  timeZh: '最終面試後 2 週內',            timeEn: 'Within 2 weeks of final interview' },
];

export default function CareersContent() {
  const { lang } = useLanguage();
  const isZh = lang === 'zh';
  const [activeTeam, setActiveTeam] = useState('all');

  const filtered = activeTeam === 'all'
    ? positions
    : positions.filter((p) => p.teamKey === activeTeam);

  return (
    <>
      {/* ── 1. Hero ── */}
      <section className="bg-[#1A1A1A] py-32 lg:py-48">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <p className="mb-10 font-mono text-xs tracking-[0.2em] text-[#064d8f]">
            {isZh ? '加入我們' : 'CAREERS'}
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white lg:text-6xl xl:text-[72px]">
            {isZh ? (
              <>
                打造下一代<br />
                精密製造的，<br />
                <span className="text-[#C8102E]">是你。</span>
              </>
            ) : (
              <>
                Build the next generation<br />
                of precision{' '}
                <span className="text-[#C8102E]">manufacturing.</span>
              </>
            )}
          </h1>
          <p className="mt-8 max-w-xl whitespace-pre-line text-base leading-relaxed text-[#767676] lg:text-lg">
            {isZh
              ? '我們是一家 60 歲的公司，正在建造一座全新的工廠。\n這個矛盾，就是機會所在。'
              : "We're a 60-year-old company building a brand-new factory.\nThat contradiction is the opportunity."}
          </p>
          <a
            href="#positions"
            className="mt-10 inline-flex items-center gap-2 border border-[#064d8f] px-7 py-3.5 text-sm font-semibold text-[#064d8f] transition-all hover:bg-[#064d8f] hover:text-white"
          >
            {isZh ? '查看開放職缺' : 'View Open Positions'}
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M6 2v8M2 7l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </section>

      {/* ── 2. Why Fullwei ── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <p className="mb-3 font-mono text-xs tracking-[0.2em] text-[#064d8f]">
            {isZh ? '為什麼選擇富惟' : 'WHY FULLWEI'}
          </p>
          <h2 className="mb-16 text-3xl font-bold text-black lg:text-4xl">
            {isZh ? '不一樣的選擇理由' : 'A Different Kind of Reason'}
          </h2>
          <div className="grid gap-px bg-[#E8E4DC] lg:grid-cols-3">
            {whyItems.map((item) => (
              <div key={item.numEn} className="bg-white p-8 lg:p-10">
                <p className="mb-4 font-mono text-xs text-[#064d8f]">{item.numEn}</p>
                <h3 className="mb-4 whitespace-pre-line text-lg font-bold leading-snug text-black">
                  {isZh ? item.titleZh : item.titleEn}
                </h3>
                <p className="text-sm leading-relaxed text-[#767676]">
                  {isZh ? item.descZh : item.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Teams ── */}
      <section className="bg-[#F5F3EE] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <p className="mb-3 font-mono text-xs tracking-[0.2em] text-[#064d8f]">
            {isZh ? '團隊' : 'TEAMS'}
          </p>
          <h2 className="mb-16 text-3xl font-bold text-black lg:text-4xl">
            {isZh ? '找到你的位置' : 'Find Your Place'}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teams.map((team) => (
              <div key={team.key} className="border border-[#E8E4DC] bg-white p-6 transition-shadow hover:shadow-md">
                <div className="mb-3 flex items-start justify-between">
                  <h3 className="font-semibold text-black">
                    {isZh ? team.nameZh : team.nameEn}
                  </h3>
                  <span className="ml-3 shrink-0 rounded-full bg-[#064d8f]/10 px-2 py-0.5 font-mono text-xs text-[#064d8f]">
                    {team.openCount} {isZh ? '個職缺' : 'open'}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-[#767676]">
                  {isZh ? team.descZh : team.descEn}
                </p>
                <button
                  onClick={() => {
                    setActiveTeam(team.key);
                    document.getElementById('positions')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="mt-4 text-xs font-medium text-[#064d8f] transition-colors hover:text-[#0a5fa8]"
                >
                  {isZh ? '查看此團隊職缺 →' : 'View roles →'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Open Positions ── */}
      <section id="positions" className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <p className="mb-3 font-mono text-xs tracking-[0.2em] text-[#064d8f]">
            {isZh ? '開放職缺' : 'OPEN POSITIONS'}
          </p>
          <h2 className="mb-10 text-3xl font-bold text-black lg:text-4xl">
            {isZh ? '目前徵才中' : 'Currently Hiring'}
          </h2>

          {/* Filter tabs */}
          <div className="mb-8 flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTeam('all')}
              className={`px-4 py-1.5 text-sm font-medium transition-colors ${
                activeTeam === 'all'
                  ? 'bg-[#064d8f] text-white'
                  : 'border border-[#E8E4DC] text-[#767676] hover:border-[#064d8f] hover:text-[#064d8f]'
              }`}
            >
              {isZh ? '全部' : 'All'} ({positions.length})
            </button>
            {teams.map((team) => (
              <button
                key={team.key}
                onClick={() => setActiveTeam(team.key)}
                className={`px-4 py-1.5 text-sm font-medium transition-colors ${
                  activeTeam === team.key
                    ? 'bg-[#064d8f] text-white'
                    : 'border border-[#E8E4DC] text-[#767676] hover:border-[#064d8f] hover:text-[#064d8f]'
                }`}
              >
                {isZh ? team.nameZh : team.nameEn} ({team.openCount})
              </button>
            ))}
          </div>

          {/* Positions list */}
          <div className="divide-y divide-[#E8E4DC]">
            {filtered.map((pos) => (
              <div
                key={`${pos.teamKey}-${pos.titleEn}`}
                className="flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h3 className="font-semibold text-black">
                    {isZh ? pos.titleZh : pos.titleEn}
                  </h3>
                  <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span className="text-xs text-[#767676]">
                      {isZh ? pos.teamZh : pos.teamEn}
                    </span>
                    <span className="text-[#D4CFC8]">·</span>
                    <span className="text-xs text-[#767676]">
                      {isZh ? pos.locationZh : pos.locationEn}
                    </span>
                    <span className="text-[#D4CFC8]">·</span>
                    <span className="text-xs text-[#767676]">
                      {isZh ? pos.levelZh : pos.levelEn}
                    </span>
                  </div>
                </div>
                <a
                  href="#"
                  className="shrink-0 border border-[#064d8f] px-5 py-2 text-xs font-medium text-[#064d8f] transition-all hover:bg-[#064d8f] hover:text-white"
                >
                  {isZh ? '應徵' : 'Apply'}
                </a>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="py-10 text-center text-sm text-[#767676]">
              {isZh ? '此分類目前無開放職缺。' : 'No open positions in this category at this time.'}
            </p>
          )}
        </div>
      </section>

      {/* ── 5. Benefits ── */}
      <section className="bg-[#F5F3EE] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <p className="mb-3 font-mono text-xs tracking-[0.2em] text-[#064d8f]">
            {isZh ? '福利與發展' : 'BENEFITS & GROWTH'}
          </p>
          <h2 className="mb-16 text-3xl font-bold text-black lg:text-4xl">
            {isZh ? '我們承諾的事' : 'What We Commit To'}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <div key={b.titleEn} className="border border-[#E8E4DC] bg-white p-6">
                <h3 className="mb-3 font-semibold text-black">
                  {isZh ? b.titleZh : b.titleEn}
                </h3>
                <p className="text-sm leading-relaxed text-[#767676]">
                  {isZh ? b.descZh : b.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Application Process ── */}
      <section className="bg-[#1A1A1A] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <p className="mb-3 font-mono text-xs tracking-[0.2em] text-[#064d8f]">
            {isZh ? '應徵流程' : 'APPLICATION PROCESS'}
          </p>
          <h2 className="mb-16 max-w-lg text-3xl font-bold text-white lg:text-4xl">
            {isZh
              ? '透明的流程，是我們的第一個承諾。'
              : 'Transparency is our first promise.'}
          </h2>

          <div className="grid gap-0 divide-y divide-white/10 lg:grid-cols-5 lg:divide-x lg:divide-y-0">
            {processSteps.map((step) => (
              <div key={step.num} className="py-8 lg:px-6 lg:py-0 lg:first:pl-0 lg:last:pr-0">
                <p className="mb-3 font-mono text-xs text-[#064d8f]">{step.num}</p>
                <h3 className="mb-2 font-semibold text-white">
                  {isZh ? step.zh : step.en}
                </h3>
                <p className="text-xs leading-relaxed text-[#767676]">
                  {isZh ? step.timeZh : step.timeEn}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 border-t border-white/10 pt-12">
            <p className="mb-6 max-w-lg text-sm leading-relaxed text-[#767676]">
              {isZh
                ? '對職缺有任何疑問，歡迎直接聯絡人資團隊。我們保證在 3 個工作天內回覆每一封信。'
                : 'Have questions about a role? Contact our HR team directly. We reply to every inquiry within 3 business days.'}
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#positions"
                className="inline-flex items-center gap-2 bg-[#064d8f] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#0a5fa8]"
              >
                {isZh ? '瀏覽開放職缺' : 'Browse Open Positions'}
              </a>
              <a
                href="mailto:hr@fullwei.com"
                className="inline-flex items-center gap-2 border border-white/20 px-7 py-3.5 text-sm font-semibold text-[#F5F3EE] transition-colors hover:border-white"
              >
                hr@fullwei.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
