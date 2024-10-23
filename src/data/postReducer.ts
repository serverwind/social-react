const initialState = {
  posts: [
    { id: "5", post: "Finished course and all practice of lessons 25-30.", likes: "5", author: "Alex Lestra", date: "1 day ago" },
    { id: "4", post: "Finished course and all practice of lessons 17-25.", likes: "10", author: "Alex Lestra", date: "2 days ago" },
    { id: "3", post: "Deployed project to Netlify.", likes: "7", author: "Alex Lestra", date: "4 days ago" },
    { id: "2", post: "Finished course and all practice of lessons 11-16.", likes: "3", author: "Alex Lestra", date: "4 days ago" },
    { id: "1", post: "Hi! This is a first post.", likes: "2", author: "Alex Lestra", date: "Last week" },
  ],
  input: { text: "" },
};

export function postReducer(state = initialState, action: { type: string; id: number; post: string; likes: number; author: string; date: string; text: string }) {
  switch (action.type) {
    case "ADD-POST":
      return {
        ...state,
        posts: [{ id: action.id, post: action.post, likes: action.likes, author: action.author, date: action.date }, ...state.posts],
        input: { ...state.input, text: "" },
      };
    case "CHANGE-TEXT":
      return {
        ...state,
        input: { ...state.input, text: action.text },
      };
    case "LIKE":
      return {
        ...state,
        posts: state.posts.map((post) => (post.id === String(action.id) ? { ...post, likes: action.likes } : post)),
      };
  }
  return state;
}

export function newPostActionCreater(id: number, post: string, likes: number, author: string, date: string) {
  return { type: "ADD-POST", id, post, likes, author, date };
}

export function stateTextActionCreator(text: string) {
  return { type: "CHANGE-TEXT", text };
}

export function likeActionCreator(id: number, likes: number) {
  return { type: "LIKE", id, likes };
}
