import React from "react";
import { CoverImage, Text, View } from "@tarojs/components";
import "./index.scss";

interface ModelCardProps {
  key: number;
  image: string;
  name: string;
}

const ModelCard: React.FC<ModelCardProps> = ({ key, image, name }) => {
  return (
    <View className="container">
      <CoverImage src={image} />
      <Text>{name}</Text>
    </View>
  );
};

export default ModelCard;
