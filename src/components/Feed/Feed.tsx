import Post from "./Post/Post";

type FeedProps = {
  theme: {
    bg: string;
    text: string;
  };
  feed: {
    photos: [];
  };
  setPhotos: () => void;
};

export default function Feed(props: FeedProps) {
  debugger;
  return (
    <div className={`${props.theme.bg} ${props.theme.text} p-4`}>
      {props.feed.photos.map((photo: { urls: { regular: string }; alt_description: string; likes: number; created_at: string; id: number }) => (
        <Post src={photo.urls.regular} desc={photo.alt_description} likes={photo.likes} date={photo.created_at} key={photo.id} />
      ))}
    </div>
  );
}
