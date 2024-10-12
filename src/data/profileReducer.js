let initialState = {
  profile: {
    aboutMe: "Frontend Developer",
    contacts: {
      website: "serverwind.github.io",
      github: "github.com/serverwind",
    },
    lookingForAJob: true,
    lookingForAJobDescription: "",
    fullName: "Alex Lestra",
    userId: 0,
    photos: {
      small: "",
      large: "",
    },
  },
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
