const initialState = {
  users: [
    { name: "Emily", id: "1" },
    { name: "Jimmy", id: "2" },
    { name: "Sally", id: "3" },
    { name: "Maria", id: "4" },
    { name: "Tommy", id: "5" },
  ],
  friends: [
    { name: "Emily", id: "1" },
    { name: "Jimmy", id: "2" },
    { name: "Sally", id: "3" },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export { usersReducer };
