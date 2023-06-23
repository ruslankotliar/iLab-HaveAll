import { ADD_ITEM, CURRENT_ITEM, REMOVE_ITEM } from '../../constants';

const initialState = {
  bookings: [],
  currentBooking: null,
};

const bookingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      console.log(action.payload);
      return {
        currentBooking: null,
        bookings: [...state.bookings, action.payload],
      };
    }
    case REMOVE_ITEM: {
      return {
        ...state,
        bookings: state.bookings.filter(
          (booking) => booking.date !== action.payload
        ),
      };
    }
    case CURRENT_ITEM: {
      return {
        ...state,
        currentBooking: action.payload,
      };
    }
    default:
      return state;
  }
};

export default bookingsReducer;
