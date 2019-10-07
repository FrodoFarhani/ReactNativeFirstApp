import {
  ADD_PLACE,
  DELETE_PLACE,
  DESELECT_PLACE,
  SELECT_PLACE,
} from '../actions/actionTypes';

const initialState = {
  places: [],
  selectedPlace: null,
};
// if we do not have any state this will use the initialState
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        //...state grab all properties of prev state and adds it to new obj
        //by this, we keep our old state that we need
        ...state,
        places: state.places.concat({
          key: Math.random().toString(),
          value: action.placeName,
          image: {
            uri:
              'https://bigmemes.funnyjunk.com/pictures/A+beautiful+scene_30057c_7120462.jpg',
          },
        }),
      };
    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(place => {
          return place.key !== state.selectedPlace.key;
        }),
        selectedPlace: null,
      };
    case SELECT_PLACE:
      return {
        ...state,
        selectedPlace: state.places.find(place => {
          return place.key === action.placeKey;
        }),
      };
    case DESELECT_PLACE:
      return {
        ...state,
        selectedPlace: null,
      };

    default:
      return state;
  }
};
export default reducer;
