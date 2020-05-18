import React from "react";
import Card, { CardProps } from "./Card";
import "./BigCard.scss";

const BigCard = (props: CardProps) => {
  return (
    <div className="big-card">
      <Card data={props.data} />
    </div>
  );
};

export default BigCard;
