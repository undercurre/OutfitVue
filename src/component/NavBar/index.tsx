// components/NavBar/index.jsx
import { View, Text } from "@tarojs/components";
import { getNavBarHeight } from "../../utils/navBar";

export default function NavBar({
  title,
  backgroundColor = "#fff",
  showBack = true,
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
      {showBack && <Text className="back-icon">←</Text>}
      <Text className="title">{title}</Text>
    </View>
  );
}
