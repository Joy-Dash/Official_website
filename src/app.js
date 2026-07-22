const moduleTypes = [
  {
    id: "hero",
    name: "首屏主視覺",
    description: "適合首頁第一屏、活動主視覺或產品重點曝光。",
    fields: ["主標題", "副標題", "說明文字", "背景圖 / 主圖"],
    variants: [
      {
        id: "A",
        name: "科技生活分屏版",
        description: "左側文字、右側情境主視覺，適合智慧產品或生活科技品牌。",
        entry: "templates/hero-main-visual-1/code.html",
        thumbnail: "templates/hero-main-visual-1/screen.png"
      },
      {
        id: "B",
        name: "產品情境主視覺版",
        description: "大面積產品情境與柔和背景，適合產品重點曝光與品牌形象。",
        entry: "templates/hero-main-visual-2/code.html",
        thumbnail: "templates/hero-main-visual-2/screen.png"
      }
    ]
  },
  {
    id: "intro",
    name: "圖文介紹",
    description: "適合品牌理念、產品說明、核心訊息與 Message 區。",
    fields: ["標題", "段落文字", "圖片", "重點文字"],
    variants: [
      {
        id: "A",
        name: "分欄圖文 01",
        description: "左側大圖、右側文字，適合品牌理念或產品核心訊息。",
        entry: "templates/intro-split-1/code.html",
        thumbnail: "templates/intro-split-1/screen.png"
      },
      {
        id: "B",
        name: "分欄圖文 02",
        description: "文字與圖片交疊延伸，適合形象敘事與重點介紹。",
        entry: "templates/intro-split-2/code.html",
        thumbnail: "templates/intro-split-2/screen.png"
      }
    ]
  },
  {
    id: "stats",
    name: "數據亮點",
    description: "適合 24H、3000+、SGS 等數字與信任指標。",
    fields: ["標題", "說明", "數據項目"],
    variants: [
      {
        id: "A",
        name: "極簡橫向數據",
        description: "標題置中，四組數據橫向排列，適合信任指標與服務成果。",
        entry: "templates/stats-highlight-1/code.html",
        thumbnail: "templates/stats-highlight-1/screen.png"
      },
      {
        id: "B",
        name: "深色沉浸數據",
        description: "深色背景搭配大型數字，適合強調品質承諾與品牌聲量。",
        entry: "templates/stats-highlight-2/code.html",
        thumbnail: "templates/stats-highlight-2/screen.png"
      }
    ]
  },
  {
    id: "cards",
    name: "卡片列表",
    description: "適合使用場景、服務入口、承諾、優勢與分類入口。",
    fields: ["區塊標題", "卡片標題", "卡片圖片 / Icon", "卡片說明"],
    variants: [
      {
        id: "A",
        name: "沉浸情境面板",
        description: "四張情境圖卡並排互動，適合場景、案例與服務入口。",
        entry: "templates/card-list-1/code.html",
        thumbnail: "templates/card-list-1/screen.png"
      },
      {
        id: "B",
        name: "錯落圖文卡片",
        description: "圖片與文字錯落排列，適合品牌亮點、產品特色與內容導覽。",
        entry: "templates/card-list-2/code.html",
        thumbnail: "templates/card-list-2/screen.png"
      }
    ]
  },
  {
    id: "news",
    name: "新聞列表",
    description: "適合最新消息、活動公告、文章或知識內容。",
    fields: ["標題", "分類", "顯示數量", "文章來源"],
    variants: [
      {
        id: "A",
        name: "三欄文章卡",
        description: "標題區搭配三欄新聞卡，適合首頁最新消息與知識文章。",
        entry: "templates/news-list-1/code.html",
        thumbnail: "templates/news-list-1/screen.png"
      },
      {
        id: "B",
        name: "焦點新聞編輯版",
        description: "左側焦點文章、右側次要文章，適合強調主打消息。",
        entry: "templates/news-list-2/code.html",
        thumbnail: "templates/news-list-2/screen.png"
      }
    ]
  },
  {
    id: "steps",
    name: "流程步驟",
    description: "適合服務流程、合作流程、安裝流程或申請流程。",
    fields: ["流程標題", "步驟名稱", "步驟說明"],
    variants: [
      { id: "A", name: "橫向三步驟", description: "步驟水平排列。" },
      { id: "B", name: "垂直時間軸", description: "步驟垂直排列。" }
    ]
  },
  {
    id: "faq",
    name: "FAQ 問答",
    description: "適合常見問題、產品規格、合作問答或知識摘要。",
    fields: ["區塊標題", "問題", "答案", "分類"],
    variants: [
      {
        id: "A",
        name: "置中手風琴問答",
        description: "標題置中，問題一列一題展開，適合一般 FAQ 區塊。",
        entry: "templates/faq-list-1/code.html",
        thumbnail: "templates/faq-list-1/screen.png"
      },
      {
        id: "B",
        name: "分類側欄問答",
        description: "左側分類導覽、右側問答列表，適合較完整的支援頁。",
        entry: "templates/faq-list-2/code.html",
        thumbnail: "templates/faq-list-2/screen.png"
      }
    ]
  },
  {
    id: "cta",
    name: "CTA 行動區",
    description: "適合聯絡我們、LINE 導流、合作洽詢與頁面收尾。",
    fields: ["標題", "說明", "按鈕文字", "背景圖"],
    variants: [
      { id: "A", name: "深色橫幅", description: "強烈收尾，適合導流與聯絡。" },
      { id: "B", name: "圖文 CTA", description: "搭配圖片，適合合作或活動入口。" }
    ]
  }
];

const defaultModules = [
  { id: "hero", name: "首頁首屏", type: "hero", fixed: true },
  { id: "news", name: "最新消息", type: "news" },
  { id: "message", name: "品牌訊息", type: "intro" },
  { id: "services", name: "服務入口", type: "cards" },
  { id: "promise", name: "品牌承諾", type: "cards" },
  { id: "reason", name: "選擇理由", type: "steps" },
  { id: "knowledge", name: "知識問答", type: "faq" },
  { id: "contact", name: "聯絡 CTA", type: "cta", fixed: true }
];

const pageTemplates = [
  { id: "content", name: "一般內容頁", defaultName: "關於頁面", description: "適合品牌故事、公司介紹、理念說明。", fields: ["頁面標題", "頁面簡介", "主要段落", "補充重點 1", "補充重點 2"], layouts: [{ id: "A", name: "標準內容版", description: "上方標題，下方段落內容。" }, { id: "B", name: "重點側欄版", description: "左側內容，右側重點摘要。" }] },
  { id: "article", name: "文章列表頁", defaultName: "最新消息", description: "適合最新消息、知識中心、文章分類。", fields: ["頁面標題", "頁面簡介", "顯示分類", "顯示筆數"], layouts: [{ id: "A", name: "三欄文章卡", description: "文章以三欄卡片呈現。" }, { id: "B", name: "主文章 + 列表", description: "左側主文章，右側文章列表。" }] },
  { id: "contact", name: "聯絡表單頁", defaultName: "聯絡我們", description: "適合聯絡資訊、LINE 諮詢、表單詢問。", fields: ["頁面標題", "頁面簡介", "電話", "Email", "LINE"], layouts: [{ id: "A", name: "表單右側版", description: "左側資訊，右側表單。" }, { id: "B", name: "表單置中版", description: "表單置中，資訊在下方。" }] },
  { id: "faq", name: "FAQ 頁", defaultName: "常見問題", description: "適合常見問題、購買說明、服務問答。", fields: ["頁面標題", "頁面簡介", "問題分類", "顯示筆數"], layouts: [{ id: "A", name: "手風琴版", description: "問題以展開列表呈現。" }, { id: "B", name: "分類表格版", description: "問題依分類分組呈現。" }] }
];

const pageContentSources = [
  {
    id: "manual",
    name: "手動撰寫頁面內容",
    description: "適合品牌故事、活動頁、客製頁面，由編輯者自行填寫欄位。"
  },
  {
    id: "data",
    name: "選擇背景資料帶入",
    description: "適合文章、案例、服務、FAQ 等，可先選資料分類或資料來源再編輯。"
  }
];

const pageDataFormats = [
  { id: "collection", name: "後台資料集合", description: "從內容、案例、商品 / 服務、據點 / 資源等資料表帶入。" },
  { id: "csv", name: "CSV / Excel 匯入", description: "適合批次匯入站點、案例、FAQ 或文章列表。" },
  { id: "json", name: "JSON 結構資料", description: "適合由外部系統或 API 提供結構化資料。" }
];

const defaultSiteMeta = {
  siteName: "利每家智慧富氫水站",
  titleSuffix: "利每家智慧富氫水站",
  description: "以智慧飲水科技與永續服務，打造更健康、更便利的生活體驗。",
  shareImageUrl: "",
  indexable: "yes"
};

function createPage(item) {
  const template = getPageTemplate(item.template);
  const content = {};
  template.fields.forEach((field, index) => {
    content[`field${index}`] = index === 0 ? item.name : field;
  });
  return {
    ...item,
    parentId: item.parentId || "",
    layout: item.layout || "A",
    contentSource: item.contentSource || "manual",
    dataSource: item.dataSource || "",
    dataFormat: item.dataFormat || "collection",
    dataFilter: item.dataFilter || "",
    dataMapping: item.dataMapping || "",
    seoTitle: item.seoTitle || `${item.name}｜${defaultSiteMeta.titleSuffix}`,
    seoDescription: item.seoDescription || defaultSiteMeta.description,
    shareTitle: item.shareTitle || item.seoTitle || `${item.name}｜${defaultSiteMeta.titleSuffix}`,
    shareDescription: item.shareDescription || item.seoDescription || defaultSiteMeta.description,
    shareImageUrl: item.shareImageUrl || defaultSiteMeta.shareImageUrl,
    indexable: item.indexable || defaultSiteMeta.indexable,
    content
  };
}

const initialPages = [
  { id: "about", name: "品牌故事", template: "content", status: "已發布", visible: "主選單 / Footer" },
  { id: "stations", name: "找水站", template: "content", status: "已發布", visible: "主選單" },
  { id: "station-quality", name: "水質報告", template: "content", status: "已發布", visible: "主選單", parentId: "stations" },
  { id: "cases-page", name: "合作案例", template: "article", status: "已發布", visible: "主選單" },
  { id: "knowledge-page", name: "知識中心", template: "article", status: "已發布", visible: "主選單" },
  { id: "contact", name: "LINE 諮詢", template: "contact", status: "已發布", visible: "CTA" }
].map(createPage);

function defaultContent(item) {
  const itemLinksEnabled = ["news", "cards", "faq"].includes(item.type);
  return {
    title: item.name,
    subtitle: item.type === "hero" ? "把可生飲的富氫活水，帶進每一個社區家庭" : `${item.name}標題`,
    description: getType(item.type).description,
    imageLabel: item.type === "hero" ? "智慧富氫水站主視覺" : "上傳圖片 / 底圖",
    item1: "內容項目 1",
    item1Subtitle: "",
    item2: "內容項目 2",
    item2Subtitle: "",
    item3: "內容項目 3",
    item3Subtitle: "",
    item4: "內容項目 4",
    item4Subtitle: "",
    stat1Value: item.type === "stats" ? "24" : "",
    stat1Unit: item.type === "stats" ? "H" : "",
    stat1Label: item.type === "stats" ? "全天候智慧服務" : "",
    stat2Value: item.type === "stats" ? "3000" : "",
    stat2Unit: item.type === "stats" ? "+" : "",
    stat2Label: item.type === "stats" ? "累積服務使用次數" : "",
    stat3Value: item.type === "stats" ? "98" : "",
    stat3Unit: item.type === "stats" ? "%" : "",
    stat3Label: item.type === "stats" ? "品質管理與定期檢查" : "",
    stat4Value: item.type === "stats" ? "12" : "",
    stat4Unit: item.type === "stats" ? "處" : "",
    stat4Label: item.type === "stats" ? "合作與服務據點" : "",
    item1Date: item.type === "news" ? "2026.07.17" : "",
    item2Date: item.type === "news" ? "2026.07.16" : "",
    item3Date: item.type === "news" ? "2026.07.12" : "",
    newsCategory: item.type === "news" ? "最新消息" : "",
    item1LinkEnabled: itemLinksEnabled,
    item1LinkText: "查看更多",
    item1LinkTarget: `/${item.id}/1`,
    item2LinkEnabled: itemLinksEnabled,
    item2LinkText: "查看更多",
    item2LinkTarget: `/${item.id}/2`,
    item3LinkEnabled: itemLinksEnabled,
    item3LinkText: "查看更多",
    item3LinkTarget: `/${item.id}/3`,
    item4LinkEnabled: itemLinksEnabled,
    item4LinkText: "查看更多",
    item4LinkTarget: `/${item.id}/4`
  };
}

function createModule(item) {
  return {
    ...item,
    enabled: true,
    variant: item.type === "cards" && item.id === "promise" ? "B" : "A",
    linkEnabled: ["hero", "news", "services", "knowledge", "contact"].includes(item.id),
    linkText: item.id === "contact" ? "加入 LINE" : "查看更多",
    linkTarget: item.id === "contact" ? "/go/line" : `/${item.id}`,
    content: defaultContent(item)
  };
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

const initialModules = defaultModules.map(createModule);

const initialDataCollections = {
  articles: [
    { id: "article-1", title: "品牌最新消息範例", type: "最新消息", category: "最新消息", status: "已發布", updated: "2026/07/17" },
    { id: "article-2", title: "服務知識文章範例", type: "知識文章", category: "知識文章", status: "草稿", updated: "2026/07/16" },
    { id: "article-3", title: "活動公告範例", type: "活動公告", category: "活動公告", status: "已發布", updated: "2026/07/12" },
    { id: "article-4", title: "常見問題範例", type: "FAQ", category: "FAQ", status: "已發布", updated: "2026/07/12" },
    { id: "article-5", title: "合作案例範例", type: "案例", category: "案例", status: "已發布", updated: "2026/07/11" }
  ],
  cases: [
    { id: "case-1", title: "案例範例 A", type: "案例", category: "案例", status: "顯示", updated: "已填摘要" },
    { id: "case-2", title: "案例範例 B", type: "案例", category: "案例", status: "顯示", updated: "待補圖片" },
    { id: "case-3", title: "案例範例 C", type: "案例", category: "案例", status: "隱藏", updated: "待補內容" }
  ],
  products: [
    { id: "product-1", title: "商品項目範例", type: "商品", category: "商品", status: "顯示", updated: "查看詳情" },
    { id: "product-2", title: "服務方案範例", type: "服務", category: "服務", status: "顯示", updated: "立即諮詢" },
    { id: "product-3", title: "方案組合範例", type: "方案", category: "方案", status: "草稿", updated: "索取資訊" }
  ],
  resources: [
    { id: "resource-1", title: "門市 / 據點範例", type: "據點", category: "據點", status: "顯示", updated: "地圖連結" },
    { id: "resource-2", title: "下載文件範例", type: "檔案下載", category: "檔案下載", status: "待補", updated: "PDF" },
    { id: "resource-3", title: "外部連結範例", type: "外部連結", category: "外部連結", status: "顯示", updated: "URL" }
  ]
};

const initialContactRecords = [
  { id: "contact-1", name: "王先生", contact: "visitor@example.com", type: "聯絡詢問", source: "聯絡我們頁", subject: "想了解服務內容", status: "待處理", owner: "未指派", createdAt: "2026/07/20 10:30", note: "希望收到方案介紹。" },
  { id: "contact-2", name: "李小姐", contact: "0912-000-000", type: "預約諮詢", source: "首頁 CTA", subject: "預約顧問聯繫", status: "已回覆", owner: "客服 A", createdAt: "2026/07/19 15:12", note: "已約下週二電話說明。" },
  { id: "contact-3", name: "陳主任", contact: "manager@example.com", type: "合作洽詢", source: "合作頁", subject: "想索取合作資料", status: "追蹤中", owner: "業務 B", createdAt: "2026/07/18 09:45", note: "需補寄簡報與報價範圍。" }
];

const initialAdminUsers = [
  { id: "admin-1", name: "Joy", email: "joy@example.com", role: "管理員", status: "啟用", lastLogin: "2026/07/21 09:20", note: "網站主要管理者" },
  { id: "admin-2", name: "內容編輯", email: "editor@example.com", role: "編輯者", status: "啟用", lastLogin: "2026/07/20 16:45", note: "可管理文章、FAQ 與頁面內容" },
  { id: "admin-3", name: "檢視人員", email: "viewer@example.com", role: "檢視者", status: "停用", lastLogin: "尚未登入", note: "僅供檢視後台資料" }
];

const initialSupportMessages = [
  { id: "message-1", name: "林小姐", channel: "LINE", subject: "詢問營業時間", lastMessage: "請問週末有人回覆嗎？", status: "待回覆", owner: "客服 A", updatedAt: "2026/07/20 11:05", note: "需確認週末排班。" },
  { id: "message-2", name: "張先生", channel: "網站留言", subject: "產品規格問題", lastMessage: "想確認是否有規格表可以下載。", status: "處理中", owner: "客服 B", updatedAt: "2026/07/20 09:20", note: "已轉商品負責人確認。" },
  { id: "message-3", name: "黃小姐", channel: "Email", subject: "售後服務詢問", lastMessage: "設備安裝後若有問題如何報修？", status: "已結案", owner: "客服 A", updatedAt: "2026/07/18 16:40", note: "已提供客服信箱與報修流程。" }
];

const siteStyleTemplates = [
  {
    id: "business",
    name: "商業服務型",
    fit: "適合顧問、B2B 服務、專業品牌",
    description: "清楚的主視覺、服務卡片、案例與 CTA，適合重視轉換的企業官網。",
    previewClass: "business",
    eyebrow: "Professional Service",
    headline: "把專業服務包裝成高轉換官網",
    proof: "清楚主張、明確導流、快速建立信任",
    cta: "預約諮詢",
    sections: ["Hero", "服務介紹", "案例證明", "聯絡 CTA"]
  },
  {
    id: "industrial",
    name: "工業製造型",
    fit: "適合製造、設備、工程、供應鏈",
    description: "強調規格、流程、品質認證與案例成果，視覺穩重、資訊密度較高。",
    previewClass: "industrial",
    eyebrow: "Manufacturing",
    headline: "呈現製造能力、規格與品質信任",
    proof: "適合產品規格、認證、製程與工程案例",
    cta: "查看規格",
    sections: ["產品能力", "製程流程", "品質認證", "技術諮詢"]
  },
  {
    id: "image",
    name: "品牌形象型",
    fit: "適合品牌故事、形象展示、生活風格",
    description: "大圖與文字敘事比例較高，適合先建立品牌感再導向內容或聯絡。",
    previewClass: "image",
    eyebrow: "Brand Story",
    headline: "用第一眼視覺建立品牌記憶",
    proof: "適合形象故事、生活情境、作品展示",
    cta: "認識品牌",
    sections: ["品牌主視覺", "理念介紹", "精選內容", "品牌 CTA"]
  },
  {
    id: "content",
    name: "內容知識型",
    fit: "適合媒體、知識中心、部落格、FAQ",
    description: "文章列表與分類入口較明顯，適合以內容帶動搜尋與長期流量。",
    previewClass: "content",
    eyebrow: "Content Hub",
    headline: "讓文章、知識與 FAQ 成為流量入口",
    proof: "適合知識中心、媒體、部落格與分類內容",
    cta: "瀏覽文章",
    sections: ["精選文章", "分類導覽", "最新內容", "訂閱 CTA"]
  },
  {
    id: "stitch-wellness",
    name: "高端品牌科技型",
    fit: "適合健康科技、精品服務、形象型品牌",
    description: "以大面積留白、玻璃質感、流動光影與高級 serif 標題呈現品牌質感。",
    previewClass: "stitch",
    entry: "templates/stitch-sophisticated-brand/code.html",
    thumbnail: "templates/stitch-sophisticated-brand/screen.png",
    eyebrow: "Wellness Technology",
    headline: "用高端視覺包裝品牌信任與科技感",
    proof: "適合需要兼具形象、產品質感、永續與專業說服力的官網。",
    cta: "探索品牌",
    sections: ["品牌價值", "產品展示", "智慧體驗", "永續 CTA"]
  },
  {
    id: "stitch-industrial-precision",
    name: "精密工業製造型",
    fit: "適合製造、設備、工程、B2B 供應鏈",
    description: "以大面積製造影像、規格數據、流程與品質區塊呈現專業可信的工業官網。",
    previewClass: "stitch",
    entry: "templates/stitch-sophisticated-brand-2/code.html",
    thumbnail: "templates/stitch-sophisticated-brand-2/screen.png",
    eyebrow: "Manufacturing Excellence",
    headline: "用高質感版面呈現製造能力與規格信任",
    proof: "適合需要展示製程、設備能力、品質認證與技術服務的企業官網。",
    cta: "查看製造能力",
    sections: ["製造能力", "製程流程", "技術規格", "品質 CTA"]
  },
  {
    id: "stitch-smart-product",
    name: "智慧產品生活型",
    fit: "適合科技產品、生活設備、健康品牌、產品形象官網",
    description: "以產品主視覺、生活情境、數據亮點、文章與 FAQ 組成完整的產品品牌首頁。",
    previewClass: "stitch",
    entry: "templates/stitch-sophisticated-brand-3/code.html",
    thumbnail: "templates/stitch-sophisticated-brand-3/screen.png",
    eyebrow: "Smart Product",
    headline: "用生活情境呈現產品價值與品牌信任",
    proof: "適合需要同時介紹產品特色、使用場景、服務流程與品牌內容的官網。",
    cta: "探索產品",
    sections: ["產品主視覺", "生活情境", "數據亮點", "FAQ CTA"]
  }
];

const siteColorPalettes = [
  { id: "teal", name: "專業藍綠", primary: "#0e6a8c", accent: "#1f6b4a", bg: "#f3f7f8", surface: "#ffffff", muted: "#64747b", text: "#0b1f2a" },
  { id: "navy", name: "穩重深藍", primary: "#1f3a5f", accent: "#4f6f52", bg: "#f4f7fb", surface: "#ffffff", muted: "#5f6e82", text: "#0c1726" },
  { id: "mono", name: "黑白簡約", primary: "#111827", accent: "#6b7280", bg: "#f5f5f4", surface: "#ffffff", muted: "#6b7280", text: "#111827" },
  { id: "warm", name: "溫暖品牌色", primary: "#9a4f2c", accent: "#b7791f", bg: "#fbf7f2", surface: "#fffaf4", muted: "#7c6556", text: "#24160f" },
  { id: "fresh", name: "清爽綠意", primary: "#2f6f62", accent: "#84a98c", bg: "#f3f8f5", surface: "#ffffff", muted: "#60756c", text: "#10241f" }
];

const state = {
  view: "admin",
  adminSection: "home",
  homeMode: "overview",
  heroEditorTab: "edit",
  activeId: "hero",
  insertAfterId: "",
  pendingModuleTypeId: "",
  activePageId: "about",
  activePreviewPageId: "",
  pageMode: "list",
  pageLayoutTab: "settings",
  pageSavedNotice: "",
  pendingPageTemplate: "",
  pendingPageSource: "",
  customCount: 0,
  customPageCount: 0,
  isChoosingModuleTemplate: false,
  isChoosingPageTemplate: false,
  isChoosingPageSource: false,
  activeDataEditor: null,
  activeOpsEditor: null,
  activeAdminUserEditor: null,
  activeArticleType: "最新消息",
  dataFilters: {
    articles: { search: "", category: "", status: "" },
    cases: { search: "", category: "", status: "" },
    products: { search: "", category: "", status: "" },
    resources: { search: "", category: "", status: "" }
  },
  opsFilters: {
    contactRecords: { search: "", type: "", status: "" },
    supportMessages: { search: "", type: "", status: "" }
  },
  pages: clone(initialPages),
  dataCollections: clone(initialDataCollections),
  contactRecords: clone(initialContactRecords),
  supportMessages: clone(initialSupportMessages),
  adminUsers: clone(initialAdminUsers),
  adminUserFilters: { search: "", role: "", status: "" },
  siteStyle: {
    templateId: "business",
    paletteId: "teal",
    savedTemplateId: "business",
    savedPaletteId: "teal"
  },
  savedModules: clone(initialModules),
  draftModules: clone(initialModules),
  navGroups: {
    cms: true,
    blueprint: true,
    ops: true
  },
  isDirty: false
};

const navSectionGroups = {
  blueprintArticles: "blueprint",
  blueprintFaq: "blueprint",
  blueprintProducts: "blueprint",
  blueprintResources: "blueprint",
  adminUsers: "ops",
  contactRecords: "ops",
  supportMessages: "ops",
  media: "ops",
  seo: "ops",
  tracking: "ops",
  brandStyle: "ops",
  site: "ops",
  logs: "ops"
};

const dataSectionKinds = {
  blueprintArticles: "articles",
  blueprintFaq: "articles",
  blueprintProducts: "products",
  blueprintResources: "resources"
};

const els = {
  workspace: document.getElementById("workspace"),
  previewPanel: document.getElementById("previewPanel"),
  adminPanel: document.getElementById("adminPanel"),
  previewRoot: document.getElementById("previewRoot"),
  siteNav: document.querySelector(".site-nav"),
  moduleToolbar: document.querySelector(".module-sidebar .toolbar"),
  moduleList: document.getElementById("moduleList"),
  settingsRoot: document.getElementById("settingsRoot"),
  settingsTitle: document.getElementById("settingsTitle"),
  summary: document.getElementById("summary"),
  addModuleBtn: document.getElementById("addModuleBtn"),
  backHomeOverviewBtn: document.getElementById("backHomeOverviewBtn"),
  saveBtn: document.getElementById("saveBtn"),
  managerPanel: document.getElementById("managerPanel")
};

function esc(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}

function getType(typeId) {
  return moduleTypes.find((item) => item.id === typeId) || moduleTypes[0];
}

function getVariant(module) {
  return getType(module.type).variants.find((item) => item.id === module.variant) || getType(module.type).variants[0];
}

function variantPill(module) {
  return `<span class="variant-pill">版型 ${esc(module.variant)}</span>`;
}

function link(module, className = "secondary-link") {
  if (!module.linkEnabled) return "";
  return `<a class="${className}" href="#">${esc(module.linkText)}</a><span class="hint"> 前往：${esc(module.linkTarget)}</span>`;
}

function isMultiItemModule(module) {
  return ["cards", "news", "steps", "faq", "stats"].includes(module.type);
}

function linkTargetOptions(selected) {
  return ["/about", "/stations", "/cooperate", "/cases", "/news", "/faq", "/contact", "/go/line", "外部連結"]
    .map((item) => `<option value="${item}" ${selected === item ? "selected" : ""}>${item}</option>`)
    .join("");
}

function itemLink(content, index, className = "secondary-link") {
  if (!content?.[`item${index}LinkEnabled`]) return "";
  return `<a class="${className}" href="#">${esc(content[`item${index}LinkText`] || "查看更多")}</a>`;
}

function draftModules() {
  return state.draftModules;
}

function savedModules() {
  return state.savedModules;
}

function savedModuleById(id) {
  return savedModules().find((item) => item.id === id);
}

function isModuleDirty(module) {
  const saved = savedModuleById(module.id);
  return !saved || JSON.stringify(module) !== JSON.stringify(saved);
}

function markDirty() {
  state.isDirty = true;
}

function updateActiveModuleSaveStatus(module) {
  const status = els.settingsRoot.querySelector("[data-module-save-status]");
  if (!status) return;
  const dirty = isModuleDirty(module);
  status.classList.toggle("unsaved", dirty);
  status.classList.toggle("green", !dirty);
  status.textContent = dirty ? "此模塊未儲存" : "已儲存";
}

function toggleModuleTemplateChooser() {
  state.homeMode = state.homeMode === "insert" ? "overview" : "insert";
  state.pendingModuleTypeId = "";
  state.isChoosingModuleTemplate = state.homeMode === "insert";
  state.insertAfterId = "";
  render();
}

function addModuleFromTemplate(typeId) {
  const type = getType(typeId);
  state.customCount += 1;
  const id = `custom-${state.customCount}`;
  const name = `${type.name} ${state.customCount}`;
  const item = {
    id,
    name,
    type: type.id,
    variant: "A",
    enabled: true,
    fixed: false,
    linkEnabled: false,
    linkText: "查看更多",
    linkTarget: "/",
    content: defaultContent({ id, name, type: type.id })
  };
  const afterIndex = draftModules().findIndex((module) => module.id === state.insertAfterId);
  const footerIndex = draftModules().findIndex((module) => module.fixed && module.id !== "hero");
  const insertIndex = afterIndex >= 0 ? afterIndex + 1 : footerIndex >= 0 ? footerIndex : draftModules().length;
  draftModules().splice(insertIndex, 0, item);
  state.activeId = id;
  state.homeMode = "edit";
  state.pendingModuleTypeId = "";
  state.isChoosingModuleTemplate = false;
  state.insertAfterId = "";
  markDirty();
  render();
}

function deleteModule(id) {
  const target = draftModules().find((item) => item.id === id);
  if (!target || target.fixed) return;
  state.draftModules = draftModules().filter((item) => item.id !== id);
  state.activeId = draftModules().find((item) => !item.fixed)?.id || "hero";
  markDirty();
  render();
}

function moveModule(fromId, toId) {
  const fromIndex = draftModules().findIndex((item) => item.id === fromId);
  const toIndex = draftModules().findIndex((item) => item.id === toId);
  const from = draftModules()[fromIndex];
  const to = draftModules()[toIndex];
  if (!from || !to || from.fixed || to.fixed || fromId === toId) return;
  const [moved] = draftModules().splice(fromIndex, 1);
  draftModules().splice(toIndex, 0, moved);
  markDirty();
  render();
}

function renderSummary() {
  const total = draftModules().length;
  const enabled = draftModules().filter((item) => item.enabled).length;
  const hidden = total - enabled;
  const linked = draftModules().filter((item) => item.enabled && item.linkEnabled).length;
  els.summary.innerHTML = `
    <div class="summary-row"><span>全部模塊</span><strong>${total}</strong></div>
    <div class="summary-row"><span>前台顯示</span><strong>${enabled}</strong></div>
    <div class="summary-row"><span>暫不顯示</span><strong>${hidden}</strong></div>
    <div class="summary-row"><span>含頁面連結</span><strong>${linked}</strong></div>
  `;
}

function renderModuleList() {
  els.moduleList.classList.toggle("hidden", state.homeMode === "overview");
  if (state.homeMode === "overview") {
    els.moduleList.innerHTML = "";
    return;
  }

  if (state.homeMode === "insert") {
    const modules = draftModules();
    els.moduleList.innerHTML = modules.map((module, index) => {
      const type = getType(module.type);
      const variant = getVariant(module);
      return `
        <article class="module-row compact">
          <div class="module-main compact">
            <span class="home-overview-order">${index + 1}</span>
            <div>
              <strong>${esc(module.name)}</strong>
              <p>${esc(type.name)}｜版型 ${esc(variant.id)}：${esc(variant.name)}</p>
            </div>
          </div>
        </article>
      `;
    }).join("");
    return;
  }

  const moduleRows = draftModules().map((module) => {
    const type = getType(module.type);
    const variant = getVariant(module);
    const dirty = isModuleDirty(module);
    return `
      <article class="module-row ${state.activeId === module.id ? "is-active" : ""} ${dirty ? "is-dirty" : ""}" ${module.fixed ? "" : 'draggable="true"'} data-module-row="${module.id}">
        <div class="module-main">
          <input type="checkbox" ${module.enabled ? "checked" : ""} ${module.fixed ? "disabled" : ""} data-toggle="${module.id}" aria-label="顯示${esc(module.name)}">
          <span class="drag">${module.fixed ? "鎖" : "⋮⋮"}</span>
          <div>
            <strong>${esc(module.name)}</strong>
            <p>${module.enabled ? "顯示中" : "暫不顯示"}｜${esc(type.name)}｜版型 ${esc(variant.id)}：${esc(variant.name)}</p>
          </div>
          <div class="actions">
            <button class="btn ${state.activeId === module.id ? "primary" : ""}" type="button" data-edit="${module.id}">編輯</button>
            ${module.fixed ? "" : `<button class="btn danger" type="button" data-delete="${module.id}">刪除</button>`}
          </div>
        </div>
        <div class="module-meta">
          ${dirty ? '<span class="pill unsaved">未儲存</span>' : ""}
          ${module.fixed ? '<span class="pill green">固定位置</span>' : ""}
          <span class="pill">${module.enabled ? "前台顯示" : "暫不顯示"}</span>
          <span class="pill">${esc(type.name)}</span>
          <span class="pill">版型 ${esc(variant.id)}</span>
          <span class="pill">${module.linkEnabled ? "有頁面連結" : "無頁面連結"}</span>
        </div>
      </article>
    `;
  }).join("");
  els.moduleList.innerHTML = moduleRows;

  els.moduleList.querySelectorAll("[data-toggle]").forEach((input) => {
    input.addEventListener("change", () => {
      const module = draftModules().find((item) => item.id === input.dataset.toggle);
      module.enabled = input.checked;
      markDirty();
      render();
    });
  });

  els.moduleList.querySelectorAll("[data-edit]").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeId = button.dataset.edit;
      state.homeMode = "edit";
      render();
    });
  });

  els.moduleList.querySelectorAll("[data-delete]").forEach((button) => {
    button.addEventListener("click", () => deleteModule(button.dataset.delete));
  });

  els.moduleList.querySelectorAll("[draggable='true']").forEach((row) => {
    row.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("text/plain", row.dataset.moduleRow);
    });
    row.addEventListener("dragover", (event) => event.preventDefault());
    row.addEventListener("drop", (event) => {
      event.preventDefault();
      moveModule(event.dataTransfer.getData("text/plain"), row.dataset.moduleRow);
    });
  });
}

