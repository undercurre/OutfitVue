import {
  SET_CURRENT,
  SET_NAV_TITLE,
  SET_RIGHT_CONTENT,
} from "../constants/app";

const INITIAL_STATE = {
  title: "默认标题",
  rightContent: null,
  current: 0,
};

export default function app(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case SET_NAV_TITLE:
      return { ...state, title: action.payload };
    case SET_RIGHT_CONTENT:
      return { ...state, rightContent: action.payload };
    default:
      return state;
  }
}
