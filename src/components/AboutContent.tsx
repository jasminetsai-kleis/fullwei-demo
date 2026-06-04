'use client';

import { useLanguage } from '@/context/LanguageContext';
import CompanyProfile from '@/components/CompanyProfile';
import FootprintMap from '@/components/FootprintMap';

// 沿革時間軸 — 中英雙語；年份未經富惟核實者以〔待確認〕標示，避免 overclaim。
const timeline = [
  {
    id: 'founded',
    yearZh: '1964',
    yearEn: '1964',
    titleZh: '創立，從機車零件起家',
    titleEn: 'Founded',
    descZh: '從機車零件起家，奠定金屬沖壓工藝根基。〔起家地點：三重／桃園 待確認〕',
    descEn: 'Began with motorcycle parts, laying the groundwork for precision metal stamping. [Founding location: Sanchung / Taoyuan — TBC]',
  },
  {
    id: 'honda',
    yearZh: '〔待確認〕',
    yearEn: 'TBC',
    titleZh: '與 Honda 供應鏈展開合作',
    titleEn: 'First Honda Partnership',
    descZh: '正式進入 Honda 供應鏈，開啟長期深度合作關係。',
    descEn: "Entered Honda's supply chain, beginning a long-term partnership.",
  },
  {
    id: 'foshan',
    yearZh: '〔待確認〕',
    yearEn: 'TBC',
    titleZh: '佛山據點成立',
    titleEn: 'Foshan Facility',
    descZh: '於廣東佛山設立生產基地，跟隨 Honda 全球佈局深化。',
    descEn: "Established a production base in Foshan, Guangdong, following Honda's global expansion.",
  },
  {
    id: 'jv',
    yearZh: '〔待確認〕',
    yearEn: 'TBC',
    titleZh: '與豐技研合資成立丰富汽配',
    titleEn: 'JV with Yutaka Giken',
    descZh: '與豐技研（Yutaka Giken）合資成立丰富汽配，專供廣州本田關鍵排氣系統。',
    descEn: 'Established Fengfu Auto Parts in a joint venture with Yutaka Giken, supplying critical exhaust systems to Guangzhou Honda.',
  },
  {
    id: 'vietnam',
    yearZh: '〔待確認〕',
    yearEn: 'TBC',
    titleZh: '越南設立子公司（3 家）',
    titleEn: 'Vietnam Subsidiaries',
    descZh: '於越南設立 3 家子公司，以機車為主、兼做汽車，產品線與台灣不完全相同。',
    descEn: 'Established three subsidiaries in Vietnam — motorcycle-led and also serving automotive, a product line that differs from Taiwan.',
  },
  {
    id: 'smart-factory',
    yearZh: '2019',
    yearEn: '2019',
    titleZh: '投資 5 億，啟動屏東大慶智造工廠',
    titleEn: 'NT$500M Smart Factory',
    descZh: '投入 NT$500M 於屏東大慶工業區，啟動全自動化智慧工廠計畫。',
    descEn: 'Committed NT$500M to build a fully automated smart factory in Pingtung Dakeng Industrial Park.',
  },
  {
    id: 'phase1',
    yearZh: '2025',
    yearEn: '2025',
    titleZh: '智造工廠一期啟用',
    titleEn: 'Smart Factory Phase 1 Online',
    descZh: '屏東大慶智造工廠一期啟用，機器人焊接與自動化沖壓產線全面投產。',
    descEn: 'Pingtung Smart Factory Phase 1 operational — robotic welding cells and automated stamping lines fully commissioned.',
  },
];

const leaders = [
  {
    initial: 'C',
    nameZh: '張子建',
    nameEn: 'Chang Tzu-Chien',
    titleZh: '董事長',
    titleEn: 'Chairman',
    quoteZh: '六十年來，我們沒有追逐潮流。我們選擇深耕一件事——做到比任何人都扎實。',
    quoteEn: 'For sixty years, we have not chased trends. We chose to master one thing — and do it better than anyone else.',
  },
  {
    initial: 'H',
    nameZh: '張明宏',
    nameEn: 'Chang Ming-Hung',
    titleZh: '總經理',
    titleEn: 'General Manager',
    quoteZh: '智造工廠不是為了炫技，是為了讓下一個六十年的品質承諾更可信。',
    quoteEn: 'The smart factory is not about technology for its own sake. It is about making our quality promise more credible for the next sixty years.',
  },
];

