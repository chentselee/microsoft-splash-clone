import React from "react";
import "./BuyingLinks.scss";

export interface BuyingLinkProps {
  image: string;
  text: string;
}

interface BuyingLinksProps {
  data: BuyingLinkProps[];
}

const BuyingLinks = (props: BuyingLinksProps) => {
  const { data } = props;
  const BuyingLink = ({ image, text }: BuyingLinkProps) => {
    return (
      <li className="buying-link">
        <img className="buying-link-icon" src={image} alt={text} />
        <h3 className="buying-link-text">{text}</h3>
      </li>
    );
  };

  return (
    <ul className="buying-links">
      {data.map((item, index) => (
        <BuyingLink key={index} image={item.image} text={item.text} />
      ))}
    </ul>
  );
};

export default BuyingLinks;
