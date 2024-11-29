import { authUser, loginUser, logoutUser } from "../api/api";
import { stopSubmit } from "redux-form";

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

export const authReducer = (state = initialState, action: { type: string; data: any }) => {
  switch (action.type) {
    case "SET-USER-DATA":
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
};

function setUserDataAC(id, email, login, isAuth) {
  return { type: "SET-USER-DATA", data: { id, email, login, isAuth } };
}

// THUNKS

export const setUserTC = () => {
  return async (dispatch: Function) => {
    try {
      const response = await authUser();
      if (response.data.resultCode === 0) {
        dispatch(setUserDataAC(response.data.data.id, response.data.data.email, response.data.data.login, true));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const loginUserTC = (email, password, rememberMe) => {
  return async (dispatch: Function) => {
    try {
      const response = await loginUser( email, password, rememberMe );
      if (response.data.resultCode === 0) {
        dispatch(setUserTC());
      } else {
        let action = stopSubmit("login", { _error: response.data.messages[0] });
        dispatch(action);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const logoutUserTC = () => {
  return async (dispatch: Function) => {
    try {
      const response = await logoutUser();
      if (response.data.resultCode === 0) {
        dispatch(setUserDataAC( null, null, null, false ));
      }
    } catch (error) {
      console.log(error);
    }
  };
};
