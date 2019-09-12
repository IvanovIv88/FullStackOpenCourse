import React from 'react';
import Part from './Part';

const Content = ({parts}) => {
    return parts ? parts.map(part => <Part key={part.id} part={part.name} exercises={part.exercises} />) : false;
}

export default Content;
