import React, { useState } from 'react';
import './Event.css';

const Event = ({ event, startIndex, endIndex, onEditItem, isEditing, handleOnClick }) => {
    const [name, setName] = useState(event.name);

    const handleKeyDown = (ev) => {
        if (ev.key === 'Enter') {
            onEditItem(event.id, name);
            handleOnClick(null);
        }
    }

    return (
        <div
            className='event'
            style={{
                gridColumn: `${startIndex} / ${endIndex}`,
                backgroundColor: `hsl(${event.id * 50 % 360}, 70%, 50%)`,// Assign dynamic color
            }}
            onClick={() => handleOnClick(event.id)}
        >
            {
                isEditing ?
                    <input
                        className='event-input'
                        value={name}
                        onChange={(ev) => setName(ev.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                    :
                    <>{event.id} - {event.name}</>
            }

        </div>
    )
};

export default Event;