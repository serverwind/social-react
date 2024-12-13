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
        photos: [...state.photos, ...action.photos],
      };
    default:
      return state;
  }
};

function setPhotosAC(photos: Array<Object>) {
  return { type: "SET-PHOTOS", photos };
}

export const setPhotosTC = (page: number = 1) => {
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
