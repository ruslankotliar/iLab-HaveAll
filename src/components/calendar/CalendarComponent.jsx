import React from 'react';

import Calendar from 'react-calendar';

import { useLocation } from 'react-router-dom';

const CalendarComponent = ({ value, onChange, todayBooking: booking }) => {
  const location = useLocation();

  return (
    <div className='bookings__calendar-container shadow'>
      {location.pathname === '/bookings' && (
        <h1 className='font_weight-semi_bold color-primary'>My Bookings</h1>
      )}
      <Calendar onChange={onChange} value={value} />
      {booking && (
        <div className='bookings__today font_size-s'>
          <span className='color-attention'>Today:</span>
          <div className='bookings__today-info font_weight-extra-light'>
            <div>
              <p>{booking.date.toString().slice(0, 15)}</p>
            </div>
            <div className='bookings__info--right'>
              <p>{booking.date.toString().slice(16, 21)}</p>
            </div>
            <div>
              <p>{booking.name}</p>
            </div>
            <div className='bookings__info--right'>
              <p>{booking.prof}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarComponent;
