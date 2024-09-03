let initialState = {
  messages: [
    { message: "Hello, how are you?", id: "1" },
    { message: "Thanks!", id: "2" },
  ],
  input: { text: "" },
};

function messengerReducer(state = initialState, action) {
  switch (action.type) {
    case "CHANGE-MESSENGER-INPUT":
      state.input.text = action.text;
      break;
    case "SEND-MESSAGE":
      state.messages.push({ id: action.id, message: action.message });
      state.input.text = "";
      break;
  }
  return state;
}

function sendMessageActionCreator(id, message) {
  return { type: "SEND-MESSAGE", id, message };
}

function messengerInputActionCreator(text) {
  return { type: "CHANGE-MESSENGER-INPUT", text };
}

export { messengerReducer, sendMessageActionCreator, messengerInputActionCreator };
