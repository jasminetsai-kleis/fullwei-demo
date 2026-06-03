// ─────────────────────────────────────────────────────────────
// Capabilities — 三大核心製程 (Technical Advantage / Process pages)
//
// Mirrors the structure of products.ts but answers a different
// question: products say "what we make", processes say "how we
// make it, and how well". Each process is one single-page scroll
// narrative with the 7 sections defined in the strategy doc:
//   ① Hero  ② Overview  ③ Capability Range  ④ Equipment & Automation
//   ⑤ Process Control & Inspection  ⑥ Certifications  ⑦ Documentary Visuals
// PPAP / APQP / IATF 16949 are kept as plain on-page text on purpose
// (buyer search + AI citation signal).
// ─────────────────────────────────────────────────────────────

export type ProcessSlug = 'metal-stamping' | 'welding-assembly' | 'tube-processing';

export interface SpecRow { param: string; value: string }
export interface SpecGroup { category: string; rows: SpecRow[] }
export interface EquipItem { name: string; desc: string; spec: string }
export interface ControlItem { title: string; desc: string; spec: string }
export interface CertItem { name: string; desc: string }
export interface VisualItem { title: string; desc: string }
export interface RelatedProduct { slug: string; label: string }

export interface ProcessLang {
  back: string;
  category: string;          // mono eyebrow, e.g. 「核心製程 · 金屬沖壓」
  title: string;             // localized process name (h1)
  enName: string;            // English pairing shown as accent (中英並陳); '' in EN
  subtitle: string;          // one-line capability positioning, not a slogan
  badges: string[];
  stats: { value: string; label: string }[];

  overviewHeading: string;
  overviewBody: string[];    // 2–3 paragraphs — the AI-citable capability brief
  keyFacts: { label: string; value: string }[];

  rangeHeading: string;
  rangeIntro: string;
  specGroups: SpecGroup[];

  equipHeading: string;
  equipIntro: string;
  equipItems: EquipItem[];

  controlHeading: string;
  controlIntro: string;
  controlItems: ControlItem[];
  controlStandards: string[]; // PPAP / APQP / IATF 16949 etc. as plain text

  certHeading: string;
  certIntro: string;
  certs: CertItem[];

  visualsHeading: string;
  visualsIntro: string;
  visuals: VisualItem[];

  relatedHeading: string;
  relatedIntro: string;
  related: RelatedProduct[];

  ctaHeading: string;
  ctaSub: string;
  ctaBtn1: string;  // primary — Request RFQ
  ctaBtn2: string;  // Schedule a Factory Visit
  ctaBtn3: string;  // Talk to an Engineer
}

export interface Process {
  slug: ProcessSlug;
  zh: ProcessLang;
  en: ProcessLang;
}

