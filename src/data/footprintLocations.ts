// ─────────────────────────────────────────────────────────────────────────
// 富惟集團全球據點 — 資料以官方網站「全球據點」為準
// 來源：https://www.fullwei.com.tw/page/about/index.aspx?kind=90&lang=TW
// 產品線分工（台灣以汽車為主、越南以機車為主兼做汽車）依集團定位。
// ─────────────────────────────────────────────────────────────────────────

import type { Lang } from '@/i18n/translations';

export type RegionId = 'tw' | 'vn' | 'jp';
export type LocationKind = 'hq' | 'plant' | 'office';

type L = Record<Lang, string>;

export interface FootprintRegion {
  id: RegionId;
  code: string;
  name: L;
  focus: L; // 主要產品 / 職能
}

export interface FootprintLocation {
  id: string;
  region: RegionId;
  kind: LocationKind;
  lat: number;
  lng: number;
  dx?: number; // 螢幕單位微調，避免同園區據點重疊
  dy?: number;
  city: L;
  name: L;
  role: L;
  address: L;
  tel: string;
}

export const REGIONS: FootprintRegion[] = [
  {
    id: 'tw',
    code: 'TW',
    name: { zh: '台灣', en: 'Taiwan', vi: 'Đài Loan', ja: '台湾' },
    focus: {
      zh: '以汽車零組件為主',
      en: 'Automotive components',
      vi: 'Chủ yếu linh kiện ô tô',
      ja: '自動車部品が主軸',
    },
  },
  {
    id: 'vn',
    code: 'VN',
    name: { zh: '越南', en: 'Vietnam', vi: 'Việt Nam', ja: 'ベトナム' },
    focus: {
      zh: '以機車為主、兼做汽車',
      en: 'Motorcycle-led, also automotive',
      vi: 'Chủ lực xe máy, kèm ô tô',
      ja: '二輪主体・四輪も対応',
    },
  },
  {
    id: 'jp',
    code: 'JP',
    name: { zh: '日本', en: 'Japan', vi: 'Nhật Bản', ja: '日本' },
    focus: {
      zh: '業務與技術聯絡據點',
      en: 'Sales & engineering liaison offices',
      vi: 'Văn phòng liên lạc kinh doanh & kỹ thuật',
      ja: '営業・技術連絡拠点',
    },
  },
];

