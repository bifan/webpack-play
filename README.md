# webpack 再体验

## 初始化
``` shell
npm init -y
npm install webpack webpack-cli --save-dev
```

## 目录结构(模拟Vue CLI)
```
webpack-play
|- public
  |- index.html
|- /src
  |- main.js
|- package.json
```
## 约定(默认配置)
- 约定入口是 `/src/index.js`
- 约定出口是 `/dist/main.js`
- 约定配置文件 `/webpack.config.js`

## 常用plugin
- `npm install --save-dev clean-webpack-plugin` → 清理构建目录
- `npm install --save-dev html-webpack-plugin` → 生成HTML