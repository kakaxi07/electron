# Electron Web Wrapper（Node 20 可用）

## 目录结构

```
.
├── main.js
├── preload.js
├── package.json
└── README.md
```

## 环境要求

- Node.js 20.x
- npm 10+

## 安装依赖

```bash
npm install
```

## 本地运行

```bash
npm start
```

## 指定要打开的网址

默认网址在 `main.js` 的 `TARGET_URL`。
也支持启动时临时指定：

```bash
TARGET_URL="https://your-site.com" npm start
```

## 打包 Windows 安装程序（NSIS）

```bash
npm run build
```

构建后在 `dist/` 目录下得到 `*-Setup-*.exe` 安装包（适用于 Windows 10/11）。
