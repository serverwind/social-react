const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action: { type: string; data: any }) => {
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

export { authReducer, setUserDataAC };
