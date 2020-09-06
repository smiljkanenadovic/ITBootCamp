import React from 'react';
import Emoji from './Emoji';
import Description from './Description';

const Card = ({description, url}) => {
    return (
        <div>
            <Emoji url={url}/>
            <Description description = {description}/>
        </div>
    )
}

export default Card