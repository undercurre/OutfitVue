// utils/navBar.js
import Taro from "@tarojs/taro";

export const getNavBarHeight = () => {
  const sysInfo = Taro.getSystemInfoSync();
  const menuInfo = Taro.getMenuButtonBoundingClientRect();
  // 导航栏总高度 = 状态栏高度 + 胶囊高度 + 上下间距
  const height =
    (menuInfo.top - (sysInfo.statusBarHeight || 44)) * 2 + menuInfo.height;
  return {
    statusBarHeight: sysInfo.statusBarHeight, // 状态栏高度
    navBarHeight: height, // 导航栏总高度:cite[7]:cite[8]
  };
};
