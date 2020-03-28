import React from 'react';


export default function CardDish(props) {
    return (
        <div className="card-dish">
            <div id="card-dish-content">
                <div id="title">
                    <span>{props.prop.name}</span>
                    <span>{props.prop.price ? 'R$ ' + props.prop.price : 'R$ 0,00'}</span>
                </div>
                <div><p>{props.prop.dishes_count > 0 ?
                    props.prop.dishes_count > 1 ?
                        (props.prop.dishes_count + ' pratos cadastraos')
                        : (props.prop.dishes_count + ' prato cadastrado')
                    : 'Nenhum prato cadastrado'}</p>
                </div>
            </div>
        </div>
    )
}