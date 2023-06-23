import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CalendarComponent from '../calendar/CalendarComponent';

import { getRandomName } from '../../helpers/getRandomName';

import {
  BsFillArrowLeftCircleFill,
  BsFillInfoCircleFill,
} from 'react-icons/bs';

import { NavLink, useNavigate } from 'react-router-dom';

import './newBookings.css';

import { PROFESSIONALS } from '../../constants/index';
import { addItem } from '../../features/bookings/bookingsSlice';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotificationComponent from '../notification/NotificationComponent';

const NewBookingComponent = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div className='bookings__container'>
      <CalendarComponent value={value} onChange={onChange} />
      <BookingForm />
      <ToastContainer />
    </div>
  );
};

const BookingForm = () => {
  return (
    <div className='form__container'>
      <div className='form__header'>
        <div className='form__btn-container'>
          <NavLink className='form__btn-left color-attention' to={'/bookings'}>
            <BsFillArrowLeftCircleFill size={36} style={{ color: '#417B7D' }} />
            <span>Back</span>
          </NavLink>
        </div>
        <div>
          <h1 className='form__title font_weight-semi_bold color-primary'>
            New Booking
          </h1>
        </div>
      </div>
      <div className='form__fields'>
        <MyForm />
      </div>
    </div>
  );
};

const MyForm = () => {
  const currentBooking = useSelector((state) => state.bookings.currentBooking);
  const [professional, setProfessional] = useState(currentBooking?.prof || '');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [voucher, setVoucher] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const createDate = (date, time) => {
    const [year, month, day] = date.split('-');
    const [hours, minutes] = time.split(':');

    return new Date(year, month - 1, day, hours, minutes);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addItem({
        name: getRandomName(),
        prof: professional,
        date: createDate(date, time).toString(),
      })
    );
    toast.success(
      <NotificationComponent message='Booking added successfully!' />,
      {
        autoClose: 1000,
      }
    );
    setTimeout(() => {
      navigate('/bookings');
    }, 2000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='color-primary font_weight-semi_bold font_size-s'
    >
      <div className='form-row'>
        <label htmlFor='professional'>Professional:</label>
        <select
          id='professional'
          value={professional}
          onChange={(e) => setProfessional(e.target.value)}
          required
        >
          <option value=''>Select a professional</option>
          {PROFESSIONALS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className='form-row'>
        <label htmlFor='date'>Date:</label>
        <input
          required
          type='date'
          id='date'
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div className='form-row'>
        <label htmlFor='time'>Time:</label>
        <input
          required
          type='time'
          id='time'
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>

      <div className='form-row form__voucher'>
        <label htmlFor='voucher'>Voucher:</label>
        <input
          required
          className='form__voucher-input'
          type='text'
          id='voucher'
          value={voucher}
          maxLength={8}
          onChange={(e) => setVoucher(e.target.value)}
        />
        <div className='form__hint color-primary'>
          <BsFillInfoCircleFill size={24} />
          <span className='font_size-xxs font_weight-extra-light'>
            Use your company <b>voucher</b>.
          </span>
        </div>
      </div>

      <div className='form__btn-container'>
        <button
          className='form__btn bg-color-button color-secondary font_weight-semi_bold'
          type='submit'
        >
          BOOK
        </button>
      </div>
    </form>
  );
};

export default NewBookingComponent;
