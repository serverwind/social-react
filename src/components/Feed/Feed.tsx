import { useState } from "react";
import Post from "./Post/Post";

type FeedProps = {
  theme: {
    bg: string;
    text: string;
  };
  feed: {
    photos: [];
  };
  setPhotos: (page: number) => void;
};

export default function Feed(props: FeedProps) {

  // function loadPhotos() {
  //   props.setPhotos(2);
  // }

  return (
    <div className={`${props.theme.bg} ${props.theme.text} p-4 flex flex-col lg:grid lg:grid-cols-3 gap-2 justify-center items-center`}>
      {props.feed.photos.map((photo: { urls: { regular: string }; alt_description: string; likes: number; created_at: string; id: number }) => (
        <Post src={photo.urls.regular} desc={photo.alt_description} likes={photo.likes} date={photo.created_at} key={photo.id} id={photo.id} />
      ))}
      <button >Load more</button>
    </div>
  );
}
