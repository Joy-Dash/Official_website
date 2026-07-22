# 官網後台 GitHub Pages 發布包

這個資料夾可以直接放到 GitHub repository 根目錄，並用 GitHub Pages 發布。

## 主要入口

- `index.html`：官網首頁模組後台 Builder Demo
- `ab-backend-admin-prototype.html`：A/B 後台管理原型單檔版
- `homepage-module-builder-standalone.html`：首頁模組 Builder 單檔版

## 手動發布步驟

1. 在 GitHub 建立一個新的 repository。
2. 把這個資料夾裡的所有檔案上傳到 repository 根目錄。
3. 到 repository 的 `Settings` > `Pages`。
4. 在 `Build and deployment` 選擇：
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`
5. 儲存後等待 GitHub 產生網址。

發布完成後，開啟 GitHub Pages 網址會直接看到官網後台 Builder Demo。
