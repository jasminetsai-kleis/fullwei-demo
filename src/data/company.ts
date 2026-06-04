import type { Lang } from '@/i18n/translations';

// ─── Company-level profile ──────────────────────────────────────────────────
// A consolidated, machine-scannable company spec sheet. The same facts are
// mirrored into Organization JSON-LD (see OrganizationJsonLd.tsx) so AI agents
// and search crawlers can read product range, markets, quality, warranty,
// samples, payment, and export terms in one structured block.

export type FactRow = {
  /** Stable key — also used as the JSON-LD anchor / dt id */
  key: string;
  label: string;
  value: string;
};

export type CompanyProfile = {
  eyebrow: string;
  heading: string;
  intro: string;
  rows: FactRow[];
};

export const companyProfile: Record<Lang, CompanyProfile> = {
  zh: {
    eyebrow: 'COMPANY PROFILE',
    heading: '公司概覽',
    intro: '一頁掌握富惟的產品範圍、服務車型、主要市場、品質準則與交易條件。',
    rows: [
      { key: 'product-range', label: '產品範圍', value: '精密金屬沖壓件、焊接總成、管類加工件 — 涵蓋排氣系統組件、車體結構件與機車車架件。' },
      { key: 'vehicle-types', label: '服務車型', value: '二輪機車與四輪乘用車，支援燃油、油電（HEV）及電動車（EV）平台。' },
      { key: 'main-markets', label: '主要市場', value: '日本、歐美、東南亞、台灣、中國 — 產品外銷逾 15 國。' },
      { key: 'qcdsa', label: 'QCDSA 經營準則', value: '品質(Q)、成本(C)、交期(D)、服務(S)、安全(A) 五大準則，貫穿從報價到量產的每一道製程。' },
      { key: 'certifications', label: '認證', value: 'IATF 16949（汽車品質管理）、ISO 14001（環境）、ISO 45001（職安衛）。' },
      { key: 'warranty', label: '保固', value: '依 IATF 16949 製程保證；量產零件提供 12 個月或依客戶 PPAP 協議之保固。' },
      { key: 'samples', label: '樣品', value: '提供首件樣品與 PPAP（Level 1–3）；樣品前置期約 2–4 週。' },
      { key: 'payment-terms', label: '付款條件', value: 'T/T 電匯，淨 30 天；新客戶首單預付 30%、出貨前付清餘額。' },
      { key: 'export-terms', label: '出口貿易條件', value: 'FOB 高雄／台中港；亦支援 CIF、EXW，依客戶需求出貨。' },
    ],
  },
  en: {
    eyebrow: 'COMPANY PROFILE',
    heading: 'Company Profile',
    intro: "Fullwei's product range, vehicle coverage, markets, quality principles, and trade terms — at a glance.",
    rows: [
      { key: 'product-range', label: 'Product Range', value: 'Precision metal stampings, welded assemblies, and tube-processed parts — covering exhaust system components, body structural parts, and motorcycle frame components.' },
      { key: 'vehicle-types', label: 'Vehicle Types', value: 'Two-wheel motorcycles and four-wheel passenger vehicles, supporting ICE, hybrid (HEV), and electric (EV) platforms.' },
      { key: 'main-markets', label: 'Main Markets', value: 'Japan, Europe & North America, Southeast Asia, Taiwan, and China — exported to 15+ countries.' },
      { key: 'qcdsa', label: 'QCDSA Principles', value: 'Quality, Cost, Delivery, Service, and Assurance — five operating principles applied across every process from quote to mass production.' },
      { key: 'certifications', label: 'Certifications', value: 'IATF 16949 (automotive quality), ISO 14001 (environment), ISO 45001 (occupational health & safety).' },
      { key: 'warranty', label: 'Warranty', value: 'Process assurance per IATF 16949; production parts warranted for 12 months or per customer PPAP agreement.' },
      { key: 'samples', label: 'Samples', value: 'First-article samples and PPAP (Level 1–3) provided; sample lead time approx. 2–4 weeks.' },
      { key: 'payment-terms', label: 'Payment Terms', value: 'T/T, net 30 days; new customers pay a 30% deposit with the balance before shipment on the first order.' },
      { key: 'export-terms', label: 'Export / Incoterms', value: 'FOB Kaohsiung / Taichung; CIF and EXW also supported per customer requirements.' },
    ],
  },
  vi: {
    eyebrow: 'COMPANY PROFILE',
    heading: 'Hồ sơ công ty',
    intro: 'Phạm vi sản phẩm, loại xe phục vụ, thị trường, nguyên tắc chất lượng và điều khoản giao dịch của Fullwei — trong nháy mắt.',
    rows: [
      { key: 'product-range', label: 'Phạm vi sản phẩm', value: 'Linh kiện dập kim loại chính xác, cụm hàn và chi tiết gia công ống — bao gồm chi tiết hệ thống xả, chi tiết kết cấu thân xe và khung xe máy.' },
      { key: 'vehicle-types', label: 'Loại xe phục vụ', value: 'Xe máy hai bánh và xe du lịch bốn bánh, hỗ trợ nền tảng động cơ đốt trong, hybrid (HEV) và xe điện (EV).' },
      { key: 'main-markets', label: 'Thị trường chính', value: 'Nhật Bản, Châu Âu & Bắc Mỹ, Đông Nam Á, Đài Loan và Trung Quốc — xuất khẩu tới hơn 15 quốc gia.' },
      { key: 'qcdsa', label: 'Nguyên tắc QCDSA', value: 'Chất lượng, Chi phí, Giao hàng, Dịch vụ và Đảm bảo — năm nguyên tắc vận hành xuyên suốt mọi công đoạn từ báo giá đến sản xuất hàng loạt.' },
      { key: 'certifications', label: 'Chứng nhận', value: 'IATF 16949 (chất lượng ô tô), ISO 14001 (môi trường), ISO 45001 (an toàn & sức khỏe nghề nghiệp).' },
      { key: 'warranty', label: 'Bảo hành', value: 'Đảm bảo quy trình theo IATF 16949; linh kiện sản xuất được bảo hành 12 tháng hoặc theo thỏa thuận PPAP của khách hàng.' },
      { key: 'samples', label: 'Mẫu thử', value: 'Cung cấp mẫu đầu tiên và PPAP (Cấp 1–3); thời gian giao mẫu khoảng 2–4 tuần.' },
      { key: 'payment-terms', label: 'Điều khoản thanh toán', value: 'T/T, thuần 30 ngày; khách hàng mới đặt cọc 30%, thanh toán phần còn lại trước khi giao hàng cho đơn đầu tiên.' },
      { key: 'export-terms', label: 'Xuất khẩu / Incoterms', value: 'FOB Cao Hùng / Đài Trung; hỗ trợ CIF và EXW theo yêu cầu của khách hàng.' },
    ],
  },
  ja: {
    eyebrow: 'COMPANY PROFILE',
    heading: '会社概要',
    intro: '富惟の製品範囲・対応車種・主要市場・品質原則・取引条件を一覧で。',
    rows: [
      { key: 'product-range', label: '製品範囲', value: '精密金属プレス部品、溶接アッセンブリ、パイプ加工部品 — 排気システム部品、車体構造部品、二輪車フレーム部品を含む。' },
      { key: 'vehicle-types', label: '対応車種', value: '二輪車および四輪乗用車。ガソリン・ハイブリッド（HEV）・電気自動車（EV）プラットフォームに対応。' },
      { key: 'main-markets', label: '主要市場', value: '日本、欧米、東南アジア、台湾、中国 — 15か国以上へ輸出。' },
      { key: 'qcdsa', label: 'QCDSA 経営原則', value: '品質・コスト・納期・サービス・保証の5つの経営原則を、見積から量産までの全工程に適用。' },
      { key: 'certifications', label: '認証', value: 'IATF 16949（自動車品質）、ISO 14001（環境）、ISO 45001（労働安全衛生）。' },
      { key: 'warranty', label: '保証', value: 'IATF 16949に基づく工程保証。量産部品は12か月または顧客PPAP合意に基づき保証。' },
      { key: 'samples', label: 'サンプル', value: '初品サンプルおよびPPAP（レベル1–3）を提供。サンプルリードタイムは約2–4週間。' },
      { key: 'payment-terms', label: '支払条件', value: 'T/T送金、ネット30日。新規顧客の初回注文は30%前払い、出荷前に残額を決済。' },
      { key: 'export-terms', label: '輸出 / インコタームズ', value: 'FOB 高雄／台中港。顧客要件に応じCIF・EXWにも対応。' },
    ],
  },
};
