import { setUserTC } from "./authReducer";

const initialState = {
  initApp: false,
};

export const appReducer = (state = initialState, action: { type: string; data: any }) => {
  switch (action.type) {
    case "SET-INIT-APP":
      return {
        ...state,
        initApp: true,
      };
    default:
      return state;
  }
};

function setInitAppSuccessAC() {
  return { type: "SET-INIT-APP" };
}

export const initApp = () => (dispatch) => {
  let promise = dispatch(setUserTC());

  promise.then(() => {
    dispatch(setInitAppSuccessAC());
  });
};