function insertionSlots() {
  const modules = draftModules();
  return modules.slice(0, -1).map((module, index) => ({
    after: module,
    before: modules[index + 1]
  }));
}

function renderHomeOverview() {
  const modules = draftModules();
  els.settingsTitle.textContent = "首頁模塊現況預覽";
  els.settingsRoot.innerHTML = `
    <div class="settings-body">
      ${renderCurrentSiteTemplateNotice("首頁管理")}
      <section class="settings-card home-overview-panel">
        <div class="section-head">
          <div>
            <h3>目前首頁模塊排序預覽</h3>
            <p>快速確認模塊順序與內容類型；模塊會套用目前整站官網模板的版面風格與色系。</p>
          </div>
        </div>
        <div class="home-overview-list">
          ${modules.map((module, index) => {
            const type = getType(module.type);
            const variant = getVariant(module);
            return `
              <article class="home-overview-row ${module.fixed ? "is-fixed" : ""} ${module.enabled ? "" : "is-hidden-module"}" ${module.fixed ? "" : 'draggable="true"'} data-overview-row="${module.id}">
                <span class="home-overview-order">${index + 1}</span>
                <span class="drag">${module.fixed ? "鎖" : "⋮⋮"}</span>
                <div class="home-overview-main">
                  <strong>${esc(module.name)}</strong>
                  <span>${esc(type.name)}｜版型 ${esc(variant.id)}：${esc(variant.name)}</span>
                </div>
                <span class="home-overview-desc">${module.enabled ? esc(variant.description) : "目前不顯示在前台首頁。"}</span>
                <div class="home-overview-actions">
                  <label class="switch-control ${module.fixed ? "is-disabled" : ""}">
                    <input type="checkbox" ${module.enabled ? "checked" : ""} ${module.fixed ? "disabled" : ""} data-toggle-overview="${module.id}">
                    <span class="switch-track"></span>
                    <span class="switch-text">${module.enabled ? "顯示" : "不顯示"}</span>
                  </label>
                  <button class="btn" type="button" data-edit="${module.id}">編輯</button>
                  ${module.fixed ? `<span class="pill green">固定</span>` : `<button class="btn danger" type="button" data-delete="${module.id}">刪除</button>`}
                </div>
              </article>
            `;
          }).join("")}
        </div>
      </section>
    </div>
  `;

  bindAdminSectionLinks(els.settingsRoot);

  els.settingsRoot.querySelectorAll("[data-edit]").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeId = button.dataset.edit;
      state.homeMode = "edit";
      render();
    });
  });

  els.settingsRoot.querySelectorAll("[data-delete]").forEach((button) => {
    button.addEventListener("click", () => deleteModule(button.dataset.delete));
  });

  els.settingsRoot.querySelectorAll("[data-toggle-overview]").forEach((input) => {
    input.addEventListener("change", () => {
      const module = draftModules().find((item) => item.id === input.dataset.toggleOverview);
      if (!module || module.fixed) return;
      module.enabled = input.checked;
      markDirty();
      render();
    });
  });

  els.settingsRoot.querySelectorAll("[draggable='true'][data-overview-row]").forEach((row) => {
    row.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("text/plain", row.dataset.overviewRow);
    });
    row.addEventListener("dragover", (event) => event.preventDefault());
    row.addEventListener("drop", (event) => {
      event.preventDefault();
      moveModule(event.dataTransfer.getData("text/plain"), row.dataset.overviewRow);
    });
  });
}

function renderInsertFlow() {
  const selectedType = state.pendingModuleTypeId ? getType(state.pendingModuleTypeId) : null;
  const slots = insertionSlots();
  els.settingsTitle.textContent = selectedType ? `新增模塊｜${selectedType.name}｜選擇排序` : "新增模塊｜選擇模塊";

  if (!selectedType) {
    els.settingsRoot.innerHTML = `
      <div class="settings-body">
        <section class="settings-card">
          <div class="section-head">
            <div>
              <h3>1. 選擇要新增的模塊</h3>
              <p>先決定這次要新增的內容用途，下一步再選擇插入到首頁排序中的哪個位置。</p>
            </div>
          </div>
          <div class="module-template-grid wide">
            ${moduleTypes.map((type) => `
              <button class="template-card module-template-card" type="button" data-module-template="${type.id}">
                <div>
                  <strong>${esc(type.name)}</strong>
                  <p>${esc(type.description)}</p>
                </div>
                <div class="module-template-meta">
                  <span class="pill">${type.fields.length} 個欄位</span>
                  <span class="pill">版型 ${esc(type.variants.map((variant) => variant.id).join(" / "))}</span>
                </div>
              </button>
            `).join("")}
          </div>
        </section>
      </div>
    `;

    els.settingsRoot.querySelectorAll("[data-module-template]").forEach((button) => {
      button.addEventListener("click", () => {
        state.pendingModuleTypeId = button.dataset.moduleTemplate;
        state.insertAfterId = "";
        render();
      });
    });
    return;
  }

  els.settingsRoot.innerHTML = `
    <div class="settings-body">
      <section class="settings-card">
        <div class="section-head">
          <div>
            <h3>2. 選擇「${esc(selectedType.name)}」要插入的位置</h3>
            <p>選擇要插入在哪兩個首頁模塊之間，建立後會直接進入該模塊的編輯畫面。</p>
          </div>
          <button class="btn" type="button" data-change-module-template>重新選擇模塊</button>
        </div>
        <div class="selected-module-summary">
          <strong>已選模塊：${esc(selectedType.name)}</strong>
          <span>${esc(selectedType.description)}</span>
        </div>
        <div class="insert-slot-list">
          ${slots.map((slot) => `
            <button class="insert-slot" type="button" data-insert-after="${slot.after.id}">
              <span>${esc(slot.after.name)}</span>
              <strong>插入新模塊</strong>
              <span>${esc(slot.before.name)}</span>
            </button>
          `).join("")}
        </div>
      </section>
    </div>
  `;

  els.settingsRoot.querySelector("[data-change-module-template]")?.addEventListener("click", () => {
    state.pendingModuleTypeId = "";
    state.insertAfterId = "";
    render();
  });

  els.settingsRoot.querySelectorAll("[data-insert-after]").forEach((button) => {
    button.addEventListener("click", () => {
      state.insertAfterId = button.dataset.insertAfter;
      addModuleFromTemplate(state.pendingModuleTypeId);
    });
  });
}

function renderSettings() {
  if (state.homeMode === "overview") {
    renderHomeOverview();
    return;
  }
  if (state.homeMode === "insert") {
    renderInsertFlow();
    return;
  }

  const module = draftModules().find((item) => item.id === state.activeId);
  if (!module) {
    els.settingsRoot.innerHTML = `<div class="settings-card">請先選擇一個模塊。</div>`;
    return;
  }

  const type = getType(module.type);
  const variant = getVariant(module);
  const dirty = isModuleDirty(module);
  const isHero = module.type === "hero";
  const isIntro = module.type === "intro";
  const isStats = module.type === "stats";
  const isCards = module.type === "cards";
  const isNews = module.type === "news";
  const isFaq = module.type === "faq";
  const isFocusedVisualModule = isHero || isIntro || isStats || isCards || isNews || isFaq;
  const isFocusedVisualPreview = isFocusedVisualModule && state.heroEditorTab === "preview";
  const variantSection = isFocusedVisualModule ? "" : `
      <section class="settings-card variant-settings">
        <div class="section-head compact">
          <h3>版型</h3>
          <div class="tabs">
            <button class="tab is-active" type="button" data-variant-tab="settings">版型設定</button>
            <button class="tab" type="button" data-variant-tab="preview">版型預覽</button>
          </div>
        </div>
        <div data-variant-panel="settings">
          <div class="field compact-select">
            <label>選擇版型</label>
            <div class="field-help">選擇後按右上角「儲存」，前台預覽才會套用。</div>
            <select data-field="variant">
              ${type.variants.map((item) => `<option value="${item.id}" ${module.variant === item.id ? "selected" : ""}>版型 ${item.id}：${item.name}｜${item.description}</option>`).join("")}
            </select>
          </div>
        </div>
        <div class="hidden" data-variant-panel="preview">
          ${renderVariantMiniPreview(module)}
        </div>
      </section>
  `;
  els.settingsTitle.textContent = `${module.name}｜${type.name}｜版型 ${variant.id}`;
  els.settingsRoot.innerHTML = `
    <div class="settings-body">
      ${renderCurrentSiteTemplateNotice("首頁模塊")}
      ${isHero ? renderHeroVariantWorkbench(module) : ""}
      ${isIntro ? renderIntroVariantWorkbench(module) : ""}
      ${isStats ? renderStatsVariantWorkbench(module) : ""}
      ${isCards ? renderCardsVariantWorkbench(module) : ""}
      ${isNews ? renderNewsVariantWorkbench(module) : ""}
      ${isFaq ? renderFaqVariantWorkbench(module) : ""}

      ${isFocusedVisualModule || isFocusedVisualPreview ? "" : `<section class="settings-card">
        <div class="section-head">
          <h3>模塊基本設定</h3>
          <span class="pill ${dirty ? "unsaved" : "green"}" data-module-save-status>${dirty ? "此模塊未儲存" : "已儲存"}</span>
        </div>
        <div class="field-grid">
          <div class="field">
            <label>後台模塊名稱</label>
            <div class="field-help">只給後台管理者辨識，例如「首頁首屏」「最新消息」「社區案例」。</div>
            <input type="text" value="${esc(module.name)}" data-field="name">
          </div>
          <div class="field">
            <label>模塊類型</label>
            <div class="field-help">決定這個模塊要填哪些欄位，以及前台大致的內容用途。</div>
            <select data-field="type">
              ${moduleTypes.map((item) => `<option value="${item.id}" ${module.type === item.id ? "selected" : ""}>${item.name}｜${item.description}</option>`).join("")}
            </select>
          </div>
        </div>
      </section>`}

      ${variantSection}

      ${isFocusedVisualModule ? "" : `
        <section class="settings-card">
          <h3>內容填寫</h3>
          ${renderContentFields(module)}
        </section>
      `}

      ${isFocusedVisualModule || isFocusedVisualPreview ? "" : `<section class="settings-card">
        <h3>頁面連結</h3>
        ${renderLinkSettings(module)}
      </section>`}
    </div>
  `;

  bindAdminSectionLinks(els.settingsRoot);

  els.settingsRoot.querySelectorAll("[data-field]").forEach((input) => {
    input.addEventListener("input", () => updateField(module, input));
    input.addEventListener("change", () => updateField(module, input));
  });

  els.settingsRoot.querySelectorAll("[data-content-field]").forEach((input) => {
    input.addEventListener("input", () => updateContentField(module, input));
  });

  els.settingsRoot.querySelectorAll("[data-folder-picker]").forEach((input) => {
    input.addEventListener("change", () => updateFolderFiles(module, input));
  });

  els.settingsRoot.querySelectorAll("[data-image-picker]").forEach((input) => {
    input.addEventListener("change", () => updateImageFile(module, input));
  });

  els.settingsRoot.querySelectorAll("[data-hero-preview-frame]").forEach((frame) => {
    const imageUrl = module.content?.imagePreviewUrl || "";
    if (!imageUrl) return;
    frame.addEventListener("load", () => {
      try {
        frame.contentWindow?.postMessage({ type: "hero-preview-image", imageUrl }, "*");
      } catch (error) {}
    });
  });

  els.settingsRoot.querySelectorAll("[data-variant-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      const tab = button.dataset.variantTab;
      els.settingsRoot.querySelectorAll("[data-variant-tab]").forEach((item) => {
        item.classList.toggle("is-active", item.dataset.variantTab === tab);
      });
      els.settingsRoot.querySelectorAll("[data-variant-panel]").forEach((panel) => {
        panel.classList.toggle("hidden", panel.dataset.variantPanel !== tab);
      });
    });
  });

  els.settingsRoot.querySelectorAll("[data-hero-editor-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      state.heroEditorTab = button.dataset.heroEditorTab;
      renderSettings();
    });
  });

  expandFrontPreviewFrames();
}

