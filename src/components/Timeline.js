import React, { useState } from 'react';
import './Timeline.css';
import Event from './Event';
import { getDateRange, getMaxDate, getMinDate } from '../utils/helper';

const Timeline = ({ events, onEditItem }) => {
    const [zoomLevel, setZoomLevel] = useState(1);
    const [eventEditing, setEventEditing] = useState();

    const calculateLanes = (events) => {
        const sortedEvents = [...events].sort(
            (a, b) => new Date(a.start) - new Date(b.start)
        );
        const lanes = [];

        sortedEvents.forEach((event) => {
            let placed = false;

            for (let i = 0; i < lanes.length; i++) {
                if (!lanes[i].some((ev) => new Date(ev.end) >= new Date(event.start))) {
                    lanes[i].push(event);
                    placed = true;
                    break;
                }
            }

            if (!placed) {
                lanes.push([event]);
            }
        });

        return lanes;
    };


    const minDate = getMinDate(events);
    const maxDate = getMaxDate(events);

    const allDates = getDateRange(minDate, maxDate);
    const gridTemplateColumns = `repeat(${allDates.length}, ${100 * zoomLevel}px)`;

    const lanes = calculateLanes(events);

    return (
        <div>
            <div className='timeline'>
                <div
                    className='date-row'
                    style={{
                        gridTemplateColumns,
                    }}
                >
                    {allDates.map((date) => (
                        <div key={date} className='date'>
                            {date}
                        </div>
                    ))}
                </div>

                {lanes.map((lane, laneIndex) => (
                    <div
                        key={laneIndex}
                        className='lane'
                        style={{
                            gridTemplateColumns,
                        }}
                    >
                        {lane.map((event) => {
                            const startIndex = allDates.indexOf(event.start) + 1;
                            const endIndex = allDates.indexOf(event.end) + 2;

                            return (
                                <Event
                                    key={event.id}
                                    event={event}
                                    startIndex={startIndex}
                                    endIndex={endIndex}
                                    onEditItem={onEditItem}
                                    isEditing={eventEditing === event.id}
                                    handleOnClick={setEventEditing}
                                />
                            );
                        })}
                    </div>
                ))}
            </div>

            <div className='controls'>
                <button onClick={() => setZoomLevel(zoomLevel * 1.2)}>Zoom In</button>
                <button onClick={() => setZoomLevel(zoomLevel / 1.2)}>Zoom Out</button>
            </div>
        </div>
    );
};

export default Timeline;
