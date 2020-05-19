// 需要使用node.js 与系统交互
const path = require("path");
// 常用插件1 → 清除构建目录 npm install --save-dev clean-webpack-plugin
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// 常用插件2 → 生成HTML npm install --save-dev html-webpack-plugin
const HtmlWebpackPlugin = require("html-webpack-plugin");
  // 用花括号时要和export 的变量对应
  // 没有花括号相当于接收了export default ()=>{}
  // 等同于 const { default as HtmlWebpackPlugin} = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/main.js",
  // 常用插件1 → 清除构建目录
  plugins: [
    // 常用插件1 → 清除构建目录, 不删除静态文件
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    // 常用插件2 → 生成HTML ( watch 模式, 构建js 文件之后, 自动删除html 后不会自动构建, 要配置清除插件不要删静态文件 )
    new HtmlWebpackPlugin({
      template: "public/index.html"
    })
  ],
  output: {
    filename: "main.js",
    // 解析出`dist` 的绝对路径
    path: path.resolve(__dirname, "dist")
  }
};
