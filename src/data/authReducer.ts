import { loginUser } from "../api/api";

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
        isAuth: true,
      };
    default:
      return state;
  }
};

function setUserDataAC(id: number, email: string, login: string) {
  return { type: "SET-USER-DATA", data: { id, email, login } };
}

// THUNKS

export const loginUserTC = () => {
  return async (dispatch: Function) => {
    try {
      const response = await loginUser();
      if (response.data.resultCode === 0) {
        dispatch(setUserDataAC(response.data.data.id, response.data.data.email, response.data.data.login));
      }
    } catch (error) {
      console.log(error);
    }
  };
};
