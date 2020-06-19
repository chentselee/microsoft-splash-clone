import React from "react";
import "./Footer.scss";
// @ts-ignore
import globe from "../../public/icons/zondicons/globe.svg";

interface FooterSectionProps {
  title: string;
  links: {
    name: string;
    href: string;
  }[];
}

export interface FooterProps {
  footerSectionProps: FooterSectionProps[];
}

const Footer: React.FC<FooterProps> = ({ footerSectionProps }) => {
  const FooterSection: React.FC<FooterSectionProps> = ({ title, links }) => {
    return (
      <article className="footer-section">
        <h3 className="footer-title">{title}</h3>
        {links.map((link) => (
          <a className="footer-link" href={link.href}>
            {link.name}
          </a>
        ))}
      </article>
    );
  };

  return (
    <footer className="footer">
      <main className="footer-body">
        {footerSectionProps.map((section) => (
          <FooterSection {...section} />
        ))}
      </main>
      <footer className="footer-footer">
        <section className="footer-language">
          <a href="#!">
            <img src={globe} alt="globe icon" />
            <span>中文(台灣)</span>
          </a>
        </section>
        <section className="footer-copyright">
          {[
            "連絡 Microsoft",
            "隱私權聲明",
            "使用規定",
            "商標",
            "有關我們的廣告訊息",
          ].map((link) => (
            <a href="#!">{link}</a>
          ))}
          <span>© Microsoft Splash Clone 2020</span>
        </section>
      </footer>
    </footer>
  );
};

export default Footer;
