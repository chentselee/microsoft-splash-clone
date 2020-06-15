import React from "react";
import "./BuyingLinks.scss";

interface BuyingLinkProps {
  image: string;
  text: string;
}

export interface BuyingLinksProps {
  buyingLinks: BuyingLinkProps[];
}

const BuyingLinks: React.FC<BuyingLinksProps> = ({ buyingLinks }) => {
  const BuyingLink: React.FC<BuyingLinkProps> = ({ image, text }) => {
    return (
      <li className="buying-link">
        <img className="buying-link-icon" src={image} alt={text} />
        <h3 className="buying-link-text">{text}</h3>
      </li>
    );
  };

  return (
    <ul className="buying-links">
      {buyingLinks.map((item, index) => (
        <BuyingLink key={index} image={item.image} text={item.text} />
      ))}
    </ul>
  );
};

export default BuyingLinks;
