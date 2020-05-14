import React from 'react'
import Card, { CardProps } from './Card';

const BigCard = (props: CardProps) => {
    return (
        <div className="big-card">
            <Card data={props.data} />
        </div>
    )
}

export default BigCard