const values = [
  {
    en: 'We choose depth\nover breadth.',
    zh: '我們選擇深度，\n而非廣度。',
    descEn: 'We are not a general-purpose parts shop. For sixty years, we have focused on three disciplines — stamping, welding, tube processing — and refined each to a level few suppliers can match.',
    descZh: '我們不是什麼都做的零件廠。六十年來，我們只專注在沖壓、焊接、管類加工這三件事，並把它做到同業難以匹及的程度。',
  },
  {
    en: 'We measure in microns,\nbut think in decades.',
    zh: '我們以微米為單位衡量，\n以十年為單位思考。',
    descEn: 'A ±0.02mm tolerance is a promise made to every procurement engineer. That promise was forged through decades of process discipline built alongside Honda.',
    descZh: '±0.02mm 的公差，是對每一位採購工程師的承諾。這份承諾，來自與 Honda 數十年合作所淬煉出的製程紀律。',
  },
  {
    en: "We don't chase trends.\nWe chase tolerance.",
    zh: '我們不追逐潮流，\n我們追求公差。',
    descEn: "Industry fashions are not our priority. The tolerance line on a customer's drawing is what makes our factory run every morning.",
    descZh: '業界流行什麼，不是我們的優先順序。客戶圖面上那條細細的公差線，才是每天早晨讓工廠運轉的理由。',
  },
];

const certifications = [
  {
    code: 'IATF 16949',
    descZh: '汽車產業品質管理系統標準，成為 Tier 1 供應商的基本門檻。',
    descEn: 'Automotive quality management system standard — the baseline requirement for Tier 1 supplier status.',
  },
  {
    code: 'ISO 14001',
    descZh: '環境管理系統認證，覆蓋桃園、屏東全廠。',
    descEn: 'Environmental management system certification, covering all Taoyuan and Pingtung facilities.',
  },
  {
    code: 'ISO 45001',
    descZh: '職業健康與安全管理系統。每位員工的安全，是製程品質的基礎。',
    descEn: "Occupational health and safety management system. Every worker's safety is the foundation of process quality.",
  },
];

const sustainMetrics = [
  {
    value: '30%',
    labelZh: '可再生能源目標',
    labelEn: 'Renewable Energy Target',
    subZh: '屏東廠 · 2030',
    subEn: 'Pingtung facility · 2030',
  },
  {
    value: '95%',
    labelZh: '廢料回收率',
    labelEn: 'Scrap Recycling Rate',
    subZh: '2024 實績',
    subEn: '2024 performance',
  },
  {
    value: 'Net Zero',
    labelZh: '碳中和目標',
    labelEn: 'Carbon Neutrality',
    subZh: '2050 承諾',
    subEn: 'Committed by 2050',
  },
];

