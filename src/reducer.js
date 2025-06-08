import { combineReducers } from "redux";

const initialState = {
  name: "",
  email: "",
};

const valueReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATEVALUE":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };

    default:
      return state;
  }
};

const combined = combineReducers({
  values: valueReducer,
});
export default combined;
