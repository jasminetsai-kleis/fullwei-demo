export type CategoryId =
  | 'process-tech'
  | 'material-select'
  | 'sourcing-standards'
  | 'industry-insight';

export interface Post {
  id: number;
  slug: string;
  category: CategoryId;
  title: string;
  titleEn: string;
  excerpt: string;
  excerptEn: string;
  date: string;
}

export const CATEGORIES: { id: CategoryId; zh: string; en: string; vi: string; ja: string }[] = [
  { id: 'process-tech',       zh: '製程技術',   en: 'Process Tech',          vi: 'Kỹ thuật quy trình',    ja: '製造プロセス' },
  { id: 'material-select',    zh: '選型比較',   en: 'Material Selection',    vi: 'So sánh vật liệu',      ja: '素材比較'     },
  { id: 'sourcing-standards', zh: '採購與標準', en: 'Sourcing & Standards',  vi: 'Mua sắm & Tiêu chuẩn', ja: '調達・規格'   },
  { id: 'industry-insight',   zh: '產業觀點',   en: 'Industry Insight',      vi: 'Góc nhìn ngành',        ja: '業界インサイト' },
];

export const CATEGORY_COLORS: Record<CategoryId, string> = {
  'process-tech':       'bg-[#064d8f]',
  'material-select':    'bg-[#1c4a2b]',
  'sourcing-standards': 'bg-[#1a1a2e]',
  'industry-insight':   'bg-[#7a1818]',
};

