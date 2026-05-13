# Electron Web Wrapper

## 目录结构

```
.
├── main.js
├── preload.js
├── package.json
└── README.md
```

## 安装依赖

```bash
npm install
```

## 本地运行

```bash
npm start
```

## 打包 Windows 安装程序（NSIS）

```bash
npm run build
```

打包产物会输出到 `dist/` 目录，生成 `setup.exe` 安装程序。

## 自定义打开网页

编辑 `main.js` 中的 `TARGET_URL` 即可。
