export type ProductSlug = 'exhaust-systems' | 'motorcycle-frame' | 'automotive-brackets';

export interface SpecRow { param: string; value: string }
export interface SpecGroup { category: string; rows: SpecRow[] }
export interface ProcessStep { num: string; title: string; desc: string }
export interface QCItem { title: string; desc: string; spec: string }
export interface AppItem { title: string; desc: string; tags: string[] }
export interface Article { title: string; body: string }
export interface FAQItem { q: string; a: string }

export interface ProductLang {
  back: string;
  category: string;
  title: string;
  subtitle: string;
  badges: string[];
  stats: { value: string; label: string }[];
  overviewHeading: string;
  overviewBody: string;
  keySpecs: { label: string; value: string }[];
  specsHeading: string;
  specGroups: SpecGroup[];
  customHeading: string;
  customOptions: { title: string; desc: string; tags: string[] }[];
  processHeading: string;
  processSteps: ProcessStep[];
  qcHeading: string;
  qcIntro: string;
  qcItems: QCItem[];
  appHeading: string;
  appItems: AppItem[];
  engHeading: string;
  engArticles: Article[];
  engCerts: string[];
  faqHeading: string;
  faqItems: FAQItem[];
  ctaHeading: string;
  ctaSub: string;
  ctaBtn1: string;
  ctaBtn2: string;
}

export interface Product {
  slug: ProductSlug;
  zh: ProductLang;
  en: ProductLang;
}

