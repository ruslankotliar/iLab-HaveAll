import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { SLIDER_DATA } from '../../constants';

import { BsFillPersonFill } from 'react-icons/bs';
import { AiOutlinePlus } from 'react-icons/ai';

import { NavLink } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Autoplay, Pagination } from 'swiper';

import './home.css';

const HomeComponent = () => {
  return (
    <>
      <div className='swiper-container'>
        <Swiper
          loop={true}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay, Pagination]}
          className='mySwiper'
        >
          {SLIDER_DATA.map((slide) => (
            <SwiperSlide>
              <div className='mySwiper__container color-primary font_size-l font_weight-medium'>
                <img src={slide} alt='' />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='btn__container'>
        <div>
          <NavLink
            to={'/advise'}
            className='btn__item bg-color-button color-secondary'
          >
            <BsFillPersonFill size={36} />
            <span>ASK FOR HELP</span>
          </NavLink>
        </div>
        <div>
          <NavLink
            to={'/professionals'}
            className='btn__item bg-color-button color-secondary'
          >
            <AiOutlinePlus size={36} />
            <span>BOOK NOW</span>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default HomeComponent;