function renderHeroVariantWorkbench(module) {
  const type = getType(module.type);
  const activeTab = state.heroEditorTab || "edit";
  return `
    <section class="settings-card hero-workbench">
      <div class="section-head compact">
        <div>
          <h3>首屏內容與呈現方式</h3>
          <p>此模塊會沿用整站官網模板的色系與風格；這裡只選首屏在模板內的排列方式並填寫內容。</p>
        </div>
        <div class="tabs">
          <button class="tab ${activeTab === "edit" ? "is-active" : ""}" type="button" data-hero-editor-tab="edit">呈現方式與內容</button>
          <button class="tab ${activeTab === "preview" ? "is-active" : ""}" type="button" data-hero-editor-tab="preview">套用預覽</button>
        </div>
      </div>
      <div class="hero-tab-panels">
        <div class="hero-editor-panel ${activeTab === "edit" ? "" : "hidden"}" data-hero-editor-panel="edit">
          <div class="field hero-variant-select">
            <label>選擇首屏呈現方式</label>
            <div class="field-help">切換後，可到「套用預覽」查看目前內容放進整站模板後的樣子。</div>
            <select data-field="variant">
              ${type.variants.map((item) => `<option value="${item.id}" ${module.variant === item.id ? "selected" : ""}>版型 ${item.id}：${item.name}｜${item.description}</option>`).join("")}
            </select>
          </div>
          <div class="hero-content-fields">
            ${renderHeroContentFields(module)}
          </div>
        </div>
        <div class="hero-preview-panel ${activeTab === "preview" ? "" : "hidden"}" data-hero-editor-panel="preview">
          <div class="module-preview-toolbar">
            <div>
              <strong>目前套用預覽</strong>
              <span>使用目前填寫的主標題、副標題與主圖產生預覽。</span>
            </div>
          </div>
          <div class="hero-live-preview-wrap" data-hero-live-preview>
            ${renderHeroCustomerPreview(module)}
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderHeroCustomerPreview(module) {
  const variant = getVariant(module);
  const c = module.content || defaultContent(module);
  const palette = getActiveSitePalette();
  const params = new URLSearchParams({
    title: c.title || module.name,
    subtitle: c.subtitle || "",
    imageKey: c.imagePreviewKey || "",
    imageUrl: c.imagePreviewKey ? "" : c.imagePreviewUrl || "",
    cta: module.linkText || "查看更多",
    linkEnabled: module.linkEnabled ? "1" : "0",
    primary: palette.primary,
    accent: palette.accent,
    bg: palette.bg,
    surface: palette.surface,
    text: palette.text,
    muted: palette.muted
  });
  if (variant.entry) {
    return `
      <div class="hero-real-template-preview">
        <iframe class="hero-real-preview-frame" scrolling="no" data-hero-preview-frame="${esc(module.id)}" title="${esc(module.name)}版型 ${esc(variant.id)} 預覽" src="${esc(variant.entry)}?${esc(params.toString())}"></iframe>
      </div>
    `;
  }
  return `
    <div class="mini-preview">${renderVariantMiniPreview(module)}</div>
  `;
}

function renderIntroVariantWorkbench(module) {
  const type = getType(module.type);
  const activeTab = state.heroEditorTab || "edit";
  return `
    <section class="settings-card hero-workbench intro-workbench">
      <div class="section-head compact">
        <div>
          <h3>圖文內容與呈現方式</h3>
          <p>此模塊會沿用整站官網模板的色系與風格；這裡只選圖文在模板內的排列方式並填寫內容。</p>
        </div>
        <div class="tabs">
          <button class="tab ${activeTab === "edit" ? "is-active" : ""}" type="button" data-hero-editor-tab="edit">呈現方式與內容</button>
          <button class="tab ${activeTab === "preview" ? "is-active" : ""}" type="button" data-hero-editor-tab="preview">套用預覽</button>
        </div>
      </div>
      <div class="hero-tab-panels">
        <div class="hero-editor-panel ${activeTab === "edit" ? "" : "hidden"}" data-hero-editor-panel="edit">
          <div class="field hero-variant-select">
            <label>選擇圖文呈現方式</label>
            <div class="field-help">切換後，可到「套用預覽」查看目前內容放進整站模板後的樣子。</div>
            <select data-field="variant">
              ${type.variants.map((item) => `<option value="${item.id}" ${module.variant === item.id ? "selected" : ""}>版型 ${item.id}：${item.name}｜${item.description}</option>`).join("")}
            </select>
          </div>
          <div class="hero-content-fields">
            ${renderIntroContentFields(module)}
          </div>
        </div>
        <div class="hero-preview-panel ${activeTab === "preview" ? "" : "hidden"}" data-hero-editor-panel="preview">
          <div class="module-preview-toolbar">
            <div>
              <strong>目前套用預覽</strong>
              <span>使用目前填寫的主標題、副標題與主圖產生預覽。</span>
            </div>
          </div>
          <div class="hero-live-preview-wrap" data-hero-live-preview>
            ${renderIntroCustomerPreview(module)}
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderIntroCustomerPreview(module) {
  const variant = getVariant(module);
  const c = module.content || defaultContent(module);
  const palette = getActiveSitePalette();
  const params = new URLSearchParams({
    title: c.title || module.name,
    subtitle: c.subtitle || "",
    imageKey: c.imagePreviewKey || "",
    imageUrl: c.imagePreviewKey ? "" : c.imagePreviewUrl || "",
    primary: palette.primary,
    accent: palette.accent,
    bg: palette.bg,
    surface: palette.surface,
    text: palette.text,
    muted: palette.muted
  });
  if (variant.entry) {
    return `
      <div class="hero-real-template-preview intro-real-template-preview">
        <iframe class="hero-real-preview-frame" scrolling="no" data-hero-preview-frame="${esc(module.id)}" title="${esc(module.name)}版型 ${esc(variant.id)} 預覽" src="${esc(variant.entry)}?${esc(params.toString())}"></iframe>
      </div>
    `;
  }
  return `
    <div class="mini-preview">${renderVariantMiniPreview(module)}</div>
  `;
}

function renderStatsVariantWorkbench(module) {
  const type = getType(module.type);
  const activeTab = state.heroEditorTab || "edit";
  return `
    <section class="settings-card hero-workbench stats-workbench">
      <div class="section-head compact">
        <div>
          <h3>數據內容與呈現方式</h3>
          <p>此模塊會沿用整站官網模板的色系與風格；這裡只設定數據亮點的排列方式與 4 組數據內容。</p>
        </div>
        <div class="tabs">
          <button class="tab ${activeTab === "edit" ? "is-active" : ""}" type="button" data-hero-editor-tab="edit">呈現方式與內容</button>
          <button class="tab ${activeTab === "preview" ? "is-active" : ""}" type="button" data-hero-editor-tab="preview">套用預覽</button>
        </div>
      </div>
      <div class="hero-tab-panels">
        <div class="hero-editor-panel ${activeTab === "edit" ? "" : "hidden"}" data-hero-editor-panel="edit">
          <div class="field hero-variant-select">
            <label>選擇數據呈現方式</label>
            <div class="field-help">切換後，可到「套用預覽」查看目前數據放進整站模板後的樣子。</div>
            <select data-field="variant">
              ${type.variants.map((item) => `<option value="${item.id}" ${module.variant === item.id ? "selected" : ""}>版型 ${item.id}：${item.name}｜${item.description}</option>`).join("")}
            </select>
          </div>
          <div class="hero-content-fields">
            ${renderStatsContentFields(module)}
          </div>
        </div>
        <div class="hero-preview-panel ${activeTab === "preview" ? "" : "hidden"}" data-hero-editor-panel="preview">
          <div class="module-preview-toolbar">
            <div>
              <strong>目前套用預覽</strong>
              <span>使用目前填寫的主標題、副標題與數據項目產生預覽。</span>
            </div>
          </div>
          <div class="hero-live-preview-wrap" data-hero-live-preview>
            ${renderStatsCustomerPreview(module)}
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderStatsCustomerPreview(module) {
  const variant = getVariant(module);
  const c = module.content || defaultContent(module);
  const palette = getActiveSitePalette();
  const params = new URLSearchParams({
    title: c.title || module.name,
    subtitle: c.subtitle || "",
    stat1Value: c.stat1Value || "",
    stat1Unit: c.stat1Unit || "",
    stat1Label: c.stat1Label || "",
    stat2Value: c.stat2Value || "",
    stat2Unit: c.stat2Unit || "",
    stat2Label: c.stat2Label || "",
    stat3Value: c.stat3Value || "",
    stat3Unit: c.stat3Unit || "",
    stat3Label: c.stat3Label || "",
    stat4Value: c.stat4Value || "",
    stat4Unit: c.stat4Unit || "",
    stat4Label: c.stat4Label || "",
    primary: palette.primary,
    accent: palette.accent,
    bg: palette.bg,
    surface: palette.surface,
    text: palette.text,
    muted: palette.muted
  });
  if (variant.entry) {
    return `
      <div class="hero-real-template-preview stats-real-template-preview">
        <iframe class="hero-real-preview-frame" scrolling="no" title="${esc(module.name)}版型 ${esc(variant.id)} 預覽" src="${esc(variant.entry)}?${esc(params.toString())}"></iframe>
      </div>
    `;
  }
  return `
    <div class="mini-preview">${renderVariantMiniPreview(module)}</div>
  `;
}

function renderCardsVariantWorkbench(module) {
  const type = getType(module.type);
  const activeTab = state.heroEditorTab || "edit";
  return `
    <section class="settings-card hero-workbench cards-workbench">
      <div class="section-head compact">
        <div>
          <h3>卡片內容與呈現方式</h3>
          <p>此模塊會沿用整站官網模板的色系與風格；這裡只設定卡片列表的排列方式與 4 張卡片內容。</p>
        </div>
        <div class="tabs">
          <button class="tab ${activeTab === "edit" ? "is-active" : ""}" type="button" data-hero-editor-tab="edit">呈現方式與內容</button>
          <button class="tab ${activeTab === "preview" ? "is-active" : ""}" type="button" data-hero-editor-tab="preview">套用預覽</button>
        </div>
      </div>
      <div class="hero-tab-panels">
        <div class="hero-editor-panel ${activeTab === "edit" ? "" : "hidden"}" data-hero-editor-panel="edit">
          <div class="field hero-variant-select">
            <label>選擇卡片呈現方式</label>
            <div class="field-help">切換後，可到「套用預覽」查看目前卡片內容放進整站模板後的樣子。</div>
            <select data-field="variant">
              ${type.variants.map((item) => `<option value="${item.id}" ${module.variant === item.id ? "selected" : ""}>版型 ${item.id}：${item.name}｜${item.description}</option>`).join("")}
            </select>
          </div>
          <div class="hero-content-fields">
            ${renderCardsContentFields(module)}
          </div>
        </div>
        <div class="hero-preview-panel ${activeTab === "preview" ? "" : "hidden"}" data-hero-editor-panel="preview">
          <div class="module-preview-toolbar">
            <div>
              <strong>目前套用預覽</strong>
              <span>使用目前填寫的卡片標題、說明與按鈕文字產生預覽。</span>
            </div>
          </div>
          <div class="hero-live-preview-wrap" data-hero-live-preview>
            ${renderCardsCustomerPreview(module)}
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderCardsCustomerPreview(module) {
  const variant = getVariant(module);
  const c = module.content || defaultContent(module);
  const palette = getActiveSitePalette();
  const params = new URLSearchParams({
    title: c.title || module.name,
    subtitle: c.subtitle || "",
    item1: c.item1 || "",
    item1Subtitle: c.item1Subtitle || "",
    item1LinkEnabled: c.item1LinkEnabled ? "1" : "0",
    item1LinkText: c.item1LinkText || "",
    item2: c.item2 || "",
    item2Subtitle: c.item2Subtitle || "",
    item2LinkEnabled: c.item2LinkEnabled ? "1" : "0",
    item2LinkText: c.item2LinkText || "",
    item3: c.item3 || "",
    item3Subtitle: c.item3Subtitle || "",
    item3LinkEnabled: c.item3LinkEnabled ? "1" : "0",
    item3LinkText: c.item3LinkText || "",
    item4: c.item4 || "",
    item4Subtitle: c.item4Subtitle || "",
    item4LinkEnabled: c.item4LinkEnabled ? "1" : "0",
    item4LinkText: c.item4LinkText || "",
    primary: palette.primary,
    accent: palette.accent,
    bg: palette.bg,
    surface: palette.surface,
    text: palette.text,
    muted: palette.muted
  });
  if (variant.entry) {
    return `
      <div class="hero-real-template-preview cards-real-template-preview">
        <iframe class="hero-real-preview-frame" scrolling="no" title="${esc(module.name)}版型 ${esc(variant.id)} 預覽" src="${esc(variant.entry)}?${esc(params.toString())}"></iframe>
      </div>
    `;
  }
  return `
    <div class="mini-preview">${renderVariantMiniPreview(module)}</div>
  `;
}

function renderNewsVariantWorkbench(module) {
  const type = getType(module.type);
  const activeTab = state.heroEditorTab || "edit";
  return `
    <section class="settings-card hero-workbench news-workbench">
      <div class="section-head compact">
        <div>
          <h3>新聞內容與呈現方式</h3>
          <p>此模塊會沿用整站官網模板的色系與風格；這裡先設定首頁展示用的 3 筆文章預覽。</p>
        </div>
        <div class="tabs">
          <button class="tab ${activeTab === "edit" ? "is-active" : ""}" type="button" data-hero-editor-tab="edit">呈現方式與內容</button>
          <button class="tab ${activeTab === "preview" ? "is-active" : ""}" type="button" data-hero-editor-tab="preview">套用預覽</button>
        </div>
      </div>
      <div class="hero-tab-panels">
        <div class="hero-editor-panel ${activeTab === "edit" ? "" : "hidden"}" data-hero-editor-panel="edit">
          <div class="field hero-variant-select">
            <label>選擇新聞呈現方式</label>
            <div class="field-help">切換後，可到「套用預覽」查看目前文章內容放進整站模板後的樣子。</div>
            <select data-field="variant">
              ${type.variants.map((item) => `<option value="${item.id}" ${module.variant === item.id ? "selected" : ""}>版型 ${item.id}：${item.name}｜${item.description}</option>`).join("")}
            </select>
          </div>
          <div class="hero-content-fields">
            ${renderNewsContentFields(module)}
          </div>
        </div>
        <div class="hero-preview-panel ${activeTab === "preview" ? "" : "hidden"}" data-hero-editor-panel="preview">
          <div class="module-preview-toolbar">
            <div>
              <strong>目前套用預覽</strong>
              <span>使用目前填寫的文章日期、標題與摘要產生預覽。</span>
            </div>
          </div>
          <div class="hero-live-preview-wrap" data-hero-live-preview>
            ${renderNewsCustomerPreview(module)}
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderNewsCustomerPreview(module) {
  const variant = getVariant(module);
  const c = module.content || defaultContent(module);
  const palette = getActiveSitePalette();
  const params = new URLSearchParams({
    title: c.title || module.name,
    subtitle: c.subtitle || "",
    category: c.newsCategory || "",
    cta: module.linkText || "查看更多",
    item1: c.item1 || "",
    item1Subtitle: c.item1Subtitle || "",
    item1Date: c.item1Date || "",
    item2: c.item2 || "",
    item2Subtitle: c.item2Subtitle || "",
    item2Date: c.item2Date || "",
    item3: c.item3 || "",
    item3Subtitle: c.item3Subtitle || "",
    item3Date: c.item3Date || "",
    primary: palette.primary,
    accent: palette.accent,
    bg: palette.bg,
    surface: palette.surface,
    text: palette.text,
    muted: palette.muted
  });
  if (variant.entry) {
    return `
      <div class="hero-real-template-preview news-real-template-preview">
        <iframe class="hero-real-preview-frame" scrolling="no" title="${esc(module.name)}版型 ${esc(variant.id)} 預覽" src="${esc(variant.entry)}?${esc(params.toString())}"></iframe>
      </div>
    `;
  }
  return `
    <div class="mini-preview">${renderVariantMiniPreview(module)}</div>
  `;
}

function renderFaqVariantWorkbench(module) {
  const type = getType(module.type);
  const activeTab = state.heroEditorTab || "edit";
  return `
    <section class="settings-card hero-workbench faq-workbench">
      <div class="section-head compact">
        <div>
          <h3>FAQ 內容與呈現方式</h3>
          <p>此模塊會沿用整站官網模板的色系與風格；這裡設定 4 組常見問題與答案。</p>
        </div>
        <div class="tabs">
          <button class="tab ${activeTab === "edit" ? "is-active" : ""}" type="button" data-hero-editor-tab="edit">呈現方式與內容</button>
          <button class="tab ${activeTab === "preview" ? "is-active" : ""}" type="button" data-hero-editor-tab="preview">套用預覽</button>
        </div>
      </div>
      <div class="hero-tab-panels">
        <div class="hero-editor-panel ${activeTab === "edit" ? "" : "hidden"}" data-hero-editor-panel="edit">
          <div class="field hero-variant-select">
            <label>選擇 FAQ 呈現方式</label>
            <div class="field-help">切換後，可到「套用預覽」查看目前問答放進整站模板後的樣子。</div>
            <select data-field="variant">
              ${type.variants.map((item) => `<option value="${item.id}" ${module.variant === item.id ? "selected" : ""}>版型 ${item.id}：${item.name}｜${item.description}</option>`).join("")}
            </select>
          </div>
          <div class="hero-content-fields">
            ${renderFaqContentFields(module)}
          </div>
        </div>
        <div class="hero-preview-panel ${activeTab === "preview" ? "" : "hidden"}" data-hero-editor-panel="preview">
          <div class="module-preview-toolbar">
            <div>
              <strong>目前套用預覽</strong>
              <span>使用目前填寫的問題與答案產生預覽。</span>
            </div>
          </div>
          <div class="hero-live-preview-wrap" data-hero-live-preview>
            ${renderFaqCustomerPreview(module)}
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderFaqCustomerPreview(module) {
  const variant = getVariant(module);
  const c = module.content || defaultContent(module);
  const palette = getActiveSitePalette();
  const params = new URLSearchParams({
    title: c.title || module.name,
    subtitle: c.subtitle || "",
    category: c.newsCategory || "FAQ",
    item1: c.item1 || "",
    item1Subtitle: c.item1Subtitle || "",
    item2: c.item2 || "",
    item2Subtitle: c.item2Subtitle || "",
    item3: c.item3 || "",
    item3Subtitle: c.item3Subtitle || "",
    item4: c.item4 || "",
    item4Subtitle: c.item4Subtitle || "",
    primary: palette.primary,
    accent: palette.accent,
    bg: palette.bg,
    surface: palette.surface,
    text: palette.text,
    muted: palette.muted
  });
  if (variant.entry) {
    return `
      <div class="hero-real-template-preview faq-real-template-preview">
        <iframe class="hero-real-preview-frame" scrolling="no" title="${esc(module.name)}版型 ${esc(variant.id)} 預覽" src="${esc(variant.entry)}?${esc(params.toString())}"></iframe>
      </div>
    `;
  }
  return `<div class="mini-preview">${renderVariantMiniPreview(module)}</div>`;
}

function renderHeroContentFields(module) {
  const c = module.content || defaultContent(module);
  module.content = c;
  return `
    <div class="hero-single-settings">
      <div class="field-grid">
        <div class="field">
          <label>主標題 <span class="required">必填</span></label>
          <input type="text" required value="${esc(c.title)}" data-content-field="title">
        </div>
        <div class="field">
          <label>副標題 <span class="optional">可不填</span></label>
          <input type="text" value="${esc(c.subtitle)}" data-content-field="subtitle">
        </div>
      </div>
      <div class="field">
        <label>上傳主圖</label>
        ${renderImagePicker(module)}
      </div>
    </div>
  `;
}

function renderIntroContentFields(module) {
  const c = module.content || defaultContent(module);
  module.content = c;
  return `
    <div class="hero-single-settings">
      <div class="field-grid">
        <div class="field">
          <label>主標題 <span class="required">必填</span></label>
          <input type="text" required value="${esc(c.title)}" data-content-field="title">
        </div>
        <div class="field">
          <label>副標題 <span class="optional">可不填</span></label>
          <input type="text" value="${esc(c.subtitle)}" data-content-field="subtitle">
        </div>
      </div>
      <div class="field">
        <label>上傳主圖</label>
        ${renderImagePicker(module)}
      </div>
    </div>
  `;
}

function renderStatsContentFields(module) {
  const c = module.content || defaultContent(module);
  module.content = c;
  const rows = [1, 2, 3, 4].map((index) => `
    <div class="stat-input-row">
      <div class="field stat-number-field">
        <label>數據 ${index} 數字 <span class="required">必填</span></label>
        <input type="text" required value="${esc(c[`stat${index}Value`] || "")}" data-content-field="stat${index}Value">
      </div>
      <div class="field stat-unit-field">
        <label>單位 <span class="optional">可不填</span></label>
        <input type="text" value="${esc(c[`stat${index}Unit`] || "")}" data-content-field="stat${index}Unit">
      </div>
      <div class="field">
        <label>說明 <span class="required">必填</span></label>
        <input type="text" required value="${esc(c[`stat${index}Label`] || "")}" data-content-field="stat${index}Label">
      </div>
    </div>
  `).join("");
  return `
    <div class="hero-single-settings stats-single-settings">
      <div class="field-grid">
        <div class="field">
          <label>主標題 <span class="required">必填</span></label>
          <input type="text" required value="${esc(c.title)}" data-content-field="title">
        </div>
        <div class="field">
          <label>副標題 <span class="optional">可不填</span></label>
          <input type="text" value="${esc(c.subtitle)}" data-content-field="subtitle">
        </div>
      </div>
      <div class="stats-input-list">
        ${rows}
      </div>
    </div>
  `;
}

function renderCardsContentFields(module) {
  const c = module.content || defaultContent(module);
  module.content = c;
  const rows = [1, 2, 3, 4].map((index) => `
    <div class="card-input-row">
      <div class="field">
        <label>卡片 ${index} 標題 <span class="required">必填</span></label>
        <input type="text" required value="${esc(c[`item${index}`] || "")}" data-content-field="item${index}">
      </div>
      <div class="field">
        <label>卡片 ${index} 說明 <span class="optional">可不填</span></label>
        <input type="text" value="${esc(c[`item${index}Subtitle`] || "")}" data-content-field="item${index}Subtitle">
      </div>
      <div class="field card-link-field">
        <label class="check-line card-link-toggle">
          <input type="checkbox" ${c[`item${index}LinkEnabled`] ? "checked" : ""} data-content-field="item${index}LinkEnabled">
          顯示按鈕
        </label>
        ${c[`item${index}LinkEnabled`] ? `
          <input class="card-link-input" type="text" required value="${esc(c[`item${index}LinkText`] || "查看更多")}" data-content-field="item${index}LinkText" aria-label="卡片 ${index} 按鈕文字" placeholder="按鈕文字（必填）">
        ` : `<span class="field-help card-link-help">未勾選，不顯示按鈕，也不需要輸入文字。</span>`}
      </div>
    </div>
  `).join("");
  return `
    <div class="hero-single-settings cards-single-settings">
      <div class="field-grid">
        <div class="field">
          <label>主標題 <span class="required">必填</span></label>
          <input type="text" required value="${esc(c.title)}" data-content-field="title">
        </div>
        <div class="field">
          <label>副標題 <span class="optional">可不填</span></label>
          <input type="text" value="${esc(c.subtitle)}" data-content-field="subtitle">
        </div>
      </div>
      <div class="cards-input-list">
        ${rows}
      </div>
    </div>
  `;
}

function renderNewsContentFields(module) {
  const c = module.content || defaultContent(module);
  module.content = c;
  const rows = [1, 2, 3].map((index) => `
    <div class="news-input-row">
      <div class="field news-date-field">
        <label>文章 ${index} 日期 <span class="optional">可不填</span></label>
        <input type="text" value="${esc(c[`item${index}Date`] || "")}" data-content-field="item${index}Date" placeholder="2026.07.17">
      </div>
      <div class="field">
        <label>文章 ${index} 標題 <span class="required">必填</span></label>
        <input type="text" required value="${esc(c[`item${index}`] || "")}" data-content-field="item${index}">
      </div>
      <div class="field">
        <label>文章 ${index} 摘要 <span class="optional">可不填</span></label>
        <input type="text" value="${esc(c[`item${index}Subtitle`] || "")}" data-content-field="item${index}Subtitle">
      </div>
    </div>
  `).join("");
  return `
    <div class="hero-single-settings news-single-settings">
      <div class="field-grid">
        <div class="field">
          <label>區塊標題 <span class="required">必填</span></label>
          <input type="text" required value="${esc(c.title)}" data-content-field="title">
        </div>
        <div class="field">
          <label>副標題 <span class="optional">可不填</span></label>
          <input type="text" value="${esc(c.subtitle)}" data-content-field="subtitle">
        </div>
        <div class="field">
          <label>分類顯示文字 <span class="optional">可不填</span></label>
          <input type="text" value="${esc(c.newsCategory || "")}" data-content-field="newsCategory" placeholder="LATEST NEWS">
        </div>
        <div class="field">
          <label>查看更多按鈕文字 <span class="optional">可不填</span></label>
          <input type="text" value="${esc(module.linkText || "")}" data-field="linkText">
        </div>
      </div>
      <div class="news-input-list">
        ${rows}
      </div>
    </div>
  `;
}

function renderFaqContentFields(module) {
  const c = module.content || defaultContent(module);
  module.content = c;
  const rows = [1, 2, 3, 4].map((index) => `
    <div class="faq-input-row">
      <div class="field">
        <label>問題 ${index} <span class="required">必填</span></label>
        <input type="text" required value="${esc(c[`item${index}`] || "")}" data-content-field="item${index}">
      </div>
      <div class="field">
        <label>答案 ${index} <span class="optional">可不填</span></label>
        <input type="text" value="${esc(c[`item${index}Subtitle`] || "")}" data-content-field="item${index}Subtitle">
      </div>
    </div>
  `).join("");
  return `
    <div class="hero-single-settings faq-single-settings">
      <div class="field-grid">
        <div class="field">
          <label>區塊標題 <span class="required">必填</span></label>
          <input type="text" required value="${esc(c.title)}" data-content-field="title">
        </div>
        <div class="field">
          <label>副標題 <span class="optional">可不填</span></label>
          <input type="text" value="${esc(c.subtitle)}" data-content-field="subtitle">
        </div>
        <div class="field">
          <label>分類顯示文字 <span class="optional">可不填</span></label>
          <input type="text" value="${esc(c.newsCategory || "FAQ")}" data-content-field="newsCategory">
        </div>
      </div>
      <div class="faq-input-list">
        ${rows}
      </div>
    </div>
  `;
}

function renderImagePicker(module) {
  const fileName = module.content?.imageFileName || "";
  return `
    <label class="upload-placeholder image-upload">
      <strong>選擇主圖</strong>
      <span>${esc(fileName || "尚未選擇圖片")}</span>
      <input type="file" accept="image/png,image/jpeg,image/webp,image/gif,.png,.jpg,.jpeg,.webp,.gif" data-image-picker>
    </label>
  `;
}

function renderContentFields(module) {
  const c = module.content || defaultContent(module);
  module.content = c;
  const common = `
    <div class="content-field-stack">
      <div class="field-grid">
        <div class="field">
          <label>主標題 <span class="required">必填</span></label>
          <input type="text" required value="${esc(c.title)}" data-content-field="title">
        </div>
        <div class="field">
          <label>副標題 <span class="optional">可不填</span></label>
          <input type="text" value="${esc(c.subtitle)}" data-content-field="subtitle">
        </div>
      </div>
      <div class="field-grid upload-field-grid">
        <div class="field">
          <label>底圖 / 圖片描述</label>
          <input type="text" value="${esc(c.imageLabel)}" data-content-field="imageLabel">
        </div>
        <div class="field">
          <label>上傳檔案</label>
          ${renderFolderPicker(module)}
        </div>
      </div>
    </div>
  `;

  if (["cards", "news", "steps", "faq", "stats"].includes(module.type)) {
    return `
      ${common}
      <div class="item-field-list">
        ${[1, 2, 3].map((index) => `
          <div class="item-field-row">
            <div class="field">
              <label>項目 ${index} 主標題 <span class="required">必填</span></label>
              <input type="text" value="${esc(c[`item${index}`])}" data-content-field="item${index}">
            </div>
            <div class="field">
              <label>項目 ${index} 副標題 <span class="optional">可不填</span></label>
              <input type="text" value="${esc(c[`item${index}Subtitle`] || "")}" data-content-field="item${index}Subtitle">
            </div>
          </div>
        `).join("")}
      </div>
    `;
  }

  return common;
}

function renderFolderPicker(module) {
  const files = module.content?.folderFiles || [];
  return `
    <label class="upload-placeholder">
      <strong>選擇檔案</strong>
      <span>${files.length ? `已選擇 ${files.length} 個檔案` : "尚未選擇檔案"}</span>
      <input type="file" webkitdirectory directory multiple data-folder-picker>
      ${files.length ? `
        <div class="file-list">
          ${files.slice(0, 4).map((file) => `<span>${esc(file)}</span>`).join("")}
          ${files.length > 4 ? `<span>還有 ${files.length - 4} 個檔案...</span>` : ""}
        </div>
      ` : ""}
    </label>
  `;
}

function renderLinkSettings(module) {
  if (isMultiItemModule(module)) {
    module.content = module.content || defaultContent(module);
    return `
      <p class="field-help">此模塊有多個內容項目，可分別設定每個項目的頁面連結。</p>
      <div class="item-link-list">
        ${[1, 2, 3].map((index) => `
          <section class="item-link-row">
            <label class="check-line">
              <input type="checkbox" ${module.content[`item${index}LinkEnabled`] ? "checked" : ""} data-content-field="item${index}LinkEnabled">
              項目 ${index} 需要頁面連結
            </label>
            <div class="field-grid">
              <div class="field">
                <label>項目 ${index} 連結文字</label>
                <input type="text" value="${esc(module.content[`item${index}LinkText`] || "查看更多")}" data-content-field="item${index}LinkText">
              </div>
              <div class="field">
                <label>項目 ${index} 連結目標</label>
                <select data-content-field="item${index}LinkTarget">
                  ${linkTargetOptions(module.content[`item${index}LinkTarget`])}
                </select>
              </div>
            </div>
          </section>
        `).join("")}
      </div>
    `;
  }

  return `
    <label class="check-line"><input type="checkbox" ${module.linkEnabled ? "checked" : ""} data-field="linkEnabled"> 這個模塊需要放頁面連結</label>
    ${module.linkEnabled ? `
      <div class="field-grid">
        <div class="field">
          <label>連結顯示文字</label>
          <div class="field-help">例如「查看更多」「加入 LINE」「查看全部消息」。</div>
          <input type="text" value="${esc(module.linkText)}" data-field="linkText">
        </div>
        <div class="field">
          <label>連結目標</label>
          <div class="field-help">可選站內頁、LINE 導流或外部連結。</div>
          <select data-field="linkTarget">
            ${linkTargetOptions(module.linkTarget)}
          </select>
        </div>
      </div>
    ` : `<p>目前不顯示頁面連結。</p>`}
  `;
}

function renderVariantMiniPreview(module) {
  const isB = module.variant === "B";
  const variant = getVariant(module);
  if (variant.entry) {
    return `
      <div class="mini-preview module-layout-preview">
        <div class="module-preview-toolbar">
          <div>
            <strong>版型 ${esc(variant.id)}：${esc(variant.name)}</strong>
            <span>${esc(variant.description)}</span>
          </div>
        </div>
        <div class="module-real-preview">
          <iframe class="module-preview-frame" title="${esc(module.name)}版型 ${esc(variant.id)} 預覽" src="${esc(variant.entry)}"></iframe>
          <img src="${esc(variant.thumbnail || "")}" alt="${esc(variant.name)}預覽備援圖">
        </div>
      </div>
    `;
  }
  const c = module.content || defaultContent(module);
  const button = module.linkEnabled ? `<span class="mini-button">${esc(module.linkText || "查看更多")}</span>` : "";
  const copy = `
    <div class="mini-copy">
      <strong>${esc(c.title || module.name)}</strong>
      <span>${esc(c.subtitle || "範例副標題")}</span>
      <small>${esc(c.description || "這裡會顯示此模塊的簡短說明。")}</small>
      ${button}
    </div>
  `;
  const image = `<div class="mini-image">${esc(c.imageLabel || "圖片")}</div>`;

  if (module.type === "hero") {
    return `<div class="mini-preview"><div class="mini-hero ${isB ? "layout-b" : ""}">${isB ? `${image}${copy}` : `${copy}${image}`}</div><p>${isB ? "版型 B：圖片在左，文字在右。" : "版型 A：文字在左，主視覺在右。"}</p></div>`;
  }
  if (module.type === "intro" || module.type === "cta") {
    return `<div class="mini-preview"><div class="mini-split ${isB ? "layout-b" : ""}">${isB ? `${copy}${image}` : `${image}${copy}`}</div><p>${isB ? "版型 B：文字在左、圖片在右。" : "版型 A：圖片在左、文字在右。"}</p></div>`;
  }
  if (module.type === "news" || module.type === "steps" || module.type === "faq") {
    const items = [c.item1, c.item2, c.item3].map((item, index) => esc(item || `內容項目 ${index + 1}`));
    return `<div class="mini-preview"><div class="${isB ? "mini-grid" : "mini-list"}">${isB ? items.map((item) => `<div class="mini-card"><strong>${item}</strong><span>範例摘要</span>${button}</div>`).join("") : items.map((item) => `<div class="mini-row"><strong>${item}</strong>${button}</div>`).join("")}</div><p>${isB ? "版型 B：卡片或表格式呈現，按鈕固定在項目下方。" : "版型 A：列表或手風琴式呈現，按鈕固定在列尾或列表下方。"}</p></div>`;
  }
  const items = [c.item1, c.item2, c.item3, "內容項目 4"].slice(0, isB ? 4 : 3);
  return `<div class="mini-preview"><div class="mini-grid ${isB ? "layout-b" : ""}">${items.map((item) => `<div class="mini-card"><strong>${esc(item)}</strong><span>${esc(c.imageLabel || "圖片")}</span>${button}</div>`).join("")}</div><p>${isB ? "版型 B：四欄網格，按鈕固定在卡片底部。" : "版型 A：三欄卡片，按鈕固定在卡片底部。"}</p></div>`;
}

function updateField(module, input) {
  const key = input.dataset.field;
  module[key] = input.type === "checkbox" ? input.checked : input.value;
  if (key === "type") {
    module.variant = "A";
    module.content = {
      ...defaultContent(module),
      title: module.content?.title || module.name
    };
  }
  markDirty();
  render();
}

function updateContentField(module, input) {
  module.content = module.content || defaultContent(module);
  const key = input.dataset.contentField;
  module.content[key] = input.type === "checkbox" ? input.checked : input.value;
  markDirty();
  if (key.endsWith("LinkEnabled")) {
    render();
    return;
  }
  renderModuleList();
  updateHeroLivePreview(module);
  updateActiveModuleSaveStatus(module);
  updateSaveState();
}

function updateHeroLivePreview(module) {
  if (module.type !== "hero" && module.type !== "intro" && module.type !== "stats" && module.type !== "cards" && module.type !== "news" && module.type !== "faq") return;
  const preview = els.settingsRoot.querySelector("[data-hero-live-preview]");
  if (!preview) return;
  if (module.type === "intro") {
    preview.innerHTML = renderIntroCustomerPreview(module);
    return;
  }
  if (module.type === "stats") {
    preview.innerHTML = renderStatsCustomerPreview(module);
    return;
  }
  if (module.type === "cards") {
    preview.innerHTML = renderCardsCustomerPreview(module);
    return;
  }
  if (module.type === "news") {
    preview.innerHTML = renderNewsCustomerPreview(module);
    return;
  }
  if (module.type === "faq") {
    preview.innerHTML = renderFaqCustomerPreview(module);
    return;
  }
  preview.innerHTML = renderHeroCustomerPreview(module);
}

function updateFolderFiles(module, input) {
  module.content = module.content || defaultContent(module);
  const files = Array.from(input.files || []);
  module.content.folderFiles = files.map((file) => file.webkitRelativePath || file.name);
  if (files[0]) {
    const firstPath = files[0].webkitRelativePath || files[0].name;
    const folderName = firstPath.includes("/") ? firstPath.split("/")[0] : "已選擇圖片資料夾";
    module.content.imageLabel = folderName;
  }
  markDirty();
  renderModuleList();
  renderSettings();
  updateSaveState();
}

function updateImageFile(module, input) {
  module.content = module.content || defaultContent(module);
  const file = input.files?.[0];
  module.content.imageFileName = file?.name || "";
  module.content.imagePreviewUrl = "";
  module.content.imagePreviewKey = "";

  if (!file) {
    markDirty();
    renderModuleList();
    renderSettings();
    updateSaveState();
    return;
  }

  const allowedTypes = ["image/png", "image/jpeg", "image/webp", "image/gif"];
  if (!allowedTypes.includes(file.type)) {
    input.value = "";
    module.content.imageFileName = "";
    alert("請上傳 PNG、JPG、JPEG、WebP 或 GIF 圖片。");
    renderSettings();
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    const imageUrl = String(reader.result || "");
    const storageKey = `module-preview-image-${module.id}`;
    module.content.imagePreviewUrl = imageUrl;
    module.content.imagePreviewKey = storageKey;
    try {
      sessionStorage.setItem(storageKey, imageUrl);
    } catch (error) {
      module.content.imagePreviewKey = "";
    }
    markDirty();
    renderModuleList();
    renderSettings();
    updateSaveState();
  };
  reader.readAsDataURL(file);
}

function saveDraft() {
  state.savedModules = clone(state.draftModules);
  state.isDirty = false;
  render();
}

function updateSaveState() {
  els.saveBtn.classList.toggle("unsaved", state.isDirty);
  els.saveBtn.classList.toggle("primary", !state.isDirty);
  els.saveBtn.textContent = state.isDirty ? "儲存變更" : "已儲存";
}

function expandFrontPreviewFrames() {
  const getPreviewFrames = () => [
    ...els.previewRoot.querySelectorAll(".front-live-module iframe"),
    ...els.settingsRoot.querySelectorAll(".hero-real-preview-frame")
  ];

  if (!window.__frontPreviewHeightListener) {
    window.__frontPreviewHeightListener = true;
    window.addEventListener("message", (event) => {
      if (event.data?.type !== "front-preview-height") return;
      const frame = getPreviewFrames()
        .find((item) => item.contentWindow === event.source);
      const height = Number(event.data.height);
      if (!frame || !Number.isFinite(height) || height <= 0) return;
      const expandedHeight = Math.ceil(height);
      frame.style.height = `${expandedHeight}px`;
      if (frame.parentElement) frame.parentElement.style.height = `${expandedHeight}px`;
    });
  }
  getPreviewFrames().forEach((frame) => {
    const moduleClass = [...(frame.closest(".front-live-module")?.classList || [])]
      .find((name) => name.startsWith("front-live-module-"));
    const minimumHeight = 320;
    const resize = () => {
      try {
        const documentRoot = frame.contentDocument?.documentElement;
        const documentBody = frame.contentDocument?.body;
        const documentHeight = Math.max(
          documentBody?.scrollHeight || 0,
          documentRoot?.scrollHeight || 0,
          documentBody?.offsetHeight || 0,
          documentRoot?.offsetHeight || 0
        );
        const expandedHeight = Math.max(documentHeight, minimumHeight);
        if (expandedHeight > 0) {
          frame.style.height = `${expandedHeight}px`;
          if (frame.parentElement) frame.parentElement.style.height = `${expandedHeight}px`;
        }
      } catch (error) {
        frame.style.height = `${minimumHeight}px`;
        if (frame.parentElement) frame.parentElement.style.height = `${minimumHeight}px`;
      }
    };
    frame.addEventListener("load", () => {
      try {
        const documentStyle = frame.contentDocument?.createElement("style");
        if (documentStyle) {
          documentStyle.textContent = `
            html, body {
              height: auto !important;
              min-height: 0 !important;
              overflow: visible !important;
              scrollbar-width: none !important;
            }
            html::-webkit-scrollbar,
            body::-webkit-scrollbar {
              display: none !important;
            }
            .h-screen {
              height: auto !important;
            }
            .min-h-screen {
              min-height: 0 !important;
            }
          `;
          frame.contentDocument.head?.appendChild(documentStyle);
        }
      } catch (error) {
        // Some preview documents can be sandboxed; the outer frame still gets resized below.
      }
      // Measure from a collapsed viewport so 100vh-based template rules cannot create a circular height.
      frame.style.height = "1px";
      if (frame.parentElement) frame.parentElement.style.height = "1px";
      requestAnimationFrame(() => {
        resize();
        requestAnimationFrame(resize);
        requestAnimationFrame(() => requestAnimationFrame(resize));
      });
      frame.contentDocument?.querySelectorAll("img").forEach((image) => {
        image.addEventListener("load", resize, { once: true });
      });
    }, { once: true });
    resize();
  });
}

function renderPreview() {
  const template = getActiveSiteTemplate();
  const palette = getActiveSitePalette();
  const previewVars = {
    "--bg": palette.bg,
    "--panel": palette.surface,
    "--text": palette.text,
    "--muted": palette.muted,
    "--brand": palette.primary,
    "--brand-dark": palette.text,
    "--green": palette.accent,
    "--soft": palette.bg,
    "--preview-primary": palette.primary,
    "--preview-accent": palette.accent,
    "--preview-bg": palette.bg,
    "--preview-surface": palette.surface,
    "--preview-text": palette.text,
    "--preview-muted": palette.muted
  };
  Object.entries(previewVars).forEach(([name, value]) => els.previewPanel.style.setProperty(name, value));
  els.previewPanel.dataset.siteTemplate = template.id;
  els.previewPanel.className = `panel preview-panel site-template-${template.id}`;
  const previewTitle = els.previewPanel.querySelector(".panel-head h1");
  const previewDescription = els.previewPanel.querySelector(".panel-head p");
  if (previewTitle) previewTitle.textContent = `${template.name}｜${palette.name} 即時預覽`;
  if (previewDescription) previewDescription.textContent = "品牌樣式、首頁模塊與前台頁面會同步套用目前的編輯內容。";
  const previewCandidate = state.pages.find((item) => item.id === state.activePreviewPageId);
  const isEditingCandidate = previewCandidate?.id === state.activePageId && state.pageMode === "edit";
  const page = previewCandidate && (isEditingCandidate || (previewCandidate.status === "已發布" && previewCandidate.visible !== "尚未顯示"))
    ? previewCandidate
    : null;
  if (!page) state.activePreviewPageId = "";
  renderSiteNav();
  if (page) {
    els.previewRoot.innerHTML = renderPreviewPage(page);
  } else {
    const html = draftModules()
      .filter((module) => module.enabled)
      .map(renderPreviewModule)
      .join("");
    els.previewRoot.innerHTML = html || `<section class="home-section"><p>目前沒有顯示中的首頁模塊。</p></section>`;
  }
  expandFrontPreviewFrames();

  els.siteNav.querySelectorAll("[data-preview-page]").forEach((button) => {
    button.addEventListener("click", () => {
      state.activePreviewPageId = button.dataset.previewPage;
      if (state.activePreviewPageId) state.activePageId = state.activePreviewPageId;
      render();
    });
  });
}

function navPages() {
  return orderedPages().filter((page) => page.status === "已發布" && page.visible.includes("主選單"));
}

function renderSiteNav() {
  const pages = navPages();
  const topPages = pages.filter((page) => !page.parentId);
  const childPages = pages.filter((page) => page.parentId);
  els.siteNav.innerHTML = `
    <button class="site-brand ${state.activePreviewPageId ? "" : "is-active"}" type="button" data-preview-page="">利每家</button>
    <div class="site-links">
      ${topPages.map((page) => {
        const children = childPages.filter((child) => child.parentId === page.id);
        return `
          <div class="site-nav-group">
            <button class="site-nav-link ${state.activePreviewPageId === page.id ? "is-active" : ""}" type="button" data-preview-page="${page.id}">${esc(page.name)}</button>
            ${children.length ? `
              <div class="site-subnav">
                ${children.map((child) => `<button class="site-nav-link child ${state.activePreviewPageId === child.id ? "is-active" : ""}" type="button" data-preview-page="${child.id}">${esc(child.name)}</button>`).join("")}
              </div>
            ` : ""}
          </div>
        `;
      }).join("")}
      ${state.pages.filter((page) => page.status === "已發布" && page.visible === "CTA").map((page) => `<button class="site-nav-link ${state.activePreviewPageId === page.id ? "is-active" : ""}" type="button" data-preview-page="${page.id}">${esc(page.name)}</button>`).join("")}
    </div>
  `;
}

function renderPreviewPage(page) {
  const template = getPageTemplate(page.template);
  const isB = page.layout === "B";
  const title = esc(page.content?.field0 || page.name);
  const intro = esc(page.content?.field1 || template.description);
  const fields = template.fields.map((field, index) => esc(page.content?.[`field${index}`] || field));

  if (["article", "case", "service"].includes(page.template)) {
    return `
      <section class="home-section page-hero">
        <div>
          <div class="eyebrow">${esc(template.name)}｜方案 ${esc(page.layout)}</div>
          <h2>${title}</h2>
          <p>${intro}</p>
        </div>
      </section>
      <section class="home-section">
        ${isB ? `
          <div class="list">
            ${fields.slice(2).map((item, index) => `<article class="list-row"><strong>${item}</strong><span>${page.template === "service" ? "服務項目" : "內容項目"} ${index + 1}</span></article>`).join("")}
          </div>
        ` : `
          <div class="grid">
            ${fields.slice(2).map((item, index) => `<article class="card"><div class="card-thumb">${esc(template.name)} ${index + 1}</div><h3>${item}</h3><p>${page.template === "article" ? "文章列表摘要" : page.template === "case" ? "案例卡片摘要" : "服務介紹摘要"}。</p></article>`).join("")}
          </div>
        `}
      </section>
    `;
  }

  if (page.template === "contact") {
    return `
      <section class="home-section cta">
        <div>
          <div class="eyebrow">${esc(template.name)}｜方案 ${esc(page.layout)}</div>
          <h2>${title}</h2>
          <p>${intro}</p>
        </div>
        <a class="secondary-link" href="#">${esc(fields[4] || "LINE 諮詢")}</a>
      </section>
      <section class="home-section">
        <div class="grid">
          ${fields.slice(2, 5).map((item) => `<article class="card"><h3>${item}</h3><p>聯絡資料欄位會依照後台內容顯示。</p></article>`).join("")}
        </div>
      </section>
    `;
  }

  return `
    <section class="home-section">
      <div class="split ${isB ? "layout-b" : ""}">
        <div>
          <div class="eyebrow">${esc(template.name)}｜方案 ${esc(page.layout)}</div>
          <h2>${title}</h2>
          <p>${intro}</p>
          <div class="page-content-stack">
            ${fields.slice(2).map((item) => `<p><strong>${item}</strong></p>`).join("")}
          </div>
        </div>
        <div class="visual"><div><strong>${title}</strong><span>${esc(template.name)}</span></div></div>
      </div>
    </section>
  `;
}

function renderPreviewModule(module) {
  const type = getType(module.type);
  const variant = getVariant(module);
  const isB = variant.id === "B";
  const content = module.content || defaultContent(module);
  const title = esc(content.title || module.name);
  const subtitle = esc(content.subtitle || "");
  const desc = esc(content.description || `${type.description} 目前使用版型 ${variant.id}：${variant.name}。`);
  const imageLabel = esc(content.imageLabel || "上傳圖片 / 底圖");
  const items = [content.item1, content.item2, content.item3].map((item, index) => esc(item || `內容項目 ${index + 1}`));
  const eyebrow = `${esc(type.name)} ${variantPill(module)}`;
  const liveTemplateRenderers = {
    hero: renderHeroCustomerPreview,
    intro: renderIntroCustomerPreview,
    stats: renderStatsCustomerPreview,
    cards: renderCardsCustomerPreview,
    news: renderNewsCustomerPreview,
    faq: renderFaqCustomerPreview
  };
  const liveTemplateRenderer = liveTemplateRenderers[module.type];
  if (liveTemplateRenderer && variant.entry) {
    return `<section class="home-section front-live-module front-live-module-${esc(module.type)}">${liveTemplateRenderer(module)}</section>`;
  }

  if (module.type === "hero") {
    return `
      <section class="home-section hero ${isB ? "layout-b" : ""}">
        <div>
          <div class="eyebrow">${eyebrow}</div>
          <h2>${title}</h2>
          <p>${subtitle ? `${subtitle}｜` : ""}${desc}</p>
          ${link(module, "primary-link")}
        </div>
        <div class="visual"><div><strong>${imageLabel}</strong><span>${isB ? "產品主圖" : "大背景主視覺"}</span></div></div>
      </section>
    `;
  }

  if (module.type === "intro") {
    return `
      <section class="home-section">
        <div class="split ${isB ? "layout-b" : ""}">
          <div class="visual"><div><strong>${imageLabel}</strong><span>${isB ? "右側圖片" : "左側圖片"}</span></div></div>
          <div>
            <div class="eyebrow">${eyebrow}</div>
            <h2>${title}</h2>
            <p>${subtitle ? `${subtitle}｜` : ""}${desc}</p>
            <div style="margin-top:16px;">${link(module)}</div>
          </div>
        </div>
      </section>
    `;
  }

  if (module.type === "news") {
    return `
      <section class="home-section">
        <div class="section-title"><div><div class="eyebrow">${eyebrow}</div><h2>${title}</h2><p>${desc}</p></div></div>
        ${isB ? `
          <div class="grid">
            ${items.map((item, index) => `<article class="card"><div class="card-thumb">${imageLabel}</div><h3>${item}</h3><p>${esc(content[`item${index + 1}Subtitle`] || "三欄新聞卡。")}</p>${itemLink(content, index + 1)}</article>`).join("")}
          </div>
        ` : `
          <div class="list">
            ${items.map((item, index) => `<article class="list-row"><strong>${item}</strong><span>${esc(content[`item${index + 1}Subtitle`] || "左標題右新聞")}</span>${itemLink(content, index + 1)}</article>`).join("")}
          </div>
        `}
      </section>
    `;
  }

  if (module.type === "steps") {
    return `
      <section class="home-section">
        <div class="section-title"><div><div class="eyebrow">${eyebrow}</div><h2>${title}</h2><p>${desc}</p></div></div>
        ${isB ? `
          <div class="list">
            ${items.map((item, index) => `<article class="list-row"><strong>0${index + 1} ${item}</strong><span>${esc(content[`item${index + 1}Subtitle`] || "垂直時間軸")}</span>${itemLink(content, index + 1)}</article>`).join("")}
          </div>
        ` : `
          <div class="grid">
            ${items.map((item, index) => `<article class="card"><h3>0${index + 1} ${item}</h3><p>${esc(content[`item${index + 1}Subtitle`] || "橫向三步驟。")}</p>${itemLink(content, index + 1)}</article>`).join("")}
          </div>
        `}
      </section>
    `;
  }

  if (module.type === "faq") {
    return `
      <section class="home-section">
        <div class="section-title"><div><div class="eyebrow">${eyebrow}</div><h2>${title}</h2><p>${desc}</p></div></div>
        ${isB ? `
          <table class="faq-table">
            <tbody>
              <tr><th>產品規格</th><td>${items[0]}</td><td>分類表格式。</td></tr>
              <tr><th>合作問答</th><td>${items[1]}</td><td>分類表格式。</td></tr>
            </tbody>
          </table>
        ` : `
          <div class="list">
            ${items.slice(0, 3).map((item, index) => `<article class="faq-row"><h3>${item}</h3><p>${esc(content[`item${index + 1}Subtitle`] || "手風琴問答示意。")}</p>${itemLink(content, index + 1)}</article>`).join("")}
          </div>
        `}
      </section>
    `;
  }

  if (module.type === "cta") {
    if (isB) {
      return `
        <section class="home-section">
          <div class="split layout-b">
            <div>
              <div class="eyebrow">${eyebrow}</div>
              <h2>${title}</h2>
              <p>${subtitle ? `${subtitle}｜` : ""}${desc}</p>
              <div style="margin-top:16px;">${link(module)}</div>
            </div>
            <div class="visual"><div><strong>${imageLabel}</strong><span>合作或活動入口圖</span></div></div>
          </div>
        </section>
      `;
    }
    return `
      <section class="home-section cta">
        <div><h2>${title} ${variantPill(module)}</h2><p>${subtitle ? `${subtitle}｜` : ""}${desc}</p></div>
        ${link(module, "secondary-link")}
      </section>
    `;
  }

  if (module.type === "stats") {
    return `
      <section class="home-section">
        <div class="section-title"><div><div class="eyebrow">${eyebrow}</div><h2>${title}</h2><p>${desc}</p></div></div>
        <div class="grid ${isB ? "layout-b" : ""}">
          ${[...items, "ESG 減塑"].slice(0, isB ? 4 : 3).map((item, index) => `<article class="card"><h3>${item}</h3><p>${esc(content[`item${index + 1}Subtitle`] || "數據亮點示意。")}</p>${index < 3 ? itemLink(content, index + 1) : ""}</article>`).join("")}
        </div>
      </section>
    `;
  }

  return `
    <section class="home-section">
      <div class="section-title"><div><div class="eyebrow">${eyebrow}</div><h2>${title}</h2><p>${desc}</p></div></div>
      <div class="grid ${isB ? "layout-b" : ""}">
        ${[...items, "內容項目 4"].slice(0, isB ? 4 : 3).map((item, index) => `<article class="card"><div class="card-thumb">${imageLabel} ${index + 1}</div><h3>${item}</h3><p>${esc(content[`item${index + 1}Subtitle`] || (isB ? "四欄網格卡。" : "三欄大圖卡。"))}</p>${index < 3 ? itemLink(content, index + 1) : ""}</article>`).join("")}
      </div>
    </section>
  `;
}

function setView(view) {
  state.view = view;
  document.querySelectorAll("[data-view]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.view === view);
  });
  els.workspace.classList.toggle("preview-only", view === "preview");
  els.workspace.classList.toggle("admin-only", view === "admin");
  els.previewPanel.classList.toggle("hidden", view === "admin");
  els.adminPanel.classList.toggle("hidden", view === "preview");
}

function managerHeader(title, description, actions = []) {
  return `
    <div class="manager-head">
      <div>
        <h2>${esc(title)}</h2>
        <p>${esc(description)}</p>
      </div>
      <div class="actions">
        ${actions.map((item) => `<button class="btn" type="button">${esc(item)}</button>`).join("")}
      </div>
    </div>
  `;
}

function simpleTable(headers, rows) {
  return `
    <table class="admin-table">
      <thead><tr>${headers.map((item) => `<th>${esc(item)}</th>`).join("")}</tr></thead>
      <tbody>
        ${rows.map((row) => `<tr>${row.map((item) => `<td>${esc(item)}</td>`).join("")}</tr>`).join("")}
      </tbody>
    </table>
  `;
}

const opsPageConfig = {
  contactRecords: {
    title: "聯絡表單紀錄管理",
    description: "管理前台表單送出的聯絡、預約與合作洽詢紀錄，方便分派與追蹤處理狀態。",
    addLabel: "新增紀錄",
    searchPlaceholder: "搜尋姓名、聯絡方式、來源或需求",
    typeLabel: "詢問類型",
    typeOptions: ["聯絡詢問", "預約諮詢", "合作洽詢", "一般留言"],
    statusOptions: ["待處理", "已回覆", "追蹤中", "已結案"],
    rowsKey: "contactRecords",
    dateKey: "createdAt",
    columns: ["姓名 / 聯絡方式", "類型", "來源 / 需求", "狀態", "操作"]
  },
  supportMessages: {
    title: "客服訊息管理",
    description: "集中管理 LINE、Email、網站留言等客服訊息，追蹤是否已回覆與後續處理備註。",
    addLabel: "新增訊息",
    searchPlaceholder: "搜尋姓名、渠道、主旨或訊息",
    typeLabel: "訊息渠道",
    typeOptions: ["LINE", "網站留言", "Email", "電話"],
    statusOptions: ["待回覆", "處理中", "已回覆", "已結案"],
    rowsKey: "supportMessages",
    dateKey: "updatedAt",
    columns: ["姓名 / 渠道", "主旨", "最後訊息", "狀態", "操作"]
  }
};

function createOpsRecord(kind) {
  const config = opsPageConfig[kind];
  const count = state[config.rowsKey].length + 1;
  if (kind === "contactRecords") {
    return {
      id: `contact-${Date.now()}`,
      name: `新詢問 ${count}`,
      contact: "",
      type: config.typeOptions[0],
      source: "後台手動建立",
      subject: "新增表單紀錄",
      status: config.statusOptions[0],
      owner: "未指派",
      createdAt: new Date().toLocaleString("zh-TW", { hour12: false }),
      note: ""
    };
  }
  return {
    id: `message-${Date.now()}`,
    name: `新訊息 ${count}`,
    channel: config.typeOptions[0],
    subject: "新增客服訊息",
    lastMessage: "",
    status: config.statusOptions[0],
    owner: "未指派",
    updatedAt: new Date().toLocaleString("zh-TW", { hour12: false }),
    note: ""
  };
}

function filterOpsRows(kind) {
  const config = opsPageConfig[kind];
  const filters = state.opsFilters[kind];
  const keyword = filters.search.trim().toLowerCase();
  return state[config.rowsKey].filter((item) => {
    const typeValue = kind === "contactRecords" ? item.type : item.channel;
    const searchable = Object.values(item).join(" ").toLowerCase();
    return (!keyword || searchable.includes(keyword)) &&
      (!filters.type || typeValue === filters.type) &&
      (!filters.status || item.status === filters.status);
  });
}

function renderOpsFilters(kind) {
  const config = opsPageConfig[kind];
  const filters = state.opsFilters[kind];
  return `
    <div class="list-controls">
      <div class="list-control-fields">
        <div class="field">
          <label>搜尋</label>
          <input type="search" value="${esc(filters.search)}" placeholder="${esc(config.searchPlaceholder)}" data-ops-filter="${kind}:search">
        </div>
        <div class="field">
          <label>${esc(config.typeLabel)}</label>
          <select data-ops-filter="${kind}:type">
            <option value="">全部</option>
            ${config.typeOptions.map((item) => `<option value="${esc(item)}" ${filters.type === item ? "selected" : ""}>${esc(item)}</option>`).join("")}
          </select>
        </div>
        <div class="field">
          <label>狀態</label>
          <select data-ops-filter="${kind}:status">
            <option value="">全部狀態</option>
            ${config.statusOptions.map((item) => `<option value="${esc(item)}" ${filters.status === item ? "selected" : ""}>${esc(item)}</option>`).join("")}
          </select>
        </div>
      </div>
      <div class="list-control-actions">
        <button class="btn" type="button" data-clear-ops-filter="${kind}">清除篩選</button>
        <button class="btn" type="button" data-export-ops="${kind}">匯出列表</button>
        <button class="btn primary" type="button" data-add-ops="${kind}">${esc(config.addLabel)}</button>
      </div>
    </div>
  `;
}

function renderOpsTable(kind) {
  const config = opsPageConfig[kind];
  const rows = filterOpsRows(kind);
  return `
    <table class="admin-table">
      <thead><tr>${config.columns.map((item) => `<th>${esc(item)}</th>`).join("")}</tr></thead>
      <tbody>
        ${rows.length ? rows.map((item) => {
          if (kind === "contactRecords") {
            return `
              <tr>
                <td><strong>${esc(item.name)}</strong><p class="hint">${esc(item.contact || "尚未填寫聯絡方式")}</p></td>
                <td>${esc(item.type)}</td>
                <td><strong>${esc(item.source)}</strong><p class="hint">${esc(item.subject)}</p></td>
                <td><span class="status-pill">${esc(item.status)}</span><p class="hint">${esc(item.createdAt)}</p></td>
                <td>
                  <div class="actions">
                    <button class="btn" type="button" data-edit-ops="${kind}:${item.id}">查看</button>
                    <button class="btn danger" type="button" data-delete-ops="${kind}:${item.id}">刪除</button>
                  </div>
                </td>
              </tr>
            `;
          }
          return `
            <tr>
              <td><strong>${esc(item.name)}</strong><p class="hint">${esc(item.channel)}</p></td>
              <td>${esc(item.subject)}</td>
              <td>${esc(item.lastMessage || "尚未填寫訊息內容")}</td>
              <td><span class="status-pill">${esc(item.status)}</span><p class="hint">${esc(item.updatedAt)}</p></td>
              <td>
                <div class="actions">
                  <button class="btn" type="button" data-edit-ops="${kind}:${item.id}">查看</button>
                  <button class="btn danger" type="button" data-delete-ops="${kind}:${item.id}">刪除</button>
                </div>
              </td>
            </tr>
          `;
        }).join("") : `<tr><td colspan="${config.columns.length}"><p class="hint">沒有符合條件的資料。</p></td></tr>`}
      </tbody>
    </table>
  `;
}

function renderOpsEditor(kind, item) {
  const config = opsPageConfig[kind];
  const isDirty = state.activeOpsEditor?.isDirty;
  const typeValue = kind === "contactRecords" ? item.type : item.channel;
  const typeField = kind === "contactRecords" ? "type" : "channel";
  return `
    ${managerHeader(config.title, "單筆資料可更新處理狀態、負責人與內部備註；完成後請按儲存。", [])}
    <section class="settings-card">
      <div class="section-title">
        <div>
          <h3>${esc(item.name)}</h3>
          <p>${kind === "contactRecords" ? esc(item.subject) : esc(item.lastMessage || item.subject)}</p>
        </div>
        <div class="actions">
          <span class="save-pill ${isDirty ? "unsaved" : ""}">${isDirty ? "尚未儲存" : "已儲存"}</span>
          <button class="btn primary" type="button" data-save-ops>儲存</button>
          <button class="btn" type="button" data-back-ops-list>返回列表</button>
        </div>
      </div>
      <div class="field-grid">
        <div class="field">
          <label>姓名 / 名稱</label>
          <input type="text" value="${esc(item.name)}" data-ops-field="${kind}:${item.id}:name">
        </div>
        <div class="field">
          <label>${esc(config.typeLabel)}</label>
          <select data-ops-field="${kind}:${item.id}:${typeField}">
            ${config.typeOptions.map((option) => `<option value="${esc(option)}" ${typeValue === option ? "selected" : ""}>${esc(option)}</option>`).join("")}
          </select>
        </div>
        ${kind === "contactRecords" ? `
          <div class="field">
            <label>聯絡方式</label>
            <input type="text" value="${esc(item.contact)}" data-ops-field="${kind}:${item.id}:contact">
          </div>
          <div class="field">
            <label>來源頁面 / 入口</label>
            <input type="text" value="${esc(item.source)}" data-ops-field="${kind}:${item.id}:source">
          </div>
          <div class="field full">
            <label>需求主旨</label>
            <input type="text" value="${esc(item.subject)}" data-ops-field="${kind}:${item.id}:subject">
          </div>
        ` : `
          <div class="field">
            <label>主旨</label>
            <input type="text" value="${esc(item.subject)}" data-ops-field="${kind}:${item.id}:subject">
          </div>
          <div class="field">
            <label>更新時間</label>
            <input type="text" value="${esc(item.updatedAt)}" data-ops-field="${kind}:${item.id}:updatedAt">
          </div>
          <div class="field full">
            <label>最後訊息</label>
            <textarea data-ops-field="${kind}:${item.id}:lastMessage">${esc(item.lastMessage)}</textarea>
          </div>
        `}
        <div class="field">
          <label>處理狀態</label>
          <select data-ops-field="${kind}:${item.id}:status">
            ${config.statusOptions.map((option) => `<option value="${esc(option)}" ${item.status === option ? "selected" : ""}>${esc(option)}</option>`).join("")}
          </select>
        </div>
        <div class="field">
          <label>負責人</label>
          <input type="text" value="${esc(item.owner)}" data-ops-field="${kind}:${item.id}:owner">
        </div>
        ${kind === "contactRecords" ? `
          <div class="field">
            <label>建立時間</label>
            <input type="text" value="${esc(item.createdAt)}" data-ops-field="${kind}:${item.id}:createdAt">
          </div>
        ` : ""}
        <div class="field full">
          <label>內部備註</label>
          <textarea data-ops-field="${kind}:${item.id}:note">${esc(item.note)}</textarea>
        </div>
      </div>
    </section>
  `;
}

function renderOpsManager(kind) {
  const config = opsPageConfig[kind];
  const editing = state.activeOpsEditor?.kind === kind
    ? state[config.rowsKey].find((item) => item.id === state.activeOpsEditor.id)
    : null;
  if (editing) return renderOpsEditor(kind, editing);

  return `
    ${managerHeader(config.title, config.description, [])}
    <section class="cms-workbench">
      ${renderOpsFilters(kind)}
      ${renderOpsTable(kind)}
    </section>
  `;
}

function getActiveSiteTemplate() {
  return siteStyleTemplates.find((item) => item.id === state.siteStyle.templateId) || siteStyleTemplates[0];
}

function getActiveSitePalette() {
  return siteColorPalettes.find((item) => item.id === state.siteStyle.paletteId) || siteColorPalettes[0];
}

function renderCurrentSiteTemplateNotice(scope) {
  const template = getActiveSiteTemplate();
  const palette = getActiveSitePalette();
  return `
    <section class="site-template-notice">
      <div>
        <span>目前整站官網模板</span>
        <strong>${esc(template.name)}｜${esc(palette.name)}</strong>
        <p>${esc(scope)}會沿用這套模板的排版語言、色系與元件風格；這裡只調整內容模塊、排序與頁面資料。</p>
      </div>
      <button class="btn" type="button" data-admin-section="brandStyle">調整品牌樣式</button>
    </section>
  `;
}

function isSiteStyleDirty() {
  return state.siteStyle.templateId !== state.siteStyle.savedTemplateId ||
    state.siteStyle.paletteId !== state.siteStyle.savedPaletteId;
}

function renderStyleThumb(template, palette, isActive) {
  const visual = template.thumbnail ? `
      <span class="style-template-visual has-image ${esc(template.previewClass)}" style="--preview-primary:${esc(palette.primary)};--preview-accent:${esc(palette.accent)};--preview-bg:${esc(palette.bg)};--preview-text:${esc(palette.text)}">
        <img src="${esc(template.thumbnail)}" alt="${esc(template.name)}縮圖">
        <span class="thumb-image-overlay">
          <i></i><i></i><i></i>
        </span>
      </span>
  ` : `
      <span class="style-template-visual ${esc(template.previewClass)}" style="--preview-primary:${esc(palette.primary)};--preview-accent:${esc(palette.accent)};--preview-bg:${esc(palette.bg)};--preview-text:${esc(palette.text)}">
        <span class="thumb-nav"><i></i><i></i><i></i></span>
        <span class="thumb-hero">
          <span class="thumb-copy"><i></i><i></i><i></i></span>
          <span class="thumb-media"></span>
        </span>
        <span class="thumb-panels"><i></i><i></i><i></i></span>
      </span>
  `;
  return `
    <button class="style-template-card ${isActive ? "is-active" : ""}" type="button" data-style-template="${template.id}">
      ${visual}
      <strong>${esc(template.name)}</strong>
      <span>${esc(template.fit)}</span>
    </button>
  `;
}

function renderPaletteButton(palette, isActive) {
  return `
    <button class="palette-card ${isActive ? "is-active" : ""}" type="button" data-style-palette="${palette.id}">
      <span class="palette-swatches" aria-hidden="true">
        <i style="background:${esc(palette.primary)}"></i>
        <i style="background:${esc(palette.accent)}"></i>
        <i style="background:${esc(palette.bg)}"></i>
        <i style="background:${esc(palette.text)}"></i>
      </span>
      <strong>${esc(palette.name)}</strong>
    </button>
  `;
}

function renderTemplateDropdown(activeTemplate) {
  return `
    <details class="style-dropdown">
      <summary>
        <span>
          <strong>${esc(activeTemplate.name)}</strong>
          <small>${esc(activeTemplate.fit)}</small>
        </span>
      </summary>
      <div class="style-dropdown-menu">
        ${siteStyleTemplates.map((template) => `
          <button class="style-dropdown-option ${template.id === activeTemplate.id ? "is-active" : ""}" type="button" data-style-template="${esc(template.id)}">
            <span>
              <strong>${esc(template.name)}</strong>
              <small>${esc(template.fit)}</small>
            </span>
          </button>
        `).join("")}
      </div>
    </details>
  `;
}

function renderPaletteDropdown(activePalette) {
  const swatches = (palette) => `
    <span class="palette-swatches compact" aria-hidden="true">
      <i style="background:${esc(palette.primary)}"></i>
      <i style="background:${esc(palette.accent)}"></i>
      <i style="background:${esc(palette.bg)}"></i>
      <i style="background:${esc(palette.text)}"></i>
    </span>
  `;
  return `
    <details class="style-dropdown palette-dropdown">
      <summary>
        ${swatches(activePalette)}
        <span>
          <strong>${esc(activePalette.name)}</strong>
          <small>主色、輔色、背景與文字層次</small>
        </span>
      </summary>
      <div class="style-dropdown-menu palette-menu">
        ${siteColorPalettes.map((palette) => `
          <button class="style-dropdown-option palette-option ${palette.id === activePalette.id ? "is-active" : ""}" type="button" data-style-palette="${esc(palette.id)}">
            ${swatches(palette)}
            <span>
              <strong>${esc(palette.name)}</strong>
              <small>${esc(palette.primary)} / ${esc(palette.accent)}</small>
            </span>
          </button>
        `).join("")}
      </div>
    </details>
  `;
}

function renderSiteStylePreview(template, palette) {
  if (template.entry) {
    const params = new URLSearchParams({
      primary: palette.primary,
      accent: palette.accent,
      bg: palette.bg,
      surface: palette.surface,
      text: palette.text,
      muted: palette.muted
    });
    return `
      <div class="site-style-preview real-template-preview" style="--preview-primary:${esc(palette.primary)};--preview-accent:${esc(palette.accent)};--preview-bg:${esc(palette.bg)};--preview-text:${esc(palette.text)}">
        <div class="preview-browser-bar">
          <span></span><span></span><span></span>
          <strong>官網預覽</strong>
        </div>
        <div class="real-preview-stage">
          <iframe class="real-preview-frame" title="${esc(template.name)}官網預覽" src="${esc(template.entry)}?${esc(params.toString())}"></iframe>
        </div>
      </div>
    `;
  }

  if (template.thumbnail) {
    return `
      <div class="site-style-preview real-template-preview" style="--preview-primary:${esc(palette.primary)};--preview-accent:${esc(palette.accent)};--preview-bg:${esc(palette.bg)};--preview-text:${esc(palette.text)}">
        <div class="preview-browser-bar">
          <span></span><span></span><span></span>
          <strong>官網預覽</strong>
        </div>
        <div class="real-preview-stage">
          <img src="${esc(template.thumbnail)}" alt="${esc(template.name)}官網預覽">
        </div>
      </div>
    `;
  }

  return `
    <div class="site-style-preview" style="--preview-primary:${esc(palette.primary)};--preview-accent:${esc(palette.accent)};--preview-bg:${esc(palette.bg)};--preview-text:${esc(palette.text)}">
      <div class="preview-browser-bar">
        <span></span><span></span><span></span>
        <strong>官網預覽</strong>
      </div>
      <div class="preview-site-shell ${esc(template.previewClass)}">
        <header>
          <strong>Brand</strong>
          <nav><span></span><span></span><span></span></nav>
        </header>
        <section class="preview-hero">
          <div>
            <small>${esc(template.eyebrow)}</small>
            <h3>${esc(template.headline)}</h3>
            <p>${esc(template.proof)}</p>
            <button type="button">${esc(template.cta)}</button>
          </div>
          <figure>
            <span class="preview-figure-main"></span>
            <span class="preview-figure-line one"></span>
            <span class="preview-figure-line two"></span>
          </figure>
        </section>
        <section class="preview-sections">
          ${template.sections.map((section) => `<article><span></span><strong>${esc(section)}</strong><p></p></article>`).join("")}
        </section>
      </div>
    </div>
  `;
}

function renderBrandStyleManager() {
  const activeTemplate = getActiveSiteTemplate();
  const activePalette = getActiveSitePalette();
  const isDirty = isSiteStyleDirty();
  return `
    <section class="brand-style-layout">
      <div class="brand-style-controls">
        <div class="brand-style-heading">
          <div>
            <h2>品牌樣式設定</h2>
            <p>先選擇整站官網模板與色系，首頁管理與前台頁面都會以這套樣式為基準。</p>
          </div>
        </div>
        <div class="style-summary">
          <div>
            <span class="save-pill ${isDirty ? "unsaved" : ""}">${isDirty ? "尚未儲存" : "已儲存"}</span>
            <h3>${esc(activeTemplate.name)}｜${esc(activePalette.name)}</h3>
            <p>${esc(activeTemplate.description)} 首頁模塊與前台頁面會沿用此模板的排版語言、色系與元件風格。</p>
          </div>
          <button class="btn primary" type="button" data-save-style>儲存樣式設定</button>
        </div>
        <div class="brand-style-form">
          <div class="style-select-field">
            <span>整站官網模板</span>
            ${renderTemplateDropdown(activeTemplate)}
          </div>
          <div class="palette-inline">
            <strong>色系風格</strong>
            ${renderPaletteDropdown(activePalette)}
          </div>
        </div>
      </div>

      <aside class="brand-style-side">
        ${renderSiteStylePreview(activeTemplate, activePalette)}
      </aside>
    </section>
  `;
}

const dataManagerConfig = {
  articles: {
    title: "內容管理",
    description: "管理最新消息、公告、活動、知識文章、FAQ 與長篇內容資料。",
    addLabel: "新增內容",
    columns: ["標題", "內容類型", "分類", "狀態", "更新 / 備註"],
    detailTitle: "文章內容",
    detailFields: [
      { key: "summary", label: "文章摘要", type: "textarea", help: "顯示在列表卡片、首頁最新消息或文章頁開頭。" },
      { key: "body", label: "文章內文", type: "textarea", help: "正式文章內容，可作為前台文章詳細頁使用。" },
      { key: "imageAlt", label: "封面圖片描述", type: "text", help: "先填圖片用途，正式版可接媒體庫上傳。" },
      { key: "linkUrl", label: "頁面連結", type: "text", help: "例如 /news/article-title，供首頁模塊或列表頁連到文章。" }
    ]
  },
  cases: {
    title: "案例管理",
    description: "管理社區導入案例、客戶成果、ESG 成果與合作證明。",
    addLabel: "新增案例",
    columns: ["案例", "案例類型", "分類", "狀態", "成果"],
    detailTitle: "案例內容",
    detailFields: [
      { key: "clientBackground", label: "背景介紹", type: "textarea", help: "描述客戶、專案、作品或合作背景。" },
      { key: "challenge", label: "需求 / 挑戰", type: "textarea", help: "描述原本遇到的需求、目標、限制或問題。" },
      { key: "solution", label: "執行方式", type: "textarea", help: "描述提供的服務、流程、內容或解決方式。" },
      { key: "result", label: "成果 / 亮點", type: "textarea", help: "描述成果數據、成效、亮點、客戶回饋或可展示的證明。" },
      { key: "imageAlt", label: "圖片描述", type: "text", help: "先填圖片內容，正式版可接媒體庫上傳一張或多張圖片。" },
      { key: "linkUrl", label: "詳細頁連結", type: "text", help: "例如 /cases/sample-project，供首頁模塊或列表頁引用。" }
    ]
  },
  products: {
    title: "商品 / 服務管理",
    description: "管理商品資訊、服務方案、規格、價格、CTA 與方案比較資料。",
    addLabel: "新增商品 / 服務",
    columns: ["項目", "類型", "分類", "狀態", "CTA / 備註"],
    detailTitle: "商品 / 服務內容",
    detailFields: [
      { key: "summary", label: "簡短介紹", type: "textarea", help: "顯示在商品卡片、服務列表或頁首摘要。" },
      { key: "spec", label: "規格 / 內容範圍", type: "textarea", help: "填寫規格、包含項目、適用對象、服務內容或方案細節。" },
      { key: "benefit", label: "主要優勢", type: "textarea", help: "整理使用者最在意的賣點或選擇理由。" },
      { key: "ctaText", label: "CTA 文字", type: "text", help: "例如 立即諮詢、索取簡報、查看方案。" },
      { key: "linkUrl", label: "詳細頁連結", type: "text", help: "例如 /products/sample-item 或 /services/sample-service。" }
    ]
  },
  resources: {
    title: "據點 / 資源管理",
    description: "管理 GEO 站點、水站、水質報告、下載文件與本地頁 SEO。",
    addLabel: "新增據點 / 資源",
    columns: ["名稱", "資源類型", "分類 / 區域", "狀態", "資料"],
    detailTitle: "據點 / 資源內容",
    detailFields: [
      { key: "address", label: "位置 / 分類資訊", type: "text", help: "據點可填地址或區域；檔案與連結可填分類或適用頁面。" },
      { key: "summary", label: "簡短說明", type: "textarea", help: "顯示在據點列表、資源列表或下載區摘要。" },
      { key: "fileNote", label: "檔案 / 連結說明", type: "textarea", help: "例如檔案版本、更新日期、外部連結用途或注意事項。" },
      { key: "linkUrl", label: "資源連結", type: "text", help: "例如 /locations/sample-place、/downloads/file.pdf 或外部 URL。" }
    ]
  }
};

function createDataItem(kind, config) {
  const now = new Date();
  const date = `${now.getFullYear()}/${String(now.getMonth() + 1).padStart(2, "0")}/${String(now.getDate()).padStart(2, "0")}`;
  return {
    id: `${kind}-${Date.now()}`,
    title: `${config.addLabel} ${state.dataCollections[kind].length + 1}`,
    type: "自訂",
    category: "未分類",
    status: "草稿",
    updated: date,
    summary: "",
    body: "",
    linkUrl: ""
  };
}

function renderDataEditor(kind, item) {
  const config = dataManagerConfig[kind];
  const isDirty = Boolean(state.activeDataEditor?.isDirty);
  const shouldHideHeader = kind === "products" || kind === "resources";
  return `
    ${shouldHideHeader ? "" : managerHeader(config.title, config.description, [])}
    <div class="settings-card">
      <div class="section-title">
        <div>
          <h3>${esc(config.detailTitle)}</h3>
          <p>編輯完成後可回到列表；這筆資料可被首頁模塊與前台列表頁引用。</p>
        </div>
        <div class="actions">
          <span class="save-pill ${isDirty ? "unsaved" : ""}">${isDirty ? "尚未儲存" : "已儲存"}</span>
          <button class="btn primary" type="button" data-save-data="${kind}:${item.id}">儲存</button>
          <button class="btn" type="button" data-back-data-list>返回列表</button>
        </div>
      </div>
      <div class="field-grid">
        <div class="field">
          <label>${esc(config.columns[0])}</label>
          <input type="text" value="${esc(item.title)}" data-data-field="title" data-data-kind="${kind}" data-data-id="${item.id}">
        </div>
        <div class="field">
          <label>${esc(config.columns[1])}</label>
          <input type="text" value="${esc(item.type)}" data-data-field="type" data-data-kind="${kind}" data-data-id="${item.id}">
        </div>
        <div class="field">
          <label>${esc(config.columns[2])}</label>
          <input type="text" value="${esc(item.category)}" data-data-field="category" data-data-kind="${kind}" data-data-id="${item.id}">
        </div>
        <div class="field">
          <label>${esc(config.columns[3])}</label>
          <select data-data-field="status" data-data-kind="${kind}" data-data-id="${item.id}">
            ${["已發布", "草稿", "顯示", "隱藏", "待補", "已上傳"].map((status) => `<option value="${status}" ${item.status === status ? "selected" : ""}>${status}</option>`).join("")}
          </select>
        </div>
        <div class="field full">
          <label>${esc(config.columns[4])}</label>
          <input type="text" value="${esc(item.updated)}" data-data-field="updated" data-data-kind="${kind}" data-data-id="${item.id}">
        </div>
        ${config.detailFields.map((field) => `
          <div class="field ${field.type === "textarea" ? "full" : ""}">
            <label>${esc(field.label)}</label>
            <div class="field-help">${esc(field.help)}</div>
            ${field.type === "textarea"
              ? `<textarea data-data-field="${field.key}" data-data-kind="${kind}" data-data-id="${item.id}">${esc(item[field.key] || "")}</textarea>`
              : `<input type="text" value="${esc(item[field.key] || "")}" data-data-field="${field.key}" data-data-kind="${kind}" data-data-id="${item.id}">`}
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

function renderBlueprintArticleEditor(item) {
  const isDirty = Boolean(state.activeDataEditor?.isDirty);
  const type = item.type || "最新消息";
  const isFaq = type === "FAQ";
  const dateLabel = type === "活動公告" ? "活動日期" : "發布日期";
  const titleLabel = isFaq ? "問題" : "標題";
  const bodyLabel = isFaq ? "答案" : "內容";
  const statusValue = item.status || "草稿";
  const canPin = statusValue === "已發布";
  const isPinned = item.isPinned === "是" && canPin;
  const toDateTimeValue = (value) => {
    const text = String(value || "").trim();
    if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/.test(text)) return text;
    const match = text.match(/^(\d{4})\/(\d{2})\/(\d{2})$/);
    return match ? `${match[1]}-${match[2]}-${match[3]}T09:00` : "";
  };
  const extraFields = {
    FAQ: `
      <div class="field">
        <label>排序</label>
        <input type="text" value="${esc(item.sort || "")}" placeholder="數字越小越前面" data-data-field="sort" data-data-kind="articles" data-data-id="${item.id}">
      </div>
    `,
    活動公告: `
      <div class="field">
        <label>活動地點</label>
        <input type="text" value="${esc(item.location || "")}" placeholder="線上、實體地址或場地名稱" data-data-field="location" data-data-kind="articles" data-data-id="${item.id}">
      </div>
      <div class="field">
        <label>報名連結</label>
        <input type="text" value="${esc(item.signupLink || "")}" placeholder="https:// 或站內連結" data-data-field="signupLink" data-data-kind="articles" data-data-id="${item.id}">
      </div>
    `,
    案例: `
      <div class="field">
        <label>客戶名稱</label>
        <input type="text" value="${esc(item.clientName || "")}" placeholder="可填正式名稱或匿名名稱" data-data-field="clientName" data-data-kind="articles" data-data-id="${item.id}">
      </div>
      <div class="field">
        <label>產業類別</label>
        <input type="text" value="${esc(item.industry || "")}" placeholder="例如：醫療健康、社區、零售電商" data-data-field="industry" data-data-kind="articles" data-data-id="${item.id}">
      </div>
      <div class="field">
        <label>服務項目</label>
        <input type="text" value="${esc(item.service || "")}" placeholder="例如：品牌官網、內容架構、SEO" data-data-field="service" data-data-kind="articles" data-data-id="${item.id}">
      </div>
      <div class="field">
        <label>成果摘要</label>
        <input type="text" value="${esc(item.resultSummary || "")}" placeholder="列表卡片上顯示的一句成果亮點" data-data-field="resultSummary" data-data-kind="articles" data-data-id="${item.id}">
      </div>
    `
  };

  return `
    <div class="settings-card">
      <div class="section-title">
        <div>
          <h3>${esc(type)}編輯</h3>
          <p>${isFaq ? "FAQ 只需要問題、答案與排序，不使用長文章欄位。" : "外部只填系統需要辨識與呈現的基本資料，詳細內容請放在內文編輯器。"}</p>
        </div>
        <div class="actions">
          <span class="save-pill ${isDirty ? "unsaved" : ""}">${isDirty ? "尚未儲存" : "已儲存"}</span>
          <button class="btn primary" type="button" data-save-data="articles:${item.id}">儲存</button>
          <button class="btn" type="button" data-back-data-list>返回列表</button>
        </div>
      </div>
      <div class="field-grid">
        <div class="field full publish-control-field">
          <div class="publish-control-row ${isFaq ? "no-pin" : ""}">
            <div class="date-time-field">
              <label>${dateLabel}</label>
              <input type="datetime-local" value="${esc(toDateTimeValue(item.updated))}" data-data-field="updated" data-data-kind="articles" data-data-id="${item.id}">
              <div class="field-help">可直接輸入日期時間，也可用日曆選擇。</div>
            </div>
            <div class="status-select-field">
              <label>狀態</label>
              <select data-data-field="status" data-data-kind="articles" data-data-id="${item.id}">
                ${["草稿", "已發布", "隱藏"].map((status) => `<option value="${status}" ${statusValue === status ? "selected" : ""}>${status}</option>`).join("")}
              </select>
            </div>
            ${isFaq ? "" : `
              <label class="switch-control pin-switch-control ${canPin ? "" : "is-disabled"}">
                <input type="checkbox" ${isPinned ? "checked" : ""} ${canPin ? "" : "disabled"} data-data-field="isPinned" data-data-kind="articles" data-data-id="${item.id}" data-pin-switch>
                <span class="switch-track"></span>
                <span class="switch-text">置頂</span>
              </label>
            `}
          </div>
        </div>
        <div class="field full">
          <label>${titleLabel}</label>
          <input type="text" value="${esc(item.title)}" data-data-field="title" data-data-kind="articles" data-data-id="${item.id}">
        </div>
        ${isFaq ? "" : `
          <div class="field">
            <label>SEO 標題</label>
            <input type="text" value="${esc(item.seoTitle || "")}" placeholder="未填時可沿用標題" data-data-field="seoTitle" data-data-kind="articles" data-data-id="${item.id}">
          </div>
          <div class="field">
            <label>友善網址</label>
            <input type="text" value="${esc(item.slug || "")}" placeholder="例如 news-title 或 article-title" data-data-field="slug" data-data-kind="articles" data-data-id="${item.id}">
          </div>
          <div class="field full">
            <label>摘要</label>
            <input type="text" value="${esc(item.summary || "")}" data-data-field="summary" data-data-kind="articles" data-data-id="${item.id}">
          </div>
          <div class="field">
            <label>封面圖描述</label>
            <div class="field-help">用在列表卡片、分享圖片或文章封面。</div>
            <input type="text" value="${esc(item.imageAlt || "")}" placeholder="先填封面圖內容，正式版可接媒體庫" data-data-field="imageAlt" data-data-kind="articles" data-data-id="${item.id}">
          </div>
          <div class="field">
            <label>上傳封面圖</label>
            <div class="file-upload-row">
              <label class="btn" for="coverFile-${item.id}">選擇檔案</label>
              <span class="hint">${esc(item.coverFileName || "尚未選擇檔案")}</span>
              <input class="visually-hidden" id="coverFile-${item.id}" type="file" accept="image/*" data-file-field="coverFileName" data-data-kind="articles" data-data-id="${item.id}">
            </div>
          </div>
          <div class="field">
            <label>文章首圖描述</label>
            <div class="field-help">用在文章詳細頁內文最上方的主圖。</div>
            <input type="text" value="${esc(item.heroImageAlt || "")}" placeholder="先填文章首圖內容，正式版可接媒體庫" data-data-field="heroImageAlt" data-data-kind="articles" data-data-id="${item.id}">
          </div>
          <div class="field">
            <label>上傳文章首圖</label>
            <div class="file-upload-row">
              <label class="btn" for="heroFile-${item.id}">選擇檔案</label>
              <span class="hint">${esc(item.heroFileName || "尚未選擇檔案")}</span>
              <input class="visually-hidden" id="heroFile-${item.id}" type="file" accept="image/*" data-file-field="heroFileName" data-data-kind="articles" data-data-id="${item.id}">
            </div>
          </div>
        `}
        ${extraFields[type] || ""}
        <div class="field full">
          <label>${bodyLabel}</label>
          <textarea data-data-field="body" data-data-kind="articles" data-data-id="${item.id}">${esc(item.body || "")}</textarea>
        </div>
      </div>
    </div>
  `;
}

function getDataFilterOptions(items, key) {
  return [...new Set(items.map((item) => item[key]).filter(Boolean))];
}

function getCmsCategoryOptions(kind, items) {
  return [...new Set([...(cmsTypeOptions[kind] || []), ...items.map((item) => item.category).filter(Boolean)])];
}

function filterDataItems(kind, items) {
  const filters = state.dataFilters[kind] || { search: "", category: "", status: "" };
  const query = filters.search.trim().toLowerCase();
  return items.filter((item) => {
    const matchesSearch = !query || [item.title, item.type, item.category, item.status, item.updated]
      .some((value) => String(value || "").toLowerCase().includes(query));
    const matchesCategory = !filters.category || item.category === filters.category;
    const matchesStatus = !filters.status || item.status === filters.status;
    return matchesSearch && matchesCategory && matchesStatus;
  });
}

const cmsTypeOptions = {
  articles: ["最新消息", "知識文章", "活動公告", "案例"],
  cases: ["案例"],
  products: ["商品", "服務", "方案", "加值項目"],
  resources: ["據點", "檔案下載", "外部連結", "常用資源"]
};

function renderCmsDataManager(kind) {
  const config = dataManagerConfig[kind];
  const items = state.dataCollections[kind] || [];
  const editing = state.activeDataEditor?.kind === kind
    ? items.find((item) => item.id === state.activeDataEditor.id)
    : null;
  if (editing && kind === "articles") return renderBlueprintArticleEditor(editing);
  if (editing) return renderDataEditor(kind, editing);

  const filters = state.dataFilters[kind] || { search: "", category: "", status: "" };
  const visibleItems = filterDataItems(kind, items);
  const categoryOptions = getCmsCategoryOptions(kind, items);
  const statusOptions = getDataFilterOptions(items, "status");
  const typeOptions = cmsTypeOptions[kind] || ["一般資料"];

  return `
    ${managerHeader(`${config.title}｜新版流程`, "公版官網資料管理：先選資料用途，再進入單筆編輯；列表只用來搜尋、篩選與進入編輯。", [])}
    <section class="cms-workbench">
      <div class="cms-create-strip">
        <div>
          <h3>新增${esc(config.title.replace("管理", ""))}</h3>
          <p>先選這筆資料會被用在哪一種前台區塊或列表，系統再帶到對應的編輯欄位。</p>
        </div>
        <div class="cms-type-actions">
          ${typeOptions.map((type) => `<button class="btn" type="button" data-quick-add-data="${kind}" data-quick-add-type="${esc(type)}">${esc(type)}</button>`).join("")}
        </div>
      </div>

      <div class="data-filters">
        <div class="field">
          <label>搜尋</label>
          <input type="search" value="${esc(filters.search)}" placeholder="搜尋標題、類型、分類、狀態或備註" data-data-filter="search" data-data-filter-kind="${kind}">
        </div>
        <div class="field">
          <label>分類</label>
          <select data-data-filter="category" data-data-filter-kind="${kind}">
            <option value="">全部分類</option>
            ${categoryOptions.map((category) => `<option value="${esc(category)}" ${filters.category === category ? "selected" : ""}>${esc(category)}</option>`).join("")}
          </select>
        </div>
        <div class="field">
          <label>狀態</label>
          <select data-data-filter="status" data-data-filter-kind="${kind}">
            <option value="">全部狀態</option>
            ${statusOptions.map((status) => `<option value="${esc(status)}" ${filters.status === status ? "selected" : ""}>${esc(status)}</option>`).join("")}
          </select>
        </div>
        <button class="btn compact" type="button" data-clear-data-filter="${kind}">清除篩選</button>
      </div>

      <div class="cms-list">
        ${visibleItems.length ? visibleItems.map((item) => `
          <article class="cms-list-row">
            <div>
              <strong>${esc(item.title)}</strong>
              <p>${esc(item.type)}｜${esc(item.category)}｜${esc(item.updated)}</p>
            </div>
            <span class="status-pill">${esc(item.status)}</span>
            <div class="actions">
              <button class="btn" type="button" data-edit-data="${kind}:${item.id}">編輯</button>
              <button class="btn danger" type="button" data-delete-data="${kind}:${item.id}">刪除</button>
            </div>
          </article>
        `).join("") : `<div class="empty-state"><strong>沒有符合條件的資料</strong><p>可以清除篩選，或從上方選一種資料類型開始新增。</p></div>`}
      </div>
    </section>
  `;
}

function renderBlueprintCollection(kind, fixedType = "") {
  const config = dataManagerConfig[kind];
  const items = state.dataCollections[kind] || [];
  const editing = state.activeDataEditor?.kind === kind
    ? items.find((item) => item.id === state.activeDataEditor.id)
    : null;
  if (editing && kind === "articles") return renderBlueprintArticleEditor(editing);
  if (editing) return renderDataEditor(kind, editing);

  const filters = state.dataFilters[kind] || { search: "", category: "", status: "" };
  const articleType = state.activeArticleType || cmsTypeOptions.articles[0];
  const activeTabbedType = fixedType || (kind === "articles" ? articleType : "");
  const hasTypeTabs = kind === "articles" && !fixedType;
  const hasFixedType = Boolean(fixedType);
  const sourceItems = kind === "articles" ? items.filter((item) => item.type === activeTabbedType) : items;
  const visibleItems = filterDataItems(kind, sourceItems);
  const categoryOptions = getCmsCategoryOptions(kind, items);
  const statusOptions = getDataFilterOptions(items, "status");
  const typeOptions = cmsTypeOptions[kind] || ["一般資料"];
  const createLabel = kind === "articles" ? `新增${activeTabbedType}` : "新增資料";
  const isFaqTab = kind === "articles" && activeTabbedType === "FAQ";
  const title = fixedType ? fixedType : kind === "articles" ? "文章" : config.title.replace("管理", "");

  return `
    <section class="cms-workbench">
      ${hasTypeTabs ? `
        <div class="tabs" role="tablist" aria-label="內容資料分類">
          ${typeOptions.map((type) => `<button class="tab ${activeTabbedType === type ? "is-active" : ""}" type="button" data-article-type-tab="${esc(type)}">${esc(type)}</button>`).join("")}
        </div>
      ` : ""}
      <div class="list-controls">
        <div class="list-control-fields">
          <div class="field">
            <label>搜尋</label>
            <input type="search" value="${esc(filters.search)}" placeholder="搜尋名稱、分類、狀態或備註" data-data-filter="search" data-data-filter-kind="${kind}">
          </div>
          <div class="field ${kind === "articles" ? "hidden" : ""}">
            <label>分類</label>
            <select data-data-filter="category" data-data-filter-kind="${kind}">
              <option value="">全部分類</option>
              ${categoryOptions.map((category) => `<option value="${esc(category)}" ${filters.category === category ? "selected" : ""}>${esc(category)}</option>`).join("")}
            </select>
          </div>
          <div class="field">
            <label>狀態</label>
            <select data-data-filter="status" data-data-filter-kind="${kind}">
              <option value="">全部狀態</option>
              ${statusOptions.map((status) => `<option value="${esc(status)}" ${filters.status === status ? "selected" : ""}>${esc(status)}</option>`).join("")}
            </select>
          </div>
          <button class="btn filter-clear-btn" type="button" data-clear-data-filter="${kind}">清除篩選</button>
        </div>
        <div class="list-control-actions">
          ${kind === "articles"
            ? `
              ${isFaqTab ? `
                <details class="action-menu">
                  <summary class="btn">批次操作</summary>
                  <div class="action-menu-list">
                    <label class="action-menu-item" for="faqBatchUpload">批次上傳</label>
                    <button class="action-menu-item" type="button" data-download-faq-template>格式範本下載</button>
                  </div>
                </details>
                <input class="visually-hidden" id="faqBatchUpload" type="file" accept=".csv,.xlsx,.xls" data-faq-batch-upload>
              ` : ""}
              <button class="btn primary" type="button" data-quick-add-data="${kind}" data-quick-add-type="${esc(activeTabbedType)}">${esc(createLabel)}</button>
            `
            : typeOptions.map((type) => `<button class="btn" type="button" data-quick-add-data="${kind}" data-quick-add-type="${esc(type)}">新增${esc(type)}</button>`).join("")}
        </div>
      </div>

      <div class="admin-table-wrap">
        <table class="admin-table">
          <thead>
            <tr>${kind === "articles" || hasFixedType ? "<th>內容類型</th><th>名稱</th>" : "<th>名稱</th><th>分類</th>"}<th>狀態</th><th>更新 / 備註</th><th>操作</th></tr>
          </thead>
          <tbody>
            ${visibleItems.length ? visibleItems.map((item) => `
              <tr>
                ${kind === "articles" || hasFixedType ? `
                  <td><span class="status-pill">${esc(item.type)}</span></td>
                  <td><strong>${esc(item.title)}</strong></td>
                ` : `
                  <td><strong>${esc(item.title)}</strong><p class="hint">${esc(item.type)}</p></td>
                  <td>${esc(item.category)}</td>
                `}
                <td><span class="status-pill">${esc(item.status)}</span></td>
                <td>${esc(item.updated)}</td>
                <td>
                  <div class="actions">
                    <button class="btn" type="button" data-edit-data="${kind}:${item.id}">編輯</button>
                    <button class="btn danger" type="button" data-delete-data="${kind}:${item.id}">刪除</button>
                  </div>
                </td>
              </tr>
            `).join("") : `<tr><td colspan="5"><p class="hint">沒有符合條件的資料。</p></td></tr>`}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

const blueprintPagePlans = [
  {
    name: "一般內容頁",
    source: "手動撰寫",
    use: "關於我們、品牌故事、公司介紹、理念說明。",
    content: ["頁首標題", "頁首簡介", "主段落", "補充重點", "圖片 / CTA"],
    data: "不一定需要資料集合；可用頁面內容區塊直接編輯。"
  },
  {
    name: "服務列表頁",
    source: "商品 / 服務資料",
    use: "服務項目、方案介紹、流程說明。",
    content: ["頁首標題", "頁首簡介", "服務列表", "服務連結", "CTA"],
    data: "每筆資料需要名稱、分類、摘要、圖片、詳細連結與顯示狀態。"
  },
  {
    name: "文章列表頁",
    source: "內容資料",
    use: "最新消息、知識中心、活動公告與案例文章。",
    content: ["頁首標題", "頁首簡介", "內容類型篩選", "文章卡片", "文章連結"],
    data: "外部欄位只放會被系統拿來顯示、搜尋、排序、SEO、產生卡片的資訊；其餘內容都交給內文編輯器。"
  },
  {
    name: "案例列表頁",
    source: "案例資料",
    use: "作品、成功案例、客戶成果、專案展示。",
    content: ["頁首標題", "頁首簡介", "案例分類", "成果摘要", "詳細連結"],
    data: "每筆資料需要名稱、類型、背景、需求、執行方式、成果與圖片。"
  },
  {
    name: "聯絡表單頁",
    source: "手動撰寫 + 表單紀錄",
    use: "聯絡我們、預約諮詢、合作洽詢、表單詢問。",
    content: ["頁面標題", "頁面簡介", "聯絡資訊", "表單欄位", "送出提示"],
    data: "頁面內容手動填；送出的資料進聯絡表單紀錄管理。"
  },
  {
    name: "FAQ 頁",
    source: "FAQ / 內容資料",
    use: "常見問題、購買說明、服務問答、使用教學。",
    content: ["頁首標題", "頁首簡介", "問題分類", "問答列表", "排序"],
    data: "可放在內容管理，類型選 FAQ；每筆需要問題、答案、分類、排序與狀態。"
  }
];

const blueprintDataPlans = [
  {
    name: "內容資料",
    types: ["最新消息", "知識文章", "活動公告", "案例"],
    fields: ["標題", "SEO 標題", "友善網址", "摘要", "封面圖片", "發布日期", "狀態", "置頂", "內文編輯器"],
    usedBy: "文章列表頁、FAQ 頁、首頁最新消息模塊"
  },
  {
    name: "案例資料",
    types: ["案例"],
    fields: ["名稱", "類型", "分類", "背景介紹", "需求 / 挑戰", "執行方式", "成果 / 亮點", "圖片", "狀態"],
    usedBy: "案例列表頁、首頁案例/作品模塊"
  },
  {
    name: "商品 / 服務資料",
    types: ["商品", "服務", "方案", "加值項目"],
    fields: ["名稱", "類型", "分類", "簡介", "內容範圍", "主要優勢", "圖片", "CTA", "連結", "狀態"],
    usedBy: "服務列表頁、商品/服務模塊、方案比較區"
  },
  {
    name: "據點 / 資源資料",
    types: ["據點", "檔案下載", "外部連結", "常用資源"],
    fields: ["名稱", "類型", "分類", "位置 / 說明", "檔案或連結", "更新資訊", "狀態"],
    usedBy: "據點頁、下載區、資源列表、Footer 或頁面連結"
  }
];

function renderBlueprintPages() {
  return `
    ${managerHeader("公版規劃版｜頁面模板規劃", "先從前台頁面需要呈現什麼開始思考，再決定哪些內容手動填、哪些內容從資料集合帶入。", [])}
    <div class="blueprint-grid">
      ${blueprintPagePlans.map((plan) => `
        <article class="blueprint-card">
          <div class="blueprint-card-head">
            <h3>${esc(plan.name)}</h3>
            <span class="status-pill">${esc(plan.source)}</span>
          </div>
          <p>${esc(plan.use)}</p>
          <div>
            <strong>頁面需要內容</strong>
            <ul>${plan.content.map((item) => `<li>${esc(item)}</li>`).join("")}</ul>
          </div>
          <div class="blueprint-note">${esc(plan.data)}</div>
        </article>
      `).join("")}
    </div>
  `;
}

function renderBlueprintData() {
  return `
    ${managerHeader("公版規劃版｜基本資料設定", "把資料集合定義成可被多個頁面與首頁模塊重複引用的內容來源。", [])}
    <div class="blueprint-stack">
      ${blueprintDataPlans.map((plan) => `
        <article class="blueprint-row-card">
          <div>
            <h3>${esc(plan.name)}</h3>
            <p>使用於：${esc(plan.usedBy)}</p>
          </div>
          <div>
            <strong>資料類型</strong>
            <div class="blueprint-tags">${plan.types.map((type) => `<span>${esc(type)}</span>`).join("")}</div>
          </div>
          <div>
            <strong>基本欄位</strong>
            <p>${plan.fields.map(esc).join("、")}</p>
          </div>
        </article>
      `).join("")}
    </div>
  `;
}

function renderBlueprintForms() {
  return `
    ${managerHeader("公版規劃版｜表單與詢問設定", "聯絡表單頁不一定需要背景資料集合，但送出後要進聯絡表單紀錄管理，並能追蹤來源。", [])}
    <div class="blueprint-grid three">
      <article class="blueprint-card">
        <h3>表單欄位</h3>
        <p>讓管理者決定訪客需要填哪些欄位。</p>
        <ul>
          <li>姓名 / 稱呼</li>
          <li>Email / 電話</li>
          <li>詢問類型</li>
          <li>留言內容</li>
          <li>同意條款</li>
        </ul>
      </article>
      <article class="blueprint-card">
        <h3>送出後處理</h3>
        <p>讓編輯者知道表單送出後會去哪裡。</p>
        <ul>
          <li>成功提示文字</li>
          <li>通知收件信箱</li>
          <li>Lead 狀態</li>
          <li>來源頁面</li>
        </ul>
      </article>
      <article class="blueprint-card">
        <h3>追蹤設定</h3>
        <p>讓表單可以被行銷與數據工具追蹤。</p>
        <ul>
          <li>轉換事件名稱</li>
          <li>來源參數</li>
          <li>感謝頁或成功事件</li>
          <li>是否啟用通知</li>
        </ul>
      </article>
    </div>
  `;
}

function renderDataManager(kind) {
  const config = dataManagerConfig[kind];
  const items = state.dataCollections[kind] || [];
  const filters = state.dataFilters[kind] || { search: "", category: "", status: "" };
  const categoryOptions = getDataFilterOptions(items, "category");
  const statusOptions = getDataFilterOptions(items, "status");
  const visibleItems = filterDataItems(kind, items);
  const editing = state.activeDataEditor?.kind === kind
    ? items.find((item) => item.id === state.activeDataEditor.id)
    : null;
  if (editing) return renderDataEditor(kind, editing);

  return `
    ${managerHeader(config.title, config.description, [])}
    <div class="data-actions">
      <button class="btn primary" type="button" data-add-data="${kind}">${esc(config.addLabel)}</button>
      <button class="btn" type="button" data-export-data="${kind}">匯出列表</button>
      <span class="hint">這裡建立的資料可被首頁模塊與前台列表頁引用。</span>
    </div>
    <div class="data-filters">
      <div class="field">
        <label>搜尋</label>
        <input type="search" value="${esc(filters.search)}" placeholder="搜尋標題、類型、分類、狀態或備註" data-data-filter="search" data-data-filter-kind="${kind}">
      </div>
      <div class="field">
        <label>分類</label>
        <select data-data-filter="category" data-data-filter-kind="${kind}">
          <option value="">全部分類</option>
          ${categoryOptions.map((category) => `<option value="${esc(category)}" ${filters.category === category ? "selected" : ""}>${esc(category)}</option>`).join("")}
        </select>
      </div>
      <div class="field">
        <label>狀態</label>
        <select data-data-filter="status" data-data-filter-kind="${kind}">
          <option value="">全部狀態</option>
          ${statusOptions.map((status) => `<option value="${esc(status)}" ${filters.status === status ? "selected" : ""}>${esc(status)}</option>`).join("")}
        </select>
      </div>
      <button class="btn compact" type="button" data-clear-data-filter="${kind}">清除篩選</button>
    </div>
    <table class="admin-table">
      <thead>
        <tr>${config.columns.map((column) => `<th>${esc(column)}</th>`).join("")}<th>操作</th></tr>
      </thead>
      <tbody>
        ${visibleItems.length ? visibleItems.map((item) => `
          <tr>
            <td><strong>${esc(item.title)}</strong></td>
            <td>${esc(item.type)}</td>
            <td>${esc(item.category)}</td>
            <td><span class="status-pill">${esc(item.status)}</span></td>
            <td>${esc(item.updated)}</td>
            <td>
              <div class="actions">
                <button class="btn" type="button" data-edit-data="${kind}:${item.id}">編輯</button>
                <button class="btn danger" type="button" data-delete-data="${kind}:${item.id}">刪除</button>
              </div>
            </td>
          </tr>
        `).join("") : `<tr><td colspan="${config.columns.length + 1}"><p class="hint">沒有符合條件的資料。</p></td></tr>`}
      </tbody>
    </table>
  `;
}

function getPageTemplate(templateId) {
  return pageTemplates.find((item) => item.id === templateId) || pageTemplates[0];
}

function recommendedPageSource(templateId) {
  return ["article", "faq"].includes(templateId) ? "data" : "manual";
}

function choosePageTemplate(templateId) {
  state.pendingPageTemplate = templateId;
  state.pendingPageSource = recommendedPageSource(templateId);
  state.isChoosingPageTemplate = true;
  state.isChoosingPageSource = true;
  render();
}

function addPageFromTemplate(templateId, contentSource) {
  const template = getPageTemplate(templateId);
  const source = pageContentSources.find((item) => item.id === contentSource) || pageContentSources[0];
  state.customPageCount += 1;
  const page = createPage({
    id: `custom-page-${Date.now()}`,
    name: `${template.defaultName} ${state.customPageCount}`,
    template: template.id,
    contentSource: source.id,
    dataSource: source.id === "data" ? (template.id === "faq" ? "FAQ 管理" : "文章管理") : "",
    dataFormat: "collection",
    dataFilter: source.id === "data" ? "狀態=已發布；排序=最新優先" : "",
    dataMapping: source.id === "data" ? template.fields.map((field, index) => `field${index} = ${field}`).join("\n") : "",
    status: "草稿",
    visible: "尚未顯示"
  });
  state.pages.push(page);
  state.activePageId = page.id;
  state.activePreviewPageId = page.id;
  state.pageMode = "edit";
  state.pageSavedNotice = "";
  state.isChoosingPageTemplate = false;
  state.isChoosingPageSource = false;
  state.pendingPageTemplate = "";
  state.pendingPageSource = "";
  render();
}

function deletePage(pageId) {
  state.pages.forEach((page) => {
    if (page.parentId === pageId) page.parentId = "";
  });
  state.pages = state.pages.filter((page) => page.id !== pageId);
  if (state.activePageId === pageId) {
    state.activePageId = state.pages[0]?.id || "";
  }
  if (state.activePreviewPageId === pageId) {
    state.activePreviewPageId = "";
  }
  state.pageMode = "list";
  state.pageSavedNotice = "";
  render();
}

function savePage() {
  const page = state.pages.find((item) => item.id === state.activePageId);
  state.pageSavedNotice = page ? `已儲存「${page.name}」` : "已儲存頁面";
  render();
}

function reorderPage(fromId, toId) {
  if (!fromId || !toId || fromId === toId) return;
  const fromIndex = state.pages.findIndex((page) => page.id === fromId);
  const toIndex = state.pages.findIndex((page) => page.id === toId);
  if (fromIndex < 0 || toIndex < 0) return;
  const next = [...state.pages];
  const [moved] = next.splice(fromIndex, 1);
  next.splice(toIndex, 0, moved);
  state.pages = next;
  render();
}

function orderedPages() {
  const topPages = state.pages.filter((page) => !page.parentId);
  const childPages = state.pages.filter((page) => page.parentId);
  const grouped = topPages.flatMap((page) => [
    page,
    ...childPages.filter((child) => child.parentId === page.id)
  ]);
  const groupedIds = new Set(grouped.map((page) => page.id));
  return [
    ...grouped,
    ...childPages.filter((page) => !groupedIds.has(page.id))
  ];
}

function parentPageOptions(activePage) {
  return state.pages.filter((page) => {
    if (page.id === activePage.id || page.parentId) return false;
    return !state.pages.some((child) => child.parentId === activePage.id);
  });
}

function renderPageManager() {
  const activePage = state.pages.find((page) => page.id === state.activePageId) || state.pages[0];
  const activeTemplate = activePage ? getPageTemplate(activePage.template) : pageTemplates[0];
  const displayPages = orderedPages();
  const parentOptions = activePage ? parentPageOptions(activePage) : [];
  const isAddingPageFlow = state.isChoosingPageTemplate || state.isChoosingPageSource;
  const templateChooser = `
    <section class="settings-card template-panel">
      <div class="manager-head compact">
        <div>
          <h2>1. 選擇頁面類型</h2>
          <p>先決定頁面用途；案例、活動與知識內容都由「文章管理」統一提供。</p>
        </div>
        <button class="btn" type="button" data-cancel-page-template>取消新增</button>
      </div>
      <div class="template-grid">
        ${pageTemplates.map((template) => `
          <button class="template-card ${state.pendingPageTemplate === template.id ? "is-selected" : ""}" type="button" data-page-template="${template.id}">
            <div class="template-preview">
              <span class="line short"></span>
              <span class="line"></span>
              <span class="line"></span>
            </div>
            <strong>${esc(template.name)}</strong>
            <p>${esc(template.description)}</p>
            <span class="pill">${template.fields.length} 個內容欄位</span>
            <span class="pill ${recommendedPageSource(template.id) === "data" ? "" : "green"}">${recommendedPageSource(template.id) === "data" ? "建議接背景資料" : "建議手動撰寫"}</span>
          </button>
        `).join("")}
      </div>
    </section>
  `;
  const pendingTemplate = getPageTemplate(state.pendingPageTemplate);
  const sourceChooser = `
    <section class="settings-card template-panel source-step ${state.pendingPageTemplate ? "is-ready" : "is-disabled"}">
      <div class="manager-head compact">
        <div>
          <h2>2. 選擇內容來源</h2>
          <p>${state.pendingPageTemplate ? `已選「${esc(pendingTemplate.name)}」；決定要手動撰寫，或從文章／FAQ 管理帶入內容。` : "請先完成第 1 步，這裡會顯示適合的內容來源。"}</p>
        </div>
      </div>
      <div class="template-grid source-grid">
        ${pageContentSources.map((source) => `
          <button class="template-card source-card ${state.pendingPageSource === source.id ? "is-selected" : ""}" type="button" data-page-source="${source.id}" ${state.pendingPageTemplate ? "" : "disabled"}>
            <strong>${esc(source.name)}</strong>
            <p>${source.id === "data" && state.pendingPageTemplate === "faq" ? "從 FAQ 管理帶入問題與答案，適合建立常見問題頁。" : source.id === "data" && state.pendingPageTemplate === "article" ? "從文章管理帶入最新消息、知識文章、活動公告或案例文章。" : esc(source.description)}</p>
            <span class="pill">${source.id === "data" ? "可串接資料庫 / 匯入資料" : "直接填寫內容欄位"}</span>
          </button>
        `).join("")}
      </div>
      <div class="source-step-actions">
        <span class="hint">${state.pendingPageSource ? `目前選擇：${pageContentSources.find((source) => source.id === state.pendingPageSource)?.name || ""}` : "請選擇一種內容來源"}</span>
        <button class="btn primary" type="button" data-confirm-page-source ${state.pendingPageTemplate && state.pendingPageSource ? "" : "disabled"}>確定建立頁面</button>
      </div>
    </section>
  `;

  const pageList = `
    <section class="settings-card">
      <div class="section-head">
        <div>
          <h3>頁面列表與選單排序</h3>
          <p>拖曳左側把手調整順序；頁面最多兩層，可在下方編輯區指定上層頁面。</p>
        </div>
        <span class="pill green">拖曳排序</span>
      </div>
      <table class="admin-table page-tree-table">
        <thead>
          <tr><th class="drag-head"></th><th>頁面</th><th>模板</th><th>狀態</th><th>顯示位置</th><th>需要填寫的內容</th><th>操作</th></tr>
        </thead>
        <tbody>
          ${displayPages.map((page) => {
            const template = getPageTemplate(page.template);
            const parentPage = state.pages.find((item) => item.id === page.parentId);
            return `
              <tr class="${activePage?.id === page.id ? "is-selected-row" : ""} ${page.parentId ? "child-row" : ""}" draggable="true" data-page-row="${page.id}">
                <td class="drag-cell" aria-label="拖曳排序"><span class="drag">⋮⋮</span></td>
                <td>
                  <div class="page-table-name">
                    ${page.parentId ? `<span class="child-connector">↳</span>` : ""}
                    <strong>${esc(page.name)}</strong>
                    ${page.parentId ? `<span class="pill">子頁：${esc(parentPage?.name || "未指定")}</span>` : `<span class="pill green">主頁</span>`}
                  </div>
                </td>
                <td>${esc(template.name)}</td>
                <td>${esc(page.status)}</td>
                <td>${esc(page.visible)}</td>
                <td>${template.fields.map((field) => `<span class="pill">${esc(field)}</span>`).join(" ")}</td>
                <td>
                  <div class="actions">
                    <button class="btn primary" type="button" data-edit-page="${page.id}">編輯內容</button>
                    <button class="btn danger" type="button" data-delete-page="${page.id}">刪除</button>
                  </div>
                </td>
              </tr>
            `;
          }).join("")}
        </tbody>
      </table>
    </section>
  `;

  const editPanel = activePage ? `
    <section class="page-edit-panel">
      <div class="section-head page-edit-head">
        <div>
          <h3>編輯頁面內容</h3>
          <p>目前編輯：${esc(activePage.name)}｜${esc(activeTemplate.name)}</p>
        </div>
        <div class="actions">
          ${state.pageSavedNotice ? `<span class="pill green">${esc(state.pageSavedNotice)}</span>` : ""}
          <button class="btn primary" type="button" data-save-page>儲存頁面</button>
          <button class="btn" type="button" data-back-page-list>返回頁面列表</button>
        </div>
      </div>

      <div class="settings-card">
        <div class="section-head">
          <div>
            <h3>選擇頁面模板</h3>
            <p>先決定這個前台頁面的用途；切換模板會重置版型與內容欄位。</p>
          </div>
        </div>
        <div class="field compact-select">
          <label>頁面模板</label>
          <select data-page-field="template">
            ${pageTemplates.map((template) => `<option value="${template.id}" ${activePage.template === template.id ? "selected" : ""}>${template.name}｜${template.description}</option>`).join("")}
          </select>
        </div>
      </div>

      <div class="settings-card variant-settings">
        <div class="section-head">
          <div>
            <h3>選擇版型</h3>
            <p>選擇這個頁面的內容呈現方式，確認畫面時可切換到版面預覽。</p>
          </div>
          <div class="tabs" role="tablist" aria-label="頁面版面設定">
            <button class="tab ${state.pageLayoutTab === "settings" ? "is-active" : ""}" type="button" data-page-layout-tab="settings">方案設定</button>
            <button class="tab ${state.pageLayoutTab === "preview" ? "is-active" : ""}" type="button" data-page-layout-tab="preview">版面預覽</button>
          </div>
        </div>
        ${state.pageLayoutTab === "preview" ? renderPageLayoutPreview(activePage) : `
          <div class="field compact-select">
            <label>選擇版面方案</label>
            <div class="field-help">版型只決定內容排列方式，不會改變整站品牌樣式。</div>
            <select data-page-field="layout">
              ${activeTemplate.layouts.map((layout) => `<option value="${layout.id}" ${activePage.layout === layout.id ? "selected" : ""}>方案 ${layout.id}：${layout.name}｜${layout.description}</option>`).join("")}
            </select>
          </div>
        `}
      </div>

      <div class="settings-card">
        <div class="section-head">
          <div>
            <h3>頁面基本設定</h3>
            <p>${esc(activeTemplate.description)}</p>
          </div>
          <button class="btn danger" type="button" data-delete-page="${activePage.id}">刪除頁面</button>
        </div>
        <div class="field-grid">
          <div class="field">
            <label>頁面名稱</label>
            <div class="field-help">顯示在後台與前台選單中的頁面名稱。</div>
            <input type="text" value="${esc(activePage.name)}" data-page-field="name">
          </div>
          <div class="field">
            <label>頁面狀態</label>
            <div class="field-help">控制頁面是否對外發布。</div>
            <select data-page-field="status">
              ${["已發布", "草稿", "停用"].map((status) => `<option ${activePage.status === status ? "selected" : ""}>${status}</option>`).join("")}
            </select>
          </div>
          <div class="field">
            <label>顯示位置</label>
            <div class="field-help">控制頁面出現在主選單、Footer 或 CTA。</div>
            <select data-page-field="visible">
              ${["主選單 / Footer", "主選單", "Footer", "CTA", "尚未顯示"].map((visible) => `<option ${activePage.visible === visible ? "selected" : ""}>${visible}</option>`).join("")}
            </select>
          </div>
          <div class="field">
            <label>內容來源</label>
            <div class="field-help">決定這個頁面內容是手動撰寫，或從背景資料帶入。</div>
            <select data-page-field="contentSource">
              ${pageContentSources.map((source) => `<option value="${source.id}" ${activePage.contentSource === source.id ? "selected" : ""}>${source.name}</option>`).join("")}
            </select>
          </div>
          <div class="field full">
            <label>上層頁面</label>
            <div class="field-help">最多兩階：不選就是主頁；選擇一個主頁後，這頁會成為它的子頁面。</div>
            <select data-page-field="parentId">
              <option value="" ${activePage.parentId ? "" : "selected"}>無，作為主頁</option>
              ${parentOptions.map((page) => `<option value="${page.id}" ${activePage.parentId === page.id ? "selected" : ""}>${page.name}</option>`).join("")}
            </select>
          </div>
        </div>
      </div>

      ${renderPageDataSettings(activePage)}
      ${renderPageContentEditor(activePage, activeTemplate)}
      ${renderPageMetaSettings(activePage)}
    </section>
  ` : `<section class="settings-card">尚未建立頁面，請先新增頁面。</section>`;

  return `
    ${managerHeader("前台頁面管理", "基於目前整站官網模板，管理首頁以外的頁面內容、選單階層、導覽顯示與 Footer 摘要。", [])}
    ${renderCurrentSiteTemplateNotice("前台頁面")}
    ${state.pageMode === "edit" ? `
      <div class="page-actions">
        <span class="hint">正在編輯單一頁面；完成後可返回列表調整排序或階層。</span>
      </div>
      ${editPanel}
    ` : `
      ${isAddingPageFlow ? `
        <div class="page-add-flow">
          ${state.isChoosingPageTemplate ? templateChooser : ""}
          ${state.isChoosingPageSource ? sourceChooser : ""}
        </div>
      ` : `
        <div class="page-actions">
          <span class="hint">排序直接拖曳列表列即可，階層最多兩層。</span>
          <button class="btn primary" type="button" data-add-page>新增頁面</button>
        </div>
        ${pageList}
      `}
    `}
  `;
}

function renderPageDataSettings(page) {
  if (page.contentSource !== "data") return "";
  return `
    <div class="settings-card">
      <div class="section-head">
        <div>
          <h3>背景資料設定</h3>
          <p>用資料集合產生頁面內容，例如最新消息、案例列表、FAQ 或服務項目。</p>
        </div>
      </div>
      <div class="field-grid">
        <div class="field">
          <label>資料格式</label>
          <div class="field-help">通常選後台資料集合；CSV / JSON 可作為匯入或外部 API 預留。</div>
          <select data-page-field="dataFormat">
            ${pageDataFormats.map((format) => `<option value="${format.id}" ${page.dataFormat === format.id ? "selected" : ""}>${format.name}｜${format.description}</option>`).join("")}
          </select>
        </div>
        <div class="field">
          <label>資料集合</label>
            <div class="field-help">文章、活動、知識文章與案例統一從文章管理帶入；FAQ 頁則從 FAQ 管理帶入。</div>
          <select data-page-field="dataSource">
            ${["文章管理", "FAQ 管理", "商品 / 服務管理", "據點 / 資源管理", "自訂資料來源"].map((source) => `<option value="${source}" ${page.dataSource === source ? "selected" : ""}>${source}</option>`).join("")}
          </select>
        </div>
        <div class="field">
          <label>篩選 / 排序 / 筆數</label>
          <div class="field-help">最新資訊範例：內容類型=最新消息；狀態=已發布；排序=發布日期新到舊；筆數=6。</div>
          <input type="text" value="${esc(page.dataFilter || "")}" data-page-field="dataFilter">
        </div>
        <div class="field">
          <label>欄位對應</label>
          <div class="field-help">把資料欄位對應到頁面欄位，例如標題、摘要、圖片、連結。</div>
          <textarea data-page-field="dataMapping">${esc(page.dataMapping || "")}</textarea>
        </div>
      </div>
    </div>
  `;
}

function renderPageMetaSettings(page) {
  return `
    <div class="settings-card page-meta-settings">
      <div class="section-head">
        <div>
          <h3>搜尋與分享設定</h3>
          <p>這些設定只套用在「${esc(page.name)}」；未特別修改時會沿用全站 SEO 預設值。</p>
        </div>
        <span class="pill">頁面層級</span>
      </div>
      <div class="field-grid">
        <div class="field full">
          <label>SEO 標題</label>
          <div class="field-help">顯示在搜尋結果與瀏覽器分頁，建議清楚說明這個頁面的主題。</div>
          <input type="text" value="${esc(page.seoTitle || "")}" data-page-meta="seoTitle" placeholder="例如：品牌故事｜利每家智慧富氫水站">
        </div>
        <div class="field full">
          <label>Meta 描述</label>
          <div class="field-help">用一到兩句話摘要頁面內容，讓訪客在搜尋結果中知道這頁提供什麼。</div>
          <textarea data-page-meta="seoDescription" placeholder="輸入這個頁面的搜尋摘要">${esc(page.seoDescription || "")}</textarea>
        </div>
        <div class="field">
          <label>分享標題</label>
          <div class="field-help">分享到 LINE、Facebook 等平台時使用；可與 SEO 標題不同。</div>
          <input type="text" value="${esc(page.shareTitle || "")}" data-page-meta="shareTitle" placeholder="未填寫時沿用 SEO 標題">
        </div>
        <div class="field">
          <label>分享圖片</label>
          <div class="field-help">社群分享預覽使用的圖片，建議準備 1200 × 630 px。</div>
          <div class="file-upload-row">
            <label class="btn compact" for="page-share-image-upload">上傳圖片</label>
            <input class="hidden" id="page-share-image-upload" type="file" accept="image/png,image/jpeg,image/webp,image/gif" data-page-meta-image>
            <span class="file-name">${esc(page.shareImageUrl || "尚未上傳分享圖片")}</span>
          </div>
        </div>
        <div class="field full">
          <label>分享描述</label>
          <div class="field-help">社群分享卡片顯示的補充說明；可留空並沿用 Meta 描述。</div>
          <textarea data-page-meta="shareDescription" placeholder="未填寫時沿用 Meta 描述">${esc(page.shareDescription || "")}</textarea>
        </div>
        <div class="field">
          <label>搜尋引擎收錄</label>
          <div class="field-help">草稿、測試頁或不希望被搜尋的頁面可選擇不收錄。</div>
          <select data-page-meta="indexable">
            <option value="yes" ${page.indexable !== "no" ? "selected" : ""}>允許搜尋引擎收錄</option>
            <option value="no" ${page.indexable === "no" ? "selected" : ""}>不要收錄此頁</option>
          </select>
        </div>
      </div>
    </div>
  `;
}

function renderPageContentEditor(page, template) {
  if (page.contentSource === "data") {
    return `
      <div class="settings-card">
        <h3>頁面顯示文案</h3>
        <p class="field-help">列表資料會由「背景資料設定」帶入；這裡只填頁面最上方給訪客看的頁首標題與說明。例：標題填「成功案例」，簡介填「看看不同社區與企業如何導入智慧富氫水站」。</p>
        <div class="field-grid">
          <div class="field">
            <label>頁首標題</label>
            <div class="field-help">顯示在列表頁最上方，不是單一案例或文章標題。</div>
            <input type="text" value="${esc(page.content?.field0 || page.name)}" data-page-content="field0">
          </div>
          <div class="field">
            <label>頁首簡介</label>
            <div class="field-help">用一兩句話說明這個列表頁收錄哪些內容；可留空。</div>
            <input type="text" value="${esc(page.content?.field1 || "")}" data-page-content="field1">
          </div>
        </div>
      </div>
    `;
  }

  return `
    <div class="settings-card">
      <h3>頁面內容</h3>
      <p class="field-help">手動撰寫此頁內容。適合關於我們、品牌故事、聯絡頁或單一活動頁。</p>
      <div class="page-content-editor">
        <section>
          <h4>頁首內容</h4>
          <div class="field-grid">
            <div class="field">
              <label>頁面標題</label>
              <input type="text" value="${esc(page.content?.field0 || page.name)}" data-page-content="field0">
            </div>
            <div class="field">
              <label>頁面簡介</label>
              <input type="text" value="${esc(page.content?.field1 || "")}" data-page-content="field1">
            </div>
          </div>
        </section>
        <section>
          <h4>${page.template === "contact" ? "聯絡資訊" : "主要內容"}</h4>
          <div class="field-grid">
            ${template.fields.slice(2).map((field, offset) => {
              const index = offset + 2;
              const isLong = page.template === "content" && index === 2;
              return `
                <div class="field ${isLong ? "full" : ""}">
                  <label>${esc(field)}</label>
                  ${isLong ? `<textarea data-page-content="field${index}">${esc(page.content?.[`field${index}`] || "")}</textarea>` : `<input type="text" value="${esc(page.content?.[`field${index}`] || "")}" data-page-content="field${index}">`}
                </div>
              `;
            }).join("")}
          </div>
        </section>
      </div>
    </div>
  `;
}

function renderPageLayoutPreview(page) {
  const template = getPageTemplate(page.template);
  const isB = page.layout === "B";
  const title = esc(page.content?.field0 || page.name);
  const intro = esc(page.content?.field1 || template.description);
  if (["article", "case", "service"].includes(page.template)) {
    return `
      <div class="mini-preview">
        <div class="${isB ? "mini-list" : "mini-grid"}">
          ${isB ? `
            <div class="mini-row"><strong>${title}</strong><span>主項目</span></div>
            <div class="mini-row"><strong>${esc(page.content?.field2 || template.fields[2])}</strong><span>列表項目</span></div>
            <div class="mini-row"><strong>${esc(page.content?.field3 || template.fields[3])}</strong><span>列表項目</span></div>
          ` : `
            <div class="mini-card"><strong>${title}</strong><span>${intro}</span></div>
            <div class="mini-card"><strong>${esc(page.content?.field2 || template.fields[2])}</strong><span>卡片內容</span></div>
            <div class="mini-card"><strong>${esc(page.content?.field3 || template.fields[3])}</strong><span>卡片內容</span></div>
          `}
        </div>
        <p>方案 ${esc(page.layout)}：${esc(template.layouts.find((item) => item.id === page.layout)?.description || "")}</p>
      </div>
    `;
  }
  return `
    <div class="mini-preview">
      <div class="mini-split ${isB ? "layout-b" : ""}">
        <div class="mini-copy"><strong>${title}</strong><span>${intro}</span><small>${esc(page.content?.field2 || template.fields[2] || "主要內容")}</small></div>
        <div class="mini-image">${esc(template.name)}</div>
      </div>
      <p>方案 ${esc(page.layout)}：${esc(template.layouts.find((item) => item.id === page.layout)?.description || "")}</p>
    </div>
  `;
}

function updatePageField(page, input) {
  if (!page) return;
  state.pageSavedNotice = "";
  page[input.dataset.pageField] = input.value;
  if (input.dataset.pageField === "parentId" && input.value === page.id) {
    page.parentId = "";
  }
  if (input.dataset.pageField === "template") {
    const template = getPageTemplate(page.template);
    page.layout = "A";
    state.pageLayoutTab = "settings";
    page.content = {};
    template.fields.forEach((field, index) => {
      page.content[`field${index}`] = index === 0 ? page.name : field;
    });
    if (page.contentSource === "data") {
      page.dataSource = `${template.name}資料來源`;
      page.dataMapping = template.fields.map((field, index) => `field${index} = ${field}`).join("\n");
    }
  }
  if (input.dataset.pageField === "contentSource" && page.contentSource === "data") {
    const template = getPageTemplate(page.template);
    page.dataFormat = page.dataFormat || "collection";
    page.dataSource = page.dataSource || (page.template === "faq" ? "FAQ 管理" : "文章管理");
    page.dataFilter = page.dataFilter || "內容類型=最新消息；狀態=已發布；排序=發布日期新到舊；筆數=6";
    page.dataMapping = page.dataMapping || template.fields.map((field, index) => `field${index} = ${field}`).join("\n");
  }
  render();
}

function updatePageContent(page, input) {
  state.pageSavedNotice = "";
  page.content = page.content || {};
  page.content[input.dataset.pageContent] = input.value;
  renderPreview();
}

function updatePageMeta(page, input) {
  if (!page) return;
  state.pageSavedNotice = "";
  if (input.dataset.pageMetaImage) {
    const file = input.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      page.shareImageUrl = String(reader.result || "");
      render();
    });
    reader.readAsDataURL(file);
    return;
  }
  page[input.dataset.pageMeta] = input.value;
  if (input.dataset.pageMeta === "seoTitle" && !page.shareTitle) {
    page.shareTitle = input.value;
  }
  if (input.dataset.pageMeta === "seoDescription" && !page.shareDescription) {
    page.shareDescription = input.value;
  }
  renderPreview();
  updateSaveState();
}

function switchAdminSection(section) {
  const previousSection = state.adminSection;
  state.adminSection = section;
  const parentGroup = navSectionGroups[state.adminSection];
  if (parentGroup) state.navGroups[parentGroup] = true;
  if (section !== previousSection) {
    state.activeDataEditor = null;
  }
  if (state.adminSection === "home") {
    state.homeMode = "overview";
  }
  if (state.adminSection !== "home") {
    state.homeMode = "overview";
    state.isChoosingModuleTemplate = false;
    state.pendingModuleTypeId = "";
    state.insertAfterId = "";
  }
  if (state.adminSection !== "pages") {
    state.isChoosingPageTemplate = false;
    state.isChoosingPageSource = false;
    state.pendingPageTemplate = "";
    state.pendingPageSource = "";
    state.pageMode = "list";
    state.pageSavedNotice = "";
  }
  if (state.adminSection !== "adminUsers") {
    state.activeAdminUserEditor = null;
  }
  if (!opsPageConfig[state.adminSection]) {
    state.activeOpsEditor = null;
  }
  render();
}

function bindAdminSectionLinks(root) {
  root.querySelectorAll("[data-admin-section]").forEach((button) => {
    button.addEventListener("click", () => switchAdminSection(button.dataset.adminSection));
  });
}

function updateNavGroups() {
  document.querySelectorAll("[data-nav-group]").forEach((group) => {
    group.classList.toggle("hidden", !state.navGroups[group.dataset.navGroup]);
  });
  document.querySelectorAll("[data-nav-group-toggle]").forEach((button) => {
    const isExpanded = Boolean(state.navGroups[button.dataset.navGroupToggle]);
    button.classList.toggle("is-collapsed", !isExpanded);
    button.setAttribute("aria-expanded", String(isExpanded));
    button.querySelector(".nav-group-chevron").textContent = isExpanded ? "−" : "+";
  });
}

function renderAdminUsers() {
  const editor = state.activeAdminUserEditor;
  if (editor) {
    const user = state.adminUsers.find((item) => item.id === editor.id);
    if (!user) {
      state.activeAdminUserEditor = null;
      return renderAdminUsers();
    }
    return `
      ${managerHeader("後台帳號管理", "管理可以登入後台的人員、角色與使用狀態。", [])}
      <section class="settings-card">
        <div class="section-title">
          <div>
            <span class="save-pill ${editor.isDirty ? "unsaved" : ""}">${editor.isDirty ? "尚未儲存" : "已儲存"}</span>
            <h3>${esc(editor.isNew ? "新增後台帳號" : `編輯帳號｜${user.name}`)}</h3>
            <p>角色會決定使用者可以操作哪些後台功能。</p>
          </div>
          <div class="actions">
            <button class="btn primary" type="button" data-save-admin-user>儲存使用者</button>
            <button class="btn" type="button" data-back-admin-users>返回列表</button>
          </div>
        </div>
        <div class="field-grid">
          <div class="field">
            <label>姓名 / 顯示名稱</label>
            <input type="text" value="${esc(user.name)}" data-admin-user-field="${user.id}:name">
          </div>
          <div class="field">
            <label>Email / 登入帳號</label>
            <input type="email" value="${esc(user.email)}" data-admin-user-field="${user.id}:email">
          </div>
          <div class="field">
            <label>角色</label>
            <select data-admin-user-field="${user.id}:role">
              ${["管理員", "編輯者", "檢視者"].map((role) => `<option value="${role}" ${user.role === role ? "selected" : ""}>${role}</option>`).join("")}
            </select>
          </div>
          <div class="field">
            <label>帳號狀態</label>
            <select data-admin-user-field="${user.id}:status">
              ${["啟用", "停用"].map((status) => `<option value="${status}" ${user.status === status ? "selected" : ""}>${status}</option>`).join("")}
            </select>
          </div>
          <div class="field full">
            <label>內部備註</label>
            <textarea data-admin-user-field="${user.id}:note">${esc(user.note)}</textarea>
          </div>
        </div>
      </section>
    `;
  }

  const filters = state.adminUserFilters;
  const query = filters.search.trim().toLowerCase();
  const users = state.adminUsers.filter((user) => {
    const searchable = [user.name, user.email, user.role, user.status, user.note].join(" ").toLowerCase();
    return (!query || searchable.includes(query)) &&
      (!filters.role || user.role === filters.role) &&
      (!filters.status || user.status === filters.status);
  });
  return `
    ${managerHeader("後台帳號管理", "管理後台登入帳號、角色與啟用狀態，確保每位協作者只看到需要的功能。", [])}
    <section class="cms-workbench">
      <div class="list-controls">
        <div class="list-control-fields">
          <div class="field">
            <label>搜尋</label>
            <input type="search" value="${esc(filters.search)}" placeholder="搜尋姓名或 Email" data-admin-user-filter="search">
          </div>
          <div class="field">
            <label>角色</label>
            <select data-admin-user-filter="role">
              <option value="">全部角色</option>
              ${["管理員", "編輯者", "檢視者"].map((role) => `<option value="${role}" ${filters.role === role ? "selected" : ""}>${role}</option>`).join("")}
            </select>
          </div>
          <div class="field">
            <label>狀態</label>
            <select data-admin-user-filter="status">
              <option value="">全部狀態</option>
              ${["啟用", "停用"].map((status) => `<option value="${status}" ${filters.status === status ? "selected" : ""}>${status}</option>`).join("")}
            </select>
          </div>
        </div>
        <div class="list-control-actions">
          <button class="btn" type="button" data-clear-admin-user-filter>清除篩選</button>
          <button class="btn primary" type="button" data-add-admin-user>新增帳號</button>
        </div>
      </div>
      <table class="admin-table">
        <thead><tr><th>使用者</th><th>角色</th><th>狀態</th><th>最後登入</th><th>備註</th><th>操作</th></tr></thead>
        <tbody>
          ${users.length ? users.map((user) => `
            <tr>
              <td><strong>${esc(user.name)}</strong><p class="hint">${esc(user.email)}</p></td>
              <td>${esc(user.role)}</td>
              <td><span class="status-pill">${esc(user.status)}</span></td>
              <td>${esc(user.lastLogin)}</td>
              <td>${esc(user.note || "未填寫")}</td>
              <td><div class="actions"><button class="btn" type="button" data-edit-admin-user="${user.id}">編輯</button><button class="btn danger" type="button" data-delete-admin-user="${user.id}">刪除</button></div></td>
            </tr>
          `).join("") : `<tr><td colspan="6"><p class="hint">沒有符合條件的使用者。</p></td></tr>`}
        </tbody>
      </table>
    </section>
  `;
}

function renderManagerPanel() {
  const isHome = state.adminSection === "home";
  document.querySelectorAll("[data-admin-section]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.adminSection === state.adminSection);
  });
  updateNavGroups();

  document.querySelector(".module-sidebar").classList.toggle("hidden", !isHome);
  document.querySelector(".settings-panel").classList.toggle("hidden", !isHome);
  els.managerPanel.classList.toggle("hidden", isHome);
  els.saveBtn.classList.toggle("hidden", !isHome);
  if (isHome) return;

  const managerPages = {
    pages: renderPageManager(),
    adminUsers: renderAdminUsers(),
    blueprintArticles: renderBlueprintCollection("articles"),
    blueprintFaq: renderBlueprintCollection("articles", "FAQ"),
    blueprintProducts: renderBlueprintCollection("products"),
    blueprintResources: renderBlueprintCollection("resources"),
    contactRecords: renderOpsManager("contactRecords"),
    supportMessages: renderOpsManager("supportMessages"),
    media: `
      ${managerHeader("媒體庫", "上傳圖片、Logo、檔案，供頁面、文章、案例引用。", ["上傳圖片", "新增資料夾"])}
      <div class="admin-cards">
        <article><strong>首頁主視覺</strong><span>12 張</span><p>Hero、產品、場景底圖。</p></article>
        <article><strong>案例照片</strong><span>24 張</span><p>社區、水站與活動圖片。</p></article>
        <article><strong>報告檔案</strong><span>9 份</span><p>SGS、水質報告、合作文件。</p></article>
      </div>
    `,
    seo: `
      ${managerHeader("Banner / Meta 管理", "管理首頁 Banner、各頁 Meta title、description 與社群分享圖片。", ["儲存 Meta"])}
      ${simpleTable(["頁面", "搜尋標題", "搜尋摘要", "分享圖"], [["首頁", "已填", "已填", "已上傳"], ["找水站", "已填", "待補", "已上傳"], ["合作案例", "待補", "待補", "未上傳"]])}
    `,
    tracking: `
      ${managerHeader("追蹤設定", "管理 GA4、GTM、Meta Pixel、LINE Tag、UTM 與 Consent。", ["儲存追蹤碼"])}
      ${simpleTable(["項目", "狀態", "備註"], [["GA4", "已設定", "G-XXXXXXX"], ["GTM", "待確認", "需工程部署"], ["LINE Tag", "已設定", "轉換事件待補"]])}
    `,
    brandStyle: renderBrandStyleManager(),
    site: `
      ${managerHeader("網站設定", "管理網站名稱、Logo、聯絡資訊、Footer、社群連結與基礎設定。", ["儲存設定"])}
      ${simpleTable(["設定", "目前內容", "狀態"], [["網站名稱", "利每家智慧富氫水站", "已設定"], ["聯絡電話", "0968-104-098", "已設定"], ["Footer 選單", "6 個連結", "已設定"]])}
    `,
    logs: `
      ${managerHeader("操作紀錄", "記錄誰修改了內容，方便追查。", ["篩選紀錄"])}
      ${simpleTable(["時間", "使用者", "動作", "項目"], [["2026/07/17 15:50", "Joy", "更新", "首頁模塊"], ["2026/07/17 15:30", "Joy", "新增", "前台頁面"], ["2026/07/16 18:03", "Editor", "上傳", "媒體庫圖片"]])}
    `
  };

  els.managerPanel.innerHTML = managerPages[state.adminSection] || managerPages.pages;
  bindAdminSectionLinks(els.managerPanel);

  const activeDataKind = dataSectionKinds[state.adminSection];
  if (activeDataKind) {
    els.managerPanel.querySelectorAll("[data-add-data]").forEach((button) => {
      button.addEventListener("click", () => {
        const kind = button.dataset.addData;
        const config = dataManagerConfig[kind];
        const item = createDataItem(kind, config);
        state.dataCollections[kind].push(item);
        state.activeDataEditor = { kind, id: item.id, isDirty: true };
        render();
      });
    });
    els.managerPanel.querySelectorAll("[data-quick-add-data]").forEach((button) => {
      button.addEventListener("click", () => {
        const kind = button.dataset.quickAddData;
        const config = dataManagerConfig[kind];
        const item = createDataItem(kind, config);
        item.type = button.dataset.quickAddType;
        item.category = button.dataset.quickAddType;
        item.title = `${button.dataset.quickAddType} ${state.dataCollections[kind].length + 1}`;
        state.dataCollections[kind].push(item);
        state.activeDataEditor = { kind, id: item.id, isDirty: true };
        render();
      });
    });
    els.managerPanel.querySelectorAll("[data-article-type-tab]").forEach((button) => {
      button.addEventListener("click", () => {
        state.activeArticleType = button.dataset.articleTypeTab;
        state.dataFilters.articles = { ...state.dataFilters.articles, search: "", category: "", status: "" };
        render();
      });
    });
    els.managerPanel.querySelector("[data-download-faq-template]")?.addEventListener("click", () => {
      const csv = "question,answer,category,sort,status\n範例問題,範例答案,FAQ,1,草稿";
      const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "faq-import-template.csv";
      link.click();
      URL.revokeObjectURL(url);
    });
    els.managerPanel.querySelector("[data-faq-batch-upload]")?.addEventListener("change", (event) => {
      const fileName = event.currentTarget.files?.[0]?.name || "批次上傳檔案";
      const item = createDataItem("articles", dataManagerConfig.articles);
      item.type = "FAQ";
      item.category = "FAQ";
      item.title = `批次匯入 FAQ：${fileName}`;
      item.body = "這是批次上傳後建立的示意資料；正式版會解析檔案並建立多筆 FAQ。";
      item.sort = String(state.dataCollections.articles.filter((entry) => entry.type === "FAQ").length + 1);
      state.dataCollections.articles.push(item);
      state.activeDataEditor = { kind: "articles", id: item.id, isDirty: true };
      render();
    });
    els.managerPanel.querySelectorAll("[data-edit-data]").forEach((button) => {
      button.addEventListener("click", () => {
        const [kind, id] = button.dataset.editData.split(":");
        state.activeDataEditor = { kind, id, isDirty: false };
        render();
      });
    });
    els.managerPanel.querySelectorAll("[data-data-filter]").forEach((input) => {
      const updateFilter = () => {
        const kind = input.dataset.dataFilterKind;
        state.dataFilters[kind][input.dataset.dataFilter] = input.value;
        render();
      };
      input.addEventListener(input.type === "search" ? "input" : "change", updateFilter);
    });
    els.managerPanel.querySelector("[data-clear-data-filter]")?.addEventListener("click", (event) => {
      const kind = event.currentTarget.dataset.clearDataFilter;
      state.dataFilters[kind] = { search: "", category: "", status: "" };
      render();
    });
    els.managerPanel.querySelector("[data-back-data-list]")?.addEventListener("click", () => {
      state.activeDataEditor = null;
      render();
    });
    els.managerPanel.querySelector("[data-save-data]")?.addEventListener("click", () => {
      if (state.activeDataEditor) state.activeDataEditor.isDirty = false;
      render();
    });
    els.managerPanel.querySelectorAll("[data-data-field]").forEach((input) => {
      input.addEventListener("input", () => {
        const item = state.dataCollections[input.dataset.dataKind].find((entry) => entry.id === input.dataset.dataId);
        if (item) {
          item[input.dataset.dataField] = input.dataset.pinSwitch !== undefined
            ? (input.checked ? "是" : "否")
            : input.value;
        }
        if (state.activeDataEditor) state.activeDataEditor.isDirty = true;
      });
      input.addEventListener("change", () => {
        const item = state.dataCollections[input.dataset.dataKind].find((entry) => entry.id === input.dataset.dataId);
        if (item) {
          item[input.dataset.dataField] = input.dataset.pinSwitch !== undefined
            ? (input.checked ? "是" : "否")
            : input.value;
          if (input.dataset.dataField === "status" && item.status !== "已發布") {
            item.isPinned = "否";
          }
        }
        if (state.activeDataEditor) state.activeDataEditor.isDirty = true;
        render();
      });
    });
    els.managerPanel.querySelectorAll("[data-file-field]").forEach((input) => {
      input.addEventListener("change", () => {
        const item = state.dataCollections[input.dataset.dataKind].find((entry) => entry.id === input.dataset.dataId);
        if (item) item[input.dataset.fileField] = input.files?.[0]?.name || "";
        if (state.activeDataEditor) state.activeDataEditor.isDirty = true;
        render();
      });
    });
    els.managerPanel.querySelectorAll("[data-delete-data]").forEach((button) => {
      button.addEventListener("click", () => {
        const [kind, id] = button.dataset.deleteData.split(":");
        state.dataCollections[kind] = state.dataCollections[kind].filter((item) => item.id !== id);
        render();
      });
    });
    els.managerPanel.querySelectorAll("[data-export-data]").forEach((button) => {
      button.addEventListener("click", () => {
        const kind = button.dataset.exportData;
        const rows = state.dataCollections[kind].map((item) => [item.title, item.type, item.category, item.status, item.updated].join(","));
        const csv = ["title,type,category,status,note", ...rows].join("\n");
        const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `${kind}.csv`;
        link.click();
        URL.revokeObjectURL(url);
      });
    });
  }

  if (state.adminSection === "adminUsers") {
    els.managerPanel.querySelector("[data-add-admin-user]")?.addEventListener("click", () => {
      const user = {
        id: `admin-${Date.now()}`,
        name: "新使用者",
        email: "",
        role: "編輯者",
        status: "啟用",
        lastLogin: "尚未登入",
        note: ""
      };
      state.adminUsers.push(user);
      state.activeAdminUserEditor = { id: user.id, isNew: true, isDirty: true };
      render();
    });
    els.managerPanel.querySelectorAll("[data-edit-admin-user]").forEach((button) => {
      button.addEventListener("click", () => {
        state.activeAdminUserEditor = { id: button.dataset.editAdminUser, isNew: false, isDirty: false };
        render();
      });
    });
    els.managerPanel.querySelectorAll("[data-delete-admin-user]").forEach((button) => {
      button.addEventListener("click", () => {
        state.adminUsers = state.adminUsers.filter((user) => user.id !== button.dataset.deleteAdminUser);
        if (state.activeAdminUserEditor?.id === button.dataset.deleteAdminUser) state.activeAdminUserEditor = null;
        render();
      });
    });
    els.managerPanel.querySelector("[data-back-admin-users]")?.addEventListener("click", () => {
      state.activeAdminUserEditor = null;
      render();
    });
    els.managerPanel.querySelector("[data-save-admin-user]")?.addEventListener("click", () => {
      if (state.activeAdminUserEditor) {
        state.activeAdminUserEditor.isDirty = false;
        state.activeAdminUserEditor.isNew = false;
      }
      render();
    });
    els.managerPanel.querySelectorAll("[data-admin-user-field]").forEach((input) => {
      const updateField = () => {
        const [id, field] = input.dataset.adminUserField.split(":");
        const user = state.adminUsers.find((item) => item.id === id);
        if (user) user[field] = input.value;
        if (state.activeAdminUserEditor) state.activeAdminUserEditor.isDirty = true;
      };
      input.addEventListener("input", updateField);
      input.addEventListener("change", () => {
        updateField();
        render();
      });
    });
    els.managerPanel.querySelectorAll("[data-admin-user-filter]").forEach((input) => {
      const updateFilter = () => {
        state.adminUserFilters[input.dataset.adminUserFilter] = input.value;
        render();
      };
      input.addEventListener(input.type === "search" ? "input" : "change", updateFilter);
    });
    els.managerPanel.querySelector("[data-clear-admin-user-filter]")?.addEventListener("click", () => {
      state.adminUserFilters = { search: "", role: "", status: "" };
      render();
    });
  }

  if (opsPageConfig[state.adminSection]) {
    els.managerPanel.querySelector("[data-add-ops]")?.addEventListener("click", (event) => {
      const kind = event.currentTarget.dataset.addOps;
      const config = opsPageConfig[kind];
      const item = createOpsRecord(kind);
      state[config.rowsKey].push(item);
      state.activeOpsEditor = { kind, id: item.id, isDirty: true };
      render();
    });
    els.managerPanel.querySelectorAll("[data-edit-ops]").forEach((button) => {
      button.addEventListener("click", () => {
        const [kind, id] = button.dataset.editOps.split(":");
        state.activeOpsEditor = { kind, id, isDirty: false };
        render();
      });
    });
    els.managerPanel.querySelectorAll("[data-delete-ops]").forEach((button) => {
      button.addEventListener("click", () => {
        const [kind, id] = button.dataset.deleteOps.split(":");
        const config = opsPageConfig[kind];
        state[config.rowsKey] = state[config.rowsKey].filter((item) => item.id !== id);
        render();
      });
    });
    els.managerPanel.querySelectorAll("[data-ops-filter]").forEach((input) => {
      const updateFilter = () => {
        const [kind, field] = input.dataset.opsFilter.split(":");
        state.opsFilters[kind][field] = input.value;
        render();
      };
      input.addEventListener(input.type === "search" ? "input" : "change", updateFilter);
    });
    els.managerPanel.querySelector("[data-clear-ops-filter]")?.addEventListener("click", (event) => {
      const kind = event.currentTarget.dataset.clearOpsFilter;
      state.opsFilters[kind] = { search: "", type: "", status: "" };
      render();
    });
    els.managerPanel.querySelector("[data-back-ops-list]")?.addEventListener("click", () => {
      state.activeOpsEditor = null;
      render();
    });
    els.managerPanel.querySelector("[data-save-ops]")?.addEventListener("click", () => {
      if (state.activeOpsEditor) state.activeOpsEditor.isDirty = false;
      render();
    });
    els.managerPanel.querySelectorAll("[data-ops-field]").forEach((input) => {
      const updateField = () => {
        const [kind, id, field] = input.dataset.opsField.split(":");
        const config = opsPageConfig[kind];
        const item = state[config.rowsKey].find((entry) => entry.id === id);
        if (item) item[field] = input.value;
        if (state.activeOpsEditor) state.activeOpsEditor.isDirty = true;
      };
      input.addEventListener("input", updateField);
      input.addEventListener("change", () => {
        updateField();
        render();
      });
    });
    els.managerPanel.querySelector("[data-export-ops]")?.addEventListener("click", (event) => {
      const kind = event.currentTarget.dataset.exportOps;
      const config = opsPageConfig[kind];
      const rows = state[config.rowsKey].map((item) => Object.values(item).map((value) => `"${String(value ?? "").replace(/"/g, '""')}"`).join(","));
      const csv = [Object.keys(state[config.rowsKey][0] || {}).join(","), ...rows].join("\n");
      const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${kind}.csv`;
      link.click();
      URL.revokeObjectURL(url);
    });
  }

  if (state.adminSection === "brandStyle") {
    els.managerPanel.querySelectorAll("[data-style-template]").forEach((button) => {
      button.addEventListener("click", () => {
        state.siteStyle.templateId = button.dataset.styleTemplate;
        render();
      });
    });
    els.managerPanel.querySelectorAll("[data-style-palette]").forEach((button) => {
      button.addEventListener("click", () => {
        state.siteStyle.paletteId = button.dataset.stylePalette;
        render();
      });
    });
    els.managerPanel.querySelector("[data-save-style]")?.addEventListener("click", () => {
      state.siteStyle.savedTemplateId = state.siteStyle.templateId;
      state.siteStyle.savedPaletteId = state.siteStyle.paletteId;
      render();
    });
  }

  if (state.adminSection === "pages") {
    els.managerPanel.querySelector("[data-add-page]")?.addEventListener("click", () => {
      state.isChoosingPageTemplate = true;
      state.isChoosingPageSource = false;
      state.pendingPageTemplate = "";
      state.pendingPageSource = "";
      state.pageMode = "list";
      render();
    });
    els.managerPanel.querySelector("[data-cancel-page-template]")?.addEventListener("click", () => {
      state.isChoosingPageTemplate = false;
      state.isChoosingPageSource = false;
      state.pendingPageTemplate = "";
      state.pendingPageSource = "";
      render();
    });
    els.managerPanel.querySelectorAll("[data-page-template]").forEach((button) => {
      button.addEventListener("click", () => choosePageTemplate(button.dataset.pageTemplate));
    });
    els.managerPanel.querySelectorAll("[data-page-source]").forEach((button) => {
      button.addEventListener("click", () => {
        state.pendingPageSource = button.dataset.pageSource;
        render();
      });
    });
    els.managerPanel.querySelector("[data-confirm-page-source]")?.addEventListener("click", () => {
      if (state.pendingPageTemplate && state.pendingPageSource) {
        addPageFromTemplate(state.pendingPageTemplate, state.pendingPageSource);
      }
    });
    els.managerPanel.querySelectorAll("[data-delete-page]").forEach((button) => {
      button.addEventListener("click", () => deletePage(button.dataset.deletePage));
    });
    els.managerPanel.querySelectorAll("[data-edit-page]").forEach((button) => {
      button.addEventListener("click", () => {
        state.activePageId = button.dataset.editPage;
        state.activePreviewPageId = button.dataset.editPage;
        state.pageMode = "edit";
        state.pageLayoutTab = "settings";
        state.pageSavedNotice = "";
        render();
      });
    });
    els.managerPanel.querySelectorAll("[data-back-page-list]").forEach((button) => {
      button.addEventListener("click", () => {
        state.pageMode = "list";
        state.isChoosingPageTemplate = false;
        state.isChoosingPageSource = false;
        state.pendingPageTemplate = "";
        state.pendingPageSource = "";
        state.pageSavedNotice = "";
        render();
      });
    });
    els.managerPanel.querySelector("[data-save-page]")?.addEventListener("click", savePage);
    els.managerPanel.querySelectorAll("[data-page-layout-tab]").forEach((button) => {
      button.addEventListener("click", () => {
        state.pageLayoutTab = button.dataset.pageLayoutTab;
        render();
      });
    });
    els.managerPanel.querySelectorAll("[data-page-row]").forEach((row) => {
      row.addEventListener("dragstart", (event) => {
        event.dataTransfer.setData("text/plain", row.dataset.pageRow);
      });
      row.addEventListener("dragover", (event) => event.preventDefault());
      row.addEventListener("drop", (event) => {
        event.preventDefault();
        reorderPage(event.dataTransfer.getData("text/plain"), row.dataset.pageRow);
      });
    });
    const activePage = state.pages.find((page) => page.id === state.activePageId);
    els.managerPanel.querySelectorAll("[data-page-field]").forEach((input) => {
      input.addEventListener("change", () => updatePageField(activePage, input));
      input.addEventListener("input", () => {
        if (input.dataset.pageField === "name") updatePageField(activePage, input);
      });
    });
    els.managerPanel.querySelectorAll("[data-page-content]").forEach((input) => {
      input.addEventListener("input", () => updatePageContent(activePage, input));
      input.addEventListener("change", () => render());
    });
    els.managerPanel.querySelectorAll("[data-page-meta]").forEach((input) => {
      input.addEventListener("input", () => updatePageMeta(activePage, input));
      input.addEventListener("change", () => updatePageMeta(activePage, input));
    });
    els.managerPanel.querySelectorAll("[data-page-meta-image]").forEach((input) => {
      input.addEventListener("change", () => updatePageMeta(activePage, input));
    });
  }
}

function render() {
  els.addModuleBtn.textContent = state.homeMode === "insert" ? "返回現況" : "新增模塊";
  const isHomeSubFlow = state.adminSection === "home" && state.homeMode !== "overview";
  els.moduleToolbar.classList.toggle("hidden", isHomeSubFlow);
  els.summary.classList.toggle("hidden", isHomeSubFlow);
  els.backHomeOverviewBtn.classList.toggle("hidden", !isHomeSubFlow);
  renderSummary();
  renderModuleList();
  renderSettings();
  renderManagerPanel();
  renderPreview();
  setView(state.view);
  updateSaveState();
}

els.addModuleBtn.addEventListener("click", toggleModuleTemplateChooser);
els.backHomeOverviewBtn.addEventListener("click", () => {
  state.homeMode = "overview";
  state.pendingModuleTypeId = "";
  state.isChoosingModuleTemplate = false;
  state.insertAfterId = "";
  render();
});
els.saveBtn.addEventListener("click", saveDraft);
document.querySelectorAll("[data-admin-section]").forEach((button) => {
  button.addEventListener("click", () => {
    switchAdminSection(button.dataset.adminSection);
  });
});
document.querySelectorAll("[data-nav-group-toggle]").forEach((button) => {
  button.addEventListener("click", () => {
    const group = button.dataset.navGroupToggle;
    state.navGroups[group] = !state.navGroups[group];
    updateNavGroups();
  });
});
document.querySelectorAll("[data-view]").forEach((button) => {
  button.addEventListener("click", () => setView(button.dataset.view));
});

render();

