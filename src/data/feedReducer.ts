import { getFeed } from "../api/api";

const initialState = {
  photos: [],
};

export const feedReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET-PHOTOS":
      return {
        ...state,
        photos: action.data,
      };
    default:
      return state;
  }
};

function setPhotosAC(data: Array<Object>) {
  return { type: "SET-PHOTOS", data };
}

// THUNKS

export const setPhotosTC = () => {
  return async (dispatch: Function) => {
    try {
      const response = await getFeed();
      if (response.data) {
        dispatch(setPhotosAC(response.data));
      }
    } catch (error) {
      console.log(error);
    }
  };
};
