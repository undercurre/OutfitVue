import { SET_CURRENT } from "../constants/app";

const INITIAL_STATE = {
  current: 0,
};

export default function app(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    default:
      return state;
  }
}
