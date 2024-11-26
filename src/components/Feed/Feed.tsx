type FeedProps = {
  theme: {
    bg: string;
    text: string;
  };
  setPhotos: () => void;
}

export default function Feed(props: FeedProps) {
  props.setPhotos();
  return <div className={ `${props.theme.bg} ${props.theme.text} p-4` }>Feed</div>;
}
