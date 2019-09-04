import React from 'react';
import Part from './Part';

const Content = (props) => {
    const {parts} = props;

    return parts ? parts.map((part, index) => (<Part key={index} part={part.name} exercises={part.exercises} />)) : false;
}

export default Content;
