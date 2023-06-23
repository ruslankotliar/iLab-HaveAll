import React from 'react';
import './login.css';
import logo from '../../images/HA-Logo-BGtransparent.png';
import { useNavigate } from 'react-router-dom';

const LoginComponent = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate('/home');
  };

  return (
    <div className='container bg-color-primary'>
      <div className='logo_container'>
        <div className='logo'>
          <img className='logo__img' src={logo} alt='' />
        </div>
        <div className='form font_weight-semi_bold color-secondary font_size-m'>
          <form onSubmit={handleSubmit}>
            <div className='form__input'>
              <label htmlFor='email'>Email:</label>
              <input
                className='form__field font_weight-medium color-primary font_size-m'
                type='email'
                id='email'
                required
              />
            </div>
            <div className='form__input'>
              <label htmlFor='password'>Password:</label>
              <input
                className='form__field font_weight-medium color-primary font_size-m'
                type='password'
                id='password'
                required
              />
            </div>
            <div className='form__btn_container'>
              <button
                className='form__btn bg-color-attention color-secondary font_weight-semi_bold'
                type='submit'
              >
                LOGIN
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
