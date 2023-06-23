import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';

import 'react-calendar/dist/Calendar.css';
import './bookings.css';

import { NavLink } from 'react-router-dom';
import { AiOutlinePlus, AiFillCloseCircle } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { BiTimeFive } from 'react-icons/bi';
import CalendarComponent from '../calendar/CalendarComponent';

import { removeItem } from '../../features/bookings/bookingsSlice';
import NotificationComponent from '../notification/NotificationComponent';

const BookingsComponent = () => {
  const [value, setValue] = useState(new Date());
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
        return { ...acc, currentBookings: [...acc.currentBookings, current] };
      }
    },
    { pastBookings: [], currentBookings: [] }
  );

  const bookingOnChosenDate = (value) => {
    return bookings.find((current) => {
      const stringDateTimestamp = new Date(current.date)
        .toISOString()
        .split('T')[0];

      // Convert the actual date to a date-only representation
      const actualDate = new Date(value);
      actualDate.setUTCHours(actualDate.getUTCHours() + 2);

      const actualDateTimestamp = actualDate.toISOString().split('T')[0];
      return stringDateTimestamp === actualDateTimestamp;
    });
  };

  useEffect(() => {
    const current = bookingOnChosenDate(value);
    setTodayBooking(current);
  }, [value]);

  return (
    <div className='bookings__container'>
      <CalendarComponent
        value={value}
        onChange={setValue}
        todayBooking={todayBooking}
      />
      <BookingsView
        pastBookings={pastBookings}
        currentBookings={currentBookings}
      />
      <ToastContainer />
    </div>
  );
};

const BookingsView = ({ pastBookings, currentBookings }) => {
  const dispatch = useDispatch();
  const removeBooking = (date) => {
    dispatch(removeItem(date));
    toast.success(
      <NotificationComponent message='Booking removed successfully!' />,
      {
        autoClose: 1000,
      }
    );
  };

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
      {[
        { bookings: currentBookings, title: 'Current Bookings' },
        { bookings: pastBookings, title: 'Past Bookings' },
      ].map(({ bookings, title }) => (
        <div>
          <h1 className='font_weight-semi_bold color-attention font_size-l'>
            {title}:
          </h1>
          <div>
            {bookings.map((booking) => (
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
                <div
                  onClick={() => removeBooking(booking.date)}
                  className='booking__item booking__delete'
                >
                  <AiFillCloseCircle size={24} style={{ color: 'red' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookingsComponent;
