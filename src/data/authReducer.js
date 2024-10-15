const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
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

function setUserDataAC(id, email, login) {
  return { type: "SET-USER-DATA", data: { id, email, login } };
}

export { authReducer, setUserDataAC };
