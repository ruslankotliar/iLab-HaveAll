import React from 'react';
import adviseImg from '../../images/pageImage-adviceMe.jpg';
import './advise.css';
import ReactCountryFlag from 'react-country-flag';
import { LANGUAGES } from '../../constants';

const AdviseComponent = () => {
  return (
    <div className='advise__container bg-color-light color-primary'>
      <div className='advise__left'>
        <img
          className='advise__img'
          src={adviseImg}
          alt='Person does not know what to do'
        />
      </div>
      <div className='advise__right'>
        <div className='advise__questions-container font_weight-medium'>
          <h1 className='advise__question'>Do you need help?</h1>
          <h1 className='advise__question'>
            We find the fitting expert for you!
          </h1>
        </div>
        <div className='advise__hint font_weight-medium font_size-m shadow'>
          <p>Please choose your preferred language first:</p>
        </div>
        <div className='advise__languages-container'>
          {LANGUAGES.map((language) => (
            <div>
              <ReactCountryFlag
                style={{
                  fontSize: '5rem',
                  padding: '.25rem',
                  marginInline: '1rem',
                  border: '.1px solid #F4F4F4',
                  borderRadius: '50%',
                  cursor: 'pointer',
                }}
                countryCode={language}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdviseComponent;