export const LOCATIONS: FootprintLocation[] = [
  {
    id: 'tw-hq',
    region: 'tw',
    kind: 'hq',
    lat: 22.665,
    lng: 120.503,
    city: { zh: '屏東', en: 'Pingtung', vi: 'Bình Đông', ja: '屏東' },
    name: {
      zh: '台灣富惟工業股份有限公司',
      en: 'Fullwei Industrial Co., Ltd. (Taiwan)',
      vi: 'Công ty CP Công nghiệp Fullwei (Đài Loan)',
      ja: '台湾富惟工業股份有限公司',
    },
    role: { zh: '總部', en: 'Headquarters', vi: 'Trụ sở chính', ja: '本社' },
    address: {
      zh: '90093 屏東市前進里大溪路 335 之 3 號',
      en: 'No. 335-3, Daxi Rd., Qianjin Vil., Pingtung City 90093, Taiwan',
      vi: 'Số 335-3, Đường Daxi, P. Qianjin, TP. Bình Đông 90093, Đài Loan',
      ja: '90093 屏東市前進里大渓路335-3号',
    },
    tel: '+886-8-721-2505',
  },
  {
    id: 'vn-bn-fullwei',
    region: 'vn',
    kind: 'plant',
    lat: 21.131,
    lng: 105.985,
    dx: 0,
    dy: -26,
    city: { zh: '北寧', en: 'Bắc Ninh', vi: 'Bắc Ninh', ja: 'バクニン' },
    name: {
      zh: '越南富惟工業責任有限公司（北寧工廠）',
      en: 'Fullwei Vietnam Industrial Co., Ltd. (Bắc Ninh)',
      vi: 'Công ty TNHH Công nghiệp Fullwei Việt Nam (Bắc Ninh)',
      ja: '越南富惟工業有限公司（バクニン工場）',
    },
    role: { zh: '子公司 · 生產廠', en: 'Subsidiary · Plant', vi: 'Công ty con · Nhà máy', ja: '子会社・工場' },
    address: {
      zh: '北寧省仙游縣知芳社大同環山工業區 H2-2-1 地塊',
      en: 'Lot H2-2-1, Dai Dong–Hoan Son IZ, Tri Phuong, Tien Du, Bac Ninh, Vietnam',
      vi: 'Lô H2-2-1, KCN Đại Đồng–Hoàn Sơn, Tri Phương, Tiên Du, Bắc Ninh',
      ja: 'バクニン省ティエンズー県、ダイドン–ホアンソン工業区 H2-2-1区画',
    },
    tel: '+84-222-222-0168',
  },
  {
    id: 'vn-bn-fushunquan',
    region: 'vn',
    kind: 'plant',
    lat: 21.127,
    lng: 105.991,
    dx: 28,
    dy: 16,
    city: { zh: '北寧', en: 'Bắc Ninh', vi: 'Bắc Ninh', ja: 'バクニン' },
    name: {
      zh: '富順全工業責任有限公司（北寧分公司）',
      en: 'Fushunquan Industrial Co., Ltd. (Bắc Ninh Branch)',
      vi: 'Công ty TNHH Công nghiệp Phú Thuận Toàn (CN Bắc Ninh)',
      ja: '富順全工業有限公司（バクニン支社）',
    },
    role: { zh: '子公司 · 生產廠', en: 'Subsidiary · Plant', vi: 'Công ty con · Nhà máy', ja: '子会社・工場' },
    address: {
      zh: '北寧省仙游縣知芳社大同環山工業區 H1-1-2 地塊',
      en: 'Lot H1-1-2, Dai Dong–Hoan Son IZ, Tri Phuong, Tien Du, Bac Ninh, Vietnam',
      vi: 'Lô H1-1-2, KCN Đại Đồng–Hoàn Sơn, Tri Phương, Tiên Du, Bắc Ninh',
      ja: 'バクニン省ティエンズー県、ダイドン–ホアンソン工業区 H1-1-2区画',
    },
    tel: '+84-222-222-0168',
  },
  {
    id: 'vn-bn-fushunfeng',
    region: 'vn',
    kind: 'plant',
    lat: 21.123,
    lng: 105.979,
    dx: -28,
    dy: 16,
    city: { zh: '北寧', en: 'Bắc Ninh', vi: 'Bắc Ninh', ja: 'バクニン' },
    name: {
      zh: '富順風工業責任有限公司',
      en: 'Fushunfeng Industrial Co., Ltd.',
      vi: 'Công ty TNHH Công nghiệp Phú Thuận Phong',
      ja: '富順風工業有限公司',
    },
    role: { zh: '子公司 · 生產廠', en: 'Subsidiary · Plant', vi: 'Công ty con · Nhà máy', ja: '子会社・工場' },
    address: {
      zh: '北寧省仙游縣環山社大同環山工業區 K4 地塊',
      en: 'Lot K4, Dai Dong–Hoan Son IZ, Hoan Son, Tien Du, Bac Ninh, Vietnam',
      vi: 'Lô K4, KCN Đại Đồng–Hoàn Sơn, Hoàn Sơn, Tiên Du, Bắc Ninh',
      ja: 'バクニン省ティエンズー県、ダイドン–ホアンソン工業区 K4区画',
    },
    tel: '+84-222-222-0168',
  },
  {
    id: 'vn-dn-fushunquan',
    region: 'vn',
    kind: 'plant',
    lat: 16.078,
    lng: 108.151,
    city: { zh: '峴港', en: 'Đà Nẵng', vi: 'Đà Nẵng', ja: 'ダナン' },
    name: {
      zh: '富順全工業責任有限公司（峴港總公司）',
      en: 'Fushunquan Industrial Co., Ltd. (Đà Nẵng Head Office)',
      vi: 'Công ty TNHH Công nghiệp Phú Thuận Toàn (Trụ sở Đà Nẵng)',
      ja: '富順全工業有限公司（ダナン本社）',
    },
    role: { zh: '子公司 · 峴港總公司', en: 'Subsidiary · Đà Nẵng HQ', vi: 'Công ty con · Trụ sở Đà Nẵng', ja: '子会社・ダナン本社' },
    address: {
      zh: '峴港市蓮沼郡和慶北坊和慶擴建工業區 14B、10B ND 路 U17 地塊',
      en: 'Lot U17, Rd. ND 14B/10B, Hoa Khanh Expanded IZ, Hoa Khanh Bac, Lien Chieu, Da Nang',
      vi: 'Lô U17, đường ND 14B, 10B, KCN Hòa Khánh mở rộng, P. Hòa Khánh Bắc, Q. Liên Chiểu, Đà Nẵng',
      ja: 'ダナン市リエンチエウ区、ホアカイン拡張工業区 14B・10B ND路 U17区画',
    },
    tel: '+84-222-222-0768',
  },
  {
    id: 'vn-hanoi',
    region: 'vn',
    kind: 'office',
    lat: 21.031,
    lng: 105.787,
    city: { zh: '河內', en: 'Hanoi', vi: 'Hà Nội', ja: 'ハノイ' },
    name: {
      zh: '河內辦事處',
      en: 'Hanoi Office',
      vi: 'Văn phòng Hà Nội',
      ja: 'ハノイ事務所',
    },
    role: { zh: '辦事處', en: 'Office', vi: 'Văn phòng', ja: '事務所' },
    address: {
      zh: '河內市紙橋郡紙橋路 302 號 Discovery Complex 大廈 23 樓',
      en: '23F, Discovery Complex, 302 Cau Giay St., Cau Giay Dist., Hanoi, Vietnam',
      vi: 'Tầng 23, Discovery Complex, 302 Cầu Giấy, Q. Cầu Giấy, Hà Nội',
      ja: 'ハノイ市カウザイ区カウザイ路302号 Discovery Complex 23階',
    },
    tel: '+84-243-206-8600',
  },
  {
    id: 'jp-saitama',
    region: 'jp',
    kind: 'office',
    lat: 35.826,
    lng: 139.68,
    city: { zh: '埼玉 · 蕨市', en: 'Warabi, Saitama', vi: 'Saitama', ja: '埼玉・蕨市' },
    name: {
      zh: '戶田事務所（埼玉）',
      en: 'Toda Office (Saitama)',
      vi: 'Văn phòng Toda (Saitama)',
      ja: '戸田事務所（埼玉）',
    },
    role: { zh: '事務所', en: 'Office', vi: 'Văn phòng', ja: '事務所' },
    address: {
      zh: '〒335-0005 埼玉縣蕨市錦町 2 丁目 19 番 32 號',
      en: '2-19-32 Nishikicho, Warabi City, Saitama 335-0005, Japan',
      vi: '2-19-32 Nishikicho, TP. Warabi, Saitama 335-0005, Nhật Bản',
      ja: '〒335-0005 埼玉県蕨市錦町2丁目19番32号',
    },
    tel: '—',
  },
  {
    id: 'jp-tochigi',
    region: 'jp',
    kind: 'office',
    lat: 36.555,
    lng: 139.882,
    city: { zh: '栃木 · 宇都宮', en: 'Utsunomiya, Tochigi', vi: 'Tochigi', ja: '栃木・宇都宮' },
    name: {
      zh: '宇都宮事務所（栃木）',
      en: 'Utsunomiya Office (Tochigi)',
      vi: 'Văn phòng Utsunomiya (Tochigi)',
      ja: '宇都宮事務所（栃木）',
    },
    role: { zh: '事務所', en: 'Office', vi: 'Văn phòng', ja: '事務所' },
    address: {
      zh: '〒321-0968 栃木縣宇都宮市中今泉 2 丁目 1 番 11 號',
      en: '2-1-11 Nakaimaizumi, Utsunomiya City, Tochigi 321-0968, Japan',
      vi: '2-1-11 Nakaimaizumi, TP. Utsunomiya, Tochigi 321-0968, Nhật Bản',
      ja: '〒321-0968 栃木県宇都宮市中今泉2丁目1番11号',
    },
    tel: '—',
  },
];

