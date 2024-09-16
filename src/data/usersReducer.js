const initialState = {
  users: [
    // { name: "Emily", id: "1", friend: true },
    // { name: "Jimmy", id: "2", friend: false },
    // { name: "Sally", id: "3", friend: false },
    // { name: "Maria", id: "4", friend: true },
    // { name: "Tommy", id: "5", friend: true },
  ],
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

export { usersReducer, addFriendAC, removeFriendAC, setUsersAC };
