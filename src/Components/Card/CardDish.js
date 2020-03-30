import React from 'react';


export default function CardDish(props) {
    const prop = props.prop;
    return (
        <div className="card-dish">
            <div id="card-dish-content">
                <div id="title">
                    <span>{prop.name}</span>
                    <span>{prop.price ? 'R$ ' + prop.price : 'R$ 0,00'}</span>
                </div>
                <p>{prop.description ? prop.description : 'Sem descrição'}
                </p>
            </div>
        </div>
    )
}