# 官網版型範本打包規格

這份規格用來交付可放進後台「品牌樣式設定」的官網版型範本。每個範本應該是可直接開啟預覽的靜態 HTML/CSS，並支援後台套用色系。

## 建議資料夾結構

```text
website-templates/
  template-manifest.json

  business-service/
    index.html
    style.css
    preview.png
    assets/
      hero.jpg
      service-1.jpg

  industrial/
    index.html
    style.css
    preview.png
    assets/
      hero.jpg

  brand-image/
    index.html
    style.css
    preview.png
    assets/

  content-hub/
    index.html
    style.css
    preview.png
    assets/
```

## template-manifest.json

根目錄需放一個 `template-manifest.json`，用來讓後台讀取有哪些範本。

```json
[
  {
    "id": "business-service",
    "name": "商業服務型",
    "description": "適合顧問、B2B 服務、專業品牌。",
    "category": "商業 / 服務",
    "entry": "business-service/index.html",
    "thumbnail": "business-service/preview.png"
  }
]
```

## 每個範本需要包含

- `index.html`：完整靜態頁面。
- `style.css`：該範本的主要樣式。
- `preview.png`：後台版型卡片縮圖。
- `assets/`：圖片、字型、影片等素材。

若需要 JS，可以加入：

```text
script.js
```

並在 HTML 內引用：

```html
<script src="./script.js"></script>
```

初版建議以靜態 HTML/CSS 為主，避免需要 build 或連接 API 才能顯示。

## HTML 引用規則

CSS 請使用相對路徑：

```html
<link rel="stylesheet" href="./style.css">
```

圖片與素材也請使用相對路徑：

```html
<img src="./assets/hero.jpg" alt="">
```

## 配色變數規則

為了讓後台可以套用色系，CSS 請盡量使用以下變數：

```css
:root {
  --brand-primary: #0e6a8c;
  --brand-accent: #1f6b4a;
  --brand-bg: #f3f7f8;
  --brand-surface: #ffffff;
  --brand-text: #0b1f2a;
  --brand-muted: #64747b;
}
```

範本內主要顏色請優先使用這些變數，例如：

```css
body {
  background: var(--brand-bg);
  color: var(--brand-text);
}

.primary-button {
  background: var(--brand-primary);
  color: #fff;
}

.section-label {
  color: var(--brand-accent);
}
```

## preview.png 規格

建議尺寸：

- `1200x800`
- 或 `1600x1000`

縮圖應呈現該範本最有代表性的第一屏或首頁視覺，避免只截空白區塊。

## 避免事項

請避免：

- 使用外部 CDN。
- 使用絕對路徑。
- 使用需要登入才看得到的圖片或資源。
- 使用需要 API 才能渲染的內容。
- 交付必須先 build 才能看的框架專案。
- 將重要樣式寫死在不可被色系覆蓋的顏色上。

## 交付檢查清單

- `template-manifest.json` 可以正確描述所有範本。
- 每個範本都有 `index.html`。
- 每個範本都有 `style.css`。
- 每個範本都有 `preview.png`。
- 所有圖片、CSS、JS 都使用相對路徑。
- 直接開啟 `index.html` 可以看到完整畫面。
- 主要配色使用 `--brand-*` CSS 變數。
- 範本縮圖足夠美觀，能讓客戶快速理解風格差異。
