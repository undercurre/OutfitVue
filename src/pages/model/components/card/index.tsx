import React from "react";

const ModelCard = ({ imageUrl, name, height, measurements }) => {
  return (
    <div className="model-card">
      {/* 图片部分 */}
      <div className="model-image-container">
        <img
          src={
            imageUrl || "https://via.placeholder.com/300x400?text=Model+Image"
          }
          alt={`${name}'s portfolio`}
          className="model-image"
          onError={(e) => {
            e.target.src =
              "https://via.placeholder.com/300x400?text=Image+Error";
          }}
        />
        {height && <span className="model-height-badge">{height}cm</span>}
      </div>

      {/* 信息部分 */}
      <div className="model-info">
        <h3 className="model-name">{name}</h3>

        {measurements && (
          <div className="model-measurements">
            <span>{measurements.bust}</span>
            <span>{measurements.waist}</span>
            <span>{measurements.hips}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModelCard;
