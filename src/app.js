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
  {
    id: "content",
    name: "一般內容頁",
    defaultName: "關於頁面",
    description: "適合品牌故事、公司介紹、理念說明；欄位固定，用內容範本引導不同用途。",
    fields: ["頁面標題", "頁面摘要", "內容區塊", "封面圖片"],
    bestFor: "品牌故事、公司介紹、理念說明、服務說明",
    layouts: [
      { id: "A", name: "標準內容版", description: "上方標題，下方段落內容。", preview: "copy", entry: "templates/page-content-standard/code.html" },
      { id: "B", name: "重點側欄版", description: "左側內容，右側重點摘要。", preview: "split", entry: "templates/page-content-sidebar/code.html" }
    ]
  },
  {
    id: "article",
    name: "文章列表頁",
    defaultName: "最新消息",
    description: "適合最新消息、知識中心、文章分類入口；列表資料由背景資料帶入。",
    fields: ["列表標題", "列表說明", "文章來源", "顯示筆數"],
    bestFor: "最新消息、活動、知識中心、案例文章",
    layouts: [
      { id: "A", name: "三欄文章卡", description: "文章以三欄卡片呈現。", preview: "cards", entry: "templates/page-article-cards/code.html" },
      { id: "B", name: "主文章 + 列表", description: "左側主文章，右側文章列表。", preview: "featured", entry: "templates/page-article-featured/code.html" }
    ]
  },
  {
    id: "contact",
    name: "聯絡表單頁",
    defaultName: "聯絡我們",
    description: "適合聯絡資訊、LINE 諮詢、預約或詢價表單；技術追蹤由系統處理。",
    fields: ["頁面標題", "表單說明", "聯絡方式", "表單欄位", "送出提示"],
    bestFor: "聯絡資訊、LINE 諮詢、表單詢問",
    layouts: [
      { id: "A", name: "表單右側版", description: "左側資訊，右側表單。", preview: "form-side", entry: "templates/page-contact-side/code.html" },
      { id: "B", name: "表單置中版", description: "表單置中，資訊在下方。", preview: "form-center", entry: "templates/page-contact-center/code.html" }
    ]
  },
  {
    id: "faq",
    name: "FAQ 頁",
    defaultName: "常見問題",
    description: "適合常見問題、購買說明、服務問答；問答內容必須在前台可見。",
    fields: ["頁面標題", "頁面說明", "問題分類", "問答資料"],
    bestFor: "常見問題、購買說明、服務問答",
    layouts: [
      { id: "A", name: "手風琴版", description: "問題以展開列表呈現。", preview: "accordion", entry: "templates/page-faq-accordion/code.html" },
      { id: "B", name: "分類側欄版", description: "左側分類，右側問答列表。", preview: "faq-sidebar", entry: "templates/page-faq-sidebar/code.html" }
    ]
  },
  {
    id: "product",
    name: "商品 / 服務列表頁",
    defaultName: "商品服務",
    description: "適合商品方案、服務項目、方案比較或服務入口；項目資料可重複引用。",
    fields: ["列表標題", "列表說明", "商品 / 服務來源", "CTA"],
    bestFor: "商品方案、服務項目、方案比較",
    layouts: [
      { id: "A", name: "商品卡片格狀版", description: "以卡片呈現多項商品或服務。", preview: "cards", entry: "templates/page-product-cards/code.html" },
      { id: "B", name: "方案比較列表版", description: "用較密集的列表呈現規格與差異。", preview: "compare", entry: "templates/page-product-compare/code.html" }
    ]
  },
  {
    id: "resource",
    name: "據點列表頁",
    defaultName: "服務據點",
    description: "適合門市據點、水站、服務處或合作據點；據點資料可被多個前台頁面重複引用。",
    fields: ["列表標題", "列表說明", "縣市 / 區域", "據點資料"],
    bestFor: "門市據點、水站、服務處、合作據點",
    layouts: [
      { id: "A", name: "據點卡片版", description: "以卡片呈現地址、狀態與行動入口。", preview: "resource-cards", entry: "templates/page-resource-cards/code.html" },
      { id: "B", name: "地區列表版", description: "依地區分組，適合大量據點或資源。", preview: "resource-list", entry: "templates/page-resource-list/code.html" }
    ]
  }
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

const pageDataSources = [
  { id: "articles", name: "文章", manager: "文章管理", description: "最新消息、活動、知識文章與案例文章。", categories: ["全部", "最新消息", "活動公告", "知識文章", "成功案例"] },
  { id: "cases", name: "案例", manager: "案例資料管理", description: "成功案例、合作案例與導入成果。", categories: ["全部", "成功案例", "社區案例", "企業案例", "公共空間"] },
  { id: "products", name: "商品 / 服務", manager: "商品 / 服務管理", description: "商品、方案、服務項目與服務入口。", categories: ["全部", "商品", "服務", "方案"] },
  { id: "faq", name: "FAQ", manager: "FAQ 管理", description: "常見問題、購買說明與服務問答。", categories: ["全部", "購買說明", "服務問答", "設備保養", "付款配送"] },
  { id: "resources", name: "據點資料", manager: "據點管理", description: "管理前台據點卡片使用的圖片、排序、縣市、名稱、地址與行動連結。", categories: ["全部", "桃園市", "台北市", "新北市"] }
];

const moduleItemCountRules = {
  cards: {
    A: { recommended: 4, min: 2, max: 4, note: "沉浸情境面板最多 4 張；少於 4 張時系統會放大卡片比例。" },
    B: { recommended: 4, min: 2, max: 6, note: "錯落圖文卡片可放 2–6 張；5–6 張會自動換行。" }
  },
  steps: {
    A: { recommended: 3, min: 2, max: 5, note: "流程步驟建議 3 步；超過 5 步建議拆成詳細流程頁。" },
    B: { recommended: 3, min: 2, max: 5, note: "流程步驟建議 3 步；超過 5 步建議拆成詳細流程頁。" }
  },
  faq: {
    A: { recommended: 5, min: 3, max: 8, note: "首頁 FAQ 可放 3–8 題；更多問題建議改放 FAQ 頁。" },
    B: { recommended: 5, min: 3, max: 8, note: "首頁 FAQ 可放 3–8 題；更多問題建議改放 FAQ 頁。" }
  },
  news: {
    A: { recommended: 3, min: 3, max: 6, note: "首頁最新消息建議 3 則；更多內容交給文章列表頁承接。" },
    B: { recommended: 3, min: 3, max: 6, note: "首頁最新消息建議 3 則；更多內容交給文章列表頁承接。" }
  }
};

const defaultSiteMeta = {
  siteName: "利每家智慧富氫水站",
  titleSuffix: "利每家智慧富氫水站",
  description: "以智慧飲水科技與永續服務，打造更健康、更便利的生活體驗。",
  shareImageUrl: "",
  indexable: "yes",
  followable: "yes",
  productionBaseUrl: "https://www.example.com"
};

const defaultSiteInfo = {
  logoFileName: "尚未選擇 Logo",
  logoPreviewUrl: "",
  brandName: "利每家・智慧富氫水站",
  englishName: "LIMEIJIA Smart Hydrogen Water Station",
  siteName: "利每家智慧富氫水站",
  phone: "0968-104-098",
  serviceHours: "9:00～18:00",
  email: "service@example.com",
  lineUrl: "https://line.me/R/ti/p/@limeijia",
  address: "請填寫公司或門市地址",
  footerCompany: "利每家智慧富氫水站",
  seoTitleSuffix: "利每家智慧富氫水站",
  seoDescription: "以智慧飲水科技與永續服務，打造更健康、更便利的生活體驗。",
  shareImageName: "尚未選擇分享圖",
  showHeaderPhone: "yes",
  showServiceHours: "yes",
  showFooterInfo: "yes"
};

const socialPlatformOptions = [
  { id: "instagram", name: "Instagram", url: "https://www.instagram.com/" },
  { id: "youtube", name: "YouTube", url: "https://www.youtube.com/" },
  { id: "tiktok", name: "TikTok", url: "https://www.tiktok.com/" },
  { id: "line", name: "LINE", url: "https://line.me/R/ti/p/" },
  { id: "facebook", name: "Facebook", url: "https://www.facebook.com/" },
  { id: "threads", name: "Threads", url: "https://www.threads.net/" },
  { id: "x", name: "X", url: "https://x.com/" },
  { id: "linkedin", name: "LinkedIn", url: "https://www.linkedin.com/" },
  { id: "whatsapp", name: "WhatsApp", url: "https://wa.me/" },
  { id: "website", name: "官網 / 外部網站", url: "https://" },
  { id: "other", name: "其他", url: "https://" }
];

const floatingIconOptions = [
  { id: "line", name: "LINE", symbol: "chat" },
  { id: "diamond", name: "鑽石", symbol: "diamond" },
  { id: "calendar", name: "日曆", symbol: "calendar" },
  { id: "instagram", name: "Instagram", symbol: "camera" },
  { id: "youtube", name: "YouTube", symbol: "play" },
  { id: "tiktok", name: "TikTok", symbol: "music" },
  { id: "map", name: "地圖", symbol: "pin" },
  { id: "phone", name: "電話", symbol: "phone" },
  { id: "mail", name: "信件", symbol: "mail" },
  { id: "spark", name: "亮點", symbol: "spark" }
];

const defaultSocialLinks = [
  { id: "social-instagram", platform: "instagram", label: "Instagram", url: "https://www.instagram.com/" },
  { id: "social-youtube", platform: "youtube", label: "YouTube", url: "https://www.youtube.com/" },
  { id: "social-tiktok", platform: "tiktok", label: "TikTok", url: "https://www.tiktok.com/" }
];

const defaultFloatingEntries = [
  { id: "float-line", title: "LINE", subtitle: "洽詢預約", linkType: "page", linkValue: "contact", icon: "line" },
  { id: "float-stations", title: "找水站", subtitle: "地圖導覽", linkType: "page", linkValue: "stations", icon: "diamond" },
  { id: "float-hours", title: "服務時間", subtitle: "", linkType: "page", linkValue: "contact", icon: "calendar" }
];

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
    dataCategory: item.dataCategory || "",
    dataSort: item.dataSort || "",
    dataLimit: item.dataLimit || "",
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

const seoStorageKey = "limeijia-page-seo-settings-v1";

function seoSlugFromId(id) {
  if (id === "home") return "";
  return String(id || "")
    .replace(/-page$/, "")
    .replace(/[^a-zA-Z0-9-]/g, "-")
    .replace(/-{2,}/g, "-")
    .replace(/^-|-$/g, "");
}

