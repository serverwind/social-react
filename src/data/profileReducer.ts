import { getProfile, getStatus, updateStatus } from "../api/api";

const initialState = {
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
  status: {
    status: "My status",
  },
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET-PROFILE":
      return {
        ...state,
        profile: action.profile,
      };
    case "CHANGE-STATUS-INPUT":
      return {
        ...state,
        status: { ...state.status, input: action.status },
      };
    case "STATUS":
      return {
        ...state,
        status: { ...state.status, status: action.status },
      };
    default:
      return state;
  }
};

function setProfileAC(profile) {
  return { type: "SET-PROFILE", profile: profile };
}
export function changeStatusTextAC(status: string) {
  return { type: "CHANGE-STATUS-INPUT", status };
}

export function setStatusAC(status: string) {
  return { type: "STATUS", status };
}

// THUNKS

export const showProfileTC = (id: string) => {
  return async (dispatch: Function) => {
    try {
      const response = await getProfile(id);
      dispatch(setProfileAC(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const showStatusTC = (id: string) => {
  return async (dispatch: Function) => {
    try {
      const response = await getStatus(id);
      dispatch(setStatusAC(response.data));
    } catch (error) {
      console.log(error);
    }
  };
}

export const updateStatusTC = (status: string) => {
  return async (dispatch: Function) => {
    try {
      await updateStatus(status);
      dispatch(setStatusAC(status));
    } catch (error) {
      console.log(error);
    }
  };
}
