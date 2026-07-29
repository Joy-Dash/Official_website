(() => {
  const params = new URLSearchParams(location.search);
  const pick = (key, fallback = "") => params.get(key) || fallback;
  const palette = {
    primary: pick("primary", "#0e6a8c"),
    accent: pick("accent", "#1f6b4a"),
    bg: pick("bg", "#f3f7f8"),
    surface: pick("surface", "#ffffff"),
    text: pick("text", "#0b1f2a"),
    muted: pick("muted", "#64747b")
  };
  const esc = (value) => String(value || "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  }[char]));
  const layout = document.body.dataset.pageLayout || "content-standard";
  const title = pick("title", "Page title");
  const intro = pick("intro", "This area previews how the page header and content layout will appear on the live site.");
  const category = pick("category", "Category");
  const source = pick("source", "Page preview");
  const body = pick("body", "Main content appears here. Editors can add formatted text, images, videos, links, and supporting notes.");
  const cardTitles = ["Brand update", "Knowledge article", "Case study", "Service item", "Download resource", "Location info"];
  const faqItems = [
    ["Who is this page for?", "This layout helps visitors understand the content and find the next action quickly."],
    ["Where does the content come from?", "List pages can use data records, while content pages can be edited manually."],
    ["Can this page use SEO settings?", "Yes. Title, description, sharing copy, index rules, and URL can be configured."]
  ];

  const cards = (count = 3) => Array.from({ length: count }, (_, index) => `
    <article class="preview-card">
      <div class="preview-thumb"></div>
      <div class="preview-card-body">
        <span>${esc(category)}</span>
        <h2>${esc(cardTitles[index] || `Content item ${index + 1}`)}</h2>
        <p>Summary text appears here so visitors can scan the page before opening the detail view.</p>
      </div>
    </article>
  `).join("");

  const pageHead = `
    <header class="preview-head">
      <div>
        <span class="preview-eyebrow">${esc(source)}</span>
        <h1>${esc(title)}</h1>
      </div>
      <p>${esc(intro)}</p>
    </header>
  `;

  const renderers = {
    "article-cards": () => `${pageHead}<section class="preview-grid three">${cards(3)}</section>`,
    "article-featured": () => `${pageHead}<section class="preview-featured"><article class="preview-feature"><div class="preview-thumb large"></div><span>${esc(category)}</span><h2>Featured article</h2><p>The featured layout gives one story more weight, with supporting articles on the side.</p></article><div class="preview-list">${cards(3)}</div></section>`,
    "content-standard": () => `${pageHead}<article class="preview-content"><p>${esc(body)}</p><div class="preview-note-row"><b>Key point 1</b><b>Key point 2</b></div></article>`,
    "content-sidebar": () => `${pageHead}<section class="preview-sidebar"><article class="preview-content"><p>${esc(body)}</p></article><aside><b>Page highlights</b><p>The sidebar can show a summary, reminder, CTA, or related information.</p></aside></section>`,
    "contact-side": () => `${pageHead}<section class="preview-sidebar"><article class="preview-content"><p>Visitors can leave their contact details and request more information.</p><div class="preview-form"></div></article><aside><b>${esc(pick("phone", "0968-104-098"))}</b><p>${esc(pick("email", "service@example.com"))}</p><p>${esc(pick("line", "LINE contact"))}</p></aside></section>`,
    "contact-center": () => `${pageHead}<article class="preview-content center"><p>Visitors can leave their contact details and request more information.</p><div class="preview-form"></div><div class="preview-contact-row"><b>${esc(pick("phone", "0968-104-098"))}</b><b>${esc(pick("email", "service@example.com"))}</b></div></article>`,
    "faq-accordion": () => `${pageHead}<section class="preview-faq">${faqItems.map(([q, a], index) => `<article><h2>${index + 1}. ${esc(q)}</h2><p>${esc(a)}</p></article>`).join("")}</section>`,
    "faq-sidebar": () => `${pageHead}<section class="preview-sidebar"><aside><b>${esc(category)}</b><p>Categories help visitors filter questions quickly.</p></aside><div class="preview-faq">${faqItems.map(([q, a]) => `<article><h2>${esc(q)}</h2><p>${esc(a)}</p></article>`).join("")}</div></section>`,
    "product-cards": () => `${pageHead}<section class="preview-grid three">${cards(3)}</section>`,
    "product-compare": () => `${pageHead}<section class="preview-table"><div>Plan</div><div>Audience</div><div>Included content</div><div>CTA</div>${["Basic", "Advanced", "Custom"].map((item) => `<strong>${item}</strong><span>General use</span><span>Service details and plan summary</span><button>Learn more</button>`).join("")}</section>`,
    "resource-cards": () => `${pageHead}<section class="preview-grid three">${cards(3)}</section>`,
    "resource-list": () => `${pageHead}<section class="preview-list wide">${cards(4)}</section>`
  };

  Object.entries(palette).forEach(([key, value]) => {
    document.documentElement.style.setProperty(`--${key}`, value);
  });
  document.body.innerHTML = `<main>${(renderers[layout] || renderers["content-standard"])()}</main>`;

  const reportHeight = () => parent.postMessage({
    type: "front-preview-height",
    height: Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
  }, "*");
  window.addEventListener("load", reportHeight);
  window.addEventListener("resize", reportHeight);
  if ("ResizeObserver" in window) new ResizeObserver(reportHeight).observe(document.documentElement);
  requestAnimationFrame(reportHeight);
  setTimeout(reportHeight, 120);
})();
