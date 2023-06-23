import React from 'react';

import Calendar from 'react-calendar';

import { useLocation } from 'react-router-dom';

const CalendarComponent = ({ value, onChange, todayBooking: booking }) => {
  const location = useLocation();
  const bookingsPage = location.pathname === '/bookings';

  return (
    <div
      className={
        (bookingsPage ? 'justify-start' : 'justify-center') +
        ' bookings__calendar-container shadow'
      }
    >
      {bookingsPage && (
        <h1 className='font_weight-semi_bold color-primary'>My Bookings</h1>
      )}
      <Calendar onChange={onChange} value={value} />
      <div className='bookings__today font_size-s'>
        <span className='color-attention'>Today:</span>
        {booking && (
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
        )}
      </div>
    </div>
  );
};

export default CalendarComponent;
