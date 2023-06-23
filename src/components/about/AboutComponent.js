import React from 'react';
import image from '../../images/pageImage-AboutUs.jpg';
import './about.css';

const AboutComponent = () => {
  return (
    <div className='about__container bg-color-attention color-secondary'>
      <div className='about__image'>
        <img src={image} alt='Team members' className='shadow' />
      </div>
      <div className='about__text font_weight-medium font_size-s'>
        <h1 className='about__title font_size-l font_weight-semi_bold'>
          ABOUT US
        </h1>
        <p className='about__text-item'>
          HaveAll is an intermediary service developed by five students taking
          part in the iLab of the FH St. Pölten. The product is connecting
          mental health experts to employees. The therapy sessions can be given
          to the employees by their companies for free as a fringe benefit and
          can be booked easily via a booking system.
        </p>
        <p className='about__text-item'>
          The aim of the project was to find a solution which makes employees
          feel more appreciated for the work they do.
        </p>
        <p className='about__text-item'>
          We are proud to present our bookings system of HaveAll, which you are
          currently visiting.
        </p>
        <p className='about__text-item'>
          Clara, Florian, Jaime, Javier, Ruslan <br />
          Juni 2023
        </p>
      </div>
    </div>
  );
};

export default AboutComponent;
