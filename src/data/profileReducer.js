let initialState = {
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET-PROFILE":
      return {
        ...state,
        profile: action.profile,
      };
    default:
      return state;
  }
};

function setProfileAC(profile) {
  return { type: "SET-PROFILE", profile: profile };
}

export { profileReducer, setProfileAC };
