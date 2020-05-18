import React from "react";
import "./Card.scss";

export interface CardProps {
  data: {
    image?: string;
    title: string;
    text: string;
    links?: {
      name: string;
      href?: string;
    }[];
  };
}

const Card = (props: CardProps) => {
  const {
    data: { image, title, text, links },
  } = props;
  return (
    <article className="card">
      <header className="card-header">
        <img className="card-image" src={image} />
      </header>
      <main className="card-body">
        <h3>{title}</h3>
        <p>{text}</p>
      </main>
      <footer className="card-footer">
        {links
          ? links.map((link) => (
              <a className="card-link" href={link.href}>
                <span>{link.name}</span>
              </a>
            ))
          : ""}
      </footer>
    </article>
  );
};

export default Card;
