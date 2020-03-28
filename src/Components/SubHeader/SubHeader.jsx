import React from 'react';


export default function SubHeader(props) {
    return (
        <div className="sub_header">
            <div>
                <h1>{props.title}</h1>
                <p>{props.subtitle ? props.subtitle : ''}</p>
            </div>
        </div>
    )
}