const initialState = {
  messages: [
    { message: "Hello, how are you?", id: "1", key: "1" },
    { message: "Thanks!", id: "2", key: "2" },
  ],
};

export function messengerReducer(state = initialState, action: { type: string; text: string; id: number; message: string }) {
  switch (action.type) {
    case "SEND-MESSAGE":
      return {
        ...state,
        messages: [...state.messages, { id: action.id, message: action.message }],
      };
  }
  return state;
}

export function sendMessageActionCreator(id: number, message: string) {
  return { type: "SEND-MESSAGE", id, message };
}
