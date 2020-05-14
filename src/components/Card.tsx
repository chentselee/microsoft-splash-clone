import React from 'react'

export interface CardProps {
    data: {
        image?: string;
        title: string;
        text: string;
        links?: {
            name: string;
            href?: string;
        }[];
    }
}

const Card = (props: CardProps) => {
    const { data: { image, title, text, links } } = props;
    return (
        <article className="card">
            <header>
                <img src={image} />
            </header>
            <main>
                <h3>{title}</h3>
                <p>{text}</p>
            </main>
            <footer>
                {links ? links.map(link => <a href={link.href}><span>{link.name}</span></a>) : ''}
            </footer>
        </article>
    )
}

export default Card
