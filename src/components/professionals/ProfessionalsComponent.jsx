import React, { useEffect, useState } from 'react';

import { BsStarFill } from 'react-icons/bs';
import { AiOutlinePlus } from 'react-icons/ai';
import { MdLocationOn } from 'react-icons/md';
import { GiAchievement } from 'react-icons/gi';

import { LOCATIONS, PROFESSIONALS, AVATARS } from '../../constants/index';

import './professionals.css';
import { getRandomName } from '../../helpers/getRandomName';

import { addItem, currentItem } from '../../features/bookings/bookingsSlice';
import { useDispatch } from 'react-redux';

import { NavLink } from 'react-router-dom';

const fakeProf = Array.from({ length: 30 }, (_, index) => ({
  id: Math.random(),
  name: getRandomName(),
  avatar: AVATARS[Math.floor(Math.random() * AVATARS.length)],
  prof: PROFESSIONALS[Math.floor(Math.random() * PROFESSIONALS.length)],
  location: LOCATIONS[Math.floor(Math.random() * LOCATIONS.length)],
  rating: Math.floor(Math.random() * 5) + 1, // Generates a random integer between 0 and 5
}));

const ProfessionalsComponent = () => {
  const [profession, setProfession] = useState('');
  const [location, setLocation] = useState('');
  const [name, setName] = useState('');
  const [professionals, setProfessionals] = useState(fakeProf);

  const filterData = () => {
    return (professionals.length ? professionals : fakeProf).filter(
      (professional) => {
        const p = profession === '' || professional.prof === profession;
        const l = location === '' || professional.location === location;
        const n =
          name === '' ||
          professional.name.toLowerCase().includes(name.toLowerCase());

        return p & l & n;
      }
    );
  };

  useEffect(() => {
    setProfessionals(filterData());
  }, [profession, location, name]);

  return (
    <div className='prof__container font_weight-semi_bold color-primary'>
      <div className='prof__filters shadow'>
        <h1 className='prof__title'>Professionals</h1>
        <FilterForm
          profession={profession}
          setProfession={setProfession}
          location={location}
          setLocation={setLocation}
          name={name}
          setName={setName}
        />
      </div>
      <ProfessionalsList professionals={professionals} />
    </div>
  );
};

const ProfessionalsList = ({ professionals }) => {
  const dispatch = useDispatch();
  return (
    <div className='professionals-list-content'>
      {!professionals.length ? (
        <div className='funny-gif'>
          <h1>No items found.</h1>
          <iframe
            title='Funny Gif'
            src='https://giphy.com/embed/3ov9jLsBqPh6rjuHuM'
            width='100%'
            height='100%'
            frameBorder='0'
            allowFullScreen
          />
          <h2>Try to change the filtering!</h2>
        </div>
      ) : (
        professionals.map((professional, index) => (
          <div className='professional-item bg-color-secondary' key={index}>
            <div className='professional-item-left'>
              <img
                src={professional.avatar}
                alt='Profile'
                className='profile-image'
              />
            </div>
            <div className='professional-item-details'>
              <div className='professional-item-detail'>
                <span
                  className='
              font_size-xs font_weight-medium'
                >
                  Name
                </span>
                <p className='font_size-m font_weight-semi_bold'>
                  {professional.name}
                </p>
              </div>
              <div className='professional-item-detail detail-with-icon'>
                <MdLocationOn size={48} />
                <div className='title-with-icon'>
                  <span className='location-icon font_size-xs font_weight-medium'>
                    Location
                  </span>
                  <p className='font_size-m font_weight-semi_bold'>
                    {professional.location}
                  </p>
                </div>
              </div>
              <div className='professional-item-detail'>
                <span
                  className='
              font_size-xs font_weight-medium'
                >
                  Profession
                </span>
                <p className='font_size-m font_weight-semi_bold'>
                  {professional.prof}
                </p>
              </div>
              <div className='professional-item-detail detail-with-icon'>
                <GiAchievement size={48} />
                <div className='title-with-icon'>
                  <span className='rating-icon font_size-xs font_weight-medium'>
                    Rating
                  </span>
                  <p className='font_size-m font_weight-semi_bold'>
                    {Array.from({ length: professional.rating }, (_, index) => (
                      <BsStarFill size={18} key={index} />
                    ))}
                  </p>
                </div>
              </div>
            </div>
            <div className='professional-item-footer'>
              <NavLink
                to={'/bookings/new'}
                onClick={() => dispatch(currentItem(professional))}
                className='btn__item book-btn font_weight-medium color-secondary bg-color-button'
              >
                <AiOutlinePlus size={24} className='plus-icon' />
                <div className='btn__book-container'>
                  <span>BOOK</span>
                  <span>NOW</span>
                </div>
              </NavLink>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

const FilterForm = ({
  profession,
  setProfession,
  location,
  setLocation,
  name,
  setName,
}) => {
  const handleProfessionChange = (event) => {
    setProfession(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div className='filter-container font_size-xs'>
      <div className='filter-row'>
        <label htmlFor='profession' className='filter-label'>
          Profession:
        </label>
        <select
          id='profession'
          className='filter-select'
          value={profession}
          onChange={handleProfessionChange}
        >
          <option value=''>-- Select profession --</option>
          {PROFESSIONALS.map((prof) => (
            <option key={prof} value={prof}>
              {prof}
            </option>
          ))}
        </select>
      </div>
      <div className='filter-row'>
        <label htmlFor='location' className='filter-label'>
          Location:
        </label>
        <select
          id='location'
          className='filter-select'
          value={location}
          onChange={handleLocationChange}
        >
          <option value=''>-- Select location --</option>
          {LOCATIONS.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>
      </div>
      <div className='filter-row'>
        <label htmlFor='name' className='filter-label'>
          Name:
        </label>
        <input
          type='text'
          id='name'
          className='filter-input'
          value={name}
          onChange={handleNameChange}
        />
      </div>
    </div>
  );
};

export default ProfessionalsComponent;