function seoSlugFromName(name, fallbackId = "") {
  const slug = String(name || "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[\/\\?#&=+%:"'<>|{}[\]^`]+/g, "-")
    .replace(/-{2,}/g, "-")
    .replace(/^-|-$/g, "");
  return slug || seoSlugFromId(fallbackId);
}

function pageCanonicalUrl(slug) {
  const base = defaultSiteMeta.productionBaseUrl.replace(/\/$/, "");
  return slug ? `${base}/${slug}` : `${base}/`;
}

function defaultSeoTitleForName(name) {
  return `${name || "未命名頁面"}｜${defaultSiteMeta.titleSuffix}`;
}

function createSeoSetting({ id, name }) {
  const slug = id === "home" ? "" : seoSlugFromName(name, id);
  const seoTitle = defaultSeoTitleForName(name);
  return {
    pageId: id,
    pageName: name,
    seoTitle,
    seoDescription: defaultSiteMeta.description,
    slug,
    keywords: [],
    syncOg: true,
    ogTitle: seoTitle,
    ogDescription: defaultSiteMeta.description,
    useDefaultOgImage: true,
    ogImageUrl: "",
    ogImageName: "",
    ogImageType: "",
    ogImageSize: 0,
    ogImageWidth: 0,
    ogImageHeight: 0,
    indexable: true,
    followable: true,
    canonicalMode: "auto",
    canonicalUrl: pageCanonicalUrl(slug)
  };
}

function syncSeoDefaultsFromPage(page, previousName = "") {
  if (!page) return;
  const setting = state.pageSeoSettings.find((item) => item.pageId === page.id);
  if (!setting) return;
  const oldName = previousName || setting.pageName || page.name;
  const oldTitle = defaultSeoTitleForName(oldName);
  const nextTitle = defaultSeoTitleForName(page.name);
  const oldSlugFromName = seoSlugFromName(oldName, page.id);
  const oldSlugFromId = seoSlugFromId(page.id);
  const nextSlug = seoSlugFromName(page.name, page.id);
  const slugLooksDefault = !setting.slug || setting.slug === oldSlugFromName || setting.slug === oldSlugFromId;
  const titleLooksDefault = !setting.seoTitle || setting.seoTitle === oldTitle || setting.seoTitle === defaultSeoTitleForName(setting.pageName);
  const ogTitleLooksDefault = !setting.ogTitle || setting.ogTitle === setting.seoTitle || setting.ogTitle === oldTitle || setting.syncOg;

  setting.pageName = page.name;
  if (slugLooksDefault) setting.slug = nextSlug;
  if (titleLooksDefault) setting.seoTitle = nextTitle;
  if (ogTitleLooksDefault) setting.ogTitle = setting.syncOg ? setting.seoTitle : nextTitle;
  if (setting.syncOg) setting.ogDescription = setting.seoDescription;
  if (setting.canonicalMode === "auto" || !setting.canonicalUrl || setting.canonicalUrl === pageCanonicalUrl(oldSlugFromName) || setting.canonicalUrl === pageCanonicalUrl(oldSlugFromId)) {
    setting.canonicalUrl = pageCanonicalUrl(setting.slug);
  }

  const pageSeoLooksDefault = !page.seoTitle || page.seoTitle === oldTitle;
  const pageShareLooksDefault = !page.shareTitle || page.shareTitle === oldTitle;
  if (pageSeoLooksDefault) page.seoTitle = nextTitle;
  if (pageShareLooksDefault) page.shareTitle = nextTitle;
}

function initialSeoSettings() {
  return [
    createSeoSetting({ id: "home", name: "首頁" }),
    ...initialPages.map((page) => createSeoSetting({ id: page.id, name: page.name }))
  ];
}

function loadSeoSettings() {
  const defaults = initialSeoSettings();
  try {
    const stored = JSON.parse(localStorage.getItem(seoStorageKey) || "[]");
    if (!Array.isArray(stored)) return defaults;
    return defaults.map((item) => {
      const saved = stored.find((entry) => entry.pageId === item.pageId);
      return saved ? { ...item, ...saved, pageName: item.pageName } : item;
    });
  } catch (error) {
    return defaults;
  }
}

function persistSeoSettings() {
  try {
    localStorage.setItem(seoStorageKey, JSON.stringify(state.pageSeoSettings));
  } catch (error) {
    // Demo storage can fail in private browsing; the in-memory state still works.
  }
}

function defaultContent(item) {
  const itemLinksEnabled = ["news", "cards", "faq"].includes(item.type);
  return {
    title: item.name,
    itemCount: defaultModuleItemCount(item.type, item.variant || "A"),
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
    item5: "內容項目 5",
    item5Subtitle: "",
    item6: "內容項目 6",
    item6Subtitle: "",
    item7: "內容項目 7",
    item7Subtitle: "",
    item8: "內容項目 8",
    item8Subtitle: "",
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
    item4LinkTarget: `/${item.id}/4`,
    item5LinkEnabled: itemLinksEnabled,
    item5LinkText: "查看更多",
    item5LinkTarget: `/${item.id}/5`,
    item6LinkEnabled: itemLinksEnabled,
    item6LinkText: "查看更多",
    item6LinkTarget: `/${item.id}/6`,
    item7LinkEnabled: itemLinksEnabled,
    item7LinkText: "查看更多",
    item7LinkTarget: `/${item.id}/7`,
    item8LinkEnabled: itemLinksEnabled,
    item8LinkText: "查看更多",
    item8LinkTarget: `/${item.id}/8`
  };
}

function itemCountRule(module) {
  return moduleItemCountRules[module.type]?.[module.variant || "A"] || null;
}

function defaultModuleItemCount(type, variant = "A") {
  return moduleItemCountRules[type]?.[variant]?.recommended || 3;
}

function itemCountOptions(module) {
  const rule = itemCountRule(module);
  if (!rule) return [];
  return Array.from({ length: rule.max - rule.min + 1 }, (_, index) => rule.min + index);
}

function currentItemCount(module) {
  module.content = module.content || defaultContent(module);
  const rule = itemCountRule(module);
  if (!rule) return 3;
  const raw = Number(module.content.itemCount || rule.recommended);
  const count = Number.isFinite(raw) ? raw : rule.recommended;
  const normalized = Math.min(rule.max, Math.max(rule.min, count));
  module.content.itemCount = String(normalized);
  return normalized;
}

function renderItemCountField(module, label = "顯示項目數量", options = {}) {
  const rule = itemCountRule(module);
  if (!rule) return "";
  const count = currentItemCount(module);
  const compactNote = options.compactNote || "";
  const note = options.hideNote ? "" : (compactNote || rule.note);
  return `
    <div class="field item-count-field ${compactNote ? "compact-note" : ""}">
      <label>${esc(label)}</label>
      <select data-content-field="itemCount">
        ${itemCountOptions(module).map((value) => `<option value="${value}" ${count === value ? "selected" : ""}>${value} 個</option>`).join("")}
      </select>
      ${note ? `<div class="field-help">${esc(note)}</div>` : ""}
    </div>
  `;
}

function itemNumbers(module) {
  return Array.from({ length: currentItemCount(module) }, (_, index) => index + 1);
}

function appendItemParams(params, c, count, max) {
  params.set("itemCount", String(count));
  for (let index = 1; index <= max; index += 1) {
    params.set(`item${index}`, previewPlainText(c[`item${index}`] || ""));
    params.set(`item${index}Subtitle`, previewPlainText(c[`item${index}Subtitle`] || ""));
    params.set(`item${index}Date`, previewPlainText(c[`item${index}Date`] || ""));
    const linkText = previewPlainText(c[`item${index}LinkText`] || "");
    params.set(`item${index}LinkEnabled`, linkText ? "1" : "0");
    params.set(`item${index}LinkText`, linkText);
    params.set(`item${index}LinkTarget`, previewPlainText(c[`item${index}LinkTarget`] || ""));
  }
}

function previewPlainText(value, fallback = "") {
  const raw = String(value || "").trim();
  if (!raw) return fallback;
  const withoutTags = htmlToPlainText(raw.replace(/<br\s*\/?>/gi, " "));
  const cleaned = withoutTags
    .replace(/<\/?[a-z][^>]*>/gi, " ")
    .replace(/[<>]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const looksBroken = /<\/?[a-z][^>]*>|�|||||蝬|擐|瘞|撖|摰|閮|餈|隤|嚗/.test(raw);
  if (!cleaned || looksBroken) return fallback || cleaned;
  return cleaned;
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
    { id: "article-4", title: "常見問題範例", type: "FAQ", category: "一般問題", status: "已發布", updated: "2026/07/12" },
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
    { id: "resource-1", title: "茂榮大樓1樓", type: "據點", category: "桃園市", status: "顯示", updated: "桃園市桃園區復興路96號", sort: "01", summary: "案場地址", linkUrl: "Google 導航連結", ctaText: "LINE 詢問連結", mainFileName: "據點照片.jpg" },
    { id: "resource-2", title: "新北板橋水站", type: "水站", category: "新北市", status: "顯示", updated: "新北市板橋區範例路 88 號", sort: "02", summary: "水站地址", linkUrl: "Google 導航連結", ctaText: "LINE 詢問連結", mainFileName: "據點照片.jpg" },
    { id: "resource-3", title: "桃園合作據點", type: "合作據點", category: "桃園市", status: "待補", updated: "待補地址", sort: "03", summary: "合作據點地址", linkUrl: "", ctaText: "", mainFileName: "" }
  ]
};

const initialArticleCategories = ["最新消息", "知識文章", "活動公告", "案例"];

const initialContactRecords = [
  { id: "contact-1", name: "王先生", contact: "visitor@example.com", type: "聯絡詢問", source: "聯絡我們頁", subject: "想了解服務內容", status: "待處理", owner: "未指派", createdAt: "2026/07/20 10:30", note: "希望收到方案介紹。" },
  { id: "contact-2", name: "李小姐", contact: "0912-000-000", type: "預約諮詢", source: "首頁 CTA", subject: "預約顧問聯繫", status: "已回覆", owner: "客服 A", createdAt: "2026/07/19 15:12", note: "已約下週二電話說明。" },
  { id: "contact-3", name: "陳主任", contact: "manager@example.com", type: "合作洽詢", source: "合作頁", subject: "想索取合作資料", status: "追蹤中", owner: "業務 B", createdAt: "2026/07/18 09:45", note: "需補寄簡報與報價範圍。" }
];

const initialAdminUsers = [
  { id: "admin-1", name: "Joy", email: "joy@example.com", role: "最高管理者", status: "啟用", lastLogin: "2026/07/21 09:20", note: "網站主要管理者" },
  { id: "admin-2", name: "內容編輯", email: "editor@example.com", role: "編輯者", status: "啟用", lastLogin: "2026/07/20 16:45", note: "可管理文章、FAQ 與頁面內容" },
  { id: "admin-3", name: "檢視人員", email: "viewer@example.com", role: "檢視者", status: "停用", lastLogin: "尚未登入", note: "僅供檢視後台資料" }
];

const initialSupportMessages = [
  { id: "message-1", name: "林小姐", channel: "LINE", subject: "詢問營業時間", lastMessage: "請問週末有人回覆嗎？", status: "待回覆", owner: "客服 A", updatedAt: "2026/07/20 11:05", note: "需確認週末排班。" },
  { id: "message-2", name: "張先生", channel: "網站留言", subject: "產品規格問題", lastMessage: "想確認是否有規格表可以下載。", status: "處理中", owner: "客服 B", updatedAt: "2026/07/20 09:20", note: "已轉商品負責人確認。" },
  { id: "message-3", name: "黃小姐", channel: "Email", subject: "售後服務詢問", lastMessage: "設備安裝後若有問題如何報修？", status: "已結案", owner: "客服 A", updatedAt: "2026/07/18 16:40", note: "已提供客服信箱與報修流程。" }
];

const adminPermissionTree = [
  {
    id: "siteSettings",
    name: "網站設定",
    children: [
      { id: "brandStyle", name: "品牌樣式設定" },
      { id: "siteBasicInfo", name: "基本資訊" },
      { id: "seo", name: "SEO 管理" },
      { id: "tracking", name: "追蹤碼設定" },
      { id: "site", name: "網站設定" }
    ]
  },
  {
    id: "content",
    name: "內容管理",
    children: [
      { id: "home", name: "首頁模組" },
      { id: "pages", name: "前台頁面" },
      { id: "blueprintArticles", name: "文章內容" },
      { id: "blueprintFaq", name: "FAQ 內容" },
      { id: "blueprintProducts", name: "商品 / 服務資料" },
      { id: "blueprintResources", name: "據點資料" }
    ]
  },
  {
    id: "interaction",
    name: "互動與客服",
    children: [
      { id: "contactRecords", name: "聯絡表單紀錄" },
      { id: "supportMessages", name: "客服訊息內容" }
    ]
  },
  {
    id: "accounts",
    name: "帳號權限",
    children: [
      { id: "adminRoles", name: "角色權限管理" },
      { id: "adminUsers", name: "後台帳號管理" }
    ]
  },
  {
    id: "maintenance",
    name: "系統維運",
    children: [
      { id: "logs", name: "操作紀錄" }
    ]
  }
];

const allAdminPermissionIds = adminPermissionTree.flatMap((group) => group.children.map((item) => item.id));

const initialAdminRoles = [
  {
    id: "role-super-admin",
    name: "最高管理者",
    description: "擁有所有後台功能與角色權限設定能力。",
    permissions: clone(allAdminPermissionIds),
    isSuperAdmin: true,
    updated: "2026/07/21"
  },
  {
    id: "role-admin",
    name: "管理員",
    description: "可管理網站設定、內容、客服資料與操作紀錄。",
    permissions: allAdminPermissionIds.filter((id) => id !== "adminRoles"),
    updated: "2026/07/21"
  },
  {
    id: "role-editor",
    name: "編輯者",
    description: "負責首頁、前台頁面與內容資料維護。",
    permissions: ["home", "pages", "blueprintArticles", "blueprintFaq", "blueprintProducts", "blueprintResources"],
    updated: "2026/07/21"
  },
  {
    id: "role-viewer",
    name: "檢視者",
    description: "僅供檢視網站內容與操作紀錄。",
    permissions: ["home", "pages", "blueprintArticles", "blueprintFaq", "blueprintProducts", "blueprintResources", "logs"],
    updated: "2026/07/21"
  }
];

const siteStyleTemplates = [
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
  {
    id: "teal",
    name: "專業藍綠",
    primary: "#0e6a8c",
    accent: "#1f6b4a",
    bg: "#f3f7f8",
    surface: "#ffffff",
    muted: "#64747b",
    text: "#0b1f2a",
    spec: {
      tone: "冷色、乾淨、專業可信",
      bestFor: ["健康科技", "水處理", "醫療照護", "B2B 服務"],
      differentiation: "主色承接專業與科技，輔色加入自然與永續；適合需要同時說服理性與安心感的品牌。",
      avoidWhen: "品牌需要強烈精品、娛樂、年輕流行感時不優先。"
    }
  },
  {
    id: "navy",
    name: "穩重深藍",
    primary: "#1f3a5f",
    accent: "#6e7f55",
    bg: "#f4f7fb",
    surface: "#ffffff",
    muted: "#5f6e82",
    text: "#0c1726",
    spec: {
      tone: "理性、權威、制度感",
      bestFor: ["金融保險", "顧問服務", "企業集團", "資安與雲端"],
      differentiation: "以深藍建立可信度，橄欖綠降低距離感；適合重視治理、流程、長期合作的品牌。",
      avoidWhen: "品牌主要訴求是輕盈生活感、親子或強烈創意風格時不優先。"
    }
  },
  {
    id: "graphite",
    name: "石墨銀灰",
    primary: "#26323f",
    accent: "#8a6f3d",
    bg: "#f5f5f2",
    surface: "#ffffff",
    muted: "#6d7379",
    text: "#171c22",
    spec: {
      tone: "精密、克制、高規格",
      bestFor: ["精密製造", "設備工程", "建材五金", "高單價 B2B"],
      differentiation: "中性灰黑作為結構主軸，少量金屬棕金強調規格與價值；適合資訊密度較高的工業官網。",
      avoidWhen: "產品需要柔和照護、健康清新或大量生活情境時不優先。"
    }
  },
  {
    id: "champagne",
    name: "香檳精品",
    primary: "#6f5844",
    accent: "#b9945e",
    bg: "#f8f4ee",
    surface: "#fffdf8",
    muted: "#7c6f63",
    text: "#241d18",
    spec: {
      tone: "高端、溫潤、精品服務",
      bestFor: ["精品服務", "醫美健康", "高端生活", "品牌形象官網"],
      differentiation: "用低彩度棕與香檳金建立高單價感，避免過亮金色造成廉價促銷感。",
      avoidWhen: "品牌需要工程精密、科技冷感或高度公部門信任時不優先。"
    }
  },
  {
    id: "fresh",
    name: "清爽綠意",
    primary: "#2f6f62",
    accent: "#8aa15f",
    bg: "#f3f8f5",
    surface: "#ffffff",
    muted: "#60756c",
    text: "#10241f",
    spec: {
      tone: "自然、安心、永續生活",
      bestFor: ["健康食品", "環保永續", "生活設備", "社區服務"],
      differentiation: "以綠色建立自然可信，低飽和背景讓內容保持乾淨；適合需要親近但不過度活潑的品牌。",
      avoidWhen: "品牌需要明顯科技感、金融權威或強烈精品定位時不優先。"
    }
  },
  {
    id: "coral",
    name: "珊瑚暖白",
    primary: "#b45b4a",
    accent: "#276f73",
    bg: "#fff6f2",
    surface: "#ffffff",
    muted: "#806a62",
    text: "#2a1713",
    spec: {
      tone: "親切、行動感、生活溫度",
      bestFor: ["課程活動", "生活品牌", "女性客群", "社群導流"],
      differentiation: "暖珊瑚負責情緒與轉換，藍綠輔色補回可信與平衡；適合需要較高 CTA 能見度的網站。",
      avoidWhen: "品牌需要嚴肅規格、低調奢華或政府企業感時不優先。"
    }
  }
];

const state = {
  view: "admin",
  adminSection: "brandStyle",
  homeMode: "overview",
  heroEditorTab: "edit",
  expandedCtaModuleIds: [],
  expandedItemCtaKeys: [],
  activeId: "hero",
  insertAfterId: "",
  pendingModuleTypeId: "",
  activePageId: "about",
  activePreviewPageId: "",
  pageMode: "list",
  pageLayoutTab: "settings",
  pageSavedNotice: "",
  pendingPageTemplate: "",
  newPageDraftId: "",
  customCount: 0,
  customPageCount: 0,
  isChoosingModuleTemplate: false,
  isChoosingPageTemplate: false,
  activeDataEditor: null,
  activeArticleQuickAdd: null,
  activeOpsEditor: null,
  activeAdminRoleEditor: null,
  activeAdminUserEditor: null,
  activePasswordResetUserId: "",
  passwordResetDraft: { password: "", confirm: "" },
  activeSuperAdminTransferUserId: "",
  superAdminTransferTargetId: "",
  siteInfoPreviewTab: "edit",
  activeArticleCategory: "最新消息",
  articleCategoryDraft: "",
  articleQuickDraft: { title: "", category: "", status: "草稿" },
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
  articleCategories: clone(initialArticleCategories),
  contactRecords: clone(initialContactRecords),
  supportMessages: clone(initialSupportMessages),
  adminRoles: clone(initialAdminRoles),
  adminUsers: clone(initialAdminUsers),
  adminUserFilters: { search: "", role: "", status: "" },
  pageSeoSettings: loadSeoSettings(),
  activeSeoPageId: "",
  seoDraft: null,
  seoErrors: {},
  seoSavedNotice: "",
  siteStyle: {
    templateId: "stitch-wellness",
    paletteId: "teal",
    savedTemplateId: "stitch-wellness",
    savedPaletteId: "teal"
  },
  siteInfo: clone(defaultSiteInfo),
  savedSiteInfo: clone(defaultSiteInfo),
  socialLinks: clone(defaultSocialLinks),
  savedSocialLinks: clone(defaultSocialLinks),
  floatingEntries: clone(defaultFloatingEntries),
  savedFloatingEntries: clone(defaultFloatingEntries),
  savedModules: clone(initialModules),
  draftModules: clone(initialModules),
  navGroups: {
    siteSettings: true,
    content: true,
    interaction: true,
    accounts: true,
    maintenance: true
  },
  isDirty: false
};

const navSectionGroups = {
  brandStyle: "siteSettings",
  siteBasicInfo: "siteSettings",
  seo: "siteSettings",
  tracking: "siteSettings",
  site: "siteSettings",
  home: "content",
  pages: "content",
  blueprintArticles: "content",
  blueprintFaq: "content",
  blueprintProducts: "content",
  blueprintResources: "content",
  contactRecords: "interaction",
  supportMessages: "interaction",
  adminRoles: "accounts",
  adminUsers: "accounts",
  logs: "maintenance"
};

const dataSectionKinds = {
  blueprintArticles: "articles",
  blueprintFaq: "articles",
  blueprintProducts: "products",
  blueprintResources: "resources"
};

const adminThemeStorageKey = "limjia-admin-theme";

const els = {
  themeToggle: document.getElementById("themeToggle"),
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
  adminHeaderTemplateSlot: document.getElementById("adminHeaderTemplateSlot"),
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

function loadAdminTheme() {
  try {
    return localStorage.getItem(adminThemeStorageKey) === "dark" ? "dark" : "light";
  } catch (error) {
    return "light";
  }
}

function persistAdminTheme(theme) {
  try {
    localStorage.setItem(adminThemeStorageKey, theme);
  } catch (error) {
    // Keep the UI usable when browser storage is unavailable.
  }
}

function applyAdminTheme(theme) {
  const mode = theme === "dark" ? "dark" : "light";
  document.documentElement.dataset.theme = mode;
  if (!els.themeToggle) return;

  const isDark = mode === "dark";
  const label = isDark ? "切換淺色模式" : "切換深色模式";
  els.themeToggle.setAttribute("aria-pressed", isDark ? "true" : "false");
  els.themeToggle.setAttribute("aria-label", label);
  els.themeToggle.title = label;
  els.themeToggle.querySelector(".theme-toggle-icon").textContent = isDark ? "Light" : "Dark";
  els.themeToggle.querySelector(".theme-toggle-text").textContent = isDark ? "淺色" : "深色";
}

function toggleAdminTheme() {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  applyAdminTheme(nextTheme);
  persistAdminTheme(nextTheme);
}

applyAdminTheme(loadAdminTheme());

const managedDropdownSelector = ".style-dropdown, .action-menu, .admin-account-menu, .icon-dropdown";

function closeManagedDropdowns(except = null) {
  document.querySelectorAll(`${managedDropdownSelector}[open]`).forEach((dropdown) => {
    if (dropdown !== except) dropdown.open = false;
  });
}

document.addEventListener("click", (event) => {
  const activeDropdown = event.target.closest(managedDropdownSelector);
  closeManagedDropdowns(activeDropdown);
  if (activeDropdown && event.target.closest(".style-dropdown-option, .action-menu button, .admin-account-dropdown button, .icon-choice")) {
    activeDropdown.open = false;
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeManagedDropdowns();
});

function richTextInitialHtml(item) {
  if (item.bodyHtml) return item.bodyHtml;
  return esc(item.body || "").replace(/\n/g, "<br>");
}

function richTextFieldInitialHtml(item, key) {
  if (item[`${key}Html`]) return item[`${key}Html`];
  return esc(item[key] || "").replace(/\n/g, "<br>");
}

function renderRichTextEditor({ kind, item, field, placeholder }) {
  const htmlField = `${field.key}Html`;
  return `
    <div class="rich-editor data-rich-editor" data-rich-editor="${esc(kind)}-${esc(item.id)}-${esc(field.key)}">
      <div class="rich-toolbar" aria-label="${esc(field.label)}編輯工具">
        <button class="btn compact" type="button" data-rich-command="bold" title="粗體"><strong>B</strong></button>
        <button class="btn compact" type="button" data-rich-command="foreColor" data-rich-value="#0e6a8c" title="品牌色文字">品牌色</button>
        <select class="rich-size-select" data-rich-font-size title="文字大小">
          <option value="">字級</option>
          <option value="2">小字</option>
          <option value="3">一般</option>
          <option value="5">大字</option>
          <option value="6">標題</option>
        </select>
        <label class="rich-color">文字色
          <input type="color" value="#0e6a8c" data-rich-color>
        </label>
        <button class="btn compact" type="button" data-rich-insert="link" title="插入連結">連結</button>
        <button class="btn compact" type="button" data-rich-upload-trigger="image" title="上傳圖片">圖片</button>
        <button class="btn compact" type="button" data-rich-upload-trigger="video" title="上傳影片">影片</button>
        <input class="visually-hidden" type="file" accept="image/*" data-rich-upload="image">
        <input class="visually-hidden" type="file" accept="video/*" data-rich-upload="video">
      </div>
      <div class="rich-body data-rich-body" contenteditable="true" data-placeholder="${esc(placeholder)}" data-rich-body data-rich-text-field="${esc(field.key)}" data-rich-html-field="${esc(htmlField)}" data-data-kind="${esc(kind)}" data-data-id="${esc(item.id)}">${richTextFieldInitialHtml(item, field.key)}</div>
    </div>
  `;
}

function normalizeExternalUrl(value) {
  const url = String(value || "").trim();
  if (!url) return "";
  if (/^(https?:|mailto:|tel:|#)/i.test(url)) return url;
  return `https://${url}`;
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
  const text = String(module.linkText || "").trim();
  if (!text) return "";
  const target = String(module.linkTarget || "#").trim() || "#";
  return `<a class="${className}" href="${esc(target)}">${esc(text)}</a><span class="hint"> 前往：${esc(target)}</span>`;
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
  const text = String(content?.[`item${index}LinkText`] || "").trim();
  if (!text) return "";
  const target = String(content?.[`item${index}LinkTarget`] || "#").trim() || "#";
  return `<a class="${className}" href="${esc(target)}">${esc(text)}</a>`;
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
      ${renderHomeActionStrip()}
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
  bindHomeActionStrip(els.settingsRoot);

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
        ${renderHomeActionStrip()}
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
    bindHomeActionStrip(els.settingsRoot);
    return;
  }

  els.settingsRoot.innerHTML = `
    <div class="settings-body">
      ${renderHomeActionStrip()}
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
  bindHomeActionStrip(els.settingsRoot);
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
      ${renderHomeActionStrip()}
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
  bindHomeActionStrip(els.settingsRoot);

  els.settingsRoot.querySelectorAll("[data-field]").forEach((input) => {
    input.addEventListener("input", () => updateField(module, input));
    input.addEventListener("change", () => updateField(module, input));
  });

  els.settingsRoot.querySelectorAll("[data-add-module-cta]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!state.expandedCtaModuleIds.includes(button.dataset.addModuleCta)) {
        state.expandedCtaModuleIds.push(button.dataset.addModuleCta);
      }
      renderSettings();
    });
  });

  els.settingsRoot.querySelectorAll("[data-delete-module-cta]").forEach((button) => {
    button.addEventListener("click", () => {
      module.linkText = "";
      module.linkTarget = "";
      state.expandedCtaModuleIds = state.expandedCtaModuleIds.filter((id) => id !== button.dataset.deleteModuleCta);
      markDirty();
      renderSettings();
      updateHeroLivePreview(module);
      updateSaveState();
    });
  });

  els.settingsRoot.querySelectorAll("[data-add-item-cta]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!state.expandedItemCtaKeys.includes(button.dataset.addItemCta)) {
        state.expandedItemCtaKeys.push(button.dataset.addItemCta);
      }
      renderSettings();
    });
  });

  els.settingsRoot.querySelectorAll("[data-delete-item-cta]").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(String(button.dataset.deleteItemCta || "").split(":").pop());
      if (Number.isFinite(index)) {
        module.content = module.content || defaultContent(module);
        module.content[`item${index}LinkText`] = "";
        module.content[`item${index}LinkTarget`] = "";
      }
      state.expandedItemCtaKeys = state.expandedItemCtaKeys.filter((key) => key !== button.dataset.deleteItemCta);
      markDirty();
      renderSettings();
      updateHeroLivePreview(module);
      updateSaveState();
    });
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

function renderPreviewVariantSelect(module, label = "選擇版型") {
  const type = getType(module.type);
  return `
    <div class="field preview-variant-select">
      <label>${esc(label)}</label>
      <select data-field="variant">
        ${type.variants.map((item) => `<option value="${item.id}" ${module.variant === item.id ? "selected" : ""}>版型 ${item.id}：${item.name}｜${item.description}</option>`).join("")}
      </select>
    </div>
  `;
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
        <div class="hero-editor-panel" data-hero-editor-panel="edit">
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
        <div class="hero-preview-panel" data-hero-editor-panel="preview">
          <div class="module-preview-toolbar">
            <div>
              <strong>目前套用預覽</strong>
              <span>使用目前填寫的主標題、副標題與主圖產生預覽。</span>
            </div>
          </div>
          ${renderPreviewVariantSelect(module, "選擇首屏呈現方式")}
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
    title: previewPlainText(c.title, module.name),
    subtitle: previewPlainText(c.subtitle),
    imageKey: c.imagePreviewKey || "",
    imageUrl: c.imagePreviewKey ? "" : c.imagePreviewUrl || "",
    cta: previewPlainText(module.linkText),
    ctaUrl: previewPlainText(module.linkTarget),
    linkEnabled: previewPlainText(module.linkText) ? "1" : "0",
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
        <div class="hero-editor-panel" data-hero-editor-panel="edit">
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
        <div class="hero-preview-panel" data-hero-editor-panel="preview">
          <div class="module-preview-toolbar">
            <div>
              <strong>目前套用預覽</strong>
              <span>使用目前填寫的主標題、副標題與主圖產生預覽。</span>
            </div>
          </div>
          ${renderPreviewVariantSelect(module, "選擇圖文呈現方式")}
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
    title: previewPlainText(c.title, module.name),
    subtitle: previewPlainText(c.subtitle),
    imageKey: c.imagePreviewKey || "",
    imageUrl: c.imagePreviewKey ? "" : c.imagePreviewUrl || "",
    cta: previewPlainText(module.linkText),
    ctaUrl: previewPlainText(module.linkTarget),
    linkEnabled: previewPlainText(module.linkText) ? "1" : "0",
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
        <div class="hero-editor-panel" data-hero-editor-panel="edit">
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
        <div class="hero-preview-panel" data-hero-editor-panel="preview">
          <div class="module-preview-toolbar">
            <div>
              <strong>目前套用預覽</strong>
              <span>使用目前填寫的主標題、副標題與數據項目產生預覽。</span>
            </div>
          </div>
          ${renderPreviewVariantSelect(module, "選擇數據呈現方式")}
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
    title: previewPlainText(c.title, module.name),
    subtitle: previewPlainText(c.subtitle),
    stat1Value: previewPlainText(c.stat1Value),
    stat1Unit: previewPlainText(c.stat1Unit),
    stat1Label: previewPlainText(c.stat1Label),
    stat2Value: previewPlainText(c.stat2Value),
    stat2Unit: previewPlainText(c.stat2Unit),
    stat2Label: previewPlainText(c.stat2Label),
    stat3Value: previewPlainText(c.stat3Value),
    stat3Unit: previewPlainText(c.stat3Unit),
    stat3Label: previewPlainText(c.stat3Label),
    stat4Value: previewPlainText(c.stat4Value),
    stat4Unit: previewPlainText(c.stat4Unit),
    stat4Label: previewPlainText(c.stat4Label),
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
          <p>此模塊會沿用整站官網模板的色系與風格；先選呈現方式，再選此版型可承載的卡片數量。</p>
        </div>
        <div class="tabs">
          <button class="tab ${activeTab === "edit" ? "is-active" : ""}" type="button" data-hero-editor-tab="edit">呈現方式與內容</button>
          <button class="tab ${activeTab === "preview" ? "is-active" : ""}" type="button" data-hero-editor-tab="preview">套用預覽</button>
        </div>
      </div>
      <div class="hero-tab-panels">
        <div class="hero-editor-panel" data-hero-editor-panel="edit">
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
        <div class="hero-preview-panel" data-hero-editor-panel="preview">
          <div class="module-preview-toolbar">
            <div>
              <strong>目前套用預覽</strong>
              <span>使用目前填寫的卡片標題、說明與按鈕文字產生預覽。</span>
            </div>
          </div>
          ${renderPreviewVariantSelect(module, "選擇卡片呈現方式")}
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
  const count = currentItemCount(module);
  const palette = getActiveSitePalette();
  const params = new URLSearchParams({
    title: previewPlainText(c.title, module.name),
    subtitle: previewPlainText(c.subtitle),
    primary: palette.primary,
    accent: palette.accent,
    bg: palette.bg,
    surface: palette.surface,
    text: palette.text,
    muted: palette.muted
  });
  appendItemParams(params, c, count, 6);
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
        <div class="hero-editor-panel" data-hero-editor-panel="edit">
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
        <div class="hero-preview-panel" data-hero-editor-panel="preview">
          <div class="module-preview-toolbar">
            <div>
              <strong>目前套用預覽</strong>
              <span>使用目前填寫的文章日期、標題與摘要產生預覽。</span>
            </div>
          </div>
          ${renderPreviewVariantSelect(module, "選擇新聞呈現方式")}
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
  const count = currentItemCount(module);
  const palette = getActiveSitePalette();
  const params = new URLSearchParams({
    title: previewPlainText(c.title, module.name),
    subtitle: previewPlainText(c.subtitle),
    category: previewPlainText(c.newsCategory),
    cta: previewPlainText(module.linkText),
    ctaUrl: previewPlainText(module.linkTarget),
    linkEnabled: previewPlainText(module.linkText) ? "1" : "0",
    primary: palette.primary,
    accent: palette.accent,
    bg: palette.bg,
    surface: palette.surface,
    text: palette.text,
    muted: palette.muted
  });
  appendItemParams(params, c, count, 6);
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
          <p>此模塊會沿用整站官網模板的色系與風格；首頁只放精選問題，完整題庫可交給 FAQ 頁。</p>
        </div>
        <div class="tabs">
          <button class="tab ${activeTab === "edit" ? "is-active" : ""}" type="button" data-hero-editor-tab="edit">呈現方式與內容</button>
          <button class="tab ${activeTab === "preview" ? "is-active" : ""}" type="button" data-hero-editor-tab="preview">套用預覽</button>
        </div>
      </div>
      <div class="hero-tab-panels">
        <div class="hero-editor-panel" data-hero-editor-panel="edit">
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
        <div class="hero-preview-panel" data-hero-editor-panel="preview">
          <div class="module-preview-toolbar">
            <div>
              <strong>目前套用預覽</strong>
              <span>使用目前填寫的問題與答案產生預覽。</span>
            </div>
          </div>
          ${renderPreviewVariantSelect(module, "選擇 FAQ 呈現方式")}
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
  const count = currentItemCount(module);
  const palette = getActiveSitePalette();
  const params = new URLSearchParams({
    title: previewPlainText(c.title, module.name),
    subtitle: previewPlainText(c.subtitle),
    category: previewPlainText(c.newsCategory, "FAQ"),
    primary: palette.primary,
    accent: palette.accent,
    bg: palette.bg,
    surface: palette.surface,
    text: palette.text,
    muted: palette.muted
  });
  appendItemParams(params, c, count, 8);
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
      ${renderModuleCtaFields(module)}
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
      ${renderModuleCtaFields(module)}
    </div>
  `;
}

function renderModuleCtaFields(module) {
  const expanded = state.expandedCtaModuleIds.includes(module.id) || Boolean(String(module.linkText || "").trim());
  if (!expanded) {
    return `
      <div class="module-cta-add">
        <button class="btn compact" type="button" data-add-module-cta="${esc(module.id)}">新增按鈕</button>
      </div>
    `;
  }
  return `
    <section class="cta-settings-block module-cta-fields">
      <div class="cta-settings-head">
        <h4>按鈕設定</h4>
        <button class="btn danger compact ghost-danger" type="button" data-delete-module-cta="${esc(module.id)}">移除</button>
      </div>
      <div class="field-grid cta-field-grid">
        <div class="field cta-text-field">
          <label>按鈕文字 <span class="optional">可不填</span></label>
          <input type="text" value="${esc(module.linkText || "")}" data-field="linkText" placeholder="例如：查看更多">
        </div>
        <div class="field cta-url-field">
          <label>導向頁面 URL <span class="optional">可不填</span></label>
          <input type="text" value="${esc(module.linkTarget || "")}" data-field="linkTarget" placeholder="/news">
        </div>
      </div>
    </section>
  `;
}

function itemCtaKey(module, index) {
  return `${module.id}:${index}`;
}

function renderItemCtaFields(module, index, labelPrefix = `項目 ${index}`) {
  module.content = module.content || defaultContent(module);
  const key = itemCtaKey(module, index);
  const expanded = state.expandedItemCtaKeys.includes(key) || Boolean(String(module.content[`item${index}LinkText`] || "").trim());
  if (!expanded) {
    return `
      <div class="module-cta-add item-cta-add">
        <button class="btn compact" type="button" data-add-item-cta="${esc(key)}">新增按鈕</button>
      </div>
    `;
  }
  return `
    <section class="cta-settings-block item-cta-fields" data-item-cta-key="${esc(key)}">
      <div class="cta-settings-head">
        <h4>${esc(labelPrefix)} 按鈕設定</h4>
        <button class="btn danger compact ghost-danger" type="button" data-delete-item-cta="${esc(key)}">移除</button>
      </div>
      <div class="field-grid cta-field-grid">
        <div class="field">
          <label>按鈕文字 <span class="optional">可不填</span></label>
          <input type="text" value="${esc(module.content[`item${index}LinkText`] || "")}" data-content-field="item${index}LinkText" placeholder="例如：查看更多">
        </div>
        <div class="field">
          <label>導向 URL <span class="optional">可不填</span></label>
          <input type="text" value="${esc(module.content[`item${index}LinkTarget`] || "")}" data-content-field="item${index}LinkTarget" placeholder="/news/example">
        </div>
      </div>
    </section>
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
  const rows = itemNumbers(module).map((index) => `
    <div class="card-input-row">
      <div class="field">
        <label>卡片 ${index} 標題 <span class="required">必填</span></label>
        <input type="text" required value="${esc(c[`item${index}`] || "")}" data-content-field="item${index}">
      </div>
      <div class="field">
        <label>卡片 ${index} 說明 <span class="optional">可不填</span></label>
        <input type="text" value="${esc(c[`item${index}Subtitle`] || "")}" data-content-field="item${index}Subtitle">
      </div>
      ${renderItemCtaFields(module, index, `卡片 ${index}`)}
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
        ${renderItemCountField(module, "顯示卡片數量")}
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
  const rows = itemNumbers(module).map((index) => `
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
        ${renderItemCountField(module, "顯示文章數量", { hideNote: true })}
      </div>
      ${renderModuleCtaFields(module)}
      <div class="news-input-list">
        ${rows}
      </div>
    </div>
  `;
}

function renderFaqContentFields(module) {
  const c = module.content || defaultContent(module);
  module.content = c;
  const rows = itemNumbers(module).map((index) => `
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
        ${renderItemCountField(module, "顯示問題數量")}
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
    const count = itemCountRule(module) ? currentItemCount(module) : 3;
    return `
      ${common}
      ${module.type === "steps" ? renderItemCountField(module, "顯示步驟數量") : ""}
      <div class="item-field-list">
        ${Array.from({ length: count }, (_, itemIndex) => itemIndex + 1).map((index) => `
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
    const count = itemCountRule(module) ? currentItemCount(module) : 3;
    return `
      <div class="item-link-list">
        ${Array.from({ length: count }, (_, itemIndex) => itemIndex + 1).map((index) => `
          <section class="item-link-row">
            <h4>項目 ${index}</h4>
            ${renderItemCtaFields(module, index, `項目 ${index}`)}
          </section>
        `).join("")}
      </div>
    `;
  }

  return renderModuleCtaFields(module);
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
          <iframe class="module-preview-frame" scrolling="no" title="${esc(module.name)}版型 ${esc(variant.id)} 預覽" src="${esc(variant.entry)}"></iframe>
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
    const count = itemCountRule(module) ? currentItemCount(module) : 3;
    const items = Array.from({ length: count }, (_, index) => esc(c[`item${index + 1}`] || `內容項目 ${index + 1}`));
    return `<div class="mini-preview"><div class="${isB ? "mini-grid" : "mini-list"}">${isB ? items.map((item) => `<div class="mini-card"><strong>${item}</strong><span>範例摘要</span>${button}</div>`).join("") : items.map((item) => `<div class="mini-row"><strong>${item}</strong>${button}</div>`).join("")}</div><p>${isB ? "版型 B：卡片或表格式呈現，按鈕固定在項目下方。" : "版型 A：列表或手風琴式呈現，按鈕固定在列尾或列表下方。"}</p></div>`;
  }
  const count = itemCountRule(module) ? currentItemCount(module) : (isB ? 4 : 3);
  const items = Array.from({ length: count }, (_, index) => c[`item${index + 1}`] || `內容項目 ${index + 1}`);
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
  if (key === "variant" && module.content && itemCountRule(module)) {
    currentItemCount(module);
  }
  markDirty();
  if (key === "linkText" || key === "linkTarget") {
    renderModuleList();
    updateHeroLivePreview(module);
    updateActiveModuleSaveStatus(module);
    updateSaveState();
    return;
  }
  render();
}

function updateContentField(module, input) {
  module.content = module.content || defaultContent(module);
  const key = input.dataset.contentField;
  module.content[key] = input.type === "checkbox" ? input.checked : input.value;
  markDirty();
  if (key === "itemCount" || key.endsWith("LinkEnabled")) {
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
  els.settingsRoot.querySelectorAll("[data-save-home-inline]").forEach((button) => {
    button.classList.toggle("unsaved", state.isDirty);
    button.classList.toggle("primary", !state.isDirty);
    button.textContent = state.isDirty ? "儲存變更" : "已儲存";
  });
}

function previewImageFallbackSrc(label = "預覽圖片") {
  const displayLabel = String(label || "預覽圖片").trim();
  const safeLabel = (displayLabel.length > 24 ? `${displayLabel.slice(0, 24)}...` : displayLabel)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="960" height="640" viewBox="0 0 960 640">
      <defs>
        <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="#e9f6f8"/>
          <stop offset="52%" stop-color="#f7fbfc"/>
          <stop offset="100%" stop-color="#d7ecef"/>
        </linearGradient>
      </defs>
      <rect width="960" height="640" fill="url(#bg)"/>
      <circle cx="724" cy="142" r="92" fill="#ffffff" opacity=".58"/>
      <circle cx="218" cy="480" r="154" fill="#0e6a8c" opacity=".1"/>
      <path d="M166 390c86-106 172-110 258-12 48 54 92 82 132 84 56 2 102-44 152-122 28-44 56-68 84-72v256H166z" fill="#0e6a8c" opacity=".2"/>
      <rect x="80" y="84" width="800" height="472" rx="28" fill="#ffffff" opacity=".5" stroke="#0e6a8c" stroke-opacity=".22"/>
      <text x="480" y="305" text-anchor="middle" font-family="Arial, 'Microsoft JhengHei', sans-serif" font-size="32" font-weight="700" fill="#04384c">${safeLabel}</text>
      <text x="480" y="350" text-anchor="middle" font-family="Arial, 'Microsoft JhengHei', sans-serif" font-size="18" fill="#64747b">預覽圖片</text>
    </svg>
  `;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function repairPreviewDocument(frame, resize) {
  const doc = frame.contentDocument;
  if (!doc) return;
  doc.querySelectorAll(".material-symbols-outlined").forEach((icon) => {
    const name = icon.textContent.trim();
    if (name === "arrow_forward") icon.textContent = "→";
  });
  doc.querySelectorAll("img").forEach((image, index) => {
    const repairImage = () => {
      if (image.dataset.previewFallbackApplied) return;
      image.dataset.previewFallbackApplied = "true";
      image.src = previewImageFallbackSrc(image.alt || image.dataset.alt || `預覽圖片 ${index + 1}`);
      resize();
    };
    image.addEventListener("load", resize, { once: true });
    image.addEventListener("error", repairImage, { once: true });
    if (image.complete && image.naturalWidth === 0) repairImage();
  });
  doc.querySelectorAll("[style*='background-image']").forEach((element, index) => {
    const background = element.style.backgroundImage || "";
    const match = background.match(/url\(["']?([^"')]+)["']?\)/);
    const src = match?.[1];
    if (!src || src.startsWith("data:")) return;
    const tester = new Image();
    tester.onerror = () => {
      element.style.backgroundImage = `url("${previewImageFallbackSrc(element.dataset.alt || `背景預覽 ${index + 1}`)}")`;
      resize();
    };
    tester.src = src;
  });
}

function expandFrontPreviewFrames() {
  const getPreviewFrames = () => [
    ...(els.previewRoot?.querySelectorAll(".front-live-module iframe") || []),
    ...els.settingsRoot.querySelectorAll(".hero-real-preview-frame, .module-preview-frame, .real-preview-frame"),
    ...els.managerPanel.querySelectorAll(".real-preview-frame, .page-real-preview-frame")
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
    const minimumHeight = frame.classList.contains("page-real-preview-frame")
      ? 900
      : frame.classList.contains("real-preview-frame")
        ? 900
        : 420;
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
              min-height: 520px !important;
            }
            .min-h-screen {
              min-height: 520px !important;
            }
            body > section:first-of-type,
            body > main:first-of-type {
              min-height: 520px !important;
              padding-top: 48px !important;
              padding-bottom: 48px !important;
              align-items: flex-start !important;
            }
            body > section:first-of-type > .grid,
            body > main:first-of-type > .grid {
              align-items: flex-start !important;
            }
            section,
            main,
            footer {
              overflow: visible !important;
            }
            .opacity-0,
            [data-aos] {
              opacity: 1 !important;
            }
            .translate-y-10,
            .-translate-y-10,
            .translate-x-10,
            .-translate-x-10 {
              transform: none !important;
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
      repairPreviewDocument(frame, resize);
    }, { once: true });
    resize();
  });
}

function renderPreview() {
  if (!els.previewPanel || !els.previewRoot) return;
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

  if (["article", "faq", "product", "resource"].includes(page.template)) {
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

function setView() {
  state.view = "admin";
  els.workspace.classList.remove("preview-only");
  els.workspace.classList.add("admin-only");
  els.previewPanel?.classList.add("hidden");
  els.previewPanel?.setAttribute("aria-hidden", "true");
  els.adminPanel.classList.remove("hidden");
}

function managerHeader(title, description, actions = []) {
  if (!actions.length) return "";
  return `
    <div class="manager-actions-bar">
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
      </div>
    </section>
  `;
}

function renderHeaderSiteTemplateNotice() {
  if (!els.adminHeaderTemplateSlot) return;
  els.adminHeaderTemplateSlot.innerHTML = renderCurrentSiteTemplateNotice();
  els.adminHeaderTemplateSlot.querySelector(".site-template-notice")?.classList.add("compact");
}

function renderHomeActionStrip() {
  const isHomeSubFlow = state.adminSection === "home" && state.homeMode !== "overview";
  const template = getActiveSiteTemplate();
  const palette = getActiveSitePalette();
  return `
    <section class="home-action-strip">
      <div class="current-template-inline">
        <span>目前整站官網模板</span>
        <strong>${esc(template.name)}｜${esc(palette.name)}</strong>
      </div>
      <div class="actions">
        <button class="btn ${isHomeSubFlow ? "" : "hidden"}" type="button" data-back-home-overview-inline>返回首頁現況</button>
        <button class="btn ${state.isDirty ? "unsaved" : "primary"}" type="button" data-save-home-inline>${state.isDirty ? "儲存變更" : "已儲存"}</button>
      </div>
    </section>
  `;
}

function bindHomeActionStrip(root) {
  root.querySelector("[data-back-home-overview-inline]")?.addEventListener("click", () => {
    state.homeMode = "overview";
    state.pendingModuleTypeId = "";
    state.isChoosingModuleTemplate = false;
    state.insertAfterId = "";
    render();
  });
  root.querySelector("[data-save-home-inline]")?.addEventListener("click", saveDraft);
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
      muted: palette.muted,
      preview: "admin"
    });
    return `
      <div class="site-style-preview real-template-preview" style="--preview-primary:${esc(palette.primary)};--preview-accent:${esc(palette.accent)};--preview-bg:${esc(palette.bg)};--preview-text:${esc(palette.text)}">
        <div class="preview-browser-bar">
          <span></span><span></span><span></span>
          <strong>官網預覽</strong>
        </div>
        <div class="real-preview-stage">
          <iframe class="real-preview-frame" scrolling="no" title="${esc(template.name)}官網預覽" src="${esc(template.entry)}?${esc(params.toString())}"></iframe>
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

function isSiteInfoDirty() {
  return JSON.stringify(state.siteInfo) !== JSON.stringify(state.savedSiteInfo)
    || JSON.stringify(state.socialLinks) !== JSON.stringify(state.savedSocialLinks)
    || JSON.stringify(state.floatingEntries) !== JSON.stringify(state.savedFloatingEntries);
}

function renderYesNoSelect(field) {
  const value = state.siteInfo[field] || "yes";
  return `
    <select data-site-info-field="${field}">
      <option value="yes" ${value === "yes" ? "selected" : ""}>顯示</option>
      <option value="no" ${value === "no" ? "selected" : ""}>不顯示</option>
    </select>
  `;
}

function getSocialPlatform(platformId) {
  return socialPlatformOptions.find((item) => item.id === platformId) || socialPlatformOptions[0];
}

function getFloatingIcon(iconId) {
  return floatingIconOptions.find((item) => item.id === iconId) || floatingIconOptions[0];
}

function renderPlatformOptions(selected) {
  return socialPlatformOptions.map((item) => `
    <option value="${esc(item.id)}" ${selected === item.id ? "selected" : ""}>${esc(item.name)}</option>
  `).join("");
}

function socialLinkLabel(link) {
  const platform = getSocialPlatform(link.platform);
  return link.label?.trim() || platform.name;
}

function pageUrlForId(pageId) {
  const setting = state.pageSeoSettings.find((item) => item.pageId === pageId);
  return setting ? `/${setting.slug || ""}`.replace(/\/$/, "") || "/" : `/${pageId}`;
}

function floatingLinkOptions(entry) {
  const socialOptions = state.socialLinks.map((link) => ({ value: link.id, label: `社群：${socialLinkLabel(link)}` }));
  const pageOptions = state.pages.map((page) => ({ value: page.id, label: `功能頁：${page.name}` }));
  const selected = entry.linkValue || "";
  return `
    <optgroup label="社群連結">
      ${socialOptions.length
        ? socialOptions.map((item) => `<option value="${esc(item.value)}" ${entry.linkType === "social" && selected === item.value ? "selected" : ""}>${esc(item.label)}</option>`).join("")
        : `<option value="" disabled>請先新增社群連結</option>`}
    </optgroup>
    <optgroup label="其他功能頁面">
      ${pageOptions.map((item) => `<option value="${esc(item.value)}" ${entry.linkType === "page" && selected === item.value ? "selected" : ""}>${esc(item.label)}</option>`).join("")}
    </optgroup>
  `;
}

function floatingLinkDisplay(entry) {
  if (entry.linkType === "page") {
    const page = state.pages.find((item) => item.id === entry.linkValue);
    return page ? pageUrlForId(page.id) : "請選擇功能頁";
  }
  const link = state.socialLinks.find((item) => item.id === entry.linkValue);
  return link?.url || "請選擇社群連結";
}

function iconSvg(symbol) {
  const icons = {
    chat: `<path d="M5 6.5h14v9H9l-4 3v-12Z"/><path d="M8 10h8M8 13h5"/>`,
    diamond: `<path d="M12 3 20 9l-8 12L4 9l8-6Z"/><path d="M4 9h16M9 9l3 12 3-12"/>`,
    calendar: `<path d="M6 5h12a2 2 0 0 1 2 2v12H4V7a2 2 0 0 1 2-2Z"/><path d="M8 3v4M16 3v4M4 10h16"/>`,
    camera: `<path d="M7 5h10a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3Z"/><circle cx="12" cy="12" r="3"/><path d="M17 8h.01"/>`,
    play: `<path d="M5 8a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V8Z"/><path d="m11 9 5 3-5 3V9Z"/>`,
    music: `<path d="M14 4v11.5a3 3 0 1 1-2-2.83V7h6"/><path d="M14 7c1.2 2.4 2.4 3.6 4 4"/>`,
    pin: `<path d="M12 21s7-5.2 7-11a7 7 0 0 0-14 0c0 5.8 7 11 7 11Z"/><circle cx="12" cy="10" r="2.5"/>`,
    phone: `<path d="M7 4h4l1 5-2.5 1.5a12 12 0 0 0 4 4L15 12l5 1v4a2 2 0 0 1-2 2A14 14 0 0 1 5 6a2 2 0 0 1 2-2Z"/>`,
    mail: `<path d="M4 6h16v12H4V6Z"/><path d="m4 7 8 6 8-6"/>`,
    spark: `<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z"/><path d="M18 15l.8 2.2L21 18l-2.2.8L18 21l-.8-2.2L15 18l2.2-.8L18 15Z"/>`
  };
  return `<svg viewBox="0 0 24 24" aria-hidden="true">${icons[symbol] || icons.chat}</svg>`;
}

function renderIconPicker(entry) {
  const currentIcon = getFloatingIcon(entry.icon);
  return `
    <details class="icon-dropdown">
      <summary class="icon-dropdown-trigger" aria-label="選擇浮動入口圖示">
        <span class="icon-dropdown-current">${iconSvg(currentIcon.symbol)}</span>
        <span>${esc(currentIcon.name)}</span>
      </summary>
      <div class="icon-dropdown-menu">
        <div class="icon-picker" role="radiogroup" aria-label="選擇浮動入口圖示">
          ${floatingIconOptions.map((icon) => `
            <button class="icon-choice ${entry.icon === icon.id ? "is-active" : ""}" type="button" data-floating-icon="${esc(entry.id)}:${esc(icon.id)}" data-tooltip="${esc(icon.name)}" aria-label="${esc(icon.name)}">
              ${iconSvg(icon.symbol)}
            </button>
          `).join("")}
        </div>
      </div>
    </details>
  `;
}

function renderSocialLinksEditor() {
  return `
    <section class="settings-card stack-card">
      <div class="section-title">
        <div>
          <h3>社群連結</h3>
          <p>可建立多個社群、影音、通訊或外部連結，供 Footer、聯絡頁與浮動入口引用。</p>
        </div>
        <span class="status-pill">${state.socialLinks.length} / 50 個</span>
      </div>
      <div class="repeat-list">
        ${state.socialLinks.map((link, index) => `
          <article class="repeat-item social-link-row">
            <div class="repeat-index">第 ${index + 1} 項</div>
            <div class="field">
              <label>Platform</label>
              <select data-social-link-field="${esc(link.id)}:platform">
                ${renderPlatformOptions(link.platform)}
              </select>
            </div>
            <div class="field">
              <label>Label</label>
              <input type="text" value="${esc(link.label)}" data-social-link-field="${esc(link.id)}:label">
            </div>
            <div class="field">
              <label>Url <span class="required-text">必填</span></label>
              <input type="text" value="${esc(link.url)}" data-social-link-field="${esc(link.id)}:url">
            </div>
            <button class="text-danger" type="button" data-remove-social-link="${esc(link.id)}">移除</button>
          </article>
        `).join("")}
      </div>
      <button class="btn compact-add" type="button" data-add-social-link ${state.socialLinks.length >= 50 ? "disabled" : ""}>新增一項</button>
    </section>
  `;
}

function renderFloatingEntriesEditor() {
  return `
    <section class="settings-card stack-card">
      <div class="section-title">
        <div>
          <h3>浮動自動入口</h3>
          <p>這是前台右側浮動快捷入口，可最多設定 6 個，連到社群連結或其他功能頁面。</p>
        </div>
        <span class="status-pill">${state.floatingEntries.length} / 6 個</span>
      </div>
      <div class="repeat-list">
        ${state.floatingEntries.map((entry, index) => `
          <article class="repeat-item floating-entry-row">
            <div class="repeat-index">第 ${index + 1} 項</div>
            <div class="field">
              <label>標題 <span class="required-text">必填</span></label>
              <input type="text" value="${esc(entry.title)}" data-floating-field="${esc(entry.id)}:title">
            </div>
            <div class="field">
              <label>副標題</label>
              <input type="text" value="${esc(entry.subtitle)}" data-floating-field="${esc(entry.id)}:subtitle">
            </div>
            <div class="field">
              <label>連結</label>
              <select data-floating-link="${esc(entry.id)}">
                ${floatingLinkOptions(entry)}
              </select>
              <div class="field-help">目前指向：${esc(floatingLinkDisplay(entry))}</div>
            </div>
            <div class="field icon-field">
              <label>圖示</label>
              ${renderIconPicker(entry)}
            </div>
            <button class="text-danger" type="button" data-remove-floating-entry="${esc(entry.id)}">移除</button>
          </article>
        `).join("")}
      </div>
      <button class="btn compact-add" type="button" data-add-floating-entry ${state.floatingEntries.length >= 6 ? "disabled" : ""}>新增一項</button>
    </section>
  `;
}

function renderFloatingPreview() {
  const entries = state.floatingEntries.slice(0, 6);
  const socialButtons = state.socialLinks.slice(0, 3);
  return `
    <section class="site-info-preview-card">
      <div class="section-title">
        <div>
          <h3>浮動入口預覽</h3>
          <p>模擬前台右側固定入口，內容由上方設定帶入。</p>
        </div>
      </div>
      <div class="floating-rail-mock">
        ${entries.map((entry) => {
          const icon = getFloatingIcon(entry.icon);
          return `
            <a href="${esc(floatingLinkDisplay(entry))}" class="floating-entry-mock">
              <span>${iconSvg(icon.symbol)}</span>
              <strong>${esc(entry.title || "未命名")}</strong>
              ${entry.subtitle ? `<small>${esc(entry.subtitle)}</small>` : ""}
            </a>
          `;
        }).join("")}
        ${socialButtons.length ? `<div class="floating-social-mock">
          ${socialButtons.map((link) => `<span title="${esc(socialLinkLabel(link))}">${iconSvg(getFloatingIcon(link.platform)?.symbol || "chat")}</span>`).join("")}
        </div>` : ""}
      </div>
    </section>
  `;
}

function renderSiteLogoPreview(info, className = "preview-logo-mark") {
  if (info.logoPreviewUrl) {
    return `<img class="${className}" src="${esc(info.logoPreviewUrl)}" alt="${esc(info.brandName)} Logo">`;
  }
  return `<div class="${className}">Logo</div>`;
}

function renderSiteHeaderFooterPreview(info) {
  return `
    <section class="site-info-preview-card">
      <div class="section-title">
        <div>
          <h3>Header 預覽</h3>
          <p>模擬前台頁首會如何帶入 Logo、品牌名稱、選單、電話與服務時間。</p>
        </div>
      </div>
      <div class="site-header-mock">
        <div class="site-header-brand">
          ${renderSiteLogoPreview(info)}
          <div>
            <strong>${esc(info.brandName)}</strong>
            <span>${esc(info.englishName)}</span>
          </div>
        </div>
        <div class="site-header-empty-mock" aria-hidden="true"></div>
        <div class="site-header-contact-mock">
          ${info.showHeaderPhone === "yes" ? `<strong>tel. ${esc(info.phone)}</strong>` : ""}
          ${info.showServiceHours === "yes" ? `<span>服務時間 ${esc(info.serviceHours)}</span>` : ""}
        </div>
        <button class="site-header-menu-mock" type="button" aria-label="選單"><span></span><span></span><span></span></button>
      </div>
    </section>
    <section class="site-info-preview-card">
      <div class="section-title">
        <div>
          <h3>Footer 預覽</h3>
          <p>模擬前台頁尾會如何帶入公司資訊、聯絡方式、地址與 SEO 摘要。</p>
        </div>
      </div>
      <div class="site-footer-mock">
        <div class="site-footer-brand">
          ${renderSiteLogoPreview(info, "preview-logo-mark small")}
          <div>
            <strong>${esc(info.footerCompany)}</strong>
            <span>${esc(info.siteName)}</span>
          </div>
        </div>
        <div class="site-footer-grid">
          <div>
            <span class="eyebrow">Contact</span>
            <p>${esc(info.phone)}</p>
            <p>${esc(info.email)}</p>
            <p>${esc(info.serviceHours)}</p>
          </div>
          <div>
            <span class="eyebrow">Company</span>
            <p>${esc(info.address)}</p>
            <p>${esc(state.socialLinks.map(socialLinkLabel).join(" / "))}</p>
          </div>
        </div>
      </div>
    </section>
    ${renderFloatingPreview()}
  `;
}

function renderSiteBasicInfoManager() {
  const info = state.siteInfo;
  const isDirty = isSiteInfoDirty();
  const activeTab = state.siteInfoPreviewTab || "edit";
  return `
    <section class="site-info-layout">
      <div class="site-info-main">
        <div class="brand-style-heading site-info-heading">
          <div>
            <h2>官網基本資訊</h2>
            <p>這是建站第一步。Header、Footer、聯絡頁與品牌顯示會優先沿用這裡的全站資料。</p>
          </div>
          <div class="actions">
            <span class="save-pill ${isDirty ? "unsaved" : ""}">${isDirty ? "尚未儲存" : "已儲存"}</span>
            <button class="btn primary" type="button" data-save-site-info>儲存基本資訊</button>
          </div>
        </div>

        <div class="tabs site-info-workspace-tabs" role="tablist" aria-label="官網基本資訊工作區">
          <button class="tab ${activeTab === "edit" ? "is-active" : ""}" type="button" data-site-info-preview-tab="edit">編輯資料</button>
          <button class="tab ${activeTab === "preview" ? "is-active" : ""}" type="button" data-site-info-preview-tab="preview">Header / Footer 預覽</button>
        </div>

        ${activeTab === "edit" ? `
        <section class="settings-card">
          <div class="section-title">
            <div>
              <h3>品牌識別</h3>
              <p>控制官網左上角品牌、Logo 與全站顯示名稱。</p>
            </div>
          </div>
          <div class="field-grid">
            <div class="field">
              <label>上傳 Logo</label>
              <div class="file-upload-row">
                <label class="btn" for="siteLogoFile">選擇檔案</label>
                <span class="hint">${esc(info.logoFileName)}</span>
                <input class="visually-hidden" id="siteLogoFile" type="file" accept="image/*" data-site-info-file="logoFileName">
              </div>
            </div>
            <div class="field">
              <label>品牌名稱</label>
              <input type="text" value="${esc(info.brandName)}" data-site-info-field="brandName">
            </div>
            <div class="field">
              <label>英文名稱 / 副標</label>
              <input type="text" value="${esc(info.englishName)}" data-site-info-field="englishName">
            </div>
            <div class="field">
              <label>網站名稱</label>
              <input type="text" value="${esc(info.siteName)}" data-site-info-field="siteName">
            </div>
          </div>
        </section>

        <section class="settings-card">
          <div class="section-title">
            <div>
              <h3>聯絡資訊</h3>
              <p>供 Header、Footer、聯絡頁與 CTA 共用。</p>
            </div>
          </div>
          <div class="field-grid">
            <div class="field">
              <label>聯絡電話</label>
              <input type="text" value="${esc(info.phone)}" data-site-info-field="phone">
            </div>
            <div class="field">
              <label>服務時間</label>
              <input type="text" value="${esc(info.serviceHours)}" data-site-info-field="serviceHours">
            </div>
            <div class="field">
              <label>Email</label>
              <input type="email" value="${esc(info.email)}" data-site-info-field="email">
            </div>
            <div class="field full">
              <label>地址</label>
              <input type="text" value="${esc(info.address)}" data-site-info-field="address">
            </div>
          </div>
        </section>

        <section class="settings-card">
          <div class="section-title">
            <div>
              <h3>Header / Footer 顯示</h3>
              <p>控制全站共用區塊是否顯示電話、服務時間與公司資訊。</p>
            </div>
          </div>
          <div class="field-grid">
            <div class="field">
              <label>Header 電話</label>
              ${renderYesNoSelect("showHeaderPhone")}
            </div>
            <div class="field">
              <label>Header 服務時間</label>
              ${renderYesNoSelect("showServiceHours")}
            </div>
            <div class="field">
              <label>Footer 公司資訊</label>
              ${renderYesNoSelect("showFooterInfo")}
            </div>
            <div class="field">
              <label>Footer 公司名稱</label>
              <input type="text" value="${esc(info.footerCompany)}" data-site-info-field="footerCompany">
            </div>
          </div>
        </section>

        ${renderSocialLinksEditor()}
        ${renderFloatingEntriesEditor()}
        ` : `
          <div class="site-info-preview-panel">
            ${renderSiteHeaderFooterPreview(info)}
          </div>
        `}
      </div>
    </section>
  `;
}

function getSeoSetting(pageId) {
  return state.pageSeoSettings.find((item) => item.pageId === pageId) || state.pageSeoSettings[0];
}

function seoStatus(setting) {
  return setting.seoTitle?.trim() && setting.seoDescription?.trim() ? "設定完成" : "尚未完成";
}

function ogImageStatus(setting) {
  return setting.useDefaultOgImage || !setting.ogImageUrl ? "使用全站預設圖" : "已上傳";
}

function robotsText(setting) {
  return `${setting.indexable ? "index" : "noindex"}, ${setting.followable ? "follow" : "nofollow"}`;
}

function canonicalForSetting(setting) {
  return setting.canonicalMode === "custom" ? setting.canonicalUrl : pageCanonicalUrl(setting.slug);
}

function effectiveOgTitle(setting) {
  return setting.syncOg ? setting.seoTitle : setting.ogTitle;
}

function effectiveOgDescription(setting) {
  return setting.syncOg ? setting.seoDescription : setting.ogDescription;
}

function effectiveOgImage(setting) {
  return setting.useDefaultOgImage || !setting.ogImageUrl
    ? previewImageFallbackSrc("全站預設分享圖")
    : setting.ogImageUrl;
}

function formatFileSize(bytes) {
  const size = Number(bytes) || 0;
  if (!size) return "尚未取得";
  if (size < 1024 * 1024) return `${Math.round(size / 1024)} KB`;
  return `${(size / 1024 / 1024).toFixed(1)} MB`;
}

function keywordsText(setting) {
  return (setting.keywords || []).join("、");
}

function parseKeywords(value) {
  return String(value || "")
    .split(/[,\n，、]/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function renderError(name) {
  const message = state.seoErrors?.[name];
  return message ? `<div class="field-error" data-error-for="${esc(name)}">${esc(message)}</div>` : "";
}

function renderCount(value, min, max) {
  const count = String(value || "").trim().length;
  const ok = count >= min && count <= max;
  return `<span class="char-count ${ok ? "is-ok" : ""}">${count} 字，建議 ${min}～${max} 個中文字</span>`;
}

function openSeoModal(pageId) {
  state.activeSeoPageId = pageId;
  state.seoDraft = clone(getSeoSetting(pageId));
  state.seoErrors = {};
  state.seoSavedNotice = "";
  render();
}

function closeSeoModal() {
  state.activeSeoPageId = "";
  state.seoDraft = null;
  state.seoErrors = {};
  render();
}

function updateSeoDraft(field, value) {
  if (!state.seoDraft) return;
  if (field === "keywords") {
    state.seoDraft.keywords = parseKeywords(value);
  } else if (["syncOg", "useDefaultOgImage", "indexable", "followable"].includes(field)) {
    state.seoDraft[field] = Boolean(value);
  } else {
    state.seoDraft[field] = value;
  }
  if (field === "slug" && state.seoDraft.canonicalMode === "auto") {
    state.seoDraft.canonicalUrl = pageCanonicalUrl(state.seoDraft.slug);
  }
  if (field === "seoTitle" && state.seoDraft.syncOg) state.seoDraft.ogTitle = value;
  if (field === "seoDescription" && state.seoDraft.syncOg) state.seoDraft.ogDescription = value;
}

function validateSeoDraft() {
  const draft = state.seoDraft;
  const errors = {};
  if (!draft.seoTitle?.trim()) errors.seoTitle = "SEO 標題不可空白。";
  if (!draft.seoDescription?.trim()) errors.seoDescription = "SEO 描述不可空白。";
  if (draft.pageId !== "home" && !/^[\p{L}\p{N}-]+$/u.test(draft.slug || "")) {
    errors.slug = "Slug 只能輸入文字、數字及連字號。";
  }
  if (draft.pageId !== "home" && /(^-|-$|--)/.test(draft.slug || "")) {
    errors.slug = "Slug 不可連續使用連字號，也不可放在開頭或結尾。";
  }
  if (draft.canonicalMode === "custom" && !/^https:\/\/[^ ]+\.[^ ]+/.test(draft.canonicalUrl || "")) {
    errors.canonicalUrl = "自訂 Canonical URL 必須是完整的 HTTPS URL。";
  }
  if (!draft.useDefaultOgImage && draft.ogImageUrl && !["image/jpeg", "image/png", "image/webp"].includes(draft.ogImageType)) {
    errors.ogImage = "分享圖片僅支援 JPG、PNG、WebP。";
  }
  state.seoErrors = errors;
  return Object.keys(errors).length === 0;
}

function focusFirstSeoError() {
  requestAnimationFrame(() => {
    const firstError = els.managerPanel.querySelector(".field-error");
    const field = firstError?.closest(".field")?.querySelector("input, textarea, select, button");
    firstError?.scrollIntoView({ block: "center", behavior: "smooth" });
    field?.focus();
  });
}

function saveSeoDraft() {
  if (!state.seoDraft) return;
  if (!validateSeoDraft()) {
    render();
    focusFirstSeoError();
    return;
  }
  state.pageSeoSettings = state.pageSeoSettings.map((item) =>
    item.pageId === state.seoDraft.pageId ? clone(state.seoDraft) : item
  );
  persistSeoSettings();
  state.activeSeoPageId = "";
  state.seoDraft = null;
  state.seoErrors = {};
  state.seoSavedNotice = "SEO／分享設定已儲存";
  render();
}

function handleSeoImageUpload(input) {
  const file = input.files?.[0];
  if (!state.seoDraft || !file) return;
  const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
  state.seoDraft.ogImageName = file.name;
  state.seoDraft.ogImageType = file.type;
  state.seoDraft.ogImageSize = file.size;
  if (!allowedTypes.includes(file.type)) {
    state.seoDraft.ogImageUrl = "";
    state.seoErrors = { ...state.seoErrors, ogImage: "分享圖片僅支援 JPG、PNG、WebP。" };
    render();
    return;
  }
  const reader = new FileReader();
  reader.onload = () => {
    const imageUrl = String(reader.result || "");
    const image = new Image();
    image.onload = () => {
      state.seoDraft.ogImageUrl = imageUrl;
      state.seoDraft.ogImageWidth = image.naturalWidth;
      state.seoDraft.ogImageHeight = image.naturalHeight;
      state.seoDraft.useDefaultOgImage = false;
      delete state.seoErrors.ogImage;
      render();
    };
    image.onerror = () => {
      state.seoErrors = { ...state.seoErrors, ogImage: "無法讀取圖片尺寸，請更換圖片。" };
      render();
    };
    image.src = imageUrl;
  };
  reader.readAsDataURL(file);
}

function removeSeoImage() {
  if (!state.seoDraft) return;
  state.seoDraft.ogImageUrl = "";
  state.seoDraft.ogImageName = "";
  state.seoDraft.ogImageType = "";
  state.seoDraft.ogImageSize = 0;
  state.seoDraft.ogImageWidth = 0;
  state.seoDraft.ogImageHeight = 0;
  state.seoDraft.useDefaultOgImage = true;
  render();
}

function renderSeoOutputPreview(setting) {
  const title = setting.seoTitle || "";
  const description = setting.seoDescription || "";
  const canonical = canonicalForSetting(setting);
  const ogTitle = effectiveOgTitle(setting) || "";
  const ogDescription = effectiveOgDescription(setting) || "";
  const ogImage = effectiveOgImage(setting);
  return esc(`<title>${title}</title>
<meta name="description" content="${description}">
<meta name="robots" content="${robotsText(setting)}">
<link rel="canonical" href="${canonical}">
<meta property="og:title" content="${ogTitle}">
<meta property="og:description" content="${ogDescription}">
<meta property="og:image" content="${ogImage}">
<meta property="og:url" content="${canonical}">
<meta property="og:type" content="website">`);
}

function renderSeoModal() {
  const draft = state.seoDraft;
  if (!draft) return "";
  const canonical = canonicalForSetting(draft);
  const ogTitle = effectiveOgTitle(draft);
  const ogDescription = effectiveOgDescription(draft);
  const imageCheck = draft.ogImageUrl
    ? `${esc(draft.ogImageType || "未知格式")}，${formatFileSize(draft.ogImageSize)}，${draft.ogImageWidth || 0} × ${draft.ogImageHeight || 0}px${draft.ogImageWidth === 1200 && draft.ogImageHeight === 630 ? "，尺寸符合建議" : "，建議 1200 × 630 px"}`
    : "目前使用全站預設分享圖。";
  return `
    <div class="modal-backdrop seo-modal-backdrop" role="presentation" data-close-seo-modal>
      <section class="quick-modal seo-modal" role="dialog" aria-modal="true" aria-labelledby="seoModalTitle" data-modal-panel>
        <div class="quick-modal-head">
          <div>
            <h3 id="seoModalTitle">編輯 SEO／分享設定－${esc(draft.pageName)}</h3>
            <p>設定搜尋結果、社群預覽與搜尋引擎收錄方式。</p>
          </div>
          <button class="btn" type="button" data-close-seo-modal>取消</button>
        </div>
        <div class="quick-modal-body seo-modal-body">
          <section class="seo-edit-section">
            <h4>A. 搜尋結果設定</h4>
            <div class="field-grid">
              <div class="field">
                <label>SEO 標題（必填）</label>
                <div class="field-help">顯示於 Google 搜尋結果標題與瀏覽器頁籤。</div>
                <input type="text" value="${esc(draft.seoTitle)}" data-seo-field="seoTitle">
                ${renderCount(draft.seoTitle, 25, 35)}
                ${renderError("seoTitle")}
              </div>
              <div class="field full">
                <label>SEO 描述（必填）</label>
                <div class="field-help">顯示於搜尋結果標題下方，用來簡述頁面內容。</div>
                <textarea data-seo-field="seoDescription">${esc(draft.seoDescription)}</textarea>
                ${renderCount(draft.seoDescription, 70, 100)}
                ${renderError("seoDescription")}
              </div>
              <div class="field">
                <label>網址路徑 Slug</label>
                <div class="field-help">${draft.pageId === "home" ? "首頁不可修改。" : "預設會依頁面名稱帶入；可改成中文或英文網址，只能使用文字、數字及連字號。"}</div>
                <input type="text" value="${esc(draft.slug)}" data-seo-field="slug" ${draft.pageId === "home" ? "disabled" : ""}>
                ${draft.pageId !== "home" ? `<div class="field-warning">修改網址可能造成原連結失效，正式環境應設定 301 Redirect。</div>` : ""}
                ${renderError("slug")}
              </div>
              <div class="field">
                <label>主要關鍵字（選填）</label>
                <div class="field-help">可用逗號或頓號分隔；僅供內容規劃及後台管理，不輸出 meta keywords。</div>
                <input type="text" value="${esc(keywordsText(draft))}" data-seo-field="keywords">
              </div>
            </div>
          </section>

          <section class="seo-edit-section">
            <h4>B. 社群分享設定</h4>
            <div class="field-grid">
              <label class="check-line full"><input type="checkbox" ${draft.syncOg ? "checked" : ""} data-seo-check="syncOg"> 分享標題與描述沿用 SEO 設定</label>
              <div class="field">
                <label>分享標題（OG Title）</label>
                <div class="field-help">用於 LINE、Facebook 等平台的網址預覽標題。</div>
                <input type="text" value="${esc(ogTitle || "")}" data-seo-field="ogTitle" ${draft.syncOg ? "disabled" : ""}>
              </div>
              <div class="field full">
                <label>分享描述（OG Description）</label>
                <div class="field-help">用於社群網址預覽摘要。</div>
                <textarea data-seo-field="ogDescription" ${draft.syncOg ? "disabled" : ""}>${esc(ogDescription || "")}</textarea>
              </div>
              <label class="check-line full"><input type="checkbox" ${draft.useDefaultOgImage ? "checked" : ""} data-seo-check="useDefaultOgImage"> 使用全站預設分享圖</label>
              <div class="field full">
                <label>分享圖片（OG Image）</label>
                <div class="field-help">支援 JPG、PNG、WebP；建議尺寸 1200 × 630 px。</div>
                <div class="og-image-editor">
                  <img src="${esc(effectiveOgImage(draft))}" alt="分享圖片預覽">
                  <div>
                    <div class="file-upload-row">
                      <label class="btn ${draft.useDefaultOgImage ? "disabled" : ""}">上傳 / 更換<input class="sr-only" type="file" accept="image/jpeg,image/png,image/webp" data-seo-image ${draft.useDefaultOgImage ? "disabled" : ""}></label>
                      ${draft.ogImageUrl ? `<button class="btn" type="button" data-remove-seo-image>移除</button>` : ""}
                    </div>
                    <p class="hint">${esc(draft.ogImageName || "尚未選擇頁面專屬圖片")}</p>
                    <p class="hint">${imageCheck}</p>
                  </div>
                </div>
                ${renderError("ogImage")}
              </div>
            </div>
          </section>

          <section class="seo-edit-section">
            <h4>C. 搜尋引擎設定</h4>
            <div class="field-grid">
              <label class="check-line"><input type="checkbox" ${draft.indexable ? "checked" : ""} data-seo-check="indexable"> 允許搜尋引擎收錄</label>
              <label class="check-line"><input type="checkbox" ${draft.followable ? "checked" : ""} data-seo-check="followable"> 允許搜尋引擎追蹤頁面連結</label>
              <div class="field full">
                <label>Canonical URL</label>
                <div class="field-help">用來指定此頁面的正式版本網址，避免重複內容問題。</div>
                <div class="segmented-control">
                  <label><input type="radio" name="canonicalMode" value="auto" ${draft.canonicalMode === "auto" ? "checked" : ""} data-seo-radio="canonicalMode"> 使用自動網址</label>
                  <label><input type="radio" name="canonicalMode" value="custom" ${draft.canonicalMode === "custom" ? "checked" : ""} data-seo-radio="canonicalMode"> 自訂網址</label>
                </div>
                <input type="text" value="${esc(draft.canonicalMode === "auto" ? pageCanonicalUrl(draft.slug) : draft.canonicalUrl)}" data-seo-field="canonicalUrl" ${draft.canonicalMode === "auto" ? "disabled" : ""}>
                ${renderError("canonicalUrl")}
              </div>
            </div>
          </section>

          <section class="seo-preview-grid">
            <div class="seo-preview-card">
              <h4>Google 搜尋結果預覽</h4>
              <div class="google-preview">
                <cite>${esc(canonical)}</cite>
                <strong>${esc(draft.seoTitle || "請輸入 SEO 標題")}</strong>
                <p>${esc(draft.seoDescription || "請輸入 SEO 描述")}</p>
              </div>
            </div>
            <div class="seo-preview-card">
              <h4>LINE／Facebook 分享預覽</h4>
              <div class="social-preview">
                <img src="${esc(effectiveOgImage(draft))}" alt="社群分享圖片預覽">
                <div>
                  <strong>${esc(ogTitle || "請輸入分享標題")}</strong>
                  <p>${esc(ogDescription || "請輸入分享描述")}</p>
                  <span>${esc(new URL(defaultSiteMeta.productionBaseUrl).hostname)}</span>
                </div>
              </div>
            </div>
            <div class="seo-preview-card full">
              <h4>HTML 輸出模擬</h4>
              <pre>${renderSeoOutputPreview(draft)}</pre>
            </div>
          </section>
        </div>
        <div class="quick-modal-actions">
          <button class="btn" type="button" data-close-seo-modal>取消</button>
          <button class="btn primary" type="button" data-save-seo-modal>儲存設定</button>
        </div>
      </section>
    </div>
  `;
}

function renderSeoRows() {
  return state.pageSeoSettings.map((setting) => `
    <tr>
      <td data-label="頁面名稱"><strong>${esc(setting.pageName)}</strong></td>
      <td data-label="SEO 狀態"><span class="status-pill ${seoStatus(setting) === "設定完成" ? "green" : "unsaved"}">${seoStatus(setting)}</span></td>
      <td data-label="分享圖">${ogImageStatus(setting)}</td>
      <td data-label="搜尋引擎收錄">${setting.indexable ? "允許收錄" : "不允許收錄"}</td>
      <td data-label="操作"><button class="btn" type="button" data-edit-seo="${esc(setting.pageId)}">編輯 SEO／分享設定</button></td>
    </tr>
  `).join("");
}

function seoPageType(setting) {
  if (setting.pageId === "home") return "首頁模組";
  const page = state.pages.find((item) => item.id === setting.pageId);
  const template = page && getPageTemplate(page.template);
  return template?.name || "前台功能頁";
}

function seoModulePackage(setting) {
  if (setting.pageId === "home") return "全站核心";
  const page = state.pages.find((item) => item.id === setting.pageId);
  if (!page) return "獨立頁面";
  const map = {
    content: "品牌內容模組",
    article: "文章 / 知識模組",
    contact: "轉換表單模組",
    faq: "FAQ 支援模組",
    product: "商品服務模組",
    resource: "據點資源模組"
  };
  return map[page.template] || "獨立頁面";
}

function seoModuleGroups() {
  return [
    {
      id: "core",
      name: "全站核心",
      description: "首頁、站名尾綴、預設描述、預設分享圖與搜尋引擎基本規則。",
      settings: state.pageSeoSettings.filter((setting) => setting.pageId === "home")
    },
    {
      id: "brand",
      name: "品牌內容模組",
      description: "品牌故事、關於我們、一般內容頁。適合隨網站基礎模組一起販售。",
      settings: state.pageSeoSettings.filter((setting) => {
        const page = state.pages.find((item) => item.id === setting.pageId);
        return page?.template === "content";
      })
    },
    {
      id: "content",
      name: "文章 / FAQ 模組",
      description: "最新消息、知識中心、FAQ 頁。支援列表頁 SEO 與社群分享覆寫。",
      settings: state.pageSeoSettings.filter((setting) => {
        const page = state.pages.find((item) => item.id === setting.pageId);
        return ["article", "faq"].includes(page?.template);
      })
    },
    {
      id: "commerce",
      name: "商品服務 / 轉換模組",
      description: "商品、服務、方案與聯絡表單頁。適合獨立啟用成交導向頁面。",
      settings: state.pageSeoSettings.filter((setting) => {
        const page = state.pages.find((item) => item.id === setting.pageId);
        return ["product", "contact"].includes(page?.template);
      })
    },
    {
      id: "local",
      name: "據點頁面",
      description: "找水站、服務據點、合作據點等本地據點頁面。",
      settings: state.pageSeoSettings.filter((setting) => {
        const page = state.pages.find((item) => item.id === setting.pageId);
        return page?.template === "resource";
      })
    }
  ].filter((group) => group.settings.length);
}

function renderSeoModuleRows(settings) {
  return settings.map((setting) => `
    <tr>
      <td data-label="功能頁">
        <strong>${esc(setting.pageName)}</strong>
        <small class="table-subtext">${esc(canonicalForSetting(setting))}</small>
      </td>
      <td data-label="頁面類型">${esc(seoPageType(setting))}</td>
      <td data-label="模組歸屬">${esc(seoModulePackage(setting))}</td>
      <td data-label="Meta 狀態"><span class="status-pill ${seoStatus(setting) === "設定完成" ? "green" : "unsaved"}">${seoStatus(setting)}</span></td>
      <td data-label="分享圖">${ogImageStatus(setting)}</td>
      <td data-label="Robots">${robotsText(setting)}</td>
      <td data-label="操作"><button class="btn" type="button" data-edit-seo="${esc(setting.pageId)}">編輯 SEO</button></td>
    </tr>
  `).join("");
}

function renderSeoModuleGroups() {
  return seoModuleGroups().map((group) => `
    <section class="settings-card seo-module-card">
      <div class="section-title">
        <div>
          <h3>${esc(group.name)}</h3>
          <p>${esc(group.description)}</p>
        </div>
        <span class="status-pill">${group.settings.length} 個功能頁</span>
      </div>
      <table class="admin-table responsive-table">
        <thead><tr><th>功能頁</th><th>頁面類型</th><th>模組歸屬</th><th>Meta 狀態</th><th>分享圖</th><th>Robots</th><th>操作</th></tr></thead>
        <tbody>${renderSeoModuleRows(group.settings)}</tbody>
      </table>
    </section>
  `).join("");
}

function orderedSeoPageTree() {
  const topPages = state.pages.filter((page) => !page.parentId);
  const childPages = state.pages.filter((page) => page.parentId);
  const ordered = [{ kind: "home", level: 0, setting: getSeoSetting("home"), page: null }];
  topPages.forEach((page) => {
    ordered.push({ kind: "page", level: 0, setting: getSeoSetting(page.id), page });
    childPages
      .filter((child) => child.parentId === page.id)
      .forEach((child) => ordered.push({ kind: "page", level: 1, setting: getSeoSetting(child.id), page: child }));
  });
  childPages
    .filter((child) => !state.pages.some((page) => page.id === child.parentId))
    .forEach((child) => ordered.push({ kind: "page", level: 0, setting: getSeoSetting(child.id), page: child }));
  return ordered;
}

function renderSeoPageTreeRows() {
  return orderedSeoPageTree().map((item) => {
    const setting = item.setting;
    const page = item.page;
    const parentPage = page?.parentId ? state.pages.find((entry) => entry.id === page.parentId) : null;
    const type = item.kind === "home" ? "首頁模組" : seoPageType(setting);
    const visible = item.kind === "home" ? "首頁" : page?.visible || "尚未顯示";
    const hierarchyClass = item.level ? "is-child" : "";
    return `
      <tr class="seo-page-row ${hierarchyClass}">
        <td data-label="前台頁面">
          <div class="seo-page-name level-${item.level}">
            ${item.level ? `<span class="seo-tree-line" aria-hidden="true">↳</span>` : ""}
            <div>
              <strong>${esc(setting.pageName)}</strong>
              <small>${item.level ? `子頁：${esc(parentPage?.name || "未指定上層")}` : esc(visible)}</small>
            </div>
          </div>
        </td>
        <td data-label="頁面類型">${esc(type)}</td>
        <td data-label="網址">
          <strong class="seo-url-slug">${setting.slug ? `/${esc(setting.slug)}` : "/"}</strong>
          <small class="table-subtext">${esc(canonicalForSetting(setting))}</small>
        </td>
        <td data-label="Meta 狀態"><span class="status-pill ${seoStatus(setting) === "設定完成" ? "green" : "unsaved"}">${seoStatus(setting)}</span></td>
        <td data-label="分享圖">${ogImageStatus(setting)}</td>
        <td data-label="Robots">${robotsText(setting)}</td>
        <td data-label="操作"><button class="btn" type="button" data-edit-seo="${esc(setting.pageId)}">編輯 SEO</button></td>
      </tr>
    `;
  }).join("");
}

function renderSeoPageTreeList() {
  const total = orderedSeoPageTree().length;
  return `
    <section class="settings-card seo-page-tree-card">
      <div class="section-title">
        <div>
          <h3>前台頁面 SEO 清單</h3>
          <p>先依前台頁面階層找頁面，再編輯該頁的 Meta、分享圖、Canonical 與 Robots。</p>
        </div>
        <span class="status-pill">${total} 個頁面</span>
      </div>
      <table class="admin-table responsive-table seo-page-tree-table">
        <thead><tr><th>前台頁面</th><th>頁面類型</th><th>網址</th><th>Meta 狀態</th><th>分享圖</th><th>Robots</th><th>操作</th></tr></thead>
        <tbody>${renderSeoPageTreeRows()}</tbody>
      </table>
    </section>
  `;
}

function renderSeoSummaryCards() {
  const total = state.pageSeoSettings.length;
  const completed = state.pageSeoSettings.filter((setting) => seoStatus(setting) === "設定完成").length;
  const customOg = state.pageSeoSettings.filter((setting) => !setting.useDefaultOgImage && setting.ogImageUrl).length;
  const noIndex = state.pageSeoSettings.filter((setting) => !setting.indexable).length;
  return `
    <div class="seo-summary-grid">
      <div class="seo-summary-card"><span>功能頁總數</span><strong>${total}</strong><small>每個功能頁可獨立設定 Meta、OG、Canonical</small></div>
      <div class="seo-summary-card"><span>Meta 完成</span><strong>${completed}/${total}</strong><small>標題與描述皆已填寫</small></div>
      <div class="seo-summary-card"><span>專屬分享圖</span><strong>${customOg}</strong><small>其餘沿用全站預設圖</small></div>
      <div class="seo-summary-card"><span>Noindex</span><strong>${noIndex}</strong><small>不開放搜尋引擎收錄的頁面</small></div>
    </div>
  `;
}

function refreshSeoLivePreview() {
  const draft = state.seoDraft;
  const modal = els.managerPanel.querySelector(".seo-modal");
  if (!draft || !modal) return;
  const canonical = canonicalForSetting(draft);
  const ogTitle = effectiveOgTitle(draft) || "請輸入分享標題";
  const ogDescription = effectiveOgDescription(draft) || "請輸入分享描述";
  const google = modal.querySelector(".google-preview");
  if (google) {
    google.querySelector("cite").textContent = canonical;
    google.querySelector("strong").textContent = draft.seoTitle || "請輸入 SEO 標題";
    google.querySelector("p").textContent = draft.seoDescription || "請輸入 SEO 描述";
  }
  const social = modal.querySelector(".social-preview");
  if (social) {
    social.querySelector("img").src = effectiveOgImage(draft);
    social.querySelector("strong").textContent = ogTitle;
    social.querySelector("p").textContent = ogDescription;
  }
  const output = modal.querySelector(".seo-preview-card pre");
  if (output) output.textContent = renderSeoOutputPreview(draft).replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#039;/g, "'").replace(/&amp;/g, "&");
  modal.querySelectorAll("[data-seo-field='seoTitle'], [data-seo-field='seoDescription']").forEach((field) => {
    const count = field.closest(".field")?.querySelector(".char-count");
    if (!count) return;
    const isTitle = field.dataset.seoField === "seoTitle";
    const min = isTitle ? 25 : 70;
    const max = isTitle ? 35 : 100;
    const length = String(field.value || "").trim().length;
    count.textContent = `${length} 字，建議 ${min}～${max} 個中文字`;
    count.classList.toggle("is-ok", length >= min && length <= max);
  });
}

function renderBannerMetaManager() {
  const homeSetting = getSeoSetting("home");
  return `
    <section class="settings-stack">
      ${managerHeader("SEO 管理", "以功能頁為單位管理 Meta Title、Description、社群分享、Canonical 與搜尋引擎收錄；未啟用的模組可保留預設值。", [])}
      ${state.seoSavedNotice ? `<div class="save-toast">${esc(state.seoSavedNotice)}</div>` : ""}
      <section class="settings-card">
        <div class="section-title">
          <div>
            <h3>SEO 管理總覽</h3>
            <p>新增或改名前台頁面時，系統會依頁面名稱預設 SEO 標題、網址 Slug、Canonical 與分享標題；需要時可在各功能頁覆寫。</p>
          </div>
          <button class="btn primary" type="button" data-edit-seo="home">編輯首頁 SEO</button>
        </div>
        ${renderSeoSummaryCards()}
        <div class="seo-default-strip">
          <div>
            <span>全站預設</span>
            <strong>${esc(defaultSiteMeta.titleSuffix)}</strong>
            <p>${esc(defaultSiteMeta.description)}</p>
          </div>
          <div>
            <span>首頁 Canonical</span>
            <strong>${esc(canonicalForSetting(homeSetting))}</strong>
            <p>${esc(robotsText(homeSetting))} · ${esc(ogImageStatus(homeSetting))}</p>
          </div>
        </div>
        <div class="seo-auto-note">
          <strong>自動帶入規則</strong>
          <span>頁面名稱 → SEO Title / OG Title；頁面名稱 → Slug → Canonical URL；描述與分享圖未設定時沿用全站預設。</span>
        </div>
      </section>
      ${renderSeoPageTreeList()}
      <section class="settings-card">
        <div class="section-title">
          <div>
            <h3>技術輸出規則</h3>
            <p>這些欄位由每個功能頁的設定輸出，工程端可依模組啟用狀態產生對應 head tags。</p>
          </div>
        </div>
        <div class="seo-rule-grid">
          <div><strong>Meta 基礎</strong><span>title、description、canonical、robots</span></div>
          <div><strong>社群分享</strong><span>og:title、og:description、og:image、og:url</span></div>
          <div><strong>模組化販售</strong><span>每個功能頁保有獨立 SEO 設定，可隨模組開關與權限拆分</span></div>
          <div><strong>進階資料</strong><span>文章、FAQ、據點可於正式版再接 JSON-LD 結構化資料</span></div>
        </div>
      </section>
      ${renderSeoModal()}
    </section>
  `;
}

function renderTrackingSettingsManager() {
  return `
    <section class="settings-stack">
      ${managerHeader("追蹤設定", "管理第三方追蹤碼、驗證碼、Cookie 同意與重要事件名稱。", [])}
      <section class="settings-card">
        <div class="section-title">
          <div>
            <h3>追蹤碼</h3>
            <p>填入第三方平台 ID，正式版部署時會輸出到前台。</p>
          </div>
          <button class="btn primary" type="button">儲存追蹤設定</button>
        </div>
        <div class="field-grid">
          <div class="field"><label>GA4 Measurement ID</label><input type="text" placeholder="G-XXXXXXXXXX"></div>
          <div class="field"><label>GTM Container ID</label><input type="text" placeholder="GTM-XXXXXXX"></div>
          <div class="field"><label>Meta Pixel ID</label><input type="text" placeholder="例如 1234567890"></div>
          <div class="field"><label>LINE Tag ID</label><input type="text" placeholder="LINE Tag ID"></div>
          <div class="field full"><label>Google Search Console 驗證碼</label><input type="text" placeholder="google-site-verification=..."></div>
        </div>
      </section>
      <section class="settings-card">
        <div class="section-title">
          <div>
            <h3>事件追蹤</h3>
            <p>統一命名前台互動事件，方便 GA4 / GTM 對應。</p>
          </div>
        </div>
        <table class="admin-table responsive-table">
          <thead><tr><th>事件</th><th>事件名稱</th><th>觸發位置</th><th>狀態</th></tr></thead>
          <tbody>
            ${[
              ["表單送出", "form_submit", "聯絡頁 / CTA", "啟用"],
              ["LINE 點擊", "line_click", "Header / Footer / CTA", "啟用"],
              ["電話點擊", "phone_click", "Header / Footer", "啟用"],
              ["文章點擊", "article_click", "列表 / 首頁模塊", "待確認"]
            ].map((row) => `<tr>${row.map((cell, index) => `<td data-label="${["事件", "事件名稱", "觸發位置", "狀態"][index]}">${index === 3 ? `<span class="status-pill">${cell}</span>` : esc(cell)}</td>`).join("")}</tr>`).join("")}
          </tbody>
        </table>
      </section>
      <section class="settings-card">
        <div class="section-title"><div><h3>Cookie / Consent</h3><p>控制是否在前台顯示同意提示與追蹤載入模式。</p></div></div>
        <div class="field-grid">
          <div class="field"><label>Cookie 同意提示</label><select><option>啟用</option><option>停用</option></select></div>
          <div class="field"><label>同意前追蹤碼</label><select><option>延後載入</option><option>立即載入</option></select></div>
        </div>
      </section>
    </section>
  `;
}

function renderSiteSettingsManager() {
  return `
    <section class="settings-stack">
      ${managerHeader("網站設定", "管理站台系統層級設定；品牌、Logo、聯絡資料請在官網基本資訊維護。", [])}
      <section class="settings-card">
        <div class="section-title">
          <div><h3>站台狀態</h3><p>控制網站基本運作狀態、網域、語系與時區。</p></div>
          <button class="btn primary" type="button">儲存網站設定</button>
        </div>
        <div class="field-grid">
          <div class="field"><label>正式網域</label><input type="text" placeholder="https://www.example.com"></div>
          <div class="field"><label>網站狀態</label><select><option>已發布</option><option>維護模式</option><option>草稿站</option></select></div>
          <div class="field"><label>預設語系</label><select><option>繁體中文 zh-TW</option><option>英文 en</option></select></div>
          <div class="field"><label>時區</label><select><option>Asia/Taipei</option><option>UTC</option></select></div>
        </div>
      </section>
      <section class="settings-card">
        <div class="section-title"><div><h3>Sitemap / Robots</h3><p>控制搜尋引擎讀取站台的基礎檔案。</p></div></div>
        <div class="field-grid">
          <div class="field"><label>Sitemap</label><select><option>自動產生</option><option>手動上傳</option></select></div>
          <div class="field"><label>robots.txt</label><select><option>允許正式站索引</option><option>封鎖全站索引</option></select></div>
          <div class="field full"><label>自訂 robots.txt 內容</label><textarea placeholder="User-agent: *&#10;Allow: /"></textarea></div>
        </div>
      </section>
      <section class="settings-card">
        <div class="section-title"><div><h3>安全與上傳</h3><p>管理後台登入安全、上傳格式與系統操作限制。</p></div></div>
        <div class="field-grid">
          <div class="field"><label>登入逾時</label><select><option>30 分鐘</option><option>1 小時</option><option>4 小時</option></select></div>
          <div class="field"><label>允許上傳副檔名</label><input type="text" value="jpg, png, webp, pdf, mp4"></div>
          <div class="field"><label>最大上傳容量</label><select><option>10 MB</option><option>50 MB</option><option>100 MB</option></select></div>
          <div class="field"><label>404 頁面</label><select><option>使用預設 404</option><option>指定前台頁面</option></select></div>
        </div>
      </section>
    </section>
  `;
}

const dataManagerConfig = {
  articles: {
    title: "內容管理",
    description: "管理最新消息、公告、活動、知識文章、FAQ 與長篇內容資料。",
    addLabel: "新增內容",
    columns: ["標題", "文章類型", "分類", "狀態", "更新 / 備註"],
    detailTitle: "文章內容",
    detailFields: [
      { key: "summary", label: "文章摘要", type: "textarea", help: "顯示在列表卡片、首頁最新消息或文章頁開頭。" },
      { key: "body", label: "文章內文", type: "textarea", help: "正式文章內容，可作為前台文章詳細頁使用。" },
      { key: "imageAlt", label: "封面圖片描述", type: "text", help: "填寫圖片用途，方便前台顯示與無障礙描述。" },
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
      { key: "clientBackground", label: "背景介紹", type: "richtext", help: "描述客戶、專案、作品或合作背景。" },
      { key: "challenge", label: "需求 / 挑戰", type: "richtext", help: "描述原本遇到的需求、目標、限制或問題。" },
      { key: "solution", label: "執行方式", type: "richtext", help: "描述提供的服務、流程、內容或解決方式。" },
      { key: "result", label: "成果 / 亮點", type: "richtext", help: "描述成果數據、成效、亮點、客戶回饋或可展示的證明。" },
      { key: "imageAlt", label: "圖片描述", type: "text", help: "填寫圖片內容，方便前台顯示與無障礙描述。" },
      { key: "linkUrl", label: "詳細頁連結", type: "text", help: "例如 /cases/sample-project，供首頁模塊或列表頁引用。" }
    ]
  },
  products: {
    title: "商品 / 服務管理",
    description: "管理商品、服務、方案與加值項目；類型可自訂，單筆資料共用同一組欄位。",
    addLabel: "新增商品 / 服務",
    columns: ["名稱", "類型", "分類", "狀態", "CTA / 備註"],
    detailTitle: "商品 / 服務內容",
    detailFields: [
      { key: "summary", label: "簡短介紹", type: "textarea", help: "顯示在商品卡片、服務列表或頁首摘要。" },
      { key: "imageAlt", label: "代表圖 / 主圖描述", type: "text", help: "填寫圖片內容，方便前台顯示與無障礙描述。" },
      { key: "mainFileName", label: "上傳代表圖 / 主圖", type: "file", accept: "image/*", help: "用於列表卡片、詳細頁主圖或分享圖片。" },
      { key: "body", label: "詳細內容", type: "richtext", help: "放完整介紹、圖片影片說明、服務細節或方案內容。" },
      { key: "spec", label: "規格 / 服務內容", type: "richtext", help: "填寫規格、包含項目、適用對象、服務內容或方案細節。" },
      { key: "benefit", label: "主要特色", type: "richtext", help: "整理使用者最在意的賣點、優勢或選擇理由。" },
      { key: "ctaText", label: "CTA 文字", type: "text", help: "例如 立即諮詢、索取簡報、查看方案。" },
      { key: "linkUrl", label: "CTA 連結", type: "text", help: "例如 /products/sample-item、/services/sample-service 或外部連結。" }
    ]
  },
  resources: {
    title: "據點管理",
    description: "管理前台據點卡片使用的圖片、排序、縣市、名稱、地址與行動連結。",
    addLabel: "新增據點",
    columns: ["據點名稱", "縣市 / 區域", "狀態", "地址"],
    detailTitle: "據點內容",
    detailFields: [
      { key: "sort", label: "排序編號", type: "text", help: "顯示在卡片左上角，例如 01、02；也可用來控制前台排序。" },
      { key: "mainFileName", label: "據點圖片", type: "file", accept: "image/*", help: "顯示在據點卡片左側的照片或設備情境圖。" },
      { key: "summary", label: "地址標籤", type: "text", help: "顯示在地址上方，例如 案場地址、門市地址、水站地址。" },
      { key: "linkUrl", label: "Google 導航連結", type: "text", help: "前台「Google 導航」按鈕使用的 Google Maps 連結。" },
      { key: "ctaText", label: "LINE 詢問連結", type: "text", help: "前台「LINE 詢問」按鈕使用的 LINE 連結；若全站共用，可先留空。" }
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
    linkUrl: "",
    imageAlt: "",
    mainFileName: "",
    spec: "",
    benefit: "",
    ctaText: "",
    seoTitle: "",
    slug: ""
  };
}

function renderDataEditor(kind, item) {
  const config = dataManagerConfig[kind];
  const isDirty = Boolean(state.activeDataEditor?.isDirty);
  const shouldHideHeader = kind === "products" || kind === "resources";
  const isLocationData = kind === "resources";
  const editorDescription = isLocationData
    ? "編輯完成後可回到列表；這筆資料會對應前台據點卡片的圖片、縣市、名稱、地址與按鈕連結。"
    : "編輯完成後可回到列表；這筆資料可被首頁模塊與前台列表頁引用。";
  const statusOptions = isLocationData
    ? ["顯示", "隱藏", "待補", "即將開幕", "暫停服務"]
    : ["已發布", "草稿", "顯示", "隱藏", "待補", "已上傳"];
  return `
    ${shouldHideHeader ? "" : managerHeader(config.title, config.description, [])}
    <div class="settings-card">
      <div class="section-title">
        <div>
          <h3>${esc(config.detailTitle)}</h3>
          <p>${esc(editorDescription)}</p>
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
        ${isLocationData ? "" : `
          <div class="field">
            <label>${esc(config.columns[1])}</label>
            ${kind === "products"
              ? `<select data-data-field="type" data-data-kind="${kind}" data-data-id="${item.id}">
                  ${getCmsTypeOptions("products", state.dataCollections.products).map((option) => `<option value="${esc(option)}" ${item.type === option ? "selected" : ""}>${esc(option)}</option>`).join("")}
                </select>`
              : `<input type="text" value="${esc(item.type)}" data-data-field="type" data-data-kind="${kind}" data-data-id="${item.id}">`}
          </div>
        `}
        <div class="field">
          <label>${esc(isLocationData ? config.columns[1] : config.columns[2])}</label>
          <input type="text" value="${esc(item.category)}" data-data-field="category" data-data-kind="${kind}" data-data-id="${item.id}">
        </div>
        <div class="field">
          <label>${esc(isLocationData ? config.columns[2] : config.columns[3])}</label>
          <select data-data-field="status" data-data-kind="${kind}" data-data-id="${item.id}">
            ${statusOptions.map((status) => `<option value="${status}" ${item.status === status ? "selected" : ""}>${status}</option>`).join("")}
          </select>
        </div>
        <div class="field full">
          <label>${esc(isLocationData ? config.columns[3] : config.columns[4])}</label>
          <input type="text" value="${esc(item.updated)}" data-data-field="updated" data-data-kind="${kind}" data-data-id="${item.id}">
        </div>
        ${config.detailFields.map((field) => `
          <div class="field ${["textarea", "richtext"].includes(field.type) ? "full" : ""}">
            <label>${esc(field.label)}</label>
            <div class="field-help">${esc(field.help)}</div>
            ${field.type === "file"
              ? `<div class="file-upload-row">
                  <label class="btn" for="${field.key}-${item.id}">選擇檔案</label>
                  <span class="hint">${esc(item[field.key] || "尚未選擇檔案")}</span>
                  <input class="visually-hidden" id="${field.key}-${item.id}" type="file" accept="${esc(field.accept || "*")}" data-file-field="${field.key}" data-data-kind="${kind}" data-data-id="${item.id}">
                </div>`
              : field.type === "richtext"
              ? renderRichTextEditor({
                  kind,
                  item,
                  field,
                  placeholder: "輸入內容，可調整粗細、字級、顏色，也可以插入圖片、影片或連結。"
                })
              : field.type === "textarea"
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
      <div class="field-grid article-editor-grid">
        <div class="field article-title-field">
          <label>${titleLabel}</label>
          <input type="text" value="${esc(item.title)}" data-data-field="title" data-data-kind="articles" data-data-id="${item.id}">
        </div>
        ${isFaq ? `
          <div class="field article-type-field">
            <label>FAQ 類型</label>
            <select data-data-field="category" data-data-kind="articles" data-data-id="${item.id}">
              ${getCmsCategoryOptions("faq", state.dataCollections.articles.filter((entry) => entry.type === "FAQ")).map((option) => `<option value="${esc(option)}" ${item.category === option ? "selected" : ""}>${esc(option)}</option>`).join("")}
            </select>
            <div class="field-help">決定這題 FAQ 顯示在哪一個分類。</div>
          </div>
        ` : `
          <div class="field article-type-field">
            <label>文章類型</label>
            <select data-data-field="type" data-data-kind="articles" data-data-id="${item.id}">
              ${cmsTypeOptions.articles.map((option) => `<option value="${esc(option)}" ${type === option ? "selected" : ""}>${esc(option)}</option>`).join("")}
            </select>
            <div class="field-help">決定這篇文章使用一般、活動或案例欄位。</div>
          </div>
        `}
        <div class="field full publish-control-field">
          <div class="publish-control-row ${isFaq ? "no-pin" : ""}">
            <div class="status-select-field">
              <label>狀態</label>
              <select data-data-field="status" data-data-kind="articles" data-data-id="${item.id}">
                ${["草稿", "已發布", "隱藏"].map((status) => `<option value="${status}" ${statusValue === status ? "selected" : ""}>${status}</option>`).join("")}
              </select>
            </div>
            <div class="date-time-field">
              <label>${dateLabel}</label>
              <input type="datetime-local" value="${esc(toDateTimeValue(item.updated))}" data-data-field="updated" data-data-kind="articles" data-data-id="${item.id}">
              <div class="field-help">可直接輸入日期時間，也可用日曆選擇。</div>
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
        ${isFaq ? "" : `
          <div class="field full">
            <label>摘要</label>
            <input type="text" value="${esc(item.summary || "")}" data-data-field="summary" data-data-kind="articles" data-data-id="${item.id}">
          </div>
        `}
        ${extraFields[type] || ""}
        ${isFaq ? "" : `
          <div class="field">
            <label>封面圖描述</label>
            <input type="text" value="${esc(item.imageAlt || "")}" placeholder="填寫封面圖內容描述" data-data-field="imageAlt" data-data-kind="articles" data-data-id="${item.id}">
            <div class="field-help">用在列表卡片、分享圖片或文章封面。</div>
          </div>
          <div class="field">
            <label>上傳封面圖</label>
            <div class="file-upload-row">
              <label class="btn" for="coverFile-${item.id}">選擇檔案</label>
              <span class="hint">${esc(item.coverFileName || "尚未選擇檔案")}</span>
              <input class="visually-hidden" id="coverFile-${item.id}" type="file" accept="image/*" data-file-field="coverFileName" data-data-kind="articles" data-data-id="${item.id}">
            </div>
            <div class="field-help">&nbsp;</div>
          </div>
          <div class="field">
            <label>文章首圖描述</label>
            <input type="text" value="${esc(item.heroImageAlt || "")}" placeholder="填寫文章首圖內容描述" data-data-field="heroImageAlt" data-data-kind="articles" data-data-id="${item.id}">
            <div class="field-help">用在文章詳細頁內文最上方的主圖。</div>
          </div>
          <div class="field">
            <label>上傳文章首圖</label>
            <div class="file-upload-row">
              <label class="btn" for="heroFile-${item.id}">選擇檔案</label>
              <span class="hint">${esc(item.heroFileName || "尚未選擇檔案")}</span>
              <input class="visually-hidden" id="heroFile-${item.id}" type="file" accept="image/*" data-file-field="heroFileName" data-data-kind="articles" data-data-id="${item.id}">
            </div>
            <div class="field-help">&nbsp;</div>
          </div>
        `}
        <div class="field full rich-editor-field">
          <label>${bodyLabel}</label>
          <div class="rich-editor" data-rich-editor="${item.id}">
            <div class="rich-toolbar" aria-label="內文編輯工具列">
              <button class="btn compact" type="button" data-rich-command="bold" title="粗體"><strong>B</strong></button>
              <button class="btn compact" type="button" data-rich-command="foreColor" data-rich-value="#0e6a8c" title="品牌色文字">品牌色</button>
              <label class="rich-color" title="文字顏色">
                <span>A</span>
                <input type="color" value="#0e6a8c" data-rich-color>
              </label>
              <button class="btn compact" type="button" data-rich-insert="link" title="插入連結">連結</button>
              <button class="btn compact" type="button" data-rich-upload-trigger="image" title="上傳圖片">圖片</button>
              <button class="btn compact" type="button" data-rich-upload-trigger="video" title="上傳影片">影片</button>
              <input class="visually-hidden" type="file" accept="image/*" data-rich-upload="image">
              <input class="visually-hidden" type="file" accept="video/*" data-rich-upload="video">
            </div>
            <div class="rich-body" contenteditable="true" data-placeholder="輸入文章內容，可上傳圖片、影片或插入連結。" data-rich-body data-data-kind="articles" data-data-id="${item.id}" data-data-field="bodyHtml">${richTextInitialHtml(item)}</div>
          </div>
          <div class="field-help">可編輯文字粗體、顏色，並直接上傳圖片、影片；連結可貼網址。</div>
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

function getCmsTypeOptions(kind, items) {
  return [...new Set([...(cmsTypeOptions[kind] || []), ...items.map((item) => item.type).filter(Boolean)])];
}

function filterDataItems(kind, items, categoryField = kind === "articles" ? "type" : "category") {
  const filters = state.dataFilters[kind] || { search: "", category: "", status: "" };
  const query = filters.search.trim().toLowerCase();
  return items.filter((item) => {
    const matchesSearch = !query || [item.title, item.type, item.category, item.status, item.updated]
      .some((value) => String(value || "").toLowerCase().includes(query));
    const matchesCategory = !filters.category || item[categoryField] === filters.category;
    const matchesStatus = !filters.status || item.status === filters.status;
    return matchesSearch && matchesCategory && matchesStatus;
  });
}

const cmsTypeOptions = {
  articles: ["最新消息", "知識文章", "活動公告", "案例"],
  faq: ["一般問題", "服務問題", "付款問題"],
  cases: ["案例"],
  products: ["商品", "服務", "方案", "加值項目"],
  resources: ["據點"]
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
  const categoryOptions = kind === "articles" ? cmsTypeOptions.articles : getCmsCategoryOptions(kind, items);
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

function renderArticleQuickAddModal(fixedType = "") {
  const quickAdd = state.activeArticleQuickAdd;
  if (!quickAdd) return "";
  const isCategory = quickAdd.type === "category";
  const isFaq = quickAdd.type === "faq";
  if (!isCategory && !isFaq) return "";
  const isFaqCategory = isCategory && fixedType === "FAQ";
  const titleId = isFaq ? "faqQuickAddTitle" : "articleQuickAddTitle";
  const categoryLabel = isFaqCategory ? "FAQ 類型名稱" : "文章類型名稱";
  const categoryPlaceholder = isFaqCategory ? "例如：服務問題、付款問題" : "例如：品牌觀點、活動消息";
  return `
    <div class="modal-backdrop" role="presentation" data-close-article-quick-add>
      <section class="quick-modal" role="dialog" aria-modal="true" aria-labelledby="${titleId}" data-modal-panel>
        <div class="quick-modal-head">
          <div>
            <h3 id="${titleId}">${isFaq ? "新增 FAQ" : isFaqCategory ? "新增 FAQ 類型" : "新增文章類型"}</h3>
            <p>${isFaq ? "快速輸入問題與答案，新增後會直接出現在 FAQ 總表。" : isFaqCategory ? "新增後會同步到 FAQ 類型、篩選器與新增 FAQ 選單。" : "新增後會同步到文章類型、篩選器與文章編輯選單。"}</p>
          </div>
        </div>
        <div class="quick-modal-body">
          ${isFaq ? `
            <div class="field">
              <label>問題</label>
              <input type="text" value="${esc(state.articleQuickDraft.title || "")}" placeholder="請輸入常見問題" data-article-quick-field="title">
            </div>
            <div class="field">
              <label>FAQ 類型</label>
              <select data-article-quick-field="category">
                ${getCmsCategoryOptions("faq", state.dataCollections.articles.filter((item) => item.type === "FAQ")).map((category) => `<option value="${esc(category)}" ${state.articleQuickDraft.category === category ? "selected" : ""}>${esc(category)}</option>`).join("")}
              </select>
            </div>
            <div class="field">
              <label>答案</label>
              <textarea placeholder="請輸入回答內容" data-article-quick-field="body">${esc(state.articleQuickDraft.body || "")}</textarea>
            </div>
            <div class="field-grid modal-field-grid">
              <div class="field">
                <label>排序</label>
                <input type="text" value="${esc(state.articleQuickDraft.sort || "")}" placeholder="例如 1" data-article-quick-field="sort">
              </div>
              <div class="field">
                <label>狀態</label>
                <select data-article-quick-field="status">
                  ${["已發布", "草稿"].map((status) => `<option value="${status}" ${state.articleQuickDraft.status === status ? "selected" : ""}>${status}</option>`).join("")}
                </select>
              </div>
            </div>
          ` : `
            <div class="field">
              <label>${categoryLabel}</label>
              <input type="text" value="${esc(state.articleCategoryDraft)}" placeholder="${categoryPlaceholder}" data-article-category-draft>
            </div>
          `}
        </div>
        <div class="quick-modal-actions">
          <button class="btn" type="button" data-close-article-quick-add>取消</button>
          <button class="btn primary" type="button" data-confirm-article-quick-add>${isFaq ? "新增 FAQ" : isFaqCategory ? "新增 FAQ 類型" : "新增文章類型"}</button>
        </div>
      </section>
    </div>
  `;
}

function renderProductTypeAddModal() {
  if (state.activeArticleQuickAdd?.type !== "productType") return "";
  return `
    <div class="modal-backdrop" role="presentation" data-close-product-type-add>
      <section class="quick-modal" role="dialog" aria-modal="true" aria-labelledby="productTypeAddTitle" data-modal-panel>
        <div class="quick-modal-head">
          <div>
            <h3 id="productTypeAddTitle">新增類型</h3>
            <p>新增後會同步到類型篩選器與商品 / 服務編輯選單。</p>
          </div>
        </div>
        <div class="quick-modal-body">
          <div class="field">
            <label>類型名稱</label>
            <input type="text" value="${esc(state.articleCategoryDraft)}" placeholder="例如：顧問服務、訂閱方案" data-product-type-draft>
          </div>
        </div>
        <div class="quick-modal-actions">
          <button class="btn" type="button" data-close-product-type-add>取消</button>
          <button class="btn primary" type="button" data-confirm-product-type-add>新增類型</button>
        </div>
      </section>
    </div>
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
  const hasFixedType = Boolean(fixedType);
  const sourceItems = kind === "articles"
    ? items.filter((item) => fixedType ? item.type === fixedType : true)
    : items;
  const isFaqPage = kind === "articles" && fixedType === "FAQ";
  const isProductPage = kind === "products";
  const isLocationPage = kind === "resources";
  const visibleItems = filterDataItems(kind, sourceItems, isFaqPage ? "category" : isProductPage ? "type" : undefined);
  const categoryOptions = isFaqPage ? getCmsCategoryOptions("faq", sourceItems) : isProductPage ? getCmsTypeOptions("products", items) : getCmsCategoryOptions(kind, items);
  const statusOptions = getDataFilterOptions(items, "status");
  const typeOptions = cmsTypeOptions[kind] || ["一般資料"];
  const title = fixedType ? fixedType : kind === "articles" ? "文章" : config.title.replace("管理", "");
  const categoryLabel = isFaqPage ? "FAQ 類型" : kind === "articles" ? "文章類型" : isProductPage ? "類型" : isLocationPage ? "縣市 / 區域" : "分類";
  const categoryAllLabel = isFaqPage ? "全部 FAQ 類型" : kind === "articles" ? "全部文章類型" : isProductPage ? "全部類型" : isLocationPage ? "全部縣市 / 區域" : "全部分類";
  const searchPlaceholder = isProductPage
    ? "搜尋名稱、類型、分類、狀態或備註"
    : isLocationPage
      ? "搜尋據點名稱、縣市、區域、地址或狀態"
      : "搜尋文章名稱、分類、狀態或備註";

  return `
    <section class="cms-workbench">
      ${kind === "articles" ? renderArticleQuickAddModal(fixedType) : ""}
      ${kind === "products" ? renderProductTypeAddModal() : ""}
      <div class="list-controls">
        <div class="list-control-fields">
          <div class="field">
            <label>搜尋</label>
            <input type="search" value="${esc(filters.search)}" placeholder="${esc(searchPlaceholder)}" data-data-filter="search" data-data-filter-kind="${kind}">
          </div>
          <div class="field">
            <label>${categoryLabel}</label>
            <select data-data-filter="category" data-data-filter-kind="${kind}">
              <option value="">${categoryAllLabel}</option>
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
              ${isFaqPage ? `
                <details class="action-menu">
                  <summary class="btn">批次操作</summary>
                  <div class="action-menu-list">
                    <label class="action-menu-item" for="faqBatchUpload">批次上傳</label>
                    <button class="action-menu-item" type="button" data-download-faq-template>格式範本下載</button>
                  </div>
                </details>
                <input class="visually-hidden" id="faqBatchUpload" type="file" accept=".csv,.xlsx,.xls" data-faq-batch-upload>
              ` : ""}
              ${isFaqPage
                ? `
                  <details class="action-menu create-menu">
                    <summary class="btn primary">新增</summary>
                    <div class="action-menu-list">
                      <button class="action-menu-item" type="button" data-open-article-quick-add="faq">新增 FAQ</button>
                      <button class="action-menu-item" type="button" data-open-article-quick-add="category">新增 FAQ 類型</button>
                    </div>
                  </details>
                `
                : `
                  <details class="action-menu create-menu">
                    <summary class="btn primary">新增</summary>
                    <div class="action-menu-list">
                      <button class="action-menu-item" type="button" data-open-article-quick-add="article">新增文章</button>
                      ${fixedType ? "" : `<button class="action-menu-item" type="button" data-open-article-quick-add="category">新增文章類型</button>`}
                    </div>
                  </details>
                `}
            `
            : isProductPage
              ? `
                <details class="action-menu create-menu">
                  <summary class="btn primary">新增</summary>
                  <div class="action-menu-list">
                    <button class="action-menu-item" type="button" data-quick-add-data="${kind}" data-quick-add-type="${esc(filters.category || typeOptions[0])}">新增商品 / 服務資料</button>
                    <button class="action-menu-item" type="button" data-open-product-type-add>新增類型</button>
                  </div>
                </details>
              `
              : isLocationPage
                ? `<button class="btn primary" type="button" data-quick-add-data="${kind}" data-quick-add-type="${esc(typeOptions[0])}">新增據點</button>`
                : typeOptions.map((type) => `<button class="btn" type="button" data-quick-add-data="${kind}" data-quick-add-type="${esc(type)}">新增${esc(type)}</button>`).join("")}
        </div>
      </div>

      <div class="admin-table-wrap">
        <div class="table-toolbar">
          <div>
            <h3>${esc(title)}總表</h3>
            <p>共 ${visibleItems.length} 筆符合條件的資料，可檢視、編輯或刪除單筆項目。</p>
          </div>
        </div>
        <table class="admin-table responsive-table">
          <thead>
            <tr>${kind === "articles" || hasFixedType ? `<th>${isFaqPage ? "FAQ 類型" : "文章類型"}</th><th>名稱</th>` : isProductPage ? "<th>類型</th><th>名稱</th><th>分類</th>" : isLocationPage ? "<th>名稱</th><th>縣市 / 區域</th>" : "<th>名稱</th><th>分類</th>"}<th>狀態</th><th>${isLocationPage ? "地址" : "更新 / 備註"}</th><th>操作</th></tr>
          </thead>
          <tbody>
            ${visibleItems.length ? visibleItems.map((item) => `
              <tr>
                ${kind === "articles" || hasFixedType ? `
                  <td data-label="${isFaqPage ? "FAQ 類型" : "文章類型"}"><span class="status-pill">${esc(isFaqPage ? item.category : item.type)}</span></td>
                  <td data-label="名稱"><strong>${esc(item.title)}</strong></td>
                ` : isProductPage ? `
                  <td data-label="類型"><span class="status-pill">${esc(item.type)}</span></td>
                  <td data-label="名稱"><strong>${esc(item.title)}</strong></td>
                  <td data-label="分類">${esc(item.category)}</td>
                ` : isLocationPage ? `
                  <td data-label="名稱"><strong>${esc(item.title)}</strong></td>
                  <td data-label="縣市 / 區域">${esc(item.category)}</td>
                ` : `
                  <td data-label="名稱"><strong>${esc(item.title)}</strong><p class="hint">${esc(item.type)}</p></td>
                  <td data-label="${isLocationPage ? "縣市 / 區域" : "分類"}">${esc(item.category)}</td>
                `}
                <td data-label="狀態"><span class="status-pill">${esc(item.status)}</span></td>
                <td data-label="${isLocationPage ? "地址" : "更新 / 備註"}">${esc(item.updated)}</td>
                <td data-label="操作">
                  <div class="actions">
                    <button class="btn" type="button" data-edit-data="${kind}:${item.id}">編輯</button>
                    <button class="btn danger" type="button" data-delete-data="${kind}:${item.id}">刪除</button>
                  </div>
                </td>
              </tr>
            `).join("") : `<tr><td colspan="${isProductPage ? 6 : 5}"><p class="hint">沒有符合條件的資料。</p></td></tr>`}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

const sharedSeoFields = [
  {
    name: "搜尋標題",
    field: "seo_title",
    input: "可留空，自動用頁面標題加品牌名",
    output: "<title>、og:title、twitter:title、JSON-LD name/headline"
  },
  {
    name: "搜尋摘要",
    field: "seo_description",
    input: "可留空，自動用頁面摘要或內文前段",
    output: "meta description、og:description、twitter:description、JSON-LD description"
  },
  {
    name: "分享圖片",
    field: "share_image",
    input: "可留空，自動用封面圖或全站預設圖",
    output: "og:image、twitter:image、JSON-LD image"
  },
  {
    name: "網址代稱",
    field: "slug",
    input: "建議用英文 kebab-case，系統產生預設值",
    output: "頁面 URL、canonical、sitemap loc、breadcrumb URL"
  },
  {
    name: "搜尋引擎收錄",
    field: "indexable",
    input: "預設允許收錄；草稿、測試頁才改為不收錄",
    output: "robots meta、sitemap 是否列入"
  }
];

const blueprintPagePlans = [
  {
    id: "content",
    name: "一般內容頁",
    source: "手動撰寫",
    use: "品牌故事、公司介紹、理念說明、服務說明。",
    note: "用途不同但資料結構相同；差異用內容範本、提示語與預設區塊處理，不另外長欄位。",
    fields: [
      ["頁面標題", "title", "必填", "頁面主標題", "<h1>、預設搜尋標題、breadcrumb name"],
      ["頁面摘要", "summary", "選填", "一到兩句說明本頁重點", "頁面摘要區、預設搜尋摘要"],
      ["內容區塊", "content_blocks", "必填", "段落、圖片、重點、CTA 等可視內容", "頁面主內容、搜尋摘要可抽取來源"],
      ["封面圖片", "cover_image", "選填", "本頁代表圖", "頁面視覺、預設分享圖片"]
    ],
    jsonld: "WebPage + BreadcrumbList"
  },
  {
    id: "article",
    name: "文章列表頁",
    source: "內容資料",
    use: "最新消息、知識中心、活動公告與案例文章。",
    note: "頁面只設定列表入口；文章標題、摘要、封面與發布日期來自文章資料。",
    fields: [
      ["列表標題", "title", "必填", "例如最新消息、知識中心", "<h1>、預設搜尋標題"],
      ["列表說明", "description", "選填", "說明這個列表收錄哪些內容", "頁面介紹、預設搜尋摘要"],
      ["文章來源", "list_source", "必填", "全部文章、指定分類或指定標籤", "文章查詢條件、ItemList 來源"],
      ["每頁筆數", "items_per_page", "必填", "控制前台列表一次顯示幾筆", "分頁查詢、pagination"],
      ["列表代表圖", "cover_image", "選填", "列表頁分享時使用的代表圖", "預設分享圖片"]
    ],
    jsonld: "CollectionPage + ItemList + BreadcrumbList"
  },
  {
    id: "contact",
    name: "聯絡表單頁",
    source: "手動撰寫 + 表單紀錄",
    use: "聯絡我們、預約諮詢、合作洽詢、表單詢問。",
    note: "使用者只需要填聯絡資訊與表單內容；防垃圾、通知、追蹤事件由系統設定處理。",
    fields: [
      ["頁面標題", "title", "必填", "例如聯絡我們、預約諮詢", "<h1>、預設搜尋標題"],
      ["表單說明", "intro", "選填", "表單上方的說明文字", "頁面內容、預設搜尋摘要"],
      ["表單欄位", "form_fields", "必填", "姓名、電話、Email、需求內容等", "前台表單、送出資料格式"],
      ["通知信箱", "recipient_email", "必填", "表單送出後通知收件人", "後端寄信設定"],
      ["成功訊息", "success_message", "必填", "送出後顯示給訪客的文字", "前台成功狀態"],
      ["聯絡資訊", "contact_info", "選填", "電話、Email、LINE、地址、營業時間", "頁面顯示、ContactPage / LocalBusiness 可用資料"]
    ],
    jsonld: "ContactPage；有地址、電話、營業時間時加 Organization 或 LocalBusiness"
  },
  {
    id: "faq",
    name: "FAQ 頁",
    source: "FAQ / 內容資料",
    use: "常見問題、購買說明、服務問答、使用教學。",
    note: "FAQ 結構化資料只能輸出頁面上看得到的問答；不要讓使用者另外填看不見的 SEO 問答。",
    fields: [
      ["頁面標題", "title", "必填", "例如常見問題、購買說明", "<h1>、預設搜尋標題、FAQPage name"],
      ["頁面說明", "intro", "選填", "問答前的簡短說明", "頁面內容、預設搜尋摘要"],
      ["問題分類", "faq_categories", "選填", "購買、服務、付款等分類", "前台分類導覽、錨點"],
      ["問題", "question", "必填", "使用客戶真的會問的說法", "頁面內容、JSON-LD Question.name"],
      ["答案", "answer", "必填", "清楚回答問題，可含連結", "頁面內容、JSON-LD acceptedAnswer.text"]
    ],
    jsonld: "FAQPage + Question + Answer + BreadcrumbList"
  },
  {
    id: "product",
    name: "商品 / 服務列表頁",
    source: "商品 / 服務資料",
    use: "商品方案、服務項目、方案比較或服務入口。",
    note: "列表頁只控制集合呈現；單一商品或服務的名稱、摘要、圖片放在資料管理，避免每頁重複填。",
    fields: [
      ["列表標題", "title", "必填", "例如服務項目、方案比較", "<h1>、預設搜尋標題"],
      ["列表說明", "description", "選填", "服務總覽或挑選說明", "頁面介紹、預設搜尋摘要"],
      ["項目來源", "items", "必填", "商品、服務、方案或分類", "列表內容、JSON-LD ItemList"],
      ["項目名稱", "item_name", "資料欄位", "商品或服務名稱", "卡片標題、ItemList item name"],
      ["項目摘要", "item_summary", "資料欄位", "商品或服務簡短說明", "卡片摘要、ItemList item description"],
      ["項目圖片 / 連結", "item_image_url", "資料欄位", "卡片圖片與詳細頁入口", "卡片圖片、ItemList item image/url"],
      ["CTA", "cta", "選填", "按鈕文字與連結", "前台行動按鈕"]
    ],
    jsonld: "CollectionPage + ItemList；有價格庫存再升級 Product"
  },
  {
    id: "resource",
    name: "據點列表頁",
    source: "據點資料",
    use: "前台據點卡片、據點列表與地圖導引。",
    note: "列表頁只控制據點集合呈現；單一據點的地址、電話、營業時間與地圖連結放在據點管理，避免每頁重複填。",
    fields: [
      ["列表標題", "title", "必填", "例如服務據點、找水站", "<h1>、預設搜尋標題"],
      ["列表說明", "description", "選填", "說明據點服務範圍與查找方式", "頁面介紹、預設搜尋摘要"],
      ["縣市 / 區域", "location_area", "必填", "例如桃園市、新北市", "篩選器、地區標籤"],
      ["據點名稱", "item_name", "資料欄位", "前台卡片上的據點名稱", "卡片標題、ItemList item name"],
      ["地址標籤 / 地址", "item_address", "資料欄位", "例如案場地址、桃園市桃園區復興路96號", "頁面顯示、Place / LocalBusiness 可用資料"],
      ["Google / LINE 連結", "item_links", "資料欄位", "Google 導航與 LINE 詢問連結", "前台按鈕、ItemList item url"]
    ],
    jsonld: "CollectionPage + ItemList；據點可用 Place 或 LocalBusiness"
  }
];

const blueprintDataPlans = [
  {
    name: "內容資料",
    types: ["最新消息", "知識文章", "活動公告", "案例"],
    fields: ["標題", "文章類型", "狀態", "發布日期", "摘要", "封面圖片", "內文編輯器"],
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
    name: "據點資料",
    types: ["據點"],
    fields: ["排序編號", "據點圖片", "縣市 / 區域", "據點名稱", "地址標籤", "地址", "Google 導航連結", "LINE 詢問連結", "狀態"],
    usedBy: "據點列表頁、據點卡片、地圖區塊"
  }
];

function renderBlueprintPages() {
  return `
    ${managerHeader("公版規劃版｜頁面類型欄位設計", "頁型決定資料結構；品牌故事、公司介紹、理念說明這類用途差異，改用內容範本與提示語處理，不另外做欄位。SEO 技術標籤由系統從這些欄位自動輸出。", [])}
    <section class="blueprint-intro-card">
      <div>
        <h3>使用者只填看得懂的內容</h3>
        <p>後台欄位以「頁面標題、摘要、內容、圖片、資料來源」為主；OG、Twitter、JSON-LD、canonical、sitemap 不讓使用者手填。</p>
      </div>
      <div>
        <h3>SEO 集中管理</h3>
        <p>頁型只定義前台可見內容；Meta、分享圖、Canonical、Robots 統一回到「網站設定 > SEO 管理」。</p>
      </div>
    </section>
    <div class="blueprint-page-stack">
      ${blueprintPagePlans.map((plan) => `
        <article class="blueprint-card page-type-blueprint">
          <div class="blueprint-card-head">
            <div>
              <h3>${esc(plan.name)}</h3>
              <p>${esc(plan.use)}</p>
            </div>
            <span class="status-pill">${esc(plan.source)}</span>
          </div>
          <div class="blueprint-note">${esc(plan.note)}</div>
          <div class="blueprint-table-wrap">
            <table class="blueprint-field-table">
              <thead><tr><th>使用者看到的欄位</th><th>程式欄位</th><th>填寫</th><th>說明</th><th>程式輸出位置</th></tr></thead>
              <tbody>
                ${plan.fields.map(([label, field, required, help, output]) => `
                  <tr>
                    <td><strong>${esc(label)}</strong></td>
                    <td><code>${esc(field)}</code></td>
                    <td>${esc(required)}</td>
                    <td>${esc(help)}</td>
                    <td>${esc(output)}</td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
          <div class="blueprint-note">SEO 技術輸出由集中管理區產生，不在頁型內容欄位中重複設定。</div>
          <p class="blueprint-jsonld">建議結構化資料：${esc(plan.jsonld)}</p>
        </article>
      `).join("")}
    </div>
  `;
}

function getBlueprintPagePlan(templateId) {
  return blueprintPagePlans.find((plan) => plan.id === templateId) || blueprintPagePlans[0];
}

function renderCompactPageTypePlan(templateId) {
  const plan = getBlueprintPagePlan(templateId);
  if (!plan) return "";
  const keyFields = plan.fields.slice(0, 6);
  return `
    <section class="selected-page-type-guide">
      <div class="section-head compact">
        <div>
          <h3>${esc(plan.name)}需要填什麼？</h3>
          <p>${esc(plan.note)}</p>
        </div>
        <span class="pill green">${esc(plan.source)}</span>
      </div>
      <div class="page-type-guide-grid">
        <div>
          <strong>基本欄位</strong>
          <div class="guide-field-list">
            ${keyFields.map(([label, field, required, help]) => `
              <div class="guide-field-item">
                <span>${esc(label)}</span>
                <small>${esc(required)}｜${esc(help)}</small>
                <code>${esc(field)}</code>
              </div>
            `).join("")}
          </div>
        </div>
        <div>
          <strong>搜尋與分享欄位</strong>
          <p class="field-help">一般使用者可全部留空，系統會從標題、摘要、封面圖自動產生；懂 SEO 的人再覆寫。</p>
          <div class="guide-field-list seo">
            ${sharedSeoFields.slice(0, 4).map((field) => `
              <div class="guide-field-item">
                <span>${esc(field.name)}</span>
                <small>${esc(field.input)}</small>
                <code>${esc(field.output)}</code>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
      <p class="blueprint-jsonld">程式自動產生：canonical、robots、OG / Twitter Card、sitemap、${esc(plan.jsonld)}。</p>
    </section>
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
  return ["article", "faq", "product", "resource"].includes(templateId) ? "data" : "manual";
}

function recommendedPageDataSource(templateId) {
  const map = {
    article: "articles",
    faq: "faq",
    product: "products",
    resource: "resources"
  };
  return map[templateId] || "articles";
}

function getPageDataSource(sourceId) {
  return pageDataSources.find((item) => item.id === sourceId) || pageDataSources[0];
}

function defaultPageDataCategory(sourceId) {
  return getPageDataSource(sourceId).categories[0] || "全部";
}

function defaultPageDataFilter(sourceId) {
  return `分類=${defaultPageDataCategory(sourceId)}；狀態=已發布；排序=最新優先；筆數=6`;
}

function hydratePageDataDefaults(page) {
  if (!page || page.contentSource !== "data") return;
  const sourceId = page.dataSource || recommendedPageDataSource(page.template);
  const source = getPageDataSource(sourceId);
  page.dataSource = source.id;
  page.dataCategory = page.dataCategory || defaultPageDataCategory(source.id);
  page.dataSort = page.dataSort || "最新優先";
  page.dataLimit = page.dataLimit || "6";
  page.dataFilter = `分類=${page.dataCategory || "全部"}；狀態=已發布；排序=${page.dataSort || "最新優先"}；筆數=${page.dataLimit || "6"}`;
  page.dataFormat = "collection";
  page.dataMapping = "";
}

function renderPageTemplatePreview(template) {
  const kind = template.id;
  if (kind === "article") {
    return `<div class="page-template-preview article-preview"><span></span><strong></strong><i></i><i></i><i></i></div>`;
  }
  if (kind === "contact") {
    return `<div class="page-template-preview contact-preview"><span></span><strong></strong><i></i></div>`;
  }
  if (kind === "faq") {
    return `<div class="page-template-preview faq-preview"><span></span><i></i><i></i><i></i></div>`;
  }
  if (kind === "product") {
    return `<div class="page-template-preview product-preview"><span></span><i></i><i></i><i></i></div>`;
  }
  if (kind === "resource") {
    return `<div class="page-template-preview resource-preview"><span></span><i></i><i></i><i></i></div>`;
  }
  return `<div class="page-template-preview content-preview"><span></span><strong></strong><i></i><i></i></div>`;
}

function getPageLayout(page) {
  const template = getPageTemplate(page.template);
  return template.layouts.find((item) => item.id === page.layout) || template.layouts[0];
}

function pageLayoutPreviewParams(page) {
  const template = getPageTemplate(page.template);
  const source = page.contentSource === "data" ? getPageDataSource(page.dataSource || recommendedPageDataSource(page.template)) : null;
  const palette = getActiveSitePalette();
  const bodyText = page.content?.field2Html ? htmlToPlainText(page.content.field2Html) : page.content?.field2 || "主要段落內容";
  return new URLSearchParams({
    title: page.content?.field0 || page.name,
    intro: page.content?.field1 || template.description,
    body: bodyText,
    note1: page.content?.field3 || "",
    note2: page.content?.field4 || "",
    phone: page.content?.field2 || state.siteInfo.phone || "",
    email: page.content?.field3 || state.siteInfo.email || "",
    line: page.content?.field4 || state.socialLinks.find((link) => link.platform === "line")?.url || "",
    category: page.dataCategory || "全部",
    source: source?.name || template.name,
    limit: page.dataLimit || "6",
    primary: palette.primary,
    accent: palette.accent,
    bg: palette.bg,
    surface: palette.surface,
    text: palette.text,
    muted: palette.muted
  });
}

function htmlToPlainText(html) {
  const div = document.createElement("div");
  div.innerHTML = html || "";
  return div.textContent || div.innerText || "";
}

function choosePageTemplate(templateId) {
  state.pendingPageTemplate = templateId;
  render();
}

function addPageFromTemplate(templateId, contentSource) {
  const template = getPageTemplate(templateId);
  const source = pageContentSources.find((item) => item.id === contentSource) || pageContentSources[0];
  const dataSourceId = recommendedPageDataSource(template.id);
  state.customPageCount += 1;
  const page = createPage({
    id: `custom-page-${Date.now()}`,
    name: `${template.defaultName} ${state.customPageCount}`,
    template: template.id,
    contentSource: source.id,
    dataSource: source.id === "data" ? dataSourceId : "",
    dataFormat: "collection",
    dataCategory: source.id === "data" ? defaultPageDataCategory(dataSourceId) : "",
    dataSort: source.id === "data" ? "最新優先" : "",
    dataLimit: source.id === "data" ? "6" : "",
    dataFilter: source.id === "data" ? defaultPageDataFilter(dataSourceId) : "",
    dataMapping: "",
    status: "草稿",
    visible: "尚未顯示"
  });
  hydratePageDataDefaults(page);
  state.pages.push(page);
  state.pageSeoSettings.push(createSeoSetting({ id: page.id, name: page.name }));
  persistSeoSettings();
  state.activePageId = page.id;
  state.activePreviewPageId = page.id;
  state.pageMode = "edit";
  state.pageSavedNotice = "";
  state.newPageDraftId = page.id;
  state.isChoosingPageTemplate = false;
  state.pendingPageTemplate = "";
  render();
}

function deletePage(pageId) {
  state.pages.forEach((page) => {
    if (page.parentId === pageId) page.parentId = "";
  });
  state.pages = state.pages.filter((page) => page.id !== pageId);
  state.pageSeoSettings = state.pageSeoSettings.filter((setting) => setting.pageId !== pageId);
  persistSeoSettings();
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
  if (page && state.newPageDraftId === page.id) state.newPageDraftId = "";
  render();
}

function cancelPageEdit() {
  if (state.newPageDraftId && state.activePageId === state.newPageDraftId) {
    const draftId = state.newPageDraftId;
    state.pages = state.pages.filter((page) => page.id !== draftId);
    state.pageSeoSettings = state.pageSeoSettings.filter((setting) => setting.pageId !== draftId);
    persistSeoSettings();
    state.activePageId = state.pages[0]?.id || "";
    state.activePreviewPageId = "";
    state.newPageDraftId = "";
  }
  state.pageMode = "list";
  state.isChoosingPageTemplate = false;
  state.pendingPageTemplate = "";
  state.pageSavedNotice = "";
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
  const isAddingPageFlow = state.isChoosingPageTemplate;
  const selectedPageTemplateId = state.pendingPageTemplate || pageTemplates[0].id;
  const templateChooser = `
    <section class="settings-card template-panel">
      <div class="flow-step-head">
        <div>
          <h2>1. 選擇頁面類型</h2>
          <p>先決定頁面用途；內容來源可在建立後的頁面基本設定中調整。</p>
        </div>
        <button class="btn" type="button" data-cancel-page-template>取消新增</button>
      </div>
      <div class="template-grid">
        ${pageTemplates.map((template) => `
          <button class="template-card ${selectedPageTemplateId === template.id ? "is-selected" : ""}" type="button" data-page-template="${template.id}">
            ${renderPageTemplatePreview(template)}
            <strong>${esc(template.name)}</strong>
            <p>${esc(template.description)}</p>
            <span class="pill">${template.fields.length} 個內容欄位</span>
            <span class="pill ${recommendedPageSource(template.id) === "data" ? "" : "green"}">${recommendedPageSource(template.id) === "data" ? "建議接背景資料" : "建議手動撰寫"}</span>
          </button>
        `).join("")}
      </div>
      ${renderCompactPageTypePlan(selectedPageTemplateId)}
      <div class="page-template-confirm">
        <span class="hint">先看清楚欄位，再建立頁面；建立後仍可切換版型與內容來源。</span>
        <button class="btn primary" type="button" data-confirm-page-template>下一步：建立頁面</button>
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

  const editPanel = activePage ? renderPageUnifiedEditor(activePage, activeTemplate, parentOptions) : `<section class="settings-card">尚未建立頁面，請先新增頁面。</section>`;

  return `
    ${managerHeader("前台頁面管理", "基於目前整站官網模板，管理首頁以外的頁面內容、選單階層、導覽顯示與 Footer 摘要。", [])}
    ${state.pageMode === "edit" ? `
      <div class="page-actions">
        <span class="hint">正在編輯單一頁面；完成後可返回列表調整排序或階層。</span>
      </div>
      ${editPanel}
    ` : `
      ${isAddingPageFlow ? `
        <div class="page-add-flow">
          ${templateChooser}
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

function renderPageUnifiedEditor(page, template, parentOptions) {
  const isPreview = state.pageLayoutTab === "preview";
  return `
    <section class="page-edit-panel">
      <div class="section-head page-edit-head">
        <div>
          <h3>編輯頁面內容</h3>
          <p>目前編輯：${esc(page.name)}｜${esc(template.name)}</p>
        </div>
        <div class="actions">
          ${state.pageSavedNotice ? `<span class="pill green">${esc(state.pageSavedNotice)}</span>` : ""}
          <button class="btn primary" type="button" data-save-page>儲存頁面</button>
          <button class="btn" type="button" data-back-page-list>${state.newPageDraftId === page.id ? "取消新增返回列表" : "返回頁面列表"}</button>
        </div>
      </div>
      <div class="settings-card page-unified-card ${isPreview ? "is-preview" : ""}">
        <div class="section-head page-unified-head">
          <div>
            <h3>${isPreview ? "版面預覽" : "頁面設定"}</h3>
            <p>${isPreview ? "預覽目前內容套用在實際 HTML 版型中的樣子；可直接切換版型比較。" : "設定頁面模板、導覽、內容來源、頁面內容與搜尋分享資訊。"}</p>
          </div>
          <div class="tabs" role="tablist" aria-label="頁面編輯模式">
            <button class="tab ${!isPreview ? "is-active" : ""}" type="button" data-page-layout-tab="settings">頁面設定</button>
            <button class="tab ${isPreview ? "is-active" : ""}" type="button" data-page-layout-tab="preview">版面預覽</button>
          </div>
        </div>
        ${isPreview ? renderPagePreviewWorkspace(page, template) : renderPageSettingsWorkspace(page, template, parentOptions)}
      </div>
    </section>
  `;
}

function renderPageSettingsWorkspace(page, template, parentOptions) {
  return `
    <section class="page-subsection">
      <div class="section-head compact">
        <div>
          <h3>頁面模板與版型</h3>
          <p>先決定這個前台頁面的用途，再選擇實際套用的 HTML 版型。</p>
        </div>
      </div>
      <div class="field-grid template-layout-fields">
        <div class="field">
          <label>頁面模板</label>
          <select data-page-field="template">
            ${pageTemplates.map((item) => `<option value="${item.id}" ${page.template === item.id ? "selected" : ""}>${item.name}｜${item.description}</option>`).join("")}
          </select>
        </div>
        <div class="field">
          <label>版型</label>
          <select data-page-field="layout">
            ${template.layouts.map((layout) => `<option value="${layout.id}" ${page.layout === layout.id ? "selected" : ""}>方案 ${layout.id}：${layout.name}｜${layout.description}</option>`).join("")}
          </select>
        </div>
      </div>
    </section>
    <section class="page-subsection">
      <div class="section-head compact">
        <div>
          <h3>頁面基本設定</h3>
          <p>${esc(template.description)}</p>
        </div>
      </div>
      <div class="field-grid">
        <div class="field">
          <label>頁面名稱</label>
          <div class="field-help">顯示在後台與前台選單中的頁面名稱。</div>
          <input type="text" value="${esc(page.name)}" data-page-field="name">
        </div>
        <div class="field">
          <label>頁面狀態</label>
          <div class="field-help">控制頁面是否對外發布。</div>
          <select data-page-field="status">
            ${["已發布", "草稿", "停用"].map((status) => `<option ${page.status === status ? "selected" : ""}>${status}</option>`).join("")}
          </select>
        </div>
        <div class="field">
          <label>顯示位置</label>
          <div class="field-help">控制頁面出現在主選單、Footer 或 CTA。</div>
          <select data-page-field="visible">
            ${["主選單 / Footer", "主選單", "Footer", "CTA", "尚未顯示"].map((visible) => `<option ${page.visible === visible ? "selected" : ""}>${visible}</option>`).join("")}
          </select>
        </div>
        <div class="field">
          <label>內容來源</label>
          <div class="field-help">決定這個頁面內容是手動撰寫，或從背景資料帶入。</div>
          <select data-page-field="contentSource">
            ${pageContentSources.map((source) => `<option value="${source.id}" ${page.contentSource === source.id ? "selected" : ""}>${source.name}</option>`).join("")}
          </select>
        </div>
        <div class="field full">
          <label>上層頁面</label>
          <div class="field-help">最多兩階：不選就是主頁；選擇一個主頁後，這頁會成為它的子頁面。</div>
          <select data-page-field="parentId">
            <option value="" ${page.parentId ? "" : "selected"}>無，作為主頁</option>
            ${parentOptions.map((item) => `<option value="${item.id}" ${page.parentId === item.id ? "selected" : ""}>${item.name}</option>`).join("")}
          </select>
        </div>
      </div>
    </section>
    ${renderPageDataSettings(page)}
    ${renderPageContentEditor(page, template)}
  `;
}

function renderPagePreviewWorkspace(page, template) {
  return `
    <section class="page-subsection page-preview-toolbar">
      <div class="field compact-select">
        <label>版型</label>
        <select data-page-field="layout">
          ${template.layouts.map((layout) => `<option value="${layout.id}" ${page.layout === layout.id ? "selected" : ""}>方案 ${layout.id}：${layout.name}｜${layout.description}</option>`).join("")}
        </select>
      </div>
    </section>
    ${renderPageLayoutPreview(page)}
  `;
}

function renderPageDataSettings(page) {
  if (page.contentSource !== "data") return "";
  hydratePageDataDefaults(page);
  const selectedSource = getPageDataSource(page.dataSource);
  return `
    <section class="page-subsection">
      <div class="section-head compact">
        <div>
          <h3>背景資料設定</h3>
          <p>選擇這個頁面要呈現的系統資料，並決定分類篩選或全部顯示。</p>
        </div>
      </div>
      <div class="field-grid">
        <div class="field">
          <label>資料類型</label>
          <div class="field-help">使用目前系統中已建立的內容，不提供檔案上傳建立頁面。</div>
          <select data-page-field="dataSource">
            ${pageDataSources.map((source) => `<option value="${source.id}" ${page.dataSource === source.id ? "selected" : ""}>${source.name}｜${source.description}</option>`).join("")}
          </select>
        </div>
        <div class="field">
          <label>分類篩選</label>
          <div class="field-help">選擇「全部」會顯示此資料類型下所有已發布資料。</div>
          <select data-page-field="dataCategory">
            ${selectedSource.categories.map((category) => `<option value="${category}" ${page.dataCategory === category ? "selected" : ""}>${category}</option>`).join("")}
          </select>
        </div>
        <div class="field">
          <label>排序方式</label>
          <div class="field-help">列表型頁面預設顯示已發布資料。</div>
          <select data-page-field="dataSort">
            ${["最新優先", "排序值小到大", "熱門優先", "手動排序"].map((sort) => `<option value="${sort}" ${page.dataSort === sort ? "selected" : ""}>${sort}</option>`).join("")}
          </select>
        </div>
        <div class="field">
          <label>顯示筆數</label>
          <div class="field-help">可控制列表一次呈現的資料量。</div>
          <select data-page-field="dataLimit">
            ${["6", "9", "12", "全部"].map((limit) => `<option value="${limit}" ${page.dataLimit === limit ? "selected" : ""}>${limit}</option>`).join("")}
          </select>
        </div>
      </div>
      <div class="data-source-summary">
        <strong>目前設定</strong>
        <span>${esc(selectedSource.manager)}｜分類：${esc(page.dataCategory || "全部")}｜排序：${esc(page.dataSort || "最新優先")}｜筆數：${esc(page.dataLimit || "6")}</span>
      </div>
    </section>
  `;
}

function renderPageContentEditor(page, template) {
  if (page.contentSource === "data") {
    return `
      <section class="page-subsection">
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
      </section>
    `;
  }

  const mainContent = page.content?.field2Html || esc(page.content?.field2 || "");
  return `
    <section class="page-subsection">
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
          ${page.template === "contact" ? `
            <div class="field-grid">
              ${template.fields.slice(2).map((field, offset) => {
                const index = offset + 2;
                return `
                  <div class="field">
                    <label>${esc(field)}</label>
                    <input type="text" value="${esc(page.content?.[`field${index}`] || "")}" data-page-content="field${index}">
                  </div>
                `;
              }).join("")}
            </div>
          ` : `
            <div class="field full rich-editor-field">
              <label>主要內容</label>
              <div class="rich-editor page-rich-editor" data-rich-editor="page-${esc(page.id)}">
                <div class="rich-toolbar" aria-label="頁面內容編輯工具列">
                  <button class="btn compact" type="button" data-rich-command="bold" title="粗體"><strong>B</strong></button>
                  <button class="btn compact" type="button" data-rich-command="foreColor" data-rich-value="#0e6a8c" title="品牌色文字">品牌色</button>
                  <label class="btn compact color-chip" title="自訂文字顏色">
                    色彩
                    <input type="color" value="#0e6a8c" data-rich-color>
                  </label>
                  <button class="btn compact" type="button" data-rich-insert="link" title="插入連結">連結</button>
                  <button class="btn compact" type="button" data-rich-upload-trigger="image" title="上傳圖片">圖片</button>
                  <button class="btn compact" type="button" data-rich-upload-trigger="video" title="上傳影片">影片</button>
                  <input class="visually-hidden" type="file" accept="image/*" data-rich-upload="image">
                  <input class="visually-hidden" type="file" accept="video/*" data-rich-upload="video">
                </div>
                <div class="rich-body page-rich-body" contenteditable="true" data-placeholder="輸入頁面主要內容，可加入格式、圖片、影片或連結。" data-rich-body data-page-rich-content="field2">${mainContent}</div>
              </div>
              <div class="field-help">主要內容會作為此頁的正式內文；不再另外填補充重點欄位。</div>
            </div>
          `}
        </section>
      </div>
    </section>
  `;
}

function renderPageLayoutPreview(page) {
  const template = getPageTemplate(page.template);
  const layout = getPageLayout(page);
  if (layout.entry) {
    const params = pageLayoutPreviewParams(page);
    return `
      <div class="page-layout-preview-card">
        <div class="section-head compact">
          <div>
            <h3>版面預覽</h3>
            <p>目前套用：${esc(template.name)}｜方案 ${esc(layout.id)}：${esc(layout.name)}</p>
          </div>
          <span class="pill">HTML 版型</span>
        </div>
        <div class="page-real-template-preview">
          <iframe class="page-real-preview-frame" scrolling="no" title="${esc(template.name)}方案 ${esc(layout.id)} 預覽" src="${esc(layout.entry)}?${esc(params.toString())}"></iframe>
        </div>
      </div>
    `;
  }
  const title = esc(page.content?.field0 || page.name);
  const intro = esc(page.content?.field1 || template.description);
  return `
    <div class="page-layout-preview-card">
      <div class="mini-preview">
        <div class="mini-split">
          <div class="mini-copy"><strong>${title}</strong><span>${intro}</span><small>${esc(page.content?.field2 || template.fields[2] || "主要內容")}</small></div>
          <div class="mini-image">${esc(template.name)}</div>
        </div>
        <p>方案 ${esc(page.layout)}：${esc(layout.description || "")}</p>
      </div>
    </div>
  `;
}

function updatePageField(page, input) {
  if (!page) return;
  state.pageSavedNotice = "";
  const previousName = page.name;
  page[input.dataset.pageField] = input.value;
  if (input.dataset.pageField === "name") {
    syncSeoDefaultsFromPage(page, previousName);
    persistSeoSettings();
  }
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
    syncSeoDefaultsFromPage(page, previousName);
    persistSeoSettings();
    if (page.contentSource === "data") {
      page.dataSource = recommendedPageDataSource(page.template);
      page.dataCategory = "";
      page.dataSort = "";
      page.dataLimit = "";
      hydratePageDataDefaults(page);
    }
  }
  if (input.dataset.pageField === "contentSource" && page.contentSource === "data") {
    page.dataSource = page.dataSource || recommendedPageDataSource(page.template);
    hydratePageDataDefaults(page);
  }
  if (input.dataset.pageField === "dataSource") {
    page.dataCategory = defaultPageDataCategory(page.dataSource);
    hydratePageDataDefaults(page);
  }
  if (["dataCategory", "dataSort", "dataLimit"].includes(input.dataset.pageField)) {
    hydratePageDataDefaults(page);
  }
  render();
}

function updatePageContent(page, input) {
  state.pageSavedNotice = "";
  page.content = page.content || {};
  page.content[input.dataset.pageContent] = input.value;
  renderPreview();
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
    state.pendingPageTemplate = "";
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

function renderPasswordResetModal() {
  const user = state.adminUsers.find((item) => item.id === state.activePasswordResetUserId);
  if (!user) return "";
  return `
    <div class="modal-backdrop" role="presentation" data-close-password-reset>
      <section class="quick-modal" role="dialog" aria-modal="true" aria-labelledby="passwordResetTitle" data-modal-panel>
        <div class="quick-modal-head">
          <div>
            <h3 id="passwordResetTitle">重置密碼</h3>
            <p>最高管理者可替其他後台使用者設定新密碼。</p>
          </div>
        </div>
        <div class="quick-modal-body">
          <div class="reset-user-summary">
            <strong>${esc(user.name)}</strong>
            <span>${esc(user.email)}｜${esc(user.role)}</span>
          </div>
          <div class="field">
            <label>新密碼</label>
            <input type="password" value="${esc(state.passwordResetDraft.password)}" placeholder="請輸入新密碼" data-password-reset-field="password">
          </div>
          <div class="field">
            <label>確認新密碼</label>
            <input type="password" value="${esc(state.passwordResetDraft.confirm)}" placeholder="再次輸入新密碼" data-password-reset-field="confirm">
          </div>
          <p class="hint">Demo 僅記錄重置狀態；正式版應寄送通知並要求使用者下次登入更換密碼。</p>
        </div>
        <div class="quick-modal-actions">
          <button class="btn" type="button" data-close-password-reset>取消</button>
          <button class="btn primary" type="button" data-confirm-password-reset>確認重置</button>
        </div>
      </section>
    </div>
  `;
}

function renderSuperAdminTransferModal() {
  const current = state.adminUsers.find((item) => item.id === state.activeSuperAdminTransferUserId);
  if (!current) return "";
  const candidates = state.adminUsers.filter((user) => user.id !== current.id && !isSuperAdminUser(user) && user.status === "啟用");
  const selectedTarget = state.superAdminTransferTargetId || candidates[0]?.id || "";
  return `
    <div class="modal-backdrop" role="presentation" data-close-super-admin-transfer>
      <section class="quick-modal" role="dialog" aria-modal="true" aria-labelledby="superAdminTransferTitle" data-modal-panel>
        <div class="quick-modal-head">
          <div>
            <h3 id="superAdminTransferTitle">轉移最高權限</h3>
            <p>最高管理者不能直接刪除；請先把最高權限轉移給另一位管理員。</p>
          </div>
        </div>
        <div class="quick-modal-body">
          <div class="reset-user-summary">
            <strong>目前最高管理者：${esc(current.name)}</strong>
            <span>${esc(current.email)}</span>
          </div>
          ${candidates.length ? `
            <div class="field">
              <label>新的最高管理者</label>
              <select data-super-admin-transfer-target>
                ${candidates.map((user) => `<option value="${user.id}" ${selectedTarget === user.id ? "selected" : ""}>${esc(user.name)}｜${esc(user.email)}</option>`).join("")}
              </select>
            </div>
            <p class="hint">轉移後，${esc(current.name)} 會改為一般管理角色，之後就可以刪除。</p>
          ` : `
            <div class="empty-state compact">
              <strong>目前沒有可接手的啟用帳號</strong>
              <p>請先新增或啟用另一位後台帳號，再回來轉移最高權限。</p>
            </div>
          `}
        </div>
        <div class="quick-modal-actions">
          <button class="btn" type="button" data-close-super-admin-transfer>取消</button>
          <button class="btn primary" type="button" data-confirm-super-admin-transfer ${candidates.length ? "" : "disabled"}>確認轉移</button>
        </div>
      </section>
    </div>
  `;
}

function getAdminRoleOptions() {
  return state.adminRoles.map((role) => role.name);
}

function getAssignableAdminRoleOptions(user) {
  return state.adminRoles
    .filter((role) => !role.isSuperAdmin || user?.role === role.name)
    .map((role) => role.name);
}

function findAdminRoleByName(name) {
  return state.adminRoles.find((role) => role.name === name);
}

function getSuperAdminRole() {
  return state.adminRoles.find((role) => role.isSuperAdmin) || state.adminRoles[0];
}

function isSuperAdminUser(user) {
  return Boolean(user && findAdminRoleByName(user.role)?.isSuperAdmin);
}

function getFallbackAdminRoleName() {
  return state.adminRoles.find((role) => !role.isSuperAdmin && role.permissions.includes("adminUsers"))?.name ||
    state.adminRoles.find((role) => !role.isSuperAdmin)?.name ||
    getSuperAdminRole()?.name ||
    "";
}

function getRolePermissionSummary(role) {
  if (!role) return "角色不存在";
  if (role.isSuperAdmin) return "全部功能";
  const count = role.permissions.length;
  return `${count} / ${allAdminPermissionIds.length} 個功能`;
}

function renderRolePermissionTree(role) {
  const rolePermissions = new Set(role.permissions);
  const disabled = role.isSuperAdmin ? "disabled" : "";
  return `
    <div class="permission-tree">
      ${adminPermissionTree.map((group) => {
        const children = group.children;
        const selectedCount = children.filter((item) => rolePermissions.has(item.id)).length;
        const groupChecked = selectedCount === children.length;
        return `
          <details class="permission-group" open>
            <summary>
              <label class="permission-check">
                <input type="checkbox" data-role-permission-group="${group.id}" ${groupChecked ? "checked" : ""} ${disabled}>
                <span>${esc(group.name)}</span>
              </label>
              <small>${selectedCount}/${children.length}</small>
            </summary>
            <div class="permission-children">
              ${children.map((item) => `
                <label class="permission-check">
                  <input type="checkbox" data-role-permission="${item.id}" ${rolePermissions.has(item.id) ? "checked" : ""} ${disabled}>
                  <span>${esc(item.name)}</span>
                </label>
              `).join("")}
            </div>
          </details>
        `;
      }).join("")}
    </div>
  `;
}

function renderAdminRoles() {
  const editor = state.activeAdminRoleEditor;
  if (editor) {
    const role = state.adminRoles.find((item) => item.id === editor.id);
    if (!role) {
      state.activeAdminRoleEditor = null;
      return renderAdminRoles();
    }
    return `
      ${managerHeader("角色權限管理", "最高管理者可建立與編輯角色，再將角色賦予後台帳號。", [])}
      <section class="settings-card">
        <div class="section-title">
          <div>
            <span class="save-pill ${editor.isDirty ? "unsaved" : ""}">${editor.isDirty ? "尚未儲存" : "已儲存"}</span>
            <h3>${esc(editor.isNew ? "新增角色" : `編輯角色｜${role.name}`)}</h3>
            <p>以功能頁清單展開權限樹，勾選後套用到使用此角色的帳號。</p>
          </div>
          <div class="actions">
            <button class="btn primary" type="button" data-save-admin-role>儲存角色</button>
            <button class="btn" type="button" data-back-admin-roles>返回列表</button>
          </div>
        </div>
        <div class="field-grid">
          <div class="field">
            <label>角色名稱</label>
            <input type="text" value="${esc(role.name)}" data-admin-role-field="${role.id}:name" ${role.isSuperAdmin ? "disabled" : ""}>
          </div>
          <div class="field">
            <label>權限範圍</label>
            <div class="readonly-field">${esc(getRolePermissionSummary(role))}</div>
          </div>
          <div class="field full">
            <label>角色說明</label>
            <textarea data-admin-role-field="${role.id}:description">${esc(role.description)}</textarea>
          </div>
        </div>
        ${role.isSuperAdmin ? `<p class="hint">最高管理者固定擁有全部權限，避免系統失去角色與帳號管理入口。</p>` : ""}
        ${renderRolePermissionTree(role)}
      </section>
    `;
  }

  return `
    ${managerHeader("角色權限管理", "用角色集中管理權限，再於帳號管理中指定每個使用者的角色。", [])}
    <section class="cms-workbench">
      <div class="list-controls">
        <div class="list-control-fields">
          <div class="info-box">
            <strong>權限來源調整</strong>
            <p>帳號不再直接設定單一權限；帳號會繼承所屬角色勾選的功能頁權限。</p>
          </div>
        </div>
        <div class="list-control-actions">
          <button class="btn primary" type="button" data-add-admin-role>新增角色</button>
        </div>
      </div>
      <table class="admin-table">
        <thead><tr><th>角色</th><th>權限範圍</th><th>使用帳號</th><th>最後更新</th><th>操作</th></tr></thead>
        <tbody>
          ${state.adminRoles.map((role) => {
            const usageCount = state.adminUsers.filter((user) => user.role === role.name).length;
            return `
              <tr>
                <td><strong>${esc(role.name)}</strong><p class="hint">${esc(role.description || "未填寫說明")}</p></td>
                <td>${esc(getRolePermissionSummary(role))}</td>
                <td>${usageCount} 位</td>
                <td>${esc(role.updated || "尚未更新")}</td>
                <td>
                  <div class="actions">
                    <button class="btn" type="button" data-edit-admin-role="${role.id}">編輯</button>
                    ${role.isSuperAdmin || usageCount
                      ? ""
                      : `<button class="btn danger" type="button" data-delete-admin-role="${role.id}">刪除</button>`}
                  </div>
                </td>
              </tr>
            `;
          }).join("")}
        </tbody>
      </table>
    </section>
  `;
}

function renderAdminUsers() {
  const adminRoleOptions = getAdminRoleOptions();
  const editor = state.activeAdminUserEditor;
  if (editor) {
    const user = state.adminUsers.find((item) => item.id === editor.id);
    if (!user) {
      state.activeAdminUserEditor = null;
      return renderAdminUsers();
    }
    const assignableRoleOptions = getAssignableAdminRoleOptions(user);
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
              ${assignableRoleOptions.includes(user.role) ? "" : `<option value="${esc(user.role)}" selected>${esc(user.role)}（角色不存在）</option>`}
              ${assignableRoleOptions.map((role) => `<option value="${role}" ${user.role === role ? "selected" : ""}>${role}</option>`).join("")}
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
      ${renderPasswordResetModal()}
      ${renderSuperAdminTransferModal()}
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
              ${adminRoleOptions.map((role) => `<option value="${role}" ${filters.role === role ? "selected" : ""}>${role}</option>`).join("")}
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
              <td><strong>${esc(user.role)}</strong><p class="hint">${esc(getRolePermissionSummary(findAdminRoleByName(user.role)))}</p></td>
              <td><span class="status-pill">${esc(user.status)}</span></td>
              <td>${esc(user.lastLogin)}</td>
              <td>${esc(user.note || "未填寫")}</td>
              <td>
                <div class="actions">
                  <button class="btn" type="button" data-edit-admin-user="${user.id}">編輯</button>
                  ${isSuperAdminUser(user) ? "" : `<button class="btn" type="button" data-reset-password="${user.id}">重置密碼</button>`}
                  ${isSuperAdminUser(user)
                    ? `<button class="btn" type="button" data-transfer-super-admin="${user.id}">轉移最高權限</button>`
                    : `<button class="btn danger" type="button" data-delete-admin-user="${user.id}">刪除</button>`}
                </div>
              </td>
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

  const isHomeEditing = isHome && state.homeMode === "edit";
  document.querySelector(".admin-layout").classList.toggle("is-home-editing", isHomeEditing);
  document.querySelector(".module-sidebar").classList.toggle("hidden", !isHome || isHomeEditing);
  document.querySelector(".settings-panel").classList.toggle("hidden", !isHome);
  els.managerPanel.classList.toggle("hidden", isHome);
  els.saveBtn.classList.add("hidden");
  els.backHomeOverviewBtn.classList.add("hidden");
  if (isHome) return;

  const managerPages = {
    pages: renderPageManager(),
    adminRoles: renderAdminRoles(),
    adminUsers: renderAdminUsers(),
    blueprintArticles: renderBlueprintCollection("articles"),
    blueprintFaq: renderBlueprintCollection("articles", "FAQ"),
    blueprintProducts: renderBlueprintCollection("products"),
    blueprintResources: renderBlueprintCollection("resources"),
    contactRecords: renderOpsManager("contactRecords"),
    supportMessages: renderOpsManager("supportMessages"),
    siteBasicInfo: renderSiteBasicInfoManager(),
    seo: renderBannerMetaManager(),
    tracking: renderTrackingSettingsManager(),
    brandStyle: renderBrandStyleManager(),
    site: renderSiteSettingsManager(),
    logs: `
      ${managerHeader("操作紀錄", "記錄誰修改了內容，方便追查。", ["篩選紀錄"])}
      ${simpleTable(["時間", "使用者", "動作", "項目"], [["2026/07/17 15:50", "Joy", "更新", "首頁模塊"], ["2026/07/17 15:30", "Joy", "新增", "前台頁面"], ["2026/07/16 18:03", "Editor", "上傳", "文章圖片"]])}
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
        item.category = kind === "resources" ? "待填縣市 / 區域" : button.dataset.quickAddCategory || "未分類";
        item.updated = kind === "resources" ? "待填地址" : item.updated;
        item.title = kind === "products"
          ? `新增商品 / 服務資料 ${state.dataCollections[kind].length + 1}`
          : kind === "resources"
            ? `新增據點 ${state.dataCollections[kind].length + 1}`
          : `${item.category} ${state.dataCollections[kind].length + 1}`;
        state.dataCollections[kind].push(item);
        state.activeDataEditor = { kind, id: item.id, isDirty: true };
        render();
      });
    });
    els.managerPanel.querySelector("[data-open-product-type-add]")?.addEventListener("click", () => {
      state.activeArticleQuickAdd = { type: "productType" };
      state.articleCategoryDraft = "";
      render();
    });
    els.managerPanel.querySelectorAll("[data-close-product-type-add]").forEach((button) => {
      button.addEventListener("click", () => {
        state.activeArticleQuickAdd = null;
        state.articleCategoryDraft = "";
        render();
      });
    });
    els.managerPanel.querySelector("[data-product-type-draft]")?.addEventListener("input", (event) => {
      state.articleCategoryDraft = event.currentTarget.value;
    });
    els.managerPanel.querySelector("[data-confirm-product-type-add]")?.addEventListener("click", () => {
      const type = state.articleCategoryDraft.trim();
      if (!type || cmsTypeOptions.products.includes(type)) return;
      cmsTypeOptions.products.push(type);
      state.dataFilters.products = { ...state.dataFilters.products, category: type };
      state.activeArticleQuickAdd = null;
      state.articleCategoryDraft = "";
      render();
    });
    els.managerPanel.querySelectorAll("[data-open-article-quick-add]").forEach((button) => {
      button.addEventListener("click", () => {
        const type = button.dataset.openArticleQuickAdd;
        const fixedArticleType = state.adminSection === "blueprintFaq" ? "FAQ" : "";
        if (type === "article") {
          const item = createDataItem("articles", dataManagerConfig.articles);
          item.type = fixedArticleType || state.dataFilters.articles.category || cmsTypeOptions.articles[0];
          item.category = item.type;
          item.title = `新增文章 ${state.dataCollections.articles.length + 1}`;
          state.dataCollections.articles.unshift(item);
          state.activeDataEditor = { kind: "articles", id: item.id, isDirty: true };
          render();
          return;
        }
        state.activeArticleQuickAdd = { type };
        state.articleCategoryDraft = "";
        state.articleQuickDraft = {
          title: "",
          type: fixedArticleType || cmsTypeOptions.articles[0],
          category: fixedArticleType === "FAQ"
            ? (state.dataFilters.articles.category || cmsTypeOptions.faq[0])
            : (state.dataFilters.articles.category || ""),
          status: type === "faq" ? "已發布" : "草稿",
          body: "",
          sort: type === "faq" ? String(state.dataCollections.articles.filter((entry) => entry.type === "FAQ").length + 1) : ""
        };
        render();
      });
    });
    els.managerPanel.querySelectorAll("[data-close-article-quick-add]").forEach((button) => {
      button.addEventListener("click", () => {
        state.activeArticleQuickAdd = null;
        state.articleCategoryDraft = "";
        render();
      });
    });
    els.managerPanel.querySelector("[data-modal-panel]")?.addEventListener("click", (event) => {
      event.stopPropagation();
    });
    els.managerPanel.querySelectorAll("[data-article-quick-field]").forEach((input) => {
      const updateQuickDraft = () => {
        state.articleQuickDraft[input.dataset.articleQuickField] = input.value;
      };
      input.addEventListener("input", updateQuickDraft);
      input.addEventListener("change", updateQuickDraft);
    });
    els.managerPanel.querySelector("[data-article-category-draft]")?.addEventListener("input", (event) => {
      state.articleCategoryDraft = event.currentTarget.value;
    });
    els.managerPanel.querySelector("[data-confirm-article-quick-add]")?.addEventListener("click", () => {
      const quickAdd = state.activeArticleQuickAdd;
      if (!quickAdd) return;
      if (quickAdd.type === "category") {
        const category = state.articleCategoryDraft.trim();
        const fixedArticleType = state.adminSection === "blueprintFaq" ? "FAQ" : "";
        const optionKey = fixedArticleType === "FAQ" ? "faq" : "articles";
        if (!category || cmsTypeOptions[optionKey].includes(category)) return;
        cmsTypeOptions[optionKey].push(category);
        state.dataFilters.articles = { ...state.dataFilters.articles, category };
        state.articleCategoryDraft = "";
        state.activeArticleQuickAdd = null;
        render();
        return;
      }
      if (quickAdd.type === "faq") {
        const question = state.articleQuickDraft.title.trim();
        const answer = state.articleQuickDraft.body.trim();
        if (!question || !answer) return;
        const item = createDataItem("articles", dataManagerConfig.articles);
        item.type = "FAQ";
        item.category = state.articleQuickDraft.category || cmsTypeOptions.faq[0];
        item.title = question;
        item.body = answer;
        item.bodyHtml = esc(answer).replace(/\n/g, "<br>");
        item.status = state.articleQuickDraft.status || "已發布";
        item.sort = state.articleQuickDraft.sort || String(state.dataCollections.articles.filter((entry) => entry.type === "FAQ").length + 1);
        item.updated = item.sort ? `排序 ${item.sort}` : item.updated;
        state.dataCollections.articles.unshift(item);
        state.activeArticleQuickAdd = null;
        state.articleQuickDraft = { title: "", category: "", status: "草稿" };
        render();
        return;
      }
      const title = state.articleQuickDraft.title.trim();
      if (!title) return;
      const fixedArticleType = state.adminSection === "blueprintFaq" ? "FAQ" : "";
      const item = createDataItem("articles", dataManagerConfig.articles);
      item.type = fixedArticleType || state.articleQuickDraft.type || cmsTypeOptions.articles[0];
      item.category = item.type;
      item.status = state.articleQuickDraft.status || "草稿";
      item.title = title;
      state.dataCollections.articles.unshift(item);
      state.activeArticleQuickAdd = null;
      state.articleQuickDraft = { title: "", category: "", status: "草稿" };
      render();
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
      if (input.dataset.richBody !== undefined) return;
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
    els.managerPanel.querySelectorAll("[data-rich-body]").forEach((body) => {
      body.addEventListener("input", () => {
        if (body.dataset.pageRichContent !== undefined) {
          const page = state.pages.find((item) => item.id === state.activePageId);
          if (!page) return;
          page.content = page.content || {};
          page.content[`${body.dataset.pageRichContent}Html`] = body.innerHTML;
          page.content[body.dataset.pageRichContent] = body.innerText;
          state.pageSavedNotice = "";
          return;
        }
        const item = state.dataCollections[body.dataset.dataKind].find((entry) => entry.id === body.dataset.dataId);
        if (item) {
          const textField = body.dataset.richTextField || "body";
          const htmlField = body.dataset.richHtmlField || `${textField}Html`;
          item[htmlField] = body.innerHTML;
          item[textField] = body.innerText;
        }
        if (state.activeDataEditor) state.activeDataEditor.isDirty = true;
      });
    });
    els.managerPanel.querySelectorAll("[data-rich-command]").forEach((button) => {
      button.addEventListener("click", () => {
        const editor = button.closest("[data-rich-editor]");
        const body = editor?.querySelector("[data-rich-body]");
        body?.focus();
        document.execCommand(button.dataset.richCommand, false, button.dataset.richValue || null);
        body?.dispatchEvent(new Event("input", { bubbles: true }));
      });
    });
    els.managerPanel.querySelectorAll("[data-rich-color]").forEach((input) => {
      input.addEventListener("input", () => {
        const editor = input.closest("[data-rich-editor]");
        const body = editor?.querySelector("[data-rich-body]");
        body?.focus();
        document.execCommand("foreColor", false, input.value);
        body?.dispatchEvent(new Event("input", { bubbles: true }));
      });
    });
    els.managerPanel.querySelectorAll("[data-rich-font-size]").forEach((select) => {
      select.addEventListener("change", () => {
        if (!select.value) return;
        const editor = select.closest("[data-rich-editor]");
        const body = editor?.querySelector("[data-rich-body]");
        body?.focus();
        document.execCommand("fontSize", false, select.value);
        body?.dispatchEvent(new Event("input", { bubbles: true }));
        select.value = "";
      });
    });
    els.managerPanel.querySelectorAll("[data-rich-insert]").forEach((button) => {
      button.addEventListener("click", () => {
        const editor = button.closest("[data-rich-editor]");
        const body = editor?.querySelector("[data-rich-body]");
        const kind = button.dataset.richInsert;
        body?.focus();
        if (kind === "link") {
          const url = prompt("請輸入連結網址");
          if (!url) return;
          document.execCommand("createLink", false, normalizeExternalUrl(url));
        }
        body?.dispatchEvent(new Event("input", { bubbles: true }));
      });
    });
    els.managerPanel.querySelectorAll("[data-rich-upload-trigger]").forEach((button) => {
      button.addEventListener("click", () => {
        const editor = button.closest("[data-rich-editor]");
        const input = editor?.querySelector(`[data-rich-upload="${button.dataset.richUploadTrigger}"]`);
        input?.click();
      });
    });
    els.managerPanel.querySelectorAll("[data-rich-upload]").forEach((input) => {
      input.addEventListener("change", () => {
        const file = input.files?.[0];
        if (!file) return;
        const editor = input.closest("[data-rich-editor]");
        const body = editor?.querySelector("[data-rich-body]");
        const fileUrl = URL.createObjectURL(file);
        body?.focus();
        if (input.dataset.richUpload === "image") {
          document.execCommand("insertHTML", false, `<figure><img src="${esc(fileUrl)}" alt="${esc(file.name)}"><figcaption>${esc(file.name)}</figcaption></figure>`);
        }
        if (input.dataset.richUpload === "video") {
          document.execCommand("insertHTML", false, `<figure class="rich-video"><video src="${esc(fileUrl)}" controls></video><figcaption>${esc(file.name)}</figcaption></figure>`);
        }
        body?.dispatchEvent(new Event("input", { bubbles: true }));
        input.value = "";
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
        role: getAdminRoleOptions().includes("編輯者") ? "編輯者" : getAdminRoleOptions()[0],
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
        const user = state.adminUsers.find((item) => item.id === button.dataset.deleteAdminUser);
        if (isSuperAdminUser(user)) return;
        state.adminUsers = state.adminUsers.filter((item) => item.id !== button.dataset.deleteAdminUser);
        if (state.activeAdminUserEditor?.id === button.dataset.deleteAdminUser) state.activeAdminUserEditor = null;
        render();
      });
    });
    els.managerPanel.querySelectorAll("[data-transfer-super-admin]").forEach((button) => {
      button.addEventListener("click", () => {
        const current = state.adminUsers.find((user) => user.id === button.dataset.transferSuperAdmin);
        const firstTarget = state.adminUsers.find((user) => user.id !== current?.id && !isSuperAdminUser(user) && user.status === "啟用");
        state.activeSuperAdminTransferUserId = button.dataset.transferSuperAdmin;
        state.superAdminTransferTargetId = firstTarget?.id || "";
        render();
      });
    });
    els.managerPanel.querySelectorAll("[data-close-super-admin-transfer]").forEach((button) => {
      button.addEventListener("click", () => {
        state.activeSuperAdminTransferUserId = "";
        state.superAdminTransferTargetId = "";
        render();
      });
    });
    els.managerPanel.querySelector("[data-super-admin-transfer-target]")?.addEventListener("change", (event) => {
      state.superAdminTransferTargetId = event.currentTarget.value;
    });
    els.managerPanel.querySelector("[data-confirm-super-admin-transfer]")?.addEventListener("click", () => {
      const current = state.adminUsers.find((user) => user.id === state.activeSuperAdminTransferUserId);
      const target = state.adminUsers.find((user) => user.id === state.superAdminTransferTargetId);
      if (!current || !target || current.id === target.id || isSuperAdminUser(target)) return;
      current.role = getFallbackAdminRoleName();
      current.note = "最高權限已轉移，現在為一般管理帳號。";
      target.role = getSuperAdminRole()?.name || target.role;
      target.note = "已接手最高管理者權限。";
      state.activeSuperAdminTransferUserId = "";
      state.superAdminTransferTargetId = "";
      render();
    });
    els.managerPanel.querySelectorAll("[data-reset-password]").forEach((button) => {
      button.addEventListener("click", () => {
        state.activePasswordResetUserId = button.dataset.resetPassword;
        state.passwordResetDraft = { password: "", confirm: "" };
        render();
      });
    });
    els.managerPanel.querySelectorAll("[data-close-password-reset]").forEach((button) => {
      button.addEventListener("click", () => {
        state.activePasswordResetUserId = "";
        state.passwordResetDraft = { password: "", confirm: "" };
        render();
      });
    });
    els.managerPanel.querySelectorAll("[data-password-reset-field]").forEach((input) => {
      input.addEventListener("input", () => {
        state.passwordResetDraft[input.dataset.passwordResetField] = input.value;
      });
    });
    els.managerPanel.querySelector("[data-confirm-password-reset]")?.addEventListener("click", () => {
      const user = state.adminUsers.find((item) => item.id === state.activePasswordResetUserId);
      const { password, confirm } = state.passwordResetDraft;
      if (!user || !password || password !== confirm) return;
      user.note = "密碼已由最高管理者重置，需通知使用者重新登入。";
      user.lastLogin = user.lastLogin || "尚未登入";
      state.activePasswordResetUserId = "";
      state.passwordResetDraft = { password: "", confirm: "" };
      render();
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

  if (state.adminSection === "adminRoles") {
    els.managerPanel.querySelector("[data-add-admin-role]")?.addEventListener("click", () => {
      const role = {
        id: `role-${Date.now()}`,
        name: `自訂角色 ${state.adminRoles.length + 1}`,
        description: "",
        permissions: ["home", "pages"],
        updated: "尚未儲存"
      };
      state.adminRoles.push(role);
      state.activeAdminRoleEditor = { id: role.id, originalName: role.name, isNew: true, isDirty: true };
      render();
    });
    els.managerPanel.querySelectorAll("[data-edit-admin-role]").forEach((button) => {
      button.addEventListener("click", () => {
        const role = state.adminRoles.find((item) => item.id === button.dataset.editAdminRole);
        state.activeAdminRoleEditor = { id: button.dataset.editAdminRole, originalName: role?.name || "", isNew: false, isDirty: false };
        render();
      });
    });
    els.managerPanel.querySelectorAll("[data-delete-admin-role]").forEach((button) => {
      button.addEventListener("click", () => {
        const role = state.adminRoles.find((item) => item.id === button.dataset.deleteAdminRole);
        const isUsed = role && state.adminUsers.some((user) => user.role === role.name);
        if (!role || role.isSuperAdmin || isUsed) return;
        state.adminRoles = state.adminRoles.filter((item) => item.id !== role.id);
        render();
      });
    });
    els.managerPanel.querySelector("[data-back-admin-roles]")?.addEventListener("click", () => {
      state.activeAdminRoleEditor = null;
      render();
    });
    els.managerPanel.querySelector("[data-save-admin-role]")?.addEventListener("click", () => {
      const editor = state.activeAdminRoleEditor;
      const role = editor && state.adminRoles.find((item) => item.id === editor.id);
      if (!editor || !role) return;
      const normalizedName = role.name.trim() || editor.originalName || "未命名角色";
      const duplicate = state.adminRoles.some((item) => item.id !== role.id && item.name === normalizedName);
      if (duplicate) return;
      if (editor.originalName && editor.originalName !== normalizedName) {
        state.adminUsers.forEach((user) => {
          if (user.role === editor.originalName) user.role = normalizedName;
        });
      }
      role.name = normalizedName;
      role.updated = "剛剛";
      editor.originalName = role.name;
      editor.isDirty = false;
      editor.isNew = false;
      render();
    });
    els.managerPanel.querySelectorAll("[data-admin-role-field]").forEach((input) => {
      const updateField = () => {
        const [id, field] = input.dataset.adminRoleField.split(":");
        const role = state.adminRoles.find((item) => item.id === id);
        if (!role || role.isSuperAdmin && field === "name") return;
        role[field] = input.value;
        if (state.activeAdminRoleEditor) state.activeAdminRoleEditor.isDirty = true;
      };
      input.addEventListener("input", updateField);
      input.addEventListener("change", updateField);
    });
    els.managerPanel.querySelectorAll("[data-role-permission-group]").forEach((input) => {
      input.addEventListener("change", () => {
        const role = state.activeAdminRoleEditor && state.adminRoles.find((item) => item.id === state.activeAdminRoleEditor.id);
        const group = adminPermissionTree.find((item) => item.id === input.dataset.rolePermissionGroup);
        if (!role || role.isSuperAdmin || !group) return;
        const next = new Set(role.permissions);
        group.children.forEach((child) => {
          if (input.checked) next.add(child.id);
          else next.delete(child.id);
        });
        role.permissions = Array.from(next);
        state.activeAdminRoleEditor.isDirty = true;
        render();
      });
    });
    els.managerPanel.querySelectorAll("[data-role-permission]").forEach((input) => {
      input.addEventListener("change", () => {
        const role = state.activeAdminRoleEditor && state.adminRoles.find((item) => item.id === state.activeAdminRoleEditor.id);
        if (!role || role.isSuperAdmin) return;
        const next = new Set(role.permissions);
        if (input.checked) next.add(input.dataset.rolePermission);
        else next.delete(input.dataset.rolePermission);
        role.permissions = Array.from(next);
        state.activeAdminRoleEditor.isDirty = true;
        render();
      });
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

  if (state.adminSection === "seo") {
    els.managerPanel.querySelectorAll("[data-edit-seo]").forEach((button) => {
      button.addEventListener("click", () => openSeoModal(button.dataset.editSeo));
    });
    els.managerPanel.querySelectorAll("[data-close-seo-modal]").forEach((button) => {
      button.addEventListener("click", () => closeSeoModal());
    });
    els.managerPanel.querySelector("[data-modal-panel]")?.addEventListener("click", (event) => {
      event.stopPropagation();
    });
    els.managerPanel.querySelectorAll("[data-seo-field]").forEach((input) => {
      input.addEventListener("input", () => {
        updateSeoDraft(input.dataset.seoField, input.value);
        refreshSeoLivePreview();
      });
      input.addEventListener("change", () => {
        updateSeoDraft(input.dataset.seoField, input.value);
        render();
      });
    });
    els.managerPanel.querySelectorAll("[data-seo-check]").forEach((input) => {
      input.addEventListener("change", () => {
        updateSeoDraft(input.dataset.seoCheck, input.checked);
        render();
      });
    });
    els.managerPanel.querySelectorAll("[data-seo-radio]").forEach((input) => {
      input.addEventListener("change", () => {
        updateSeoDraft(input.dataset.seoRadio, input.value);
        render();
      });
    });
    els.managerPanel.querySelector("[data-seo-image]")?.addEventListener("change", (event) => {
      handleSeoImageUpload(event.currentTarget);
    });
    els.managerPanel.querySelector("[data-remove-seo-image]")?.addEventListener("click", removeSeoImage);
    els.managerPanel.querySelector("[data-save-seo-modal]")?.addEventListener("click", saveSeoDraft);
  }

  if (state.adminSection === "siteBasicInfo") {
    els.managerPanel.querySelectorAll("[data-site-info-preview-tab]").forEach((button) => {
      button.addEventListener("click", () => {
        state.siteInfoPreviewTab = button.dataset.siteInfoPreviewTab;
        render();
      });
    });
    els.managerPanel.querySelectorAll("[data-site-info-field]").forEach((input) => {
      const updateField = () => {
        state.siteInfo[input.dataset.siteInfoField] = input.value;
      };
      input.addEventListener("input", updateField);
      input.addEventListener("change", () => {
        updateField();
        render();
      });
    });
    els.managerPanel.querySelectorAll("[data-site-info-file]").forEach((input) => {
      input.addEventListener("change", () => {
        const file = input.files?.[0];
        state.siteInfo[input.dataset.siteInfoFile] = file?.name || "尚未選擇檔案";
        if (input.dataset.siteInfoFile === "logoFileName") {
          state.siteInfo.logoPreviewUrl = file ? URL.createObjectURL(file) : "";
        }
        render();
      });
    });
    els.managerPanel.querySelector("[data-add-social-link]")?.addEventListener("click", () => {
      if (state.socialLinks.length >= 50) return;
      const platform = socialPlatformOptions[0];
      state.socialLinks.push({
        id: `social-${Date.now()}`,
        platform: platform.id,
        label: platform.name,
        url: platform.url
      });
      render();
    });
    els.managerPanel.querySelectorAll("[data-remove-social-link]").forEach((button) => {
      button.addEventListener("click", () => {
        const id = button.dataset.removeSocialLink;
        state.socialLinks = state.socialLinks.filter((item) => item.id !== id);
        state.floatingEntries.forEach((entry) => {
          if (entry.linkType === "social" && entry.linkValue === id) {
            entry.linkType = "page";
            entry.linkValue = "contact";
          }
        });
        render();
      });
    });
    els.managerPanel.querySelectorAll("[data-social-link-field]").forEach((input) => {
      const updateSocialField = () => {
        const [id, field] = input.dataset.socialLinkField.split(":");
        const link = state.socialLinks.find((item) => item.id === id);
        if (!link) return;
        if (field === "platform") {
          const previous = getSocialPlatform(link.platform);
          const next = getSocialPlatform(input.value);
          const labelWasDefault = !link.label || link.label === previous.name;
          const urlWasDefault = !link.url || link.url === previous.url;
          link.platform = next.id;
          if (labelWasDefault) link.label = next.name;
          if (urlWasDefault) link.url = next.url;
          return;
        }
        link[field] = input.value;
      };
      input.addEventListener("input", updateSocialField);
      input.addEventListener("change", () => {
        updateSocialField();
        render();
      });
    });
    els.managerPanel.querySelector("[data-add-floating-entry]")?.addEventListener("click", () => {
      if (state.floatingEntries.length >= 6) return;
      const firstSocial = state.socialLinks[0]?.id || "";
      state.floatingEntries.push({
        id: `float-${Date.now()}`,
        title: "新入口",
        subtitle: "",
        linkType: firstSocial ? "social" : "page",
        linkValue: firstSocial || "contact",
        icon: "line"
      });
      render();
    });
    els.managerPanel.querySelectorAll("[data-remove-floating-entry]").forEach((button) => {
      button.addEventListener("click", () => {
        state.floatingEntries = state.floatingEntries.filter((item) => item.id !== button.dataset.removeFloatingEntry);
        render();
      });
    });
    els.managerPanel.querySelectorAll("[data-floating-field]").forEach((input) => {
      const updateFloatingField = () => {
        const [id, field] = input.dataset.floatingField.split(":");
        const entry = state.floatingEntries.find((item) => item.id === id);
        if (entry) entry[field] = input.value;
      };
      input.addEventListener("input", updateFloatingField);
      input.addEventListener("change", () => {
        updateFloatingField();
        render();
      });
    });
    els.managerPanel.querySelectorAll("[data-floating-link]").forEach((select) => {
      select.addEventListener("change", () => {
        const entry = state.floatingEntries.find((item) => item.id === select.dataset.floatingLink);
        if (!entry) return;
        const isPage = state.pages.some((page) => page.id === select.value);
        entry.linkType = isPage ? "page" : "social";
        entry.linkValue = select.value;
        render();
      });
    });
    els.managerPanel.querySelectorAll("[data-floating-icon]").forEach((button) => {
      button.addEventListener("click", () => {
        const [id, icon] = button.dataset.floatingIcon.split(":");
        const entry = state.floatingEntries.find((item) => item.id === id);
        if (entry) entry.icon = icon;
        render();
      });
    });
    els.managerPanel.querySelector("[data-save-site-info]")?.addEventListener("click", () => {
      state.savedSiteInfo = clone(state.siteInfo);
      state.savedSocialLinks = clone(state.socialLinks);
      state.savedFloatingEntries = clone(state.floatingEntries);
      render();
    });
  }

  if (state.adminSection === "pages") {
    els.managerPanel.querySelector("[data-add-page]")?.addEventListener("click", () => {
      state.isChoosingPageTemplate = true;
      state.pendingPageTemplate = pageTemplates[0]?.id || "";
      state.pageMode = "list";
      render();
    });
    els.managerPanel.querySelector("[data-cancel-page-template]")?.addEventListener("click", () => {
      state.isChoosingPageTemplate = false;
      state.pendingPageTemplate = "";
      render();
    });
    els.managerPanel.querySelectorAll("[data-page-template]").forEach((button) => {
      button.addEventListener("click", () => choosePageTemplate(button.dataset.pageTemplate));
    });
    els.managerPanel.querySelector("[data-confirm-page-template]")?.addEventListener("click", () => {
      const templateId = state.pendingPageTemplate || pageTemplates[0]?.id || "content";
      addPageFromTemplate(templateId, recommendedPageSource(templateId));
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
      button.addEventListener("click", cancelPageEdit);
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
    els.managerPanel.querySelectorAll("[data-page-rich-content]").forEach((body) => {
      body.addEventListener("input", () => {
        if (!activePage) return;
        activePage.content = activePage.content || {};
        activePage.content[`${body.dataset.pageRichContent}Html`] = body.innerHTML;
        activePage.content[body.dataset.pageRichContent] = body.innerText;
        state.pageSavedNotice = "";
      });
    });
    els.managerPanel.querySelectorAll("[data-rich-command]").forEach((button) => {
      button.addEventListener("click", () => {
        const editor = button.closest("[data-rich-editor]");
        const body = editor?.querySelector("[data-page-rich-content]");
        if (!body) return;
        body.focus();
        document.execCommand(button.dataset.richCommand, false, button.dataset.richValue || null);
        body.dispatchEvent(new Event("input", { bubbles: true }));
      });
    });
    els.managerPanel.querySelectorAll("[data-rich-color]").forEach((input) => {
      input.addEventListener("input", () => {
        const editor = input.closest("[data-rich-editor]");
        const body = editor?.querySelector("[data-page-rich-content]");
        if (!body) return;
        body.focus();
        document.execCommand("foreColor", false, input.value);
        body.dispatchEvent(new Event("input", { bubbles: true }));
      });
    });
    els.managerPanel.querySelectorAll("[data-rich-font-size]").forEach((select) => {
      select.addEventListener("change", () => {
        if (!select.value) return;
        const editor = select.closest("[data-rich-editor]");
        const body = editor?.querySelector("[data-page-rich-content]");
        if (!body) return;
        body.focus();
        document.execCommand("fontSize", false, select.value);
        body.dispatchEvent(new Event("input", { bubbles: true }));
        select.value = "";
      });
    });
    els.managerPanel.querySelectorAll("[data-rich-insert]").forEach((button) => {
      button.addEventListener("click", () => {
        const editor = button.closest("[data-rich-editor]");
        const body = editor?.querySelector("[data-page-rich-content]");
        if (!body) return;
        body.focus();
        if (button.dataset.richInsert === "link") {
          const url = prompt("請輸入連結網址");
          if (!url) return;
          document.execCommand("createLink", false, normalizeExternalUrl(url));
        }
        body.dispatchEvent(new Event("input", { bubbles: true }));
      });
    });
    els.managerPanel.querySelectorAll(".page-rich-editor [data-rich-upload-trigger]").forEach((button) => {
      button.addEventListener("click", () => {
        const editor = button.closest("[data-rich-editor]");
        const input = editor?.querySelector(`[data-rich-upload="${button.dataset.richUploadTrigger}"]`);
        input?.click();
      });
    });
    els.managerPanel.querySelectorAll(".page-rich-editor [data-rich-upload]").forEach((input) => {
      input.addEventListener("change", () => {
        const file = input.files?.[0];
        if (!file) return;
        const editor = input.closest("[data-rich-editor]");
        const body = editor?.querySelector("[data-page-rich-content]");
        const fileUrl = URL.createObjectURL(file);
        body?.focus();
        if (input.dataset.richUpload === "image") {
          document.execCommand("insertHTML", false, `<figure><img src="${esc(fileUrl)}" alt="${esc(file.name)}"><figcaption>${esc(file.name)}</figcaption></figure>`);
        }
        if (input.dataset.richUpload === "video") {
          document.execCommand("insertHTML", false, `<figure class="rich-video"><video src="${esc(fileUrl)}" controls></video><figcaption>${esc(file.name)}</figcaption></figure>`);
        }
        body?.dispatchEvent(new Event("input", { bubbles: true }));
        input.value = "";
      });
    });
  }
}

function render() {
  els.addModuleBtn.textContent = state.homeMode === "insert" ? "返回現況" : "新增模塊";
  const isHomeSubFlow = state.adminSection === "home" && state.homeMode !== "overview";
  els.moduleToolbar.classList.toggle("hidden", isHomeSubFlow);
  els.summary.classList.toggle("hidden", isHomeSubFlow);
  els.backHomeOverviewBtn.classList.add("hidden");
  renderSummary();
  renderModuleList();
  renderSettings();
  renderManagerPanel();
  renderHeaderSiteTemplateNotice();
  renderPreview();
  setView();
  updateSaveState();
  expandFrontPreviewFrames();
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
els.themeToggle?.addEventListener("click", toggleAdminTheme);
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
render();

