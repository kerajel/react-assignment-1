import React from 'react';

export const UserInput = (props) => {
    return (
        <div className='UserInput UserIO'>
            <h1>This is a user input</h1>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
}

export const UserOutput = (props) => {
    return (
        <div className='UserOutput UserIO'>
            <h1>This is a user output #{props.id}</h1>
            <p>Current input name: {props.name}</p>
            <p>Paragraph #2</p>
        </div>
    )
}