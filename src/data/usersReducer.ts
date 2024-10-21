import { getUsers, followUser, unfollowUser, getMessengerChats } from "../api/api";

const initialState = {
  users: [],
  currentPage: 1,
  pageSize: 7,
  totalPages: 20,
  isLoading: false,
  inProgress: false,
};

export const usersReducer = (state = initialState, action: { type: string; id: number; users: []; currentPage: number; totalPages: number; isLoading: boolean; inProgress: boolean }) => {
  switch (action.type) {
    case "ADD-FRIEND":
      return {
        ...state,
        users: state.users.map((user: { id: number }) => (user.id === action.id ? { ...user, followed: true } : user)),
      };
    case "REMOVE-FRIEND":
      return {
        ...state,
        users: state.users.map((user: { id: number }) => (user.id === action.id ? { ...user, followed: false } : user)),
      };
    case "SET-USERS":
      return {
        ...state,
        users: action.users,
      };
    case "SET-CURRENT-PAGE":
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case "SET-TOTAL-PAGES":
      return {
        ...state,
        totalPages: action.totalPages,
      };
    case "SET-IS-LOADING":
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case "SET-IN-PROGRESS":
      return {
        ...state,
        inProgress: action.inProgress,
      };
    default:
      return state;
  }
};

// ACTION CREATORS

function addFriendAC(id: number) {
  return { type: "ADD-FRIEND", id: id };
}

function removeFriendAC(id: number) {
  return { type: "REMOVE-FRIEND", id: id };
}

export function setUsersAC(users: []) {
  return { type: "SET-USERS", users: users };
}

function setCurrentPageAC(currentPage: number) {
  return { type: "SET-CURRENT-PAGE", currentPage: currentPage };
}

function setTotalPagesAC(totalPages: number) {
  return { type: "SET-TOTAL-PAGES", totalPages: totalPages };
}

function setIsLoadingAC(value: boolean) {
  return { type: "SET-IS-LOADING", isLoading: value };
}

function setInProgressAC(value: boolean) {
  return { type: "SET-IN-PROGRESS", inProgress: value };
}

// THUNKS

export const getUsersTC = (currentPage: number, pageSize: number) => {
  return async (dispatch: Function) => {
    try {
      const response = await getUsers(currentPage, pageSize);
      dispatch(setUsersAC(response.data.items));
      dispatch(setTotalPagesAC(response.data.totalCount));
    } catch (error) {
      console.log(error);
    }
  };
};

export const changePageTC = (pageNumber: number, pageSize: number) => {
  return async (dispatch: Function) => {
    dispatch(setIsLoadingAC(true));
    try {
      const response = await getUsers(pageNumber, pageSize);
      dispatch(setCurrentPageAC(pageNumber));
      dispatch(setUsersAC(response.data.items));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setIsLoadingAC(false));
    }
  };
};

export const followUserTC = (id: number) => {
  return async (dispatch: Function) => {
    dispatch(setInProgressAC(true));
    try {
      const response = await followUser(id);
      response.data.resultCode === 0 ? dispatch(addFriendAC(id)) : null;
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setInProgressAC(false));
      dispatch(addFriendAC(id)); //temp, just because API server 403
    }
  };
};

export const unfollowUserTC = (id: number) => {
  return async (dispatch: Function) => {
    dispatch(setInProgressAC(true));
    try {
      const response = await unfollowUser(id);
      response.data.resultCode === 0 ? dispatch(removeFriendAC(id)) : null;
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setInProgressAC(false));
      dispatch(removeFriendAC(id)); //temp, just because API server 403
    }
  };
};

export const showChatsTC = () => {
  return async (dispatch: Function) => {
    try {
      const response = await getMessengerChats();
      dispatch(setUsersAC(response.data.items));
    } catch (error) {
      console.log(error);
    }
  };
};

