// components/NavBar/index.jsx
import { View, Text } from "@tarojs/components";
import { getNavBarHeight } from "../../utils/navBar";
import { AtIcon } from "taro-ui";

export default function NavBar({
  title,
  backgroundColor = "#fff",
  showBack = true,
}: {
  title?: string; // 添加类型定义并设为可选
  backgroundColor?: string;
  showBack?: boolean;
}) {
  const { statusBarHeight, navBarHeight } = getNavBarHeight();

  return (
    <View
      className="custom-navbar"
      style={{
        paddingTop: `${statusBarHeight}px`,
        height: `${navBarHeight}px`,
        backgroundColor,
      }}
    >
      {showBack && (
        <AtIcon value="chevron-left" size="30" color="#000"></AtIcon>
      )}
      {title && <Text className="title">{title}</Text>}
    </View>
  );
}
