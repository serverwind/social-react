import { useRef } from "react";

type MusicType = {
  player: {
    id: string;
    link: string;
    artist: string;
    name: string;
    duration: string;
  };
  items: {
    id: string;
    link: string;
    artist: string;
    name: string;
    duration: string;
  }[];
  music: {
    player: {
      artist: string;
      name: string;
      duration: string;
    };
    items: {
      id: string;
      link: string;
      artist: string;
      name: string;
      duration: string;
    }[];
  };
  setTrack: (id: number, link: string, artist: string, name: string, duration: string) => void;
};

function Music(props: MusicType) {
  const audioRefs = useRef({});

  function setTrack(id: number, link: string, artist: string, name: string, duration: string) {
    for (let key in audioRefs.current) {
      if (key !== id) {
        audioRefs.current[key].pause();
        audioRefs.current[key].currentTime = 0;
      }
    }

    props.setTrack(id, link, artist, name, duration);
    if (audioRefs.current[id]) {
      audioRefs.current[id].play();
    }
  }

  return (
    <section className="py-2 px-4">
      <h2>Free No Copyright Relaxing Music</h2>
      <div className="flex gap-2 items-center mb-4">
        <span>{props.music.player.name}</span>
        <span>{props.music.player.artist}</span>
        <span>0:00</span>
        <span>{props.music.player.duration}</span>
        <button className="bg-gray-200 cursor-pointer py-2 px-4">State (play/pause)</button>
      </div>
      {props.music.items.map((track) => (
        <div key={track.id}>
          <audio className="hidden" ref={(el) => (audioRefs.current[track.id] = el)} controls>
            <source src={track.link} type="audio/mpeg" />
          </audio>
          <div className="flex gap-2 items-center py-2">
            <span>{track.name}</span>
            <span>{track.artist}</span>
            <span>{track.duration}</span>
            <button onClick={() => setTrack(track.id, track.link, track.artist, track.name, track.duration)} className="bg-gray-200 cursor-pointer py-2 px-4">
              Play
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}

export { Music };
