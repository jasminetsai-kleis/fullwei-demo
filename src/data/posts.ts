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
  excerpt: string;
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
    excerpt: '連續模的排樣效率直接影響材料利用率，本文拆解導正銷設計、料帶張力控制與廢料切除順序的核心邏輯。',
    date: '2025-11-15',
  },
  {
    id: 2,
    slug: 'robot-mig-exhaust-optimization',
    category: 'process-tech',
    title: '機器人 MIG 焊接參數最適化：以排氣管件為例',
    excerpt: '從電弧電壓、送線速度到行進角，詳述在 SUS409L 薄壁管件上達到 0.3 ppm 不良率的參數調試過程。',
    date: '2025-10-28',
  },
  {
    id: 3,
    slug: 'cnc-tube-springback-compensation',
    category: 'process-tech',
    title: 'CNC 多軸彎管的回彈補償策略',
    excerpt: '高強鋼管件回彈量難以預測，本文整理三種補償方案：過彎量修正、模具預載，以及有限元素模擬輔助。',
    date: '2025-09-12',
  },
  {
    id: 4,
    slug: 'hydroforming-vs-stamping-structural',
    category: 'process-tech',
    title: '液壓成形 vs 傳統沖壓：結構件複雜度的臨界點',
    excerpt: '液壓成形能減少焊縫並提升截面強度，但工裝成本高。本文定義適合切換的設計複雜度門檻。',
    date: '2025-08-05',
  },
  {
    id: 5,
    slug: 'spcc-vs-spfh590-automotive',
    category: 'material-select',
    title: 'SPCC vs SPFH590：汽車結構件選材決策指南',
    excerpt: '兩種鋼材在成形性、焊接性、表面品質上各有優勢。本文從零件功能需求出發，提供系統性選材框架。',
    date: '2025-12-01',
  },
  {
    id: 6,
    slug: 'hot-formed-vs-hsla-comparison',
    category: 'material-select',
    title: '熱成形鋼 vs 傳統高強鋼：成形性與成本全面分析',
    excerpt: '熱成形鋼強度可達 1500 MPa，但需要專用模具與爐具。本文量化兩者在車身零件上的 TCO 差異。',
    date: '2025-11-05',
  },
  {
    id: 7,
    slug: 'exhaust-alloy-409l-439-304',
    category: 'material-select',
    title: '排氣系統耐熱合金比較：409L、439 與 304 的選型邏輯',
    excerpt: '排氣溫度帶決定合金選擇，從冷端消音器到熱端接管，逐段分析三種不鏽鋼在成本與耐蝕之間的取捨。',
    date: '2025-08-20',
  },
  {
    id: 8,
    slug: 'iatf-16949-ppap-checklist',
    category: 'sourcing-standards',
    title: 'IATF 16949 核心工具：PPAP 文件清單完整解析',
    excerpt: '量產前提交 PPAP 是進入 Tier 1 採購清單的必要條件。本文列出 18 項核心文件，並說明常見駁回原因。',
    date: '2025-12-10',
  },
  {
    id: 9,
    slug: 'taiwan-auto-parts-tier1-qualification',
    category: 'sourcing-standards',
    title: '台灣汽車零件採購：Tier 1 資格審查實務流程',
    excerpt: '從 RFI 到 SOP 核准，整理日系與歐系 Tier 1 廠商對台灣金屬件供應商的稽核重點與時程預期。',
    date: '2025-10-05',
  },
  {
    id: 10,
    slug: 'ev-transition-metal-stamping',
    category: 'industry-insight',
    title: '電動車浪潮下，金屬沖壓廠的下一步',
    excerpt: '傳統燃油車零件需求收縮，但電動車底盤與電池殼體帶來新機會。分析沖壓廠轉型的三條路徑。',
    date: '2025-11-20',
  },
  {
    id: 11,
    slug: 'honda-supply-chain-restructure-taiwan',
    category: 'industry-insight',
    title: 'Honda 全球供應鏈重組：台廠的機會與挑戰',
    excerpt: '日本車廠正在縮減對單一地區的依賴，台灣金屬件廠商若具備 IATF 認證與快速打樣能力，有望填補缺口。',
    date: '2025-09-30',
  },
  {
    id: 12,
    slug: 'smart-factory-roi-sme',
    category: 'industry-insight',
    title: '中小型沖壓廠導入 MES 的 ROI 評估框架',
    excerpt: '智慧工廠不是大廠專利。本文從 OEE 提升、異常反應速度、人力替換率三個維度，建立 SME 可用的投資回報試算邏輯。',
    date: '2025-07-14',
  },
];
