import React from 'react'

export interface BuyingLinkProps {
    image: string;
    text: string;
};

interface BuyingLinksProps {
    data: BuyingLinkProps[]
}

const BuyingLinks = (props: BuyingLinksProps) => {
    const { data } = props;
    const BuyingLink = ({ image, text }: BuyingLinkProps) => {
        return (
            <li className="buying-link">
                <img src={image} alt={text}/>
                <h3>{text}</h3>
            </li>
        );
    };

    return (
        <ul className="buying-links">
            {data.map((item, index) => <BuyingLink key={index} image={item.image} text={item.text} />)}
        </ul>
    )
}

export default BuyingLinks
