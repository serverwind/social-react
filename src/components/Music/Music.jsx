function Music(props) {
  return (
    <section className="py-2 px-4">
      <div className="flex gap-2 items-center mb-4">
        <span>Name</span>
        <span>Artist</span>
        <span>0:00</span>
        <span>5:00</span>
        <button className="bg-gray-200 cursor-pointer py-2 px-4">State (play/pause)</button>
      </div>
      {props.music.map((track) => (
        <>
          <audio className="hidden" key={track.id} controls>
            <source src={track.link} type="audio/mpeg" />
          </audio>
          <div className="flex gap-2 items-center py-2">
            <span>{track.name}</span>
            <span>{track.artist}</span>
            <span>{track.duration}</span>
            <button className="bg-gray-200 cursor-pointer py-2 px-4">Play</button>
          </div>
        </>
      ))}
    </section>
  );
}

export { Music };
