// components/BasePage.jsx
import { View } from "@tarojs/components";
import NavBar from "../NavBar";

export default function BasePage({
  children,
  title,
  navProps,
}: {
  children: React.ReactNode;
  title?: string;
  navProps?: {
    backgroundColor?: string;
    showBack?: boolean;
  };
}) {
  return (
    <View className="base-page">
      <NavBar title={title} {...navProps} />
      <View
        className="content"
        style={{
          paddingTop: "var(--nav-height)", // 通过CSS变量避免内容遮挡
        }}
      >
        {children}
      </View>
    </View>
  );
}
