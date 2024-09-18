const initialState = {
  items: [
    { id: 1, link: "https://www.no-copyright-music.com/wp-content/uploads/2021/09/DeeperMeaning.mp3", artist: "Liborio Conti", name: "Deep Meaning", duration: "7:11" },
    { id: 2, link: "https://www.no-copyright-music.com/wp-content/uploads/2021/09/BeachSerenity.mp3", name: "Beach Serenity", artist: "Liborio Conti", duration: "17:54" },
    { id: 3, link: "https://www.no-copyright-music.com/wp-content/uploads/2021/09/Cinelax.mp3", name: "Cinelax", artist: "Liborio Conti", duration: "6:06" },
  ],
};

const musicReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export { musicReducer };
