// src/components/NavBar/index.tsx
import { View, Text } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { CSSProperties, ReactNode } from "react";
import "./index.scss";
import { AtIcon } from "taro-ui";

interface INavBarProps {
  /** 导航栏标题 */
  title?: string | ReactNode;
  /** 是否显示返回按钮 */
  showBack?: boolean;
  /** 自定义返回按钮图标 */
  backIcon?: ReactNode;
  /** 自定义左侧内容 */
  leftContent?: ReactNode;
  /** 自定义右侧内容 */
  rightContent?: ReactNode;
  /** 导航栏背景颜色 */
  backgroundColor?: string;
  /** 文字颜色 */
  color?: string;
  /** 是否固定在顶部 */
  fixed?: boolean;
  /** 点击返回按钮事件 */
  onBack?: () => void;
}

const NavBar = (props: INavBarProps) => {
  const {
    title = "",
    showBack = true,
    backIcon,
    leftContent,
    rightContent,
    backgroundColor = "#000",
    color = "#000",
    fixed = true,
    onBack,
  } = props;

  // 获取系统状态栏高度
  const statusBarHeight = Taro.getSystemInfoSync().statusBarHeight || 44;
  // 小程序胶囊按钮信息
  const menuButtonInfo = Taro.getMenuButtonBoundingClientRect();
  // 导航栏总高度 = 状态栏高度 + 导航栏内容高度
  const navHeight =
    statusBarHeight +
    menuButtonInfo.height +
    (menuButtonInfo.top - statusBarHeight) * 2;

  // 导航栏样式
  const navStyle: CSSProperties = {
    backgroundColor,
    color,
    height: `${navHeight}px`,
    paddingTop: `${statusBarHeight}px`,
  };

  // 返回按钮点击处理
  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      Taro.navigateBack();
    }
  };

  return (
    <View
      className={`nav-bar ${fixed ? "nav-bar--fixed" : ""}`}
      style={navStyle}
    >
      {/* 左侧区域 */}
      <View
        className="nav-bar__left"
        style={{ height: `${menuButtonInfo.height}px` }}
      >
        {leftContent ||
          (showBack && (
            <View className="nav-bar__back" onClick={handleBack}>
              {backIcon || (
                <AtIcon value="chevron-left" size="30" color={color}></AtIcon>
              )}
            </View>
          ))}
      </View>

      {/* 标题区域 */}
      <View
        className="nav-bar__title"
        style={{ height: `${menuButtonInfo.height}px` }}
      >
        {typeof title === "string" ? (
          <Text
            className="nav-bar__title-text"
            style={{ color }}
            numberOfLines={1}
          >
            {title}
          </Text>
        ) : (
          title
        )}
      </View>

      {/* 右侧区域 */}
      <View
        className="nav-bar__right"
        style={{
          height: `${menuButtonInfo.height}px`,
          marginRight: `${menuButtonInfo.width}px`,
        }}
      >
        {rightContent}
      </View>
    </View>
  );
};

export default NavBar;