export default function AboutContent() {
  const { lang } = useLanguage();
  const isZh = lang === 'zh';

  return (
    <>
      {/* ── 1. Opening Hero ── */}
      <section className="bg-[#1A1A1A] py-32 lg:py-48">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <p className="mb-10 font-mono text-xs tracking-[0.2em] text-[#064d8f]">
            {isZh ? '關於富惟' : 'ABOUT FULLWEI'}
          </p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white lg:text-6xl xl:text-[72px]">
            {isZh ? (
              <>
                自 1964 年起，<br />
                我們專注做好<br />
                <span className="text-[#C8102E]">一件事。</span>
              </>
            ) : (
              <>
                Since 1964, we have<br />
                built one thing{' '}
                <span className="text-[#C8102E]">well.</span>
              </>
            )}
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#767676]">
            {isZh
              ? '製造世界上最嚴苛車廠願意託付的金屬零組件。'
              : "Metal components that the world's most demanding automakers can trust."}
          </p>

          <div className="mt-16 grid max-w-2xl grid-cols-3 gap-8 border-t border-white/10 pt-12">
            {[
              { val: '60+',    zh: '年工藝積累',     en: 'Years of Craft'     },
              { val: '3',      zh: '全球生產基地',   en: 'Global Facilities'  },
              { val: 'Tier 1', zh: 'Honda 供應商', en: 'Honda Supplier'     },
            ].map((s) => (
              <div key={s.val}>
                <div className="text-3xl font-bold text-white">{s.val}</div>
                <div className="mt-1 text-xs text-[#767676]">{isZh ? s.zh : s.en}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. Group Overview & Heritage ── */}
      <section id="group" className="scroll-mt-24 bg-[#F5F3EE] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <p className="mb-3 font-mono text-xs tracking-[0.2em] text-[#064d8f]">
            {isZh ? '集團全貌與沿革' : 'GROUP & HERITAGE'}
          </p>
          <h2 className="mb-6 text-3xl font-bold text-black lg:text-4xl">
            {isZh ? '一個集團，六十年積累' : 'One Group, Six Decades'}
          </h2>
          <p className="mb-12 max-w-2xl text-base leading-relaxed text-[#767676]">
            {isZh
              ? '富惟為台越母子集團、兩個獨立法人。台灣（屏東總部）以汽車零組件為主，越南（北寧、峴港等子公司）以機車為主、兼做汽車，兩邊產品線並不完全相同；並於河內與日本設有業務與技術聯絡據點。先在互動地圖上看懂集團佈局，再循時間軸理解這份信任如何被六十年累積出來。'
              : 'Fullwei is a Taiwan–Vietnam parent-subsidiary group of two independent legal entities. Taiwan (Pingtung HQ) focuses on automotive components; Vietnam (subsidiaries in Bắc Ninh, Đà Nẵng and more) is motorcycle-led while also serving automotive — the product lines are not identical — with liaison offices in Hanoi and Japan. Explore the group on the interactive map, then follow the timeline of how this trust was built over sixty years.'}
          </p>

          {/* 2a. Group footprint — interactive map */}
          <p className="mb-6 font-mono text-xs tracking-[0.2em] text-[#767676]">
            {isZh ? '全球據點 · 互動地圖' : 'GLOBAL FOOTPRINT · INTERACTIVE MAP'}
          </p>
          <div className="mb-20">
            <FootprintMap />
          </div>

          {/* 2b. Heritage Timeline */}
          <p className="mb-6 font-mono text-xs tracking-[0.2em] text-[#767676]">
            {isZh ? '沿革時間軸' : 'HERITAGE TIMELINE'}
          </p>
          <div className="relative">
            <div className="absolute left-0 top-0 h-full w-px bg-[#D4CFC8] lg:left-[112px]" />
            <div className="space-y-10">
              {timeline.map((item) => (
                <div key={item.id} className="relative flex gap-6 pl-6 lg:gap-0 lg:pl-0">
                  <div className="hidden w-28 shrink-0 pt-0.5 text-right font-mono text-sm font-bold text-black lg:block">
                    {isZh ? item.yearZh : item.yearEn}
                  </div>
                  <div className="absolute left-[-5px] top-[6px] h-2.5 w-2.5 rounded-full bg-[#064d8f] ring-2 ring-[#F5F3EE] lg:left-[107px]" />
                  <div className="flex-1 pb-2 lg:pl-10">
                    <span className="mb-1 inline-block font-mono text-xs text-[#767676] lg:hidden">
                      {isZh ? item.yearZh : item.yearEn}
                    </span>
                    <h3 className="mb-1.5 text-base font-semibold text-black">
                      {isZh ? item.titleZh : item.titleEn}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#767676]">
                      {isZh ? item.descZh : item.descEn}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2c. Pending Fullwei confirmation */}
          <div className="mt-16 border-l-2 border-[#C8102E] bg-white/60 p-6">
            <p className="mb-2 font-mono text-xs tracking-[0.15em] text-[#C8102E]">
              {isZh ? '⚠ 待富惟提供／確認' : '⚠ PENDING FULLWEI CONFIRMATION'}
            </p>
            <p className="text-sm leading-relaxed text-[#767676]">
              {isZh
                ? '全球據點地址與電話已依富惟官方網站「全球據點」更新；以下仍待富惟提供／確認：1964 起家地點與各沿革里程碑的確切年份；越南各子公司的分工與主力產品；佛山、日本等歷史與現況據點的角色釐清；各廠產能數據與歷史照片；越南站網域與可導流的對應語言頁面。'
                : 'Global-site addresses and phone numbers follow Fullwei’s official “Global Locations” page. Still pending from Fullwei: the 1964 founding location and the exact year of each heritage milestone; the division of work and lead products of each Vietnam subsidiary; clarification of historical/current sites such as Foshan and Japan; per-plant capacity data and historical photos; the Vietnam site domain and the corresponding localized pages for cross-site routing.'}
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. Leadership ── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <p className="mb-3 font-mono text-xs tracking-[0.2em] text-[#064d8f]">
            {isZh ? '經營團隊' : 'LEADERSHIP'}
          </p>
          <h2 className="mb-16 text-3xl font-bold text-black lg:text-4xl">
            {isZh ? '帶領富惟的人' : 'The People Who Lead Fullwei'}
          </h2>
          <div className="grid gap-8 lg:grid-cols-2">
            {leaders.map((l) => (
              <div key={l.nameEn} className="border border-[#E8E4DC] p-8 transition-shadow hover:shadow-md">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-black text-lg font-bold text-[#064d8f]">
                    {l.initial}
                  </div>
                  <div>
                    <div className="font-semibold text-black">
                      {isZh ? l.nameZh : l.nameEn}
                    </div>
                    <div className="text-sm text-[#767676]">
                      {isZh ? `${l.titleZh} · ${l.nameEn}` : `${l.titleEn}`}
                    </div>
                  </div>
                </div>
                <blockquote className="border-l-2 border-[#064d8f] pl-4 text-sm italic leading-relaxed text-black">
                  &ldquo;{isZh ? l.quoteZh : l.quoteEn}&rdquo;
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Values / Philosophy ── */}
      <section className="bg-[#1A1A1A] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <p className="mb-3 font-mono text-xs tracking-[0.2em] text-[#064d8f]">
            {isZh ? '製造哲學' : 'PHILOSOPHY'}
          </p>
          <h2 className="mb-16 text-3xl font-bold text-white lg:text-4xl">
            {isZh ? '我們相信的事' : 'What We Believe'}
          </h2>
          <div className="space-y-0 divide-y divide-white/10">
            {values.map((v, i) => (
              <div
                key={i}
                className="flex flex-col gap-8 py-12 lg:flex-row lg:items-start lg:gap-20"
              >
                <div className="lg:w-1/2">
                  <p className="mb-4 font-mono text-xs text-[#064d8f]">
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <h3 className="whitespace-pre-line text-2xl font-bold leading-tight text-white lg:text-3xl">
                    {isZh ? v.zh : v.en}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-[#767676] lg:w-1/2 lg:pt-10">
                  {isZh ? v.descZh : v.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Partnerships ── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <p className="mb-3 font-mono text-xs tracking-[0.2em] text-[#064d8f]">
                {isZh ? '夥伴關係' : 'PARTNERSHIPS'}
              </p>
              <h2 className="mb-8 text-3xl font-bold leading-tight text-black lg:text-4xl">
                {isZh ? '與本田同行的三十年。' : 'A 30-year journey with Honda.'}
              </h2>
              <div className="space-y-4 text-sm leading-relaxed text-[#767676]">
                {isZh ? (
                  <>
                    <p>
                      1980 年代，富惟首次進入 Honda 供應鏈。此後三十餘年，我們跟隨
                      Honda 的全球佈局，從台灣到廣州，從機車零件到四輪排氣系統。
                    </p>
                    <p>
                      2008 年，我們與豐技研（Yutaka Giken Co., Ltd.）合資成立丰富汽配，
                      於廣東佛山設廠，專供廣州 Honda 關鍵排氣系統組件。
                      這段合作不只是供應關係，更是技術交流與互信的體現。
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      In the 1980s, Fullwei first entered Honda&apos;s supply chain. Over the
                      following three decades, we followed Honda&apos;s global expansion — from
                      Taiwan to Guangzhou, from motorcycle parts to four-wheel exhaust systems.
                    </p>
                    <p>
                      In 2008, we established Fengfu Auto Parts through a joint venture with
                      Yutaka Giken Co., Ltd., with a facility in Foshan, Guangdong dedicated to
                      supplying critical exhaust system components to Guangzhou Honda.
                    </p>
                  </>
                )}
              </div>
              <div className="mt-10 inline-block border-l-2 border-[#064d8f] pl-4">
                <div className="text-3xl font-bold text-black">30+</div>
                <div className="text-sm text-[#767676]">
                  {isZh ? 'Honda 供應商年資' : 'Years as Honda Supplier'}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="w-full max-w-sm border border-[#E8E4DC] p-8">
                <p className="mb-6 font-mono text-xs tracking-[0.15em] text-[#767676]">
                  {isZh ? '長期戰略夥伴' : 'LONG-TERM PARTNERS'}
                </p>
                <div className="divide-y divide-[#E8E4DC]">
                  {[
                    {
                      name: 'Honda Motor Co., Ltd.',
                      roleZh: 'Tier 1 客戶 · 台灣 · 廣州',
                      roleEn: 'Tier 1 Customer · Taiwan · Guangzhou',
                    },
                    {
                      name: 'Yutaka Giken Co., Ltd.',
                      roleZh: '合資夥伴 · 丰富汽配（佛山）',
                      roleEn: 'JV Partner · Fengfu Auto Parts, Foshan',
                    },
                  ].map((p) => (
                    <div key={p.name} className="py-4 first:pt-0 last:pb-0">
                      <div className="font-medium text-black">{p.name}</div>
                      <div className="mt-0.5 text-xs text-[#767676]">
                        {isZh ? p.roleZh : p.roleEn}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Certifications ── */}
      <section className="bg-[#F5F3EE] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <p className="mb-3 font-mono text-xs tracking-[0.2em] text-[#064d8f]">
            {isZh ? '認證與品質' : 'CERTIFICATIONS & QUALITY'}
          </p>
          <h2 className="mb-16 max-w-xl text-3xl font-bold text-black lg:text-4xl">
            {isZh
              ? '每一張認證，都是製程承諾的佐證。'
              : 'Every certification is evidence of a process commitment.'}
          </h2>
          <div className="grid gap-6 lg:grid-cols-3">
            {certifications.map((c) => (
              <div key={c.code} className="border border-[#E8E4DC] bg-white p-8 transition-shadow hover:shadow-md">
                <div className="mb-4 font-mono text-sm font-bold tracking-wider text-[#064d8f]">
                  {c.code}
                </div>
                <p className="text-sm leading-relaxed text-[#767676]">
                  {isZh ? c.descZh : c.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Sustainability ── */}
      <section className="bg-[#1A1A1A] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <p className="mb-3 font-mono text-xs tracking-[0.2em] text-[#064d8f]">
            {isZh ? '永續發展' : 'SUSTAINABILITY'}
          </p>
          <h2 className="mb-16 max-w-xl text-3xl font-bold text-white lg:text-4xl">
            {isZh
              ? '工廠的責任，不只是良率。'
              : "A factory's responsibility goes beyond yield rate."}
          </h2>

          <div className="grid divide-y divide-white/10 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
            {sustainMetrics.map((m) => (
              <div key={m.value} className="py-10 lg:px-10 lg:py-0 lg:first:pl-0 lg:last:pr-0">
                <div className="text-5xl font-bold text-white">{m.value}</div>
                <div className="mt-3 text-sm font-medium text-[#F5F3EE]">
                  {isZh ? m.labelZh : m.labelEn}
                </div>
                <div className="mt-1 text-xs text-[#767676]">
                  {isZh ? m.subZh : m.subEn}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-16 max-w-2xl border-t border-white/10 pt-8 text-sm leading-relaxed text-[#767676]">
            {isZh
              ? '屏東大慶智造工廠採用高效節能設備與廢熱回收系統，每條產線均設有能耗監控模組。我們承諾在 2050 年前達成碳中和目標，並持續向 Honda 及所有客戶揭露年度永續績效報告。'
              : 'The Pingtung Smart Factory employs high-efficiency equipment and heat recovery systems, with energy monitoring modules on every production line. We are committed to carbon neutrality by 2050, with annual sustainability performance reports disclosed to Honda and all major customers.'}
          </p>
        </div>
      </section>

      {/* ── 8. Company Profile (AI-readable spec sheet) ── */}
      <CompanyProfile id="company" />
    </>
  );
}
