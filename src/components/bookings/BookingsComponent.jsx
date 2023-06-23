import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import 'react-calendar/dist/Calendar.css';
import './bookings.css';

import { NavLink } from 'react-router-dom';
import { AiOutlinePlus } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { BiTimeFive } from 'react-icons/bi';
import CalendarComponent from '../calendar/CalendarComponent';

const BookingsComponent = () => {
  const [value, onChange] = useState(new Date());
  const [todayBooking, setTodayBooking] = useState(null);
  const bookings = useSelector((state) => state.bookings.bookings);
  const { pastBookings, currentBookings } = bookings.reduce(
    (acc, current) => {
      // Convert the string date to a date-only representation
      const stringDateTimestamp = new Date(current.date)
        .toISOString()
        .split('T')[0];

      // Convert the actual date to a date-only representation
      const actualDateTimestamp = value.toISOString().split('T')[0];

      if (stringDateTimestamp < actualDateTimestamp) {
        return { ...acc, pastBookings: [...acc.pastBookings, current] };
      } else if (stringDateTimestamp > actualDateTimestamp) {
        return { ...acc, currentBookings: [...acc.currentBookings, current] };
      } else {
        if (!todayBooking) setTodayBooking(current);
        console.log(current);
        return { ...acc, currentBookings: [...acc.currentBookings, current] };
      }
    },
    { pastBookings: [], currentBookings: [] }
  );
  const dispatch = useDispatch();

  return (
    <div className='bookings__container'>
      <CalendarComponent
        value={value}
        onChange={onChange}
        todayBooking={todayBooking}
      />
      <BookingsView
        pastBookings={pastBookings}
        currentBookings={currentBookings}
      />
    </div>
  );
};

const BookingsView = ({ pastBookings, currentBookings }) => {
  return (
    <div className='bookings__data-container'>
      <div className='bookings__header'>
        <NavLink
          to={'/bookings/new'}
          className='btn__item bg-color-button color-secondary'
        >
          <AiOutlinePlus size={36} />
          <span>BOOK NOW</span>
        </NavLink>
      </div>
      <div className='bookings__current'>
        <h1 className='font_weight-semi_bold color-attention font_size-l'>
          Current Bookings:
        </h1>
        <div>
          {currentBookings.map((booking) => (
            <div className='booking__container font_weight-medium color-primary font_size-m bg-color-secondary shadow'>
              <div className='booking__item'>
                <BsFillPersonFill size={36} />
                <span>{booking.name}</span>
              </div>
              <div className='booking__item'>
                <span>{booking.prof}</span>
              </div>
              <div className='booking__item'>
                <BiTimeFive size={36} />
                <span>{booking.date.toString().slice(0, 21)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='bookings__past'>
        <h1 className='font_weight-semi_bold color-attention font_size-l'>
          Past Bookings:
        </h1>
        <div>
          {pastBookings.map((booking) => (
            <div className='booking__container font_weight-medium color-primary font_size-m bg-color-secondary shadow'>
              <div className='booking__item'>
                <BsFillPersonFill size={36} />
                <span>{booking.name}</span>
              </div>
              <div className='booking__item'>
                <span>{booking.prof}</span>
              </div>
              <div className='booking__item'>
                <BiTimeFive size={36} />
                <span>{booking.date.toString().slice(0, 21)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookingsComponent;
