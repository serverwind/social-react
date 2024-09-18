function Music(props) {
  return (
    <section>
      {props.music.map((track) => (
        <audio key={track.id} controls>
          <source src={track.link} type="audio/mpeg" />
        </audio>
      ))}
    </section>
  );
}

export { Music };
