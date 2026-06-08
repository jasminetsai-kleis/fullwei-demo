import type { Lang } from '@/i18n/translations';

export type Block =
  | { t: 'h2'; id: string; text: string }
  | { t: 'h3'; text: string }
  | { t: 'p'; text: string }
  | { t: 'ul'; items: string[] }
  | { t: 'ol'; items: string[] }
  | { t: 'callout'; text: string };

export interface RelatedLink {
  label: string;
  href: string;
  desc: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface PostFullContent {
  slug: string;
  blocks: Block[];
  blocksEn: Block[];
  relatedLinks: RelatedLink[];
  relatedLinksEn: RelatedLink[];
  relatedSlugs: string[];
  faq?: FaqItem[];
  faqEn?: FaqItem[];
}

/** Pick the language variant. Chinese stays zh; every other locale uses English. */
export function localizeContent(c: PostFullContent, lang: Lang): {
  blocks: Block[];
  relatedLinks: RelatedLink[];
  faq?: FaqItem[];
} {
  const en = lang !== 'zh';
  return {
    blocks: en ? c.blocksEn : c.blocks,
    relatedLinks: en ? c.relatedLinksEn : c.relatedLinks,
    faq: en ? c.faqEn : c.faq,
  };
}

const progressiveDie: PostFullContent = {
  slug: 'progressive-die-five-keys',
  blocksEn: [
    { t: 'h2', id: 'strip-layout', text: '1. Strip Layout and Material Utilization' },
    { t: 'p', text: 'Strip layout directly determines material utilization, and material cost typically accounts for 60–70% of total cost in stamping. A progressive die’s strip layout must balance scrap rate, die strength, and production stability — three factors that often constrain one another.' },
    { t: 'p', text: 'Common layout forms include single-row direct, single-row reversed, and double-row staggered. A double-row staggered layout can raise utilization by 5–15% on round or oval parts, but it also increases die width and complexity. Whether to switch layouts depends on the break-even point between die-making cost and long-term material savings.' },
    { t: 'ul', items: [
      'Keep the scrap-bridge width at no less than 1.2× the sheet thickness to stop the strip drifting during stepping',
      'Hold pitch tolerance within ±0.05 mm, or accumulated error across stations will exceed the product tolerance band',
      'After fixing the layout, compute theoretical utilization in CAD; the target is usually 72%+ depending on shape complexity',
    ] },

    { t: 'h2', id: 'pilot-pin', text: '2. Pilot-Pin Precision and Wear Management' },
    { t: 'p', text: 'The pilot pin is the core element for strip positioning in a progressive die, eliminating feed error at each station so the strip forms in the exact position. Insufficient pilot-pin precision shows up directly as hole-position shift and contour scatter — and the problem only surfaces at later stations, making diagnosis hard.' },
    { t: 'p', text: 'The pilot pin usually enters the strip 2–5 mm ahead of the main punch, ensuring precision through a "pilot first, form second" sequence. The pilot hole should be punched at the first station with a precise H7 tolerance, paired with an f6-grade pilot pin and a fit clearance of 0.010–0.015 mm.' },
    { t: 'ul', items: [
      'Choose SKD11 or DC53 for the pilot pin, hardness HRC 60+, with a TiN coating to extend life',
      'Replace the pilot pin roughly every 500k strokes; for high-precision parts (tolerance within ±0.05 mm), shorten to 200k',
      'Early wear signs: a loose feel as the pin enters the hole, or hole-position Cpk dropping by more than 0.2',
    ] },

    { t: 'h2', id: 'strip-tension', text: '3. Strip Tension Control Mechanisms' },
    { t: 'p', text: 'From the decoiler, leveler, and feeder to the die entry, the strip experiences tension and bending stress in different directions at each stage. Loss of tension control causes the strip to ripple or skew, leading to inaccurate feeding. The most common root cause is a leveler pressure set too light, leaving residual bending stress in the sheet.' },
    { t: 'p', text: 'High-strength steel (such as SPFH590) springs back more, so leveler pressure needs to be about 30% higher than for SPCC; when leveling rolls are insufficient, a floating back-tension roller is needed to compensate for feed inertia.' },
    { t: 'ul', items: [
      'Measure incoming sheet flatness to ASTM A568; anything over 6 mm/m should be returned',
      'A floating back-tension roller compensates feed inertia and stabilizes pitch accuracy to ±0.03 mm',
      'Add a strip sensor at the die entry to monitor horizontal and vertical offset in real time and trigger alarms',
    ] },

    { t: 'h2', id: 'scrap-sequence', text: '4. The Logic of Scrap-Removal Sequencing' },
    { t: 'p', text: 'Scrap-removal sequence affects not only stress distribution in the strip but also whether edge scrap drops cleanly. The wrong sequence can create local stress concentration at a station, deforming the strip and degrading forming accuracy downstream.' },
    { t: 'p', text: 'The general principle is to trim scrap near the part edge first, then handle interior scrap; push from both sides toward the center to balance the load. Before and after stations with heavy forming, arrange a "buffer station" — one that only trims scrap without large forming — to avoid stress stacking.' },
    { t: 'ul', items: [
      'Set trim-die clearance to 8–12% of sheet thickness; too large produces burrs, too small chips the edge',
      'Simulate cross-section change at each station during design to ensure no station sees an abrupt drop in section area',
      'Plan the scrap-drop path at the design stage to prevent scrap from bouncing back and disrupting the next stroke',
    ] },

    { t: 'h2', id: 'die-steel', text: '5. Die-Steel Selection and Maintenance Cycle' },
    { t: 'p', text: 'The material choice for punch and die insert directly sets die life. Automotive parts usually run in the millions; the wrong steel can force tooling rework or replacement every 300k–500k pieces, sharply raising maintenance cost.' },
    { t: 'p', text: 'SKD11 is the most common progressive-die steel, offering a good balance of wear resistance and toughness, suitable for most SPCC/SECC thin-sheet stamping. DC53 is an upgraded SKD11 with about 60% higher toughness, suited to high-strength steel or slender punches. For sheet over 3.2 mm or heavy drawing, consider D2 or powder-metallurgy steel (HAP40).' },
    { t: 'ul', items: [
      'Coat punch surfaces with TiCN or TiAlN, hardness HV 2500+, to extend life 3–5×',
      'Set the PM plan to measure and evaluate cutting-edge dimensions every 500k pieces',
      'Edge-wear standard: regrind once blanking burr exceeds 10% of sheet thickness or burr height >0.1 mm',
    ] },
  ],
  relatedLinksEn: [
    { label: 'Core Process Capabilities', href: '/#capabilities', desc: 'Fullwei’s equipment specs and volume capacity in metal stamping' },
    { label: 'Exhaust System Product Line', href: '/products/exhaust-systems', desc: 'Progressive-die stamping applied to exhaust system parts' },
    { label: 'Motorcycle Frame Components', href: '/products/motorcycle-frame', desc: 'Frame structural parts using mixed transfer- and progressive-die methods' },
  ],
  faqEn: [
    {
      q: 'How do I choose between a progressive die and a transfer die?',
      a: 'A progressive die suits small-to-medium, relatively regular thin-sheet parts with a fixed pitch and high efficiency. A transfer die suits large parts or deep draws, where a mechanical hand passes the part between stations for greater forming freedom. The key factors are part size, shape complexity, and volume.',
    },
    {
      q: 'Below what material utilization should I re-evaluate the strip layout?',
      a: 'For automotive sheet stamping, utilization below 65% usually warrants a re-layout. First try rotating the part angle or switching to a double-row staggered arrangement; if that does not help, evaluate whether the part contour itself can be optimized.',
    },
    {
      q: 'What are the early signs of pilot-pin wear?',
      a: 'The most direct sign is a drop in the Cpk of hole-position dimensions on the SPC chart, or occasional out-of-tolerance hole positions in process. Visual inspection can reveal wear marks or radial wear on the pin; periodic CMM measurement is needed for early warning.',
    },
  ],
  blocks: [
    { t: 'h2', id: 'strip-layout', text: '一、排樣設計與材料利用率' },
    { t: 'p', text: '排樣（strip layout）直接決定材料利用率，而材料成本在沖壓製造中通常佔總成本的 60～70%。連續模的排樣必須在廢料率、模具強度與生產穩定性之間取得平衡，三者往往相互制約。' },
    { t: 'p', text: '常見排樣形式有單排順排、單排倒排與雙排交錯三種。雙排交錯排在圓形或橢圓形零件上可將材料利用率提高 5～15%，但同時增加模具寬度與複雜度。是否切換排樣方式，需評估模具製作成本與長期材料節省的損益平衡點。' },
    { t: 'ul', items: [
      '廢料橋寬（scrap bridge）建議不低於板厚的 1.2 倍，避免料帶在步進中竄動',
      '步距（pitch）公差應控制在 ±0.05 mm 以內，否則各站累積誤差將超出產品公差帶',
      '排樣確定後以 CAD 計算理論利用率，目標值依形狀複雜度通常設定在 72% 以上',
    ] },

    { t: 'h2', id: 'pilot-pin', text: '二、導正銷的精度與磨耗管理' },
    { t: 'p', text: '導正銷（pilot pin）是連續模料帶定位的核心元件，負責在每個工站消除送料誤差，確保料帶在精確位置成形。導正銷精度不足，將直接反映在零件孔位偏移與輪廓散差上，且問題在後工站才顯現，診斷困難。' },
    { t: 'p', text: '導正銷通常較主沖頭提前 2～5 mm 進入料帶，以「先導正、再成形」的時序確保精度。導正孔應於第一站沖出，採 H7 精密公差，搭配 f6 級導正銷，配合間隙控制在 0.010～0.015 mm 之間。' },
    { t: 'ul', items: [
      '導正銷材質建議選用 SKD11 或 DC53，硬度 HRC 60 以上，表面鍍 TiN 以延長壽命',
      '建議每 50 萬次更換導正銷；高精度零件（公差 ±0.05 mm 以內）縮短至 20 萬次',
      '磨損早期徵兆：導正銷進入導正孔時手感鬆曠，或孔位尺寸散差 Cpk 下降超過 0.2',
    ] },

    { t: 'h2', id: 'strip-tension', text: '三、料帶張力控制機制' },
    { t: 'p', text: '從卷料架、校平機、送料機到模具入口，料帶在各環節承受不同方向的張力與彎曲應力。張力失控導致料帶起伏或歪斜，進而造成送料不準確。最常見的根因是校平機壓力設定過輕，板材殘留彎曲應力未完全消除。' },
    { t: 'p', text: '高強鋼（如 SPFH590）因回彈量大，校平機壓力需比 SPCC 提高約 30%，且校平輥數量不足時需搭配浮動背壓滾輪（back tension roller）補償送料慣性。' },
    { t: 'ul', items: [
      '建議以 ASTM A568 規範量測板材入料前的平整度，超過 6 mm/m 需回件處理',
      '浮動背壓滾輪可補償送料慣性，穩定步距精度至 ±0.03 mm',
      '建議於模具入口加裝料帶感應器，即時監測水平與垂直偏移量並觸發警報',
    ] },

    { t: 'h2', id: 'scrap-sequence', text: '四、廢料切除的順序邏輯' },
    { t: 'p', text: '廢料切除的順序不僅影響料帶的應力分布，也決定邊餘料能否順暢落下。錯誤的切除順序可能在某工站造成局部應力集中，使料帶變形，影響後續工站的成形精度。' },
    { t: 'p', text: '一般原則是先切除靠近零件邊緣的廢料，再處理內部廢料；從料帶兩側向中央推進，使整體受力均衡。成形量大的工站前後，應安排「緩衝工站」——只切廢料、不進行大成形量的工站，以避免應力疊加。' },
    { t: 'ul', items: [
      '廢料刀（trim die）間隙建議設為板厚的 8～12%；間隙過大產生毛邊，過小則崩刃',
      '設計時模擬各工站料帶截面積變化，確保無截面積驟減的工站出現',
      '廢料落下路徑必須在設計階段規劃，防止廢料回跳干擾下次沖壓行程',
    ] },

    { t: 'h2', id: 'die-steel', text: '五、模具鋼材選用與維護週期' },
    { t: 'p', text: '沖頭（punch）與下模（die insert）的材質選用直接決定模具壽命。汽車零件量產數量通常在百萬件以上，選錯鋼材可能導致每 30～50 萬件就需要整修或更換刀具，大幅提高維護成本。' },
    { t: 'p', text: 'SKD11 是最普遍的連續模鋼材，提供良好的耐磨性與韌性平衡，適合大多數 SPCC/SECC 薄板沖壓。DC53 是 SKD11 的進階版，韌性提高約 60%，適合高強鋼或細薄沖頭。板厚超過 3.2 mm 或拉伸量大的場合，應考慮 D2 或粉末冶金鋼（HAP40）。' },
    { t: 'ul', items: [
      '沖頭表面建議鍍 TiCN 或 TiAlN，硬度 HV 2500 以上，可延長壽命 3～5 倍',
      'PM 計畫建議設定：每 50 萬件執行一次刃口尺寸量測與研磨評估',
      '刃口磨損標準：落料毛邊超過板厚 10% 或毛邊高度 >0.1 mm，即應研磨',
    ] },
  ],
  relatedLinks: [
    { label: '核心製程能力', href: '/#capabilities', desc: '了解富惟在金屬沖壓領域的設備規格與量產能力' },
    { label: '排氣系統產品線', href: '/products/exhaust-systems', desc: '連續模沖壓在排氣系統零件上的應用案例' },
    { label: '機車車架零組件', href: '/products/motorcycle-frame', desc: '移轉模與連續模混合應用的車架結構件製造' },
  ],
  relatedSlugs: ['robot-mig-exhaust-optimization', 'cnc-tube-springback-compensation'],
  faq: [
    {
      q: '連續模（Progressive Die）與移轉模（Transfer Die）如何選擇？',
      a: '連續模適合中小型、形狀相對規則的薄板零件，步距固定、生產效率高。移轉模適合大尺寸或需要深拉伸的零件，料帶在各工站間以機械手傳遞，成形自由度更高。選擇關鍵在於零件尺寸、形狀複雜度與產量規模。',
    },
    {
      q: '材料利用率低於多少應重新評估排樣設計？',
      a: '以汽車鋼板沖壓為參考，利用率低於 65% 通常值得重新排樣。可先嘗試旋轉零件角度或改用雙排交錯排列，若仍無法提升，應評估零件輪廓設計是否有最佳化空間。',
    },
    {
      q: '導正銷磨損的早期徵兆有哪些？',
      a: '最直接的徵兆是 SPC 管制圖上孔位尺寸的 Cpk 值下降，或製程中出現偶發性的孔位超差。目視檢查可觀察導正銷表面是否有磨耗痕跡或徑向磨損，搭配定期的 CMM 量測才能早期預警。',
    },
  ],
};

const spccVsSpfh: PostFullContent = {
  slug: 'spcc-vs-spfh590-automotive',
  blocksEn: [
    { t: 'h2', id: 'why-material-matters', text: 'Why Material Choice Decides a Part’s Lifecycle Cost' },
    { t: 'p', text: 'Material cost typically accounts for 60–70% of a stamped part’s total cost, yet the selection decision is often rushed in early design without fully weighing downstream process impact. The wrong material not only raises procurement cost but can also increase die wear, welding difficulty, and post-processing — pushing total manufacturing cost far beyond expectation.' },
    { t: 'p', text: 'SPCC and SPFH590 are the most common selection decision faced by Taiwanese auto-part makers. Each has advantages in mechanical properties, formability, weldability, and surface quality — there is no absolute winner; the key is the part’s functional requirements.' },

    { t: 'h2', id: 'spcc-profile', text: 'SPCC: The Engineering Choice When Formability Comes First' },
    { t: 'p', text: 'SPCC (cold-rolled steel sheet) is currently the most widely used material for automotive interior parts, brackets, and non-structural thin-sheet parts. With yield strength around 260 MPa, tensile strength 270–410 MPa, and elongation 28–40%, it offers excellent formability — complex deep draws and repeated bends without cracking.' },
    { t: 'ul', items: [
      'Strengths: good formability, excellent surface (Ra < 1.2 μm), stable weldability, relatively low cost',
      'Limits: insufficient strength for crash-safety parts; thickness must increase to reach structural strength',
      'Use cases: instrument-panel brackets, speaker frames, HVAC mounts, non-safety structural parts',
    ] },
    { t: 'callout', text: 'Fullwei case study: Honda Taiwan’s instrument-panel bracket uses SPCC t1.2, deep-drawn with a transfer die, at over 3 million units a year with Cpk held above 1.67.' },

    { t: 'h2', id: 'spfh590-profile', text: 'SPFH590: The Price of High-Strength Lightweighting' },
    { t: 'p', text: 'SPFH590 (hot-rolled high-strength steel), with yield strength ≥ 440 MPa and tensile strength over 590 MPa, is more than twice as strong as SPCC; a same-size part can cut thickness by 30–40% for significant weight saving. But that strength brings a double challenge in formability and weldability.' },
    { t: 'ul', items: [
      'Large springback: bend springback angle is 20–40% greater than SPCC, requiring overbend compensation or a servo press',
      'Accelerated die wear: under the same conditions, die life drops to about 60% of SPCC',
      'Weld heat-affected zone (HAZ) strength drops noticeably; heat input must be tightly controlled',
      'Use cases: body structural parts, crash energy-absorption parts, chassis reinforcement beams',
    ] },

    { t: 'h2', id: 'framework', text: 'A Four-Dimension Material Selection Framework' },
    { t: 'p', text: 'In engineering evaluation, assess the selection systematically across the following four dimensions, rather than judging on material strength or cost alone.' },
    { t: 'ol', items: [
      'Functional need: does the part carry a crash-safety or structural-support role? If so, the SPFH590 family is warranted',
      'Forming complexity: do draw depth, bend count, and forming angle exceed the forming limit of high-strength steel?',
      'Downstream impact: can the spot-welding and MIG-welding capability handle the welding characteristics of high-strength steel?',
      'Lifecycle cost: material savings vs. increased die wear vs. added welding hours — compute TCO across all three',
    ] },

    { t: 'h2', id: 'recommendations', text: 'Practical Selection Advice and Conversion Guidance' },
    { t: 'p', text: 'If an existing SPCC design must be lightweighted at the customer’s request, consider a "thinner-but-stronger" strategy: replacing SPCC t1.6 with SPFH590 t1.0. The section moment of inertia decreases but strength rises sharply, usually maintaining or improving part rigidity while achieving roughly 30% weight reduction.' },
    { t: 'p', text: 'However, this strategy requires evaluating in parallel: (1) whether existing dies can withstand the stamping force of high-strength steel, (2) whether the welding engineer is familiar with heat-input control for high-strength steel, and (3) whether finished-part CMM measurement can accept the larger springback error. Evaluate each risk point with PFMEA before the final selection.' },
    { t: 'callout', text: 'Technical takeaway: material selection should be completed at the DFMEA stage, not discovered after trial dies. Aligning with process engineers early saves enormous time and cost in repeated trials.' },
  ],
  relatedLinksEn: [
    { label: 'Exhaust System Product Line', href: '/products/exhaust-systems', desc: 'Engineering use of SUS409L / 439 and similar materials in exhaust parts' },
    { label: 'Motorcycle Frame Components', href: '/products/motorcycle-frame', desc: 'Weight reduction and forming results of high-strength steel in frame parts' },
    { label: 'Automotive Bracket Product Line', href: '/products/automotive-brackets', desc: 'Application of SPCC and multi-material parts in interior systems' },
  ],
  faqEn: [
    {
      q: 'What is the difference between SPCC and SECC? Can they be swapped?',
      a: 'SPCC is bare cold-rolled steel; SECC is SPCC electro-galvanized on the surface. SECC’s corrosion resistance is markedly better, suiting parts that need rust protection. Mechanical properties are similar, but zinc volatilization during welding affects SECC weld quality and needs special parameters.',
    },
    {
      q: 'Can SPFH590 directly replace an existing SPCC part?',
      a: 'Not directly. You must re-evaluate whether die stamping force is sufficient, reset springback compensation, adjust welding parameters, and decide whether PPAP must be resubmitted. This typically requires a 2–4 month trial-die and validation cycle.',
    },
    {
      q: 'How do I quickly assess the ROI of a material switch?',
      a: 'Build a simple TCO calculation: (weight reduction × annual volume × material unit-price difference) − (added die wear + welding-hour difference + one-time trial-die cost). If payback exceeds 3 years, switching for lightweighting alone is usually not advisable.',
    },
  ],
  blocks: [
    { t: 'h2', id: 'why-material-matters', text: '選材為何決定零件的全生命週期成本' },
    { t: 'p', text: '材料成本通常佔沖壓零件總成本的 60～70%，但選材決策往往在設計初期匆匆決定，未充分考量下游製程影響。選錯材料不僅提高材料採購成本，更可能增加模具磨耗、焊接難度與後處理工序，最終導致整體製造成本遠超預期。' },
    { t: 'p', text: 'SPCC 與 SPFH590 是台灣汽車零件廠最常面臨的選材決策，兩者在機械特性、成形性、焊接性與表面品質上各有優勢，沒有絕對的優劣之分，關鍵在於對應零件的功能需求。' },

    { t: 'h2', id: 'spcc-profile', text: 'SPCC：成形性優先的工程選擇' },
    { t: 'p', text: 'SPCC（冷軋鋼板）是目前汽車內裝件、固定架與非結構性薄板零件最廣泛使用的材料。降伏強度約 260 MPa、抗拉強度 270～410 MPa，延伸率 28～40%，賦予極佳的成形性——可進行複雜的深拉伸與多次彎折而不開裂。' },
    { t: 'ul', items: [
      '優點：成形性好、表面品質優（Ra < 1.2 μm）、焊接性穩定、成本相對低',
      '限制：強度不足以應對碰撞安全件要求，板厚需增加才能達到結構強度',
      '適用場景：儀錶板支架、音響框架、空調固定件、非安全相關結構件',
    ] },
    { t: 'callout', text: '富惟實際案例：Honda 台灣儀錶板支架採用 SPCC t1.2，藉由移轉模深拉伸成形，年產能超過 300 萬件，Cpk 維持在 1.67 以上。' },

    { t: 'h2', id: 'spfh590-profile', text: 'SPFH590：高強度輕量化的代價' },
    { t: 'p', text: 'SPFH590（熱軋高強鋼）降伏強度 ≥ 440 MPa、抗拉強度 590 MPa 以上，是 SPCC 強度的 2 倍以上，同尺寸零件可減少板厚 30～40%，實現顯著減重。然而，高強度帶來的是成形性與焊接性的雙重挑戰。' },
    { t: 'ul', items: [
      '回彈量大：彎曲回彈角度比 SPCC 大 20～40%，需過彎補償或使用伺服沖壓機',
      '模具磨耗加速：同等條件下模具壽命約縮短至 SPCC 的 60%',
      '焊接熱影響區（HAZ）強度下降明顯，需嚴格控制熱輸入量',
      '適用場景：車身結構件、碰撞吸能件、底盤強化梁',
    ] },

    { t: 'h2', id: 'framework', text: '四維度選材決策框架' },
    { t: 'p', text: '在工程評估中，建議從以下四個維度系統性地評估選材決策，避免單純以材料強度或成本作為唯一判斷依據。' },
    { t: 'ol', items: [
      '功能需求：零件是否承擔碰撞安全或結構支撐功能？若是，SPFH590 系列方有必要性',
      '成形複雜度：拉伸深度、彎折次數與成形角度是否超過高強鋼的成形極限？',
      '後工序影響：點焊、MIG 焊接的工藝能力是否能因應高強鋼的焊接特性？',
      '全生命週期成本：材料節省 vs 模具磨耗增加 vs 焊接工時增加，三者綜合計算 TCO',
    ] },

    { t: 'h2', id: 'recommendations', text: '實務選材建議與換算指引' },
    { t: 'p', text: '若現有 SPCC 設計因客戶要求需輕量化，可考慮「減薄換強鋼」策略：將 SPCC t1.6 換為 SPFH590 t1.0，截面慣性矩減少但強度大幅提升，通常可維持或提高零件剛性，同時實現 30% 左右的重量削減。' },
    { t: 'p', text: '然而，此策略需同步評估：(1) 現有模具是否能承受高強鋼的沖壓力，(2) 焊接工程師是否熟悉高強鋼的熱輸入控制，(3) 成品 CMM 量測是否能接受更大的回彈誤差。建議以 PFMEA 評估各風險點後，再做最終選材決策。' },
    { t: 'callout', text: '技術重點：材料選型應在 DFMEA 階段完成，而非進入試模後才發現問題。早期與製程工程師協同確認選材，可節省大量反覆試模的時間與成本。' },
  ],
  relatedLinks: [
    { label: '排氣系統產品線', href: '/products/exhaust-systems', desc: 'SUS409L／439 等材料在排氣管件上的工程應用' },
    { label: '機車車架零組件', href: '/products/motorcycle-frame', desc: '高強鋼在車架結構件的減重與成形實績' },
    { label: '汽車固定架產品線', href: '/products/automotive-brackets', desc: 'SPCC 多元材質在內裝系統零件的應用' },
  ],
  relatedSlugs: ['exhaust-alloy-409l-439-304', 'hot-formed-vs-hsla-comparison'],
  faq: [
    {
      q: 'SPCC 和 SECC 有什麼差異？能否互換？',
      a: 'SPCC 是冷軋裸鋼板，SECC 是在 SPCC 基材上電鍍鋅的表面處理鋼板。SECC 耐蝕性顯著優於 SPCC，適用於有防鏽需求的零件。機械特性相近但焊接時 SECC 的鋅揮發會影響焊縫品質，需要特殊焊接參數設定。',
    },
    {
      q: 'SPFH590 能否直接替換現有的 SPCC 零件？',
      a: '不能直接替換。需要重新評估：模具沖壓力是否足夠、回彈補償量是否重新設定、焊接參數是否調整，以及 PPAP 是否需要重新提交。通常需要 2～4 個月的試模與驗證週期。',
    },
    {
      q: '如何快速評估換材的 ROI？',
      a: '可建立簡單的 TCO 試算：(重量減少 × 年產量 × 材料單價差異) − (模具磨耗增加 + 焊接工時差異 + 一次性試模成本)。若回收期超過 3 年，通常不建議僅為輕量化而換材。',
    },
  ],
};

const ppapChecklist: PostFullContent = {
  slug: 'iatf-16949-ppap-checklist',
  blocksEn: [
    { t: 'h2', id: 'ppap-purpose', text: '1. The Core Purpose of PPAP: Eliminating Pre-Production Uncertainty' },
    { t: 'p', text: 'PPAP (Production Part Approval Process) is one of the core tools of IATF 16949. Its purpose is to let a supplier prove to the customer, before mass production, that the manufacturing process can stably produce parts that meet design intent.' },
    { t: 'p', text: 'Many suppliers see PPAP as "tedious paperwork," but at its core it is a systematic risk-management process. Behind every document lies a potential process-failure risk: PFMEA identifies failure modes, the control plan ensures control points exist, MSA confirms the measurement system is trustworthy. Complete documents are only the minimum bar; being able to explain the meaning of each document is the mark of maturity.' },

    { t: 'h2', id: '18-elements', text: '2. The 18 Core Documents, One by One' },
    { t: 'p', text: 'AIAG PPAP 4th Edition defines 18 core elements. Submission requirements differ by Level 1–5, but the following is the complete document list for a full Level 3 submission:' },
    { t: 'ol', items: [
      'Design Records: customer-provided 2D drawings or 3D CAD models with all characteristic annotations',
      'Design FMEA (DFMEA): required if the supplier owns part design; waived for customer-owned design',
      'Process Flow Diagram: the full process flow from raw-material receiving to finished-goods shipment',
      'Process FMEA (PFMEA): potential failure modes and severity assessment for each station in the flow',
      'Control Plan: lists each control point, control method, sampling frequency, and reaction plan',
      'Measurement System Analysis (MSA): repeatability and reproducibility; %R&R < 10% is preferred',
      'Dimensional Results: measured results for all annotated characteristics, usually 5–30 pieces',
      'Material and performance test results: mill certificate plus functional tests (e.g., torque, durability)',
      'Initial Process Study: critical characteristics Cpk ≥ 1.67, general characteristics Cpk ≥ 1.33',
      'Qualified laboratory documentation: calibration certificates from an ISO/IEC 17025 accredited lab',
      'Appearance Approval Report (AAR): for parts with appearance requirements, visually approved by the customer',
      'Sample Parts: samples from the initial production run, quantity per customer requirement',
      'Master Sample: one customer-approved sample retained as a reference baseline for future production',
      'Checking Aids: dedicated gauges or fixtures, with calibration records',
      'Customer-Specific Requirements: additional requirements defined by the customer',
      'Part Submission Warrant (PSW): signed by the supplier, confirming complete documents and production capability',
      'Bulk-material PPAP requirements (if applicable): extra requirements for fluids, powders, and other bulk materials',
      'Appearance approval report (if applicable): Japanese OEMs such as Toyota and Honda often require additional formats',
    ] },

    { t: 'h2', id: 'rejection-reasons', text: '3. The Three Most Common PPAP Rejection Reasons' },
    { t: 'p', text: 'In practice, first-submission PPAP rejections are highly concentrated. The following three account for over 70% of all rejection cases:' },
    { t: 'ol', items: [
      'Cpk below target: critical-characteristic Cpk < 1.67, most often from too small a trial sample (30+ recommended) or submitting before the process is stable',
      'MSA %R&R too high: measurement-system variation exceeds 30% of the part tolerance, making results untrustworthy — usually from insufficient gauge resolution or non-standardized operators',
      'PFMEA inconsistent with the control plan: high-RPN failure modes identified in the PFMEA have no corresponding control point in the control plan, showing the two documents were built in isolation',
    ] },
    { t: 'callout', text: 'Rule of thumb: build PPAP documents "right to left" — first fix the control plan’s control points, then verify the PFMEA’s failure modes all have matching controls, and finally confirm measurement credibility for each control point via MSA.' },

    { t: 'h2', id: 'timeline', text: '4. Submission Timeline and Milestones' },
    { t: 'p', text: 'PPAP preparation time varies with part complexity, but for a medium stamped-and-welded part, the path from production trial run to PSW approval usually takes 8–12 weeks. Key milestones:' },
    { t: 'ul', items: [
      'T-12 weeks: confirm which PPAP format and Level the customer uses; collect all DVP test lists',
      'T-8 weeks: complete the first die trial run; collect at least 30 samples for initial dimensional measurement and Cpk',
      'T-6 weeks: complete MSA; confirm measurement-system credibility, or swap the gauge and redo now',
      'T-4 weeks: internal review of document drafts, especially PFMEA–control-plan consistency',
      'T-2 weeks: submit to the customer for pre-review, leaving time to handle first-round feedback',
      'T-0: customer approves the PSW, entering authorized-production status',
    ] },

    { t: 'h2', id: 'tips', text: '5. Common Preparation Pitfalls and Advice for Suppliers' },
    { t: 'p', text: 'The biggest problem in many suppliers’ PPAP preparation is "each department working alone": QA fills the PFMEA, production fills the control plan, engineering fills the flow diagram — and inconsistencies among the three are only discovered just before submission.' },
    { t: 'p', text: 'The recommended fix is to have one owner (usually the APQP engineer) open all three documents at the PPAP kickoff and cross-check them: every station in the process flow has a matching failure-mode analysis in the PFMEA and a matching control point and frequency in the control plan. This triangular check is the most effective way to prevent rejection.' },
    { t: 'callout', text: 'Fullwei’s approach: we run an internal mock audit 2 weeks before PPAP submission, with the QA manager playing "customer reviewer" to actively challenge document logic. This step raised our first-pass approval rate from 72% to 91%.' },
  ],
  relatedLinksEn: [
    { label: 'About Fullwei’s Certifications', href: '/about', desc: 'IATF 16949, ISO 14001, and ISO 45001 certification information' },
    { label: 'Automotive Bracket Product Line', href: '/products/automotive-brackets', desc: 'PPAP track record and delivery assurance for precision brackets' },
    { label: 'Exhaust System Product Line', href: '/products/exhaust-systems', desc: 'Material validation and durability-test flow for exhaust systems' },
  ],
  faqEn: [
    {
      q: 'What is the real difference between PPAP Level 1 and Level 5?',
      a: 'Level 1 requires only the PSW, with documents retained at the supplier. Level 3 is the most common standard submission — PSW plus full supporting documents. Level 5 is the strictest on-site review, where the customer’s engineer visits the plant to review all documents and processes. New suppliers or high-risk parts usually require Level 3 or above.',
    },
    {
      q: 'Must PPAP be resubmitted after a die modification?',
      a: 'Under IATF 16949, a die change is an engineering change and in principle needs customer approval and PPAP resubmission (at least Level 1). Minor maintenance regrinding (not affecting product characteristics) can usually be handled via internal engineering-change records but must be logged in the control plan. The safest approach is to confirm the change classification with the customer in advance.',
    },
    {
      q: 'Do sub-tier (Tier 2) supplier materials also need PPAP documents?',
      a: 'Yes. The PPAP package the customer ultimately receives must cover source validation of key raw materials. This usually includes the mill certificate from the steelmaker, work records from heat-treatment or surface-treatment suppliers, and records of any outsourced process that affects final part characteristics.',
    },
  ],
  blocks: [
    { t: 'h2', id: 'ppap-purpose', text: '一、PPAP 的核心目的：消除量產前的不確定性' },
    { t: 'p', text: 'PPAP（Production Part Approval Process，量產零件核准程序）是 IATF 16949 的核心工具之一，目的是在正式量產前，讓供應商向客戶證明：製造過程有能力穩定生產符合設計意圖的零件。' },
    { t: 'p', text: '許多供應商將 PPAP 視為「繁瑣的文件作業」，但本質上 PPAP 是一套系統性的風險管理流程。每一份文件的背後，都對應一個潛在的製程失效風險：PFMEA 識別失效模式、控制計畫確保管控點存在、MSA 確認量測系統可信賴。文件齊全只是最低標準，能解釋每份文件的意義才是成熟度的體現。' },

    { t: 'h2', id: '18-elements', text: '二、18 項核心文件逐一解析' },
    { t: 'p', text: 'PPAP 第四版（AIAG PPAP 4th Edition）定義了 18 項核心要素，Level 1～5 提交要求不同，但以下為完整 Level 3 提交的文件清單：' },
    { t: 'ol', items: [
      '設計記錄（Design Records）：客戶提供的 2D 工程圖或 3D CAD 模型，含所有特性標註',
      '設計 FMEA（DFMEA）：若供應商負責零件設計，需提供 DFMEA；外購設計可免',
      '製程流程圖（Process Flow Diagram）：從原材料入庫到成品出貨的完整製程流程',
      '製程 FMEA（PFMEA）：針對製程流程圖中每個工站的潛在失效模式與嚴重度評估',
      '控制計畫（Control Plan）：列出每個管制點、管制方法、抽樣頻率與異常反應計畫',
      '量測系統分析（MSA）：重複性（Repeatability）與再現性（Reproducibility）分析，%R&R < 10% 為佳',
      '尺寸結果（Dimensional Results）：依圖面所有標註特性的量測結果，通常量測 5～30 件',
      '材料、性能試驗結果：材質憑證（Mill Certificate）＋功能性試驗（如扭力、耐久性）',
      '初始製程能力研究（Initial Process Study）：關鍵特性 Cpk ≥ 1.67，一般特性 Cpk ≥ 1.33',
      '合格實驗室文件：量測設備校驗證書，需為 ISO/IEC 17025 認證實驗室出具',
      '外觀核准報告（AAR）：適用有外觀要求的零件，需由客戶目視核准',
      '量產樣品（Sample Parts）：通常為初始生產試跑的樣品，數量依客戶要求',
      '主樣品（Master Sample）：封存一份客戶核准樣品，用於未來量產的比對基準',
      '檢查輔具（Checking Aids）：專用量具或治具，需附校驗紀錄',
      '顧客特定要求（Customer-Specific Requirements）：客戶自訂的附加要求',
      '零件提交保證書（PSW）：供應商簽署，確認文件完整且量產能力符合要求',
      '散裝材料 PPAP 要求（若適用）：針對流體、粉末等散裝材料的額外要求',
      '外觀批准報告（若適用）：豐田、本田等日系 OEM 通常有額外格式要求',
    ] },

    { t: 'h2', id: 'rejection-reasons', text: '三、三個最常見的 PPAP 駁回原因' },
    { t: 'p', text: '根據實務經驗，PPAP 首次提交被駁回的原因有高度集中性，以下三項佔所有駁回案例的 70% 以上：' },
    { t: 'ol', items: [
      'Cpk 未達標：關鍵特性 Cpk < 1.67，最常見根因是試跑樣本數不足（建議至少 30 件）或製程尚未穩定就提交',
      'MSA %R&R 過高：量測系統變異超過零件公差的 30%，導致量測結果不可信。根因通常是量具解析度不足或操作員未標準化',
      'PFMEA 與控制計畫不一致：PFMEA 識別的高 RPN 失效模式未在控制計畫中出現對應管控點，顯示兩份文件各自為政',
    ] },
    { t: 'callout', text: '經驗法則：PPAP 文件應「由右往左」建立——先確定控制計畫的管控點，再回頭驗證 PFMEA 的失效模式是否都有對應管控，最後以量測系統分析確認每個管控點的量測可信度。' },

    { t: 'h2', id: 'timeline', text: '四、提交時程規劃與里程碑' },
    { t: 'p', text: 'PPAP 準備週期因零件複雜度而異，但以中型沖壓焊接零件為例，從模具量產試跑到 PSW 核准通常需要 8～12 週。關鍵里程碑如下：' },
    { t: 'ul', items: [
      'T-12 週：確認客戶使用哪個版本的 PPAP 格式與 Level 要求，收集所有 DVP 試驗清單',
      'T-8 週：完成首次模具試跑，收集至少 30 件樣品進行初始尺寸量測與 Cpk 計算',
      'T-6 週：完成 MSA 分析，確認量測系統可信度，否則此時可換量具重做',
      'T-4 週：文件初稿內部審查，特別確認 PFMEA 與控制計畫的一致性',
      'T-2 週：提交給客戶預審，預留時間處理首次回饋的修改要求',
      'T-0：客戶核准 PSW，進入量產授權狀態',
    ] },

    { t: 'h2', id: 'tips', text: '五、供應商常見的準備陷阱與建議' },
    { t: 'p', text: '許多供應商在 PPAP 準備上的最大問題是「各部門各做各的」：品保填 PFMEA、生產填控制計畫、工程填流程圖，三份文件之間出現不一致，卻在最後提交前才發現。' },
    { t: 'p', text: '建議的解法是在 PPAP 啟動會議時，由一名負責人（通常是 APQP 工程師）同時打開三份文件進行交叉核對：製程流程圖的每個工站，在 PFMEA 中都有對應的失效模式分析，在控制計畫中都有對應的管控點與頻率。這個三角核對，是防止駁回的最有效手段。' },
    { t: 'callout', text: '富惟做法：我們在 PPAP 提交前 2 週進行內部模擬稽核，邀請品保主管擔任「客戶審查員」角色，主動挑戰文件邏輯。這個步驟將我們的首次核准率從 72% 提升至 91%。' },
  ],
  relatedLinks: [
    { label: '關於富惟的認證資質', href: '/about', desc: 'IATF 16949、ISO 14001、ISO 45001 認證資訊' },
    { label: '汽車固定架產品線', href: '/products/automotive-brackets', desc: '精密固定架的 PPAP 實績與交期保障' },
    { label: '排氣系統產品線', href: '/products/exhaust-systems', desc: '排氣系統的材料驗證與耐久試驗流程' },
  ],
  relatedSlugs: ['taiwan-auto-parts-tier1-qualification'],
  faq: [
    {
      q: 'PPAP Level 1 到 Level 5 有何實質差異？',
      a: 'Level 1 只需提交 PSW（零件提交保證書），文件留存於供應商端。Level 3 是最常見的標準提交，需提交 PSW 加上完整支援文件。Level 5 是最嚴格的現場評核，客戶工程師會親赴工廠審查所有文件與製程。新供應商或高風險零件通常要求 Level 3 以上。',
    },
    {
      q: '模具修改後必須重新提交 PPAP 嗎？',
      a: '依據 IATF 16949，模具變更屬於工程變更，原則上需要客戶批准並重新提交 PPAP（至少 Level 1）。若是小幅度的維護性研磨（不影響產品特性），通常可透過內部工程變更記錄處理，但需在控制計畫中記錄。最穩妥的做法是提前向客戶確認變更分類。',
    },
    {
      q: '外包商（二級供應商）的材料也需要 PPAP 文件嗎？',
      a: '是的，客戶最終收到的 PPAP 文件包需涵蓋關鍵原材料的來源驗證。通常要求包含：鋼廠的材質憑證（Mill Certificate）、熱處理或表面處理供應商的作業記錄，以及任何影響最終零件特性的外包工序記錄。',
    },
  ],
};

const evTransition: PostFullContent = {
  slug: 'ev-transition-metal-stamping',
  blocksEn: [
    { t: 'h2', id: 'structural-decline', text: '1. The Structural Decline of ICE Demand' },
    { t: 'p', text: 'Per IEA projections, electric vehicles (BEV plus PHEV) will exceed 40% of global sales by 2030. For metal stamping shops mainly serving ICE exhaust systems, this is an unavoidable structural threat: exhaust pipes, mufflers, and catalytic-converter housings — these three part types disappear entirely on pure EVs.' },
    { t: 'p', text: 'Taiwan’s metal stamping industry is highly concentrated in the supply chains of Japanese automakers like Honda and Yamaha. Their electrification pace is relatively conservative, but the 2030 impact is already within the countdown. Starting the transformation now buys at least 5–7 more years of buffer than reacting after orders shrink.' },
    { t: 'ul', items: [
      'Exhaust-system parts (incl. mufflers, exhaust pipes): demand projected to shrink 60–80% by 2035',
      'Motorcycle frames and structural parts: electric-scooter penetration rises fast; part structures change but stamping demand remains',
      'Automotive interior brackets: little difference between EV and ICE, demand relatively stable',
    ] },

    { t: 'h2', id: 'ev-opportunities', text: '2. Three New Opportunities EVs Bring' },
    { t: 'p', text: 'The shock of electrification is real, but so are the opportunities. EVs don’t need fewer precision metal parts — they need different kinds. The following three part types represent the most direct entry points for stamping shops in the EV supply chain:' },
    { t: 'ol', items: [
      'Battery enclosures and structural parts: battery packs need high-precision aluminum or steel housings with extreme stamping accuracy (within ±0.1 mm) and airtight welding — the highest technical bar and the best margins',
      'Motor and power-electronics mounting brackets: mounting brackets for motors, inverters, and OBCs need precision stamping and welding, with tolerance demands on par with traditional ICE structural parts',
      'Lightweight chassis structural parts: because EV battery weight rises sharply, lightweighting demand on other chassis parts is more urgent, lifting demand for high-strength thin-sheet stampings',
    ] },
    { t: 'callout', text: 'Market signal: Taiwan’s local electric-scooter makers (Gogoro and others) have begun sourcing battery frames, motor housings, and similar parts from traditional metal-part shops — the nearest entry point for local stamping shops.' },

    { t: 'h2', id: 'transformation-paths', text: '3. Three Transformation Paths for Stamping Shops' },
    { t: 'p', text: 'There is no single optimal answer. Companies start from different points (equipment capability, capital, customer relationships), so the right path differs. The following three paths represent choices for different resource scales:' },
    { t: 'ol', items: [
      'Deepen existing customers: support current ICE customers’ electrification by proactively investing in EV-model parts. Pros: a solid relationship base. Cons: tightly bound to the customer’s electrification speed',
      'Cross technical domains: invest in aluminum stamping or aluminum die-casting capability to enter the EV battery-enclosure and structural-part market. High upfront investment (equipment + process know-how), but high barriers once inside',
      'Focus on low-volume high-mix: transform into a specialist for fast prototyping and small-batch production, serving Taiwan’s local EV startups and R&D institutions. Low capital need, but requires stronger engineering service and fast-quote systems',
    ] },

    { t: 'h2', id: 'taiwan-advantages', text: '4. Taiwanese Shops’ Comparative Advantages and Limits' },
    { t: 'p', text: 'Taiwan’s stamping industry’s competitive edge over mainland China still holds in the EV era — and may even strengthen: rising supply-chain-resilience demand makes customers more willing to pay a premium for Taiwan’s stable quality and communication efficiency; IATF 16949 certification rates exceed Southeast Asian competitors; and fast prototyping and engineering service are strong.' },
    { t: 'p', text: 'But the limits are equally clear: relatively small scale, generally insufficient aluminum-processing capability, uneven automation, and low brand visibility to attract EV Tier 1 makers. These limits are not fatal, but they must be faced early and reinforced with a plan.' },
    { t: 'ul', items: [
      'Strengths: stable quality, fast response, high IATF-certification rate, geopolitical benefit',
      'Limits: weak aluminum capability, insufficient single-plant scale, under-investment in automation',
      'Advice: collaborate with peers or outsource aluminum processes — no need to build full capability from the start',
    ] },

    { t: 'h2', id: 'action-items', text: '5. Conclusion and Near-Term Action Items' },
    { t: 'p', text: 'EV transformation is not a question of "whether," but of "when to start and where to enter." For medium stamping shops of 50–500 people, the recommended near-term action list is:' },
    { t: 'ol', items: [
      'Within this year: complete an EV-impact assessment of each part in the current line and identify the top three items likely to shrink within 3 years',
      'Within next year: choose one transformation path and launch a pilot EV-related order (even a small sample batch)',
      'Within three years: build a stable supply relationship with at least one EV customer as a confidence anchor for the transformation',
    ] },
    { t: 'callout', text: 'Fullwei’s view: we began planning the Pingtung Smart Factory in 2019, and one core motive was to prepare automated manufacturing capability for the electrification era. A highly automated plant switches product lines far faster than a labor-intensive one. The time cost of transformation is often harder to recover than the capital cost.' },
  ],
  relatedLinksEn: [
    { label: 'Pingtung Smart Factory', href: '/#smart-factory', desc: 'Fullwei’s automated manufacturing capability for the EV era' },
    { label: 'Exhaust System Product Line', href: '/products/exhaust-systems', desc: 'Technical depth of the existing line and its future evolution' },
    { label: 'Join Us', href: '/careers', desc: 'Fullwei is seeking engineering talent for the EV supply chain' },
  ],
  faqEn: [
    {
      q: 'Do EVs still need traditional metal stampings?',
      a: 'Yes, but the demand structure changes. EVs don’t need exhaust systems, but they need battery enclosures, motor mounting brackets, chassis structural parts, and other new metal-part types. Battery-enclosure precision and welding requirements are even higher than traditional exhaust parts — a higher-value opportunity for capable stamping shops.',
    },
    {
      q: 'With limited capital, which transformation path should an SME prioritize?',
      a: 'With limited capital, prioritize the "deepen existing customers" path — proactively propose to current Japanese customers: "we can support your electrification and develop EV-model parts." This needs no large upfront capital and has a relatively high success rate because the relationship base already exists. Aluminum capability can wait until cash flow stabilizes.',
    },
    {
      q: 'Can Taiwanese stamping shops enter Tesla or Chinese EV-maker supply chains?',
      a: 'Short-term, it is difficult. Tesla has no local supply chain in Taiwan, and Chinese EV makers (BYD, NIO, etc.) tend to source locally. A more realistic entry is Taiwan’s local electric-scooter makers (Gogoro, Aeon Motor) and the EV-model supply chains of Japanese automakers — the latter being friendliest to Taiwanese shops due to geographic ties.',
    },
  ],
  blocks: [
    { t: 'h2', id: 'structural-decline', text: '一、燃油車需求的結構性收縮' },
    { t: 'p', text: '根據 IEA 的預測，2030 年全球電動車（含 BEV 與 PHEV）銷量佔比將超過 40%。對於主要服務燃油車排氣系統的金屬沖壓廠而言，這是一個無法迴避的結構性威脅：排氣管、消音器、觸媒轉換器殼體——這三類零件在純電動車上將完全消失。' },
    { t: 'p', text: '台灣金屬沖壓業有高度集中於 Honda、Yamaha 等日系車廠供應鏈的特性。日系車廠的電動化腳步雖然相對保守，但 2030 年的影響已進入倒數計時的範圍。現在開始布局轉型，比等到訂單萎縮後才反應，至少多出 5～7 年的緩衝期。' },
    { t: 'ul', items: [
      '排氣系統類零件（含消音器、排氣管）：2035 年預計需求萎縮 60～80%',
      '機車車架與結構件：電動機車滲透率快速提升，零件結構改變但沖壓需求仍在',
      '汽車內裝固定架類：電動車與燃油車差異不大，需求相對穩定',
    ] },

    { t: 'h2', id: 'ev-opportunities', text: '二、電動車帶來的三類新機會' },
    { t: 'p', text: '電動化的衝擊是真實的，但機會同樣真實。電動車並非不需要精密金屬件，而是需要不同種類的精密金屬件。以下三類零件代表金屬沖壓廠在電動車供應鏈中最直接的切入機會：' },
    { t: 'ol', items: [
      '電池殼體與結構件：電池包需要高精度的鋁合金或鋼製外殼，對沖壓精度（±0.1 mm 以內）與氣密焊接要求極高，是技術門檻最高也是利潤最好的機會',
      '電機與電控安裝支架：馬達、變頻器、OBC 的安裝支架需要精密沖壓與焊接，尺寸公差要求與傳統燃油車結構件相當',
      '輕量化底盤結構件：電動車因電池重量大幅增加，對底盤其他零件輕量化需求更迫切，高強鋼薄板沖壓件需求上升',
    ] },
    { t: 'callout', text: '市場訊號：台灣本土電動機車廠（Gogoro 等）的供應鏈已開始向傳統金屬件廠尋找電池架、馬達殼體等零件供應商，這是本土沖壓廠最近距離的切入點。' },

    { t: 'h2', id: 'transformation-paths', text: '三、沖壓廠的三條轉型路徑' },
    { t: 'p', text: '轉型沒有單一最優解，企業的起點（設備能力、資金實力、客戶關係）不同，適合的路徑也不同。以下三條路徑代表不同資源規模的選擇：' },
    { t: 'ol', items: [
      '深化既有客戶：協助現有燃油車客戶的電動化轉型，主動投入電動版車型的零件開發。優點是關係基礎穩固，缺點是與客戶電動化速度高度綁定',
      '技術跨域：投入鋁合金沖壓或鋁合金壓鑄能力，切入電動車電池殼體與結構件市場。前期投資門檻高（設備 + 製程 Know-how），但進入後壁壘也高',
      '聚焦小量多樣：轉型為快速打樣與小批量生產的專業代工廠，服務台灣本土電動車新創與研發機構。資本需求低，但需要強化工程服務能力與快速報價體系',
    ] },

    { t: 'h2', id: 'taiwan-advantages', text: '四、台灣廠的比較優勢與限制' },
    { t: 'p', text: '台灣金屬沖壓業相對中國大陸的競爭優勢，在電動車時代依然成立——甚至可能強化：供應鏈韌性需求提升使客戶更願意為台灣廠的穩定品質與溝通效率付出溢價；IATF 16949 認證的比例高於東南亞競爭者；快速打樣與工程服務能力強。' },
    { t: 'p', text: '但台灣廠的限制同樣清晰：規模相對較小、鋁合金加工能力普遍不足、自動化程度不均、吸引電動車 Tier 1 廠商的品牌能見度低。這些限制不是致命傷，但需要提前正視並有計畫地補強。' },
    { t: 'ul', items: [
      '優勢：品質穩定、快速響應、IATF 認證比例高、地緣政治受益',
      '限制：鋁合金能力薄弱、單廠規模不足、自動化投資不足',
      '建議：與同業合作或委外鋁合金工序，不必一開始就自建全能力',
    ] },

    { t: 'h2', id: 'action-items', text: '五、結語與近期行動建議' },
    { t: 'p', text: '電動車轉型不是「要不要做」的問題，而是「何時開始、從哪裡切入」的問題。對於規模在 50～500 人的中型金屬沖壓廠，建議的近期行動清單如下：' },
    { t: 'ol', items: [
      '今年內：完成現有產品線中各零件的電動車影響度評估，找出 3 年內可能萎縮的前三大品項',
      '明年內：選定一條轉型路徑，啟動一個電動車相關的試驗性訂單（哪怕是小批量樣品）',
      '三年內：建立至少一個電動車客戶的穩定供應關係，作為轉型的信心錨點',
    ] },
    { t: 'callout', text: '富惟觀點：我們在 2019 年開始布局屏東智造工廠，核心動機之一就是為電動化時代準備自動化製造能力。高度自動化的工廠在切換產品線時，比人工密集的工廠快得多。轉型的時間成本，往往比資金成本更難追回。' },
  ],
  relatedLinks: [
    { label: '屏東智造工廠', href: '/#smart-factory', desc: '富惟為電動車時代準備的自動化製造能力' },
    { label: '排氣系統產品線', href: '/products/exhaust-systems', desc: '既有產品線的技術積累與未來演進' },
    { label: '加入我們', href: '/careers', desc: '富惟正在尋找電動車供應鏈相關的工程人才' },
  ],
  relatedSlugs: ['honda-supply-chain-restructure-taiwan', 'smart-factory-roi-sme'],
  faq: [
    {
      q: '電動車是否還需要傳統金屬沖壓件？',
      a: '是的，但需求結構改變。電動車不需要排氣系統，但需要電池殼體、馬達安裝支架、底盤結構件等新類型金屬件。電池殼體的精度與焊接要求甚至高於傳統排氣系統件，對有能力的沖壓廠是更高附加值的機會。',
    },
    {
      q: '中小型沖壓廠資金有限，該優先做哪條轉型路徑？',
      a: '資金有限的情況下，建議優先選擇「深化既有客戶」路徑，主動向現有日系客戶提出「我們可以配合你的電動化，開發電動版的新零件」。這不需要前期大量資本投入，且成功率相對較高，因為關係基礎已建立。鋁合金能力可待現金流穩定後再投入。',
    },
    {
      q: '台灣沖壓廠有機會進入 Tesla 或中國電動車廠的供應鏈嗎？',
      a: '短期內難度較高。Tesla 在台灣無本地供應鏈，中國電動車廠（比亞迪、蔚來等）傾向本土採購。更現實的切入點是台灣本土的電動機車廠（Gogoro、宏佳騰等）、以及日系車廠的電動版車型供應鏈，後者因地緣關係對台灣廠最友善。',
    },
  ],
};

const tier1ExhaustGuide: PostFullContent = {
  slug: 'tier1-exhaust-system-manufacturing-guide',
  blocksEn: [
    { t: 'h2', id: 'tier1-definition', text: '1. What Is Tier 1 Exhaust System Manufacturing?' },
    { t: 'p', text: 'Tier 1 in exhaust manufacturing means a first-tier supplier that ships directly to the automaker (OEM) and has passed platform qualification and the IATF 16949 quality system. For exhaust systems, the Tier 1 shop welds steel tubes, flanges, and catalytic-converter housings into assemblies and hands them to the automaker; Tier 2 supplies materials or semi-finished parts to Tier 1; Tier 3 mostly supplies raw materials. The dividing line among the three tiers is "who is fully accountable for production quality to the automaker": Tier 1 signs the PPAP and is responsible for dimensional tolerance, batch consistency, and delivery.' },
    { t: 'ul', items: [
      'Tier 1: supplies the automaker (OEM); responsible for assemblies, PPAP, and production consistency',
      'Tier 2: supplies Tier 1; provides materials, semi-finished goods, or single parts',
      'Tier 3: supplies Tier 2; provides raw materials and basic processing',
    ] },
    { t: 'callout', text: 'Fullwei’s position: as a Tier 1 exhaust manufacturer shipping directly to automakers, Fullwei is fully accountable for assembly PPAP, batch consistency, and delivery, backing quality with three per-batch reports — leak, imaging, and fatigue.' },

    { t: 'h2', id: 'parts-materials', text: '2. Core Components and Materials of an Exhaust System' },
    { t: 'p', text: 'A passenger-car exhaust system usually has five sections: the exhaust manifold, catalytic-converter housing, mid-pipe, muffler, and tailpipe. The mainstream materials are ferritic stainless steels SUS409 and SUS436, plus SUS304 for high-temperature sections. Material choice follows working temperature and corrosion needs: the manifold near the engine can exceed 800°C and needs oxidation-resistant SUS409; the mid-to-rear section focuses on salt-corrosion resistance and commonly uses SUS436 (per prevailing 2026 automotive-exhaust material practice). The wrong material easily leads to rust or thermal-fatigue cracking in road testing.' },

    { t: 'h2', id: 'welding-methods', text: '3. Mainstream Welding Methods: TIG, MIG-MAG, Laser, and Robotic' },
    { t: 'p', text: 'Exhaust welding mainly uses four methods, differing in heat input, distortion, and production speed. TIG (tungsten inert-gas arc welding) has low heat input and clean beads, suiting thin walls and appearance parts, but is slower. MIG-MAG (metal gas-shielded arc welding) is fast and suits thicker parts and high volume, with higher heat input. Laser welding has the smallest heat-affected zone and lowest distortion, with a higher equipment bar. Robotic welding automates the above, focusing on repeatability and stable cycle time. The choice depends on the section’s wall thickness and appearance need.' },
    { t: 'ul', items: [
      'TIG: low heat input, small distortion, slow — suits thin walls and appearance parts',
      'MIG-MAG: high heat input, moderate distortion, fast — suits thicker parts and volume',
      'Laser: low heat input, lowest distortion, fast — suits high-precision thin-wall sections',
      'Robotic: heat input depends on method, stable cycle, fast — suits high-volume production',
    ] },
    { t: 'p', text: 'For low-distortion welding of thin-wall stainless, see the companion article "Low-Distortion Welding of Thin-Wall Stainless Exhaust Pipes."' },

    { t: 'h2', id: 'why-hard', text: '4. Why Is Exhaust Welding a High-Barrier Process?' },
    { t: 'p', text: 'Three risks of thin-wall stainless under high heat make exhaust welding more demanding than general sheet-metal welding. First, thermal distortion: tubes of 0.8–1.5 mm wall thickness warp under heat, affecting downstream assembly. Second, intergranular corrosion: stainless dwelling too long in the 425–815°C range precipitates chromium carbide at grain boundaries and loses corrosion resistance. Third, seal integrity: a micro-pore in the bead leaks gas and creates noise on the road. The way to control all three is the same: lower heat input per unit and shorten the high-temperature dwell (adjusted per the welding process’s heat-input calculation and thermal-cycle test results).' },

    { t: 'h2', id: 'quality-verification', text: '5. Exhaust-Part Quality Verification: Leak, Imaging, and Fatigue Tests' },
    { t: 'p', text: 'A qualified exhaust part must pass three verification gates. First, a leak test, commonly helium or pressure-differential, measures bead leak rate; automaker specs usually require below a set threshold (representative, per each automaker’s spec). Second, bead imaging via X-ray or borescope confirms penetration and the absence of pores. Third, a thermal-cycle fatigue test simulates repeated engine heating and cooling, confirming the bead doesn’t crack after several thousand cycles. As of 2026, Japanese and Korean platforms commonly require these three reports per batch.' },
    { t: 'ul', items: [
      'Leak test: measure bead leak rate by helium or pressure-differential method',
      'Imaging: confirm penetration and pores by X-ray or borescope',
      'Fatigue: confirm no bead cracking after thousands of thermal cycles on a bench',
    ] },

    { t: 'h2', id: 'how-to-evaluate', text: '6. How to Evaluate a Qualified Exhaust Manufacturer' },
    { t: 'p', text: 'Evaluating an exhaust manufacturer comes down to six items: platform qualification, welding-method range, quality-system certification, thin-wall material expertise, volume flexibility, and export fulfillment. Platform qualification matters most, because passing volume validation on Honda, Nissan, or Hyundai platforms means a third-party automaker’s audit has confirmed production consistency. Fullwei’s manufacturing experience is concentrated on these Japanese and Korean platforms, backed by an International Trade Administration export project. For the full method to check all six criteria, see "How to Choose an Exhaust Welding Manufacturer: 6 Criteria."' },
  ],
  relatedLinksEn: [
    { label: 'How to Choose an Exhaust Welding Manufacturer: 6 Criteria', href: '/blog/how-to-choose-exhaust-welding-manufacturer', desc: 'A criterion-by-criterion breakdown with a one-page supplier checklist' },
    { label: 'Low-Distortion Thin-Wall Stainless Exhaust Welding', href: '/blog/low-distortion-thin-wall-stainless-exhaust-welding', desc: 'Technical detail on low heat-input methods, fixtures, and leak verification' },
    { label: 'Exhaust System Product Line', href: '/products/exhaust-systems', desc: 'Materials and volume track record of Fullwei’s exhaust assemblies' },
  ],
  faqEn: [
    {
      q: 'What is the difference between Tier 1 and Tier 2 manufacturing?',
      a: 'Tier 1 ships directly to the automaker and signs the PPAP, fully accountable for production consistency; Tier 2 supplies materials or single parts to Tier 1 and is not directly accountable to the automaker.',
    },
    {
      q: 'Why use stainless steel for exhaust pipes instead of plain carbon steel?',
      a: 'Exhaust sections endure long-term high temperature and acidic condensate. Ferritic stainless steels (such as SUS409, SUS436) outperform plain carbon steel in high-temperature oxidation resistance and salt-corrosion resistance.',
    },
    {
      q: 'Which is better, TIG or laser welding?',
      a: 'Each suits different sections. TIG has clean beads and suits appearance parts; laser has a small heat-affected zone and the lowest distortion, suiting high-precision thin-wall sections. The choice depends on the section’s needs.',
    },
    {
      q: 'How can I judge an exhaust manufacturer’s quality?',
      a: 'Check whether it can provide per-batch leak, imaging, and fatigue test reports, and which automaker platforms it has passed for volume validation.',
    },
  ],
  blocks: [
    { t: 'h2', id: 'tier1-definition', text: '一、什麼是排氣系統的 Tier 1 代工？' },
    { t: 'p', text: '排氣系統代工的 Tier 1，指直接供貨給整車廠（OEM）、並通過車廠平台認證與 IATF 16949 品質體系的一階供應商。以排氣系統為例，Tier 1 廠把鋼管、法蘭、觸媒外殼等零件焊接成總成件，再交給車廠裝車；Tier 2 供應材料或半成品給 Tier 1；Tier 3 多半供應原料。三層分工的分界點在於「誰對整車廠的量產品質負全責」：Tier 1 要簽 PPAP（生產件核准程序），對尺寸公差、批次一致性與交期負責。' },
    { t: 'ul', items: [
      'Tier 1：對整車廠（OEM）供貨，負責總成件、PPAP 與量產一致性',
      'Tier 2：對 Tier 1 供貨，提供材料、半成品或單一零件',
      'Tier 3：對 Tier 2 供貨，提供原料與基礎加工',
    ] },
    { t: 'callout', text: '富惟定位：作為直接供貨整車廠的 Tier 1 排氣系統代工，富惟對總成件的 PPAP、批次一致性與交期負全責，並以氣密、影像與疲勞三項批次報告佐證品質。' },

    { t: 'h2', id: 'parts-materials', text: '二、排氣系統的核心零組件與材料' },
    { t: 'p', text: '一套乘用車排氣系統通常包含排氣歧管、觸媒轉化器外殼、中段管、消音器與尾管五個部位。主流材料是肥粒鐵系不鏽鋼 SUS409、SUS436，以及高溫段使用的 SUS304。選材依據工作溫度與耐蝕需求：靠近引擎的歧管段溫度可達攝氏 800 度以上，需要耐高溫氧化的 SUS409；中後段以耐鹽害腐蝕為主，常用 SUS436（依 2026 年汽車排氣系統業界通行選材作法）。材料選錯，後段路試容易出現鏽蝕或熱疲勞裂紋。' },

    { t: 'h2', id: 'welding-methods', text: '三、主流焊接工法：TIG、MIG-MAG、雷射與機器人自動焊' },
    { t: 'p', text: '排氣管焊接主要採四種工法，差別在熱輸入、變形量與量產速度。TIG（鎢極惰性氣體電弧焊）熱輸入低、焊道乾淨，適合薄壁與外觀件，速度較慢。MIG-MAG（金屬氣體電弧焊）速度快、適合較厚件與大量生產，熱輸入較高。雷射焊接的熱影響區最小、變形最低，設備門檻較高。機器人自動焊把前述工法自動化，重點在重複性與節拍穩定。選哪一種，依部位的壁厚與外觀需求決定。' },
    { t: 'ul', items: [
      'TIG：熱輸入低、變形小、速度慢，適合薄壁與外觀件',
      'MIG-MAG：熱輸入高、變形中等、速度快，適合較厚件與量產',
      '雷射：熱輸入低、變形最小、速度快，適合高精度薄壁段',
      '機器人自動焊：熱輸入視工法而定、節拍穩定、速度快，適合大量量產',
    ] },
    { t: 'p', text: '薄壁不鏽鋼的低變形焊接方法，另一篇〈薄壁不鏽鋼排氣管低變形焊接工法〉有完整說明。' },

    { t: 'h2', id: 'why-hard', text: '四、為什麼排氣管焊接是高門檻工序？' },
    { t: 'p', text: '薄壁不鏽鋼在高熱下的三個風險，使排氣焊接的技術門檻高於一般鈑金焊接。第一是熱變形：壁厚 0.8 至 1.5 公釐的管件受熱後容易翹曲，影響後續裝配。第二是晶間腐蝕：不鏽鋼在攝氏 425 至 815 度區間停留過久，晶界會析出碳化鉻而失去耐蝕性。第三是密封性：焊道若有微孔，會在路試中漏氣並產生異音。控制這三項的方法相同：把單位熱輸入壓低，並縮短材料的高溫停留時間（依焊接製程的熱輸入計算與熱循環試驗結果調整）。' },

    { t: 'h2', id: 'quality-verification', text: '五、排氣件的品質驗證：洩漏、影像與疲勞測試' },
    { t: 'p', text: '合格的排氣件要通過三道驗證關卡。第一是氣密測試，常用氦氣或壓差法量測焊道洩漏率，車廠規格多要求低於特定門檻（代表值，依各車廠規範）。第二是焊道影像檢測，以 X-ray 或內視鏡確認熔深與是否有氣孔。第三是熱循環疲勞測試，模擬引擎反覆冷熱，確認焊道在數千次循環後不開裂。截至 2026 年，日系與韓系車廠平台多要求供應商隨批次提供這三項報告。' },
    { t: 'ul', items: [
      '氣密測試：以氦氣或壓差法量測焊道洩漏率',
      '影像檢測：以 X-ray 或內視鏡確認熔深與氣孔',
      '疲勞測試：以熱循環台架確認數千次冷熱後焊道不開裂',
    ] },

    { t: 'h2', id: 'how-to-evaluate', text: '六、如何評估一家合格的排氣系統代工廠？' },
    { t: 'p', text: '評估排氣系統代工廠看六項：車廠平台資格、焊接工法廣度、品質系統認證、薄壁材料專精、量產彈性與出口履約能力。其中車廠平台資格最關鍵，因為通過 Honda、Nissan、Hyundai 等平台量產驗證，代表這家廠已被第三方車廠的稽核確認過量產一致性。富惟工業的代工經驗集中在這幾個日系與韓系平台，並取得國貿署專案的出口背書。六項指標的完整檢核方法，見〈如何選擇排氣管焊接代工廠？六大評估指標〉。' },
  ],
  relatedLinks: [
    { label: '如何選擇排氣管焊接代工廠？六大評估指標', href: '/blog/how-to-choose-exhaust-welding-manufacturer', desc: '六大指標逐項拆解，附一頁供應商檢核表' },
    { label: '薄壁不鏽鋼排氣管低變形焊接工法', href: '/blog/low-distortion-thin-wall-stainless-exhaust-welding', desc: '低熱輸入工法、治具設計與氣密驗證的技術細節' },
    { label: '排氣系統產品線', href: '/products/exhaust-systems', desc: '富惟排氣系統總成件的材料與量產實績' },
  ],
  relatedSlugs: ['how-to-choose-exhaust-welding-manufacturer', 'low-distortion-thin-wall-stainless-exhaust-welding'],
  faq: [
    {
      q: 'Tier 1 和 Tier 2 代工差在哪？',
      a: 'Tier 1 直接供貨給整車廠並簽 PPAP，對量產一致性負全責；Tier 2 供材料或單一零件給 Tier 1，不直接對車廠負責。',
    },
    {
      q: '排氣管為什麼用不鏽鋼，不用一般碳鋼？',
      a: '排氣段長期承受高溫與酸性冷凝水，肥粒鐵系不鏽鋼（如 SUS409、SUS436）的耐高溫氧化與耐鹽害腐蝕表現，優於一般碳鋼。',
    },
    {
      q: 'TIG 和雷射焊接哪個比較好？',
      a: '兩者各有適用部位。TIG 焊道乾淨、適合外觀件；雷射熱影響區小、變形最低，適合高精度薄壁段。選擇依部位需求而定。',
    },
    {
      q: '怎麼判斷一家排氣系統代工廠的品質？',
      a: '看它能否提供氣密、影像與疲勞測試的批次報告，以及通過哪些車廠平台的量產驗證。',
    },
  ],
};

const chooseExhaustManufacturer: PostFullContent = {
  slug: 'how-to-choose-exhaust-welding-manufacturer',
  blocksEn: [
    { t: 'h2', id: 'criterion-platform', text: 'Criterion 1: Platform qualification comes first' },
    { t: 'p', text: 'The first thing to confirm is which vehicle platforms a manufacturer has already mass-produced for. A supplier qualified on Honda, Nissan, or Hyundai platforms has passed an OEM SQE on-site audit and PPAP approval, which means a third party has already verified its production consistency. A shop that has only built samples and never run a production line carries clearly higher risk. Ask the supplier to list the platforms and model years it has shipped in volume.' },

    { t: 'h2', id: 'criterion-methods', text: 'Criterion 2: Range of welding methods' },
    { t: 'p', text: 'A supplier that offers TIG, laser, and robotic welding fits more designs than a single-method shop. An exhaust system needs different heat input and appearance levels across the manifold, mid-pipe, and tail section. The wider the method range, the better a supplier can pick the right process for each part on the same drawing, instead of forcing one method onto every joint. Ask how many of these methods run on the supplier’s own lines.' },

    { t: 'h2', id: 'criterion-iatf', text: 'Criterion 3: What IATF 16949 actually means' },
    { t: 'p', text: 'IATF 16949 matters because it represents a traceable process-control system with a closed loop for nonconforming parts, not a certificate on a wall. Buyers can go one level deeper and ask three things: audit frequency, the corrective-action workflow, and whether statistical process control (SPC) data ships with each batch. A supplier that produces these records usually shows smaller quality variation in volume production.' },

    { t: 'h2', id: 'criterion-thinwall', text: 'Criterion 4: Thin-wall stainless expertise' },
    { t: 'p', text: 'Much of an exhaust part’s success rests on controlling thermal distortion in thin-wall stainless steel. Tubes of 0.8 to 1.5 mm wall thickness warp easily under welding heat, so ask how a supplier limits that distortion: pulsed TIG, laser, or dedicated fixtures. A manufacturer that can explain its heat-input control and jig design has the stronger technical footing. A supplier that only answers "we have experience" deserves a follow-up question.' },

    { t: 'h2', id: 'criterion-volume', text: 'Criterion 5: Volume flexibility and lead-time stability' },
    { t: 'p', text: 'A supplier that handles both low-volume prototyping and high-volume production carries the lowest risk for a new model launch. Early launch needs fast samples and engineering changes, while volume production needs stable lead times and yield. A shop that can do only one of these becomes a bottleneck at some point in the model’s life cycle. Ask for the minimum prototype batch, sample lead time, and monthly production ceiling.' },

    { t: 'h2', id: 'criterion-export', text: 'Criterion 6: International orders and export fulfillment' },
    { t: 'p', text: 'For an OEM that exports, a supplier’s customs handling, English technical communication, and government-backed credentials are the assurance of cross-border delivery. A manufacturer holding a government export project, for example Taiwan’s International Trade Administration program, has had its export process and quality standards reviewed by a third party. As of 2026, this criterion matters most for cross-border procurement because it lowers communication and compliance risk.' },

    { t: 'h2', id: 'checklist', text: 'The 6-Criterion Evaluation Checklist' },
    { t: 'ul', items: [
      'Platform qualification — Ask: which platforms and model years, in volume. Strong answer: named Honda / Nissan / Hyundai platforms',
      'Welding-method range — Ask: which methods run in-house. Strong answer: TIG, laser, robotic, at least three',
      'Quality system — Ask: audit frequency, SPC, corrective action. Strong answer: SPC and corrective records per batch',
      'Thin-wall expertise — Ask: how distortion is controlled. Strong answer: specific heat-input control and jig design',
      'Volume flexibility — Ask: minimum batch, monthly ceiling. Strong answer: both prototyping and volume, stable lead time',
      'Export fulfillment — Ask: English window, export record, credentials. Strong answer: export track record plus government program',
    ] },
  ],
  relatedLinksEn: [
    { label: 'What Is Tier 1 Exhaust System Manufacturing?', href: '/blog/tier1-exhaust-system-manufacturing-guide', desc: 'A panoramic intro from supply-chain tiers and materials to quality verification' },
    { label: 'Low-Distortion Thin-Wall Stainless Exhaust Welding', href: '/blog/low-distortion-thin-wall-stainless-exhaust-welding', desc: 'The technical basis for judging thin-wall material expertise' },
    { label: 'About Fullwei’s Certifications', href: '/about', desc: 'IATF 16949, platform track record, and export backing' },
  ],
  faqEn: [
    {
      q: 'What is the first thing to check when choosing an exhaust welding manufacturer?',
      a: 'Check platform qualification first. A supplier qualified on Honda, Nissan, or Hyundai platforms has third-party audited production consistency, which is the clearest risk signal among the six criteria.',
    },
    {
      q: 'Is a single-method welding shop acceptable?',
      a: 'It depends on the part. If your parts are all the same thin-wall appearance type, a single method can work. Across manifold to tail section, a wider method range fits each part better.',
    },
    {
      q: 'What does a government export credential signal?',
      a: 'Holding a government export project means a third party has reviewed the supplier’s export process and quality standards, which is a compliance and fulfillment assurance for OEMs that export.',
    },
  ],
  blocks: [
    { t: 'h2', id: 'criterion-platform', text: '指標一：平台資格是第一道篩選' },
    { t: 'p', text: '首先要確認的是，這家廠已經為哪些車型平台量產過。通過 Honda、Nissan 或 Hyundai 平台認證的供應商，代表已通過 OEM 的 SQE 現場稽核與 PPAP 核准——換句話說，已有第三方驗證過它的量產一致性。只做過樣品、從未跑過量產線的廠，風險明顯較高。請供應商列出它已量產出貨的平台與車型年份。' },

    { t: 'h2', id: 'criterion-methods', text: '指標二：焊接工法的廣度' },
    { t: 'p', text: '同時具備 TIG、雷射與機器人焊接的供應商，能對應的設計遠多於單一工法的廠。一套排氣系統在歧管、中段管與尾段需要不同的熱輸入與外觀等級。工法越廣，供應商越能為同一張圖面上的每個部位挑選合適製程，而不是把單一工法硬套在所有焊道上。可詢問這些工法有幾種是在供應商自有產線上運作。' },

    { t: 'h2', id: 'criterion-iatf', text: '指標三：IATF 16949 實際代表什麼' },
    { t: 'p', text: 'IATF 16949 的意義在於它代表一套可追溯的製程管控系統，且對不良品有閉迴路處理機制，而不只是牆上的一張證書。採購可以再深入問三件事：稽核頻率、矯正措施流程，以及每個批次是否隨附統計製程管制（SPC）數據。能拿出這些紀錄的供應商，通常在量產時的品質變異較小。' },

    { t: 'h2', id: 'criterion-thinwall', text: '指標四：薄壁不鏽鋼的專精度' },
    { t: 'p', text: '排氣件成敗很大一部分取決於控制薄壁不鏽鋼的熱變形。壁厚 0.8 至 1.5 公釐的管件在焊接熱下容易翹曲，因此要問供應商如何抑制變形：脈衝 TIG、雷射，還是專用治具。能說明自己熱輸入控制與治具設計的廠，技術底氣較足；只回答「我們有經驗」的供應商，值得追問下去。' },

    { t: 'h2', id: 'criterion-volume', text: '指標五：量產彈性與交期穩定性' },
    { t: 'p', text: '同時能處理小量打樣與大量量產的供應商，對新車型導入的風險最低。導入初期需要快速打樣與工程變更，量產階段則需要穩定的交期與良率。只能做其中一種的廠，會在車型生命週期的某個階段成為瓶頸。可詢問最小打樣批量、樣品前置期與月產能上限。' },

    { t: 'h2', id: 'criterion-export', text: '指標六：國際訂單與出口履約能力' },
    { t: 'p', text: '對於有外銷的整車廠而言，供應商的報關處理、英文技術溝通與政府背書資格，是跨境交付的保證。持有政府出口專案（例如台灣國貿署的相關計畫）的廠，代表其出口流程與品質標準已被第三方審視過。截至 2026 年，這項指標對跨境採購最為關鍵，因為它降低了溝通與合規風險。' },
    { t: 'callout', text: '富惟實績：代工經驗集中於 Honda、Nissan、Hyundai 等日系與韓系平台，並取得國貿署出口專案背書——正對應「平台資格」與「出口履約」兩項指標。' },

    { t: 'h2', id: 'checklist', text: '六大指標檢核表' },
    { t: 'p', text: '把六項指標整理成一頁，每一項都對應「該問什麼」與「好的答案長什麼樣」，方便採購在初次接觸時快速判斷。' },
    { t: 'ul', items: [
      '平台資格 — 問：量產過哪些平台與車型年份？好答案：明確列出 Honda／Nissan／Hyundai 等平台',
      '焊接工法廣度 — 問：哪些工法在自有產線運作？好答案：TIG、雷射、機器人，至少三種',
      '品質系統 — 問：稽核頻率、SPC、矯正措施？好答案：每批附 SPC 與矯正紀錄',
      '薄壁專精 — 問：如何控制變形？好答案：具體的熱輸入控制與治具設計',
      '量產彈性 — 問：最小批量與月產能上限？好答案：打樣與量產兼具、交期穩定',
      '出口履約 — 問：英文窗口、出口實績、資格？好答案：出口實績加上政府專案背書',
    ] },
  ],
  relatedLinks: [
    { label: 'Tier 1 排氣系統代工是什麼？', href: '/blog/tier1-exhaust-system-manufacturing-guide', desc: '供應鏈分級、零件材料到品質驗證的入門全景' },
    { label: '薄壁不鏽鋼排氣管低變形焊接工法', href: '/blog/low-distortion-thin-wall-stainless-exhaust-welding', desc: '評估薄壁材料專精度時的技術判斷依據' },
    { label: '關於富惟的認證資質', href: '/about', desc: 'IATF 16949、平台量產實績與出口背書資訊' },
  ],
  relatedSlugs: ['tier1-exhaust-system-manufacturing-guide', 'low-distortion-thin-wall-stainless-exhaust-welding'],
  faq: [
    {
      q: '選擇排氣管焊接代工廠，第一個要確認什麼？',
      a: '先看平台資格。通過 Honda、Nissan 或 Hyundai 平台認證的供應商，其量產一致性已被第三方稽核確認，是六大指標中最清楚的風險訊號。',
    },
    {
      q: '單一焊接工法的廠可以接受嗎？',
      a: '視零件而定。若零件都是同一種薄壁外觀件，單一工法可行；但從歧管到尾段，工法越廣越能為每個部位挑選合適製程。',
    },
    {
      q: '政府出口背書代表什麼？',
      a: '持有政府出口專案，代表第三方已審視過供應商的出口流程與品質標準，對有外銷的整車廠是一種合規與履約保證。',
    },
  ],
};

const lowDistortionWelding: PostFullContent = {
  slug: 'low-distortion-thin-wall-stainless-exhaust-welding',
  blocksEn: [
    { t: 'h2', id: 'three-challenges', text: '1. Three Challenges of Thin-Wall Stainless Exhaust Welding' },
    { t: 'p', text: 'Thin-wall stainless carries three risks under welding heat: thermal distortion, intergranular corrosion, and loss of seal integrity. Thermal distortion happens because tubes of 0.8 to 1.5 mm wall thickness warp when heat concentrates, which throws off downstream assembly. Intergranular corrosion happens when stainless dwells too long in the 425 to 815°C range, where chromium carbide forms at grain boundaries and the steel loses corrosion resistance. Loss of seal integrity happens when a micro-pore in the weld leaks gas on the road and creates noise. All three trace back to the same root cause: too much heat held too long.' },

    { t: 'h2', id: 'low-heat-methods', text: '2. Low Heat-Input Methods: Pulsed TIG and Laser' },
    { t: 'p', text: 'The core method is to cut heat input per unit length while keeping full penetration. Pulsed TIG alternates peak and background current, so the weld pool stays controlled and the heat-affected zone (HAZ) stays narrow. Laser welding concentrates energy in a small spot, giving the lowest distortion of the common methods. In practice a supplier maps each joint to the method that fits its wall thickness and appearance need, rather than forcing one method everywhere. Fullwei targets a distortion band within ±0.3 mm on volume parts (representative, to be confirmed by Fullwei production data).' },

    { t: 'h2', id: 'fixture-design', text: '3. Weld-Bead Geometry and Fixture Design' },
    { t: 'p', text: 'Stable bead geometry comes from dedicated fixtures that hold the part against thermal movement. A thin-wall tube springs back as it heats and cools, so the fixture must clamp at the right points and release in the right order. Bead width and penetration are then set by the welding parameters, with the methodology recorded in a welding procedure specification (WPS) so each batch repeats the same profile. Without a purpose-built jig, a thin-wall exhaust part drifts out of tolerance even when the welder is skilled.' },

    { t: 'h2', id: 'robotic-repeatability', text: '4. Robotic Welding and Repeatability' },
    { t: 'p', text: 'Robotic welding turns a validated procedure into a repeatable one. Once the parameters and fixture are fixed, a six-axis cell reproduces the same torch angle, travel speed, and heat input on every part, which is what holds tolerance across a production run. Fullwei reports weld repeatability within ±0.2 mm on its automated cells (representative, to be confirmed by Fullwei production data). Repeatability is the metric that separates a sample shop from a volume Tier 1 supplier.' },

    { t: 'h2', id: 'verification', text: '5. Leak and Fatigue Verification' },
    { t: 'p', text: 'Every welded exhaust part should pass three checks before release. A helium or pressure-differential leak test confirms the weld is gas-tight below the customer leak-rate threshold (representative, per customer spec). An X-ray or borescope inspection confirms penetration depth and the absence of pores. A thermal-cycle fatigue test simulates repeated engine heating and cooling to confirm the weld holds after several thousand cycles. As of 2026, Japanese and Korean platforms commonly require these three reports per batch.' },
    { t: 'ul', items: [
      'Leak: helium or pressure-differential test, confirming below the automaker’s leak-rate threshold',
      'Imaging: X-ray or borescope, confirming sufficient penetration and no pores',
      'Fatigue: thermal-cycle bench, confirming no cracking after thousands of heat cycles',
    ] },
    { t: 'callout', text: 'Fullwei’s approach: exhaust parts use 100% leak testing as the final gate before shipment, with batch-sampled X-ray and thermal-cycle reports delivered alongside the assemblies.' },

    { t: 'h2', id: 'track-record', text: '6. Platform Mass-Production Track Record' },
    { t: 'p', text: 'Validated welding only matters when it survives volume. Fullwei has run thin-wall stainless exhaust parts in mass production for Honda, Nissan, and Hyundai platforms (platform names subject to client disclosure approval), backed by a government export project that reviewed its export process and quality standards. A track record on named platforms is the proof an OEM buyer trusts most, because it shows a third party has already audited the process at volume.' },
  ],
  relatedLinksEn: [
    { label: 'Welding & Assembly Capabilities', href: '/capabilities/welding-assembly', desc: 'Equipment and process specs for TIG, laser, and robotic welding' },
    { label: 'What Is Tier 1 Exhaust System Manufacturing?', href: '/blog/tier1-exhaust-system-manufacturing-guide', desc: 'A panoramic guide to the exhaust supply chain and quality verification' },
    { label: 'How to Choose an Exhaust Welding Manufacturer: 6 Criteria', href: '/blog/how-to-choose-exhaust-welding-manufacturer', desc: 'Six criteria to check a welding manufacturer from a buyer’s view' },
  ],
  faqEn: [
    {
      q: 'Why does thin-wall stainless exhaust welding distort so easily?',
      a: 'Tubes of 0.8 to 1.5 mm wall thickness warp when welding heat concentrates. The fix is low heat input per unit length plus fixtures that hold the part through the heating and cooling cycle.',
    },
    {
      q: 'Is pulsed TIG or laser better for thin-wall exhaust parts?',
      a: 'Both lower distortion. Pulsed TIG controls the weld pool with alternating current; laser gives the smallest heat-affected zone. The choice follows the joint’s wall thickness and appearance need.',
    },
    {
      q: 'How is exhaust weld quality verified?',
      a: 'Through a helium or pressure leak test, X-ray or borescope inspection for penetration and pores, and a thermal-cycle fatigue test, usually reported per batch.',
    },
  ],
  blocks: [
    { t: 'h2', id: 'three-challenges', text: '一、薄壁不鏽鋼排氣焊接的三大挑戰' },
    { t: 'p', text: '薄壁不鏽鋼在焊接熱下有三個風險：熱變形、晶間腐蝕與密封性喪失。熱變形源於壁厚 0.8 至 1.5 公釐的管件在熱量集中時翹曲，進而影響下游裝配。晶間腐蝕發生在不鏽鋼於攝氏 425 至 815 度區間停留過久時，晶界析出碳化鉻而失去耐蝕性。密封性喪失則來自焊道的微孔，在行駛時漏氣並產生異音。三者追根究柢都指向同一個根因：熱量過高、停留過久。' },

    { t: 'h2', id: 'low-heat-methods', text: '二、低熱輸入工法：脈衝 TIG 與雷射' },
    { t: 'p', text: '核心方法是在維持完全熔透的前提下，降低單位長度的熱輸入。脈衝 TIG 交替峰值與背景電流，使熔池維持可控、熱影響區（HAZ）維持狹窄。雷射焊接把能量集中在極小光點，是常見工法中變形最低的。實務上，供應商會把每道焊縫對應到最適合其壁厚與外觀需求的工法，而非全部硬套單一工法。富惟在量產件上的目標變形帶控制在 ±0.3 mm 以內（代表值，實際數值依富惟量產驗證確認）。' },

    { t: 'h2', id: 'fixture-design', text: '三、焊道幾何與治具設計' },
    { t: 'p', text: '穩定的焊道幾何來自專用治具，把零件固定住以對抗熱位移。薄壁管在加熱與冷卻時會回彈，因此治具必須在正確的位置夾持、以正確的順序鬆開。焊道寬度與熔深由焊接參數設定，並把方法記錄於書面焊接程序規範（WPS），使每個批次重現相同輪廓。沒有專用治具，即使焊工技術再好，薄壁排氣件也會漂出公差。' },

    { t: 'h2', id: 'robotic-repeatability', text: '四、機器人焊接與重複性' },
    { t: 'p', text: '機器人焊接把「已驗證的程序」變成「可重複的程序」。一旦參數與治具固定，六軸焊接單元就能在每一件上重現相同的焊槍角度、行進速度與熱輸入，這正是量產過程中維持公差的關鍵。富惟在自動化焊接單元上的焊接重複性約在 ±0.2 mm 以內（代表值，實際數值依富惟量產驗證確認）。重複性，是區分「樣品廠」與「量產 Tier 1 供應商」的指標。' },

    { t: 'h2', id: 'verification', text: '五、洩漏與疲勞驗證' },
    { t: 'p', text: '每一件焊接完成的排氣件，出貨前都應通過三道檢查。氦氣或壓差洩漏測試確認焊道在車廠洩漏率門檻以下保持氣密（代表值，依客戶規範）。X-ray 或內視鏡檢測確認熔深足夠且無氣孔。熱循環疲勞測試模擬引擎反覆冷熱，確認焊道在數千次循環後仍不開裂。截至 2026 年，日系與韓系車廠平台普遍要求隨批次提供這三份報告。' },
    { t: 'ul', items: [
      '氣密：氦氣或壓差洩漏測試，確認低於車廠洩漏率門檻',
      '影像：X-ray 或內視鏡，確認熔深足夠且無氣孔',
      '疲勞：熱循環台架，確認數千次冷熱後焊道不開裂',
    ] },
    { t: 'callout', text: '富惟做法：排氣件以 100% 氣密測試作為出貨前的最後一道關卡，搭配批次抽樣的 X-ray 與熱循環報告，隨總成件交付客戶。' },

    { t: 'h2', id: 'track-record', text: '六、平台量產實績' },
    { t: 'p', text: '經過驗證的焊接，唯有在量產中存活才有意義。富惟已為 Honda、Nissan、Hyundai 平台量產薄壁不鏽鋼排氣件（平台名稱以客戶揭露核准為準），並具備檢視過其出口流程與品質標準的政府出口專案背書。具名平台的量產實績，是 OEM 採購最信任的證明，因為它代表第三方已在量產規模下稽核過製程。' },
  ],
  relatedLinks: [
    { label: '焊接與組裝能力', href: '/capabilities/welding-assembly', desc: 'TIG、雷射與機器人焊接的設備與製程規格' },
    { label: 'Tier 1 排氣系統代工是什麼？', href: '/blog/tier1-exhaust-system-manufacturing-guide', desc: '排氣系統供應鏈與品質驗證的全景指南' },
    { label: '如何選擇排氣管焊接代工廠？六大評估指標', href: '/blog/how-to-choose-exhaust-welding-manufacturer', desc: '從採購視角檢核焊接代工廠的六大指標' },
  ],
  relatedSlugs: ['tier1-exhaust-system-manufacturing-guide', 'how-to-choose-exhaust-welding-manufacturer'],
  faq: [
    {
      q: '薄壁不鏽鋼排氣焊接為什麼這麼容易變形？',
      a: '壁厚 0.8 至 1.5 公釐的管件在焊接熱集中時容易翹曲。解法是降低單位長度熱輸入，並以治具在加熱與冷卻週期中固定零件。',
    },
    {
      q: '薄壁排氣件用脈衝 TIG 還是雷射比較好？',
      a: '兩者都能降低變形。脈衝 TIG 以交替電流控制熔池；雷射的熱影響區最小。選擇取決於焊縫的壁厚與外觀需求。',
    },
    {
      q: '排氣焊道品質怎麼驗證？',
      a: '透過氦氣或壓差洩漏測試、X-ray 或內視鏡檢測熔深與氣孔，以及熱循環疲勞測試，通常隨批次提供報告。',
    },
  ],
};

const robotMigExhaust: PostFullContent = {
  slug: 'robot-mig-exhaust-optimization',
  blocks: [
    { t: 'h2', id: 'mig-challenge', text: '一、排氣管件 MIG 焊接的難點' },
    { t: 'p', text: 'SUS409L 是排氣系統最常用的肥粒鐵系不鏽鋼，壁厚多落在 1.0～1.5 mm。薄壁加上肥粒鐵系材料在高溫下的晶粒粗化傾向，使 MIG 焊接的熱輸入窗口非常窄：熱輸入過高會燒穿並使晶粒粗化，過低則熔合不良。' },
    { t: 'p', text: '排氣管件多為環焊與搭接，焊道要同時滿足氣密與外觀。要在量產達到 0.3 ppm 的洩漏不良率，靠的不是單點最佳參數，而是一個穩定、可重現的參數窗口。' },
    { t: 'h2', id: 'arc-voltage', text: '二、電弧電壓與短路過渡控制' },
    { t: 'p', text: '薄壁不鏽鋼 MIG 焊接多採短路過渡（short-circuit transfer），電弧電壓通常設在 17～19 V。電壓過高會拉長電弧、增加熱輸入與飛濺；過低則短路頻率過高、電弧不穩。' },
    { t: 'ul', items: [
      '以 98% Ar + 2% O₂ 或 Ar+CO₂ 混合氣，兼顧潤濕性與飛濺控制',
      '電壓微調以「短路聲音平穩、無爆裂」為聽感基準',
      '每換一批料或焊絲，重新確認電壓與電流的匹配',
    ] },
    { t: 'h2', id: 'wire-current', text: '三、送線速度與電流的匹配' },
    { t: 'p', text: '送線速度（WFS）直接決定焊接電流，是熱輸入的主控變數。SUS409L t1.2 的環焊，WFS 多落在 3.5～4.5 m/min，對應電流約 90～120 A。' },
    { t: 'p', text: 'WFS 與行進速度需同步調整以維持穩定的單位長度熱輸入（熱輸入 = 電壓 × 電流 ÷ 行進速度）。建議將熱輸入控制在 0.4～0.6 kJ/mm，避免肥粒鐵系晶粒粗化。' },
    { t: 'h2', id: 'travel-angle', text: '四、行進角與焊槍姿態' },
    { t: 'p', text: '行進角建議採 5～15° 的後拖角（drag），可改善熔深與焊道成形；前推角（push）焊道較寬、熔深較淺，適合外觀件但氣密風險較高。' },
    { t: 'ul', items: [
      '工作角環焊維持 45° 平分線，避免單邊咬邊',
      '焊槍至工件距離（CTWD）控制在 10～15 mm，過長則電流下降、熔合不良',
      '機器人路徑以等速通過接縫，轉角處預設減速段',
    ] },
    { t: 'h2', id: 'ppm-window', text: '五、達到 0.3 ppm 的參數窗口與監控' },
    { t: 'p', text: '0.3 ppm 不是靠一組「黃金參數」，而是靠縮小參數的允收窗口並全程監控。富惟的做法是先以 DOE 找出電壓、WFS、行進速度的穩定區間，再以製程監控鎖死。' },
    { t: 'ol', items: [
      '以田口方法（Taguchi）規劃 L9 實驗，找出對洩漏率最敏感的因子',
      '以焊接電源的電流／電壓即時回授，超出窗口即報警停機',
      '每批次抽樣氦氣洩漏測試，數據回饋至 SPC 管制圖',
    ] },
    { t: 'callout', text: '富惟實績：以此流程在 SUS409L 排氣環焊上將洩漏不良率穩定在 0.3 ppm 以下，並把參數窗口文件化為標準作業，降低換線時的重調成本。' },
  ],
  blocksEn: [
    { t: 'h2', id: 'mig-challenge', text: '1. Why MIG Welding Exhaust Tubes Is Hard' },
    { t: 'p', text: 'SUS409L, the most common ferritic stainless for exhaust systems, usually has a wall thickness of 1.0–1.5 mm. Thin walls plus the grain-coarsening tendency of ferritic steel at high temperature make the MIG heat-input window very narrow: too much heat burns through and coarsens the grain, too little gives poor fusion.' },
    { t: 'p', text: 'Exhaust tubes are mostly circumferential and lap welds whose beads must be both gas-tight and good-looking. Reaching a 0.3 ppm leak defect rate in volume relies not on a single optimal setting, but on a stable, reproducible parameter window.' },
    { t: 'h2', id: 'arc-voltage', text: '2. Arc Voltage and Short-Circuit Transfer Control' },
    { t: 'p', text: 'Thin-wall stainless MIG welding mostly uses short-circuit transfer, with arc voltage typically set at 17–19 V. Too high lengthens the arc and raises heat input and spatter; too low makes the short-circuit frequency excessive and the arc unstable.' },
    { t: 'ul', items: [
      'Use 98% Ar + 2% O₂ or an Ar+CO₂ mix to balance wetting and spatter control',
      'Fine-tune voltage by ear — a steady short-circuit sound with no popping',
      'Re-confirm the voltage–current match whenever the material lot or wire changes',
    ] },
    { t: 'h2', id: 'wire-current', text: '3. Matching Wire-Feed Speed and Current' },
    { t: 'p', text: 'Wire-feed speed (WFS) directly sets welding current and is the master variable for heat input. For circumferential welds on SUS409L t1.2, WFS usually sits at 3.5–4.5 m/min, corresponding to roughly 90–120 A.' },
    { t: 'p', text: 'WFS and travel speed must move together to hold a stable heat input per unit length (heat input = voltage × current ÷ travel speed). Keep heat input at 0.4–0.6 kJ/mm to avoid ferritic grain coarsening.' },
    { t: 'h2', id: 'travel-angle', text: '4. Travel Angle and Torch Attitude' },
    { t: 'p', text: 'A 5–15° drag angle improves penetration and bead shape; a push angle gives a wider, shallower bead suited to appearance parts but with higher leak risk.' },
    { t: 'ul', items: [
      'Keep the work angle on the 45° bisector for circumferential welds to avoid one-sided undercut',
      'Hold contact-tip-to-work distance (CTWD) at 10–15 mm; too long drops current and causes poor fusion',
      'Run the robot path at constant speed across the joint, with a preset deceleration zone at corners',
    ] },
    { t: 'h2', id: 'ppm-window', text: '5. The Parameter Window and Monitoring to Reach 0.3 ppm' },
    { t: 'p', text: '0.3 ppm comes not from one set of "golden parameters" but from narrowing the acceptance window and monitoring throughout. Fullwei first uses DOE to find the stable range of voltage, WFS, and travel speed, then locks it down with process monitoring.' },
    { t: 'ol', items: [
      'Use the Taguchi method to plan an L9 experiment and find the factor most sensitive to leak rate',
      'Use the welding power source’s real-time current/voltage feedback to alarm and stop when out of window',
      'Sample-test each batch with helium leak testing, feeding data back to the SPC chart',
    ] },
    { t: 'callout', text: 'Fullwei track record: this flow holds the leak defect rate below 0.3 ppm on SUS409L exhaust circumferential welds, with the parameter window documented as a standard operation to cut re-tuning cost at line changeover.' },
  ],
  relatedLinks: [
    { label: '焊接與組裝能力', href: '/capabilities/welding-assembly', desc: 'TIG、雷射與機器人焊接的設備與製程規格' },
    { label: '薄壁不鏽鋼排氣管低變形焊接工法', href: '/blog/low-distortion-thin-wall-stainless-exhaust-welding', desc: '低熱輸入工法、治具設計與氣密驗證' },
    { label: '排氣系統產品線', href: '/products/exhaust-systems', desc: '富惟排氣系統總成件的材料與量產實績' },
  ],
  relatedLinksEn: [
    { label: 'Welding & Assembly Capabilities', href: '/capabilities/welding-assembly', desc: 'Equipment and process specs for TIG, laser, and robotic welding' },
    { label: 'Low-Distortion Thin-Wall Stainless Exhaust Welding', href: '/blog/low-distortion-thin-wall-stainless-exhaust-welding', desc: 'Low heat-input methods, fixture design, and leak verification' },
    { label: 'Exhaust System Product Line', href: '/products/exhaust-systems', desc: 'Materials and volume track record of Fullwei’s exhaust assemblies' },
  ],
  relatedSlugs: ['low-distortion-thin-wall-stainless-exhaust-welding', 'cnc-tube-springback-compensation'],
  faq: [
    { q: 'SUS409L 為什麼適合排氣管件？', a: '肥粒鐵系不鏽鋼 SUS409L 耐高溫氧化、熱膨脹係數低、成本低於沃斯田鐵系（如 304），是排氣中後段的主流材料。' },
    { q: 'MIG 和 TIG 在排氣焊接怎麼選？', a: 'MIG 速度快、適合量產的較厚件與環焊；TIG 焊道乾淨、適合薄壁與外觀件。多數排氣量產線以 MIG 為主、TIG 補強。' },
    { q: '0.3 ppm 的洩漏率怎麼驗證？', a: '以氦氣或壓差洩漏測試逐件或抽樣量測，數據納入 SPC，並以批次報告交付客戶。' },
  ],
  faqEn: [
    { q: 'Why is SUS409L suited to exhaust tubes?', a: 'Ferritic stainless SUS409L resists high-temperature oxidation, has a low thermal-expansion coefficient, and costs less than austenitic grades (such as 304), making it the mainstream material for mid-to-rear exhaust sections.' },
    { q: 'How do I choose between MIG and TIG for exhaust welding?', a: 'MIG is fast and suits thicker parts and circumferential welds in volume; TIG has clean beads and suits thin walls and appearance parts. Most exhaust production lines run MIG as the mainstay with TIG for touch-up.' },
    { q: 'How is the 0.3 ppm leak rate verified?', a: 'By helium or pressure-differential leak testing, per piece or by sampling, with data entered into SPC and per-batch reports delivered to the customer.' },
  ],
};

const cncTubeSpringback: PostFullContent = {
  slug: 'cnc-tube-springback-compensation',
  blocks: [
    { t: 'h2', id: 'springback-cause', text: '一、回彈的成因與量化' },
    { t: 'p', text: '彎管回彈源於材料的彈性回復：彎曲時外側受拉、內側受壓，卸載後彈性應變回復，使彎角張開、彎曲半徑變大。材料強度越高、彈性模數與降伏強度比越大，回彈越明顯。' },
    { t: 'p', text: '回彈量需以角度回彈（Δθ）與半徑回彈（ΔR）兩者量化。高強鋼管件的角度回彈可達 3～8°，且批次間因材料降伏強度散差而波動，是量產穩定性的主要難點。' },
    { t: 'h2', id: 'overbend', text: '二、方案一：過彎量修正' },
    { t: 'p', text: '最直接的補償是過彎（overbend）：將彎曲角度刻意設定超過目標角，卸載回彈後落在公差中心。過彎量需依材料、管徑、壁厚與彎曲半徑建立對照表。' },
    { t: 'ul', items: [
      '以首件試彎建立過彎量基準，再以 SPC 監控批次漂移',
      '同一材料不同爐號的降伏強度差異，需保留過彎量微調空間',
      '過彎法簡單可靠，但對批次散差大的高強鋼補償精度有限',
    ] },
    { t: 'h2', id: 'die-preload', text: '三、方案二：模具預載與夾持' },
    { t: 'p', text: '透過彎曲模的預載（如增加壓力模 pressure die 的助推力 boost）與心軸（mandrel）支撐，在彎曲過程中對管壁施加額外塑性變形，降低彈性回復比例，進而減少回彈。' },
    { t: 'p', text: '此法對薄壁管尤其有效，同時可抑制管壁皺褶與扁化，但需要更精密的模具與設備調校。' },
    { t: 'h2', id: 'fea-simulation', text: '四、方案三：有限元素模擬輔助' },
    { t: 'p', text: '以有限元素法（FEA）建立彎管成形模型，輸入材料的真實應力-應變曲線，可在開模前預測回彈量並反算過彎補償，大幅減少試模次數。' },
    { t: 'ol', items: [
      '以拉伸試驗取得材料硬化曲線，作為模擬輸入',
      '模擬彎曲與卸載兩階段，輸出回彈後的幾何',
      '將模擬補償量帶入首件試彎，再以實測微調收斂',
    ] },
    { t: 'h2', id: 'production-stability', text: '五、量產穩定性與首件驗證' },
    { t: 'p', text: '三種方案常組合使用：以 FEA 定初始過彎量、以模具預載降低回彈敏感度、以 SPC 監控批次漂移。量產前以 CMM 或輪廓掃描驗證首件，確認彎角與端點位置落在公差帶。' },
    { t: 'callout', text: '富惟做法：高強鋼排氣彎管以 FEA 預測過彎量、心軸彎管抑制扁化，並對每批進料抽驗降伏強度，將回彈造成的端點偏差控制在 ±0.5 mm 以內（代表值，依件號而定）。' },
  ],
  blocksEn: [
    { t: 'h2', id: 'springback-cause', text: '1. Causes and Quantification of Springback' },
    { t: 'p', text: 'Tube springback comes from elastic recovery: during bending the outer fiber is in tension and the inner in compression, and on unloading the elastic strain recovers, opening the bend angle and increasing the bend radius. The higher the material strength and the elastic-modulus-to-yield ratio, the more pronounced the springback.' },
    { t: 'p', text: 'Springback must be quantified by both angular springback (Δθ) and radial springback (ΔR). For high-strength steel tubing, angular springback can reach 3–8° and fluctuates batch to batch with yield-strength scatter — the main difficulty for production stability.' },
    { t: 'h2', id: 'overbend', text: '2. Approach One: Overbend Correction' },
    { t: 'p', text: 'The most direct compensation is overbend: deliberately setting the bend angle beyond the target so that, after unloading springback, it lands at the center of tolerance. The overbend amount must be tabulated against material, tube diameter, wall thickness, and bend radius.' },
    { t: 'ul', items: [
      'Establish the overbend baseline with a first-article trial bend, then monitor batch drift with SPC',
      'Leave room for fine-tuning overbend, since yield strength differs across heats of the same material',
      'Overbend is simple and reliable, but compensation accuracy is limited for high-strength steel with large batch scatter',
    ] },
    { t: 'h2', id: 'die-preload', text: '3. Approach Two: Die Preloading and Clamping' },
    { t: 'p', text: 'By preloading the bending die (e.g., adding pressure-die boost) and supporting with a mandrel, extra plastic deformation is applied to the tube wall during bending, lowering the proportion of elastic recovery and thus reducing springback.' },
    { t: 'p', text: 'This is especially effective for thin-wall tubing and also suppresses wall wrinkling and flattening, but it demands more precise dies and equipment tuning.' },
    { t: 'h2', id: 'fea-simulation', text: '4. Approach Three: FEA-Assisted Simulation' },
    { t: 'p', text: 'Building a tube-bending forming model with finite element analysis (FEA) and inputting the material’s true stress–strain curve lets you predict springback before cutting the die and back-calculate the overbend compensation, sharply reducing trial-die iterations.' },
    { t: 'ol', items: [
      'Obtain the material hardening curve from a tensile test as the simulation input',
      'Simulate both the bending and unloading stages, outputting the post-springback geometry',
      'Carry the simulated compensation into a first-article trial bend, then converge with measured fine-tuning',
    ] },
    { t: 'h2', id: 'production-stability', text: '5. Production Stability and First-Article Verification' },
    { t: 'p', text: 'The three approaches are often combined: FEA sets the initial overbend, die preloading lowers springback sensitivity, and SPC monitors batch drift. Before volume, verify the first article with CMM or contour scanning to confirm the bend angle and endpoint land within tolerance.' },
    { t: 'callout', text: 'Fullwei’s approach: high-strength exhaust bends use FEA to predict overbend and mandrel bending to suppress flattening, with incoming-lot yield-strength sampling, holding endpoint deviation from springback within ±0.5 mm (representative, varies by part number).' },
  ],
  relatedLinks: [
    { label: '管類加工能力', href: '/capabilities/tube-processing', desc: 'CNC 多軸彎管的設備規格與精度能力' },
    { label: 'SPCC vs SPFH590 選材決策指南', href: '/blog/spcc-vs-spfh590-automotive', desc: '高強鋼回彈與成形特性的選材考量' },
    { label: '排氣系統產品線', href: '/products/exhaust-systems', desc: '彎管在排氣系統路徑設計上的應用' },
  ],
  relatedLinksEn: [
    { label: 'Tube Processing Capabilities', href: '/capabilities/tube-processing', desc: 'Equipment specs and precision for CNC multi-axis tube bending' },
    { label: 'SPCC vs. SPFH590 Material Selection Guide', href: '/blog/spcc-vs-spfh590-automotive', desc: 'Selection considerations for high-strength steel springback and formability' },
    { label: 'Exhaust System Product Line', href: '/products/exhaust-systems', desc: 'Bent tubing applied to exhaust routing design' },
  ],
  relatedSlugs: ['robot-mig-exhaust-optimization', 'hydroforming-vs-stamping-structural'],
  faq: [
    { q: '為什麼高強鋼比一般鋼難控制回彈？', a: '高強鋼降伏強度高、彈性回復比例大，回彈量大且對批次降伏強度散差敏感，使量產穩定性更難維持。' },
    { q: '心軸（mandrel）一定要用嗎？', a: '薄壁、小彎曲半徑或要求外觀的彎管建議使用心軸，可抑制扁化與皺褶；厚壁、大半徑且要求不高者可省略。' },
    { q: 'FEA 模擬能完全取代試模嗎？', a: '不能，但能大幅減少試模次數。模擬定出初始補償量後，仍需以首件實測微調收斂到公差中心。' },
  ],
  faqEn: [
    { q: 'Why is springback harder to control in high-strength steel?', a: 'High-strength steel has high yield strength and a larger elastic-recovery proportion, so springback is large and sensitive to batch yield-strength scatter, making production stability harder to maintain.' },
    { q: 'Is a mandrel always required?', a: 'A mandrel is recommended for thin walls, small bend radii, or appearance-critical bends, as it suppresses flattening and wrinkling; it can be omitted for thick walls, large radii, and lower requirements.' },
    { q: 'Can FEA simulation fully replace trial dies?', a: 'No, but it sharply reduces trial-die iterations. After simulation sets the initial compensation, first-article measurement is still needed to converge to the center of tolerance.' },
  ],
};

const hydroformingVsStamping: PostFullContent = {
  slug: 'hydroforming-vs-stamping-structural',
  blocks: [
    { t: 'h2', id: 'fundamentals', text: '一、兩種工法的本質差異' },
    { t: 'p', text: '傳統沖壓以模具對板材施加壓力成形，再焊接組合成總成；液壓成形則以高壓液體將管材或板材壓入模腔，一次成形出複雜的三維截面。前者是「先分件再接合」，後者是「一體成形」。' },
    { t: 'p', text: '這個本質差異決定了兩者的優劣分野：沖壓彈性高、工裝相對便宜，但焊縫多；液壓成形焊縫少、截面強度高，但工裝與設備投資大。' },
    { t: 'h2', id: 'hydroforming-advantages', text: '二、液壓成形的優勢：少焊縫、高截面強度' },
    { t: 'p', text: '液壓成形把多個沖壓件＋焊接的組合，整併為單一零件，減少焊縫數量。焊縫既是強度弱點也是品質變異來源，減少焊縫直接提升疲勞壽命與一致性。' },
    { t: 'ul', items: [
      '連續封閉截面提供更高的抗扭與抗彎剛性',
      '焊縫減少，降低焊接工時與後續檢測成本',
      '材料分布更均勻，可實現局部減薄的輕量化',
    ] },
    { t: 'h2', id: 'cost-structure', text: '三、成本結構與工裝投資' },
    { t: 'p', text: '液壓成形的高壓設備（常達 2000～4000 bar）與專用模具，初期投資遠高於沖壓。但單件的焊接與組裝工時較低。因此其經濟性高度依賴產量：產量越大，攤提後的單件成本越有競爭力。' },
    { t: 'p', text: '沖壓則相反：工裝便宜、導入快，但每多一道焊接就增加單件變動成本。低產量或設計頻繁變更的零件，沖壓＋焊接通常更划算。' },
    { t: 'h2', id: 'complexity-threshold', text: '四、設計複雜度的切換臨界點' },
    { t: 'p', text: '切換到液壓成形的臨界點，通常落在「以沖壓需要 3 件以上焊接組合、且年產量達數萬件以上」的結構件。截面變化複雜、要求高剛性與輕量化的零件，越過此門檻後液壓成形的總成本與性能優勢才會浮現。' },
    { t: 'ol', items: [
      '評估以沖壓方案所需的焊接點數與工時',
      '估算年產量與生命週期總量，計算工裝攤提',
      '比較兩方案的件重、剛性與疲勞壽命差異',
    ] },
    { t: 'h2', id: 'decision-framework', text: '五、決策框架與實務建議' },
    { t: 'p', text: '建議以「焊縫數 × 年產量 × 性能需求」三軸評估：焊縫多、產量大、性能要求高的零件最適合液壓成形；任一軸偏低時，沖壓＋焊接通常更務實。' },
    { t: 'callout', text: '富惟觀點：多數客戶不需要全面轉向液壓成形，而是針對少數高價值、高剛性需求的結構件評估切換。先以一個指標性零件試行，建立工裝攤提與性能數據，再決定是否擴大。' },
  ],
  blocksEn: [
    { t: 'h2', id: 'fundamentals', text: '1. The Fundamental Difference Between the Two Methods' },
    { t: 'p', text: 'Conventional stamping forms sheet metal under die pressure, then welds the pieces into an assembly; hydroforming uses high-pressure fluid to press tube or sheet into a die cavity, forming a complex 3D section in one shot. The former is "split first, join later"; the latter is "form as one."' },
    { t: 'p', text: 'This fundamental difference sets the trade-off: stamping is flexible with relatively cheap tooling but many weld seams; hydroforming has few seams and high section strength but large tooling and equipment investment.' },
    { t: 'h2', id: 'hydroforming-advantages', text: '2. Hydroforming Advantages: Fewer Seams, Higher Section Strength' },
    { t: 'p', text: 'Hydroforming consolidates a combination of multiple stamped parts plus welds into a single part, cutting the number of weld seams. A seam is both a strength weak point and a source of quality variation, so fewer seams directly improve fatigue life and consistency.' },
    { t: 'ul', items: [
      'A continuous closed section provides higher torsional and bending rigidity',
      'Fewer seams reduce welding hours and downstream inspection cost',
      'More even material distribution enables localized thinning for lightweighting',
    ] },
    { t: 'h2', id: 'cost-structure', text: '3. Cost Structure and Tooling Investment' },
    { t: 'p', text: 'Hydroforming’s high-pressure equipment (often 2000–4000 bar) and dedicated dies cost far more upfront than stamping, but per-part welding and assembly hours are lower. Its economics therefore depend heavily on volume: the larger the volume, the more competitive the amortized per-part cost.' },
    { t: 'p', text: 'Stamping is the opposite: cheap tooling, fast launch, but every added weld raises per-part variable cost. For low-volume parts or those with frequent design changes, stamping plus welding is usually more economical.' },
    { t: 'h2', id: 'complexity-threshold', text: '4. The Complexity Threshold to Switch' },
    { t: 'p', text: 'The threshold to switch to hydroforming usually falls at structural parts that "would need 3+ welded pieces by stamping and run tens of thousands a year." For parts with complex section changes and demands for high rigidity and lightweighting, hydroforming’s total-cost and performance advantages only emerge past this threshold.' },
    { t: 'ol', items: [
      'Assess the weld-point count and hours needed for the stamping approach',
      'Estimate annual volume and lifecycle total to compute tooling amortization',
      'Compare the two approaches on part weight, rigidity, and fatigue life',
    ] },
    { t: 'h2', id: 'decision-framework', text: '5. Decision Framework and Practical Advice' },
    { t: 'p', text: 'Evaluate on three axes: "seam count × annual volume × performance need." Parts with many seams, high volume, and high performance demands suit hydroforming best; when any axis is low, stamping plus welding is usually more pragmatic.' },
    { t: 'callout', text: 'Fullwei’s view: most customers don’t need to switch wholesale to hydroforming, but should evaluate it for a few high-value, high-rigidity structural parts. Pilot one flagship part first to build amortization and performance data, then decide whether to scale.' },
  ],
  relatedLinks: [
    { label: '核心製程能力', href: '/#capabilities', desc: '富惟在沖壓、焊接與管類加工的整合能力' },
    { label: 'CNC 多軸彎管的回彈補償策略', href: '/blog/cnc-tube-springback-compensation', desc: '管材成形的回彈控制與精度' },
    { label: '機車車架零組件', href: '/products/motorcycle-frame', desc: '結構件的成形與焊接整合實績' },
  ],
  relatedLinksEn: [
    { label: 'Core Process Capabilities', href: '/#capabilities', desc: 'Fullwei’s integrated stamping, welding, and tube-processing capability' },
    { label: 'Springback Compensation for CNC Tube Bending', href: '/blog/cnc-tube-springback-compensation', desc: 'Springback control and accuracy in tube forming' },
    { label: 'Motorcycle Frame Components', href: '/products/motorcycle-frame', desc: 'Integrated forming and welding track record for structural parts' },
  ],
  relatedSlugs: ['cnc-tube-springback-compensation', 'progressive-die-five-keys'],
  faq: [
    { q: '液壓成形一定比沖壓好嗎？', a: '不一定。液壓成形在焊縫多、產量大、性能要求高的結構件有優勢；低產量或設計多變的零件，沖壓＋焊接通常更划算。' },
    { q: '液壓成形的最大限制是什麼？', a: '工裝與高壓設備的初期投資高、導入週期長，且設計變更的彈性低於沖壓。' },
    { q: '如何決定要不要切換？', a: '以焊縫數、年產量與性能需求三軸評估，先以一個指標性零件試行，累積攤提與性能數據再決定。' },
  ],
  faqEn: [
    { q: 'Is hydroforming always better than stamping?', a: 'Not necessarily. Hydroforming wins for structural parts with many seams, high volume, and high performance demands; for low-volume or design-volatile parts, stamping plus welding is usually more economical.' },
    { q: 'What is hydroforming’s biggest limitation?', a: 'High upfront investment in tooling and high-pressure equipment, a long launch cycle, and lower design-change flexibility than stamping.' },
    { q: 'How do I decide whether to switch?', a: 'Evaluate on three axes — seam count, annual volume, and performance need — and pilot one flagship part to gather amortization and performance data before deciding.' },
  ],
};

const hotFormedVsHsla: PostFullContent = {
  slug: 'hot-formed-vs-hsla-comparison',
  blocks: [
    { t: 'h2', id: 'positioning', text: '一、熱成形鋼與高強鋼的定位' },
    { t: 'p', text: '傳統高強度低合金鋼（HSLA）在常溫沖壓成形，強度多在 340～590 MPa。熱成形鋼（hot-formed / press-hardened steel, PHS）則先加熱至沃斯田鐵化溫度（約 900℃）再沖壓並在模內淬火，成品強度可達 1500 MPa 以上。' },
    { t: 'p', text: '兩者的定位不同：HSLA 是「成形時就強」的通用件選擇，PHS 是「成形時軟、成形後超強」的安全件方案。' },
    { t: 'h2', id: 'strength-formability', text: '二、強度、成形性與重量' },
    { t: 'p', text: 'PHS 在高溫沃斯田鐵狀態下成形性極佳，可成形複雜且深的幾何而不開裂，淬火後才獲得超高強度——這正是它能用於 A/B 柱等碰撞安全件的關鍵。HSLA 則受限於常溫成形性，複雜深拉伸件容易開裂或回彈。' },
    { t: 'ul', items: [
      'PHS：抗拉 1500 MPa 級，同強度下可大幅減薄、減重',
      'HSLA：抗拉 340～590 MPa，成形與焊接門檻較低',
      'PHS 回彈極小（模內淬火定形），HSLA 回彈需補償',
    ] },
    { t: 'h2', id: 'equipment', text: '三、設備需求：爐具與模具' },
    { t: 'p', text: 'PHS 需要加熱爐（連續式或箱式）、具冷卻水路的熱作模具，以及防氧化鍍層（如 Al-Si 鍍層）配套，產線投資與能耗都遠高於 HSLA 的常溫沖壓。' },
    { t: 'p', text: 'PHS 模具需承受高溫與淬火熱循環，壽命管理與冷卻設計是關鍵；HSLA 則沿用一般冷沖模具，導入門檻低。' },
    { t: 'h2', id: 'tco', text: '四、TCO 量化比較' },
    { t: 'p', text: '比較兩者不能只看材料單價。PHS 材料與製程成本高，但減重效益與安全件的不可替代性帶來價值；HSLA 成本低，但達到同等強度需增加板厚與焊接補強，抵銷部分成本優勢。' },
    { t: 'ol', items: [
      '材料成本：PHS 單價與鍍層成本高於 HSLA',
      '製程成本：PHS 需爐具能耗與熱作模具維護',
      '隱性效益：PHS 減重、減少補強件與焊點，HSLA 反之',
    ] },
    { t: 'h2', id: 'selection-advice', text: '五、選用建議' },
    { t: 'p', text: '碰撞安全件（A/B 柱、車門防撞樑、保險桿樑）且要求極致輕量化者，PHS 幾乎是唯一解。一般結構件、支架與非安全件，HSLA 的成本與工藝彈性更務實。' },
    { t: 'callout', text: '富惟觀點：PHS 的價值在「特定安全件」而非全面替換。建議先盤點產品線中真正需要 1500 MPa 級的零件，其餘維持 HSLA，避免為了規格而過度投資爐具產線。' },
  ],
  blocksEn: [
    { t: 'h2', id: 'positioning', text: '1. Positioning of Hot-Formed Steel and HSLA' },
    { t: 'p', text: 'Conventional high-strength low-alloy steel (HSLA) is cold-stamped at room temperature, with strength mostly at 340–590 MPa. Hot-formed (press-hardened) steel, PHS, is first heated to the austenitizing temperature (about 900°C), then stamped and quenched in the die, reaching over 1500 MPa.' },
    { t: 'p', text: 'Their positioning differs: HSLA is the general-part choice that is "already strong when formed"; PHS is the safety-part solution that is "soft when formed, ultra-strong after."' },
    { t: 'h2', id: 'strength-formability', text: '2. Strength, Formability, and Weight' },
    { t: 'p', text: 'In the high-temperature austenitic state, PHS has excellent formability — it can form complex, deep geometry without cracking, gaining ultra-high strength only after quenching — which is exactly why it suits crash-safety parts like A/B pillars. HSLA is limited by room-temperature formability, and complex deep draws crack or spring back easily.' },
    { t: 'ul', items: [
      'PHS: 1500 MPa-class tensile strength, allowing significant thinning and weight saving at equal strength',
      'HSLA: 340–590 MPa tensile strength, with lower forming and welding barriers',
      'PHS has minimal springback (set by in-die quenching); HSLA springback needs compensation',
    ] },
    { t: 'h2', id: 'equipment', text: '3. Equipment Needs: Furnaces and Dies' },
    { t: 'p', text: 'PHS needs a heating furnace (continuous or box type), hot-work dies with cooling channels, and an anti-oxidation coating (such as Al-Si), so line investment and energy use are far higher than HSLA cold stamping.' },
    { t: 'p', text: 'PHS dies must withstand high temperature and quenching thermal cycles, so life management and cooling design are critical; HSLA reuses ordinary cold-stamping dies, with a low entry barrier.' },
    { t: 'h2', id: 'tco', text: '4. Quantified TCO Comparison' },
    { t: 'p', text: 'Comparing the two cannot rest on material unit price alone. PHS material and process costs are high, but its weight benefit and the irreplaceability of safety parts bring value; HSLA is cheaper, but reaching equal strength requires added thickness and weld reinforcement that offset part of the cost advantage.' },
    { t: 'ol', items: [
      'Material cost: PHS unit price and coating cost exceed HSLA',
      'Process cost: PHS needs furnace energy and hot-work die maintenance',
      'Hidden benefits: PHS reduces weight, reinforcement parts, and weld points; HSLA the reverse',
    ] },
    { t: 'h2', id: 'selection-advice', text: '5. Selection Advice' },
    { t: 'p', text: 'For crash-safety parts (A/B pillars, door anti-intrusion beams, bumper beams) demanding extreme lightweighting, PHS is almost the only answer. For general structural parts, brackets, and non-safety parts, HSLA’s cost and process flexibility are more pragmatic.' },
    { t: 'callout', text: 'Fullwei’s view: PHS’s value lies in "specific safety parts," not wholesale replacement. First inventory which parts truly need 1500 MPa-class steel, keep the rest on HSLA, and avoid over-investing in furnace lines just to chase a spec.' },
  ],
  relatedLinks: [
    { label: 'SPCC vs SPFH590 選材決策指南', href: '/blog/spcc-vs-spfh590-automotive', desc: '汽車結構件的系統性選材框架' },
    { label: '核心製程能力', href: '/#capabilities', desc: '富惟在高強鋼沖壓的設備與製程能力' },
    { label: '汽車固定架產品線', href: '/products/automotive-brackets', desc: '多元材質在結構件與支架的應用' },
  ],
  relatedLinksEn: [
    { label: 'SPCC vs. SPFH590 Material Selection Guide', href: '/blog/spcc-vs-spfh590-automotive', desc: 'A systematic selection framework for automotive structural parts' },
    { label: 'Core Process Capabilities', href: '/#capabilities', desc: 'Fullwei’s equipment and process capability in high-strength steel stamping' },
    { label: 'Automotive Bracket Product Line', href: '/products/automotive-brackets', desc: 'Multi-material application in structural parts and brackets' },
  ],
  relatedSlugs: ['spcc-vs-spfh590-automotive', 'exhaust-alloy-409l-439-304'],
  faq: [
    { q: '熱成形鋼能用一般冷沖模具嗎？', a: '不能。熱成形需在約 900℃ 沖壓並在模內淬火，模具需具冷卻水路並耐熱循環，與常溫冷沖模具不同。' },
    { q: '為什麼熱成形鋼成形時不會開裂？', a: '在高溫沃斯田鐵狀態下材料延展性極佳，成形後才透過模內淬火獲得超高強度，因此能成形複雜深件而不開裂。' },
    { q: 'HSLA 還有競爭力嗎？', a: '有。一般結構件、支架與非安全件，HSLA 的成本與工藝彈性仍是最務實的選擇。' },
  ],
  faqEn: [
    { q: 'Can hot-formed steel use ordinary cold-stamping dies?', a: 'No. Hot forming stamps at about 900°C and quenches in the die, so the dies need cooling channels and must withstand thermal cycling — different from room-temperature cold-stamping dies.' },
    { q: 'Why doesn’t hot-formed steel crack during forming?', a: 'In the high-temperature austenitic state the material is highly ductile; ultra-high strength is gained only by in-die quenching afterward, so complex deep parts can be formed without cracking.' },
    { q: 'Is HSLA still competitive?', a: 'Yes. For general structural parts, brackets, and non-safety parts, HSLA’s cost and process flexibility remain the most pragmatic choice.' },
  ],
};

const exhaustAlloy: PostFullContent = {
  slug: 'exhaust-alloy-409l-439-304',
  blocks: [
    { t: 'h2', id: 'temperature-zones', text: '一、排氣系統的溫度帶分布' },
    { t: 'p', text: '排氣系統從引擎到尾管是一條溫度遞減的路徑：靠近引擎的歧管段可達 800℃ 以上，觸媒段約 600～800℃，中段約 300～500℃，到冷端消音器與尾管則降至 100～300℃，並承受酸性冷凝水。選材必須逐段對應溫度與腐蝕環境。' },
    { t: 'h2', id: 'alloy-409l', text: '二、409L：成本與耐熱的平衡' },
    { t: 'p', text: '409L 是含鈦穩定化的肥粒鐵系不鏽鋼（約 11% Cr），耐高溫氧化、熱膨脹係數低、成本最低，是排氣中後段管件最普及的材料。其耐鹽害腐蝕能力中等，外觀會隨時間氧化變色。' },
    { t: 'ul', items: [
      '優點：成本低、耐熱循環、焊接性佳',
      '限制：耐蝕性中等，不適合長期接觸鹽水的最冷端',
      '適用：中段管、觸媒外殼、部分歧管',
    ] },
    { t: 'h2', id: 'alloy-439', text: '三、439：耐蝕升級的中段選擇' },
    { t: 'p', text: '439 含鉻較高（約 17% Cr）並雙重穩定化，耐蝕性與耐高溫氧化都優於 409L，價格居中。常用於要求外觀與耐久性更高的中後段與消音器外殼。' },
    { t: 'p', text: '在鹽害嚴重地區（如沿海、撒鹽道路）的車型，將最冷端從 409L 升級為 439，可顯著延長抗孔蝕壽命。' },
    { t: 'h2', id: 'alloy-304', text: '四、304：熱端與高要求段' },
    { t: 'p', text: '304 是沃斯田鐵系不鏽鋼（18% Cr、8% Ni），耐蝕與高溫強度最佳，但成本最高、熱膨脹係數大、熱疲勞表現需設計配合。多用於高性能車的歧管、可見的外露段或要求最高耐久的部位。' },
    { t: 'h2', id: 'section-selection', text: '五、逐段選型決策' },
    { t: 'p', text: '選型邏輯是「以溫度與腐蝕需求對應到最低成本的合格材料」：熱端看耐高溫氧化，冷端看耐鹽害腐蝕，外露段加看外觀。多數量產乘用車以 409L 為骨幹，局部升級 439，熱端或高階車型才用 304。' },
    { t: 'callout', text: '富惟做法：依客戶車型的市場（鹽害程度）與溫度帶，提供逐段選材建議與材質憑證，避免「全段用貴材料」造成的成本浪費，也避免「全段用便宜材料」的耐久風險。' },
  ],
  blocksEn: [
    { t: 'h2', id: 'temperature-zones', text: '1. Temperature Zones Across the Exhaust System' },
    { t: 'p', text: 'From engine to tailpipe, the exhaust system is a path of decreasing temperature: the manifold near the engine can exceed 800°C, the catalyst section is about 600–800°C, the mid-section about 300–500°C, and the cold-end muffler and tailpipe drop to 100–300°C while enduring acidic condensate. Material choice must match temperature and corrosion environment section by section.' },
    { t: 'h2', id: 'alloy-409l', text: '2. 409L: The Balance of Cost and Heat Resistance' },
    { t: 'p', text: '409L is a titanium-stabilized ferritic stainless (about 11% Cr) with high-temperature oxidation resistance, a low thermal-expansion coefficient, and the lowest cost — the most widespread material for mid-to-rear exhaust tubing. Its salt-corrosion resistance is moderate, and its appearance oxidizes and discolors over time.' },
    { t: 'ul', items: [
      'Strengths: low cost, thermal-cycle resistance, good weldability',
      'Limits: moderate corrosion resistance, unsuited to the coldest end in long-term saltwater contact',
      'Use: mid-pipe, catalyst housing, some manifolds',
    ] },
    { t: 'h2', id: 'alloy-439', text: '3. 439: The Corrosion-Upgraded Mid-Section Choice' },
    { t: 'p', text: '439 has higher chromium (about 17% Cr) and dual stabilization, with corrosion and high-temperature oxidation resistance both better than 409L, at a mid-range price. It is common in mid-to-rear sections and muffler housings that demand higher appearance and durability.' },
    { t: 'p', text: 'For models in severe salt regions (coastal areas, salted roads), upgrading the coldest end from 409L to 439 significantly extends pitting-corrosion life.' },
    { t: 'h2', id: 'alloy-304', text: '4. 304: The Hot End and High-Demand Sections' },
    { t: 'p', text: '304 is an austenitic stainless (18% Cr, 8% Ni) with the best corrosion and high-temperature strength, but the highest cost, a large thermal-expansion coefficient, and thermal-fatigue behavior that needs design accommodation. It is mostly used for high-performance manifolds, visible exposed sections, or parts demanding the highest durability.' },
    { t: 'h2', id: 'section-selection', text: '5. Section-by-Section Selection Decisions' },
    { t: 'p', text: 'The selection logic is "match temperature and corrosion needs to the lowest-cost qualified material": the hot end looks at high-temperature oxidation, the cold end at salt-corrosion resistance, and exposed sections add appearance. Most volume passenger cars use 409L as the backbone, upgrade locally to 439, and reserve 304 for the hot end or premium models.' },
    { t: 'callout', text: 'Fullwei’s approach: based on the model’s market (salt severity) and temperature zones, we provide section-by-section material recommendations and mill certificates, avoiding the cost waste of "expensive material everywhere" and the durability risk of "cheap material everywhere."' },
  ],
  relatedLinks: [
    { label: '排氣系統產品線', href: '/products/exhaust-systems', desc: '各溫度帶材料在排氣總成上的工程應用' },
    { label: '薄壁不鏽鋼排氣管低變形焊接工法', href: '/blog/low-distortion-thin-wall-stainless-exhaust-welding', desc: '不鏽鋼焊接的晶間腐蝕與熱影響控制' },
    { label: 'Tier 1 排氣系統代工是什麼？', href: '/blog/tier1-exhaust-system-manufacturing-guide', desc: '排氣系統零件與材料的全景介紹' },
  ],
  relatedLinksEn: [
    { label: 'Exhaust System Product Line', href: '/products/exhaust-systems', desc: 'Engineering use of each temperature-zone material in exhaust assemblies' },
    { label: 'Low-Distortion Thin-Wall Stainless Exhaust Welding', href: '/blog/low-distortion-thin-wall-stainless-exhaust-welding', desc: 'Intergranular corrosion and heat-affected control in stainless welding' },
    { label: 'What Is Tier 1 Exhaust System Manufacturing?', href: '/blog/tier1-exhaust-system-manufacturing-guide', desc: 'A panoramic intro to exhaust parts and materials' },
  ],
  relatedSlugs: ['low-distortion-thin-wall-stainless-exhaust-welding', 'tier1-exhaust-system-manufacturing-guide'],
  faq: [
    { q: '為什麼不全段都用 304？', a: '304 成本最高、熱膨脹係數大，全段使用不僅昂貴，熱端的熱疲勞也需額外設計。多數段別用 409L/439 已足夠。' },
    { q: '409L 和 439 最大的差別是什麼？', a: '439 含鉻較高且雙重穩定化，耐蝕與耐高溫氧化優於 409L，價格居中，常用於要求更高的中後段與消音器。' },
    { q: '鹽害地區的車該怎麼選材？', a: '建議將最冷端（消音器、尾管）從 409L 升級為 439，以延長抗孔蝕壽命；熱端維持 409L 或視需求用 304。' },
  ],
  faqEn: [
    { q: 'Why not use 304 throughout?', a: '304 has the highest cost and a large thermal-expansion coefficient; using it everywhere is expensive, and the hot end’s thermal fatigue needs extra design. For most sections, 409L/439 is sufficient.' },
    { q: 'What is the biggest difference between 409L and 439?', a: '439 has higher chromium and dual stabilization, with better corrosion and high-temperature oxidation resistance than 409L at a mid-range price — common in higher-demand mid-to-rear sections and mufflers.' },
    { q: 'How should I choose material for cars in salt regions?', a: 'Upgrade the coldest end (muffler, tailpipe) from 409L to 439 to extend pitting-corrosion life; keep the hot end on 409L or use 304 as needed.' },
  ],
};

const taiwanTier1Qualification: PostFullContent = {
  slug: 'taiwan-auto-parts-tier1-qualification',
  blocks: [
    { t: 'h2', id: 'overall-flow', text: '一、資格審查的整體流程' },
    { t: 'p', text: '成為日系或歐系 Tier 1 的合格供應商，通常要走過 RFI（資訊徵求）、RFQ（報價徵求）、現場稽核、樣品與 PPAP、到 SOP（量產）核准的完整流程。整體從接觸到量產授權，常需 6～12 個月。' },
    { t: 'p', text: '這條路的本質是「逐步建立信任」：每一關都在驗證供應商的製程能力、品質系統與交付穩定性是否足以承擔量產風險。' },
    { t: 'h2', id: 'rfi-screening', text: '二、RFI 與初步篩選' },
    { t: 'p', text: 'RFI 階段，車廠收集供應商的基本資料：認證（IATF 16949）、產能、設備清單、既有客戶與財務狀況。這關刷掉不具備基本門檻的供應商，台廠最常見的失分點是缺 IATF 認證或產能揭露不清。' },
    { t: 'ul', items: [
      '備齊 IATF 16949、ISO 14001/45001 等有效證書',
      '清楚揭露設備清單、產能與稼動率',
      '準備既有量產客戶與代表性零件實績',
    ] },
    { t: 'h2', id: 'on-site-audit', text: '三、現場稽核重點：製程與品質系統' },
    { t: 'p', text: '通過初篩後，車廠 SQE（供應商品質工程師）會到廠進行製程稽核（process audit）與系統稽核（system audit）。重點包括：製程流程與控制計畫的一致性、量測系統（MSA）、追溯性、不良品管控的閉迴路，以及現場 5S 與作業標準化。' },
    { t: 'h2', id: 'jp-vs-eu', text: '四、日系 vs 歐系稽核差異' },
    { t: 'p', text: '日系車廠重視現場（現地現物）、長期關係與持續改善（Kaizen），稽核常深入產線細節與作業員紀律；歐系車廠（VDA 6.3 體系）文件導向、流程嚴謹，重視風險分析與可追溯的證據鏈。' },
    { t: 'ol', items: [
      '日系：現場導向、重視 Kaizen 與長期合作，打樣與溝通速度是加分項',
      '歐系：VDA 6.3 流程稽核，文件與風險分析要求嚴格',
      '兩者共通：IATF 16949 為基礎，PPAP 為量產前的關卡',
    ] },
    { t: 'h2', id: 'timeline-prep', text: '五、時程預期與準備建議' },
    { t: 'p', text: '從 RFI 到 SOP 核准常需 6～12 個月，視零件複雜度與稽核回合而定。建議供應商在接觸前就把品質系統、製程文件與代表性實績備齊，並指派專責窗口統一對接，避免各部門資訊不一致拖慢進度。' },
    { t: 'callout', text: '富惟觀點：台廠相對東南亞競爭者的優勢在 IATF 認證普及與快速打樣；面對歐系稽核時，補強 VDA 6.3 的文件與風險分析能力，是提升通過率的關鍵。' },
  ],
  blocksEn: [
    { t: 'h2', id: 'overall-flow', text: '1. The Overall Qualification Flow' },
    { t: 'p', text: 'Becoming a qualified supplier to a Japanese or European Tier 1 usually means going through the full flow: RFI (request for information), RFQ (request for quotation), on-site audit, samples and PPAP, to SOP (start of production) approval. From first contact to production authorization often takes 6–12 months.' },
    { t: 'p', text: 'The essence of this path is "building trust step by step": each gate verifies whether the supplier’s process capability, quality system, and delivery stability are enough to bear production risk.' },
    { t: 'h2', id: 'rfi-screening', text: '2. RFI and Initial Screening' },
    { t: 'p', text: 'At the RFI stage, the automaker collects basic supplier data: certifications (IATF 16949), capacity, equipment list, existing customers, and financials. This gate filters out suppliers lacking the basic bar; Taiwanese shops most often lose points for missing IATF certification or unclear capacity disclosure.' },
    { t: 'ul', items: [
      'Have valid certificates ready: IATF 16949, ISO 14001/45001, etc.',
      'Clearly disclose the equipment list, capacity, and utilization',
      'Prepare existing volume customers and representative part track records',
    ] },
    { t: 'h2', id: 'on-site-audit', text: '3. On-Site Audit Focus: Process and Quality System' },
    { t: 'p', text: 'After passing the screen, the automaker’s SQE (supplier quality engineer) visits for a process audit and a system audit. Focus areas include: consistency of process flow and control plan, measurement system (MSA), traceability, the closed loop for nonconforming-part control, and on-site 5S and work standardization.' },
    { t: 'h2', id: 'jp-vs-eu', text: '4. Japanese vs. European Audit Differences' },
    { t: 'p', text: 'Japanese automakers value the genba (actual place, actual thing), long-term relationships, and continuous improvement (Kaizen); their audits often go deep into line details and operator discipline. European automakers (the VDA 6.3 system) are document-oriented and process-rigorous, valuing risk analysis and a traceable evidence chain.' },
    { t: 'ol', items: [
      'Japanese: genba-oriented, valuing Kaizen and long-term cooperation; fast prototyping and communication are pluses',
      'European: VDA 6.3 process audit, with strict documentation and risk-analysis requirements',
      'Common to both: IATF 16949 as the foundation, PPAP as the pre-production gate',
    ] },
    { t: 'h2', id: 'timeline-prep', text: '5. Timeline Expectations and Preparation Advice' },
    { t: 'p', text: 'From RFI to SOP approval often takes 6–12 months, depending on part complexity and audit rounds. Suppliers should have the quality system, process documents, and representative track record ready before contact, and assign a dedicated window for unified communication to avoid inter-department inconsistencies slowing progress.' },
    { t: 'callout', text: 'Fullwei’s view: Taiwanese shops’ edge over Southeast Asian competitors is widespread IATF certification and fast prototyping; for European audits, strengthening VDA 6.3 documentation and risk-analysis capability is key to raising the pass rate.' },
  ],
  relatedLinks: [
    { label: 'IATF 16949 · PPAP 文件清單完整解析', href: '/blog/iatf-16949-ppap-checklist', desc: '量產前 PPAP 的 18 項核心文件與常見駁回原因' },
    { label: '關於富惟的認證資質', href: '/about', desc: 'IATF 16949 與平台量產實績' },
    { label: '如何選擇排氣管焊接代工廠？六大評估指標', href: '/blog/how-to-choose-exhaust-welding-manufacturer', desc: '從採購視角檢核供應商的指標' },
  ],
  relatedLinksEn: [
    { label: 'IATF 16949 PPAP Document Checklist', href: '/blog/iatf-16949-ppap-checklist', desc: 'The 18 core PPAP documents and common rejection reasons' },
    { label: 'About Fullwei’s Certifications', href: '/about', desc: 'IATF 16949 and platform volume track record' },
    { label: 'How to Choose an Exhaust Welding Manufacturer: 6 Criteria', href: '/blog/how-to-choose-exhaust-welding-manufacturer', desc: 'Criteria to vet a supplier from a buyer’s view' },
  ],
  relatedSlugs: ['iatf-16949-ppap-checklist', 'how-to-choose-exhaust-welding-manufacturer'],
  faq: [
    { q: 'Tier 1 資格審查最常見的失分點是什麼？', a: 'RFI 階段最常因缺 IATF 認證或產能揭露不清被刷；現場稽核則常因製程文件與控制計畫不一致、MSA 不足而失分。' },
    { q: '日系與歐系稽核要分開準備嗎？', a: '基礎都是 IATF 16949 與 PPAP，但日系重現場與 Kaizen，歐系重 VDA 6.3 文件與風險分析，建議針對對象補強對應能力。' },
    { q: '整個流程大概要多久？', a: '視零件複雜度與稽核回合，從 RFI 到 SOP 核准常需 6～12 個月。' },
  ],
  faqEn: [
    { q: 'What is the most common way to lose points in Tier 1 qualification?', a: 'At the RFI stage, most failures come from missing IATF certification or unclear capacity disclosure; in on-site audits, from inconsistency between process documents and the control plan, or insufficient MSA.' },
    { q: 'Should Japanese and European audits be prepared separately?', a: 'Both rest on IATF 16949 and PPAP, but Japanese audits emphasize the genba and Kaizen while European ones emphasize VDA 6.3 documentation and risk analysis — reinforce the matching capability for your target.' },
    { q: 'How long does the whole process take?', a: 'Depending on part complexity and audit rounds, from RFI to SOP approval often takes 6–12 months.' },
  ],
};

const hondaSupplyChain: PostFullContent = {
  slug: 'honda-supply-chain-restructure-taiwan',
  blocks: [
    { t: 'h2', id: 'drivers', text: '一、供應鏈重組的驅動力' },
    { t: 'p', text: '疫情後的斷鏈、地緣政治風險與電動化轉型，迫使日本車廠重新檢視高度集中於單一地區的供應鏈。Honda 等車廠正從「成本最低」轉向「韌性與成本並重」的採購策略。' },
    { t: 'p', text: '這個轉變對台灣金屬件廠商是結構性機會：當車廠願意為供應穩定性付出溢價，具備品質與認證基礎的台廠便有了切入縫隙。' },
    { t: 'h2', id: 'china-plus-one', text: '二、「中國+1」與供應鏈韌性' },
    { t: 'p', text: '「中國+1」策略指車廠在維持中國產能的同時，分散一部分採購到其他地區以降低風險。台灣憑藉地理鄰近、製造成熟度與相對中立的供應角色，是日系車廠分散風險的合理選項之一。' },
    { t: 'ul', items: [
      '降低單一地區斷鏈風險，是重組的首要動機',
      '台灣的精密金屬加工成熟度高於多數東南亞替代地',
      '與日系車廠數十年的合作信任，是難以複製的資產',
    ] },
    { t: 'h2', id: 'taiwan-opportunities', text: '三、台廠的機會切入點' },
    { t: 'p', text: '最直接的切入點，是具備 IATF 16949 認證與快速打樣能力的廠商，承接從中國或其他地區轉移出來的零件訂單。排氣系統、車體結構件與精密沖壓件，是台廠累積最深、最有競爭力的品項。' },
    { t: 'h2', id: 'challenges', text: '四、挑戰：規模、語言、認證' },
    { t: 'p', text: '機會的另一面是挑戰。台廠普遍規模較小，難以單獨承接大批量訂單；英文與專案管理能力參差；部分廠商認證與文件體系尚未到位。這些都是承接國際訂單前要補強的環節。' },
    { t: 'ol', items: [
      '規模：可透過同業聯盟或產能協作承接大單',
      '語言與專案：建立英文窗口與標準化專案管理',
      '認證：補齊 IATF 與客戶特定要求（CSR）',
    ] },
    { t: 'h2', id: 'action-advice', text: '五、行動建議' },
    { t: 'p', text: '台廠應主動向既有日系客戶表達承接轉移訂單的意願，並以「品質穩定＋快速反應＋認證齊備」三點建立差異化。同時投資自動化與英文溝通能力，為長期承接國際訂單做準備。' },
    { t: 'callout', text: '富惟觀點：供應鏈重組是十年一遇的窗口期。我們以屏東智造工廠的自動化產能與長期 Honda 合作信任為基礎，主動參與客戶的多元供應佈局，而非被動等待訂單轉移。' },
  ],
  blocksEn: [
    { t: 'h2', id: 'drivers', text: '1. The Drivers of Supply Chain Restructuring' },
    { t: 'p', text: 'Post-pandemic supply breaks, geopolitical risk, and the shift to electrification are forcing Japanese automakers to re-examine supply chains heavily concentrated in a single region. Honda and others are moving from "lowest cost" to a "resilience and cost both" sourcing strategy.' },
    { t: 'p', text: 'This shift is a structural opportunity for Taiwanese metal-part makers: when automakers will pay a premium for supply stability, Taiwanese shops with a quality and certification base gain an opening.' },
    { t: 'h2', id: 'china-plus-one', text: '2. "China+1" and Supply Chain Resilience' },
    { t: 'p', text: 'The "China+1" strategy means automakers keep Chinese capacity while diversifying part of their sourcing to other regions to reduce risk. With geographic proximity, manufacturing maturity, and a relatively neutral supply role, Taiwan is a reasonable option for Japanese automakers diversifying risk.' },
    { t: 'ul', items: [
      'Reducing single-region supply-break risk is the primary motive for restructuring',
      'Taiwan’s precision metalworking maturity exceeds most Southeast Asian alternatives',
      'Decades of trust with Japanese automakers is a hard-to-replicate asset',
    ] },
    { t: 'h2', id: 'taiwan-opportunities', text: '3. Taiwan’s Entry Opportunities' },
    { t: 'p', text: 'The most direct entry point is shops with IATF 16949 certification and fast prototyping taking on part orders shifted out of China or other regions. Exhaust systems, body structural parts, and precision stampings are where Taiwanese shops have the deepest, most competitive accumulation.' },
    { t: 'h2', id: 'challenges', text: '4. Challenges: Scale, Language, Certification' },
    { t: 'p', text: 'The flip side of opportunity is challenge. Taiwanese shops are generally small and struggle to take large-volume orders alone; English and project-management capability vary; and some shops’ certification and documentation systems are not yet in place. These must be reinforced before taking on international orders.' },
    { t: 'ol', items: [
      'Scale: take large orders via industry alliances or capacity collaboration',
      'Language and projects: build an English window and standardized project management',
      'Certification: complete IATF and customer-specific requirements (CSR)',
    ] },
    { t: 'h2', id: 'action-advice', text: '5. Action Advice' },
    { t: 'p', text: 'Taiwanese shops should proactively signal to existing Japanese customers their willingness to take shifted orders, and differentiate on three points: "stable quality + fast response + complete certification." At the same time, invest in automation and English communication to prepare for long-term international orders.' },
    { t: 'callout', text: 'Fullwei’s view: supply-chain restructuring is a once-a-decade window. Building on the Pingtung Smart Factory’s automated capacity and long-term Honda trust, we actively join customers’ multi-sourcing plans rather than passively waiting for orders to shift.' },
  ],
  relatedLinks: [
    { label: '電動車浪潮下，金屬沖壓廠的下一步', href: '/blog/ev-transition-metal-stamping', desc: '產業轉型的另一條結構性主線' },
    { label: '關於富惟', href: '/about', desc: '富惟與 Honda 三十年合作與全球佈局' },
    { label: '屏東智造工廠', href: '/#smart-factory', desc: '承接國際訂單的自動化產能基礎' },
  ],
  relatedLinksEn: [
    { label: 'The EV Wave: What’s Next for Metal Stamping Shops', href: '/blog/ev-transition-metal-stamping', desc: 'Another structural storyline of industry transformation' },
    { label: 'About Fullwei', href: '/about', desc: 'Fullwei’s 30-year Honda partnership and global footprint' },
    { label: 'Pingtung Smart Factory', href: '/#smart-factory', desc: 'The automated capacity base for taking on international orders' },
  ],
  relatedSlugs: ['ev-transition-metal-stamping', 'smart-factory-roi-sme'],
  faq: [
    { q: '供應鏈重組對台廠真的是機會嗎？', a: '是。當車廠從「成本最低」轉向「韌性與成本並重」，具備品質與 IATF 認證的台廠有承接轉移訂單的縫隙。' },
    { q: '台廠規模小，怎麼承接大批量訂單？', a: '可透過同業聯盟、產能協作或聚焦高價值品項切入，不必單獨硬接超出產能的大單。' },
    { q: '承接日系國際訂單最該補強什麼？', a: '英文窗口與專案管理、IATF 與客戶特定要求（CSR），以及自動化產能的穩定性。' },
  ],
  faqEn: [
    { q: 'Is supply-chain restructuring really an opportunity for Taiwanese shops?', a: 'Yes. As automakers shift from "lowest cost" to "resilience and cost both," Taiwanese shops with quality and IATF certification have an opening to take shifted orders.' },
    { q: 'Taiwanese shops are small — how can they take large-volume orders?', a: 'Through industry alliances, capacity collaboration, or focusing on high-value items, rather than forcing large orders beyond capacity alone.' },
    { q: 'What should shops most reinforce to take Japanese international orders?', a: 'An English window and project management, IATF and customer-specific requirements (CSR), and the stability of automated capacity.' },
  ],
};

const smartFactoryRoi: PostFullContent = {
  slug: 'smart-factory-roi-sme',
  blocks: [
    { t: 'h2', id: 'mes-value', text: '一、MES 對中小廠的真實價值' },
    { t: 'p', text: 'MES（製造執行系統）常被視為大廠專利，但其核心價值——即時掌握產線狀態、快速反應異常、減少對老師傅經驗的依賴——對中小型沖壓廠同樣關鍵，甚至更迫切，因為中小廠的容錯空間更小。' },
    { t: 'p', text: '導入 MES 的 ROI 不該只看軟體授權費，而要從它帶來的三個可量化效益評估：OEE 提升、異常反應速度、人力替換率。' },
    { t: 'h2', id: 'oee', text: '二、維度一：OEE 提升' },
    { t: 'p', text: 'OEE（整體設備效率）= 稼動率 × 性能 × 良率。MES 透過即時數據攤開停機原因、節拍損失與不良分布，讓改善有的放矢。中小沖壓廠導入後，OEE 提升 5～15 個百分點是常見區間。' },
    { t: 'ul', items: [
      '稼動率：減少換模與待料停機',
      '性能：找出節拍損失的瓶頸工站',
      '良率：即時不良預警，縮短發現到處理的時間',
    ] },
    { t: 'h2', id: 'anomaly-response', text: '三、維度二：異常反應速度' },
    { t: 'p', text: '傳統靠人工巡檢與紙本記錄，異常從發生到被發現常以小時計；MES 即時監控與報警可把這個時間壓到分鐘級。對沖壓而言，一個未即時發現的模具崩刃，可能造成整批不良——反應速度直接等於損失金額。' },
    { t: 'h2', id: 'labor-substitution', text: '四、維度三：人力替換率' },
    { t: 'p', text: '少子化與缺工下，老師傅的經驗難以傳承。MES 把參數、SOP 與異常處置數位化，降低對個別老師傅的依賴，讓新進人員也能維持穩定品質。這既是成本效益，也是營運風險的對沖。' },
    { t: 'h2', id: 'roi-framework', text: '五、ROI 試算框架與導入順序' },
    { t: 'p', text: '建議的 ROI 試算：年效益 =（OEE 提升帶來的產出增量 × 邊際貢獻）+（異常反應加速減少的不良損失）+（人力替換節省）。再以年效益除以（軟硬體 + 導入 + 維運）總成本，估算回收期。' },
    { t: 'ol', items: [
      '先數位化「資料採集」——機台聯網與產量、不良即時上傳',
      '再做「可視化」——戰情看板讓異常一目了然',
      '最後做「分析與優化」——以數據驅動 OEE 與排程改善',
    ] },
    { t: 'callout', text: '富惟觀點：中小廠導入 MES 不必一步到位。先從一條產線的資料採集與可視化做起，用 6～12 個月驗證 OEE 與不良改善的實績，再決定是否全廠推廣，回收期通常落在 1.5～3 年。' },
  ],
  blocksEn: [
    { t: 'h2', id: 'mes-value', text: '1. The Real Value of MES for SMEs' },
    { t: 'p', text: 'MES (manufacturing execution system) is often seen as the preserve of large firms, but its core value — real-time visibility into line status, fast anomaly response, and less reliance on veteran experience — is just as critical for small and medium stamping shops, even more urgent, because SMEs have less room for error.' },
    { t: 'p', text: 'The ROI of MES should not be judged on software license fees alone, but on three quantifiable benefits it brings: OEE gains, anomaly response speed, and labor substitution.' },
    { t: 'h2', id: 'oee', text: '2. Dimension One: OEE Gains' },
    { t: 'p', text: 'OEE (overall equipment effectiveness) = availability × performance × quality. MES uses real-time data to break down downtime causes, cycle-time losses, and defect distribution, making improvement targeted. After adoption, small stamping shops commonly see OEE rise by 5–15 percentage points.' },
    { t: 'ul', items: [
      'Availability: reduce die-change and material-wait downtime',
      'Performance: find the bottleneck station behind cycle-time loss',
      'Quality: real-time defect alerts shorten the time from discovery to action',
    ] },
    { t: 'h2', id: 'anomaly-response', text: '3. Dimension Two: Anomaly Response Speed' },
    { t: 'p', text: 'Relying on manual rounds and paper records, the time from an anomaly occurring to being noticed is often counted in hours; MES real-time monitoring and alarms can compress this to minutes. For stamping, an undetected chipped die edge can ruin an entire batch — response speed directly equals the loss amount.' },
    { t: 'h2', id: 'labor-substitution', text: '4. Dimension Three: Labor Substitution' },
    { t: 'p', text: 'Under low birth rates and labor shortage, veteran experience is hard to pass on. MES digitizes parameters, SOPs, and anomaly handling, reducing reliance on individual veterans so new hires can also hold stable quality. This is both a cost benefit and a hedge against operational risk.' },
    { t: 'h2', id: 'roi-framework', text: '5. ROI Framework and Rollout Order' },
    { t: 'p', text: 'A recommended ROI calculation: annual benefit = (output increment from OEE gains × marginal contribution) + (defect loss reduced by faster anomaly response) + (labor-substitution savings). Then divide annual benefit by total cost (software/hardware + implementation + maintenance) to estimate payback.' },
    { t: 'ol', items: [
      'First digitize "data collection" — connect machines and upload output and defects in real time',
      'Then build "visualization" — a war-room dashboard makes anomalies obvious at a glance',
      'Finally do "analysis and optimization" — drive OEE and scheduling improvement with data',
    ] },
    { t: 'callout', text: 'Fullwei’s view: SMEs need not adopt MES all at once. Start with data collection and visualization on one line, validate OEE and defect improvement over 6–12 months, then decide on plant-wide rollout — payback usually lands at 1.5–3 years.' },
  ],
  relatedLinks: [
    { label: '屏東智造工廠', href: '/#smart-factory', desc: '富惟的自動化與智慧製造能力' },
    { label: 'Honda 全球供應鏈重組：台廠的機會與挑戰', href: '/blog/honda-supply-chain-restructure-taiwan', desc: '自動化作為承接國際訂單的基礎' },
    { label: '加入我們', href: '/careers', desc: '富惟正在尋找智慧製造相關人才' },
  ],
  relatedLinksEn: [
    { label: 'Pingtung Smart Factory', href: '/#smart-factory', desc: 'Fullwei’s automation and smart-manufacturing capability' },
    { label: 'Honda’s Global Supply Chain Restructuring', href: '/blog/honda-supply-chain-restructure-taiwan', desc: 'Automation as the base for taking on international orders' },
    { label: 'Join Us', href: '/careers', desc: 'Fullwei is seeking smart-manufacturing talent' },
  ],
  relatedSlugs: ['honda-supply-chain-restructure-taiwan', 'ev-transition-metal-stamping'],
  faq: [
    { q: '中小廠導入 MES 真的划算嗎？', a: '若從 OEE 提升、異常反應加速與人力替換三個維度量化效益，多數中小沖壓廠的回收期落在 1.5～3 年，是划算的。' },
    { q: 'MES 導入要一次到位嗎？', a: '不必。建議先做一條產線的資料採集與可視化，驗證實績後再全廠推廣，降低風險與一次性投資。' },
    { q: 'MES 能解決缺工問題嗎？', a: '不能完全解決，但能把老師傅經驗數位化、降低對個別人員的依賴，讓新進人員維持穩定品質。' },
  ],
  faqEn: [
    { q: 'Is adopting MES really worth it for SMEs?', a: 'When benefits are quantified across OEE gains, faster anomaly response, and labor substitution, most small stamping shops see payback in 1.5–3 years — worth it.' },
    { q: 'Must MES be adopted all at once?', a: 'No. Start with data collection and visualization on one line, validate results, then roll out plant-wide to reduce risk and one-time investment.' },
    { q: 'Can MES solve the labor shortage?', a: 'Not entirely, but it digitizes veteran experience and reduces reliance on individuals, letting new hires maintain stable quality.' },
  ],
};

export const postContents: Record<string, PostFullContent> = {
  'progressive-die-five-keys':     progressiveDie,
  'spcc-vs-spfh590-automotive':    spccVsSpfh,
  'iatf-16949-ppap-checklist':     ppapChecklist,
  'ev-transition-metal-stamping':  evTransition,
  'tier1-exhaust-system-manufacturing-guide':           tier1ExhaustGuide,
  'how-to-choose-exhaust-welding-manufacturer':         chooseExhaustManufacturer,
  'low-distortion-thin-wall-stainless-exhaust-welding': lowDistortionWelding,
  'robot-mig-exhaust-optimization':                     robotMigExhaust,
  'cnc-tube-springback-compensation':                   cncTubeSpringback,
  'hydroforming-vs-stamping-structural':                hydroformingVsStamping,
  'hot-formed-vs-hsla-comparison':                      hotFormedVsHsla,
  'exhaust-alloy-409l-439-304':                         exhaustAlloy,
  'taiwan-auto-parts-tier1-qualification':              taiwanTier1Qualification,
  'honda-supply-chain-restructure-taiwan':              hondaSupplyChain,
  'smart-factory-roi-sme':                              smartFactoryRoi,
};

export function getPostContent(slug: string): PostFullContent | undefined {
  return postContents[slug];
}

export function getTocH2s(blocks: Block[]): { id: string; text: string }[] {
  return blocks.filter((b): b is Extract<Block, { t: 'h2' }> => b.t === 'h2').map((b) => ({ id: b.id, text: b.text }));
}

export const LONG_ARTICLE_THRESHOLD = 4;
