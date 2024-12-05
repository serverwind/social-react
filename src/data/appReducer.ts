import { setUserTC } from "./authReducer";
import { setPhotosTC } from "./feedReducer";

const initialState = {
  initApp: false,
  initFeed: false,
};

export const appReducer = (state = initialState, action: { type: string; data: any }) => {
  switch (action.type) {
    case "SET-INIT-APP":
      return {
        ...state,
        initApp: true,
      };
    case "SET-INIT-FEED":
      return {
        ...state,
        initFeed: true,
      };
    default:
      return state;
  }
};

function setInitAppSuccessAC() {
  return { type: "SET-INIT-APP" };
}

function setInitFeedSuccessAC() {
  return { type: "SET-INIT-FEED" };
}

export const initApp = () => (dispatch) => {
  let promise = dispatch(setUserTC());

  promise.then(() => {
    dispatch(setInitAppSuccessAC());
  });
};

export const initFeed = () => (dispatch) => {
  let promise = dispatch(setPhotosTC());

  promise.then(() => {
    dispatch(setInitFeedSuccessAC());
  });
};
