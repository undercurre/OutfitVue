export default defineAppConfig({
  pages: ["pages/model/index", "pages/clothes/index", "pages/collect/index"],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
    navigationStyle: "custom",
  },
  tabBar: {
    custom: true,
    color: "#999",
    selectedColor: "#ff0000",
    backgroundColor: "#fff",
    list: [
      {
        pagePath: "pages/model/index",
        text: "model",
      },
      {
        pagePath: "pages/clothes/index",
        text: "clothes",
      },
      {
        pagePath: "pages/collect/index",
        text: "collect",
      },
    ],
  },
});
