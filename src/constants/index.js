import slider1 from '../images/slider1.png';
import slider2 from '../images/slider2.png';
import slider3 from '../images/slider3.png';
import person1 from '../images/person1.avif';
import person2 from '../images/person2.avif';
import person3 from '../images/person3.avif';
import person4 from '../images/person4.avif';
import person5 from '../images/person5.avif';
import person6 from '../images/person6.avif';
import person7 from '../images/person7.avif';

const ROUTER_KEYS = {
  LOGIN: '/login',
  HOME: '/home',
  ADVISE: '/advise',
  PROFESSIONALS: '/professionals',
  BOOKINGS: '/bookings',
  NEW_BOOKING: '/bookings/new',
};

const SLIDER_DATA = [slider1, slider2, slider3];

const LANGUAGES = ['AT', 'GB', 'UA', 'ES'];

const PROFESSIONALS = ['Psychologist', 'Coach', 'Counselor', 'Social Worker'];

const LOCATIONS = [
  'Vienna',
  'Graz',
  'Linz',
  'Salzburg',
  'Innsbruck',
  'Klagenfurt',
  'Villach',
  'Wels',
  'Sankt Pölten',
  'Dornbirn',
  'Wiener Neustadt',
  'Steyr',
  'Feldkirch',
  'Bregenz',
  'Leonding',
  'Klosterneuburg',
  'Baden',
  'Wolfsberg',
  'Leoben',
  'Krems',
];

const AVATARS = [person1, person2, person3, person4, person5, person6, person7];

const ADD_ITEM = 'ADD_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';
const CURRENT_ITEM = 'CURRENT_ITEM';

export {
  ROUTER_KEYS,
  SLIDER_DATA,
  LANGUAGES,
  PROFESSIONALS,
  LOCATIONS,
  AVATARS,
  ADD_ITEM,
  REMOVE_ITEM,
  CURRENT_ITEM,
};
