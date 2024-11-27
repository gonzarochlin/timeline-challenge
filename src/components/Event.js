import React, { useState } from 'react';

const Event = ({ event, startIndex, endIndex }) => {
    return (
        <div
            className='event'
            style={{
                gridColumn: `${startIndex} / ${endIndex}`,
                backgroundColor: `hsl(${event.id * 50 % 360}, 70%, 50%)`,// Assign dynamic color
            }}
        >
            {event.id} - {event.name}
        </div>
    )
};

export default Event;