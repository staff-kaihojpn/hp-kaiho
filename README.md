# 開豊ジャパン - 骨董品・古美術品買取サイト

骨董品や古美術品の買取を行う開豊ジャパンの公式ウェブサイトです。Astro + DaisyUIで構築された高速で軽量なWebサイトです。

## 🚀 技術スタック

- **フレームワーク**: [Astro 4.0](https://astro.build/) - 静的サイト生成
- **UIライブラリ**: [DaisyUI 4.12](https://daisyui.com/) - TailwindCSSベースのコンポーネント
- **スタイリング**: [TailwindCSS 3.4](https://tailwindcss.com/)
- **言語**: TypeScript, HTML, CSS
- **デプロイ**: 静的サイトホスティング対応

## 📁 プロジェクト構造

```
├── public/                    # 静的アセット
│   ├── assets/
│   │   ├── fonts/            # カスタムフォント
│   │   └── icons/            # アイコン・ファビコン
│   ├── assessments/          # 査定関連画像
│   ├── home/                 # ホームページ画像
│   └── items/                # 買取品目画像
├── src/
│   ├── components/           # Astroコンポーネント
│   │   ├── sections/        # セクションコンポーネント
│   │   ├── Button.astro
│   │   ├── Card.astro
│   │   ├── Header.astro
│   │   └── Footer.astro
│   ├── layouts/             # レイアウトテンプレート
│   │   └── BaseLayout.astro
│   ├── pages/               # ページファイル
│   │   ├── assessments/     # 査定ページ
│   │   ├── help/           # ヘルプページ
│   │   └── index.astro     # ホームページ
│   ├── styles/              # スタイルシート
│   │   └── global.css
│   └── config/              # 設定ファイル
├── astro.config.mjs         # Astro設定
├── tailwind.config.mjs      # TailwindCSS設定
└── package.json
```

## 🛠️ 開発環境セットアップ

### 前提条件

- Node.js 18.0 以上
- npm または yarn

### インストール

```bash
# リポジトリをクローン
git clone <repository-url>
cd hp-kaiho

# 依存関係をインストール
npm install
```

### 環境変数設定

`.env.local` ファイルを作成し、以下の環境変数を設定してください：

```env
# Google Analytics
PUBLIC_GA_TRACKING_ID=your-ga-tracking-id

# Crisp Chat
PUBLIC_CRISP_WEBSITE_ID=your-crisp-website-id

# LINE
PUBLIC_LINE_SHARE_ID=your-line-share-id
```

## 📝 開発コマンド

| コマンド | 説明 |
|---------|------|
| `npm run dev` | 開発サーバーを起動 (http://localhost:3015) |
| `npm run build` | プロダクション用ビルド |
| `npm run preview` | ビルド結果をプレビュー |

## 🎨 デザインシステム

### カスタムテーマ

DaisyUIのカスタムテーマを使用：

```css
[data-theme="custom"] {
  --primary: #005D09;    /* 濃い緑 */
  --secondary: #F2C900;  /* 黄色 */
  --accent: #A66D00;     /* 茶色 */
  --base-100: #E6F2DC;  /* 薄い緑背景 */
}
```

### フォント

- **日本語**: Times New Roman, YuMincho, Hiragino Mincho ProN
- **見出し**: Yuji Syuku (Google Fonts)
- **数字**: DigitalNumbers (カスタムフォント)

## 📄 ページ構成

### メインページ

- **ホーム** (`/`) - サービス概要、買取品目、査定方法
- **LINE査定** (`/assessments/line`) - LINE査定の利用方法
- **チャット査定** (`/assessments/chat`) - チャット査定の手順
- **訪問査定** (`/assessments/onsite`) - 出張買取サービス
- **持込査定** (`/assessments/carryin`) - 店舗持込査定

### ヘルプページ

- **FAQ** (`/help/faq`) - よくある質問
- **会社概要** (`/help/about`) - 会社情報
- **プライバシーポリシー** (`/help/privacy`) - 個人情報保護方針
- **買取規約** (`/help/rule`) - 査定・買取に関する規約

## 🔧 主要機能

### 📱 査定システム
- LINE査定連携
- リアルタイムチャット査定 (Crisp Chat)
- 出張買取予約
- 持込査定案内

### 📊 分析・追跡
- Google Analytics統合
- パフォーマンス最適化
- SEO対応

### 🎯 ユーザビリティ
- レスポンシブデザイン
- アクセシビリティ対応
- 高速ローディング

## 🚢 デプロイ

### 静的サイトビルド

```bash
npm run build
```

ビルド結果は `dist/` ディレクトリに出力されます。

### 対応ホスティング

- Vercel
- Netlify  
- GitHub Pages
- Cloudflare Pages
- AWS S3 + CloudFront

## 🔒 セキュリティ

- 環境変数による機密情報管理
- CSP（Content Security Policy）準拠
- HTTPS必須設定

## 📈 パフォーマンス

- 静的サイト生成による高速表示
- 画像最適化（WebP形式）
- CSS/JS最小化
- CDNフォント使用

## 🐛 トラブルシューティング

### よくある問題

1. **ビルドエラー**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **環境変数が反映されない**
   - `.env.local` ファイルの存在確認
   - `PUBLIC_` プレフィックスの確認

3. **フォントが表示されない**
   - フォントファイルのパス確認
   - ブラウザキャッシュクリア

## 📞 サポート

技術的な問題や質問については、開発チームまでお問い合わせください。

## 📄 ライセンス

このプロジェクトは株式会社開豊ジャパンの所有物です。

---

**株式会社開豊ジャパン**  
住所: 東京都八王子市大船町142-6  
電話: 042-667-7005  
メール: staff.kaihojpn@gmail.com