export const processes: Process[] = [
  // ───────────────────────────────────────────────────────────
  // 01  金屬沖壓 · Metal Stamping
  // ───────────────────────────────────────────────────────────
  {
    slug: 'metal-stamping',
    zh: {
      back: '← 返回首頁',
      category: '核心製程 · 金屬沖壓',
      title: '金屬沖壓',
      enName: 'Metal Stamping',
      subtitle: '從 50T 到 800T 的連續模與移轉模沖壓，將高強度鋼捲一次成形為複雜汽車結構件。',
      badges: ['最大 800T', '±0.02mm', '模具自製', '連續模 / 移轉模'],
      stats: [
        { value: '800T', label: '最大沖壓噸位' },
        { value: '±0.02mm', label: '定位孔公差' },
        { value: '5,000萬+', label: '年產能（件）' },
        { value: '40+', label: '沖床線體' },
      ],
      overviewHeading: '製程能力',
      overviewBody: [
        '金屬沖壓是富惟製造體系的根基。我們以連續模（Progressive）與移轉模（Transfer）兩種沖壓工藝，將 SPCC、SPFH590、HSLA 等鋼捲一次成形為儀錶板支架、車架補強件、座椅鋼骨等複雜結構件，沖壓噸位涵蓋 50T 至 800T，板厚 0.5–4.0mm。',
        '富惟自 1964 年起即以沖壓起家，六十年累積的模具知識讓我們能在內部完成模具設計、製造與維護，新品開發週期因此縮短、量產一致性更可控。對於高強度鋼的回彈、薄板的平面度、深引伸件的破裂風險，我們以 FEM 成形模擬在開模前預判並補償。',
        '與一般沖壓代工廠的差異在於：富惟的沖壓線直接整合去毛刺、清洗、首件 CMM 確認與 SPC 製程監控，每一個料號都帶著完整的量測與追溯數據出廠，而非僅交付零件本身。',
      ],
      keyFacts: [
        { label: '沖壓工藝', value: '連續模 / 移轉模 / 單沖' },
        { label: '噸位範圍', value: '50T – 800T' },
        { label: '可成形料厚', value: '0.5 – 4.0mm' },
        { label: '適用材質', value: 'SPCC / SPFH590 / HSLA / AHSS 980 / AL6061' },
        { label: '定位孔公差', value: '±0.02mm' },
        { label: '模具來源', value: '富惟內部設計與製造' },
      ],
      rangeHeading: '能力範圍',
      rangeIntro: '以下為金屬沖壓的可量化能力邊界。實際專案規格依圖面與料件複雜度於 DFM 審查時確認。',
      specGroups: [
        {
          category: '沖壓設備',
          rows: [
            { param: '沖床噸位', value: '50 / 110 / 160 / 250 / 400 / 630 / 800T' },
            { param: '模具類型', value: '連續模（Progressive）/ 移轉模（Transfer）/ 單工程' },
            { param: '送料寬度', value: '最大 600mm 自動送料' },
            { param: '衝次（SPM）', value: '15 – 80 SPM（依料件複雜度）' },
          ],
        },
        {
          category: '材料與料厚',
          rows: [
            { param: '冷軋鋼', value: 'SPCC / SPCE（0.5 – 3.0mm）' },
            { param: '高強鋼', value: 'SPFH590 / HSLA / AHSS 590–980 MPa' },
            { param: '鋁合金', value: 'AL5052 / AL6061-T6（輕量化）' },
            { param: '板厚範圍', value: '0.5 – 4.0mm' },
          ],
        },
        {
          category: '精度與品質',
          rows: [
            { param: '一般尺寸公差', value: '±0.05mm' },
            { param: '定位孔公差', value: '±0.02mm' },
            { param: '平面度', value: '≤ 0.3mm / 300mm' },
            { param: '毛邊高度', value: '≤ 板厚 8%' },
          ],
        },
      ],
      equipHeading: '設備與自動化',
      equipIntro: '屏東大慶智造工廠的沖壓區以自動送料與線體連動為核心，將人力依賴降到最低、品質數據即時上傳 MES。',
      equipItems: [
        { name: '高速連續模沖床線', desc: '搭配自動開捲、整平、送料系統，多工序一次成形，減少二次定位誤差。', spec: '160 – 800T · 自動送料' },
        { name: '移轉模沖壓系統', desc: '機械手臂在工站間移轉料件，適用深引伸與多向成形的複雜結構件。', spec: '六軸移轉 · 多工站' },
        { name: '內部模具製造中心', desc: 'CNC 加工、線切割與模具研合在廠內完成，支援快速試模與修模。', spec: 'CNC / WEDM / 研合' },
        { name: '自動去毛刺與清洗線', desc: '沖壓後直接整合去毛邊與鹼洗，確保後段焊接與塗裝的表面潔淨度。', spec: '線體連動' },
      ],
      controlHeading: '製程控制與檢驗',
      controlIntro: '每個沖壓料號從開模即進入 APQP 流程，量產前完成 PPAP 提交，量產中以 SPC 監控關鍵特性。富惟通過 IATF 16949:2016 認證，製程管控全程符合車規要求。',
      controlItems: [
        { title: '首件確認（FAI）', desc: '每批首件以 CMM 全量測關鍵尺寸，記錄於 PPAP 文件並由品保簽核放行。', spec: 'APQP / PPAP Level 3' },
        { title: '製程中尺寸監控', desc: '量產中每 50 件抽驗關鍵孔位與輪廓，超出管制界限自動停線並隔離。', spec: 'SPC 管制圖' },
        { title: '模具狀態監控', desc: '感測器偵測沖壓壓力曲線與料帶位置，異常自動停機，預防模具崩損與批量不良。', spec: '壓力 / 位移感測' },
        { title: '材料來料檢驗（IQC）', desc: '進廠鋼捲執行降伏強度、拉伸與延伸率測試，並核對 Mill Sheet。', spec: 'JIS G3141 / G3193' },
      ],
      controlStandards: ['IATF 16949:2016', 'APQP', 'PPAP Level 3', 'FMEA / Control Plan', 'MSA', 'SPC'],
      certHeading: '認證與品質',
      certIntro: '認證是製造紀律的驗證，而非展示。富惟以下列國際認證為車規客戶提供資格背書。',
      certs: [
        { name: 'IATF 16949:2016', desc: '汽車產業品質管理系統，富惟全廠製程的核心規範。' },
        { name: 'ISO 14001:2015', desc: '環境管理系統，涵蓋沖壓油霧、廢料回收與能源管理。' },
        { name: 'ISO 45001:2018', desc: '職業安全衛生管理系統，沖壓區光柵防護與雙手啟動全面導入。' },
        { name: 'Honda Q-1', desc: 'Honda 認可供應商資格，量產品質達其供應鏈標準。' },
      ],
      visualsHeading: '紀實影像',
      visualsIntro: '沖壓現場的真實紀錄——深色背景、單一光源、高對比，呈現製程細節而非廠房全景。',
      visuals: [
        { title: '連續模成形瞬間', desc: '800T 沖床的料帶在多工站間連續成形，火花與金屬曲面的高速特寫。' },
        { title: '模具研合', desc: '老師傅的手在研合一套新模——六十年沖壓知識的傳承現場。' },
        { title: '首件 CMM 量測', desc: '工程師在 Renishaw CMM 前確認首件關鍵尺寸，數據同步進入 PPAP。' },
      ],
      relatedHeading: '由此製程交付的產品',
      relatedIntro: '金屬沖壓是下列產品線的基礎製程，點擊查看對應的產品細節與規格。',
      related: [
        { slug: 'automotive-brackets', label: '汽車固定架' },
        { slug: 'motorcycle-frame', label: '機車車架零組件' },
      ],
      ctaHeading: '把您的圖面交給我們評估',
      ctaSub: '提供 2D 圖或 3D 模型，富惟將回饋 DFM 建議、可行性評估與報價。',
      ctaBtn1: '索取報價（RFQ）',
      ctaBtn2: '安排工廠參訪',
      ctaBtn3: '與工程師對談',
    },
    en: {
      back: '← Back to Home',
      category: 'Core Process · Metal Stamping',
      title: 'Metal Stamping',
      enName: '',
      subtitle: 'Progressive and transfer die stamping from 50T to 800T — forming high-strength steel coil into complex automotive structures in a single stroke.',
      badges: ['Up to 800T', '±0.02mm', 'In-House Tooling', 'Progressive / Transfer'],
      stats: [
        { value: '800T', label: 'Max Tonnage' },
        { value: '±0.02mm', label: 'Hole Tolerance' },
        { value: '50M+', label: 'Annual Capacity (pcs)' },
        { value: '40+', label: 'Press Lines' },
      ],
      overviewHeading: 'Process Capability',
      overviewBody: [
        'Metal stamping is the foundation of Fullwei’s manufacturing system. Using both progressive and transfer dies, we form SPCC, SPFH590, and HSLA steel coil into complex structures — instrument panel brackets, frame reinforcements, seat-frame members — across a 50T to 800T tonnage range and 0.5–4.0mm material thickness.',
        'Fullwei began as a stamping shop in 1964, and six decades of tooling knowledge let us design, build, and maintain dies entirely in-house — shortening development cycles and tightening production consistency. Springback in high-strength steel, flatness in thin sheet, and tearing risk in deep-drawn parts are all predicted and compensated through FEM forming simulation before a die is cut.',
        'What separates us from a generic stamping vendor: our press lines integrate deburring, cleaning, first-article CMM verification, and SPC monitoring directly inline. Every part number ships with complete measurement and traceability data — not just the part.',
      ],
      keyFacts: [
        { label: 'Stamping Method', value: 'Progressive / Transfer / Single-stage' },
        { label: 'Tonnage Range', value: '50T – 800T' },
        { label: 'Material Thickness', value: '0.5 – 4.0mm' },
        { label: 'Materials', value: 'SPCC / SPFH590 / HSLA / AHSS 980 / AL6061' },
        { label: 'Hole Tolerance', value: '±0.02mm' },
        { label: 'Tooling Source', value: 'Designed & built in-house' },
      ],
      rangeHeading: 'Capability Range',
      rangeIntro: 'The quantified capability envelope for metal stamping. Project-specific specs are confirmed during DFM review against the drawing and part complexity.',
      specGroups: [
        {
          category: 'Stamping Equipment',
          rows: [
            { param: 'Press Tonnage', value: '50 / 110 / 160 / 250 / 400 / 630 / 800T' },
            { param: 'Die Type', value: 'Progressive / Transfer / Single-stage' },
            { param: 'Feed Width', value: 'Up to 600mm automatic feed' },
            { param: 'Stroke Rate (SPM)', value: '15 – 80 SPM (per part complexity)' },
          ],
        },
        {
          category: 'Material & Thickness',
          rows: [
            { param: 'Cold-Rolled Steel', value: 'SPCC / SPCE (0.5 – 3.0mm)' },
            { param: 'High-Strength Steel', value: 'SPFH590 / HSLA / AHSS 590–980 MPa' },
            { param: 'Aluminum Alloy', value: 'AL5052 / AL6061-T6 (lightweighting)' },
            { param: 'Thickness Range', value: '0.5 – 4.0mm' },
          ],
        },
        {
          category: 'Precision & Quality',
          rows: [
            { param: 'General Tolerance', value: '±0.05mm' },
            { param: 'Locating Hole Tolerance', value: '±0.02mm' },
            { param: 'Flatness', value: '≤ 0.3mm / 300mm' },
            { param: 'Burr Height', value: '≤ 8% of thickness' },
          ],
        },
      ],
      equipHeading: 'Equipment & Automation',
      equipIntro: 'The stamping bay at the Pingtung smart factory is built around automatic feeding and line interlock — minimizing manual handling and streaming quality data to MES in real time.',
      equipItems: [
        { name: 'High-Speed Progressive Press Lines', desc: 'Coupled with auto uncoiling, leveling, and feed systems for multi-stage single-stroke forming with no re-locating error.', spec: '160 – 800T · Auto feed' },
        { name: 'Transfer Die Stamping', desc: 'Robotic arms transfer blanks between stations — suited to deep-draw and multi-directional complex structures.', spec: '6-axis transfer · Multi-station' },
        { name: 'In-House Tool Room', desc: 'CNC machining, wire EDM, and die spotting performed on-site for fast try-out and rework.', spec: 'CNC / WEDM / Spotting' },
        { name: 'Inline Deburr & Wash', desc: 'Deburring and alkaline wash integrated post-stamping to keep surfaces clean for downstream welding and coating.', spec: 'Line-interlocked' },
      ],
      controlHeading: 'Process Control & Inspection',
      controlIntro: 'Every stamping part number enters the APQP process at tooling kickoff, completes PPAP submission before mass production, and is monitored by SPC on critical characteristics during runs. Fullwei is certified to IATF 16949:2016, with process control fully aligned to automotive requirements.',
      controlItems: [
        { title: 'First Article Inspection (FAI)', desc: 'Critical dimensions fully CMM-measured on first-off per lot, filed in PPAP and released on QA sign-off.', spec: 'APQP / PPAP Level 3' },
        { title: 'In-Process Monitoring', desc: 'Critical holes and contours sampled every 50 pcs in production; auto-stop and isolation if outside control limits.', spec: 'SPC control charts' },
        { title: 'Die Health Monitoring', desc: 'Sensors track press force curve and strip position; deviation auto-stops the line, preventing die crash and batch defects.', spec: 'Force / displacement sensing' },
        { title: 'Incoming Inspection (IQC)', desc: 'Yield, tensile, and elongation tests on incoming coil, cross-checked against mill certificates.', spec: 'JIS G3141 / G3193' },
      ],
      controlStandards: ['IATF 16949:2016', 'APQP', 'PPAP Level 3', 'FMEA / Control Plan', 'MSA', 'SPC'],
      certHeading: 'Certifications & Quality',
      certIntro: 'Certifications verify manufacturing discipline rather than advertise it. Fullwei qualifies automotive customers against the following international standards.',
      certs: [
        { name: 'IATF 16949:2016', desc: 'Automotive quality management system — the core standard across all Fullwei processes.' },
        { name: 'ISO 14001:2015', desc: 'Environmental management covering stamping oil mist, scrap recycling, and energy use.' },
        { name: 'ISO 45001:2018', desc: 'Occupational health & safety — light curtains and two-hand start fully deployed in the press bay.' },
        { name: 'Honda Q-1', desc: 'Honda approved-supplier status, with production quality meeting supply-chain standards.' },
      ],
      visualsHeading: 'Documentary Visuals',
      visualsIntro: 'Real footage from the stamping floor — dark backgrounds, single light source, high contrast. Process detail, not facility panoramas.',
      visuals: [
        { title: 'Progressive Forming Stroke', desc: 'Strip forming through the stations of an 800T press — a high-speed close-up of sparks and metal contour.' },
        { title: 'Die Spotting', desc: 'A master craftsman spotting a new die — six decades of stamping knowledge being handed down.' },
        { title: 'First-Article CMM', desc: 'An engineer verifying first-off critical dimensions on a Renishaw CMM, data flowing straight into PPAP.' },
      ],
      relatedHeading: 'Products Made by This Process',
      relatedIntro: 'Metal stamping is the foundational process for the product lines below. Open them for detailed specs.',
      related: [
        { slug: 'automotive-brackets', label: 'Automotive Brackets' },
        { slug: 'motorcycle-frame', label: 'Motorcycle Frame Components' },
      ],
      ctaHeading: 'Send Us Your Drawing',
      ctaSub: 'Share a 2D drawing or 3D model and Fullwei will return DFM feedback, a feasibility assessment, and a quotation.',
      ctaBtn1: 'Request RFQ',
      ctaBtn2: 'Schedule a Factory Visit',
      ctaBtn3: 'Talk to an Engineer',
    },
  },

  // ───────────────────────────────────────────────────────────
  // 02  焊接與組裝 · Welding & Assembly
  // ───────────────────────────────────────────────────────────
  {
    slug: 'welding-assembly',
    zh: {
      back: '← 返回首頁',
      category: '核心製程 · 焊接與組裝',
      title: '焊接與組裝',
      enName: 'Welding & Assembly',
      subtitle: '機器人 MIG/MAG 與手工 TIG 焊接，每道焊縫都帶著即時製程數據與品質判定。',
      badges: ['機器人 MIG/MAG', '手工 TIG', 'ISO 3834-2', '焊縫數據上傳 MES'],
      stats: [
        { value: '60+', label: '焊接機器人' },
        { value: '100%', label: '焊縫數據上傳' },
        { value: '±0.3mm', label: '組裝公差' },
        { value: '0.3 ppm', label: '不良率目標' },
      ],
      overviewHeading: '製程能力',
      overviewBody: [
        '富惟的焊接與組裝結合機器人 MIG/MAG 與手工 TIG 兩條路線：機器人焊接負責高量、重複性高的結構件焊縫，手工 TIG 則處理薄壁、精密與外觀焊道。我們的焊接工站全程符合 ISO 3834-2 焊接品質要求，並依 AWS D1.1 判定焊縫接受標準。',
        '焊接的核心品質指標是熱輸入量（Heat Input）。富惟在每個機器人工站配置即時電流／電壓感測器，將每一道焊縫的參數透過 MES 進行 SPC 統計管制——當熱輸入超出管制界限，工站自動停機並標記批次，避免不良品流入下游。這套閉環系統讓富惟在 Honda 供應鏈中維持 0.3 ppm 的不良率目標。',
        '除了焊接本身，富惟同時提供次組裝整合服務：熱護板安裝、橡膠吊耳焊接、嵌入式螺母與隔熱棉包覆，讓客戶以子系統而非散件入庫，降低其組裝成本與物流複雜度。',
      ],
      keyFacts: [
        { label: '焊接工法', value: '機器人 MIG/MAG · 手工 TIG · 點焊 · 雷射焊' },
        { label: '機器人型號', value: 'Fanuc M-10iA / M-20iA 系列' },
        { label: '可焊材質', value: '碳鋼 / 不鏽鋼 / 高強鋼 / 鋁合金' },
        { label: '可焊板厚', value: '0.8 – 6.0mm' },
        { label: '焊接標準', value: 'ISO 3834-2 / AWS D1.1' },
        { label: '組裝公差', value: '±0.3mm' },
      ],
      rangeHeading: '能力範圍',
      rangeIntro: '以下為焊接與組裝的可量化能力邊界。實際焊接規範（WPS）依材質、板厚與接頭型式於專案啟動時制定。',
      specGroups: [
        {
          category: '焊接工法',
          rows: [
            { param: '機器人弧焊', value: 'MIG / MAG（CO₂ / 混合氣）' },
            { param: '手工焊', value: 'TIG（精密 / 薄壁 / 外觀焊道）' },
            { param: '電阻焊', value: '點焊 / 凸焊（薄板組裝）' },
            { param: '雷射焊', value: '高精度連續焊（可選）' },
          ],
        },
        {
          category: '材質與板厚',
          rows: [
            { param: '碳鋼', value: 'SPHC / SPCC（0.8 – 6.0mm）' },
            { param: '不鏽鋼', value: 'SUS304 / SUS409L / SUS436L' },
            { param: '高強鋼', value: 'SPFH590 / HSLA' },
            { param: '鋁合金', value: 'AL5052 / AL6061（TIG / MIG）' },
          ],
        },
        {
          category: '焊縫品質',
          rows: [
            { param: '焊接標準', value: 'ISO 3834-2（焊接品質要求）' },
            { param: '接受準則', value: 'AWS D1.1 / 客戶規格' },
            { param: '焊縫檢驗', value: 'VT 100% / PT 抽驗 / 破壞試驗（每批次）' },
            { param: '氣孔率', value: '≤ 0.5mm 不連續，符合 AWS D1.1' },
          ],
        },
      ],
      equipHeading: '設備與自動化',
      equipIntro: '焊接區以機器人工作站為主力，搭配模組化夾具與 MES 連線，兼顧高精度定位與多料號快速換型。',
      equipItems: [
        { name: 'Fanuc 機器人弧焊工作站', desc: '六軸機器人依 3D 焊接路徑執行 MIG/MAG 焊接，電流電壓即時感測並上傳 MES。', spec: 'M-10iA / M-20iA · 即時監控' },
        { name: '模組化焊接夾具', desc: '固定基座搭配可換式定位銷，換型時間縮短至 15 分鐘內而不犧牲 ±0.05mm 定位精度。', spec: '快速換型 < 15 min' },
        { name: '手工 TIG 焊接站', desc: '由資深焊工處理薄壁、精密與可見焊道，確保外觀件的焊縫一致性。', spec: '精密 / 外觀焊道' },
        { name: '次組裝整合線', desc: '焊接後直接整合熱護板、吊耳、嵌入螺母等次組裝，交付完整子系統。', spec: '子系統交付' },
      ],
      controlHeading: '製程控制與檢驗',
      controlIntro: '焊接製程從專案啟動即依 APQP 制定焊接規範（WPS）與 Control Plan，量產前完成 PPAP 提交。富惟通過 IATF 16949:2016 認證，焊工資格與設備校驗全程可追溯。',
      controlItems: [
        { title: '焊縫即時監控', desc: '機器人工站感測每道焊縫的電流／電壓，異常自動停機並觸發警示，焊縫數據 100% 上傳 MES。', spec: '100% 焊縫數據上傳' },
        { title: '焊接規範與資格', desc: '依 ISO 3834-2 制定 WPS，焊工持證上線，焊接參數鎖定於程式不可隨意更改。', spec: 'WPS / 焊工資格' },
        { title: '破壞性焊縫試驗', desc: '每批次抽樣執行拉伸與剝離試驗，確認焊縫滲透深度與強度符合規格。', spec: '每批次抽驗' },
        { title: '外觀 VT + 滲透 PT', desc: '焊縫 100% 目視檢驗，並抽驗滲透測試，確認無裂紋、咬邊與氣孔。', spec: 'VT 100% / PT 1/50' },
      ],
      controlStandards: ['IATF 16949:2016', 'ISO 3834-2', 'AWS D1.1', 'APQP', 'PPAP Level 3', 'WPS / WPQR'],
      certHeading: '認證與品質',
      certIntro: '富惟的焊接品質由下列國際認證與焊接標準共同背書。',
      certs: [
        { name: 'IATF 16949:2016', desc: '汽車產業品質管理系統，涵蓋焊接製程的特殊製程管控。' },
        { name: 'ISO 3834-2', desc: '金屬材料熔融焊接的完整品質要求，富惟焊接體系的核心規範。' },
        { name: 'ISO 14001:2015', desc: '環境管理系統，涵蓋焊接煙塵收集與排放控制。' },
        { name: 'ISO 45001:2018', desc: '職業安全衛生管理系統，焊接區弧光防護與通風全面導入。' },
      ],
      visualsHeading: '紀實影像',
      visualsIntro: '焊接現場的真實紀錄——弧光的高速攝影、焊道的金屬光澤、工程師判讀焊縫數據的側臉。',
      visuals: [
        { title: '機器人 MIG 焊接弧光', desc: 'Fanuc 工作站執行連續焊接，弧光與飛濺的高速特寫，深色背景單一光源。' },
        { title: '手工 TIG 焊道', desc: '資深焊工完成一道精密 TIG 焊縫——薄壁件外觀焊道的金屬魚鱗紋理。' },
        { title: 'MES 焊縫數據判讀', desc: '工程師在 MES 螢幕前確認每道焊縫的熱輸入曲線，異常批次即時標記。' },
      ],
      relatedHeading: '由此製程交付的產品',
      relatedIntro: '焊接與組裝是下列產品線的關鍵製程，點擊查看對應的產品細節與規格。',
      related: [
        { slug: 'exhaust-systems', label: '排氣系統' },
        { slug: 'motorcycle-frame', label: '機車車架零組件' },
      ],
      ctaHeading: '把您的焊接件交給我們評估',
      ctaSub: '提供圖面與焊接規範需求，富惟將回饋焊接可行性、夾具方案與報價。',
      ctaBtn1: '索取報價（RFQ）',
      ctaBtn2: '安排工廠參訪',
      ctaBtn3: '與工程師對談',
    },
    en: {
      back: '← Back to Home',
      category: 'Core Process · Welding & Assembly',
      title: 'Welding & Assembly',
      enName: '',
      subtitle: 'Robotic MIG/MAG and manual TIG welding — every joint carries real-time process data and a pass/fail verdict.',
      badges: ['Robotic MIG/MAG', 'Manual TIG', 'ISO 3834-2', 'Weld Data to MES'],
      stats: [
        { value: '60+', label: 'Welding Robots' },
        { value: '100%', label: 'Weld Data Uploaded' },
        { value: '±0.3mm', label: 'Assembly Tolerance' },
        { value: '0.3 ppm', label: 'Defect-Rate Target' },
      ],
      overviewHeading: 'Process Capability',
      overviewBody: [
        'Fullwei combines two welding routes: robotic MIG/MAG handles high-volume, high-repeatability structural joints, while manual TIG covers thin-wall, precision, and cosmetic beads. Our welding cells operate to ISO 3834-2 quality requirements, with weld acceptance judged against AWS D1.1.',
        'The critical quality metric in welding is heat input. Every robotic cell carries real-time current/voltage sensors that feed each joint into MES for SPC monitoring — when heat input exceeds the control limit, the cell auto-stops and flags the lot, preventing non-conforming product from advancing. This closed loop lets Fullwei hold a 0.3 ppm defect-rate target across Honda supply commitments.',
        'Beyond welding itself, Fullwei provides sub-assembly integration: heat-shield installation, rubber-hanger welding, insert nuts, and insulation wrapping — so customers receive sub-systems rather than loose parts, cutting their assembly cost and logistics complexity.',
      ],
      keyFacts: [
        { label: 'Welding Method', value: 'Robotic MIG/MAG · Manual TIG · Spot · Laser' },
        { label: 'Robot Model', value: 'Fanuc M-10iA / M-20iA series' },
        { label: 'Weldable Materials', value: 'Carbon / Stainless / HSLA / Aluminum' },
        { label: 'Weldable Thickness', value: '0.8 – 6.0mm' },
        { label: 'Welding Standard', value: 'ISO 3834-2 / AWS D1.1' },
        { label: 'Assembly Tolerance', value: '±0.3mm' },
      ],
      rangeHeading: 'Capability Range',
      rangeIntro: 'The quantified capability envelope for welding & assembly. The actual Welding Procedure Specification (WPS) is defined at project kickoff per material, thickness, and joint type.',
      specGroups: [
        {
          category: 'Welding Method',
          rows: [
            { param: 'Robotic Arc Welding', value: 'MIG / MAG (CO₂ / mixed gas)' },
            { param: 'Manual Welding', value: 'TIG (precision / thin-wall / cosmetic beads)' },
            { param: 'Resistance Welding', value: 'Spot / projection (sheet assembly)' },
            { param: 'Laser Welding', value: 'High-precision continuous weld (optional)' },
          ],
        },
        {
          category: 'Material & Thickness',
          rows: [
            { param: 'Carbon Steel', value: 'SPHC / SPCC (0.8 – 6.0mm)' },
            { param: 'Stainless Steel', value: 'SUS304 / SUS409L / SUS436L' },
            { param: 'High-Strength Steel', value: 'SPFH590 / HSLA' },
            { param: 'Aluminum Alloy', value: 'AL5052 / AL6061 (TIG / MIG)' },
          ],
        },
        {
          category: 'Weld Quality',
          rows: [
            { param: 'Welding Standard', value: 'ISO 3834-2 (weld quality requirements)' },
            { param: 'Acceptance Criteria', value: 'AWS D1.1 / customer spec' },
            { param: 'Weld Inspection', value: 'VT 100% / PT sampled / destructive (per lot)' },
            { param: 'Porosity', value: '≤ 0.5mm pores, non-continuous, per AWS D1.1' },
          ],
        },
      ],
      equipHeading: 'Equipment & Automation',
      equipIntro: 'The welding bay runs on robotic cells paired with modular fixtures and MES connectivity — balancing high-precision locating with rapid changeover across part numbers.',
      equipItems: [
        { name: 'Fanuc Robotic Arc Cells', desc: '6-axis robots run MIG/MAG along 3D programmed paths, with current/voltage sensed and uploaded to MES in real time.', spec: 'M-10iA / M-20iA · Live monitoring' },
        { name: 'Modular Welding Fixtures', desc: 'Fixed base plate with interchangeable locating pins cuts changeover to under 15 minutes without losing ±0.05mm accuracy.', spec: 'Changeover < 15 min' },
        { name: 'Manual TIG Stations', desc: 'Senior welders handle thin-wall, precision, and visible beads, ensuring cosmetic weld consistency.', spec: 'Precision / cosmetic beads' },
        { name: 'Sub-Assembly Integration', desc: 'Heat shields, hangers, and insert nuts integrated post-weld to deliver complete sub-systems.', spec: 'Sub-system delivery' },
      ],
      controlHeading: 'Process Control & Inspection',
      controlIntro: 'Welding follows APQP from kickoff to define the Welding Procedure Specification (WPS) and Control Plan, with PPAP completed before mass production. Fullwei is certified to IATF 16949:2016, and welder qualification and equipment calibration are fully traceable.',
      controlItems: [
        { title: 'Real-Time Weld Monitoring', desc: 'Cells sense current/voltage on every joint; deviation auto-stops the cell and triggers an alarm. 100% of weld data uploaded to MES.', spec: '100% weld data uploaded' },
        { title: 'Procedure & Qualification', desc: 'WPS defined per ISO 3834-2; certified welders only, with parameters locked in program and not field-adjustable.', spec: 'WPS / welder qualification' },
        { title: 'Destructive Weld Testing', desc: 'Tensile and peel tests sampled per lot to confirm weld penetration depth and strength meet spec.', spec: 'Per-lot sampling' },
        { title: 'Visual + Penetrant Test', desc: '100% visual inspection of welds plus sampled PT to confirm no cracks, undercut, or porosity.', spec: 'VT 100% / PT 1/50' },
      ],
      controlStandards: ['IATF 16949:2016', 'ISO 3834-2', 'AWS D1.1', 'APQP', 'PPAP Level 3', 'WPS / WPQR'],
      certHeading: 'Certifications & Quality',
      certIntro: 'Fullwei’s welding quality is backed by the following international certifications and welding standards.',
      certs: [
        { name: 'IATF 16949:2016', desc: 'Automotive quality management system, covering special-process control of welding.' },
        { name: 'ISO 3834-2', desc: 'Comprehensive quality requirements for fusion welding of metals — the core standard of Fullwei’s welding system.' },
        { name: 'ISO 14001:2015', desc: 'Environmental management covering weld-fume collection and emission control.' },
        { name: 'ISO 45001:2018', desc: 'Occupational health & safety — arc-flash shielding and ventilation fully deployed in the weld bay.' },
      ],
      visualsHeading: 'Documentary Visuals',
      visualsIntro: 'Real footage from the welding floor — high-speed arc light, the metallic sheen of a bead, an engineer reading weld data.',
      visuals: [
        { title: 'Robotic MIG Arc', desc: 'A Fanuc cell running a continuous weld — high-speed close-up of arc and spatter against a single light source.' },
        { title: 'Manual TIG Bead', desc: 'A senior welder laying a precision TIG bead — the fish-scale texture of a cosmetic weld on thin wall.' },
        { title: 'Reading Weld Data in MES', desc: 'An engineer at the MES screen verifying the heat-input curve of every joint, flagging any out-of-limit lot.' },
      ],
      relatedHeading: 'Products Made by This Process',
      relatedIntro: 'Welding & assembly is a key process for the product lines below. Open them for detailed specs.',
      related: [
        { slug: 'exhaust-systems', label: 'Exhaust Systems' },
        { slug: 'motorcycle-frame', label: 'Motorcycle Frame Components' },
      ],
      ctaHeading: 'Send Us Your Weldment',
      ctaSub: 'Share your drawing and welding requirements; Fullwei will return weld feasibility, a fixture approach, and a quotation.',
      ctaBtn1: 'Request RFQ',
      ctaBtn2: 'Schedule a Factory Visit',
      ctaBtn3: 'Talk to an Engineer',
    },
  },

  // ───────────────────────────────────────────────────────────
  // 03  管類加工 · Tube Processing
  // ───────────────────────────────────────────────────────────
  {
    slug: 'tube-processing',
    zh: {
      back: '← 返回首頁',
      category: '核心製程 · 管類加工',
      title: '管類加工',
      enName: 'Tube Processing',
      subtitle: 'CNC 多軸彎管、液壓成形與端部成形，將不鏽鋼管一次彎成排氣與結構管路。',
      badges: ['OD 20–120mm', 'CNC 多軸彎管', '液壓成形', '100% 氣密測試'],
      stats: [
        { value: 'OD 120mm', label: '最大管徑' },
        { value: '±0.1°', label: '彎角重現性' },
        { value: '1.0D', label: '最小彎曲半徑' },
        { value: '100%', label: '氣密測試' },
      ],
      overviewHeading: '製程能力',
      overviewBody: [
        '管類加工是富惟排氣系統與結構管路的核心製程。我們以 CNC 多軸彎管機依 3D 設計圖自動生成彎管路徑，達 ±0.1° 的彎角重現性，能在有限空間內完成複雜的多彎幾何；管徑涵蓋 OD 20–120mm，壁厚 0.8–3.0mm，材質以 SUS409L、SUS436L 不鏽鋼與碳鋼為主。',
        '彎管之後，富惟整合端部成形（擴管、縮管、翻邊、Flare 法蘭）與液壓成形（Hydroforming），讓管件能直接對接快拆卡扣或法蘭介面，無需二次加工。彎管最大的技術挑戰是回彈與截面塌陷——我們以芯軸（Mandrel）彎管與彎角補償，將橢圓度控制在管徑公差內。',
        '每件管路組件在出貨前皆通過 100% 氣密測試（0.05 MPa 氮氣加壓 30 秒），NG 品自動隔離、測試數據數位化留存。對排氣系統而言，氣密性直接關係到背壓與噪音表現，這是富惟不抽驗、全數測試的理由。',
      ],
      keyFacts: [
        { label: '加工工法', value: 'CNC 彎管 · 端部成形 · 液壓成形' },
        { label: '管徑範圍', value: 'OD 20 – 120mm' },
        { label: '壁厚範圍', value: '0.8 – 3.0mm' },
        { label: '最小彎曲半徑', value: '1.0D（D = 管外徑）' },
        { label: '適用材質', value: 'SUS409L / SUS436L / SUS304 / 碳鋼' },
        { label: '氣密測試', value: '100% 全數' },
      ],
      rangeHeading: '能力範圍',
      rangeIntro: '以下為管類加工的可量化能力邊界。實際彎管路徑與成形方案依管件幾何於 DFM 審查時確認。',
      specGroups: [
        {
          category: '彎管能力',
          rows: [
            { param: '管外徑（OD）', value: '20mm – 120mm' },
            { param: '最小彎曲半徑', value: '1.0D – 3.5D（D = OD）' },
            { param: '彎角重現性', value: '±0.1°' },
            { param: '彎管型式', value: '芯軸彎管 / 多彎連續 / 多平面' },
          ],
        },
        {
          category: '材質與壁厚',
          rows: [
            { param: '不鏽鋼', value: 'SUS409L / SUS436L / SUS304' },
            { param: '碳鋼', value: 'SPHC / STKM（結構管）' },
            { param: '壁厚範圍', value: '0.8 – 3.0mm' },
            { param: '直線度', value: '≤ 1.0mm / 1000mm' },
          ],
        },
        {
          category: '端部成形與測試',
          rows: [
            { param: '端部成形', value: '擴管 / 縮管 / 翻邊 / Flare 法蘭' },
            { param: '液壓成形', value: 'Hydroforming（截面變徑）' },
            { param: '氣密測試', value: '100%，0.05 MPa 氮氣 30 秒' },
            { param: '橢圓度', value: '依管徑公差控制' },
          ],
        },
      ],
      equipHeading: '設備與自動化',
      equipIntro: '管類加工區以 CNC 彎管機為核心，整合端部成形與氣密測試工站，彎管參數與測試結果即時上傳 MES。',
      equipItems: [
        { name: 'CNC 多軸彎管機', desc: '依 3D 設計圖自動生成彎管路徑，芯軸彎管避免截面塌陷，±0.1° 彎角重現性。', spec: '多軸 · 芯軸彎管' },
        { name: '液壓端部成形機', desc: '完成擴管、縮管與翻邊，每次換型執行首件 CMM 確認，確保介面尺寸精度。', spec: '擴 / 縮 / 翻邊' },
        { name: '液壓成形（Hydroforming）', desc: '以內部高壓水成形變徑截面，適用排氣消音器主體等複雜管形。', spec: '截面變徑成形' },
        { name: '氣密測試工站', desc: '獨立工站以氮氣加壓檢測，NG 品自動隔離，測試結果數位化留存可追溯。', spec: '100% · 0.05 MPa' },
      ],
      controlHeading: '製程控制與檢驗',
      controlIntro: '管類加工從專案啟動即依 APQP 制定 Control Plan，量產前完成 PPAP 提交。富惟通過 IATF 16949:2016 認證，彎管參數與氣密數據全程可追溯。',
      controlItems: [
        { title: '首件 CMM 確認', desc: '每批首件以 CMM 量測彎角、端部尺寸與整體輪廓，記錄於 PPAP 文件。', spec: 'APQP / PPAP Level 3' },
        { title: '100% 氣密測試', desc: '獨立測試工站，0.05 MPa 氮氣加壓 30 秒，NG 品自動隔離，全程可追溯。', spec: '100% 全數' },
        { title: '彎角與輪廓抽驗', desc: '量產中以樣規與 CMM 抽驗彎角、彎曲半徑與直線度，確保管路裝配性。', spec: 'SPC 管制圖' },
        { title: '材料來料檢驗（IQC）', desc: '進廠管材執行壁厚、外徑與材質光譜分析，核對材質證明。', spec: 'JIS G3459 / G3445' },
      ],
      controlStandards: ['IATF 16949:2016', 'APQP', 'PPAP Level 3', 'FMEA / Control Plan', 'MSA', 'SPC'],
      certHeading: '認證與品質',
      certIntro: '富惟管類加工的品質由下列國際認證背書，並以 100% 氣密測試作為排氣件的最終把關。',
      certs: [
        { name: 'IATF 16949:2016', desc: '汽車產業品質管理系統，涵蓋彎管與氣密的特殊製程管控。' },
        { name: 'ISO 14001:2015', desc: '環境管理系統，涵蓋彎管潤滑與清洗的廢液管理。' },
        { name: 'ISO 45001:2018', desc: '職業安全衛生管理系統，彎管區夾持與旋轉防護全面導入。' },
        { name: 'Honda Q-1', desc: 'Honda 認可供應商資格，排氣管路品質達其供應鏈標準。' },
      ],
      visualsHeading: '紀實影像',
      visualsIntro: '彎管現場的真實紀錄——排氣管彎管的金屬曲面光影、氣密測試的氮氣加壓瞬間。',
      visuals: [
        { title: 'CNC 彎管成形', desc: '彎管機在有限空間內完成多平面連續彎管，金屬管的曲面光影特寫。' },
        { title: '端部成形', desc: '液壓機完成一道翻邊——管端與法蘭介面的金屬細節。' },
        { title: '100% 氣密測試', desc: '管路組件在氣密測試工站加壓，氮氣壓力曲線即時判定合格與否。' },
      ],
      relatedHeading: '由此製程交付的產品',
      relatedIntro: '管類加工是下列產品線的核心製程，點擊查看對應的產品細節與規格。',
      related: [
        { slug: 'exhaust-systems', label: '排氣系統' },
      ],
      ctaHeading: '把您的管件交給我們評估',
      ctaSub: '提供管路圖面與材質需求，富惟將回饋彎管可行性、成形方案與報價。',
      ctaBtn1: '索取報價（RFQ）',
      ctaBtn2: '安排工廠參訪',
      ctaBtn3: '與工程師對談',
    },
    en: {
      back: '← Back to Home',
      category: 'Core Process · Tube Processing',
      title: 'Tube Processing',
      enName: '',
      subtitle: 'CNC multi-axis bending, hydroforming, and end-forming — bending stainless tube into exhaust and structural routing in a single setup.',
      badges: ['OD 20–120mm', 'CNC Multi-Axis', 'Hydroforming', '100% Leak Tested'],
      stats: [
        { value: 'OD 120mm', label: 'Max Tube OD' },
        { value: '±0.1°', label: 'Bend Repeatability' },
        { value: '1.0D', label: 'Min Bend Radius' },
        { value: '100%', label: 'Leak Tested' },
      ],
      overviewHeading: 'Process Capability',
      overviewBody: [
        'Tube processing is the core process behind Fullwei’s exhaust systems and structural routing. CNC multi-axis benders generate bend paths automatically from 3D CAD, achieving ±0.1° bend-angle repeatability and complex multi-bend geometry in tight envelopes. Tube OD ranges 20–120mm at 0.8–3.0mm wall thickness, primarily in SUS409L / SUS436L stainless and carbon steel.',
        'After bending, Fullwei integrates end-forming (expansion, compression, flanging, flare fittings) and hydroforming, so tubes mate directly to quick-connect clips or flange interfaces with no secondary machining. The biggest technical challenge in bending is springback and cross-section collapse — we use mandrel bending and angle compensation to hold ovality within tube-diameter tolerance.',
        'Every tube assembly passes 100% leak testing before shipment (N₂ at 0.05 MPa × 30 sec), with NG parts auto-isolated and test data stored digitally. For exhaust systems, leak integrity directly governs backpressure and noise — which is why Fullwei tests every part rather than sampling.',
      ],
      keyFacts: [
        { label: 'Process', value: 'CNC bending · End-forming · Hydroforming' },
        { label: 'Tube OD Range', value: 'OD 20 – 120mm' },
        { label: 'Wall Thickness', value: '0.8 – 3.0mm' },
        { label: 'Min Bend Radius', value: '1.0D (D = OD)' },
        { label: 'Materials', value: 'SUS409L / SUS436L / SUS304 / carbon steel' },
        { label: 'Leak Test', value: '100% coverage' },
      ],
      rangeHeading: 'Capability Range',
      rangeIntro: 'The quantified capability envelope for tube processing. Actual bend paths and forming approach are confirmed during DFM review against tube geometry.',
      specGroups: [
        {
          category: 'Bending Capability',
          rows: [
            { param: 'Tube OD', value: '20mm – 120mm' },
            { param: 'Min Bend Radius', value: '1.0D – 3.5D (D = OD)' },
            { param: 'Bend Repeatability', value: '±0.1°' },
            { param: 'Bend Type', value: 'Mandrel / multi-bend / multi-plane' },
          ],
        },
        {
          category: 'Material & Wall',
          rows: [
            { param: 'Stainless Steel', value: 'SUS409L / SUS436L / SUS304' },
            { param: 'Carbon Steel', value: 'SPHC / STKM (structural tube)' },
            { param: 'Wall Thickness', value: '0.8 – 3.0mm' },
            { param: 'Straightness', value: '≤ 1.0mm / 1000mm' },
          ],
        },
        {
          category: 'End-Forming & Testing',
          rows: [
            { param: 'End-Forming', value: 'Expansion / compression / flanging / flare' },
            { param: 'Hydroforming', value: 'Cross-section diameter variation' },
            { param: 'Leak Test', value: '100%, N₂ at 0.05 MPa × 30 sec' },
            { param: 'Ovality', value: 'Controlled within tube tolerance' },
          ],
        },
      ],
      equipHeading: 'Equipment & Automation',
      equipIntro: 'The tube bay is built around CNC benders integrated with end-forming and leak-test stations, with bend parameters and test results streamed to MES in real time.',
      equipItems: [
        { name: 'CNC Multi-Axis Benders', desc: 'Bend paths generated automatically from 3D CAD; mandrel bending avoids cross-section collapse with ±0.1° repeatability.', spec: 'Multi-axis · Mandrel bend' },
        { name: 'Hydraulic End-Formers', desc: 'Expansion, compression, and flanging with first-piece CMM verification per setup for interface accuracy.', spec: 'Expand / compress / flange' },
        { name: 'Hydroforming', desc: 'Internal high-pressure water forms variable-diameter sections — suited to muffler bodies and complex tube shapes.', spec: 'Variable-section forming' },
        { name: 'Leak-Test Stations', desc: 'Dedicated stations pressure-test with nitrogen; NG parts auto-isolated with digital, traceable results.', spec: '100% · 0.05 MPa' },
      ],
      controlHeading: 'Process Control & Inspection',
      controlIntro: 'Tube processing follows APQP from kickoff to set the Control Plan, with PPAP completed before mass production. Fullwei is certified to IATF 16949:2016, and bend parameters and leak-test data are fully traceable.',
      controlItems: [
        { title: 'First-Article CMM', desc: 'First-off per lot CMM-measured for bend angle, end dimensions, and overall contour, filed in PPAP.', spec: 'APQP / PPAP Level 3' },
        { title: '100% Leak Test', desc: 'Dedicated station, N₂ at 0.05 MPa × 30 sec. NG auto-isolated with full traceability.', spec: '100% coverage' },
        { title: 'Bend & Contour Sampling', desc: 'Gauges and CMM sample bend angle, radius, and straightness in production to ensure assembly fit.', spec: 'SPC control charts' },
        { title: 'Incoming Inspection (IQC)', desc: 'Wall thickness, OD, and OES material analysis on incoming tube, cross-checked against certificates.', spec: 'JIS G3459 / G3445' },
      ],
      controlStandards: ['IATF 16949:2016', 'APQP', 'PPAP Level 3', 'FMEA / Control Plan', 'MSA', 'SPC'],
      certHeading: 'Certifications & Quality',
      certIntro: 'Fullwei’s tube-processing quality is backed by the following certifications, with 100% leak testing as the final gate for exhaust parts.',
      certs: [
        { name: 'IATF 16949:2016', desc: 'Automotive quality management system, covering special-process control of bending and leak testing.' },
        { name: 'ISO 14001:2015', desc: 'Environmental management covering bend-lubricant and wash effluent.' },
        { name: 'ISO 45001:2018', desc: 'Occupational health & safety — clamping and rotation guarding fully deployed in the tube bay.' },
        { name: 'Honda Q-1', desc: 'Honda approved-supplier status, with exhaust-routing quality meeting supply-chain standards.' },
      ],
      visualsHeading: 'Documentary Visuals',
      visualsIntro: 'Real footage from the tube floor — the metal contour of an exhaust bend, the moment of nitrogen pressurization in a leak test.',
      visuals: [
        { title: 'CNC Bend Forming', desc: 'A bender completing a multi-plane continuous bend in a tight envelope — a close-up of the tube’s metal contour.' },
        { title: 'End-Forming', desc: 'A hydraulic press completing a flange — metal detail at the tube-to-flange interface.' },
        { title: '100% Leak Test', desc: 'A tube assembly under pressure at the leak-test station, the nitrogen pressure curve judging pass/fail in real time.' },
      ],
      relatedHeading: 'Products Made by This Process',
      relatedIntro: 'Tube processing is the core process for the product line below. Open it for detailed specs.',
      related: [
        { slug: 'exhaust-systems', label: 'Exhaust Systems' },
      ],
      ctaHeading: 'Send Us Your Tube Part',
      ctaSub: 'Share your routing drawing and material needs; Fullwei will return bend feasibility, a forming approach, and a quotation.',
      ctaBtn1: 'Request RFQ',
      ctaBtn2: 'Schedule a Factory Visit',
      ctaBtn3: 'Talk to an Engineer',
    },
  },
];
