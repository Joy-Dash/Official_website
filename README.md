# GitHub Pages 發布說明

這個資料夾可以直接放到 GitHub repository 的根目錄，然後用 GitHub Pages 發布。

## 手動發布步驟

1. 在 GitHub 建立一個新的 repository。
2. 把這個資料夾裡的所有檔案上傳到 repository 根目錄。
3. 到 repository 的 `Settings` > `Pages`。
4. 在 `Build and deployment` 選擇：
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`
5. 儲存後等待 GitHub 產生網址。

發布完成後，首頁會直接顯示 `index.html`，並可點進 `template-a` 與 `template-b` 兩個版型。