// ── 影像底圖座標系（對齊 /public/global-footprint-map.png，1536×1024）──
// 用圖上兩個明顯可辨識的點（台灣、東京）做校準，其餘據點依經緯度等比換算。
// 若標記與海岸線有偏移，只要微調下面兩個 anchor 的 x / y 像素即可，其它會自動跟著動。
export const VIEW_W = 1536;
export const VIEW_H = 1024;

const ANCHORS = {
  taiwan: { lat: 22.665, lng: 120.503, x: 650, y: 540 },
  tokyo: { lat: 35.826, lng: 139.68, x: 958, y: 300 },
};
const PX_PER_LNG = (ANCHORS.tokyo.x - ANCHORS.taiwan.x) / (ANCHORS.tokyo.lng - ANCHORS.taiwan.lng);
const PX_PER_LAT = (ANCHORS.tokyo.y - ANCHORS.taiwan.y) / (ANCHORS.tokyo.lat - ANCHORS.taiwan.lat);

function project(lat: number, lng: number) {
  return {
    x: ANCHORS.taiwan.x + (lng - ANCHORS.taiwan.lng) * PX_PER_LNG,
    y: ANCHORS.taiwan.y + (lat - ANCHORS.taiwan.lat) * PX_PER_LAT,
  };
}

export type Box = { x: number; y: number; w: number; h: number };
export const FULL_BOX: Box = { x: 0, y: 0, w: VIEW_W, h: VIEW_H };

export const POS: Record<string, { x: number; y: number }> = Object.fromEntries(
  LOCATIONS.map((l) => {
    const p = project(l.lat, l.lng);
    return [l.id, { x: p.x + (l.dx ?? 0), y: p.y + (l.dy ?? 0) }];
  }),
);

const ASPECT = VIEW_W / VIEW_H;

export function regionBox(ids: string[]): Box {
  if (ids.length === 0) return FULL_BOX;
  const xs = ids.map((id) => POS[id].x);
  const ys = ids.map((id) => POS[id].y);
  let minx = Math.min(...xs);
  let maxx = Math.max(...xs);
  let miny = Math.min(...ys);
  let maxy = Math.max(...ys);
  const padU = 180;
  minx -= padU;
  maxx += padU;
  miny -= padU;
  maxy += padU;
  let w = maxx - minx;
  let h = maxy - miny;
  if (w / h < ASPECT) {
    const nw = h * ASPECT;
    minx -= (nw - w) / 2;
    w = nw;
  } else {
    const nh = w / ASPECT;
    miny -= (nh - h) / 2;
    h = nh;
  }
  const minW = 560;
  if (w < minW) {
    const cx = minx + w / 2;
    const cy = miny + h / 2;
    w = minW;
    h = minW / ASPECT;
    minx = cx - w / 2;
    miny = cy - h / 2;
  }
  return { x: minx, y: miny, w, h };
}
