const initialState = {
  items: [
    { id: 1, link: "https://www.no-copyright-music.com/wp-content/uploads/2021/09/DeeperMeaning.mp3", artist: "Liborio Conti", name: "Deep Meaning", duration: "7:11" },
    { id: 2, link: "https://www.no-copyright-music.com/wp-content/uploads/2021/09/BeachSerenity.mp3", name: "Beach Serenity", artist: "Liborio Conti", duration: "17:54" },
    { id: 3, link: "https://www.no-copyright-music.com/wp-content/uploads/2021/09/Cinelax.mp3", name: "Cinelax", artist: "Liborio Conti", duration: "6:06" },
  ],
  player: {
    id: 0,
    link: "",
    artist: "",
    name: "",
    duration: "",
  },
};

export const musicReducer = (state = initialState, action: { type: string; id: number; link: string; artist: string; name: string; duration: string }) => {
  switch (action.type) {
    case "SET-TRACK":
      return {
        ...state,
        player: {
          id: action.id,
          link: action.link,
          artist: action.artist,
          name: action.name,
          duration: action.duration,
        },
      };
    default:
      return state;
  }
};

export function setTrackAC(id: number, link: string, artist: string, name: string, duration: string) {
  return { type: "SET-TRACK", id, link, artist, name, duration };
}
