const initialState = {
  items: [
    { id: 1, link: "https://www.no-copyright-music.com/wp-content/uploads/2021/09/DeeperMeaning.mp3", artist: "Liborio Conti", name: "Deep Meaning", duration: "7:11" },
    { id: 2, link: "https://www.no-copyright-music.com/wp-content/uploads/2021/09/BeachSerenity.mp3", name: "Beach Serenity", artist: "Liborio Conti", duration: "17:54"},
    { id: 3, link: "https://www.no-copyright-music.com/wp-content/uploads/2021/09/Cinelax.mp3", name: "Cinelax", artist: "Liborio Conti", duration: "6:06"},
  ],
  player: {
    id: 1,
    link: "https://www.no-copyright-music.com/wp-content/uploads/2021/09/DeeperMeaning.mp3",
    artist: "Liborio Conti",
    name: "Deep Meaning",
    duration: "7:11",
    status: false,
  },
};

const musicReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET-PLAYING":
      return {
        ...state,
        player: {
          ...state.player,
          id: action.id,
          link: action.link,
          artist: action.artist,
          name: action.name,
          duration: action.duration,
          status: action.status,
        }
      };
    default:
      return state;
  }
};

function setPlayingAC(id, status, link, artist, name, duration) {
  return { type: "SET-PLAYING", id: id, status: status, link: link, artist: artist, name: name, duration: duration };
}

export { musicReducer, setPlayingAC };
