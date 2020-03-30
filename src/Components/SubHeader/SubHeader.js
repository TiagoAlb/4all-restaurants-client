import React from 'react';


export default function SubHeader(props) {
    return (
        <section>
            <h1>{props.title}</h1>
            <p>{props.subtitle ? props.subtitle : ''}</p>
        </section>
    )
}