function Music(props) {
  function playMusic(id, status, link, artist, name, duration) {
    props.setPlaying(id, status, link, artist, name, duration);
  }
  return (
    <section className="py-2 px-4">
      <div className="flex gap-2 items-center mb-4">
        <span>{props.music.player.name}</span>
        <span>{props.music.player.artist}</span>
        <span>0:00</span>
        <span>{props.music.player.duration}</span>
        <button className="bg-gray-200 cursor-pointer py-2 px-4">State (play/pause)</button>
      </div>
      {props.music.items.map((track) => (
        <>
          <audio className="hidden" key={track.id} controls>
            <source src={track.link} type="audio/mpeg" />
          </audio>
          <div className="flex gap-2 items-center py-2">
            <span>{track.name}</span>
            <span>{track.artist}</span>
            <span>{track.duration}</span>
            <button onClick={() => playMusic(track.id, true, track.link, track.artist, track.name, track.duration)} className="bg-gray-200 cursor-pointer py-2 px-4">Play</button>
          </div>
        </>
      ))}
    </section>
  );
}

export { Music };
