import React from 'react';
import './layout.css';
import { AiOutlineHome } from 'react-icons/ai';
import logo from '../../images/HA-Logo-BGtransparent.png';

import { NavLink, useLocation, useMatch } from 'react-router-dom';

const LayoutComponent = ({ children }) => {
  return (
    <div className='page__container'>
      <HeaderComponent />
      <div className='page__content'>{children}</div>
      <FooterComponent />
    </div>
  );
};

const HeaderComponent = () => {
  const { pathname } = useLocation();
  const profMatch = useMatch('/professionals');
  const adviseMatch = useMatch('/advise');
  const bookingsMatch = useMatch('/bookings');

  return (
    <>
      {pathname.includes('iLab-HaveAll') ? (
        <></>
      ) : (
        <div className='header_container bg-color-secondary'>
          <div className='brand_container'>
            <div className='brand_container__item font_size-m'>
              <NavLink
                to='/home'
                className='brand_container__btn color-attention'
              >
                <AiOutlineHome size={36} />
                <span>Home</span>
              </NavLink>
            </div>
            <div className='brand_container__item brand__logo'>
              <img src={logo} className='brand_container__img' alt='' />
            </div>
            <div className='brand_container__item'>
              <NavLink
                to={'/iLab-HaveAll'}
                className=' brand_container__btn bg-color-attention color-secondary font_weight-semi_bold'
              >
                <div className='scale'>LOGOUT</div>
              </NavLink>
            </div>
          </div>
          <div className='nav_container'>
            <div className='nav_container__box font_size-m color-secondary'>
              <NavLink
                className={
                  'color-secondary nav_container__item' +
                  ' ' +
                  (profMatch ? 'bg-color-primary' : 'bg-color-attention')
                }
                to={'/professionals'}
              >
                <div className='scale'>PROFESSIONALS</div>
              </NavLink>
              <NavLink
                className={
                  'color-secondary nav_container__item scale shadow font_size-l' +
                  ' ' +
                  (adviseMatch ? 'bg-color-primary' : 'bg-color-attention')
                }
                to={'/advise'}
              >
                ADVISE ME
              </NavLink>
              <NavLink
                className={
                  'color-secondary nav_container__item' +
                  ' ' +
                  (bookingsMatch ? 'bg-color-primary' : 'bg-color-attention')
                }
                to={'/bookings'}
              >
                <div className='scale'>MY BOOKINGS</div>
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const FooterComponent = () => {
  return (
    <div className='footer_container bg-color-attention font_size-s color-secondary'>
      <NavLink className='footer_container__btn color-secondary' to={'/about'}>
        ABOUT US
      </NavLink>
      <div>(C) HaveAll 2023, FH St. Pölten</div>
    </div>
  );
};

export default LayoutComponent;
