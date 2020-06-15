import React from "react";
import Card, { CardProps } from "./Card";
import "./BigCard.scss";

const BigCard: React.FC<CardProps> = (props) => {
  return (
    <div className="big-card">
      <Card {...props} />
    </div>
  );
};

export default BigCard;
