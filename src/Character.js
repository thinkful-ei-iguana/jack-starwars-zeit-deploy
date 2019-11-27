import React from 'react';

export default function Character (props){
    const {name} = props
        return(
            <div className='character'>
                <li>{name}</li>
            </div>
        )
}