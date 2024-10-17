const initialState = {
  users: [],
  currentPage: 1,
  pageSize: 7,
  totalPages: 20,
  isLoading: false,
  inProgress: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD-FRIEND":
      return {
        ...state,
        users: state.users.map((user) => (user.id === action.id ? { ...user, followed: true } : user)),
      };
    case "REMOVE-FRIEND":
      return {
        ...state,
        users: state.users.map((user) => (user.id === action.id ? { ...user, followed: false } : user)),
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

function addFriendAC(id) {
  return { type: "ADD-FRIEND", id: id };
}

function removeFriendAC(id) {
  return { type: "REMOVE-FRIEND", id: id };
}

function setUsersAC(users) {
  return { type: "SET-USERS", users: users };
}

function setCurrentPageAC(currentPage) {
  return { type: "SET-CURRENT-PAGE", currentPage: currentPage };
}

function setTotalPagesAC(totalPages) {
  return { type: "SET-TOTAL-PAGES", totalPages: totalPages };
}

function setIsLoadingAC(value) {
  return { type: "SET-IS-LOADING", isLoading: value };
}

function setInProgressAC(value) {
  return { type: "SET-IN-PROGRESS", inProgress: value };
}

export { usersReducer, addFriendAC, removeFriendAC, setUsersAC, setCurrentPageAC, setTotalPagesAC, setIsLoadingAC, setInProgressAC };