export const posts: Post[] = [
  {
    id: 1,
    slug: 'progressive-die-five-keys',
    category: 'process-tech',
    title: '連續模設計的五大關鍵：從排樣到料帶穩定性',
    titleEn: 'Five Keys to Progressive Die Design: From Strip Layout to Feed Stability',
    excerpt: '連續模的排樣效率直接影響材料利用率，本文拆解導正銷設計、料帶張力控制與廢料切除順序的核心邏輯。',
    excerptEn: 'Strip-layout efficiency directly drives material utilization. This article breaks down the core logic of pilot-pin design, strip tension control, and scrap-removal sequencing.',
    date: '2025-11-15',
  },
  {
    id: 2,
    slug: 'robot-mig-exhaust-optimization',
    category: 'process-tech',
    title: '機器人 MIG 焊接參數最適化：以排氣管件為例',
    titleEn: 'Optimizing Robotic MIG Welding Parameters: An Exhaust Tube Case Study',
    excerpt: '從電弧電壓、送線速度到行進角，詳述在 SUS409L 薄壁管件上達到 0.3 ppm 不良率的參數調試過程。',
    excerptEn: 'From arc voltage and wire-feed speed to travel angle — the parameter-tuning process behind a 0.3 ppm defect rate on SUS409L thin-wall tubing.',
    date: '2025-10-28',
  },
  {
    id: 3,
    slug: 'cnc-tube-springback-compensation',
    category: 'process-tech',
    title: 'CNC 多軸彎管的回彈補償策略',
    titleEn: 'Springback Compensation Strategies for CNC Multi-Axis Tube Bending',
    excerpt: '高強鋼管件回彈量難以預測，本文整理三種補償方案：過彎量修正、模具預載，以及有限元素模擬輔助。',
    excerptEn: 'Springback in high-strength steel tubing is hard to predict. This article covers three compensation approaches: overbend correction, die preloading, and FEA-assisted simulation.',
    date: '2025-09-12',
  },
  {
    id: 4,
    slug: 'hydroforming-vs-stamping-structural',
    category: 'process-tech',
    title: '液壓成形 vs 傳統沖壓：結構件複雜度的臨界點',
    titleEn: 'Hydroforming vs. Conventional Stamping: The Complexity Threshold for Structural Parts',
    excerpt: '液壓成形能減少焊縫並提升截面強度，但工裝成本高。本文定義適合切換的設計複雜度門檻。',
    excerptEn: 'Hydroforming reduces weld seams and boosts section strength, but tooling cost is high. This article defines the design-complexity threshold where switching pays off.',
    date: '2025-08-05',
  },
  {
    id: 5,
    slug: 'spcc-vs-spfh590-automotive',
    category: 'material-select',
    title: 'SPCC vs SPFH590：汽車結構件選材決策指南',
    titleEn: 'SPCC vs. SPFH590: A Material Selection Guide for Automotive Structural Parts',
    excerpt: '兩種鋼材在成形性、焊接性、表面品質上各有優勢。本文從零件功能需求出發，提供系統性選材框架。',
    excerptEn: 'The two steels each excel in formability, weldability, and surface quality. This article builds a systematic selection framework starting from part-function requirements.',
    date: '2025-12-01',
  },
  {
    id: 6,
    slug: 'hot-formed-vs-hsla-comparison',
    category: 'material-select',
    title: '熱成形鋼 vs 傳統高強鋼：成形性與成本全面分析',
    titleEn: 'Hot-Formed Steel vs. Conventional HSLA: A Full Formability and Cost Analysis',
    excerpt: '熱成形鋼強度可達 1500 MPa，但需要專用模具與爐具。本文量化兩者在車身零件上的 TCO 差異。',
    excerptEn: 'Hot-formed steel reaches 1500 MPa but needs dedicated dies and furnaces. This article quantifies the TCO difference between the two for body parts.',
    date: '2025-11-05',
  },
  {
    id: 7,
    slug: 'exhaust-alloy-409l-439-304',
    category: 'material-select',
    title: '排氣系統耐熱合金比較：409L、439 與 304 的選型邏輯',
    titleEn: 'Heat-Resistant Exhaust Alloys Compared: Selection Logic for 409L, 439, and 304',
    excerpt: '排氣溫度帶決定合金選擇，從冷端消音器到熱端接管，逐段分析三種不鏽鋼在成本與耐蝕之間的取捨。',
    excerptEn: 'Exhaust temperature zones dictate alloy choice. From the cold-end muffler to the hot-end downpipe, a section-by-section trade-off between cost and corrosion resistance.',
    date: '2025-08-20',
  },
  {
    id: 8,
    slug: 'iatf-16949-ppap-checklist',
    category: 'sourcing-standards',
    title: 'IATF 16949 核心工具：PPAP 文件清單完整解析',
    titleEn: 'IATF 16949 Core Tools: A Complete Breakdown of the PPAP Document Checklist',
    excerpt: '量產前提交 PPAP 是進入 Tier 1 採購清單的必要條件。本文列出 18 項核心文件，並說明常見駁回原因。',
    excerptEn: 'Submitting a PPAP before mass production is the prerequisite for entering a Tier 1 buyer’s list. This article lists the 18 core documents and explains common rejection reasons.',
    date: '2025-12-10',
  },
  {
    id: 9,
    slug: 'taiwan-auto-parts-tier1-qualification',
    category: 'sourcing-standards',
    title: '台灣汽車零件採購：Tier 1 資格審查實務流程',
    titleEn: 'Sourcing Taiwanese Auto Parts: The Tier 1 Qualification Audit Process in Practice',
    excerpt: '從 RFI 到 SOP 核准，整理日系與歐系 Tier 1 廠商對台灣金屬件供應商的稽核重點與時程預期。',
    excerptEn: 'From RFI to SOP approval — the audit priorities and timeline expectations that Japanese and European Tier 1 makers apply to Taiwanese metal-part suppliers.',
    date: '2025-10-05',
  },
  {
    id: 10,
    slug: 'ev-transition-metal-stamping',
    category: 'industry-insight',
    title: '電動車浪潮下，金屬沖壓廠的下一步',
    titleEn: 'The EV Wave: What’s Next for Metal Stamping Shops',
    excerpt: '傳統燃油車零件需求收縮，但電動車底盤與電池殼體帶來新機會。分析沖壓廠轉型的三條路徑。',
    excerptEn: 'Demand for ICE parts is shrinking, but EV chassis and battery enclosures open new opportunities. An analysis of three transformation paths for stamping shops.',
    date: '2025-11-20',
  },
  {
    id: 11,
    slug: 'honda-supply-chain-restructure-taiwan',
    category: 'industry-insight',
    title: 'Honda 全球供應鏈重組：台廠的機會與挑戰',
    titleEn: 'Honda’s Global Supply Chain Restructuring: Opportunities and Challenges for Taiwanese Suppliers',
    excerpt: '日本車廠正在縮減對單一地區的依賴，台灣金屬件廠商若具備 IATF 認證與快速打樣能力，有望填補缺口。',
    excerptEn: 'Japanese automakers are reducing single-region dependence. Taiwanese metal-part makers with IATF certification and fast prototyping can fill the gap.',
    date: '2025-09-30',
  },
  {
    id: 12,
    slug: 'smart-factory-roi-sme',
    category: 'industry-insight',
    title: '中小型沖壓廠導入 MES 的 ROI 評估框架',
    titleEn: 'An ROI Framework for SMEs Adopting MES in Stamping Plants',
    excerpt: '智慧工廠不是大廠專利。本文從 OEE 提升、異常反應速度、人力替換率三個維度，建立 SME 可用的投資回報試算邏輯。',
    excerptEn: 'Smart factories are not just for large firms. This article builds an SME-ready ROI model across three dimensions: OEE gains, faster anomaly response, and labor substitution.',
    date: '2025-07-14',
  },
  {
    id: 13,
    slug: 'tier1-exhaust-system-manufacturing-guide',
    category: 'sourcing-standards',
    title: 'Tier 1 排氣系統代工是什麼？供應鏈分級到品質驗證指南',
    titleEn: 'What Is Tier 1 Exhaust System Manufacturing? A Guide from Supply-Chain Tiers to Quality Verification',
    excerpt: 'Tier 1 排氣系統代工，是直接供貨整車廠、對量產品質負全責的一階供應商。本文解析供應鏈分級、五大零件與材料、四種焊接工法，以及車廠如何驗證一件排氣件的品質。',
    excerptEn: 'A Tier 1 exhaust manufacturer supplies the automaker directly and is fully accountable for production quality. This guide covers supply-chain tiers, the five core parts and materials, four welding methods, and how automakers verify an exhaust part.',
    date: '2026-06-02',
  },
  {
    id: 14,
    slug: 'how-to-choose-exhaust-welding-manufacturer',
    category: 'sourcing-standards',
    title: '如何選擇排氣管焊接代工廠？六大評估指標',
    titleEn: 'How to Choose an Exhaust Welding Manufacturer: 6 Criteria for OEM Buyers',
    excerpt: '選擇排氣管焊接代工廠歸結為六項指標：平台資格、焊接工法廣度、品質系統認證、薄壁材料專精、量產彈性與出口履約。本文逐項說明該問什麼、好的答案長什麼樣，並附一頁檢核表。',
    excerptEn: 'Choosing an exhaust welding manufacturer comes down to six criteria: platform qualification, welding-method range, quality-system certification, thin-wall material expertise, volume flexibility, and export fulfillment. This article explains what to ask under each criterion and what a strong answer looks like, then gives a one-page checklist. As of 2026, these are the questions automotive buyers raise first when sourcing a Tier 1 exhaust supplier.',
    date: '2026-06-02',
  },
  {
    id: 15,
    slug: 'low-distortion-thin-wall-stainless-exhaust-welding',
    category: 'process-tech',
    title: '薄壁不鏽鋼排氣管低變形焊接工法',
    titleEn: 'Low-Distortion Welding of Thin-Wall Stainless Exhaust Pipes',
    excerpt: '薄壁不鏽鋼排氣管焊接的成敗，取決於能否在維持氣密的同時把變形壓到最低。本文拆解三大技術風險、低熱輸入工法、治具與焊道設計、機器人焊接的重複性，以及成品如何驗證。',
    excerptEn: 'Thin-wall stainless exhaust welding succeeds or fails on keeping distortion low while staying gas-tight. This article covers the three risks, low heat-input methods, fixtures and bead geometry, robotic repeatability, and verification.',
    date: '2026-06-02',
  },
];
