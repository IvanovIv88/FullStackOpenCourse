import React from 'react'
import './Notification.css';

const Notification = ({ message, color }) => {
    if (message === null) {
        return null
    }

    return (
        <div className='error' style={{color: `${color}`}}>
            { message }
        </div >
    )
}

export default Notification