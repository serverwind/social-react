import axios from "axios";

const initialState = {
  users: [
    // { name: "Emily", id: "1", friend: true },
    // { name: "Jimmy", id: "2", friend: false },
    // { name: "Sally", id: "3", friend: false },
    // { name: "Maria", id: "4", friend: true },
    // { name: "Tommy", id: "5", friend: true },
  ],
};

axios.get("https://social-network.samuraijs.com/api/1.0/users").then((response) => {
  initialState.users = response.data.items
})

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

export { usersReducer, addFriendAC, removeFriendAC };
