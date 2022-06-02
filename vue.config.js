const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  chainWebpack: (webpackConfig) => {
    webpackConfig.entry("app").clear();
    webpackConfig.entry("app").add("./src/main.tsx");
  },
});