export const products: Product[] = [
  // ─────────────────────────────────────────────────────────
  // 01  排氣系統
  // ─────────────────────────────────────────────────────────
  {
    slug: 'exhaust-systems',
    zh: {
      back: '← 返回',
      category: '產品線 · 排氣系統',
      title: '排氣管路系統',
      subtitle: '熱耐久性與靜音性能並重，專為 Honda 全球供應鏈精心製造',
      badges: ['Honda 供應鏈', 'IATF 16949', 'SUS409L / SUS436L', '100% 氣密測試'],
      stats: [
        { value: '30+', label: '年供應資歷' },
        { value: '±0.3mm', label: '組裝公差' },
        { value: '100%', label: '氣密測試' },
        { value: '800°C', label: '耐熱設計' },
      ],
      overviewHeading: '產品概覽',
      overviewBody:
        '富惟工業的排氣系統產品線涵蓋消音器主體、排氣管段、觸媒轉換器外殼，以及完整的管路組件。採用 SUS409L / SUS436L 不鏽鋼，通過 CNC 多軸彎管、機器人 MIG/MAG 焊接、熱處理及 100% 氣密測試，確保每件產品在高溫、振動、腐蝕環境下的長期耐久性。作為 Honda 台灣及廣州廠的長期一階供應商，富惟具備從設計協作到量產的完整服務能力。',
      keySpecs: [
        { label: '主材', value: 'SUS409L / SUS436L / 碳鋼 SPHC' },
        { label: '管徑範圍', value: 'OD 20–120mm' },
        { label: '壁厚', value: '0.8–3.0mm' },
        { label: '組裝公差', value: '±0.3mm' },
        { label: '耐熱設計', value: '持續 800°C / 瞬間 900°C' },
        { label: '防腐塗裝', value: 'Zn-Ni 電鍍 / 粉體塗裝（可選）' },
      ],
      specsHeading: '技術規格',
      specGroups: [
        {
          category: '材料規格',
          rows: [
            { param: '主體材質', value: 'SUS409L（主）/ SUS436L（高耐熱）/ SPHC（碳鋼段）' },
            { param: '管壁厚度', value: '0.8 / 1.0 / 1.2 / 1.5 / 2.0 / 3.0mm（可定制）' },
            { param: '材料認證', value: 'JIS G4305 / ASTM A240 相當' },
            { param: '硬度（HV）', value: '≤ 200 HV（退火態）' },
          ],
        },
        {
          category: '尺寸與公差',
          rows: [
            { param: '管外徑（OD）', value: '20mm – 120mm' },
            { param: '彎曲半徑', value: '1.0D – 3.5D（D = 管外徑）' },
            { param: '直線度', value: '≤ 1.0mm / 1000mm' },
            { param: '組裝尺寸公差', value: '±0.3mm（重要安裝孔 ±0.1mm）' },
            { param: '長度公差', value: '±1.0mm' },
          ],
        },
        {
          category: '焊接規格',
          rows: [
            { param: '焊接工法', value: 'MIG/MAG（機器人）/ TIG（精密段）' },
            { param: '焊接標準', value: 'ISO 3834-2' },
            { param: '焊縫檢驗', value: 'VT（100%）/ PT（抽驗）/ 破壞試驗（每批次）' },
            { param: '氣孔率', value: '≤ 0.5mm / 不連續，符合 AWS D1.1' },
          ],
        },
        {
          category: '性能測試',
          rows: [
            { param: '氣密測試', value: '100% 全數，0.05 MPa 氮氣加壓 30 秒' },
            { param: '耐熱週期', value: '800°C × 500 cycles，熱變形 ≤ 0.5mm' },
            { param: '鹽霧測試', value: 'JIS Z2371 / 480h（碳鋼）/ 720h（不鏽鋼）' },
            { param: '振動疲勞', value: 'SAE J1544 / 200 萬次 @ ±2mm 振幅' },
          ],
        },
      ],
      customHeading: '客製選項',
      customOptions: [
        {
          title: '材質升級',
          desc: '依使用環境需求，提供碳鋼段至全 SUS436L 不鏽鋼配置，或分段混搭方案。',
          tags: ['SPHC', 'SUS409L', 'SUS436L', '雙相鋼'],
        },
        {
          title: '表面處理',
          desc: '支援 Zn-Ni 電鍍（耐蝕優先）、高溫粉體塗裝、機械拋光，滿足不同 OEM 規格。',
          tags: ['Zn-Ni 電鍍', '粉體塗裝', '機械拋光', '陽極處理'],
        },
        {
          title: '管端成形',
          desc: '擴管、縮管、翻邊、螺紋加工等端部成形工藝，符合快拆卡扣或法蘭連接需求。',
          tags: ['擴管', '縮管', '翻邊', 'Flare 法蘭'],
        },
        {
          title: '套件組裝',
          desc: '隔熱棉包覆、熱護板安裝、橡膠吊耳焊接等次組裝服務，交付完整子系統。',
          tags: ['熱護板', '隔熱棉', '橡膠吊耳', '次組裝'],
        },
      ],
      processHeading: '製程流程',
      processSteps: [
        { num: '01', title: 'CNC 多軸彎管', desc: '依 3D 設計圖自動生成彎管路徑，±0.1° 角度重現性，適應複雜管路幾何。' },
        { num: '02', title: '管端成形', desc: '液壓端成形機完成擴管、縮管與翻邊，每次換型均執行首件 CMM 確認。' },
        { num: '03', title: '機器人 MIG/MAG 焊接', desc: 'Fanuc 弧焊工作站執行全程焊接，電流/電壓即時監控，焊縫數據同步上傳 MES。' },
        { num: '04', title: '熱處理', desc: '依材質選擇退火或應力消除熱處理，確保焊縫韌性與抗疲勞性能。' },
        { num: '05', title: '表面處理', desc: '依訂單規格執行 Zn-Ni 電鍍或粉體塗裝，並以鹽霧測試驗收。' },
        { num: '06', title: '100% 氣密測試', desc: '0.05 MPa 氮氣加壓 30 秒，NG 品自動隔離，測試結果數位化留存。' },
        { num: '07', title: 'CMM 量測', desc: 'Renishaw CMM 抽驗關鍵尺寸，首件及每 50 件一次，SPC 管制圖呈現。' },
        { num: '08', title: '出貨包裝', desc: '防護包裝，隨附完整材質證明（Mill Sheet）與檢測報告。' },
      ],
      qcHeading: '品質管控',
      qcIntro: '每件排氣零組件均通過 6 道製程內品質管制點，從原材料到出貨確保零缺陷。',
      qcItems: [
        { title: '來料檢驗（IQC）', desc: '進廠鋼材執行化學成分光譜分析及拉伸強度測試，不合格批次拒收。', spec: '依 JIS G4305 全數抽驗' },
        { title: '首件確認（FAI）', desc: '每批首件完整 CMM 量測 7 項關鍵尺寸，記錄於 PPAP 文件。', spec: 'APQP / PPAP Level 3' },
        { title: '焊縫即時監控', desc: '機器人焊接站電流電壓感測，任何異常自動停機並觸發警示。', spec: '100% 焊縫數據上傳 MES' },
        { title: '100% 氣密測試', desc: '獨立測試工站，0.05 MPa 氮氣 30 秒，NG 品自動隔離，全程可追溯。', spec: '100% 全數' },
        { title: '外觀 VT + 滲透 PT', desc: '焊縫外觀目視及抽驗滲透測試，確認無裂紋、氣孔等表面缺陷。', spec: 'VT: 100% / PT: 1/50' },
        { title: '出貨 CMM 抽驗', desc: '成品批次按 AQL 1.5 執行 CMM 抽驗，確保出廠品質穩定。', spec: 'AQL 1.5, ANSI Z1.4' },
      ],
      appHeading: '應用場景',
      appItems: [
        { title: '乘用車排氣系統', desc: '前段排氣管、中段消音器、後段消音器，適用 1.0L–2.4L 汽油 / Hybrid 引擎。', tags: ['Honda Civic', 'Honda CR-V', 'Honda Fit', 'Hybrid 車型'] },
        { title: '機車排氣管', desc: '125cc–400cc 機車全段排氣管路，依 Honda 機車廠規格協同開發。', tags: ['Honda PCX', 'Honda CB', 'Yamaha XMAX', 'Scooter 車型'] },
        { title: '觸媒轉換器外殼', desc: '三元觸媒金屬外殼，耐 950°C 短暫高溫，符合嚴格幾何精度要求。', tags: ['Three-way Catalyst', 'Euro 6', 'LEV III', '高溫不鏽鋼'] },
        { title: '工業排氣模組', desc: '工程車輛、農機引擎前段排氣及 DPF 外殼，依 Tier 4 Final / Stage V 設計。', tags: ['工程機械', 'DPF 外殼', 'Tier 4', 'Stage V'] },
      ],
      engHeading: '工程深度',
      engArticles: [
        {
          title: '高溫疲勞壽命：SUS409L vs SUS436L 的選材策略',
          body: 'SUS409L（11% Cr）具備良好成形性與焊接性，適用 600°C 以下持續溫度工況，是排氣系統中後段最常見選擇。SUS436L（17–18% Cr + Mo）在高溫抗氧化與抗熱疲勞上更勝一籌，適用於渦輪增壓前段及觸媒外殼等高熱負荷部位。富惟採用分段設計策略——前段高溫區使用 SUS436L，中後段使用 SUS409L——並藉助 SolidWorks Simulation 熱分析確保材料選用與實際工況吻合。',
        },
        {
          title: '機器人焊接的熱輸入管控與 MES 閉環品質系統',
          body: 'MIG/MAG 焊接的核心品質指標是焊接熱輸入量（Heat Input）。富惟焊接工站配備即時電流/電壓感測器，透過 MES 對每道焊縫的熱輸入量進行 SPC 統計管制。當熱輸入超出管制界限時，系統自動停機並標記問題批次。這套閉環系統讓富惟在 Honda 供應鏈中維持 0.3 ppm 不良率目標。',
        },
      ],
      engCerts: ['IATF 16949:2016', 'ISO 14001:2015', 'ISO 45001:2018', 'Honda Q-1 認可供應商'],
      faqHeading: '常見問答',
      faqItems: [
        { q: '富惟是否提供 PPAP 文件？', a: '是。富惟提供完整 PPAP Level 3 套件，含 FMEA、Control Plan、MSA、尺寸報告及材質證明，符合 AIAG 最新版本。' },
        { q: '最小訂購量（MOQ）是多少？', a: '樣品試產 MOQ 為 50 件，量產 MOQ 依複雜度為 500–2,000 件，歡迎洽詢精確報價。' },
        { q: '交期安排？', a: '新品開發（含模具）通常 8–12 週。量產補單一般 2–4 週。急件視產線排程另議。' },
        { q: '是否支援 OEM 設計圖開發？', a: '全面支援。富惟具備 SolidWorks 3D 設計能力，可依 2D 圖或 3D 模型執行 DFM 審查並回饋製程建議。' },
        { q: '是否提供海外出貨？', a: '是。富惟提供 FOB 高雄、CIF、DDP 等多種貿易條件，並可協助安排第三方驗貨（SGS / BV）。' },
      ],
      ctaHeading: '準備好開始合作了嗎？',
      ctaSub: '請提供您的技術需求，富惟工業將在 2 個工作日內回覆可行性評估與報價。',
      ctaBtn1: '索取報價',
      ctaBtn2: '聯絡業務',
    },
    en: {
      back: '← Back',
      category: 'Product Lines · Exhaust Systems',
      title: 'Exhaust System Components',
      subtitle: 'Engineered for thermal durability and acoustic performance — a long-term Honda supply chain partner',
      badges: ['Honda Supply Chain', 'IATF 16949', 'SUS409L / SUS436L', '100% Leak Tested'],
      stats: [
        { value: '30+', label: 'Years of Supply' },
        { value: '±0.3mm', label: 'Assembly Tolerance' },
        { value: '100%', label: 'Leak Tested' },
        { value: '800°C', label: 'Thermal Rating' },
      ],
      overviewHeading: 'Product Overview',
      overviewBody:
        "Fullwei's exhaust system portfolio covers muffler bodies, exhaust pipe sections, catalytic converter housings, and complete tube assemblies. Manufactured from SUS409L/SUS436L stainless steel through CNC multi-axis tube bending, robotic MIG/MAG welding, heat treatment, and 100% leak testing — every component is qualified for long-term durability under high temperature, vibration, and corrosive conditions. As a long-standing Tier 1 supplier to Honda Taiwan and Guangzhou Honda, Fullwei provides full capability from design collaboration to volume production.",
      keySpecs: [
        { label: 'Material', value: 'SUS409L / SUS436L / Carbon Steel SPHC' },
        { label: 'Tube OD Range', value: 'OD 20–120mm' },
        { label: 'Wall Thickness', value: '0.8–3.0mm' },
        { label: 'Assembly Tolerance', value: '±0.3mm' },
        { label: 'Thermal Rating', value: 'Continuous 800°C / Peak 900°C' },
        { label: 'Surface Treatment', value: 'Zn-Ni plating / Powder coat (optional)' },
      ],
      specsHeading: 'Technical Specifications',
      specGroups: [
        {
          category: 'Material',
          rows: [
            { param: 'Base Material', value: 'SUS409L (std) / SUS436L (high-temp) / SPHC (carbon steel)' },
            { param: 'Wall Thickness', value: '0.8 / 1.0 / 1.2 / 1.5 / 2.0 / 3.0mm (customizable)' },
            { param: 'Material Certification', value: 'Equivalent to JIS G4305 / ASTM A240' },
            { param: 'Hardness (HV)', value: '≤ 200 HV (annealed)' },
          ],
        },
        {
          category: 'Dimensional Tolerances',
          rows: [
            { param: 'Tube OD', value: '20mm – 120mm' },
            { param: 'Bend Radius', value: '1.0D – 3.5D (D = OD)' },
            { param: 'Straightness', value: '≤ 1.0mm / 1000mm' },
            { param: 'Assembly Tolerance', value: '±0.3mm (critical holes: ±0.1mm)' },
            { param: 'Length Tolerance', value: '±1.0mm' },
          ],
        },
        {
          category: 'Weld Specification',
          rows: [
            { param: 'Welding Method', value: 'MIG/MAG (robotic) / TIG (precision joints)' },
            { param: 'Welding Standard', value: 'ISO 3834-2' },
            { param: 'Weld Inspection', value: 'VT (100%) / PT (sampled) / Destructive (per lot)' },
            { param: 'Porosity', value: '≤ 0.5mm pores, non-continuous, per AWS D1.1' },
          ],
        },
        {
          category: 'Performance Testing',
          rows: [
            { param: 'Leak Test', value: '100% coverage, N₂ at 0.05 MPa × 30 sec' },
            { param: 'Thermal Cycle', value: '800°C × 500 cycles, deformation ≤ 0.5mm' },
            { param: 'Salt Spray', value: 'JIS Z2371 / 480h (carbon) / 720h (stainless)' },
            { param: 'Vibration Fatigue', value: 'SAE J1544 / 2M cycles @ ±2mm amplitude' },
          ],
        },
      ],
      customHeading: 'Customization Options',
      customOptions: [
        {
          title: 'Material Grade',
          desc: 'Tailored configurations from carbon steel to full SUS436L stainless, or zone-specific mixed alloy assemblies.',
          tags: ['SPHC', 'SUS409L', 'SUS436L', 'Duplex Steel'],
        },
        {
          title: 'Surface Treatment',
          desc: 'Available in Zn-Ni electroplating (corrosion priority), high-temp powder coat, or mechanical polish to OEM surface specs.',
          tags: ['Zn-Ni Plating', 'Powder Coat', 'Mechanical Polish', 'Anodizing'],
        },
        {
          title: 'End Forming',
          desc: 'Expansion, compression, flanging, and thread forming to meet quick-connect clip or flange interface requirements.',
          tags: ['Tube Expansion', 'Compression', 'Flanging', 'Flare Fitting'],
        },
        {
          title: 'Sub-Assembly',
          desc: 'Complete sub-assembly including heat shield installation, rubber hanger welding, and insulation wrapping.',
          tags: ['Heat Shield', 'Insulation', 'Rubber Hanger', 'Sub-Assembly'],
        },
      ],
      processHeading: 'Manufacturing Process',
      processSteps: [
        { num: '01', title: 'CNC Multi-Axis Bending', desc: 'Automatic path generation from 3D CAD, ±0.1° angular repeatability, handling complex tube geometries.' },
        { num: '02', title: 'End Forming', desc: 'Hydraulic press for expansion, compression, and flanging. First-piece CMM verification per setup.' },
        { num: '03', title: 'Robotic MIG/MAG Welding', desc: 'Fanuc arc welding cells with real-time current/voltage monitoring. All weld data uploaded to MES.' },
        { num: '04', title: 'Heat Treatment', desc: 'Material-specific anneal or stress-relief cycles to restore weld toughness and fatigue resistance.' },
        { num: '05', title: 'Surface Treatment', desc: 'Zn-Ni plating or powder coat per order spec, with salt spray test qualification.' },
        { num: '06', title: '100% Leak Test', desc: 'N₂ at 0.05 MPa × 30 sec. NG parts automatically isolated. Results stored digitally.' },
        { num: '07', title: 'CMM Inspection', desc: 'Renishaw CMM spot-checks critical dimensions: first-off and every 50 pieces, SPC control charts.' },
        { num: '08', title: 'Outbound Packaging', desc: 'Customer-spec protective packaging with full material certificates and inspection reports.' },
      ],
      qcHeading: 'Quality & Testing',
      qcIntro: 'Every exhaust component passes through 6 in-process quality gates from raw material to shipment, targeting zero-defect delivery.',
      qcItems: [
        { title: 'Incoming Inspection (IQC)', desc: 'OES spectrometer and tensile test on all incoming steel. Non-conforming lots rejected immediately.', spec: 'Per JIS G4305, full lot inspection' },
        { title: 'First Article Inspection (FAI)', desc: '7 critical dimensions on first-off per lot, filed in PPAP documentation.', spec: 'APQP / PPAP Level 3' },
        { title: 'Real-Time Weld Monitoring', desc: 'Current/voltage sensors on all robotic cells. Deviation auto-stops the cell and triggers an alarm.', spec: '100% weld data to MES' },
        { title: '100% Leak Test', desc: 'Dedicated station. N₂ at 0.05 MPa × 30 sec. NG auto-isolated with full traceability.', spec: '100% coverage' },
        { title: 'Visual + Penetrant Test', desc: 'Weld VT and sampled PT to confirm no cracks, porosity, or surface defects.', spec: 'VT: 100% / PT: 1/50' },
        { title: 'Outbound CMM Sampling', desc: 'Final batch CMM per AQL 1.5, ensuring consistent outgoing quality.', spec: 'AQL 1.5, ANSI Z1.4' },
      ],
      appHeading: 'Application Scenarios',
      appItems: [
        { title: 'Passenger Car Exhaust Systems', desc: 'Front pipe, center muffler, rear muffler for 1.0L–2.4L gasoline and hybrid powertrains.', tags: ['Honda Civic', 'Honda CR-V', 'Honda Fit', 'Hybrid Vehicles'] },
        { title: 'Motorcycle Exhaust', desc: '125cc–400cc full exhaust systems co-developed to Honda motorcycle plant specifications.', tags: ['Honda PCX', 'Honda CB', 'Yamaha XMAX', 'Scooter Platforms'] },
        { title: 'Catalytic Converter Housings', desc: 'Three-way catalyst metal housings rated for brief 950°C peaks with tight geometric precision.', tags: ['3-Way Catalyst', 'Euro 6', 'LEV III', 'High-Temp Stainless'] },
        { title: 'Industrial Exhaust Modules', desc: 'Front exhaust and DPF housings for construction/ag equipment per Tier 4 Final / Stage V.', tags: ['Construction Equipment', 'DPF Housing', 'Tier 4', 'Stage V'] },
      ],
      engHeading: 'Engineering Deep-Dive',
      engArticles: [
        {
          title: 'Thermal Fatigue Life: SUS409L vs SUS436L Material Selection',
          body: 'SUS409L (11% Cr) offers excellent formability and weldability for applications under 600°C continuous — it is the standard choice for mid/downstream exhaust segments. SUS436L (17–18% Cr + Mo) outperforms in high-temperature oxidation resistance and thermal fatigue, making it the preferred material for turbocharged front sections and catalyst housings. Fullwei employs a zone-specific material strategy validated by SolidWorks Simulation thermal analysis to ensure each material grade is matched to actual operating conditions.',
        },
        {
          title: 'Robotic Weld Heat Input Control and MES Closed-Loop Quality',
          body: 'The critical quality metric in MIG/MAG welding is heat input. Fullwei robotic cells are equipped with real-time current/voltage sensors that feed every weld joint into the MES system for SPC-tracked heat input monitoring. When heat input exceeds the control limit, the cell auto-stops and the lot is flagged — preventing non-conforming product from advancing downstream. This closed-loop system enables Fullwei to maintain its 0.3 ppm defect-rate target across Honda supply commitments.',
        },
      ],
      engCerts: ['IATF 16949:2016', 'ISO 14001:2015', 'ISO 45001:2018', 'Honda Q-1 Approved Supplier'],
      faqHeading: 'Frequently Asked Questions',
      faqItems: [
        { q: 'Does Fullwei provide PPAP documentation?', a: 'Yes. Fullwei provides a complete PPAP Level 3 package including FMEA, Control Plan, MSA, dimensional reports, and material certifications per the latest AIAG requirements.' },
        { q: 'What is the minimum order quantity (MOQ)?', a: 'Sample runs start at 50 pcs. Production MOQ is 500–2,000 pcs depending on complexity. Contact us for an accurate quote.' },
        { q: 'What are typical lead times?', a: 'New tooling and development takes 8–12 weeks. Production replenishment is typically 2–4 weeks. Expedite service is available on request.' },
        { q: 'Do you support OEM drawing development?', a: "Fully supported. Fullwei's team reviews 2D drawings and 3D models, provides DFM feedback, and manages the full development cycle to PPAP." },
        { q: 'Can you ship internationally?', a: 'Yes. Fullwei is export-qualified with FOB Kaohsiung, CIF, and DDP terms available. Third-party inspection (SGS / BV) can be arranged on request.' },
      ],
      ctaHeading: 'Ready to Start?',
      ctaSub: 'Share your technical requirements and Fullwei will respond with a feasibility assessment and quotation within 2 business days.',
      ctaBtn1: 'Request RFQ',
      ctaBtn2: 'Contact Sales',
    },
  },

  // ─────────────────────────────────────────────────────────
  // 02  機車車架零組件
  // ─────────────────────────────────────────────────────────
  {
    slug: 'motorcycle-frame',
    zh: {
      back: '← 返回',
      category: '產品線 · 機車車架零組件',
      title: '機車結構車架零組件',
      subtitle: '精密連續模沖壓與機器人焊接，滿足 Honda、Yamaha OEM 車架尺寸要求',
      badges: ['Honda · Yamaha', 'IATF 16949', 'CMM 全件量測', '機器人焊接'],
      stats: [
        { value: '±0.05mm', label: '關鍵尺寸公差' },
        { value: '5,000萬+', label: '年產能（件）' },
        { value: '800T', label: '最大沖壓噸位' },
        { value: '100%', label: 'CMM 首件確認' },
      ],
      overviewHeading: '產品概覽',
      overviewBody:
        '富惟工業的機車車架零組件產品線，涵蓋主車架支架、副車架總成、後搖臂（Swing Arm）焊接組件，以及各式機車結構件。採用 SPFC540、SPFH590 等高強度鋼材，透過連續模精密沖壓、機器人 MIG 焊接及 CMM 三次元量測，確保每件產品符合 OEM 嚴格的尺寸公差與結構強度要求。富惟為 Honda 台灣、Honda 越南及 Yamaha 等機車廠的長期供應商，具備高量生產與快速換型能力。',
      keySpecs: [
        { label: '主材', value: 'SPFC540 / SPFH590 / SPCC / SPHC' },
        { label: '沖壓噸位', value: '最大 800T 連續模 / 移轉模' },
        { label: '關鍵尺寸公差', value: '±0.05mm（定位孔 ±0.02mm）' },
        { label: '年產能', value: '5,000 萬件以上' },
        { label: '焊縫強度', value: '符合 OEM 拉伸 / 剪切規格' },
        { label: '表面處理', value: 'ED 電著塗裝 / 粉體塗裝' },
      ],
      specsHeading: '技術規格',
      specGroups: [
        {
          category: '材料規格',
          rows: [
            { param: '主體材質', value: 'SPFC540 / SPFH590（高強鋼）/ SPCC / SPHC（一般鋼）' },
            { param: '降伏強度', value: '≥ 540 MPa（SPFC540）/ ≥ 590 MPa（SPFH590）' },
            { param: '板厚範圍', value: '1.2 / 1.6 / 2.0 / 2.3 / 3.0 / 4.0mm' },
            { param: '材料認證', value: 'JIS G3135 / JIS G3131' },
          ],
        },
        {
          category: '沖壓工藝',
          rows: [
            { param: '模具類型', value: '連續模（Progressive）/ 移轉模（Transfer）' },
            { param: '最大沖壓噸位', value: '800T' },
            { param: '衝次（SPM）', value: '15–80 SPM（依產品複雜度）' },
            { param: '尺寸公差', value: '±0.05mm（重要定位孔 ±0.02mm）' },
            { param: '平面度', value: '≤ 0.3mm / 300mm' },
          ],
        },
        {
          category: '焊接規格',
          rows: [
            { param: '焊接工法', value: 'MIG/MAG（機器人）/ 點焊（Spot Welding）' },
            { param: '機器人型號', value: 'Fanuc M-10iA / M-20iA 系列' },
            { param: '焊縫強度驗證', value: '拉伸 + 剪切測試，依 OEM 規格' },
            { param: '焊接標準', value: 'ISO 3834-2 / AWS D1.1' },
          ],
        },
        {
          category: '品質量測',
          rows: [
            { param: 'CMM 量測', value: 'Renishaw CMM，首件全量 + AQL 抽驗' },
            { param: '量測項目', value: '孔位 / 輪廓 / 平面度 / 焊縫位置' },
            { param: '報告格式', value: 'SPC 管制圖 / PPAP Level 3 文件' },
            { param: '追溯系統', value: 'MES 批次管理，全程可追溯' },
          ],
        },
      ],
      customHeading: '客製選項',
      customOptions: [
        {
          title: '高強鋼升級',
          desc: '依車架結構需求，提供 SPFC540 至 980 MPa 超高強鋼的材質升級方案，配合輕量化設計。',
          tags: ['SPFC540', 'SPFH590', 'AHSS 980', '輕量化'],
        },
        {
          title: '表面防腐處理',
          desc: '提供 ED 電著塗裝（底漆）、粉體塗裝（面漆）、電鍍鋅等多種防腐方案，依車款規格客製。',
          tags: ['ED 電著', '粉體塗裝', 'Zn 電鍍', '陰極電泳'],
        },
        {
          title: '焊接組裝整合',
          desc: '可在沖壓後直接整合機器人焊接及次組裝程序，提供半成品或成品交付，降低客戶組裝成本。',
          tags: ['焊接次組裝', '一站式交付', '零件整合', '物料管理'],
        },
        {
          title: '模具自製能力',
          desc: '富惟具備內部模具設計與製造能力，可縮短新品開發週期，並提供模具維護與修改服務。',
          tags: ['模具設計', '模具自製', 'DFM 支援', '快速換型'],
        },
      ],
      processHeading: '製程流程',
      processSteps: [
        { num: '01', title: '鋼材進料 / 剪切', desc: '依訂單規格裁切鋼捲，每批執行 IQC 機械性質測試，確認材料符合規格。' },
        { num: '02', title: '連續模精密沖壓', desc: '高速連續模成形，多工序整合，±0.05mm 尺寸重現性，SPM 依料件複雜度調整。' },
        { num: '03', title: '去毛刺 / 清洗', desc: '自動去毛刺設備處理沖壓毛邊，鹼性清洗槽除油，確保焊接面潔淨度。' },
        { num: '04', title: '機器人 MIG 焊接', desc: 'Fanuc 焊接機器人依 3D 焊接路徑執行焊接，夾具保證定位精度，焊縫數據即時上傳 MES。' },
        { num: '05', title: '焊後整形矯正', desc: '針對焊接熱變形進行矯正，確保組件符合 OEM 幾何公差要求。' },
        { num: '06', title: 'CMM 三次元量測', desc: 'Renishaw CMM 量測關鍵孔位、輪廓及焊縫位置，首件全量測，後續依 AQL 抽驗。' },
        { num: '07', title: 'ED 電著塗裝', desc: '陰極電泳底漆，依 OEM 規格控制膜厚（通常 15–25μm），提供優異底層防腐性能。' },
        { num: '08', title: '出貨包裝', desc: '依客戶包裝規格執行，隨附 CMM 報告、材質證明（Mill Sheet）及 PPAP 文件。' },
      ],
      qcHeading: '品質管控',
      qcIntro: '機車車架零組件涉及車輛安全結構，富惟設置 7 道品質管制點，確保每件產品的尺寸精度與結構強度符合 OEM 規格。',
      qcItems: [
        { title: '來料檢驗（IQC）', desc: '進廠鋼材執行降伏強度、拉伸強度及延伸率測試，不合格批次拒收。', spec: 'JIS G3135 全數抽驗' },
        { title: '首件確認（FAI）', desc: '每批首件 CMM 全量測 12 項關鍵尺寸，記錄於 PPAP Level 3 文件。', spec: 'APQP / PPAP Level 3' },
        { title: '製程中尺寸監控', desc: '連續模沖壓中每 50 件抽驗關鍵孔位，超出管制界限自動停線。', spec: 'SPC 管制圖' },
        { title: '焊縫拉伸 / 剪切測試', desc: '每批次破壞性測試，確認焊縫強度符合 OEM 規格要求。', spec: '依 OEM 規格，抽驗 3 件/批' },
        { title: 'CMM 出廠抽驗', desc: '依 AQL 1.5 執行出廠 CMM 抽驗，確保尺寸精度一致。', spec: 'AQL 1.5, ANSI Z1.4' },
        { title: 'ED 塗裝厚度驗收', desc: '每批次以磁性膜厚計抽驗 ED 塗裝厚度，確保防腐性能。', spec: '目標 15–25μm，公差 ±3μm' },
      ],
      appHeading: '應用場景',
      appItems: [
        { title: '主車架支架', desc: '引擎安裝座、轉向柱支架、車架補強件，適用各類 125–400cc 通勤及運動機車。', tags: ['Honda PCX', 'Honda CB300R', 'Yamaha NMAX', '通勤機車'] },
        { title: '副車架總成', desc: '後座支架、尾段副車架焊接組件，提供 Yamaha MT 系列及 Honda CB 系列 OEM 供應。', tags: ['Honda CB', 'Yamaha MT', '副車架', '焊接總成'] },
        { title: '後搖臂（Swing Arm）', desc: '高強鋼後搖臂焊接總成，±0.05mm 定位精度，符合 Honda 動態行駛測試規格。', tags: ['Swing Arm', '高強鋼', '動態測試', 'OEM 驗收'] },
        { title: '機車底板 / 踏板', desc: '薄板沖壓輕量化設計，整合防滑紋路及安裝孔，符合人因工程規格。', tags: ['薄板沖壓', '輕量化', '防滑設計', 'PCX · Forza'] },
      ],
      engHeading: '工程深度',
      engArticles: [
        {
          title: '高強鋼沖壓的回彈控制策略',
          body: '高強鋼（SPFC540/SPFH590）在沖壓成形後存在顯著的彈性回彈（Springback）問題，若未適當補償，會導致成品尺寸超差。富惟透過模具幾何補償（Overbend 過彎設計）、壓邊力優化及 FEM 有限元素模擬，系統性地控制回彈量，確保成品尺寸符合 ±0.05mm 公差。此外，富惟採用雙向拉伸成形策略，進一步降低各向異性影響，提高尺寸穩定性。',
        },
        {
          title: '機器人焊接夾具的設計哲學：精度鎖定與快速換型的平衡',
          body: '機車車架焊接夾具需要在兩個看似矛盾的目標間取得平衡：±0.05mm 的高精度定位，以及應對多料號生產的快速換型能力。富惟採用模組化夾具設計——固定基座 + 可換式定位銷組合——讓換型時間縮短至 15 分鐘以內，同時不犧牲定位精度。每套夾具均附有基準坐標系統，可直接以 CMM 驗證夾具精度，確保量產一致性。',
        },
      ],
      engCerts: ['IATF 16949:2016', 'ISO 14001:2015', 'ISO 45001:2018', 'Honda Q-1 認可供應商', 'Yamaha 認可供應商'],
      faqHeading: '常見問答',
      faqItems: [
        { q: '富惟能承接安全結構件（Safety-Critical Parts）嗎？', a: '可以。富惟具備 IATF 16949 認證及完整的 APQP 流程，針對安全結構件提供 DFMEA、PFMEA 及 Control Plan，並依 OEM 要求執行特殊特性（SC）管制。' },
        { q: 'MOQ 與交期？', a: '量產 MOQ 依產品複雜度為 1,000–5,000 件。新品含模具開發通常需 8–12 週；量產補單一般 2–4 週。' },
        { q: '是否支援 3D 模型設計協作？', a: '是。富惟工程團隊使用 SolidWorks 進行 3D 設計與 DFM 分析，可依客戶提供之 3D 模型（STEP/IGES）直接進行模具設計。' },
        { q: '模具費用如何計算？', a: '模具費用依結構複雜度及精度要求報價，通常採買斷制，並享有富惟提供的免費模具維護服務（量產期間）。' },
        { q: '是否提供 ED 電著塗裝以外的表面處理？', a: '是。富惟可提供粉體塗裝（含多色選項）、電鍍鋅（Zn）、Zn-Ni 合金鍍及拋光處理，依客戶規格選擇。' },
      ],
      ctaHeading: '準備開始合作？',
      ctaSub: '請提供您的車架零組件需求或技術圖面，我們將在 2 個工作日內回覆評估與報價。',
      ctaBtn1: '索取報價',
      ctaBtn2: '聯絡業務',
    },
    en: {
      back: '← Back',
      category: 'Product Lines · Motorcycle Frame Components',
      title: 'Motorcycle Structural Frame Components',
      subtitle: 'Precision progressive die stamping and robotic welding — meeting Honda and Yamaha OEM dimensional requirements',
      badges: ['Honda · Yamaha', 'IATF 16949', 'CMM Verified', 'Robotic Welding'],
      stats: [
        { value: '±0.05mm', label: 'Critical Tolerance' },
        { value: '50M+', label: 'Annual Capacity (pcs)' },
        { value: '800T', label: 'Max Press Tonnage' },
        { value: '100%', label: 'CMM First Article' },
      ],
      overviewHeading: 'Product Overview',
      overviewBody:
        "Fullwei's motorcycle frame component line covers main frame brackets, sub-frame assemblies, swing arm welded components, and a wide range of motorcycle structural parts. Manufactured from SPFC540 and SPFH590 high-strength steels through precision progressive die stamping, robotic MIG welding, and CMM coordinate measurement — every component is built to OEM dimensional tolerances and structural strength requirements. Fullwei is a long-standing supplier to Honda Taiwan, Honda Vietnam, and Yamaha, with high-volume production and rapid changeover capability.",
      keySpecs: [
        { label: 'Material', value: 'SPFC540 / SPFH590 / SPCC / SPHC' },
        { label: 'Press Tonnage', value: 'Up to 800T progressive / transfer die' },
        { label: 'Critical Tolerance', value: '±0.05mm (locating holes: ±0.02mm)' },
        { label: 'Annual Capacity', value: '50M+ pcs' },
        { label: 'Weld Strength', value: 'Meets OEM tensile / shear spec' },
        { label: 'Surface Treatment', value: 'ED electrocoat / Powder coat' },
      ],
      specsHeading: 'Technical Specifications',
      specGroups: [
        {
          category: 'Material',
          rows: [
            { param: 'Base Material', value: 'SPFC540 / SPFH590 (HSLA) / SPCC / SPHC (mild steel)' },
            { param: 'Yield Strength', value: '≥ 540 MPa (SPFC540) / ≥ 590 MPa (SPFH590)' },
            { param: 'Sheet Thickness', value: '1.2 / 1.6 / 2.0 / 2.3 / 3.0 / 4.0mm' },
            { param: 'Material Standard', value: 'JIS G3135 / JIS G3131' },
          ],
        },
        {
          category: 'Stamping',
          rows: [
            { param: 'Die Type', value: 'Progressive / Transfer die' },
            { param: 'Max Tonnage', value: '800T' },
            { param: 'Stroke Rate (SPM)', value: '15–80 SPM (per product complexity)' },
            { param: 'Dimensional Tolerance', value: '±0.05mm (locating holes: ±0.02mm)' },
            { param: 'Flatness', value: '≤ 0.3mm / 300mm' },
          ],
        },
        {
          category: 'Welding',
          rows: [
            { param: 'Welding Method', value: 'MIG/MAG (robotic) / Spot welding' },
            { param: 'Robot Model', value: 'Fanuc M-10iA / M-20iA series' },
            { param: 'Weld Strength Verification', value: 'Tensile + shear test to OEM spec' },
            { param: 'Welding Standard', value: 'ISO 3834-2 / AWS D1.1' },
          ],
        },
        {
          category: 'Quality Measurement',
          rows: [
            { param: 'CMM System', value: 'Renishaw CMM, first-article full measurement + AQL sampling' },
            { param: 'Measured Features', value: 'Hole positions / contour / flatness / weld location' },
            { param: 'Report Format', value: 'SPC control charts / PPAP Level 3' },
            { param: 'Traceability', value: 'MES lot management, full traceability' },
          ],
        },
      ],
      customHeading: 'Customization Options',
      customOptions: [
        {
          title: 'High-Strength Steel Upgrade',
          desc: 'Material upgrades from SPFC540 to 980 MPa ultra-high-strength steel for lightweighting and structural optimization.',
          tags: ['SPFC540', 'SPFH590', 'AHSS 980', 'Lightweighting'],
        },
        {
          title: 'Corrosion Protection',
          desc: 'ED electrocoat (primer), powder coat (topcoat), zinc plating, and Zn-Ni options to meet specific OEM corrosion specifications.',
          tags: ['ED Electrocoat', 'Powder Coat', 'Zn Plating', 'Cathodic ED'],
        },
        {
          title: 'Welded Sub-Assembly',
          desc: 'Integrated stamping-to-weld flow with robotic welding and sub-assembly, enabling semi-finished or finished component delivery.',
          tags: ['Welded Assembly', 'One-Stop Delivery', 'Part Integration', 'Logistics'],
        },
        {
          title: 'In-House Tooling',
          desc: 'Fullwei designs and manufactures tooling in-house, shortening development cycles and providing ongoing tool maintenance and modification.',
          tags: ['Tool Design', 'In-House Tooling', 'DFM Support', 'Rapid Changeover'],
        },
      ],
      processHeading: 'Manufacturing Process',
      processSteps: [
        { num: '01', title: 'Material Receiving & Slitting', desc: 'Steel coils cut to order spec. IQC mechanical testing on every incoming lot.' },
        { num: '02', title: 'Progressive Die Stamping', desc: 'High-speed multi-stage forming with ±0.05mm dimensional repeatability. SPM adjusted per part complexity.' },
        { num: '03', title: 'Deburring & Cleaning', desc: 'Automated deburring of stamped edges. Alkaline wash to remove oil and ensure clean weld surfaces.' },
        { num: '04', title: 'Robotic MIG Welding', desc: 'Fanuc welding robots follow 3D programmed paths. Fixtures ensure positional accuracy. Weld data uploaded to MES.' },
        { num: '05', title: 'Post-Weld Correction', desc: 'Thermal distortion corrected to ensure final geometry meets OEM dimensional tolerances.' },
        { num: '06', title: 'CMM Dimensional Inspection', desc: 'Renishaw CMM measures critical holes, contours, and weld positions. Full first-article, then AQL sampling.' },
        { num: '07', title: 'ED Electrocoat', desc: 'Cathodic electrocoat primer applied to OEM spec film thickness (typically 15–25μm).' },
        { num: '08', title: 'Outbound Packaging', desc: 'Per customer packaging spec, with CMM reports, mill certificates, and PPAP documentation included.' },
      ],
      qcHeading: 'Quality & Testing',
      qcIntro: 'Motorcycle frame components are safety-critical structures. Fullwei maintains 7 in-process quality control points ensuring every part meets OEM dimensional and structural requirements.',
      qcItems: [
        { title: 'Incoming Inspection (IQC)', desc: 'Yield strength, tensile strength, and elongation tests on all incoming steel. Non-conforming lots rejected.', spec: 'Per JIS G3135, full lot' },
        { title: 'First Article Inspection (FAI)', desc: '12 critical dimensions CMM-measured on first-off per lot, filed in PPAP documentation.', spec: 'APQP / PPAP Level 3' },
        { title: 'In-Process Dimension Monitoring', desc: 'Critical hole positions sampled every 50 pcs during stamping. Auto-stop if outside control limits.', spec: 'SPC control charts' },
        { title: 'Weld Tensile / Shear Test', desc: 'Destructive batch testing to confirm weld strength meets OEM specifications.', spec: '3 pcs / lot, per OEM spec' },
        { title: 'Outbound CMM Sampling', desc: 'Final CMM sampling per AQL 1.5 to ensure consistent outgoing dimensional quality.', spec: 'AQL 1.5, ANSI Z1.4' },
        { title: 'ED Coat Thickness Inspection', desc: 'Magnetic film gauge sampling of ED coat thickness to confirm corrosion protection performance.', spec: 'Target 15–25μm, ±3μm' },
      ],
      appHeading: 'Application Scenarios',
      appItems: [
        { title: 'Main Frame Brackets', desc: 'Engine mounting brackets, steering column supports, and frame reinforcements for 125–400cc commuter and sport bikes.', tags: ['Honda PCX', 'Honda CB300R', 'Yamaha NMAX', 'Commuter Bikes'] },
        { title: 'Sub-Frame Assemblies', desc: 'Rear seat support brackets and tail-end sub-frame welded assemblies for Yamaha MT and Honda CB series OEM supply.', tags: ['Honda CB', 'Yamaha MT', 'Sub-Frame', 'Welded Assembly'] },
        { title: 'Swing Arm Assemblies', desc: 'High-strength steel swing arm welded assembly with ±0.05mm locating precision, meeting Honda dynamic test specifications.', tags: ['Swing Arm', 'High-Strength Steel', 'Dynamic Test', 'OEM Qualified'] },
        { title: 'Footboards & Step Plates', desc: 'Thin-sheet stamped lightweight designs with integrated anti-slip patterns and mounting holes meeting ergonomic specifications.', tags: ['Thin-Sheet Stamping', 'Lightweighting', 'Anti-Slip', 'PCX · Forza'] },
      ],
      engHeading: 'Engineering Deep-Dive',
      engArticles: [
        {
          title: 'Springback Control in High-Strength Steel Stamping',
          body: 'High-strength steels (SPFC540/SPFH590) exhibit significant elastic springback after forming — if not compensated, the result is out-of-tolerance parts. Fullwei systematically controls springback through die geometry compensation (overbend design), blank holder force optimization, and FEM simulation. A bidirectional stretching strategy further reduces anisotropy effects, achieving consistent ±0.05mm final dimensions across production lots.',
        },
        {
          title: 'Welding Fixture Design: Precision Lock vs. Rapid Changeover',
          body: "Motorcycle frame welding fixtures must balance two seemingly conflicting goals: ±0.05mm high-precision locating and rapid changeover to handle multi-part-number production. Fullwei uses a modular fixture architecture — fixed base plate with interchangeable locating pin sets — reducing changeover time to under 15 minutes without sacrificing positional accuracy. Every fixture includes a datum coordinate system that can be directly verified with CMM, ensuring production consistency from first piece to last.",
        },
      ],
      engCerts: ['IATF 16949:2016', 'ISO 14001:2015', 'ISO 45001:2018', 'Honda Q-1 Approved Supplier', 'Yamaha Approved Supplier'],
      faqHeading: 'Frequently Asked Questions',
      faqItems: [
        { q: 'Can Fullwei handle safety-critical parts?', a: 'Yes. Fullwei holds IATF 16949 certification and runs full APQP processes. Safety-critical components are controlled with DFMEA, PFMEA, and dedicated Control Plans per OEM Special Characteristics (SC) requirements.' },
        { q: 'What are MOQ and lead times?', a: 'Production MOQ is 1,000–5,000 pcs depending on complexity. New tooling and development takes 8–12 weeks; production replenishment is typically 2–4 weeks.' },
        { q: 'Do you support 3D model-based development?', a: 'Yes. Fullwei engineers use SolidWorks for 3D design and DFM analysis, and can work directly from customer-supplied STEP/IGES files for tooling design.' },
        { q: 'How is tooling cost structured?', a: 'Tooling is typically quoted as a one-time buyout fee, with complimentary maintenance provided throughout the production lifetime of the part.' },
        { q: 'What surface treatment options are available beyond ED coat?', a: 'Powder coat (multi-color), zinc electroplating (Zn), Zn-Ni alloy plating, and mechanical polish are all available per customer spec.' },
      ],
      ctaHeading: 'Ready to Start?',
      ctaSub: 'Share your frame component requirements or technical drawings and we will respond with an assessment and quotation within 2 business days.',
      ctaBtn1: 'Request RFQ',
      ctaBtn2: 'Contact Sales',
    },
  },

  // ─────────────────────────────────────────────────────────
  // 03  汽車固定架
  // ─────────────────────────────────────────────────────────
  {
    slug: 'automotive-brackets',
    zh: {
      back: '← 返回',
      category: '產品線 · 汽車固定架',
      title: '汽車內裝固定支架',
      subtitle: '移轉模精密沖壓，讓車內每一套系統穩固就位',
      badges: ['Tier 1 供應', 'IATF 16949', '移轉模精密沖壓', '多材質整合'],
      stats: [
        { value: '±0.02mm', label: '沖壓尺寸公差' },
        { value: '800T', label: '最大沖壓噸位' },
        { value: '100+', label: '活躍料號 / 月' },
        { value: '3,000萬+', label: '年產能（件）' },
      ],
      overviewHeading: '產品概覽',
      overviewBody:
        '富惟工業的汽車固定架產品線，涵蓋儀錶板支架、空調系統固定件、音響框架、座椅底板鋼架等車內精密五金件。採用 SPCC、SPFH590、HSLA 鋼材，透過移轉模與連續模精密沖壓、點焊及電著塗裝，提供公差 ±0.02–0.05mm 的高精度零組件。富惟同時具備多材質整合能力，支援鋼鋁混搭及嵌入式螺母設計，作為 Tier 1 供應商服務多家日系、歐系車廠。',
      keySpecs: [
        { label: '主材', value: 'SPCC / SPFH590 / HSLA / AL6061-T6' },
        { label: '沖壓噸位', value: '50T–800T 移轉模 / 連續模' },
        { label: '尺寸公差', value: '±0.02mm（精密孔）/ ±0.05mm（外形）' },
        { label: '板厚範圍', value: '0.5–3.0mm' },
        { label: '表面處理', value: 'ED 電著 / Zn 電鍍 / 粉體塗裝' },
        { label: '年產能', value: '3,000 萬件以上' },
      ],
      specsHeading: '技術規格',
      specGroups: [
        {
          category: '材料規格',
          rows: [
            { param: '主體材質', value: 'SPCC（冷軋）/ SPFH590（熱軋高強）/ HSLA / AL6061-T6' },
            { param: '板厚範圍', value: '0.5 / 0.8 / 1.0 / 1.2 / 1.5 / 2.0 / 2.5 / 3.0mm' },
            { param: '材料標準', value: 'JIS G3141（SPCC）/ JIS G3193（SPFH）/ ASTM B209（AL）' },
            { param: '降伏強度', value: '140–590 MPa（依材質）' },
          ],
        },
        {
          category: '沖壓工藝',
          rows: [
            { param: '模具類型', value: '移轉模（Transfer Die）/ 連續模（Progressive Die）' },
            { param: '沖壓噸位範圍', value: '50T–800T（依產品尺寸與板厚）' },
            { param: '精密孔公差', value: '±0.02mm' },
            { param: '外形公差', value: '±0.05mm' },
            { param: '表面粗糙度', value: 'Ra ≤ 1.6μm（配合面）' },
          ],
        },
        {
          category: '接合工藝',
          rows: [
            { param: '點焊（Spot Welding）', value: 'CTS / UTS 符合 AWS D8.1M，焊點間距 ≥ 3d' },
            { param: '投影焊（Projection）', value: '嵌入螺母、螺柱焊接，拉脫力 ≥ OEM 規格' },
            { param: 'MIG/MAG 焊接', value: '補強件局部焊接，ISO 3834-2' },
            { param: '自攻螺絲 / Clinching', value: '薄板多層接合，無熱影響區' },
          ],
        },
        {
          category: '表面處理',
          rows: [
            { param: 'ED 電著塗裝', value: '陰極電泳底漆，15–25μm，提供均勻底層防腐' },
            { param: '電鍍鋅（Zn）', value: '8–12μm，通過 JIS Z2371 鹽霧 240h' },
            { param: 'Zn-Ni 合金鍍', value: '5–8μm Ni，鹽霧耐蝕性提升 3–5 倍' },
            { param: '粉體塗裝', value: '60–80μm，多色選項，耐刮耐候' },
          ],
        },
      ],
      customHeading: '客製選項',
      customOptions: [
        {
          title: '嵌入式螺母 / 螺柱',
          desc: '投影焊嵌入 M4–M12 螺母或螺柱，拉脫力達 OEM 規格，替代二次加工，降低組裝成本。',
          tags: ['Weld Nut', '投影焊螺柱', 'M4–M12', '省工序'],
        },
        {
          title: '鋼鋁混搭設計',
          desc: '可整合 SPCC 鋼件與 AL6061-T6 鋁件，透過機械扣合或黏著接合，達成輕量化目標。',
          tags: ['SPCC + AL6061', '輕量化', '機械扣合', 'Hybrid 車型'],
        },
        {
          title: '多色粉體塗裝',
          desc: '提供黑色、灰色、客戶指定色粉體塗裝，RAL / Pantone 色系均可客製，適用外露件。',
          tags: ['粉體塗裝', 'RAL 色系', 'Pantone', '外露件'],
        },
        {
          title: '一站式供應',
          desc: '從鋼材進料、沖壓、接合、表面處理到包裝出貨，富惟提供完整製程整合，減少客戶供應鏈管理成本。',
          tags: ['一站式', '製程整合', '供應鏈管理', 'JIT 交付'],
        },
      ],
      processHeading: '製程流程',
      processSteps: [
        { num: '01', title: '備料 / 精密落料', desc: '依設計展開圖精密落料，確保毛料尺寸符合後續多工序公差要求。' },
        { num: '02', title: '移轉模多工序沖壓', desc: '多工站移轉模整合沖孔、成形、翻邊等工序，±0.02mm 精密孔位重現性。' },
        { num: '03', title: '翻邊 / 成形 / 打孔', desc: '補強翻邊、安裝孔加工，依圖面公差嚴格執行，首件 CMM 確認。' },
        { num: '04', title: '點焊 / 投影焊螺母', desc: '機器人點焊及投影焊嵌入螺母/螺柱，焊後拉脫力抽驗確認。' },
        { num: '05', title: '去毛刺 / 超音波清洗', desc: '全自動去毛刺設備處理沖壓毛邊，超音波清洗確保表面潔淨度。' },
        { num: '06', title: '表面處理', desc: 'ED 電著底漆或電鍍鋅，依訂單規格執行，鹽霧測試驗收。' },
        { num: '07', title: 'CMM 量測 + 外觀', desc: 'CMM 抽驗關鍵安裝孔及輪廓，外觀目視 100%，SPC 管制圖分析。' },
        { num: '08', title: '出貨包裝', desc: '依客戶包裝規格，隨附 CMM 報告、材質證明及 PPAP 文件。' },
      ],
      qcHeading: '品質管控',
      qcIntro: '汽車固定架的安裝精度直接影響車內系統的配合品質，富惟設置 6 道品質管制點，確保每件產品的尺寸與接合強度符合 OEM 規格。',
      qcItems: [
        { title: '來料檢驗（IQC）', desc: '鋼材進廠執行機械性質及板厚抽驗，不符規格批次拒收，附材質證明（Mill Sheet）。', spec: 'JIS G3141 全數抽驗' },
        { title: '首件確認（FAI）', desc: '每批首件 CMM 全量測，精密孔位 / 外形輪廓 / 翻邊高度全部確認，記錄於 PPAP 文件。', spec: 'APQP / PPAP Level 3' },
        { title: '製程中 SPC 監控', desc: '關鍵孔位每 100 件抽驗 5 件，執行 SPC 管制圖分析，防止製程漂移。', spec: 'Cpk ≥ 1.67（關鍵尺寸）' },
        { title: '焊點 / 螺母拉脫力測試', desc: '每批次抽驗點焊焊點 CTS 及螺母/螺柱拉脫力，確認符合 OEM 規格。', spec: '抽驗 5 件 / 批' },
        { title: '表面處理驗收', desc: '膜厚計抽驗 ED 塗裝或電鍍厚度，並執行鹽霧測試批次驗收。', spec: 'JIS Z2371 / 240h（Zn）/ 480h（Zn-Ni）' },
        { title: '出廠 AQL 抽驗', desc: '依 AQL 1.5 執行最終出廠抽驗，確保批次出廠品質穩定。', spec: 'AQL 1.5, ANSI Z1.4' },
      ],
      appHeading: '應用場景',
      appItems: [
        { title: '儀錶板支架', desc: '儀錶板主支架、副駕側支架，精度 ±0.05mm，確保 HMI 系統安裝位置正確。', tags: ['儀錶板 IP', 'Honda Accord', 'Toyota Camry', 'Tier 1 供應'] },
        { title: '空調系統固定件', desc: '壓縮機托架、冷凝器支架、鼓風機固定件，提供安裝精度 ±0.1mm，降低系統振動。', tags: ['空調壓縮機', '冷凝器', '鼓風機', '振動管控'] },
        { title: '音響 / 電子系統框架', desc: '薄板高精度音響框架、螢幕固定架，多孔沖壓設計，支援多種螢幕尺寸規格。', tags: ['車載音響', '螢幕支架', '薄板沖壓', '8–12 吋螢幕'] },
        { title: '座椅鋼架 / 安全帶扣件', desc: '座椅底板鋼架及安全帶安裝扣件，符合 FMVSS / ECE R14 安全規格要求。', tags: ['座椅鋼架', '安全帶扣件', 'FMVSS', 'ECE R14'] },
      ],
      engHeading: '工程深度',
      engArticles: [
        {
          title: '移轉模精密沖壓的公差鏈管控',
          body: '汽車固定架通常涉及 5–8 個安裝孔位的相對精度要求（公差 ±0.02–0.05mm），這對移轉模的工站設計提出了嚴苛的公差鏈管控挑戰。富惟在模具設計階段採用 GD&T 基準體系，透過 3-2-1 定位原則規劃各工站的基準面，確保公差鏈的最小化。配合 FEM 模流分析預測材料流動，優化模具間隙與壓料力，使最終產品的孔位精度穩定在 ±0.02mm 以內。',
        },
        {
          title: '點焊焊點強度的製程管控：CTS 與 UTS 的平衡',
          body: '點焊焊點的品質由兩個相互制衡的指標決定：CTS（Cross-Tension Strength，抗撕裂強度）和 UTS（Uniaxial Tensile Shear Strength，拉剪強度）。過高的焊接電流提升 UTS，但可能降低 CTS。富惟透過 DOE（田口實驗設計）系統性地找出電流、壓力、時間的最佳組合，在符合 AWS D8.1M 規範的前提下，同時達到 OEM 對 CTS 與 UTS 的雙重要求。',
        },
      ],
      engCerts: ['IATF 16949:2016', 'ISO 14001:2015', 'ISO 45001:2018', 'Tier 1 認可供應商（多廠）'],
      faqHeading: '常見問答',
      faqItems: [
        { q: '富惟能處理薄板（≤ 0.8mm）高精度沖壓嗎？', a: '可以。富惟具備 0.5mm 薄板沖壓能力，透過精密閉間隙模具設計與超音波清洗製程，確保薄板件的尺寸精度與表面品質。' },
        { q: '是否支援嵌入式螺母（Weld Nut）設計？', a: '是。富惟可在沖壓後直接整合投影焊嵌入 M4–M12 螺母或螺柱，並執行拉脫力測試確認，提供一站式交付。' },
        { q: 'MOQ 與交期？', a: '一般料號 MOQ 500–2,000 件，模具開發 6–10 週；量產補單 2–3 週。複雜組裝件視產品結構另議。' },
        { q: '是否提供尺寸報告隨貨？', a: '是。每批次出貨隨附 CMM 尺寸報告（PDF 格式）、材質證明（Mill Sheet）及合格率統計，依客戶要求也可提供 SPC 趨勢分析。' },
        { q: '富惟服務哪些車廠品牌？', a: '富惟主要服務 Honda 供應鏈（直供或 Tier 1），並為 Yamaha、Toyota、Nissan 等車廠的 Tier 1 / Tier 2 供應商提供零組件。' },
      ],
      ctaHeading: '準備開始合作？',
      ctaSub: '請提供您的固定架需求或 2D/3D 圖面，富惟將在 2 個工作日內回覆 DFM 建議與報價。',
      ctaBtn1: '索取報價',
      ctaBtn2: '聯絡業務',
    },
    en: {
      back: '← Back',
      category: 'Product Lines · Automotive Brackets',
      title: 'Automotive Interior Mounting Brackets',
      subtitle: 'Transfer die precision stamping — the hardware that holds every interior system in place',
      badges: ['Tier 1 Supply', 'IATF 16949', 'Transfer Die Stamping', 'Multi-Material'],
      stats: [
        { value: '±0.02mm', label: 'Stamping Tolerance' },
        { value: '800T', label: 'Max Press Tonnage' },
        { value: '100+', label: 'Active P/Ns / Month' },
        { value: '30M+', label: 'Annual Capacity (pcs)' },
      ],
      overviewHeading: 'Product Overview',
      overviewBody:
        "Fullwei's automotive bracket product line covers instrument panel brackets, A/C system mounts, audio frames, and seat floor structures — the precision hardware that positions every interior system. Manufactured from SPCC, SPFH590, and HSLA steels through transfer and progressive die stamping, spot welding, and electrocoating, Fullwei delivers components to ±0.02–0.05mm tolerances. Multi-material integration capability supports steel-aluminum hybrid designs and weld nut insertion for complete sub-assembly solutions. Fullwei supplies Tier 1 to multiple Japanese and European OEMs.",
      keySpecs: [
        { label: 'Material', value: 'SPCC / SPFH590 / HSLA / AL6061-T6' },
        { label: 'Press Tonnage', value: '50T–800T transfer / progressive die' },
        { label: 'Dimensional Tolerance', value: '±0.02mm (precision holes) / ±0.05mm (contour)' },
        { label: 'Sheet Thickness', value: '0.5–3.0mm' },
        { label: 'Surface Treatment', value: 'ED electrocoat / Zn plating / Powder coat' },
        { label: 'Annual Capacity', value: '30M+ pcs' },
      ],
      specsHeading: 'Technical Specifications',
      specGroups: [
        {
          category: 'Material',
          rows: [
            { param: 'Base Material', value: 'SPCC (cold-rolled) / SPFH590 (hot-rolled HSLA) / AL6061-T6' },
            { param: 'Sheet Thickness', value: '0.5 / 0.8 / 1.0 / 1.2 / 1.5 / 2.0 / 2.5 / 3.0mm' },
            { param: 'Material Standard', value: 'JIS G3141 (SPCC) / JIS G3193 (SPFH) / ASTM B209 (AL)' },
            { param: 'Yield Strength', value: '140–590 MPa (by material grade)' },
          ],
        },
        {
          category: 'Stamping',
          rows: [
            { param: 'Die Type', value: 'Transfer Die / Progressive Die' },
            { param: 'Press Tonnage Range', value: '50T–800T (per part size and thickness)' },
            { param: 'Precision Hole Tolerance', value: '±0.02mm' },
            { param: 'Contour Tolerance', value: '±0.05mm' },
            { param: 'Surface Roughness', value: 'Ra ≤ 1.6μm (mating surfaces)' },
          ],
        },
        {
          category: 'Joining',
          rows: [
            { param: 'Spot Welding', value: 'CTS / UTS per AWS D8.1M, weld pitch ≥ 3d' },
            { param: 'Projection Welding', value: 'Weld nut / stud insertion, pullout force ≥ OEM spec' },
            { param: 'MIG/MAG', value: 'Local reinforcement welds, ISO 3834-2' },
            { param: 'Clinching / Self-Pierce Riveting', value: 'Thin-sheet multi-layer joining, no heat-affected zone' },
          ],
        },
        {
          category: 'Surface Treatment',
          rows: [
            { param: 'ED Electrocoat', value: 'Cathodic electrocoat primer, 15–25μm, uniform corrosion protection' },
            { param: 'Zinc Plating (Zn)', value: '8–12μm, JIS Z2371 salt spray 240h' },
            { param: 'Zn-Ni Alloy Plating', value: '5–8% Ni, 3–5× corrosion resistance improvement' },
            { param: 'Powder Coat', value: '60–80μm, multi-color, scratch and weather resistant' },
          ],
        },
      ],
      customHeading: 'Customization Options',
      customOptions: [
        {
          title: 'Weld Nut / Stud Insertion',
          desc: 'Projection-welded M4–M12 nuts or studs integrated in-process, with pullout force testing, eliminating secondary operations.',
          tags: ['Weld Nut', 'Projection Stud', 'M4–M12', 'Process Savings'],
        },
        {
          title: 'Steel-Aluminum Hybrid',
          desc: 'SPCC steel and AL6061-T6 aluminum components joined through mechanical clinching or bonding for lightweighting targets.',
          tags: ['SPCC + AL6061', 'Lightweighting', 'Mechanical Clinching', 'Hybrid EV'],
        },
        {
          title: 'Multi-Color Powder Coat',
          desc: 'RAL and Pantone color-matched powder coat for exposed interior components, with texture and gloss level customization.',
          tags: ['Powder Coat', 'RAL Colors', 'Pantone', 'Exposed Parts'],
        },
        {
          title: 'One-Stop Supply',
          desc: 'Full flow from steel receiving, stamping, joining, surface treatment, to packaged shipment — reducing supply chain management overhead.',
          tags: ['One-Stop', 'Process Integration', 'Supply Chain', 'JIT Delivery'],
        },
      ],
      processHeading: 'Manufacturing Process',
      processSteps: [
        { num: '01', title: 'Precision Blanking', desc: 'Blanked to developed flat pattern with tight tolerances to support downstream multi-stage operations.' },
        { num: '02', title: 'Transfer Die Stamping', desc: 'Multi-station transfer die integrates piercing, forming, and flanging in one continuous flow. ±0.02mm hole repeatability.' },
        { num: '03', title: 'Flanging / Forming / Punching', desc: 'Reinforcement flanges and mounting holes formed per print tolerances. First-piece CMM confirmation per setup.' },
        { num: '04', title: 'Spot Weld / Projection Weld Nuts', desc: 'Robotic spot welding and weld nut/stud insertion. Pullout force sampling confirms weld quality.' },
        { num: '05', title: 'Deburring / Ultrasonic Cleaning', desc: 'Automated deburring of all stamped edges. Ultrasonic cleaning ensures surface cleanliness for surface treatment.' },
        { num: '06', title: 'Surface Treatment', desc: 'ED electrocoat primer or zinc plating per order spec, with salt spray test lot qualification.' },
        { num: '07', title: 'CMM Inspection + Visual', desc: 'CMM spot-checks critical mounting holes and contour. 100% visual inspection. SPC control chart analysis.' },
        { num: '08', title: 'Outbound Packaging', desc: 'Per customer packaging spec, with CMM reports, mill certificates, and PPAP documentation.' },
      ],
      qcHeading: 'Quality & Testing',
      qcIntro: 'Mounting bracket dimensional accuracy directly affects interior system fit quality. Fullwei maintains 6 in-process quality control points to ensure every part meets OEM dimensional and joint strength requirements.',
      qcItems: [
        { title: 'Incoming Inspection (IQC)', desc: 'Mechanical properties and sheet thickness sampling on all incoming steel. Non-conforming lots rejected with mill certificate reconciliation.', spec: 'Per JIS G3141, full lot' },
        { title: 'First Article Inspection (FAI)', desc: 'Full CMM on first-off per lot — precision holes, contour, flange height all verified and filed in PPAP documentation.', spec: 'APQP / PPAP Level 3' },
        { title: 'In-Process SPC Monitoring', desc: 'Critical holes sampled every 100 pcs (5 pcs / sample). SPC control charts prevent dimensional drift.', spec: 'Cpk ≥ 1.67 for critical dims' },
        { title: 'Spot Weld / Nut Pullout Test', desc: 'CTS and weld nut/stud pullout force tested per lot to confirm OEM strength specifications.', spec: '5 pcs / lot' },
        { title: 'Surface Coating Inspection', desc: 'Film thickness gauge sampling of ED coat or plating thickness. Salt spray test lot qualification.', spec: 'JIS Z2371 / 240h (Zn) / 480h (Zn-Ni)' },
        { title: 'Outbound AQL Inspection', desc: 'Final outbound AQL 1.5 sampling to ensure consistent shipped quality.', spec: 'AQL 1.5, ANSI Z1.4' },
      ],
      appHeading: 'Application Scenarios',
      appItems: [
        { title: 'Instrument Panel Brackets', desc: 'IP main cross-car beam brackets and passenger-side supports. ±0.05mm positional accuracy for precise HMI system mounting.', tags: ['IP Cross-Car Beam', 'Honda Accord', 'Toyota Camry', 'Tier 1 Supply'] },
        { title: 'A/C System Mounts', desc: 'Compressor brackets, condenser supports, and blower housings. ±0.1mm installation accuracy to reduce system vibration.', tags: ['A/C Compressor', 'Condenser', 'Blower Motor', 'NVH Control'] },
        { title: 'Audio / Display Frames', desc: 'Thin-sheet high-precision audio frames and screen mounting brackets with multi-hole stamping for 8–12" display compatibility.', tags: ['In-Car Audio', 'Display Mount', 'Thin-Sheet', '8–12" Screens'] },
        { title: 'Seat Structures / Seatbelt Anchors', desc: 'Seat floor pan structures and seatbelt anchor brackets compliant with FMVSS / ECE R14 safety requirements.', tags: ['Seat Structure', 'Seatbelt Anchor', 'FMVSS', 'ECE R14'] },
      ],
      engHeading: 'Engineering Deep-Dive',
      engArticles: [
        {
          title: 'Tolerance Stack-Up Control in Transfer Die Stamping',
          body: 'Automotive brackets typically require 5–8 mounting holes to hold ±0.02–0.05mm relative positional tolerances — a demanding challenge for transfer die station sequencing. Fullwei applies GD&T datum structure in die design, using 3-2-1 locating principles to plan datum planes at each station and minimize tolerance accumulation. FEM material flow simulation is used to predict material movement and optimize die clearance and blank holder force, delivering stable hole position accuracy within ±0.02mm across production lots.',
        },
        {
          title: 'Spot Weld Strength: Balancing CTS and UTS via DOE',
          body: 'Spot weld quality is governed by two competing metrics: CTS (Cross-Tension Strength) and UTS (Uniaxial Tensile Shear Strength). Higher welding current improves UTS but can reduce CTS. Fullwei uses Design of Experiments (Taguchi method) to systematically identify the optimal combination of current, pressure, and weld time — simultaneously meeting OEM requirements for both CTS and UTS while staying within the bounds of AWS D8.1M.',
        },
      ],
      engCerts: ['IATF 16949:2016', 'ISO 14001:2015', 'ISO 45001:2018', 'Tier 1 Approved Supplier (Multiple OEMs)'],
      faqHeading: 'Frequently Asked Questions',
      faqItems: [
        { q: 'Can Fullwei handle thin-sheet (≤ 0.8mm) precision stamping?', a: 'Yes. Fullwei has stamping capability down to 0.5mm sheet thickness. Precision close-clearance tooling and ultrasonic cleaning processes ensure dimensional accuracy and surface quality on thin-gauge parts.' },
        { q: 'Do you offer integrated weld nut insertion?', a: 'Yes. Fullwei integrates M4–M12 weld nut or stud insertion via projection welding in the same process flow as stamping, with pullout force testing to OEM specs — eliminating secondary operations for customers.' },
        { q: 'What are MOQ and lead times?', a: 'Standard part MOQ is 500–2,000 pcs. New tooling takes 6–10 weeks; production replenishment is typically 2–3 weeks. Complex sub-assemblies are quoted case by case.' },
        { q: 'Do you include dimensional reports with each shipment?', a: 'Yes. Every lot ships with a CMM dimensional report (PDF), material certificate (Mill Sheet), and pass rate summary. SPC trend analysis is available on request.' },
        { q: 'Which OEM brands does Fullwei supply?', a: 'Fullwei primarily serves the Honda supply chain (direct or Tier 1) and supplies Tier 1/Tier 2 components for Yamaha, Toyota, and Nissan-aligned supply chains.' },
      ],
      ctaHeading: 'Ready to Start?',
      ctaSub: 'Share your bracket requirements or 2D/3D drawings. Fullwei will respond with DFM feedback and a quotation within 2 business days.',
      ctaBtn1: 'Request RFQ',
      ctaBtn2: 'Contact Sales',
    },
  },
];

export const productSlugs: ProductSlug[] = [
  'exhaust-systems',
  'motorcycle-frame',
  'automotive-brackets',
];
