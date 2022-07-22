import React from 'react';
import './Events.css'
const Events = () => {
    return (
        <div className='events'>
            <h2 className="events__header">Upcoming Events</h2>
            <div className="events--container">
                <div className="events__list">
                    <img src="" alt="" className="event__image" />
                    <div className="event__information"></div>
                </div>
            </div>
        </div>
    );
}

export default Events;
