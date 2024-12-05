import { getFeed } from "../api/api";

const initialState = {
  photos: [],
  page: 1
};

export const feedReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET-PHOTOS":
      return {
        ...state,
        photos: [...state.photos, ...action.data],
      };
    default:
      return state;
  }
};

function setPhotosAC(data: Array<Object>) {
  return { type: "SET-PHOTOS", data };
}

export const setPhotosTC = (page) => {
  return async (dispatch: Function) => {
    try {
      const response = await getFeed(page);
      if (response.data) {
        dispatch(setPhotosAC(response.data));
      }
    } catch (error) {
      console.log(error);
    }
  };
};
