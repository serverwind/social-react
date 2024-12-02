import { setUserTC } from "./authReducer";

const initialState = {
  init: false,
};

export const appReducer = (state = initialState, action: { type: string; data: any }) => {
  switch (action.type) {
    case "SET-INIT":
      return {
        ...state,
        init: true,
      };
    default:
      return state;
  }
};

function setInitSuccessAC() {
  return { type: "SET-INIT" };
}

export const initApp = () => (dispatch) => {
  let promise = dispatch(setUserTC());

  promise.then(() => {
    dispatch(setInitSuccessAC());
  });
};
