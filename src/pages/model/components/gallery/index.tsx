import React from "react";
import { Text, View } from "@tarojs/components";
import "./index.scss";
import ModelCard from "../card";

export type Model = {
  id: number;
  name: string;
  image: string;
};

interface GalleryProps {
  models: Array<Model>;
}

const Gallery: React.FC<GalleryProps> = ({ models }) => {
  return (
    <View className="list">
      {models.map((model) => (
        <ModelCard key={model.id} image={model.image} name={model.name} />
      ))}
    </View>
  );
};

export default Gallery;
