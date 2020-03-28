import React from 'react';


export default function CardPlace(props) {
    return (
        <div className="card-place">
            <div>
                <h3>{props.prop.name}</h3>
                <p>{props.prop.dishes_count > 0 ?
                    props.prop.dishes_count > 1 ?
                        (props.prop.dishes_count + ' pratos cadastraos')
                        : (props.prop.dishes_count + ' prato cadastrado')
                    : 'Nenhum prato cadastrado'}</p>
            </div>
        </div>
    )
}