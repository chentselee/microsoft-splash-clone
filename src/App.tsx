import React from "react";
import "./style.scss";
import Navbar from "./components/Navbar";
import Carousel, { CarouselProps } from "./components/Carousel";
import BuyingLinks, { BuyingLinksProps } from "./components/BuyingLinks";
import Card, { CardProps } from "./components/Card";
import BigCard from "./components/BigCard";
import Footer from "./components/Footer";
// @ts-ignore
import image1 from "../public/images/andrew-mantarro-ynVYoNqnCys-unsplash.jpg";
// @ts-ignore
import image2 from "../public/images/tadas-sar-T01GZhBSyMQ-unsplash.jpg";
// @ts-ignore
import image3 from "../public/images/windows-139Uv2t0Ez0-unsplash.jpg";
// @ts-ignore
import tile from "../public/icons/zondicons/view-tile.svg";
// @ts-ignore
import tablet from "../public/icons/zondicons/tablet.svg";
// @ts-ignore
import facebook from "../public/icons/social-media/facebook.svg";
// @ts-ignore
import youtube from "../public/icons/social-media/youtube.svg";

const carouselProps: CarouselProps = {
  slides: [
    {
      image: image1,
      content: (
        <>
          <h1>全新 Microsoft 365</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            exercitationem ut optio, voluptas omnis eveniet.
          </p>
          <div className="carousel-main-buttons">
            <button className="button button-primary">
              <span>適用於家庭</span>
            </button>
            <button className="button button-secondary">
              <span>適用於商務</span>
            </button>
          </div>
        </>
      ),
    },
    {
      image: image2,
      content: (
        <>
          <h1>使用 Microsoft Teams 遠距工作</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
            aspernatur.
          </p>
          <div className="carousel-main-buttons">
            <button className="button button-primary">
              <span>深入瞭解</span>
            </button>
          </div>
        </>
      ),
    },
  ],
};

const buyingLinksProps: BuyingLinksProps = {
  buyingLinks: [
    {
      image: tile,
      text: "選擇您的 Microsoft 365",
    },
    {
      image: tablet,
      text: "選購 Surface 裝置",
    },
    {
      image: tile,
      text: "選購 Windows 10",
    },
  ],
};

const cardsProps1: CardProps[] = [
  {
    image: image3,
    title: "這是您的 365",
    text: "Lorem ipsum dolor sit amet.",
    links: [
      {
        name: "最多可供 6 人使用",
        href: "#!",
      },
      {
        name: "適合 1 人使用",
        href: "#!",
      },
    ],
  },
  {
    image: image3,
    title: "Xbox One X",
    text: "Lorem ipsum dolor sit amet.",
    links: [
      {
        name: "立即選購",
        href: "#!",
      },
    ],
  },
  {
    image: image3,
    title: "Surface Laptop 3",
    text: "Lorem ipsum dolor sit amet.",
    links: [
      {
        name: "立即選購",
        href: "#!",
      },
    ],
  },
  {
    image: image3,
    title: "Surface Pro X",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, at.",
    links: [
      {
        name: "立即選購",
        href: "#!",
      },
    ],
  },
];

const bigCardProps: CardProps[] = [
  {
    image: image3,
    title: "Xbox Game Pass Ultimate",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, ratione?",
    links: [
      {
        name: "立即加入",
        href: "#!",
      },
    ],
  },
];

const cardsProps2: CardProps[] = [
  {
    image: image3,
    title: "Microsoft 365 商務版",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, soluta!",
    links: [
      {
        name: "立即選購",
        href: "#!",
      },
    ],
  },
  {
    image: image3,
    title: "認識 Surface Pro 7 商務版",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim labore distinctio necessitatibus quos perferendis error!",
    links: [
      {
        name: "立即選購",
        href: "#!",
      },
    ],
  },
  {
    image: image3,
    title: "建立線上教室",
    text:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, eius!",
    links: [
      {
        name: "深入了解",
        href: "#!",
      },
    ],
  },
  {
    image: image3,
    title: "探索 Kubernetes",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, soluta!",
    links: [
      {
        name: "開始使用",
        href: "#!",
      },
    ],
  },
];

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Carousel {...carouselProps} />
      <BuyingLinks {...buyingLinksProps} />
      <section className="cards">
        {cardsProps1.map((card) => (
          <Card {...card} />
        ))}
      </section>
      {bigCardProps.map((bigCard) => (
        <BigCard {...bigCard} />
      ))}
      <section className="cards">
        <h1 className="cards-title">適用於工作地點</h1>
        {cardsProps2.map((card) => (
          <Card {...card} />
        ))}
      </section>
      <section className="following">
        <span className="following-title">關注 Microsoft</span>
        <a href="#!">
          <img className="following-icon" src={facebook} alt="facebook icon" />
        </a>
        <a href="#!">
          <img className="following-icon" src={youtube} alt="youtube icon" />
        </a>
      </section>
      <Footer />
    </div>
  );
};

export default App;
